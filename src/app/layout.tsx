import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Providers } from "#/src/components/Providers";
import favicon from "#/public/images/favicon.png";
import SummaryLargeImage from "#/public/images/summary_large_image.png";
import Cookie from "../components/Cookie";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./globals.scss";

interface LayoutProps {
  children: ReactNode;
}

export const viewport: Viewport = {
  themeColor: "#2563EB", // Azul moderno Loja.Sale
  colorScheme: "light",
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: {
    template: "Loja.Sale | %s",
    default: "Loja.Sale",
  },
  description:
    "Loja.Sale é uma plataforma desenvolvida pela SyncTechX que permite a qualquer negócio criar a sua loja online de forma simples, rápida e profissional. Ideal para lojas, restaurantes, padarias e empreendedores em Moçambique.",
  icons: [{ rel: "icon", url: favicon.src }],
  metadataBase: new URL("https://Loja.sale/"),
  openGraph: {
    title: "Loja.Sale | Digitalize o seu Negócio",
    siteName: "Loja.Sale",
    description:
      "Crie a sua loja online com a Loja.Sale. Plataforma desenvolvida pela SyncTechX para ajudar negócios locais a vender online com facilidade.",
    url: "https://Loja.sale/",
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
  alternates: {
    canonical: "https://Loja.sale/",
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