"use client"

import * as React from "react"
import { Product } from "@/lib/data/types"
import { SteelProduct } from "@/lib/data/types"
import { StationFrameProduct, MountingPartProduct } from "@/lib/data/types"
import { ProductCard } from "@/components/product-card"
import { SteelProductCard } from "@/components/steel-product-card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, Sun, Layers, Grid, Wrench } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

interface ProductListProps {
  solarProducts: Product[]
  steelProducts: SteelProduct[]
  stationFrames: StationFrameProduct[]
  mountingParts: MountingPartProduct[]
}

export function ProductList({ solarProducts, steelProducts, stationFrames, mountingParts }: ProductListProps) {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([])
  const t = useTranslations('Product.categories')
  const common = useTranslations('Product')
  const filters = useTranslations('Product.filters')

  // Define hierarchy
  const categoryStructure = React.useMemo(() => {
    const solarCategories = Array.from(new Set(solarProducts.map((p) => p.category)))
    const steelCategories = Array.from(new Set(steelProducts.map((p) => p.category)))
    const frameCategories = Array.from(new Set(stationFrames.map((p) => p.category)))
    const partCategories = Array.from(new Set(mountingParts.map((p) => p.category)))
    
    return [
        {
            id: "solar",
            label: t('solarModules'),
            icon: <Sun className="h-4 w-4" />,
            subcategories: solarCategories
        },
        {
            id: "steel",
            label: t('steelProducts'),
            icon: <Layers className="h-4 w-4" />,
            subcategories: steelCategories
        },
        {
            id: "station-frames",
            label: t('stationFrames'),
            icon: <Grid className="h-4 w-4" />,
            subcategories: frameCategories
        },
        {
            id: "mounting-parts",
            label: t('mountingParts'),
            icon: <Wrench className="h-4 w-4" />,
            subcategories: partCategories
        }
    ]
  }, [solarProducts, steelProducts, stationFrames, mountingParts, t])

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const toggleSuperCategory = (subcategories: string[]) => {
      const allSelected = subcategories.every(c => selectedCategories.includes(c))
      
      if (allSelected) {
          setSelectedCategories(prev => prev.filter(c => !subcategories.includes(c)))
      } else {
          setSelectedCategories(prev => {
              const unique = new Set([...prev, ...subcategories])
              return Array.from(unique)
          })
      }
  }

  const filteredSolarProducts = React.useMemo(() => {
    if (selectedCategories.length === 0) return solarProducts
    return solarProducts.filter((p) => selectedCategories.includes(p.category))
  }, [solarProducts, selectedCategories])

  const filteredSteelProducts = React.useMemo(() => {
    if (selectedCategories.length === 0) return steelProducts
    return steelProducts.filter((p) => selectedCategories.includes(p.category))
  }, [steelProducts, selectedCategories])

  const filteredStationFrames = React.useMemo(() => {
    if (selectedCategories.length === 0) return stationFrames
    return stationFrames.filter((p) => selectedCategories.includes(p.category))
  }, [stationFrames, selectedCategories])

  const filteredMountingParts = React.useMemo(() => {
    if (selectedCategories.length === 0) return mountingParts
    return mountingParts.filter((p) => selectedCategories.includes(p.category))
  }, [mountingParts, selectedCategories])

  const showSolar = filteredSolarProducts.length > 0
  const showSteel = filteredSteelProducts.length > 0
  const showFrames = filteredStationFrames.length > 0
  const showParts = filteredMountingParts.length > 0
  
  const totalCount = filteredSolarProducts.length + filteredSteelProducts.length + filteredStationFrames.length + filteredMountingParts.length

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">{filters('title')}</h3>
        <Accordion type="multiple" defaultValue={["solar", "steel", "station-frames", "mounting-parts"]} className="w-full">
            {categoryStructure.map((group) => (
                <AccordionItem key={group.id} value={group.id} className="border-b-0">
                    <AccordionTrigger className="hover:no-underline py-2">
                        <div className="flex items-center gap-2">
                            {group.icon}
                            <span>{group.label}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-3 pt-2 pl-2 border-l ml-3">
                            <div className="flex items-center space-x-2">
                                <Checkbox 
                                    id={`group-${group.id}`}
                                    checked={group.subcategories.length > 0 && group.subcategories.every(c => selectedCategories.includes(c))}
                                    onCheckedChange={() => toggleSuperCategory(group.subcategories)}
                                />
                                <Label 
                                    htmlFor={`group-${group.id}`}
                                    className="font-semibold cursor-pointer"
                                >
                                    Select All
                                </Label>
                            </div>
                            <Separator className="my-2" />
                            {group.subcategories.map((category) => (
                                <div key={category} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={`category-${category}`}
                                        checked={selectedCategories.includes(category)}
                                        onCheckedChange={() => toggleCategory(category)}
                                    />
                                    <Label
                                        htmlFor={`category-${category}`}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-muted-foreground"
                                    >
                                        {category}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
      <Separator />
      <div>
        <Button
            variant="outline"
            className="w-full"
            onClick={() => setSelectedCategories([])}
            disabled={selectedCategories.length === 0}
        >
            {filters('clear')}
        </Button>
      </div>
    </div>
  )

  // Simple Card for Station Frames & Parts
  const GenericProductCard = ({ product, link }: { product: any, link: string }) => (
    <Card className="flex flex-col h-full transition-all hover:shadow-md group">
        <CardHeader>
            <div className="flex items-center gap-2 mb-2 text-primary">
                <Grid className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">{product.category}</span>
            </div>
            <CardTitle className="text-2xl">{product.name}</CardTitle>
            <CardDescription className="line-clamp-2">{product.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
            <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden">
                {/* Placeholder */}
                <div className="text-muted-foreground">Image</div>
            </div>
        </CardContent>
        <CardFooter>
            <Button className="w-full" asChild>
                <Link href={link}>View Details</Link>
            </Button>
        </CardFooter>
    </Card>
  )

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Mobile Filter */}
      <div className="lg:hidden mb-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              {filters('title')}
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>{filters('title')}</SheetTitle>
              <SheetDescription>
                Narrow down your product search by category
              </SheetDescription>
            </SheetHeader>
            <div className="py-6">
                <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 shrink-0 space-y-8">
        <FilterContent />
      </div>

      {/* Product Grid */}
      <div className="flex-1">
        <div className="mb-6">
            <p className="text-sm text-muted-foreground">
                Showing {totalCount} results
            </p>
        </div>
        
        {totalCount === 0 ? (
            <div className="h-64 flex items-center justify-center border rounded-lg border-dashed">
                <p className="text-muted-foreground">No products match your filters.</p>
            </div>
        ) : (
            <div className="space-y-12">
                {showSolar && (
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 pb-2 border-b">
                            <Sun className="h-5 w-5 text-primary" />
                            <h2 className="text-2xl font-bold">{t('solarModules')}</h2>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredSolarProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                )}

                {showFrames && (
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 pb-2 border-b">
                            <Grid className="h-5 w-5 text-primary" />
                            <h2 className="text-2xl font-bold">{t('stationFrames')}</h2>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredStationFrames.map((product) => (
                                <GenericProductCard key={product.id} product={product} link={`/station-frame/${product.id}`} />
                            ))}
                        </div>
                    </div>
                )}

                {showParts && (
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 pb-2 border-b">
                            <Wrench className="h-5 w-5 text-primary" />
                            <h2 className="text-2xl font-bold">{t('mountingParts')}</h2>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredMountingParts.map((product) => (
                                <GenericProductCard key={product.id} product={product} link={`/mounting-part/${product.id}`} />
                            ))}
                        </div>
                    </div>
                )}

                {showSteel && (
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 pb-2 border-b">
                            <Layers className="h-5 w-5 text-primary" />
                            <h2 className="text-2xl font-bold">{t('steelProducts')}</h2>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredSteelProducts.map((product) => (
                                <SteelProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )}
      </div>
    </div>
  )
}
