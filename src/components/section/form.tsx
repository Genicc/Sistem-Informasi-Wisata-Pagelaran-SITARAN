"use client";

import { useState } from "react";

type VillageKey = "desaA" | "desaB";

const villages = {
  desaA: {
    name: "Desa Eduwisata Mentaraman",
    subtitle: "Wisata edukasi, alam, dan budaya",
    highlight: "Cocok untuk kunjungan sekolah, komunitas, dan keluarga.",
    packages: [
      {
        name: "Paket Edukasi Pertanian",
        duration: "Half Day",
        activities: ["Tur kebun edukasi", "Praktik menanam", "Workshop mini"],
        price: "Mulai dari Rp85.000/orang",
      },
      {
        name: "Paket Wisata Budaya",
        duration: "Full Day",
        activities: ["Tur kampung budaya", "Workshop seni tradisional", "Pertunjukan lokal"],
        price: "Mulai dari Rp120.000/orang",
      },
      {
        name: "Paket Outbound Seru",
        duration: "Full Day",
        activities: ["Fun games", "Team building", "Makan siang lokal"],
        price: "Mulai dari Rp150.000/orang",
      },
    ],
  },
  desaB: {
    name: "Desa Seni & Gerabah",
    subtitle: "Eksplorasi kriya, seni, dan kerajinan lokal",
    highlight: "Ideal untuk study tour, UMKM, dan pelatihan kreatif.",
    packages: [
      {
        name: "Paket Workshop Gerabah",
        duration: "Half Day",
        activities: ["Tur galeri gerabah", "Praktik membuat gerabah", "Foto hasil karya"],
        price: "Mulai dari Rp90.000/orang",
      },
      {
        name: "Paket Seni & Kreatif",
        duration: "Full Day",
        activities: ["Workshop melukis", "Kunjungan galeri seni", "Sesi diskusi kreatif"],
        price: "Mulai dari Rp130.000/orang",
      },
      {
        name: "Paket UMKM & Kuliner",
        duration: "Full Day",
        activities: ["Tur UMKM lokal", "Cicip kuliner khas", "Sharing session branding"],
        price: "Mulai dari Rp145.000/orang",
      },
    ],
  },
};

export default function TourPackages() {
  const [selectedVillage, setSelectedVillage] = useState<VillageKey>("desaA");
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const currentVillage = villages[selectedVillage];

  const handleVillageChange = (value: VillageKey) => {
    setSelectedVillage(value);
    setSelectedPackage(""); // reset paket ketika desa diganti
  };

  return (
    <>
      {/* SECTION: PAKET WISATA */}
      <section
        id="packages"
        className="w-full bg-[#fff7f2] py-16 md:py-24"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#e98228]">
              Paket Wisata
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#3b2a20]">
              Pilihan Paket Wisata dari Dua Desa
            </h2>
            <p className="mt-4 text-sm md:text-base text-[#8a7461]">
              Sesuaikan kebutuhan kunjungan Anda dengan pilihan paket dari desa eduwisata dan desa seni.
            </p>
          </div>

          {/* Toggle Desa */}
          <div className="mt-8 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => handleVillageChange("desaA")}
              className={`rounded-full px-5 py-2 text-sm md:text-base font-semibold transition-all border ${
                selectedVillage === "desaA"
                  ? "bg-[#e98228] text-white border-[#e98228] shadow-lg shadow-orange-400/30"
                  : "bg-white text-[#8a7461] border-orange-100 hover:border-[#e98228]/60"
              }`}
            >
              Desa Mentaraman
            </button>
            <button
              type="button"
              onClick={() => handleVillageChange("desaB")}
              className={`rounded-full px-5 py-2 text-sm md:text-base font-semibold transition-all border ${
                selectedVillage === "desaB"
                  ? "bg-[#e98228] text-white border-[#e98228] shadow-lg shadow-orange-400/30"
                  : "bg-white text-[#8a7461] border-orange-100 hover:border-[#e98228]/60"
              }`}
            >
              Desa Seni & Gerabah
            </button>
          </div>

          {/* Deskripsi Desa */}
          <div className="mt-8 text-center max-w-xl mx-auto">
            <h3 className="text-lg md:text-xl font-semibold text-[#3b2a20]">
              {currentVillage.name}
            </h3>
            <p className="mt-1 text-sm md:text-base text-[#8a7461]">
              {currentVillage.subtitle}
            </p>
            <p className="mt-2 text-xs md:text-sm text-[#b08a6b]">
              {currentVillage.highlight}
            </p>
          </div>

          {/* Grid Paket */}
          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-3">
            {currentVillage.packages.map((pkg) => (
              <article
                key={pkg.name}
                className="group h-full rounded-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-orange-50 px-6 py-7 md:px-7 md:py-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(0,0,0,0.08)] transition-all"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full bg-[#ffe7d3] px-3 py-1 text-xs font-medium text-[#c56b1c]">
                    {pkg.duration}
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-[#3b2a20]">
                    {pkg.name}
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-xs md:text-sm text-[#8a7461]">
                    {pkg.activities.map((act) => (
                      <li key={act} className="flex gap-2">
                        <span className="mt-1 block h-1 w-1 rounded-full bg-[#e98228]" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 pt-4 border-t border-orange-100 flex items-center justify-between">
                  <p className="text-xs md:text-sm text-[#8a7461]">
                    {pkg.price}
                  </p>
                  <span className="text-[11px] md:text-xs font-semibold uppercase tracking-wide text-[#e98228]">
                    Cocok untuk grup
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: FORM PEMESANAN */}
      <section
        id="booking"
        className="w-full bg-[#f4ece3] py-16 md:py-24"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Heading form */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#e98228]">
              Form Pemesanan
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-[#3b2a20]">
              Ajukan Kunjungan Wisata Anda
            </h2>
            <p className="mt-4 text-sm md:text-base text-[#8a7461]">
              Isi data di bawah ini, pilih desa dan paket yang diinginkan.
              Tim pengelola akan menghubungi Anda melalui WhatsApp atau email.
            </p>
          </div>

          {/* Card Form */}
          <div className="mt-10 rounded-3xl bg-white shadow-[0_22px_60px_rgba(0,0,0,0.06)] border border-orange-50 px-6 py-7 md:px-10 md:py-10">
            <form
              className="grid gap-6 md:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                // di sini nanti bisa kamu sambungkan ke API / WhatsApp / Email
              }}
            >
              {/* Nama / Instansi */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#3b2a20]">
                  Nama Lengkap / Instansi
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: SMA Nusantara / Bpk. Andi"
                  className="w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 py-2.5 text-sm md:text-base text-[#3b2a20] placeholder:text-[#c1a896] focus:outline-none focus:border-[#e98228] focus:ring-1 focus:ring-[#e98228]/70"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#3b2a20]">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="nama@mail.com"
                  className="w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 py-2.5 text-sm md:text-base text-[#3b2a20] placeholder:text-[#c1a896] focus:outline-none focus:border-[#e98228] focus:ring-1 focus:ring-[#e98228]/70"
                />
              </div>

              {/* Nomor WhatsApp */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#3b2a20]">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 08xxxxxxxxxx"
                  className="w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 py-2.5 text-sm md:text-base text-[#3b2a20] placeholder:text-[#c1a896] focus:outline-none focus:border-[#e98228] focus:ring-1 focus:ring-[#e98228]/70"
                />
              </div>

              {/* Jumlah Peserta */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#3b2a20]">
                  Jumlah Peserta
                </label>
                <input
                  type="number"
                  min={1}
                  required
                  placeholder="Contoh: 40"
                  className="w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 py-2.5 text-sm md:text-base text-[#3b2a20] placeholder:text-[#c1a896] focus:outline-none focus:border-[#e98228] focus:ring-1 focus:ring-[#e98228]/70"
                />
              </div>

              {/* Tanggal Kunjungan */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#3b2a20]">
                  Tanggal Kunjungan
                </label>
                <input
                  type="date"
                  required
                  className="w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 py-2.5 text-sm md:text-base text-[#3b2a20] focus:outline-none focus:border-[#e98228] focus:ring-1 focus:ring-[#e98228]/70"
                />
              </div>

              {/* Pilih Desa */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#3b2a20]">
                  Pilih Desa
                </label>
                <select
                  value={selectedVillage}
                  onChange={(e) =>
                    handleVillageChange(e.target.value as VillageKey)
                  }
                  className="w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 py-2.5 text-sm md:text-base text-[#3b2a20] focus:outline-none focus:border-[#e98228] focus:ring-1 focus:ring-[#e98228]/70"
                >
                  <option value="desaA">Desa Eduwisata Mentaraman</option>
                  <option value="desaB">Desa Seni & Gerabah</option>
                </select>
              </div>

              {/* Pilih Paket (dinamis sesuai desa) */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#3b2a20]">
                  Pilih Paket
                </label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  required
                  className="w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 py-2.5 text-sm md:text-base text-[#3b2a20] focus:outline-none focus:border-[#e98228] focus:ring-1 focus:ring-[#e98228]/70"
                >
                  <option value="">Pilih paket sesuai desa</option>
                  {currentVillage.packages.map((pkg) => (
                    <option key={pkg.name} value={pkg.name}>
                      {pkg.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Catatan Tambahan (full width) */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#3b2a20]">
                  Catatan Tambahan (opsional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Tuliskan kebutuhan khusus, jadwal detail, atau permintaan lainnya."
                  className="w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 py-3 text-sm md:text-base text-[#3b2a20] placeholder:text-[#c1a896] focus:outline-none focus:border-[#e98228] focus:ring-1 focus:ring-[#e98228]/70 resize-none"
                />
              </div>

              {/* Tombol Submit */}
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#e98228] px-8 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-[#cf701a] transition-colors"
                >
                  Kirim Permohonan Kunjungan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
