import { Link } from "@/i18n/routing"
import { Sun } from "lucide-react"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations('Navigation')
  
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-8 py-12 md:flex-row md:items-start">
        <div className="flex-1 space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Sun className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">SolarTech</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            Leading the way in sustainable energy solutions. Manufacturing high-efficiency solar panels for a brighter future.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">{t('products')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/product" className="hover:text-foreground transition-colors">
                  Monocrystalline
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-foreground transition-colors">
                  Polycrystalline
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-foreground transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SolarTech Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
