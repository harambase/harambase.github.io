"use client"

import * as React from "react"

type CompareContextType = {
  compareList: string[]
  addToCompare: (id: string) => void
  removeFromCompare: (id: string) => void
  clearCompare: () => void
}

const CompareContext = React.createContext<CompareContextType | undefined>(undefined)

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [compareList, setCompareList] = React.useState<string[]>([])

  const addToCompare = (id: string) => {
    if (compareList.length >= 3) {
      alert("You can only compare up to 3 products.")
      return
    }
    if (!compareList.includes(id)) {
      setCompareList((prev) => [...prev, id])
    }
  }

  const removeFromCompare = (id: string) => {
    setCompareList((prev) => prev.filter((itemId) => itemId !== id))
  }

  const clearCompare = () => {
    setCompareList([])
  }

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare, clearCompare }}>
      {children}
    </CompareContext.Provider>
  )
}

export function useCompare() {
  const context = React.useContext(CompareContext)
  if (context === undefined) {
    throw new Error("useCompare must be used within a CompareProvider")
  }
  return context
}
