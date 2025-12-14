import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { languages } from "@/i18n/settings";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://finance-tracker-snowy-seven.vercel.app"),

  title: {
    default: "Finance Tracker Dashboard - Kelola Keuangan Pribadi",
    template: "%s | Finance Tracker Dashboard",
  },

  description: "Pantau pemasukan, pengeluaran, dan tabungan Anda dengan mudah menggunakan Finance Tracker Dashboard.",

  keywords: [
    "Finance Tracker",
    "Dashboard Keuangan",
    "Personal Finance",
    "Next.js",
    "React"
  ],

  authors: [
    { name: "Luqman Bil As'har", url: "https://luqmanbilashar.my.id" },
    { name: "Nama Penulis Kedua", url: "https://linkedin.com/in/penulis2" }
  ],

  creator: "Tim Finance Tracker",

  openGraph: {
    title: "Finance Tracker Dashboard",
    description: "Kelola keuangan pribadi Anda dengan analitik real-time.",
    url: "https://finance-tracker-snowy-seven.vercel.app",
    siteName: "Finance Tracker Dashboard",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Preview Finance Tracker Dashboard",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Finance Tracker Dashboard",
    description: "Pantau keuangan Anda dengan mudah dan efisien.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params
  return (
    <html lang={lang} suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
