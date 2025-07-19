"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Activity, 
  Code, 
  Rocket, 
  Download, 
  MessageSquare,
  Clock
} from "lucide-react"
import { formatRelativeTime } from "@/lib/utils"
import { UsageHistory } from "@prisma/client"

interface RecentActivityProps {
  activities: UsageHistory[]
}

const activityIcons = {
  GENERATE_CODE: Code,
  DEPLOY_PROJECT: Rocket,
  CREATE_PROJECT: Code,
  EXPORT_CODE: Download,
  AI_CHAT: MessageSquare,
}

const activityLabels = {
  GENERATE_CODE: "Generated code",
  DEPLOY_PROJECT: "Deployed project",
  CREATE_PROJECT: "Created project",
  EXPORT_CODE: "Exported code",
  AI_CHAT: "AI conversation",
}

export function RecentActivity({ activities }: RecentActivityProps) {
  if (activities.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Recent Activity
          </CardTitle>
          <CardDescription>Your recent actions will appear here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Clock className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>No activity yet</p>
            <p className="text-sm">Start building to see your activity here</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Recent Activity
        </CardTitle>
        <CardDescription>Your recent actions and usage</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const IconComponent = activityIcons[activity.action] || Code
            const label = activityLabels[activity.action] || activity.action
            
            return (
              <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg border bg-muted/30">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <IconComponent className="h-4 w-4 text-primary" />
                </div>
                
                <div className="flex-1">
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatRelativeTime(activity.createdAt)}
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  {activity.tokens > 0 && (
                    <Badge variant="outline" className="text-xs">
                      {activity.tokens} tokens
                    </Badge>
                  )}
                  <Badge variant="secondary" className="text-xs">
                    -{activity.credits} credits
                  </Badge>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}