"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Calendar,
  FileText,
  MessageCircle,
  Camera,
  Music,
  ArrowRight
} from "lucide-react"

const templates = [
  {
    icon: ShoppingCart,
    title: "E-commerce Store",
    description: "Complete online store with product catalog, shopping cart, and payment integration.",
    tags: ["React", "Stripe", "Inventory"],
    popular: true
  },
  {
    icon: Users,
    title: "Social Platform",
    description: "Social networking app with user profiles, posts, comments, and real-time messaging.",
    tags: ["Social", "Real-time", "Auth"],
    popular: false
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Business intelligence dashboard with charts, KPIs, and data visualization.",
    tags: ["Charts", "Data", "Admin"],
    popular: true
  },
  {
    icon: Calendar,
    title: "Event Management",
    description: "Event planning and management system with bookings, schedules, and notifications.",
    tags: ["Events", "Calendar", "Booking"],
    popular: false
  },
  {
    icon: FileText,
    title: "Content Management",
    description: "CMS for blogs and content sites with editor, SEO tools, and publishing workflow.",
    tags: ["CMS", "Blog", "SEO"],
    popular: false
  },
  {
    icon: MessageCircle,
    title: "Customer Support",
    description: "Help desk system with ticket management, live chat, and knowledge base.",
    tags: ["Support", "Chat", "Tickets"],
    popular: true
  }
]

export function Templates() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="flex items-center justify-between mb-16">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">
              Templates
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
              Start with proven templates
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose from our collection of professionally designed templates or describe your own idea.
            </p>
          </div>
          
          <Link href="/templates" className="hidden md:block">
            <Button variant="outline">
              View All Templates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <template.icon className="h-6 w-6" />
                  </div>
                  {template.popular && (
                    <Badge variant="secondary" className="text-xs">
                      Popular
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{template.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {template.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Use Template
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 md:hidden">
          <Link href="/templates">
            <Button variant="outline">
              View All Templates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}