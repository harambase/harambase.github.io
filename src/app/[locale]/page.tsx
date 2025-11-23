import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Award, Leaf, ShieldCheck, Zap, Grid, Wrench, Layers } from "lucide-react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations('Home')
  const common = useTranslations('Common')

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-b from-background to-muted/50 py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              {t('newSeries')}
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl lg:leading-tight max-w-3xl">
              {t('heroTitle')}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t('heroSubtitle')}
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/product">
                  {t('exploreProducts')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">{common('learnMore')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 border-t pt-4 text-center">
              <Zap className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-xl font-bold">{t('features.efficiency.title')}</h3>
              <p className="text-muted-foreground">
                {t('features.efficiency.desc')}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-t pt-4 text-center">
              <ShieldCheck className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-xl font-bold">{t('features.warranty.title')}</h3>
              <p className="text-muted-foreground">
                {t('features.warranty.desc')}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-t pt-4 text-center">
              <Leaf className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-xl font-bold">{t('features.eco.title')}</h3>
              <p className="text-muted-foreground">
                {t('features.eco.desc')}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-t pt-4 text-center">
              <Award className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-xl font-bold">{t('features.quality.title')}</h3>
              <p className="text-muted-foreground">
                {t('features.quality.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('featuredSolutions')}</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              {t('featuredSubtitle')}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {/* Solar Modules */}
            <Card>
              <CardHeader>
                <CardTitle>{t('solutions.solar.title')}</CardTitle>
                <CardDescription>{t('solutions.solar.desc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                  <Zap className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>{t('solutions.solar.features.0')}</li>
                  <li>{t('solutions.solar.features.1')}</li>
                  <li>{t('solutions.solar.features.2')}</li>
                </ul>
              </CardContent>
            </Card>

            {/* Station Frames */}
            <Card>
              <CardHeader>
                <CardTitle>{t('solutions.frames.title')}</CardTitle>
                <CardDescription>{t('solutions.frames.desc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                  <Grid className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>{t('solutions.frames.features.0')}</li>
                  <li>{t('solutions.frames.features.1')}</li>
                  <li>{t('solutions.frames.features.2')}</li>
                </ul>
              </CardContent>
            </Card>

            {/* Mounting Parts */}
            <Card>
              <CardHeader>
                <CardTitle>{t('solutions.parts.title')}</CardTitle>
                <CardDescription>{t('solutions.parts.desc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                  <Wrench className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>{t('solutions.parts.features.0')}</li>
                  <li>{t('solutions.parts.features.1')}</li>
                  <li>{t('solutions.parts.features.2')}</li>
                </ul>
              </CardContent>
            </Card>

            {/* Steel Products */}
            <Card>
              <CardHeader>
                <CardTitle>{t('solutions.steel.title')}</CardTitle>
                <CardDescription>{t('solutions.steel.desc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                  <Layers className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>{t('solutions.steel.features.0')}</li>
                  <li>{t('solutions.steel.features.1')}</li>
                  <li>{t('solutions.steel.features.2')}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/product">{common('viewAllProducts')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t('readyToSwitch')}</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              {t('contactTeam')}
            </p>
            <Button asChild size="lg">
              <Link href="/contact">{common('getInTouch')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
