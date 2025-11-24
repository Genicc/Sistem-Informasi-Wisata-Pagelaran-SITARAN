// src/app/page.tsx
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Kaushan_Script } from "next/font/google";
import type { Metadata } from "next";

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "SITARAN - Sistem Informasi Wisata Pagelaran",
  description:
    "Pembahasan lengkap tentang seni budaya Mentaraman di Desa Pagelaran: karawitan, wayang, tari tradisional, hingga tradisi selamatan.",
  alternates: {
    canonical: "/sistem-informasi-wisata-pagelaran",
  },
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/image/gapura_pagelaran.png"
            alt="Gerbang Desa Seni Sitaran"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay gradasi putih supaya teks lebih kebaca */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/70 to-white" />
        </div>

        {/* ILUSTRASI KIRI & KANAN (4 gambar) */}
        <div className="pointer-events-none absolute inset-0 flex items-stretch justify-between z-10">
          {/* KOLOM KIRI */}
          <div
            className="
              flex flex-col justify-center items-start
              gap-3 md:gap-4
              w-[160px] md:w-[180px] lg:w-[220px] xl:w-[260px]
            "
          >
            {/* Wayang kiri (atas) */}
            <div className="relative -ml-2 md:-ml-4 lg:-ml-6 mt-32 md:mt-34 lg:mt-40 fade-in-left">
              <Image
                src="/image/wayang.png"
                alt="Ilustrasi Wayang Pagelaran"
                width={500}
                height={500}
                className="
                  w-full h-auto drop-shadow-2xl
                  rotate-[4deg]
                  scale-110 sm:scale-120 md:scale-135
                "
              />
            </div>

            {/* Gerabah kiri (bawah) */}
            <div className="relative -ml-2 md:-ml-4 lg:-ml-6 mt-112 md:mt-84 lg:mt-65 fade-in-left">
              <Image
                src="/image/gerabah2.png"
                alt="Ilustrasi Gerabah Pagelaran"
                width={500}
                height={500}
                style={{
                  transform: "scaleX(-1)",
                }}
                className="
                  w-full h-auto drop-shadow-2xl
                  scale-105 sm:scale-115 md:scale-125
                "
              />
            </div>
          </div>

          {/* KOLOM KANAN */}
          <div
            className="
              flex flex-col justify-center items-end
              gap-3 md:gap-4
              w-[160px] md:w-[180px] lg:w-[220px] xl:w-[260px]
              transform-gpu
            "
          >
            {/* Wayang kanan (atas) */}
            <div className="relative -mr-2 md:-mr-4 lg:-mr-6 mt-32 md:mt-34 lg:mt-40 fade-in-right">
              <Image
                src="/image/wayang.png"
                alt="Ilustrasi Wayang Pagelaran"
                width={500}
                height={500}
                style={{
                  transform: "scaleX(-1)",
                }}
                className="
                  w-full h-auto drop-shadow-2xl
                  -rotate-[4deg]
                  scale-110 sm:scale-120 md:scale-135
                "
              />
            </div>

            {/* Gerabah kanan (bawah) */}
            <div className="relative -mr-2 md:-mr-4 lg:-mr-6 mt-112 md:mt-84 lg:mt-65 fade-in-right">
              <Image
                src="/image/gerabah2.png"
                alt="Ilustrasi Gerabah Pagelaran"
                width={500}
                height={500}
                className="
                  w-full h-auto drop-shadow-2xl
                  scale-105 sm:scale-115 md:scale-125
                "
              />
            </div>
          </div>
        </div>

        {/* Konten tengah */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          <p
            className="
              inline-flex items-center gap-2 
              rounded-full 
              bg-[#FFF7F0]/80
              px-4 py-1 
              text-[11px] md:text-sm 
              font-semibold 
              uppercase 
              tracking-[0.16em] 
              text-[#D48454]
              drop-shadow-lg
            "
          >
            Ciptakan Kenangan Tak Terlupakan 
            <br />
            Bersama Kami
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900">
            JELAJAHI DESA EDUWISATA{" "}
            <span className={`${kaushan.className} block text-[#e98228]`}>
              PAGELARAN
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-800">
            Desa Eduwisata Pagelaran : Eksotisme Kampung Seni Budaya Mentaraman
            &amp; Warisan Kerajinan Gerabah Tradisional
          </p>

          <p className="text-base md:text-lg text-slate-800">
            Nikmati pengalaman perjalanan yang mengesankan di kampung seni dan
            budaya Pagelaran
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-[#e98228] px-8 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-[#cf701a] transition-colors"
            >
              Jelajahi Desa
              <ArrowDown className="h-4 w-4 animate-bounce-slow" />
            </a>
          </div>
        </div>

        {/* Scroll indicator di bawah (opsional) */}
        {/* 
        <div className="absolute bottom-8 inset-x-0 flex justify-center z-20">
          <div className="flex flex-col items-center gap-3 text-[#e98228]">
            <span className="text-[10px] tracking-[0.25em] uppercase">
              Scroll
            </span>
            <div className="h-10 w-6 rounded-full border border-[#e98228]/70 flex items-start justify-center p-1">
              <span className="h-2 w-2 rounded-full bg-[#e98228] animate-bounce" />
            </div>
          </div>
        </div>
        */}
      </section>

      {/* SECTION BERIKUTNYA (contoh) */}
      {/* 
      <section id="about" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Tentang Desa Seni Sitaran
          </h2>
          <p className="mt-4 text-slate-700">
            (Tulis deskripsi desa di sini…)
          </p>
        </div>
      </section>
      */}
    </main>
  );
}
