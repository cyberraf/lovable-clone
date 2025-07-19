import { User, Project, ProjectFile, Template, ProjectStatus, ProjectType, Plan, UserRole } from '@prisma/client'

export type { User, Project, ProjectFile, Template, ProjectStatus, ProjectType, Plan, UserRole }

export interface ExtendedUser extends User {
  projects?: Project[]
  templates?: Template[]
}

export interface ExtendedProject extends Project {
  user: User
  files: ProjectFile[]
  collaborators?: ProjectCollaborator[]
}

export interface ProjectCollaborator {
  id: string
  role: 'VIEWER' | 'EDITOR' | 'ADMIN'
  user: User
  invitedAt: Date
  acceptedAt?: Date
}

export interface AIGenerationRequest {
  prompt: string
  type: ProjectType
  framework?: string
  features?: string[]
  styling?: 'tailwind' | 'css' | 'styled-components'
  database?: boolean
  authentication?: boolean
}

export interface AIGenerationResponse {
  success: boolean
  projectId?: string
  files?: GeneratedFile[]
  error?: string
  tokens?: number
}

export interface GeneratedFile {
  filename: string
  content: string
  language: string
  path: string
}

export interface CodeEditorFile {
  id: string
  filename: string
  content: string
  language: string
  path: string
  modified?: boolean
}

export interface PreviewSettings {
  device: 'desktop' | 'tablet' | 'mobile'
  theme: 'light' | 'dark'
  zoom: number
}

export interface DeploymentConfig {
  platform: 'vercel' | 'netlify' | 'github-pages'
  domain?: string
  environment?: Record<string, string>
  buildCommand?: string
  outputDirectory?: string
}

export interface TemplateCategory {
  id: string
  name: string
  description: string
  icon: string
  templates: Template[]
}

export interface ProjectActivity {
  id: string
  type: 'created' | 'updated' | 'deployed' | 'shared' | 'exported'
  description: string
  timestamp: Date
  user: User
}

export interface Usage {
  action: 'GENERATE_CODE' | 'DEPLOY_PROJECT' | 'CREATE_PROJECT' | 'EXPORT_CODE' | 'AI_CHAT'
  tokens: number
  credits: number
  timestamp: Date
}

export interface PlanFeatures {
  name: string
  price: number
  credits: number
  projects: number
  collaborators: number
  deployments: number
  features: string[]
}

export interface ChatMessage {
  id: string
  content: string
  role: 'user' | 'assistant' | 'system'
  timestamp: Date
  tokens?: number
}

export interface EditorState {
  activeFile: string | null
  openFiles: string[]
  changedFiles: Set<string>
  previewUrl?: string
}

export interface FileTreeNode {
  id: string
  name: string
  type: 'file' | 'folder'
  path: string
  children?: FileTreeNode[]
  language?: string
}

export interface BuildOutput {
  success: boolean
  output?: string
  errors?: string[]
  warnings?: string[]
  buildTime?: number
}

export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  private: boolean
  html_url: string
  description?: string
  created_at: string
  updated_at: string
}

export interface ExportOptions {
  format: 'zip' | 'github' | 'stackblitz' | 'codesandbox'
  includeNodeModules?: boolean
  includeReadme?: boolean
  repository?: {
    name: string
    description?: string
    private?: boolean
  }
}

export interface SearchFilters {
  category?: string
  framework?: string
  difficulty?: string
  tags?: string[]
  sortBy?: 'popular' | 'recent' | 'name' | 'rating'
}

export interface NotificationSettings {
  email: boolean
  push: boolean
  deployments: boolean
  collaborations: boolean
  updates: boolean
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  editorTheme: string
  fontSize: number
  tabSize: number
  wordWrap: boolean
  notifications: NotificationSettings
}

export type EventType = 
  | 'project_created'
  | 'project_updated'
  | 'project_deployed'
  | 'file_changed'
  | 'collaborator_added'
  | 'template_used'

export interface Event {
  type: EventType
  payload: any
  timestamp: Date
  userId?: string
}