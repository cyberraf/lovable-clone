"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, Crown, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: 0,
    period: "forever",
    description: "Perfect for trying out the platform",
    features: [
      "5 AI messages per day",
      "30 messages per month",
      "Basic templates",
      "Community support",
      "Export to GitHub"
    ],
    limitations: [
      "Limited AI generations",
      "Basic features only",
      "No priority support"
    ],
    cta: "Start Free",
    popular: false,
    href: "/auth/signin"
  },
  {
    name: "Starter",
    price: 20,
    period: "month",
    description: "Great for individual developers",
    features: [
      "Unlimited AI messages",
      "All templates",
      "Visual editor",
      "Database integration",
      "One-click deployment",
      "GitHub sync",
      "Email support"
    ],
    limitations: [
      "5 active projects",
      "Standard deployment"
    ],
    cta: "Start Starter",
    popular: false,
    href: "/auth/signin"
  },
  {
    name: "Launch",
    price: 50,
    period: "month",
    description: "Perfect for growing teams",
    features: [
      "Everything in Starter",
      "20 active projects",
      "Team collaboration",
      "Custom domains", 
      "Priority deployment",
      "Advanced integrations",
      "Priority support"
    ],
    limitations: [
      "Up to 5 team members"
    ],
    cta: "Start Launch",
    popular: true,
    href: "/auth/signin"
  },
  {
    name: "Scale",
    price: 100,
    period: "month",
    description: "For scaling businesses",
    features: [
      "Everything in Launch",
      "Unlimited projects",
      "Unlimited team members",
      "Advanced security",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Enterprise features"
    ],
    limitations: [],
    cta: "Start Scale",
    popular: false,
    href: "/auth/signin"
  }
]

export function Pricing() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Crown className="mr-2 h-4 w-4" />
            Pricing
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your needs. Start free and upgrade as you grow.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-4 lg:gap-4">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    <Sparkles className="mr-1 h-3 w-3" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <li key={limitIndex} className="flex items-center gap-3 opacity-60">
                      <div className="h-4 w-4 rounded-full border border-muted-foreground/30 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Link href={plan.href} className="w-full">
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? 
          </p>
          <Link href="/contact">
            <Button variant="outline">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}