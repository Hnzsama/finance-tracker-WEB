"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PieChart,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Menu,
  Wallet,
  MessageCircle,
  Smartphone,
  LayoutDashboard,
  Check,
} from "lucide-react";
import { useTranslation } from "@/i18n/client"
import { LanguageToggle } from "@/components/language-toggle";

export default function LandingPage() {
  const { t, i18n } = useTranslation('common')

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Wallet className="h-6 w-6 text-primary" />
            <span>FinanceTracker</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#how-it-works" className="hover:text-primary transition-colors">
              {t('landing.nav.how_it_works')}
            </Link>
            <Link href="#features" className="hover:text-primary transition-colors">
              {t('landing.nav.features')}
            </Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">
              {t('landing.nav.pricing')}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <div className="hidden md:flex gap-2">
              <Link href={`/${i18n.language}/login`}>
                <Button variant="ghost">{t('landing.nav.login')}</Button>
              </Link>
              <Link href={`/${i18n.language}/register`}>
                <Button>{t('landing.nav.get_started')}</Button>
              </Link>
            </div>
            {/* Mobile Menu Button - Visual only for now */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-30"></div>

          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="mx-auto max-w-[800px] space-y-4">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-primary/10 text-primary mb-4">
                <MessageCircle className="w-3 h-3 mr-1" />
                {t('landing.hero.powered_by')}
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
                {t('landing.hero.title_line_1')} <br className="hidden sm:inline" />
                <span className="text-primary">{t('landing.hero.title_line_2')}</span>
              </h1>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                {t('landing.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Link href={`/${i18n.language}/register`}>
                  <Button size="lg" className="px-8 text-base">
                    {t('landing.hero.start_chatting')} <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                {t('landing.features.title')}
              </h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto text-lg">
                {t('landing.features.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((num) => (
                <Card key={num} className="bg-background border-none shadow-lg">
                  <CardHeader>
                    {num === 1 && <Smartphone className="h-10 w-10 text-primary mb-2" />}
                    {num === 2 && <LayoutDashboard className="h-10 w-10 text-primary mb-2" />}
                    {num === 3 && <ShieldCheck className="h-10 w-10 text-primary mb-2" />}

                    <CardTitle>{t(`landing.features.card_${num}_title`)}</CardTitle>
                    <CardDescription>
                      {t(`landing.features.card_${num}_desc`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {/* Assuming list items 1-3 exist for each card */}
                      {[1, 2, 3].map((itemNum) => (
                        <li key={itemNum} className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" />
                          {t(`landing.features.card_${num}_list.${itemNum}`)}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-3xl border bg-primary/5 px-6 py-16 md:px-12 text-center shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">
                  {t('landing.cta.title')}
                </h2>
                <p className="text-muted-foreground max-w-[600px] mx-auto text-lg mb-8">
                  {t('landing.cta.subtitle')}
                </p>
                <Link href={`/${i18n.language}/register`}>
                  <Button size="lg" className="px-8 text-lg font-semibold h-12">
                    {t('landing.cta.button')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 md:py-16 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <Wallet className="h-6 w-6 text-primary" />
                <span>FinanceTracker</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('landing.footer.tagline')}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">{t('landing.footer.product')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">{t('landing.nav.features')}</Link></li>
                <li><Link href="#" className="hover:text-primary">WhatsApp Bot</Link></li>
                <li><Link href="#" className="hover:text-primary">{t('landing.nav.pricing')}</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">{t('landing.footer.company')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">About</Link></li>
                <li><Link href="#" className="hover:text-primary">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">{t('landing.footer.legal')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">Privacy</Link></li>
                <li><Link href="#" className="hover:text-primary">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} FinanceTracker. {t('landing.footer.rights')}
          </div>
        </div>
      </footer>
    </div>
  );
}