"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Sparkles, 
  Plus, 
  FileText, 
  ArrowRight,
  Zap,
  Code,
  Palette
} from "lucide-react"

const quickStartOptions = [
  {
    icon: Sparkles,
    title: "Start with AI",
    description: "Describe your app idea and let AI generate the complete code",
    action: "Create with AI",
    href: "/create",
    color: "bg-gradient-to-br from-purple-500 to-blue-600",
    popular: true
  },
  {
    icon: FileText,
    title: "Use a Template",
    description: "Pick from our collection of professional templates",
    action: "Browse Templates",
    href: "/templates",
    color: "bg-gradient-to-br from-blue-500 to-cyan-600",
    popular: false
  },
  {
    icon: Code,
    title: "Import from GitHub",
    description: "Import an existing repository to continue development",
    action: "Import Project",
    href: "/import",
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
    popular: false
  }
]

export function QuickStart() {
  return (
    <div className="space-y-8">
      {/* Welcome message */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold">Welcome to Lovable Clone!</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Let's build something amazing together. Choose how you'd like to get started.
        </p>
      </div>

      {/* Quick start options */}
      <div className="grid gap-6 md:grid-cols-3">
        {quickStartOptions.map((option, index) => (
          <Card key={index} className="group relative overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            {option.popular && (
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-yellow-500 text-yellow-50">
                  <Zap className="h-3 w-3 mr-1" />
                  Popular
                </Badge>
              </div>
            )}
            
            <div className={`absolute inset-0 ${option.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
            
            <CardHeader className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div className={`h-10 w-10 rounded-lg ${option.color} flex items-center justify-center text-white`}>
                  <option.icon className="h-5 w-5" />
                </div>
              </div>
              <CardTitle className="text-xl">{option.title}</CardTitle>
              <CardDescription className="text-base">
                {option.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative">
              <Link href={option.href}>
                <Button className="w-full group">
                  {option.action}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional resources */}
      <div className="bg-muted/30 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Need help getting started?</h3>
        <div className="flex flex-wrap gap-4">
          <Link href="/docs">
            <Button variant="outline" size="sm">
              📚 Documentation
            </Button>
          </Link>
          <Link href="/examples">
            <Button variant="outline" size="sm">
              💡 Example Projects
            </Button>
          </Link>
          <Link href="/community">
            <Button variant="outline" size="sm">
              👥 Join Community
            </Button>
          </Link>
          <Link href="/help">
            <Button variant="outline" size="sm">
              ❓ Get Help
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}