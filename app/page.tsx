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
} from "lucide-react";

export default function LandingPage() {
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
              How it Works
            </Link>
            <Link href="#features" className="hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2">
              <Link href="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link href="/register">
                <Button>Get Started</Button>
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
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="mx-auto max-w-[800px] space-y-4">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-green-500/10 text-green-600 mb-4">
                <MessageCircle className="w-3 h-3 mr-1" />
                Powered by WhatsApp
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
                Chat to Track. <br className="hidden sm:inline" />
                <span className="text-primary">Login to View.</span>
              </h1>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                The easiest way to track expenses. Just send a message to our WhatsApp bot,
                and view your beautiful financial dashboard right here.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Link href="/register">
                  <Button size="lg" className="px-8 text-base">
                    Start Chatting <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button variant="outline" size="lg" className="px-8 text-base">
                    How it Works
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Visual: Phone + Dashboard */}
            <div className="mt-16 mx-auto max-w-[1000px] border rounded-xl overflow-hidden shadow-2xl bg-card">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center justify-center text-muted-foreground relative">
                {/* Abstract representation of the flow */}
                <div className="flex items-center gap-8 md:gap-16">
                  <div className="flex flex-col items-center gap-2 animate-pulse">
                    <Smartphone className="h-16 w-16 text-primary" />
                    <span className="text-sm font-medium">WhatsApp Input</span>
                  </div>
                  <ArrowRight className="h-8 w-8 text-muted-foreground/50" />
                  <div className="flex flex-col items-center gap-2">
                    <LayoutDashboard className="h-16 w-16 text-primary" />
                    <span className="text-sm font-medium">Web Dashboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Simplicity represents ultimate sophistication
              </h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
                Stop wrestling with complex finance apps. Use the chat app you already love.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-green-500/10 rounded-full text-green-600">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">1. Just Chat</h3>
                <p className="text-muted-foreground">
                  Send a message like "Spent $15 on lunch" or "Salary $3000". Our smart bot understands you.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full text-primary">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">2. Instant Sync</h3>
                <p className="text-muted-foreground">
                  Your data is automatically categorized and synced to your secure cloud dashboard in seconds.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-500/10 rounded-full text-blue-600">
                  <PieChart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">3. View Insights</h3>
                <p className="text-muted-foreground">
                  Log in to this website to see deep analytics, monthly trends, and your net worth growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                The best of both worlds
              </h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
                The speed of chat combined with the power of a full web dashboard.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-card/50 border-input/50 backdrop-blur-sm transition-all hover:bg-card hover:shadow-md">
                <CardHeader>
                  <MessageCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Natural Language</CardTitle>
                  <CardDescription>
                    No forms to fill. Just talk naturally. "Coffee 5" is all you need to type.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Smart categorization</li>
                    <li>Supports multiple currencies</li>
                    <li>Context aware processing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-input/50 backdrop-blur-sm transition-all hover:bg-card hover:shadow-md">
                <CardHeader>
                  <PieChart className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Beautiful Dashboard</CardTitle>
                  <CardDescription>
                    When you need the big picture, your web dashboard is waiting for you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Interactive charts</li>
                    <li>Downloadable reports</li>
                    <li>Budget vs Actuals</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-input/50 backdrop-blur-sm transition-all hover:bg-card hover:shadow-md">
                <CardHeader>
                  <ShieldCheck className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Secure & Private</CardTitle>
                  <CardDescription>
                    Your financial data is encrypted. Only you can access your dashboard.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>End-to-end encryption</li>
                    <li>2-Factor Authentication</li>
                    <li>Export your data anytime</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-2xl border bg-background px-6 py-16 md:px-12 text-center shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">
                Start tracking in seconds
              </h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto text-lg mb-8">
                Connect our bot to your WhatsApp and never miss an expense again.
              </p>
              <Link href="/register">
                <Button size="lg" className="px-8">
                  Get My Bot Link
                </Button>
              </Link>
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
                Chat to track. Click to view.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">Features</Link></li>
                <li><Link href="#" className="hover:text-primary">WhatsApp Bot</Link></li>
                <li><Link href="#" className="hover:text-primary">Pricing</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">About</Link></li>
                <li><Link href="#" className="hover:text-primary">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">Privacy</Link></li>
                <li><Link href="#" className="hover:text-primary">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} FinanceTracker. All rights reserved. WhatsApp is a trademark of Meta Platforms, Inc.
          </div>
        </div>
      </footer>
    </div>
  );
}