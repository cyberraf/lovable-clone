"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Wand2, Rocket } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Describe Your App",
    description: "Simply tell our AI what you want to build. Describe the features, design preferences, and functionality in natural language.",
    example: "\"Create a task management app with user authentication, project organization, and real-time collaboration.\""
  },
  {
    step: "02", 
    icon: Wand2,
    title: "AI Generates Everything",
    description: "Our AI analyzes your request and generates complete application code, including frontend, backend, database schema, and API endpoints.",
    example: "Complete React frontend, Node.js backend, database models, authentication system, and responsive design."
  },
  {
    step: "03",
    icon: Rocket,
    title: "Deploy & Iterate",
    description: "Review your app in real-time preview, make visual adjustments, and deploy to production with one click. Continue iterating with AI assistance.",
    example: "Live app running at your custom domain, ready for users, with continuous deployment pipeline."
  }
]

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
            From idea to app in three simple steps
          </h2>
          <p className="text-xl text-muted-foreground">
            Our AI-powered platform makes app development as easy as having a conversation.
          </p>
        </div>
        
        <div className="grid gap-8 md:gap-12 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border transform translate-x-4 z-0">
                  <div className="absolute right-0 top-1/2 transform translate-y-[-50%] w-2 h-2 bg-border rounded-full"></div>
                </div>
              )}
              
              <Card className="relative z-10 border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-sm font-mono text-muted-foreground">{step.step}</span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  
                  <div className="bg-muted/50 rounded-md p-3">
                    <p className="text-sm text-muted-foreground italic">
                      {step.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}