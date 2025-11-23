import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { ArrowLeft, Download, Share2, Wrench, Hammer, ShieldCheck } from "lucide-react"
import { Link } from "@/i18n/routing"
import { getData } from "@/lib/data"
import { stationFrameProducts } from "@/lib/data/en" // For static params

type Props = {
  params: Promise<{ id: string, locale: string }>
}

export async function generateStaticParams() {
  return stationFrameProducts.map((product) => ({
    id: product.id,
  }))
}

export default async function StationFrameDetailPage({ params }: Props) {
  const { id, locale } = await params
  const { stationFrameProducts } = getData(locale)
  const product = stationFrameProducts.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen pb-20">
       {/* Breadcrumb */}
       <div className="bg-muted/30 border-b">
         <div className="container py-4">
            <Link href="/product" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to Products
            </Link>
         </div>
       </div>

       <div className="container py-8 md:py-12 space-y-12">
          {/* Hero Section (Image + Title) */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
             <div className="space-y-6">
                <div className="aspect-video bg-muted rounded-xl border overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      Hero Image Placeholder
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="aspect-square w-24 bg-muted rounded-lg border" />
                   <div className="aspect-square w-24 bg-muted rounded-lg border" />
                   <div className="aspect-square w-24 bg-muted rounded-lg border" />
                </div>
             </div>

             <div className="space-y-6">
                <div>
                   <Badge className="mb-2">{product.category}</Badge>
                   <h1 className="text-4xl font-bold tracking-tight mb-4">{product.name}</h1>
                   <p className="text-xl text-muted-foreground leading-relaxed">
                      {product.description}
                   </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border">
                      <Wrench className="h-6 w-6 text-primary" />
                      <div>
                         <p className="text-xs text-muted-foreground font-medium">Installation</p>
                         <p className="font-semibold">{product.technical_params.installation_location}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border">
                      <Hammer className="h-6 w-6 text-primary" />
                      <div>
                         <p className="text-xs text-muted-foreground font-medium">Wind Load</p>
                         <p className="font-semibold">{product.technical_params.wind_load}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                      <div>
                         <p className="text-xs text-muted-foreground font-medium">Warranty</p>
                         <p className="font-semibold">{product.technical_params.warranty}</p>
                      </div>
                   </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                   <Button size="lg" className="gap-2">
                      <Download className="h-4 w-4" /> Installation Guide
                   </Button>
                   <Button size="lg" variant="outline" className="gap-2">
                      <Share2 className="h-4 w-4" /> Share Product
                   </Button>
                </div>
             </div>
          </div>

          <Separator />

          {/* Main Components Grid (Right side of Image 1) */}
          <div className="space-y-6">
             <h2 className="text-2xl font-bold text-primary">Main Components</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {product.components.map((comp, i) => (
                   <Card key={i} className="border-none shadow-none bg-transparent">
                      <CardContent className="p-0 text-center space-y-3">
                         <div className="aspect-square bg-muted rounded-lg border flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">Component Image</span>
                         </div>
                         <p className="font-medium text-sm">{comp.name}</p>
                      </CardContent>
                   </Card>
                ))}
             </div>
          </div>

          <Separator />

          {/* Technical Parameters Table (Bottom of Image 1) */}
          <div className="space-y-6">
             <h2 className="text-2xl font-bold bg-primary text-primary-foreground py-2 px-4 inline-block rounded-t-lg">
                Technical Parameters
             </h2>
             <div className="border rounded-lg overflow-hidden">
                <Table>
                   <TableBody>
                      <TableRow>
                         <TableCell className="font-medium bg-muted/20 w-1/3">Installation Location</TableCell>
                         <TableCell>{product.technical_params.installation_location}</TableCell>
                      </TableRow>
                      <TableRow>
                         <TableCell className="font-medium bg-muted/20">Mounting Angle</TableCell>
                         <TableCell>{product.technical_params.mounting_angle}</TableCell>
                      </TableRow>
                      <TableRow>
                         <TableCell className="font-medium bg-muted/20">Wind Load</TableCell>
                         <TableCell>{product.technical_params.wind_load}</TableCell>
                      </TableRow>
                      <TableRow>
                         <TableCell className="font-medium bg-muted/20">Snow Load</TableCell>
                         <TableCell>{product.technical_params.snow_load}</TableCell>
                      </TableRow>
                      <TableRow>
                         <TableCell className="font-medium bg-muted/20">Panel Arrangement</TableCell>
                         <TableCell>{product.technical_params.battery_panel_arrangement}</TableCell>
                      </TableRow>
                      <TableRow>
                         <TableCell className="font-medium bg-muted/20">Design Criteria</TableCell>
                         <TableCell>{product.technical_params.design_criteria}</TableCell>
                      </TableRow>
                      <TableRow>
                         <TableCell className="font-medium bg-muted/20">Profile Material</TableCell>
                         <TableCell>{product.technical_params.profile_material}</TableCell>
                      </TableRow>
                      <TableRow>
                         <TableCell className="font-medium bg-muted/20">Fastener Material</TableCell>
                         <TableCell>{product.technical_params.fastener_material}</TableCell>
                      </TableRow>
                      <TableRow>
                         <TableCell className="font-medium bg-muted/20">Accessory Material</TableCell>
                         <TableCell>{product.technical_params.accessory_material}</TableCell>
                      </TableRow>
                      <TableRow>
                         <TableCell className="font-medium bg-muted/20">Warranty</TableCell>
                         <TableCell>{product.technical_params.warranty}</TableCell>
                      </TableRow>
                   </TableBody>
                </Table>
             </div>
          </div>
       </div>
    </div>
  )
}
