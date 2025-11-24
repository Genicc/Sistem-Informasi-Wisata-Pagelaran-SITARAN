"use client";

import { useState } from "react";
import { MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

type TourPackage = {
  id: string;
  name: string;
  duration: string;
  highlight: string;
  price: string;
  level: "Hemat" | "Standar" | "Premium" | "Eksklusif";
};

const villages = [
  {
    id: "desa1",
    name: "Desa A",
    subtitle: "Wisata edukasi budaya & kerajinan desa",
    packages: [
      {
        id: "desa1-1",
        name: "Paket Jelajah Desa",
        duration: "Half Day • 4–5 Jam",
        highlight: "Keliling kampung, kunjungan sentra kerajinan, foto spot ikonik.",
        price: "Rp95.000 / orang",
        level: "Hemat",
      },
      {
        id: "desa1-2",
        name: "Paket Edukasi Budaya",
        duration: "Full Day • 7–8 Jam",
        highlight: "Workshop kerajinan, story telling sejarah desa, makan siang lokal.",
        price: "Rp145.000 / orang",
        level: "Standar",
      },
      {
        id: "desa1-3",
        name: "Paket Experience Lengkap",
        duration: "Full Day+ • 8–9 Jam",
        highlight: "Workshop lengkap, tur kebun, sesi foto, live performance lokal.",
        price: "Rp195.000 / orang",
        level: "Premium",
      },
    ] as TourPackage[],
  },
  {
    id: "desa2",
    name: "Desa B",
    subtitle: "Wisata alam & aktivitas outdoor desa",
    packages: [
      {
        id: "desa2-1",
        name: "Paket Jelajah Alam",
        duration: "Half Day • 4–5 Jam",
        highlight: "Tracking ringan, susur sawah, edukasi pertanian lokal.",
        price: "Rp100.000 / orang",
        level: "Hemat",
      },
      {
        id: "desa2-2",
        name: "Paket Sunrise / Sunset",
        duration: "Special • 3–4 Jam",
        highlight: "Spot sunrise/sunset terbaik, minuman hangat, sesi foto.",
        price: "Rp130.000 / orang",
        level: "Standar",
      },
      {
        id: "desa2-3",
        name: "Paket Camping Experience",
        duration: "1 Hari 1 Malam",
        highlight: "Camping area desa, api unggun, cerita rakyat & games malam.",
        price: "Rp250.000 / orang",
        level: "Eksklusif",
      },
    ] as TourPackage[],
  },
];

const PaketWisataSection = () => {
  const [activeVillageId, setActiveVillageId] = useState<string>("desa1");

  const activeVillage = villages.find((v) => v.id === activeVillageId)!;

  const handleScrollToBooking = () => {
    // Kalau sudah ada section form pemesanan dengan id="booking"
    const el = document.querySelector("#booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="packages"
      className="relative bg-[#fff7f2] py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#d37a2a]">
            PAKET WISATA
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#3b2a20]">
            Pilih Pengalaman Wisata Desa
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#8a7461]">
            Tersedia berbagai pilihan paket dari dua desa wisata. 
            Sesuaikan dengan kebutuhan rombongan, agenda kunjungan, 
            dan budget perjalananmu.
          </p>
        </div>

        {/* Toggle Desa */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 rounded-full bg-white/70 p-1 shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
            {villages.map((village) => {
              const isActive = village.id === activeVillageId;
              return (
                <button
                  key={village.id}
                  type="button"
                  onClick={() => setActiveVillageId(village.id)}
                  className={[
                    "px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all",
                    isActive
                      ? "bg-[#e98228] text-white shadow-md"
                      : "text-[#8a7461] hover:bg-[#ffe7d3]",
                  ].join(" ")}
                >
                  {village.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Subtitle Desa Aktif */}
        <div className="text-center mb-8 md:mb-10">
          <p className="text-xs md:text-sm text-[#8a7461]">
            {activeVillage.subtitle}
          </p>
        </div>

        {/* Grid Paket */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activeVillage.packages.map((pkg) => (
            <article
              key={pkg.id}
              className="
                group
                rounded-3xl
                bg-white
                shadow-[0_22px_50px_rgba(0,0,0,0.06)]
                border border-orange-50
                flex flex-col
                overflow-hidden
                hover:-translate-y-1.5
                hover:shadow-[0_26px_60px_rgba(0,0,0,0.08)]
                transition-all
              "
            >
              <div className="px-6 py-6 md:px-7 md:py-7 flex-1 flex flex-col gap-4">
                {/* Level & Nama Paket */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={[
                      "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide",
                      pkg.level === "Hemat" && "bg-[#e7f6ea] text-[#277a3f]",
                      pkg.level === "Standar" && "bg-[#ffe7d3] text-[#c05e12]",
                      pkg.level === "Premium" && "bg-[#f4e9ff] text-[#6b3fb9]",
                      pkg.level === "Eksklusif" && "bg-[#fde7ec] text-[#b4274a]",
                    ].join(" ")}
                  >
                    {pkg.level} Package
                  </span>
                  <span className="text-[11px] md:text-xs text-[#b19780] flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    Min. 10 orang
                  </span>
                </div>

                <h3 className="text-base md:text-lg font-semibold text-[#3b2a20] leading-snug">
                  {pkg.name}
                </h3>

                {/* Durasi */}
                <div className="inline-flex items-center gap-2 rounded-full bg-[#fff7f2] px-3 py-1 text-[11px] md:text-xs text-[#8a7461]">
                  <Clock className="h-3 w-3" />
                  <span>{pkg.duration}</span>
                </div>

                {/* Highlight */}
                <p className="mt-1 text-sm text-[#8a7461] leading-relaxed">
                  {pkg.highlight}
                </p>

                {/* Info Lokasi (optional) */}
                <div className="mt-2 flex items-center gap-2 text-[11px] md:text-xs text-[#b19780]">
                  <MapPin className="h-3 w-3" />
                  <span>Meeting point utama di balai desa</span>
                </div>

                {/* Price & CTA */}
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[11px] md:text-xs text-[#b19780]">
                      Mulai dari
                    </p>
                    <p className="text-base md:text-lg font-semibold text-[#e98228]">
                      {pkg.price}
                    </p>
                    <p className="text-[11px] md:text-xs text-[#b19780]">
                      *Harga dapat menyesuaikan jumlah peserta
                    </p>
                  </div>

                  <Button
                    size="sm"
                    className="rounded-full bg-[#e98228] hover:bg-[#cf701a] text-xs md:text-sm font-semibold shadow-md shadow-orange-500/30"
                    onClick={handleScrollToBooking}
                  >
                    Pesan Paket
                  </Button>
                </div>
              </div>

              {/* Accent line di bawah card */}
              <div className="h-1 bg-gradient-to-r from-[#e98228] via-[#f6b45b] to-[#ffe7d3]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaketWisataSection;
