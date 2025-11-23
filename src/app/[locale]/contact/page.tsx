import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import { useTranslations } from "next-intl"

export default function ContactPage() {
  const t = useTranslations('Contact')
  const form = useTranslations('Contact.form')
  const info = useTranslations('Contact.info')

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('title')}</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">{info('address')}</h3>
                      <p className="text-muted-foreground">
                        123 Solar Innovation Blvd.<br />
                        Clean Tech Park, CT 06000<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">{info('phone')}</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9am - 6pm EST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">{info('email')}</h3>
                      <p className="text-muted-foreground">sales@solartech.com</p>
                      <p className="text-muted-foreground">support@solartech.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video w-full bg-muted rounded-xl flex items-center justify-center border text-muted-foreground">
                <MapPin className="h-12 w-12 opacity-20" />
                <span className="ml-2 font-medium">Interactive Map Area</span>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
               <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                     Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
               </CardHeader>
               <CardContent>
                  <form className="space-y-6">
                     <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                           <Label htmlFor="first-name">{form('name')}</Label>
                           <Input id="first-name" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="email">{form('email')}</Label>
                           <Input id="email" placeholder="john@example.com" type="email" required />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="subject">{form('subject')}</Label>
                        <select 
                           id="subject" 
                           className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        >
                           <option>Wholesale / Distribution</option>
                           <option>Commercial Project</option>
                           <option>Technical Support</option>
                           <option>General Inquiry</option>
                        </select>
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="message">{form('message')}</Label>
                        <Textarea 
                           id="message" 
                           placeholder="Tell us about your project requirements..." 
                           className="min-h-[120px]"
                           required
                        />
                     </div>
                     <Button type="submit" className="w-full">{form('send')}</Button>
                  </form>
               </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
