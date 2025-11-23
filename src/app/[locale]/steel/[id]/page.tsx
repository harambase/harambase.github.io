import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Download, Share2 } from "lucide-react"
import { Link } from "@/i18n/routing"
import { getData } from "@/lib/data"
import { steelProducts } from "@/lib/data/en" // For static params

type Props = {
  params: Promise<{ id: string, locale: string }>
}

export async function generateStaticParams() {
  return steelProducts.map((product) => ({
    id: product.id,
  }))
}

export default async function SteelDetailPage({ params }: Props) {
  const { id, locale } = await params
  const { steelProducts } = getData(locale)
  const product = steelProducts.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen pb-20">
       {/* Breadcrumb / Back Link */}
       <div className="bg-muted/30 border-b">
         <div className="container py-4">
            <Link href="/product" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to Products
            </Link>
         </div>
       </div>

       <div className="container py-8 md:py-12 space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="uppercase">{product.category}</Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                  {product.description}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                   <Button size="lg" className="gap-2">
                      <Download className="h-4 w-4" /> Download PDF
                   </Button>
                   <Button size="lg" variant="outline" className="gap-2">
                      <Share2 className="h-4 w-4" /> Share
                   </Button>
                </div>
          </div>

          <Separator />

          {/* Comparison Table */}
          <div className="space-y-6">
              <div className="flex items-center justify-between">
                 <h2 className="text-2xl font-bold">Cross-Reference Table</h2>
                 <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    Standard Equivalents
                 </span>
              </div>
              
              <div className="border rounded-lg overflow-hidden shadow-sm">
                  <Table>
                      <TableHeader>
                          <TableRow className="bg-muted/50">
                              <TableHead rowSpan={2} className="w-[150px] border-r font-bold text-center bg-muted/20">
                                  Region / Standard
                              </TableHead>
                              <TableHead colSpan={1} className="text-center border-r font-bold">China (GB)</TableHead>
                              <TableHead colSpan={2} className="text-center border-r font-bold">Japan (JIS)</TableHead>
                              <TableHead colSpan={1} className="text-center border-r font-bold">USA (ASTM)</TableHead>
                              <TableHead colSpan={3} className="text-center font-bold">Germany (DIN)</TableHead>
                          </TableRow>
                          <TableRow className="bg-muted/30">
                              {/* China */}
                              <TableHead className="text-center border-r text-xs">Grade</TableHead>
                              {/* Japan */}
                              <TableHead className="text-center border-r text-xs">Grade</TableHead>
                              <TableHead className="text-center border-r text-xs">Std. No</TableHead>
                              {/* USA */}
                              <TableHead className="text-center border-r text-xs">Grade</TableHead>
                              {/* Germany */}
                              <TableHead className="text-center border-r text-xs">Grade</TableHead>
                              <TableHead className="text-center border-r text-xs">Mat. No</TableHead>
                              <TableHead className="text-center text-xs">Std. No</TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                          {product.grades.map((row, idx) => (
                              <TableRow key={idx} className="hover:bg-muted/10">
                                  {idx === 0 && (
                                      <TableCell rowSpan={product.grades.length} className="font-bold text-center border-r bg-muted/5 align-middle">
                                          {product.category}
                                      </TableCell>
                                  )}

                                  {/* China */}
                                  <TableCell className="text-center border-r font-medium">{row.china_gb.grade}</TableCell>
                                  
                                  {/* Japan */}
                                  <TableCell className="text-center border-r">{row.japan_jis.grade}</TableCell>
                                  <TableCell className="text-center border-r text-muted-foreground text-xs">{row.japan_jis.standard_no}</TableCell>
                                  
                                  {/* USA */}
                                  <TableCell className="text-center border-r">{row.usa_astm.grade}</TableCell>
                                  
                                  {/* Germany */}
                                  <TableCell className="text-center border-r">{row.germany_din.grade}</TableCell>
                                  <TableCell className="text-center border-r text-muted-foreground text-xs">{row.germany_din.material_no}</TableCell>
                                  <TableCell className="text-center text-muted-foreground text-xs">{row.germany_din.standard_no}</TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </div>
          </div>
       </div>
    </div>
  )
}
