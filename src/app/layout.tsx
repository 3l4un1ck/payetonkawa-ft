import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PayeTonKawa",
  description:
    "Découvrez nos produits de café premium avec qualité exceptionnelle !",
  openGraph: {
    title: "PayeTonKawa",
    description:
      "Découvrez notre sélection de cafés premium pour tous les passionnés de café.",
    url: "https://payetonkawa.elauriche.live/", // URL de base de votre site
    images: [
      {
        url: "/images/payetonkawa.jpg",
        width: 1200,
        height: 630,
        alt: "Une tasse de café premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // Type de carte (grande image pour le partage)
    title: "Titre Twitter",
    description:
      "Partagez notre amour du café avec notre sélection d'excellence.",
    images: ["/images/partage-image.jpg"], // Image de prévisualisation
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>{/* Le Head sera rempli via le système metadata */}</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
