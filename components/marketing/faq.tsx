"use client"

import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How does the AI actually work?",
    answer: "Our AI uses advanced language models to understand your natural language descriptions and convert them into working code. It analyzes your requirements, selects appropriate frameworks and libraries, generates the frontend and backend code, sets up databases, and creates deployment configurations - all automatically."
  },
  {
    question: "Do I need coding experience to use this platform?",
    answer: "Not at all! Our platform is designed for everyone, from non-technical creators to experienced developers. You simply describe what you want in plain English, and our AI handles all the technical implementation. However, having some technical knowledge can help you make more specific requests and customizations."
  },
  {
    question: "Who owns the code that's generated?",
    answer: "You own 100% of the code generated for your projects. You can export it to GitHub, download it as a ZIP file, or deploy it anywhere you want. There are no licensing restrictions or vendor lock-in - the code is yours to use as you see fit."
  },
  {
    question: "What technologies and frameworks are supported?",
    answer: "We support popular modern frameworks including React, Next.js, Vue.js, Node.js, Python, and more. For databases, we integrate with PostgreSQL, MongoDB, Supabase, and Firebase. We're constantly adding support for new technologies based on user demand."
  },
  {
    question: "Can I collaborate with my team?",
    answer: "Yes! Our Launch and Scale plans include real-time collaboration features. Team members can work together on projects, make live edits, leave comments, and share access. You can also set different permission levels for different team members."
  },
  {
    question: "How does deployment work?",
    answer: "Deployment is one-click easy! We automatically configure and deploy your applications to our hosting infrastructure. You can also export your code and deploy it to your preferred platform like Vercel, Netlify, or AWS. Custom domains are supported on paid plans."
  },
  {
    question: "Is there a free plan?",
    answer: "Yes! Our free plan includes 5 AI messages per day (30 per month), access to basic templates, and the ability to export your code to GitHub. It's perfect for trying out the platform and building simple projects."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer different levels of support based on your plan. Free users get community support, Starter users get email support, and Launch/Scale users get priority support. Scale users also get dedicated support and SLA guarantees."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely! You can cancel your subscription at any time from your account settings. Your projects and code remain accessible, and you can continue using the free plan features. There are no long-term contracts or cancellation fees."
  }
]

export function FAQ() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <HelpCircle className="mr-2 h-4 w-4" />
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our AI-powered app building platform.
          </p>
        </div>
        
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}