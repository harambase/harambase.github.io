"use client"

import * as React from "react"
import { CompareProvider } from "@/context/compare-context"
import { ThemeProvider } from "@/components/theme-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <CompareProvider>{children}</CompareProvider>
    </ThemeProvider>
  )
}
