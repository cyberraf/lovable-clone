"use client"

import { Toaster } from "react-hot-toast"

export function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: 'hsl(var(--background))',
          color: 'hsl(var(--foreground))',
          border: '1px solid hsl(var(--border))',
        },
        success: {
          style: {
            border: '1px solid hsl(var(--primary))',
          },
        },
        error: {
          style: {
            border: '1px solid hsl(var(--destructive))',
          },
        },
      }}
    />
  )
}