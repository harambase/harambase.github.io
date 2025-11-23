import { getData } from "@/lib/data"
import { ProductList } from "@/components/product-list"
import { CompareFloatingButton } from "@/components/compare-floating-button"
import { getTranslations } from "next-intl/server"

// Type for params in Next.js 15+ (params is a Promise)
type Props = {
  params: Promise<{ locale: string }>
}

export default async function ProductPage({ params }: Props) {
  const { locale } = await params
  const { products, steelProducts, stationFrameProducts, mountingPartProducts } = getData(locale)
  const t = await getTranslations({locale, namespace: 'Product'})

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Header Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('title')}</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Unified Product List with Filters */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
            <ProductList 
                solarProducts={products} 
                steelProducts={steelProducts} 
                stationFrames={stationFrameProducts}
                mountingParts={mountingPartProducts}
            />
        </div>
      </section>
      
      {/* Floating Compare Button (Only relevant for solar currently) */}
      <CompareFloatingButton />
    </div>
  )
}
