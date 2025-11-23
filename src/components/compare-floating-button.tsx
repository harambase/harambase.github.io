"use client"

import { useCompare } from "@/context/compare-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Layers } from "lucide-react"

export function CompareFloatingButton() {
  const { compareList } = useCompare()

  if (compareList.length === 0) return null

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <Button asChild size="lg" className="shadow-xl rounded-full px-6 h-14">
        <Link href="/compare" className="flex items-center gap-2">
          <Layers className="h-5 w-5" />
          <span>Compare ({compareList.length})</span>
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </Button>
    </div>
  )
}

