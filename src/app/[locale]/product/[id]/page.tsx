import { getData } from "@/lib/data"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Share2, Zap, FileText, Ruler } from "lucide-react"
import { Link } from "@/i18n/routing"
import { CompareFloatingButton } from "@/components/compare-floating-button"
import { ProductCharts } from "@/components/product-charts"
import { ProductWarranty } from "@/components/product-warranty"
import { routing } from "@/i18n/routing"
import { getTranslations } from "next-intl/server"

// Type for params in Next.js 15+ (params is a Promise)
type Props = {
  params: Promise<{ id: string, locale: string }>
}

export async function generateStaticParams() {
  const params = []
  for (const locale of routing.locales) {
    const { products } = getData(locale)
    for (const product of products) {
      params.push({ id: product.id, locale })
    }
  }
  return params
}

export default async function ProductDetailPage({ params }: Props) {
  const { id, locale } = await params
  const { products } = getData(locale)
  const product = products.find((p) => p.id === id)
  const t = await getTranslations({locale, namespace: 'Product.details'})
  const common = await getTranslations({locale, namespace: 'Common'})

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen pb-20">
       {/* Breadcrumb / Back Link */}
       <div className="bg-muted/30 border-b">
         <div className="container py-4">
            <Link href="/product" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> {common('backToProducts')}
            </Link>
         </div>
       </div>

       <div className="container py-8 md:py-12 space-y-12">
          {/* Top Section: Header & Overview */}
          <div className="grid lg:grid-cols-12 gap-8">
             {/* Product Image / Diagram */}
             <div className="lg:col-span-5">
                <div className="aspect-[3/4] bg-muted rounded-xl border flex items-center justify-center relative overflow-hidden">
                   <Zap className="h-32 w-32 text-muted-foreground/20" />
                   <div className="absolute bottom-4 right-4 text-xs text-muted-foreground bg-background/80 backdrop-blur px-2 py-1 rounded border">
                      Technical Drawing Placeholder
                   </div>
                   {/* Diagram lines mock */}
                   <div className="absolute top-1/4 left-0 w-full h-px bg-border/50" />
                   <div className="absolute top-2/4 left-0 w-full h-px bg-border/50" />
                   <div className="absolute top-3/4 left-0 w-full h-px bg-border/50" />
                   <div className="absolute left-1/2 top-0 w-px h-full bg-border/50" />
                </div>
             </div>

             {/* Quick Specs & Highlights */}
             <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                     <Badge variant="outline">{product.category}</Badge>
                     <Badge>{product.series}</Badge>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight mb-2">{product.name}</h1>
                  <p className="text-xl text-muted-foreground">{product.wattage_range} | {product.efficiency} Efficiency</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                   {product.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                   <Card>
                      <CardContent className="p-4 flex items-center gap-4">
                         <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Zap className="h-5 w-5" />
                         </div>
                         <div>
                            <p className="text-sm font-medium text-muted-foreground">{t('powerOutput')}</p>
                            <p className="text-lg font-bold">{product.wattage_range}</p>
                         </div>
                      </CardContent>
                   </Card>
                   <Card>
                      <CardContent className="p-4 flex items-center gap-4">
                         <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Ruler className="h-5 w-5" />
                         </div>
                         <div>
                            <p className="text-sm font-medium text-muted-foreground">{t('dimensions')}</p>
                            <p className="text-sm font-bold truncate" title={product.specs.dimensions}>{product.specs.dimensions}</p>
                         </div>
                      </CardContent>
                   </Card>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                   <Button size="lg" className="gap-2">
                      <FileText className="h-4 w-4" /> {common('downloadDatasheet')}
                   </Button>
                   <Button size="lg" variant="outline" className="gap-2">
                      <Share2 className="h-4 w-4" /> {common('share')}
                   </Button>
                </div>

                <Separator className="my-6" />
                
                {/* Warranty & Features - Moved here */}
                <ProductWarranty />
             </div>
          </div>

          <Separator />

          {/* Performance Curves */}
          <div className="space-y-6">
             <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{t('performanceCurves')}</h2>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                   {t('testConditions')}
                </span>
             </div>
             <ProductCharts />
          </div>

          <Separator />

          {/* Technical Tables Section */}
          <div className="space-y-12">
             {/* STC Data */}
             <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" /> {t('electricalParamsSTC')}
                   </h2>
                   <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{t('stcCondition')}</span>
                </div>
                <div className="border rounded-lg overflow-hidden">
                   <Table>
                      <TableHeader>
                         <TableRow className="bg-muted/50">
                            <TableHead className="w-[200px]">Parameter</TableHead>
                            {product.electrical_stc.max_power_pmax.map((_, i) => (
                               <TableHead key={i} className="text-center font-bold">{product.electrical_stc.max_power_pmax[i]}W</TableHead>
                            ))}
                         </TableRow>
                      </TableHeader>
                      <TableBody>
                         <TableRow>
                            <TableCell className="font-medium">Rated Max Power (Pmax/W)</TableCell>
                            {product.electrical_stc.max_power_pmax.map((val, i) => (
                               <TableCell key={i} className="text-center">{val}</TableCell>
                            ))}
                         </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">Voltage at Pmax (Vmpp/V)</TableCell>
                            {product.electrical_stc.voltage_at_max_power_vmpp.map((val, i) => (
                               <TableCell key={i} className="text-center">{val}</TableCell>
                            ))}
                         </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">Current at Pmax (Impp/A)</TableCell>
                            {product.electrical_stc.current_at_max_power_impp.map((val, i) => (
                               <TableCell key={i} className="text-center">{val}</TableCell>
                            ))}
                         </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">Open Circuit Voltage (Voc/V)</TableCell>
                            {product.electrical_stc.open_circuit_voltage_voc.map((val, i) => (
                               <TableCell key={i} className="text-center">{val}</TableCell>
                            ))}
                         </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">Short Circuit Current (Isc/A)</TableCell>
                            {product.electrical_stc.short_circuit_current_isc.map((val, i) => (
                               <TableCell key={i} className="text-center">{val}</TableCell>
                            ))}
                         </TableRow>
                         <TableRow>
                            <TableCell className="font-medium">Module Efficiency (%)</TableCell>
                            {product.electrical_stc.module_efficiency.map((val, i) => (
                               <TableCell key={i} className="text-center text-primary font-semibold">{val}</TableCell>
                            ))}
                         </TableRow>
                      </TableBody>
                   </Table>
                </div>
             </div>

             {/* BNPI Data (if available) */}
             {product.electrical_bnpi.max_power_pmax[0] > 0 && (
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">{t('electricalParamsBNPI')}</h2>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{t('bnpiCondition')}</span>
                    </div>
                    <div className="border rounded-lg overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/50">
                                    <TableHead className="w-[200px]">Parameter</TableHead>
                                    {product.electrical_bnpi.max_power_pmax.map((_, i) => (
                                    <TableHead key={i} className="text-center font-bold">Model {i + 1}</TableHead>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Max Power (Pmax/W)</TableCell>
                                    {product.electrical_bnpi.max_power_pmax.map((val, i) => (
                                    <TableCell key={i} className="text-center">{val}</TableCell>
                                    ))}
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Voltage at Pmax (Vmpp/V)</TableCell>
                                    {product.electrical_bnpi.voltage_at_max_power_vmpp.map((val, i) => (
                                    <TableCell key={i} className="text-center">{val}</TableCell>
                                    ))}
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Current at Pmax (Impp/A)</TableCell>
                                    {product.electrical_bnpi.current_at_max_power_impp.map((val, i) => (
                                    <TableCell key={i} className="text-center">{val}</TableCell>
                                    ))}
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Open Circuit Voltage (Voc/V)</TableCell>
                                    {product.electrical_bnpi.open_circuit_voltage_voc.map((val, i) => (
                                    <TableCell key={i} className="text-center">{val}</TableCell>
                                    ))}
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Short Circuit Current (Isc/A)</TableCell>
                                    {product.electrical_bnpi.short_circuit_current_isc.map((val, i) => (
                                    <TableCell key={i} className="text-center">{val}</TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
             )}

             {/* Mechanical & Operating Specs */}
             <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <h2 className="text-xl font-bold">{t('mechanicalSpecs')}</h2>
                   <div className="border rounded-lg overflow-hidden">
                      <Table>
                         <TableBody>
                            {Object.entries(product.specs).map(([key, value]) => (
                               <TableRow key={key}>
                                  <TableCell className="font-medium capitalize bg-muted/20 w-1/3">{key.replace(/_/g, " ")}</TableCell>
                                  <TableCell>{value}</TableCell>
                               </TableRow>
                            ))}
                         </TableBody>
                      </Table>
                   </div>
                </div>

                <div className="space-y-8">
                   <div className="space-y-4">
                      <h2 className="text-xl font-bold">{t('tempCoefficients')}</h2>
                      <div className="border rounded-lg overflow-hidden">
                         <Table>
                            <TableBody>
                               <TableRow>
                                  <TableCell className="font-medium bg-muted/20 w-1/3">Pmax Temp Coefficient</TableCell>
                                  <TableCell>{product.temp_coefficients.pmax}</TableCell>
                               </TableRow>
                               <TableRow>
                                  <TableCell className="font-medium bg-muted/20">Voc Temp Coefficient</TableCell>
                                  <TableCell>{product.temp_coefficients.voc}</TableCell>
                               </TableRow>
                               <TableRow>
                                  <TableCell className="font-medium bg-muted/20">Isc Temp Coefficient</TableCell>
                                  <TableCell>{product.temp_coefficients.isc}</TableCell>
                               </TableRow>
                               <TableRow>
                                  <TableCell className="font-medium bg-muted/20">NOCT</TableCell>
                                  <TableCell>{product.temp_coefficients.noct}</TableCell>
                               </TableRow>
                            </TableBody>
                         </Table>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <h2 className="text-xl font-bold">{t('operatingParams')}</h2>
                      <div className="border rounded-lg overflow-hidden">
                         <Table>
                            <TableBody>
                               {Object.entries(product.operating_params).map(([key, value]) => (
                                  <TableRow key={key}>
                                     <TableCell className="font-medium capitalize bg-muted/20 w-1/3">{key.replace(/_/g, " ")}</TableCell>
                                     <TableCell>{value}</TableCell>
                                  </TableRow>
                               ))}
                            </TableBody>
                         </Table>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
       
       <CompareFloatingButton />
    </div>
  )
}
