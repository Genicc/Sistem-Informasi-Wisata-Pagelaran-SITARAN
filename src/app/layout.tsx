// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/global/navbar";
import AboutSection from "@/components/section/about";
import Footer from "@/components/global/footer";
import ContactSection from "@/components/section/contact";
import LocalProducts from "@/components/section/products";
import TourPackageSection from "@/components/section/packages";
import CultureSection from "@/components/section/culture";
import { GallerySection } from "@/components/section/gallery";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const siteUrl = "https://sitaran.co.id";

export const revalidate = 3600; // 1 jam

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SITARAN – Sistem Informasi Wisata Pagelaran",
    template: "%s | SITARAN Mentaraman",
  },
  description:
    "Portal resmi SITARAN, Sistem Informasi Wisata Pagelaran di Desa Pagelaran, Kabupaten Malang. Menyajikan seni budaya, tradisi, produk lokal, dan paket eduwisata.",
  keywords: [
    "seni budaya Mentaraman",
    "kampung seni Mentaraman",
    "kampung gerabah Mentaraman",
    "eduwisata seni",
    "wisata budaya Pagelaran",
    "SITARAN",
    "Desa Pagelaran",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "SITARAN – Sistem Informasi Wisata Pagelaran",
    title: "SITARAN – Sistem Informasi Wisata Pagelaran",
    description:
      "Kampung seni dan gerabah di Desa Mentaraman, Kecamatan Pagelaran, Kabupaten Malang. Pusat seni budaya, tradisi, dan eduwisata.",
    images: [
      {
        url: `${siteUrl}/image/og-sitaran.jpg`, // ganti dengan gambar OG kamu
        width: 1200,
        height: 630,
        alt: "Suasana seni budaya di SITARAN Sistem Informasi Wisata Pagelaran",
      },
    ],
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "SITARAN – Sistem Informasi Wisata Pagelaran",
    description:
      "Portal seni budaya, tradisi, dan eduwisata Sistem Informasi Wisata Pagelaran.",
    images: [`${siteUrl}/image/og-sitaran.jpg`],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ----- JSON-LD structured data -----
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SITARAN – Sistem Informasi Wisata Pagelaran",
    url: siteUrl,
    description:
      "Portal resmi SITARAN, Sistem Informasi Wisata Pagelaran di Desa Pagelaran, Kabupaten Malang.",
    inLanguage: "id-ID",
  };

  const attractionJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "SITARAN – Sistem Informasi Wisata Pagelaran",
    description:
      "Kampung seni, budaya, dan kerajinan gerabah dengan program eduwisata di Desa Mentaraman, Kecamatan Pagelaran, Kabupaten Malang.",
    url: siteUrl,
    image: [`${siteUrl}/image/og-sitaran.jpg`],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Suropati", // GANTI dengan alamat lengkap
      addressLocality: "Kecamatan Pagelaran",
      addressRegion: "Kabupaten Malang",
      postalCode: "65174", // GANTI
      addressCountry: "ID",
    },
    telephone: "+62 821-2552-0356", // GANTI
    openingHours: "Mo-Su 08:00-17:00",
    geo: {
      "@type": "GeoCoordinates",
      latitude: -8.1999996, // GANTI dengan koordinat asli
      longitude: 112.6186833, // GANTI dengan koordinat asli
    },
    sameAs: [
      // isi kalau punya sosmed
      // "https://www.instagram.com/akun_sitaran",
    ],
  };

  return (
    <html lang="id">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(attractionJsonLd),
          }}
        />
      </head>
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        <AboutSection />
        <CultureSection />
        <GallerySection />
        <LocalProducts />
        <TourPackageSection />
        <ContactSection />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
