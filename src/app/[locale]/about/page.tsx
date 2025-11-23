import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Factory, Globe, Leaf } from "lucide-react"
import { useTranslations } from "next-intl"

export default function AboutPage() {
  const t = useTranslations('About')
  const common = useTranslations('Common')

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('title')}</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Pioneering the future of clean energy with innovative solar manufacturing since 2010.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">{t('mission')}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('missionText')}
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  <span className="font-medium">Sustainability First</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="font-medium">Global Impact</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
               <div className="aspect-video w-full bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                  {/* Placeholder for company image */}
                  <Factory className="h-24 w-24 opacity-20" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Standards */}
      <section className="py-12 md:py-24 bg-muted/30 border-y">
        <div className="container px-4 md:px-6">
           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
              <div className="space-y-2">
                 <h3 className="text-4xl font-bold">15+</h3>
                 <p className="text-muted-foreground font-medium">{t('stats.years')}</p>
              </div>
              <div className="space-y-2">
                 <h3 className="text-4xl font-bold">5GW+</h3>
                 <p className="text-muted-foreground font-medium">{t('stats.capacity')}</p>
              </div>
              <div className="space-y-2">
                 <h3 className="text-4xl font-bold">50+</h3>
                 <p className="text-muted-foreground font-medium">{t('stats.countries')}</p>
              </div>
              <div className="space-y-2">
                 <h3 className="text-4xl font-bold">200+</h3>
                 <p className="text-muted-foreground font-medium">{t('stats.employees')}</p>
              </div>
           </div>
        </div>
      </section>

      {/* Manufacturing Standards */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Manufacturing Excellence</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              Our state-of-the-art facilities employ rigorous quality control measures to ensure every panel meets the highest international standards.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
               <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                     <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">ISO 9001 Certified</h3>
                  <p className="text-muted-foreground text-sm">
                     Our quality management systems are certified to ensure consistent product quality and customer satisfaction.
                  </p>
               </CardContent>
            </Card>
            <Card>
               <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                     <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Automated Production</h3>
                  <p className="text-muted-foreground text-sm">
                     Fully automated production lines minimize human error and maximize precision in every cell and module.
                  </p>
               </CardContent>
            </Card>
            <Card>
               <CardContent className="pt-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                     <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Rigorous Testing</h3>
                  <p className="text-muted-foreground text-sm">
                     Every panel undergoes triple EL testing and mechanical load testing to guarantee long-term reliability.
                  </p>
               </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
