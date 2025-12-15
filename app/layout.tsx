import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AuraBackground } from "@/components/ui/aura-background";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ClientLayout } from "@/components/layout/client-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://venturevive.io'),
  title: {
    default: 'VentureVive | Social Media Management for VC & Web3',
    template: '%s | VentureVive',
  },
  description: 'Specialized social media management for venture capital firms and Web3 startups. We help VCs attract better deal flow through strategic digital presence.',
  keywords: ['VC marketing', 'venture capital social media', 'Web3 marketing', 'VC branding', 'startup marketing', 'deal flow', 'founder outreach'],
  authors: [{ name: 'VentureVive' }],
  creator: 'VentureVive',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://venturevive.io',
    siteName: 'VentureVive',
    title: 'VentureVive | Social Media Management for VC & Web3',
    description: 'Specialized social media management for venture capital firms and Web3 startups that drives real business outcomes.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VentureVive - Social Media for VCs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VentureVive | Social Media Management for VC & Web3',
    description: 'Specialized social media management for venture capital firms and Web3 startups.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative`}
      >
        <ClientLayout>
          <AuraBackground />
          <Navbar />
          <main className="relative z-0">
            {children}
          </main>
          <Footer />
        </ClientLayout>
        <SpeedInsights />
      </body>
    </html>
  );
}
