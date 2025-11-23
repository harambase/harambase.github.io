import { mountingPartProducts } from "@/lib/data/en"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { ArrowLeft, Share2 } from "lucide-react"
import { Link } from "@/i18n/routing"
import { getData } from "@/lib/data"

type Props = {
  params: Promise<{ id: string, locale: string }>
}

export async function generateStaticParams() {
  // Since we are using localized data, we should ideally iterate over all locales
  // But for static params, we usually generate for all possible paths.
  // Here we'll fetch IDs from the default locale (en) as IDs should be consistent across locales.
  return mountingPartProducts.map((product) => ({
    id: product.id,
  }))
}

export default async function MountingPartDetailPage({ params }: Props) {
  const { id, locale } = await params
  const { mountingPartProducts } = getData(locale)
  const product = mountingPartProducts.find((p) => p.id === id)

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

       <div className="container py-8 md:py-12 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
             {/* Product Image */}
             <div className="flex-1">
                <div className="aspect-square bg-white rounded-xl border flex items-center justify-center p-8">
                   <div className="w-full h-full bg-muted/50 rounded flex items-center justify-center text-muted-foreground">
                      High-Res Part Image
                   </div>
                </div>
             </div>

             {/* Product Details (Right side layout like Image 2 cards) */}
             <div className="flex-1 space-y-6">
                <div>
                   <Badge variant="outline" className="mb-2">{product.category}</Badge>
                   <h1 className="text-3xl font-bold tracking-tight mb-2">{product.name}</h1>
                </div>

                <div className="space-y-4">
                   <h3 className="text-lg font-bold border-b pb-2">Technical Parameters</h3>
                   <Table>
                      <TableBody>
                         <TableRow className="hover:bg-transparent">
                            <TableCell className="font-medium bg-primary/10 w-1/3 p-2">Name</TableCell>
                            <TableCell className="p-2">{product.name}</TableCell>
                         </TableRow>
                         <TableRow className="hover:bg-transparent">
                            <TableCell className="font-medium bg-primary/10 p-2">Model</TableCell>
                            <TableCell className="p-2 font-mono">{product.model}</TableCell>
                         </TableRow>
                         <TableRow className="hover:bg-transparent">
                            <TableCell className="font-medium bg-primary/10 p-2">Material</TableCell>
                            <TableCell className="p-2">{product.material}</TableCell>
                         </TableRow>
                         <TableRow className="hover:bg-transparent">
                            <TableCell className="font-medium bg-primary/10 p-2">Surface</TableCell>
                            <TableCell className="p-2">{product.surface_treatment}</TableCell>
                         </TableRow>
                      </TableBody>
                   </Table>
                </div>

                <div className="flex gap-4 pt-4">
                   <Button className="flex-1">Request Quote</Button>
                   <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                   </Button>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}
