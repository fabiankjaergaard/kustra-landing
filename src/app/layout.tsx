import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://kustra.com' : 'http://localhost:3006'),
  title: "Kustra - Customer Experience Platform",
  description: "Transform customer experiences with data-driven journey mapping. Visualize, analyze, and optimize every touchpoint in your customer's journey.",
  keywords: ["customer journey", "journey mapping", "customer experience", "CX", "UX", "customer analytics"],
  authors: [{ name: "Kustra Team" }],
  creator: "Kustra",
  publisher: "Kustra",
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
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Kustra - Customer Experience Platform",
    description: "Transform customer experiences with data-driven journey mapping. Visualize, analyze, and optimize every touchpoint in your customer's journey.",
    url: 'https://kustra.com',
    siteName: 'Kustra',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kustra - Customer Experience Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kustra - Customer Experience Platform",
    description: "Transform customer experiences with data-driven journey mapping.",
    images: ['/og-image.png'],
    creator: '@kustra',
  },
  alternates: {
    canonical: 'https://kustra.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
