// src/components/sections/gallery-section.tsx
// import Image from "next/image";
import { getDriveImages } from "@/lib/googleDrive";
import { GalleryGrid } from "@/components/section/galley-grid";

export async function GallerySection() {
    // 1. Fetch data dari Google Drive (Server Side)
    const driveImages = await getDriveImages();

    // 2. Batasi jumlah foto maksimum (misal 18)
    const galleryItems = driveImages.slice(0, 18);

    return (
        <section
        id="gallery"
        className="relative bg-gradient-to-b from-[#E3F2FD] via-[#DDEDE4] to-[#DDEDE4] py-16 md:py-24"
        >
        {/* Background dekoratif halus */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#fbd0a6] blur-3xl" />
            <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#f5b782] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#FFF3E7] px-4 py-1 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-[#D98454]">
                Galeri • Desa Pagelaran
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#3b2a20]">
                Merekam Jejak{" "}
            </h2>
            <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#D98454]">
                Seni & Budaya Pagelaran
            </span>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-[#8a7461]">
                Kumpulan momen terbaik dari tradisi adat, pentas seni, hingga
                aktivitas di Kampung Gerabah dan produk lokal yang menjadi
                kebanggaan warga.
            </p>
            </div>

            {/* Garis aksen */}
            <div className="mt-8 flex justify-center">
            <div className="h-[3px] w-32 md:w-44 rounded-full bg-gradient-to-r from-[#E6A56E] via-[#D98454] to-[#4A3326]" />
            </div>

            {/* Konten galeri */}
            {galleryItems.length === 0 ? (
            <div className="text-center py-20">
                <p className="text-[#8a7461]">
                Menunggu foto diupload ke Google Drive...
                </p>
            </div>
            ) : (
            <GalleryGrid items={galleryItems} />
            )}
        </div>
        </section>
    );
}
