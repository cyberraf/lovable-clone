# Lovable Clone - AI-Powered App Builder

A comprehensive clone of lovable.ai built with Next.js 14, featuring AI-powered code generation, visual editing, and one-click deployment capabilities.

![Lovable Clone](https://via.placeholder.com/1200x600/8B5CF6/FFFFFF?text=Lovable+Clone+-+AI-Powered+App+Builder)

## 🚀 Features

### Core Features
- **🤖 AI-Powered Code Generation** - Generate complete full-stack applications using natural language
- **🎨 Visual Editor** - Real-time visual editing with live preview
- **📱 Responsive Design** - Mobile-first, responsive applications
- **🚀 One-Click Deployment** - Deploy to production instantly
- **🔗 GitHub Integration** - Export code and sync with repositories
- **👥 Real-Time Collaboration** - Work together with your team
- **🗄️ Database Integration** - Built-in Supabase integration
- **🔐 Authentication** - Secure OAuth with GitHub and Google

### Platform Features
- **📊 Dashboard** - Comprehensive project management
- **📝 Templates** - Professional pre-built templates
- **💳 Subscription Plans** - Flexible pricing tiers
- **📈 Usage Analytics** - Track credits and usage
- **🎯 Project Types** - Support for web apps, websites, dashboards, APIs
- **⚡ Fast Performance** - Optimized for speed and efficiency

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

### Backend
- **Next.js API Routes** - Serverless backend
- **NextAuth.js** - Authentication system
- **Prisma** - Database ORM
- **PostgreSQL** - Primary database
- **OpenAI API** - AI code generation
- **Anthropic Claude** - Alternative AI model

### Tools & Services
- **Vercel** - Deployment platform
- **GitHub** - Version control and OAuth
- **Supabase** - Database and real-time features
- **Socket.io** - Real-time collaboration
- **React Hot Toast** - Notifications

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js 18+** installed
- **PostgreSQL** database (or Supabase account)
- **OpenAI API key** for AI generation
- **GitHub OAuth app** for authentication
- **Google OAuth app** for authentication (optional)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/lovable-clone.git
cd lovable-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the example environment file and fill in your values:

```bash
cp .env.example .env.local
```

Required environment variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/lovable_clone"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-here"

# OAuth Providers
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# AI Services
OPENAI_API_KEY="your-openai-api-key"
ANTHROPIC_API_KEY="your-anthropic-api-key"
```

### 4. Database Setup

Initialize the database:

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Or run migrations
npm run db:migrate
```

### 5. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
lovable-clone/
├── app/                    # Next.js 14 app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   ├── auth/             # Authentication pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── marketing/        # Marketing page components
│   ├── dashboard/        # Dashboard components
│   ├── layout/           # Layout components
│   └── providers/        # Context providers
├── lib/                  # Utility libraries
│   ├── auth.ts          # Authentication config
│   ├── db.ts            # Database connection
│   └── utils.ts         # Utility functions
├── prisma/              # Database schema
│   └── schema.prisma    # Prisma schema
├── types/               # TypeScript type definitions
│   └── index.ts         # Type exports
├── public/              # Static assets
└── docs/                # Documentation
```

## 🎯 Usage Guide

### Creating Your First Project

1. **Sign Up** - Create an account using GitHub or Google
2. **Choose Your Path**:
   - **AI Generation** - Describe your app in natural language
   - **Templates** - Start with a professional template
   - **Import** - Import an existing GitHub repository

3. **Describe Your App** (AI Generation):
   ```
   "Create a task management app with user authentication, 
   project organization, real-time collaboration, and a 
   modern dark theme interface."
   ```

4. **Review & Edit** - Use the visual editor to make adjustments
5. **Deploy** - One-click deployment to production
6. **Share** - Get a live URL to share your app

### AI Prompt Best Practices

For best results with AI generation:

- **Be Specific**: Include exact features you want
- **Mention Tech Stack**: Specify frameworks or libraries
- **Describe UI/UX**: Include design preferences
- **Add Context**: Explain the app's purpose and target users

Example prompts:
```
"Build a modern e-commerce store with product catalog, 
shopping cart, Stripe payment integration, admin dashboard, 
and responsive design using React and Tailwind CSS."

"Create a portfolio website for a photographer with image 
galleries, contact form, blog section, and smooth animations. 
Use a minimal, elegant design with a focus on showcasing work."
```

## 📊 Subscription Plans

The platform includes built-in subscription management:

| Plan | Price | Credits | Projects | Features |
|------|-------|---------|----------|----------|
| **Free** | $0 | 100/month | 3 | Basic features, community support |
| **Starter** | $20/month | 1,000/month | 10 | All features, email support |
| **Launch** | $50/month | 5,000/month | 50 | Team collaboration, priority support |
| **Scale** | $100/month | 20,000/month | 200 | Advanced features, dedicated support |

## 🚀 Deployment

### Vercel (Recommended)

1. **Deploy to Vercel**:
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Set Environment Variables** in Vercel dashboard

3. **Configure Database** connection string for production

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t lovable-clone .
docker run -p 3000:3000 lovable-clone
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

## 📝 API Documentation

### Authentication

All API routes require authentication except public endpoints.

```typescript
// Example API call
const response = await fetch('/api/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${session.accessToken}`
  },
  body: JSON.stringify({
    prompt: "Create a todo app",
    type: "WEBAPP",
    framework: "react"
  })
})
```

### Key Endpoints

- `POST /api/generate` - Generate code with AI
- `GET /api/projects` - List user projects
- `POST /api/projects` - Create new project
- `PUT /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project
- `POST /api/deploy` - Deploy project

## 🔒 Security

- **Authentication** via NextAuth.js with OAuth providers
- **Authorization** with role-based access control
- **Input Validation** with Zod schemas
- **Rate Limiting** on API endpoints
- **CSRF Protection** built into Next.js
- **Environment Variables** for sensitive data

## 🐛 Troubleshooting

### Common Issues

**Database Connection Error**:
```bash
# Check database URL format
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"

# Test connection
npx prisma db pull
```

**Authentication Issues**:
```bash
# Verify OAuth configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
```

**AI Generation Failures**:
- Check OpenAI API key validity
- Verify sufficient API credits
- Review prompt length and complexity

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Lovable.ai** - Original inspiration and design concepts
- **Vercel** - Deployment platform and Next.js
- **OpenAI** - AI code generation capabilities
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first CSS framework

---

**Built with ❤️ by the Lovable Clone Team**