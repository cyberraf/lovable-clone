"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { 
  Globe, 
  Code, 
  Calendar, 
  MoreVertical,
  Play,
  GitBranch,
  Download
} from "lucide-react"
import { formatRelativeTime } from "@/lib/utils"
import { ExtendedProject } from "@/types"

interface ProjectGridProps {
  projects: (ExtendedProject & { _count: { files: number } })[]
}

const projectTypeIcons = {
  WEBAPP: Globe,
  WEBSITE: Globe,
  DASHBOARD: Code,
  MOBILE_APP: Code,
  API: Code,
  COMPONENT: Code,
}

const statusColors = {
  DRAFT: "bg-gray-500",
  GENERATING: "bg-yellow-500 animate-pulse",
  READY: "bg-green-500",
  DEPLOYED: "bg-blue-500",
  ERROR: "bg-red-500",
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Projects</h2>
        <Link href="/create">
          <Button>Create New Project</Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const IconComponent = projectTypeIcons[project.type] || Code
          
          return (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold truncate max-w-[150px]">
                          {project.name}
                        </h3>
                        <div 
                          className={`w-2 h-2 rounded-full ${statusColors[project.status]}`}
                          title={project.status}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {project.framework || "React"}
                      </p>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="pb-3">
                {project.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {project.description}
                  </p>
                )}

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Code className="h-3 w-3" />
                    {project._count.files} files
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formatRelativeTime(project.updatedAt)}
                  </div>
                </div>

                <div className="flex gap-1 mt-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.type.toLowerCase()}
                  </Badge>
                  {project.deploymentUrl && (
                    <Badge variant="outline" className="text-xs">
                      Deployed
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-0 flex gap-2">
                <Link href={`/project/${project.id}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    <Play className="h-3 w-3 mr-1" />
                    Open
                  </Button>
                </Link>
                
                {project.deploymentUrl && (
                  <Link href={project.deploymentUrl} target="_blank">
                    <Button variant="outline" size="sm">
                      <Globe className="h-3 w-3" />
                    </Button>
                  </Link>
                )}
                
                {project.githubRepoUrl && (
                  <Link href={project.githubRepoUrl} target="_blank">
                    <Button variant="outline" size="sm">
                      <GitBranch className="h-3 w-3" />
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}