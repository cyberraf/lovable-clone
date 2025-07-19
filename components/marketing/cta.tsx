"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useSession } from "next-auth/react"

export function CTA() {
  const { data: session } = useSession()

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-blue-600 px-8 py-16 text-center text-white md:px-16 md:py-24">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            </div>
            
            <div className="relative">
              <div className="flex justify-center mb-6">
                <Sparkles className="h-12 w-12 animate-pulse" />
              </div>
              
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Ready to build your next big idea?
              </h2>
              
              <p className="mx-auto max-w-2xl text-lg opacity-90 sm:text-xl mb-10">
                Join thousands of creators who are building amazing applications with AI. 
                Start free, no credit card required.
              </p>
              
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href={session ? "/dashboard" : "/auth/signin"}>
                  <Button 
                    size="xl" 
                    variant="secondary"
                    className="group bg-white text-primary hover:bg-white/90"
                  >
                    {session ? "Go to Dashboard" : "Start Building for Free"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                
                <Button 
                  size="xl" 
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  View Examples
                </Button>
              </div>
              
              <div className="mt-12 flex items-center justify-center gap-8 text-sm opacity-75">
                <div>✨ No setup required</div>
                <div>🚀 Deploy in seconds</div>
                <div>💝 Free forever plan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}