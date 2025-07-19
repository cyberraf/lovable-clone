"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Crown, Zap, TrendingUp, Calendar } from "lucide-react"
import { ExtendedUser } from "@/types"

interface UsageStatsProps {
  user: ExtendedUser
}

const planLimits = {
  FREE: { credits: 100, projects: 3 },
  STARTER: { credits: 1000, projects: 10 },
  LAUNCH: { credits: 5000, projects: 50 },
  SCALE: { credits: 20000, projects: 200 },
  TEAMS: { credits: 50000, projects: 500 },
}

export function UsageStats({ user }: UsageStatsProps) {
  const planLimit = planLimits[user.plan] || planLimits.FREE
  const creditsPercentage = (user.credits / planLimit.credits) * 100

  return (
    <div className="space-y-6">
      {/* Credits Card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            Credits
          </CardTitle>
          <CardDescription>
            AI generation credits remaining
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{user.credits} remaining</span>
              <span className="text-muted-foreground">{planLimit.credits} total</span>
            </div>
            <Progress value={creditsPercentage} className="h-2" />
          </div>
          
          {user.credits < 10 && (
            <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                ⚠️ Running low on credits
              </p>
            </div>
          )}
          
          <Link href="/pricing">
            <Button variant="outline" size="sm" className="w-full">
              <Crown className="h-4 w-4 mr-2" />
              Upgrade Plan
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Plan Card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Crown className="h-5 w-5 text-primary" />
            Current Plan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Badge variant="secondary" className="text-lg px-3 py-1">
            {user.plan}
          </Badge>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Credits</span>
              <span>{planLimit.credits.toLocaleString()}/month</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Projects</span>
              <span>Up to {planLimit.projects}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Support</span>
              <span>{user.plan === 'FREE' ? 'Community' : 'Priority'}</span>
            </div>
          </div>
          
          {user.plan === 'FREE' && (
            <Link href="/pricing">
              <Button size="sm" className="w-full">
                Upgrade Now
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            This Month
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Projects created</span>
              <span className="font-medium">0</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Credits used</span>
              <span className="font-medium">0</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Deployments</span>
              <span className="font-medium">0</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Member Since */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Member since</p>
              <p className="text-xs text-muted-foreground">
                {new Date(user.createdAt).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}