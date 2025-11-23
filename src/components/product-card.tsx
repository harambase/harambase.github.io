"use client"

import { Product } from "@/lib/data/types"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Zap, Shield, Ruler, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import { useCompare } from "@/context/compare-context"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl"

export function ProductCard({ product }: { product: Product }) {
  const { compareList, addToCompare, removeFromCompare } = useCompare()
  const isSelected = compareList.includes(product.id)
  const t = useTranslations('Common')
  const nav = useTranslations('Navigation')

  const handleCompareChange = (checked: boolean | string) => {
    if (checked === true) {
      addToCompare(product.id)
    } else {
      removeFromCompare(product.id)
    }
  }

  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-md group">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
            <Badge variant="outline" className="mb-2">{product.category}</Badge>
            <Badge variant="secondary" className="mb-2">{product.series}</Badge>
        </div>
        <CardTitle className="text-2xl">{product.name}</CardTitle>
        <CardDescription className="line-clamp-2">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="aspect-video bg-muted rounded-md mb-6 flex items-center justify-center overflow-hidden relative">
           <Zap className="h-16 w-16 text-muted-foreground/20 absolute" />
           <div className="absolute bottom-2 left-2 bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold">
              {product.wattage_range}
           </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{product.wattage_range}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{product.efficiency} Eff.</span>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <Ruler className="h-4 w-4 text-muted-foreground shrink-0" />
            <span className="truncate" title={product.specs.dimensions}>{product.specs.dimensions}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex items-center gap-4">
        <div className="flex items-center space-x-2 shrink-0">
            <Checkbox 
                id={`compare-${product.id}`} 
                checked={isSelected}
                onCheckedChange={handleCompareChange}
            />
            <label 
                htmlFor={`compare-${product.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer select-none"
            >
                {nav('compare')}
            </label>
        </div>
        <Button className="flex-1" asChild>
          <Link href={`/product/${product.id}`}>
             {t('viewAllProducts')} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
