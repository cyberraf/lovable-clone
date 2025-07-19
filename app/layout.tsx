import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/providers/auth-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ToastProvider } from '@/components/providers/toast-provider'
import { Analytics } from '@/components/analytics'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Lovable Clone - AI-Powered App Builder',
  description: 'Build full-stack applications with AI. No code required. Turn your ideas into working apps in minutes.',
  keywords: ['AI', 'no-code', 'app builder', 'web development', 'artificial intelligence'],
  authors: [{ name: 'Lovable Clone Team' }],
  creator: 'Lovable Clone',
  publisher: 'Lovable Clone',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Lovable Clone - AI-Powered App Builder',
    description: 'Build full-stack applications with AI. No code required.',
    url: '/',
    siteName: 'Lovable Clone',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lovable Clone - AI-Powered App Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lovable Clone - AI-Powered App Builder',
    description: 'Build full-stack applications with AI. No code required.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <ToastProvider />
            <main className="min-h-screen bg-background text-foreground">
              {children}
            </main>
            <Analytics />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}