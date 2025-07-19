"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  Brain, 
  Code, 
  Palette, 
  Database, 
  Shield, 
  Rocket,
  Users,
  GitBranch,
  Smartphone
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Generation",
    description: "Describe your app in natural language and watch AI generate complete, production-ready code instantly."
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Get complete applications with frontend, backend, database, and API endpoints all generated automatically."
  },
  {
    icon: Palette,
    title: "Visual Editor",
    description: "Make real-time visual adjustments to your app's design and functionality without writing code."
  },
  {
    icon: Database,
    title: "Database Integration",
    description: "Seamlessly connect with databases like Supabase for authentication and data management."
  },
  {
    icon: Rocket,
    title: "One-Click Deployment",
    description: "Deploy your applications instantly to production with built-in hosting and CI/CD."
  },
  {
    icon: GitBranch,
    title: "GitHub Integration",
    description: "Export your code to GitHub repositories and maintain version control effortlessly."
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description: "Work together with your team in real-time with live editing and commenting features."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built with security best practices, SOC 2 compliance, and enterprise-grade protection."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "All generated apps are mobile-first and responsive, working perfectly on any device."
  }
]

export function Features() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
            Everything you need to build amazing apps
          </h2>
          <p className="text-xl text-muted-foreground">
            Our AI-powered platform provides all the tools and features you need to go from idea to production in minutes.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-none bg-muted/30 hover:bg-muted/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}