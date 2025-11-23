"use client"

import { useCompare } from "@/context/compare-context"
import { getData } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Trash2, X } from "lucide-react"
import { Link } from "@/i18n/routing"
import { Badge } from "@/components/ui/badge"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { Product } from "@/lib/data/types"

export default function ComparePage() {
  const { compareList, removeFromCompare, clearCompare } = useCompare()
  const locale = useLocale()
  const t = useTranslations('Common')
  const nav = useTranslations('Navigation')
  
  // Client-side data fetching for products since this is a client component
  // In a real app, you might pass this data from a server component wrapper
  // but for this mock setup, we'll load it here or accept it as props if we refactor
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const { products } = getData(locale)
    setProducts(products)
  }, [locale])
  
  const comparedProducts = products.filter(p => compareList.includes(p.id))

  if (comparedProducts.length === 0) {
    return (
      <div className="container py-16 min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-3xl font-bold">{nav('compare')}</h1>
        <p className="text-muted-foreground max-w-md">
            No products selected for comparison. Browse our products and select up to 3 items to compare.
        </p>
        <Button asChild size="lg">
            <Link href="/product">{t('viewAllProducts')}</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-muted/30 border-b sticky top-16 z-10 backdrop-blur supports-[backdrop-filter]:bg-muted/10">
         <div className="container py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" asChild>
                    <Link href="/product" className="flex items-center gap-1">
                        <ArrowLeft className="h-4 w-4" /> {t('backToProducts')}
                    </Link>
                </Button>
                <h1 className="text-lg font-semibold hidden sm:block">{nav('compare')}</h1>
            </div>
            <Button variant="destructive" size="sm" onClick={clearCompare} className="gap-2">
                <Trash2 className="h-4 w-4" /> Clear All
            </Button>
         </div>
      </div>

      <div className="container py-8 overflow-x-auto">
        <div className="min-w-[800px]">
            <Table>
                <TableBody>
                    {/* Product Info Header Row */}
                    <TableRow className="border-b-0 hover:bg-transparent">
                        <TableCell className="w-[200px] font-bold text-lg align-top pt-8">Product</TableCell>
                        {comparedProducts.map(product => (
                            <TableCell key={product.id} className="align-top pt-8 min-w-[250px]">
                                <div className="space-y-3 relative">
                                    <Button 
                                        variant="ghost" 
                                        size="icon" 
                                        className="absolute -top-4 -right-2 h-8 w-8 text-muted-foreground hover:text-destructive"
                                        onClick={() => removeFromCompare(product.id)}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                    <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center mb-4">
                                        {/* Placeholder Image */}
                                        <div className="text-muted-foreground text-xs">Image</div>
                                    </div>
                                    <div>
                                        <Badge variant="outline" className="mb-1">{product.series}</Badge>
                                        <Link href={`/product/${product.id}`} className="block hover:underline">
                                            <h3 className="text-xl font-bold">{product.name}</h3>
                                        </Link>
                                    </div>
                                    <Button className="w-full" asChild>
                                        <Link href="/contact">{t('getInTouch')}</Link>
                                    </Button>
                                </div>
                            </TableCell>
                        ))}
                        {/* Fill empty columns if less than 3 */}
                        {[...Array(3 - comparedProducts.length)].map((_, i) => (
                            <TableCell key={`empty-${i}`} className="align-middle text-center text-muted-foreground/50 border-dashed border-l">
                                <div className="flex flex-col items-center gap-2">
                                    <p>Add Product</p>
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href="/product">Browse</Link>
                                    </Button>
                                </div>
                            </TableCell>
                        ))}
                    </TableRow>

                    {/* Key Specs Group */}
                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                        <TableCell colSpan={4} className="font-semibold py-3">Key Specifications</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-muted-foreground">Wattage Range</TableCell>
                        {comparedProducts.map(product => (
                            <TableCell key={product.id} className="font-medium text-lg">{product.wattage_range}</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-muted-foreground">Efficiency</TableCell>
                        {comparedProducts.map(product => (
                            <TableCell key={product.id} className="font-medium text-primary">{product.efficiency}</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-muted-foreground">Cell Type</TableCell>
                        {comparedProducts.map(product => (
                            <TableCell key={product.id}>{product.specs.cell_type}</TableCell>
                        ))}
                    </TableRow>

                    {/* Mechanical Specs Group */}
                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                        <TableCell colSpan={4} className="font-semibold py-3">Mechanical Data</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-muted-foreground">Dimensions</TableCell>
                        {comparedProducts.map(product => (
                            <TableCell key={product.id}>{product.specs.dimensions}</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-muted-foreground">Weight</TableCell>
                        {comparedProducts.map(product => (
                            <TableCell key={product.id}>{product.specs.weight}</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-muted-foreground">No. of Cells</TableCell>
                        {comparedProducts.map(product => (
                            <TableCell key={product.id}>{product.specs.no_of_cells}</TableCell>
                        ))}
                    </TableRow>
                     <TableRow>
                        <TableCell className="font-medium text-muted-foreground">Front Glass</TableCell>
                        {comparedProducts.map(product => (
                            <TableCell key={product.id} className="text-sm">{product.specs.front_glass}</TableCell>
                        ))}
                    </TableRow>

                    {/* Electrical Specs Group */}
                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                        <TableCell colSpan={4} className="font-semibold py-3">Electrical Data (STC)</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-muted-foreground">Max Power (Pmax)</TableCell>
                        {comparedProducts.map(product => (
                            <TableCell key={product.id}>
                                {Math.min(...product.electrical_stc.max_power_pmax)}W - {Math.max(...product.electrical_stc.max_power_pmax)}W
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-muted-foreground">Open Circuit Voltage (Voc)</TableCell>
                        {comparedProducts.map(product => (
                            <TableCell key={product.id}>
                                {product.electrical_stc.open_circuit_voltage_voc[0]}V ~ {product.electrical_stc.open_circuit_voltage_voc[product.electrical_stc.open_circuit_voltage_voc.length - 1]}V
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-muted-foreground">Short Circuit Current (Isc)</TableCell>
                        {comparedProducts.map(product => (
                            <TableCell key={product.id}>
                                {product.electrical_stc.short_circuit_current_isc[0]}A ~ {product.electrical_stc.short_circuit_current_isc[product.electrical_stc.short_circuit_current_isc.length - 1]}A
                            </TableCell>
                        ))}
                    </TableRow>
                    
                     {/* Temp Coefficients Group */}
                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                        <TableCell colSpan={4} className="font-semibold py-3">Temperature Coefficients</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-muted-foreground">Pmax Coefficient</TableCell>
                        {comparedProducts.map(product => (
                            <TableCell key={product.id}>{product.temp_coefficients.pmax}</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-muted-foreground">Voc Coefficient</TableCell>
                        {comparedProducts.map(product => (
                            <TableCell key={product.id}>{product.temp_coefficients.voc}</TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </div>
      </div>
    </div>
  )
}
