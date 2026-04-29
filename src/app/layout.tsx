import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Providers } from "#/src/components/Providers";
import favicon from "#/public/images/favicon.png";
import SummaryLargeImage from "#/public/images/summary_large_image.png";
import Cookie from "../components/Cookie";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import "./globals.scss";

interface LayoutProps {
  children: ReactNode;
}

const siteUrl = "https://loja.sale";

export const viewport: Viewport = {
  themeColor: "#2563EB",
  colorScheme: "light",
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Loja.Sale",
    default: "Loja.Sale | Digitalize o seu Negócio",
  },
  description:
    "Crie a sua loja online com a Loja.Sale. Uma plataforma da SyncTechX para negócios locais venderem online de forma simples, rápida e profissional.",
  keywords: [
    "Loja.Sale",
    "loja online",
    "e-commerce Moçambique",
    "criar loja online",
    "vender online",
    "SyncTechX",
    "lojas digitais",
    "templates de loja online",
  ],
  authors: [{ name: "SyncTechX" }],
  creator: "SyncTechX",
  publisher: "SyncTechX",
  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
    apple: favicon.src,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Loja.Sale | Digitalize o seu Negócio",
    siteName: "Loja.Sale",
    description:
      "Crie a sua loja online com a Loja.Sale. Plataforma desenvolvida pela SyncTechX para ajudar negócios locais a vender online com facilidade.",
    url: siteUrl,
    type: "website",
    locale: "pt_PT",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "Loja.Sale - Plataforma de Lojas Online",
      },
    ],
  },
  twitter: {
    title: "Loja.Sale | Digitalize o seu Negócio",
    description:
      "Plataforma de criação de lojas online desenvolvida pela SyncTechX. Venda os seus produtos online de forma simples e profissional.",
    card: "summary_large_image",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "Loja.Sale - Plataforma de Lojas Online",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-PT">
      <body>
        <Providers>
          <Cookie />
          <Banner />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}