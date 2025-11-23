"use client"

import { SteelProduct } from "@/lib/steel-products"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Layers, ArrowRight, TableProperties } from "lucide-react"
import Link from "next/link"

export function SteelProductCard({ product }: { product: SteelProduct }) {
  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-md hover:border-primary/50">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2 text-primary">
            <Layers className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Steel Grade</span>
        </div>
        <CardTitle className="text-2xl">{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
         <div className="bg-muted/30 rounded-lg p-4">
            <p className="text-sm font-medium text-muted-foreground mb-2">Common Grades Included:</p>
            <div className="flex flex-wrap gap-2">
               {product.grades.slice(0, 5).map((row, i) => (
                  <span key={i} className="text-xs font-mono bg-background border px-2 py-1 rounded">
                     {row.china_gb.grade || row.usa_astm.grade || "N/A"}
                  </span>
               ))}
               {product.grades.length > 5 && (
                  <span className="text-xs text-muted-foreground flex items-center px-1">+{product.grades.length - 5} more</span>
               )}
            </div>
         </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full gap-2" asChild>
          <Link href={`/steel/${product.id}`}>
             <TableProperties className="h-4 w-4" /> View Comparison Table
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

