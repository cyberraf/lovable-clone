"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Sparkles, Zap, Code, Globe } from "lucide-react"
import { useSession } from "next-auth/react"

export function Hero() {
  const { data: session } = useSession()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-8 px-4 py-2">
            <Sparkles className="mr-2 h-4 w-4" />
            AI-Powered Development Platform
          </Badge>
          
          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Build Apps with
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent"> AI Magic</span>
          </h1>
          
          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground sm:text-2xl">
            Transform your ideas into full-stack applications in minutes. No code required. 
            Just describe what you want, and watch AI build it for you.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={session ? "/dashboard" : "/auth/signin"}>
              <Button size="xl" className="group">
                {session ? "Go to Dashboard" : "Start Building"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button variant="outline" size="xl" className="group">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 flex items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              <span className="text-sm">Full-Stack</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <span className="text-sm">Instant Deploy</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span className="text-sm">Production Ready</span>
            </div>
          </div>
        </div>
        
        {/* Hero Image/Demo */}
        <div className="mt-20 mx-auto max-w-6xl">
          <div className="relative rounded-xl border bg-background/50 p-2 shadow-2xl backdrop-blur">
            <div className="rounded-lg bg-gradient-to-br from-muted/50 to-muted overflow-hidden">
              <div className="aspect-video w-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-primary-foreground animate-pulse" />
                  </div>
                  <p className="text-lg font-medium">Interactive Demo Coming Soon</p>
                  <p className="text-sm text-muted-foreground">
                    See how AI builds your app in real-time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}