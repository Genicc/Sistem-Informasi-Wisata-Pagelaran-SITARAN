"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

type VillageKey = "desaA" | "desaB";

type TourPackage = {
  name: string;
  duration: string;
  activities: string[];
  price: string;
  level: "Hemat" | "Standar" | "Premium" | "Eksklusif";
};

const villages: Record<
  VillageKey,
  {
    name: string;
    subtitle: string;
    highlight: string;
    packages: TourPackage[];
  }
> = {
  desaA: {
    name: "Kampung Mentaraman",
    subtitle: "Wisata Edukasi, Alam, dan Budaya",
    highlight: "Cocok Untuk Kunjungan Sekolah, Komunitas, dan Keluarga.",
    packages: [
      {
        name: "Paket Kenong",
        duration: "Half Day",
        activities: [
          "Kirab (Tari Gambyong)",
          "Pertunjukan Seni Budaya (Dagelan)",
          "Edukasi Gamelan dan Gending",
          "Minuman dan Camilan",
          "Nasi Liwet Jangan Wedang",
        ],
        price: "Mulai dari Rp85.000/orang",
        level: "Hemat",
      },
      {
        name: "Paket Gendang",
        duration: "Full Day",
        activities: [
          "Kirab (Tari Remo)",
          "Pertunjukan Seni Budaya (Wayang Suluh)",
          "Edukasi Gamelan dan Gending",
          "Minuman dan Camilan",
          "Nasi Liwet Jangan Wedang",
          "Souvenir Khas Desa",
        ],
        price: "Mulai dari Rp120.000/orang",
        level: "Standar",
      },
      {
        name: "Paket Gong",
        duration: "Full Day",
        activities: [
          "Kirab (Tari Gerabah)",
          "Pertunjukan Seni Budaya (Kentrung)",
          "Edukasi Gamelan dan Gending",
          "Minuman dan Camilan",
          "Nasi Liwet Jangan Wedang",
          "Souvenir Khas Desa",
          "Homestay Experience",
        ],
        price: "Mulai dari Rp150.000/orang",
        level: "Premium",
      },
    ],
  },
  desaB: {
    name: "Kampung Gerabah",
    subtitle: "Eksplorasi Kriya, Seni, dan Kerajinan Lokal",
    highlight: "Ideal Untuk Study Tour, UMKM, dan Pelatihan Kreatif.",
    packages: [
      {
        name: "Paket Tempayan",
        duration: "Half Day",
        activities: [
          "Kedatangan dan Penyambutan",
          "Eksplorasi Proses Pembuatan Gerabah",
          "Mengenal Produk Seni Budaya Lokal",
          "Pusat Oleh-oleh Produk UMKM",
        ],
        price: "Mulai dari Rp90.000/orang",
        level: "Hemat",
      },
      {
        name: "Paket Anglo",
        duration: "Full Day",
        activities: [
          "Kedatangan dan Penyambutan",
          "Sejarah Singkat Kampung Gerabah",
          "Workshop Pembuatan Gerabah Sederhana",
          "Menikmati Kuliner Khas Mentaraman",
          "Edukasi Gamelan dan Gending",
          "Hidangan Tradisional",
          "Souvenir Khas Mentaraman",
          "Pusat Oleh-oleh Produk UMKM",
        ],
        price: "Mulai dari Rp130.000/orang",
        level: "Standar",
      },
      {
        name: "Paket Kuali",
        duration: "Full Day",
        activities: [
          "Kedatangan dan Penyambutan",
          "Eksplorasi Sederhana Proses Pembuatan Gerabah",
          "Mengenal Produk Seni Budaya Tradisional",
          "Menikmati Kuliner Khas Mentaraman",
          "Edukasi Gamelan dan Gending",
          "Hidangan Tradisional",
          "Bermalam di Rumah Singgah",
          "Hidangan Malam dengan Menu Lokal",
          "Pertunjukan Karawitan Eksklusif",
          "Souvenir Khas Mentaraman",
          "Pusat Oleh-oleh Produk UMKM",
        ],
        price: "Mulai dari Rp145.000/orang",
        level: "Premium",
      },
    ],
  },
};

type ApiFormResponse = {
  success?: boolean;
  message?: string;
};

export default function TourPackages() {
  const [selectedVillage, setSelectedVillage] = useState<VillageKey>("desaA");
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const currentVillage = villages[selectedVillage];

  const handleVillageChange = (value: VillageKey) => {
    setSelectedVillage(value);
    setSelectedPackage("");
  };

  const handleScrollToBooking = (pkgName?: string) => {
    if (pkgName) {
      setSelectedPackage(pkgName);
    }
    const el = document.querySelector("#booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const desaName = villages[selectedVillage].name;

    const payload = {
      Nama_Lengkap_Instansi: String(formData.get("Nama_Lengkap_Instansi") ?? ""),
      Email: String(formData.get("Email") ?? ""),
      Nomor_WA: String(formData.get("Nomor_WA") ?? ""),
      Jumlah_Peserta: String(formData.get("Jumlah_Peserta") ?? ""),
      Tanggal_Kunjungan: String(formData.get("Tanggal_Kunjungan") ?? ""),
      Pilihan_Desa: desaName,
      Pilihan_Paket: String(formData.get("Pilihan_Paket") || selectedPackage || "Tidak memilih"),
      Catatan_Tambahan: String(formData.get("Catatan_Tambahan") ?? ""),
    };

    console.log("Mengirim data:", payload);

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data: ApiFormResponse = await res.json();

      // console.log("Response dari API:", data);

      // PERBAIKAN DI SINI:
      // Kita anggap sukses jika:
      // 1. res.ok (HTTP 200-299) BERNILAI TRUE
      // 2. DAN (data.success TRUE --ATAU-- data.success TIDAK ADA tapi pesan mengandung kata "berhasil")
      const isSuccess = res.ok && (data.success === true || (!data.success && data.message?.toLowerCase().includes("berhasil")));

      if (!isSuccess) {
        throw new Error(data.message || `HTTP error! status: ${res.status}`);
      }

      setSubmitStatus({
        type: "success",
        message: "✅ Pemesanan berhasil dikirim! Tim kami akan segera menghubungi Anda melalui WhatsApp atau email.",
      });

      formElement.reset();
      setSelectedPackage("");

      setTimeout(() => {
        const bookingEl = document.querySelector("#booking");
        if (bookingEl) {
          bookingEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);

    } catch (error) {
      console.error("Error saat submit form:", error);
      
      setSubmitStatus({
        type: "error",
        message: `❌ Terjadi kesalahan saat mengirim data. ${
          error instanceof Error ? error.message : "Silakan coba lagi."
        }`,
      });
    } finally {
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 10000);
    }
  };

  return (
    <>
      {/* SECTION: PAKET WISATA */}
      <section id="packages" className="w-full bg-gradient-to-b from-[#D4F3E4]/85 via-[#FFE9D9]/55 to-[#FFE9D9]/65 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#FFF3E7] px-4 py-1 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-[#D98454]">
              Paket Wisata
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-[#3b2a20]">Pilihan </span>
              <span className="text-[#D98454]">Paket Wisata</span>
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-[#8a7461]">
              Sesuaikan Kebutuhan Kunjungan Anda dengan Pilihan Paket dari Desa
              EduWisata dan Desa Seni.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="h-[3px] w-32 md:w-44 rounded-full bg-gradient-to-r from-[#E6A56E] via-[#D98454] to-[#4A3326]" />
          </div>

          <div className="flex justify-center mb-8 mt-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 p-1.5 shadow-[0_14px_40px_rgba(0,0,0,0.06)]">
              <button
                type="button"
                onClick={() => handleVillageChange("desaA")}
                className={`px-5 py-2.5 rounded-full text-sm md:text-lg font-semibold transition-all ${
                  selectedVillage === "desaA"
                    ? "bg-[#e98228] text-white shadow-md"
                    : "text-[#8a7461] hover:bg-[#ffe7d3]"
                }`}
              >
                Kampung Seni dan Budaya
              </button>
              <button
                type="button"
                onClick={() => handleVillageChange("desaB")}
                className={`px-5 py-2.5 rounded-full text-sm md:text-lg font-semibold transition-all ${
                  selectedVillage === "desaB"
                    ? "bg-[#e98228] text-white shadow-md"
                    : "text-[#8a7461] hover:bg-[#ffe7d3]"
                }`}
              >
                Kampung Krajan
              </button>
            </div>
          </div>

          <div className="text-center max-w-xl mx-auto mb-8 md:mb-10">
            <h3 className="text-xl md:text-3xl font-semibold text-[#3b2a20]">
              {currentVillage.name}
            </h3>
            <p className="mt-3 text-md md:text-lg text-[#8a7461]">
              {currentVillage.subtitle}
            </p>
            <p className="mt-1 text-md md:text-lg text-[#b08a6b]">
              {currentVillage.highlight}
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentVillage.packages.map((pkg) => (
              <article
                key={pkg.name}
                className="group rounded-3xl bg-white border border-orange-50 flex flex-col h-full overflow-hidden transition-all drop-shadow-[0_10px_22px_rgba(246,180,91,0.25)] hover:drop-shadow-[0_16px_40px_rgba(246,180,91,0.35)] hover:-translate-y-1.5"
              >
                <div className="px-6 py-6 md:px-7 md:py-7 flex-1 flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={[
                        "inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold tracking-wide",
                        pkg.level === "Hemat" && "bg-[#e7f6ea] text-[#277a3f]",
                        pkg.level === "Standar" && "bg-[#ffe7d3] text-[#c05e12]",
                        pkg.level === "Premium" && "bg-[#f4e9ff] text-[#6b3fb9]",
                        pkg.level === "Eksklusif" && "bg-[#fde7ec] text-[#b4274a]",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      Paket {pkg.level}
                    </span>
                  </div>

                  <h4 className="text-xl md:text-2xl font-semibold text-[#3b2a20] leading-snug">
                    {pkg.name}
                  </h4>

                  <ul className="mt-1 space-y-1.5 text-md md:text-lg text-[#8a7461] leading-relaxed">
                    {pkg.activities.map((act) => (
                      <li key={act} className="flex gap-2">
                        <span className="mt-2.5 block h-2 w-2 rounded-full bg-[#e98228]" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2 flex items:end justify-center gap-1">
                    <Button
                      size="lg"
                      className="rounded-full bg-[#e98228] hover:bg-[#cf701a] text-sm md:text-lg font-semibold shadow-md shadow-orange-500/30"
                      onClick={() => handleScrollToBooking(pkg.name)}
                    >
                      Pesan Paket
                    </Button>
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-[#e98228] via-[#f6b45b] to-[#ffe7d3]" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: FORM PEMESANAN */}
      <section id="booking" className="w-full bg-gradient-to-b from-[#FFE9D9]/65 via-[#FFE9D9]/75 to-[#FFE9D9]/85 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#FFF3C7] px-4 py-1 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-[#D98454]">
              Form Pemesanan
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <h3 className="text-[#3b2a20]">Ajukan Kunjungan </h3>
              <h3 className="text-[#D98454]">Wisata Anda</h3>
            </h2>
            <p className="mt-4 text-md md:text-lg leading-relaxed text-[#8a7461]">
              Isi data di bawah ini, pilih desa dan paket yang diinginkan. Tim
              pengelola akan menghubungi Anda melalui WhatsApp atau email.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="h-[3px] w-32 md:w-44 rounded-full bg-gradient-to-r from-[#E6A56E] via-[#D98454] to-[#4A3326]" />
          </div>

          {submitStatus.type && (
            <div
              className={`mt-8 rounded-2xl px-6 py-4 ${
                submitStatus.type === "success"
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <p
                className={`text-center text-sm md:text-base font-medium ${
                  submitStatus.type === "success"
                    ? "text-green-800"
                    : "text-red-800"
                }`}
              >
                {submitStatus.message}
              </p>
            </div>
          )}

          <div className="mt-10 rounded-3xl bg-white/95 backdrop-blur shadow-[0_22px_60px_rgba(0,0,0,0.06)] border border-orange-50 px-6 py-7 md:px-10 md:py-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 mb-6 border-b border-orange-100 pb-4">
              <div>
                <p className="text-md md:text-xl font-semibold uppercase tracking-[0.18em] text-[#e98228]">
                  Lengkapi informasi dengan jelas dan akurat
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-lg font-semibold text-[#3b2a20]">
                  Nama Lengkap / Instansi
                </label>
                <input
                  type="text"
                  name="Nama_Lengkap_Instansi"
                  required
                  placeholder="Contoh: SMA Nusantara / Bpk. Andi"
                  className="w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 py-2.5 text-sm md:text-base text-[#3b2a20] placeholder:text-[#c1a896] focus:outline-none focus:border-[#e98228] focus:ring-1 focus:ring-[#e98228]/70"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-semibold text-[#3b2a20]">
                  Email
                </label>
                <input
                  type="email"
                  name="Email"
                  required
                  placeholder="nama@mail.com"
                  className="w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 py-2.5 text-sm md:text-base text-[#3b2a20] placeholder:text-[#c1a896] focus:outline-none focus:border-[#e98228] focus:ring-1 focus:ring-[#e98228]/70"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-semibold text-[#3b2a20]">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  name="Nomor_WA"
                  required
                  placeholder="Contoh: 08xxxxxxxxxx"
                  className="w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 py-2.5 text-sm md:text-base text-[#3b2a20] placeholder:text-[#c1a896] focus:outline-none focus:border-[#e98228] focus:ring-1 focus:ring-[#e98228]/70"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-semibold text-[#3b2a20]">
                  Jumlah Peserta
                </label>
                <input
                  type="number"
                  min={1}
                  name="Jumlah_Peserta"
                  required
                  placeholder="Contoh: 40"
                  className="w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 py-2.5 text-sm md:text-base text-[#3b2a20] placeholder:text-[#c1a896] focus:outline-none focus:border-[#e98228] focus:ring-1 focus:ring-[#e98228]/70"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-semibold text-[#3b2a20]">
                  Tanggal Kunjungan
                </label>
                <input
                  type="date"
                  name="Tanggal_Kunjungan"
                  required
                  className="w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 py-2.5 text-sm md:text-base text-[#3b2a20] focus:outline-none focus:border-[#e98228] focus:ring-1 focus:ring-[#e98228]/70"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-semibold text-[#3b2a20]">
                  Pilih Desa
                </label>
                <select
                  name="Pilihan_Desa"
                  value={selectedVillage}
                  onChange={(e) => handleVillageChange(e.target.value as VillageKey)}
                  className="w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 py-2.5 text-sm md:text-base text-[#3b2a20] focus:outline-none focus:border-[#e98228] focus:ring-1 focus:ring-[#e98228]/70"
                >
                  <option value="desaA">Kampung Seni dan Budaya</option>
                  <option value="desaB">Kampung Krajan</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-semibold text-[#3b2a20]">
                  Pilih Paket
                </label>
                <select
                  name="Pilihan_Paket"
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

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-lg font-semibold text-[#3b2a20]">
                  Catatan Tambahan (opsional)
                </label>
                <textarea
                  name="Catatan_Tambahan"
                  rows={4}
                  placeholder="Tuliskan kebutuhan khusus, jadwal detail, atau permintaan lainnya."
                  className="w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 py-3 text-sm md:text-base text-[#3b2a20] placeholder:text-[#c1a896] focus:outline-none focus:border-[#e98228] focus:ring-1 focus:ring-[#e98228]/70 resize-none"
                />
              </div>

              <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-end gap-3 mt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-[#e98228] px-8 py-3 text-lg md:text-xl font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-[#cf701a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pemesanan"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}