import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { Sun as SunIcon, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslations } from "next-intl"

export function Navbar() {
  const t = useTranslations('Navigation')
  const common = useTranslations('Common')

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <SunIcon className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">SolarTech</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            {t('home')}
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            {t('about')}
          </Link>
          <Link
            href="/product"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            {t('products')}
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            {t('contact')}
          </Link>
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <LanguageSwitcher />
          <ModeToggle />
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="/contact">{common('getInTouch')}</Link>
          </Button>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <SunIcon className="h-6 w-6 text-primary" />
                  <span className="text-lg font-bold">SolarTech</span>
                </Link>
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {t('home')}
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {t('about')}
                </Link>
                <Link
                  href="/product"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {t('products')}
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {t('contact')}
                </Link>
                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link href="/contact">{common('getInTouch')}</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
