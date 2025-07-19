import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ProjectGrid } from "@/components/dashboard/project-grid"
import { QuickStart } from "@/components/dashboard/quick-start"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { UsageStats } from "@/components/dashboard/usage-stats"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    redirect("/auth/signin")
  }

  // Fetch user data and projects
  const [user, projects, usageHistory] = await Promise.all([
    db.user.findUnique({
      where: { id: session.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        credits: true,
        plan: true,
        createdAt: true,
      }
    }),
    db.project.findMany({
      where: { userId: session.user.id },
      orderBy: { updatedAt: "desc" },
      take: 12,
      include: {
        _count: {
          select: { files: true }
        }
      }
    }),
    db.usageHistory.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
      take: 10,
    })
  ])

  if (!user) {
    redirect("/auth/signin")
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={user} />
      
      <main className="container py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-8">
            {projects.length === 0 ? (
              <QuickStart />
            ) : (
              <ProjectGrid projects={projects} />
            )}
            
            <RecentActivity activities={usageHistory} />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <UsageStats user={user} />
          </div>
        </div>
      </main>
    </div>
  )
}