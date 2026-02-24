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
  themeColor: "#2563EB", // Azul moderno Vendo.Sale
  colorScheme: "light",
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: {
    template: "Vendo.Sale | %s",
    default: "Vendo.Sale",
  },
  description:
    "Vendo.Sale é uma plataforma desenvolvida pela SyncTechX que permite a qualquer negócio criar a sua loja online de forma simples, rápida e profissional. Ideal para lojas, restaurantes, padarias e empreendedores em Moçambique.",
  icons: [{ rel: "icon", url: favicon.src }],
  metadataBase: new URL("https://vendosale.com/"),
  openGraph: {
    title: "Vendo.Sale | Digitalize o seu Negócio",
    siteName: "Vendo.Sale",
    description:
      "Crie a sua loja online com a Vendo.Sale. Plataforma desenvolvida pela SyncTechX para ajudar negócios locais a vender online com facilidade.",
    url: "https://vendosale.com/",
    type: "website",
    locale: "pt_PT",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "Vendo.Sale - Plataforma de Lojas Online",
      },
    ],
  },
  twitter: {
    title: "Vendo.Sale | Digitalize o seu Negócio",
    description:
      "Plataforma de criação de lojas online desenvolvida pela SyncTechX. Venda os seus produtos online de forma simples e profissional.",
    card: "summary_large_image",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "Vendo.Sale - Plataforma de Lojas Online",
      },
    ],
  },
  alternates: {
    canonical: "https://vendosale.com/",
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