import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import OpenAI from "openai"
import { AIGenerationRequest, AIGenerationResponse } from "@/types"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body: AIGenerationRequest = await req.json()
    const { prompt, type, framework = "react", features = [], styling = "tailwind" } = body

    // Check user credits
    const user = await db.user.findUnique({
      where: { id: session.user.id },
      select: { credits: true, plan: true }
    })

    if (!user || user.credits < 1) {
      return NextResponse.json({ 
        error: "Insufficient credits", 
        success: false 
      }, { status: 402 })
    }

    // Generate system prompt
    const systemPrompt = `You are an expert full-stack developer. Generate complete, production-ready code based on user requirements.

Requirements:
- Project type: ${type}
- Framework: ${framework}
- Styling: ${styling}
- Features: ${features.join(", ")}

Return a JSON object with the following structure:
{
  "files": [
    {
      "filename": "string",
      "content": "string", 
      "language": "string",
      "path": "string"
    }
  ],
  "packageJson": "string",
  "readme": "string"
}

Generate modern, clean, and well-structured code with proper TypeScript types, error handling, and best practices.`

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 4000,
    })

    const generatedContent = completion.choices[0]?.message?.content
    if (!generatedContent) {
      throw new Error("No content generated")
    }

    // Parse the generated JSON
    let parsedContent
    try {
      parsedContent = JSON.parse(generatedContent)
    } catch (error) {
      throw new Error("Invalid JSON response from AI")
    }

    // Create project in database
    const project = await db.project.create({
      data: {
        name: `Generated ${type}`,
        description: prompt.slice(0, 200),
        type: type.toUpperCase() as any,
        prompt,
        generatedCode: generatedContent,
        packageJson: parsedContent.packageJson,
        framework,
        aiModel: "gpt-4",
        tokens: completion.usage?.total_tokens || 0,
        userId: session.user.id,
        status: "READY"
      }
    })

    // Create project files
    if (parsedContent.files) {
      await Promise.all(
        parsedContent.files.map((file: any) =>
          db.projectFile.create({
            data: {
              filename: file.filename,
              content: file.content,
              language: file.language,
              path: file.path,
              size: file.content.length,
              projectId: project.id,
            }
          })
        )
      )
    }

    // Deduct credits and track usage
    await Promise.all([
      db.user.update({
        where: { id: session.user.id },
        data: { credits: { decrement: 1 } }
      }),
      db.usageHistory.create({
        data: {
          action: "GENERATE_CODE",
          tokens: completion.usage?.total_tokens || 0,
          credits: 1,
          userId: session.user.id,
        }
      })
    ])

    const response: AIGenerationResponse = {
      success: true,
      projectId: project.id,
      files: parsedContent.files,
      tokens: completion.usage?.total_tokens
    }

    return NextResponse.json(response)

  } catch (error: any) {
    console.error("Generation error:", error)
    
    const response: AIGenerationResponse = {
      success: false,
      error: error.message || "Failed to generate code"
    }

    return NextResponse.json(response, { status: 500 })
  }
}