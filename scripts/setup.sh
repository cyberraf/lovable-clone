#!/bin/bash

# Lovable Clone Setup Script
# This script helps you set up the development environment

set -e

echo "🚀 Setting up Lovable Clone..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'.' -f1 | sed 's/v//')
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version is too old. Please install Node.js 18+."
    echo "   Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Copy environment file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from example..."
    cp .env.example .env.local
    echo "⚠️  Please edit .env.local with your actual environment variables"
else
    echo "✅ .env.local already exists"
fi

# Check if Prisma client exists
if [ ! -d "node_modules/.prisma" ]; then
    echo "🗄️  Generating Prisma client..."
    npm run db:generate
else
    echo "✅ Prisma client already generated"
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your environment variables"
echo "2. Set up your database (PostgreSQL or Supabase)"
echo "3. Run 'npm run db:push' to push the schema to your database"
echo "4. Run 'npm run dev' to start the development server"
echo ""
echo "📚 For detailed setup instructions, see README.md"
echo ""
echo "Happy coding! 🚀"