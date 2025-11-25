// src/components/sections/gallery-grid.tsx
"use client";

import { useState } from "react";
// import Image from "next/image";
import { Button } from "@/components/ui/button";

type DriveImage = {
    id: string;
    name: string;
    thumbnailLink: string;
};

type GalleryGridProps = {
    items: DriveImage[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
    // State untuk toggle
    const [showAll, setShowAll] = useState(false);

    // Foto terlihat (8 foto awal atau semua)
    const visibleItems = showAll ? items : items.slice(0, 8);

    const hasMore = items.length > 8;

    return (
        <>
        {/* Grid seragam */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {visibleItems.map((item) => {
            const cleanTitle = item.name.replace(/\.[^/.]+$/, "");

            return (
                <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-[#f4ece3] shadow-[0_18px_40px_rgba(0,0,0,0.06)]"
                >
                {/* Aspect ratio seragam */}
                <div className="relative aspect-[4/3]">
                    <img
                    src={item.thumbnailLink}
                    alt={cleanTitle}
                    // fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.55)] via-[rgba(0,0,0,0.25)] to-transparent opacity-90" />

                    {/* Text pada gambar */}
                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                    <h3 className="mt-1 text-sm md:text-base font-semibold text-white drop-shadow-md line-clamp-2">
                        {cleanTitle}
                    </h3>
                    <p className="mt-1 text-[11px] md:text-xs text-[#ffe9d6] opacity-80">
                        Desa Pagelaran
                    </p>
                    </div>
                </div>

                {/* Bar kecil */}
                <div className="h-[3px] w-full bg-gradient-to-r from-[#cf2a0e] via-[#e98228] to-[#3b2a20]" />
                </div>
            );
            })}
        </div>

        {/* Tombol toggle */}
        {hasMore && (
            <div className="mt-10 flex justify-center">
            <Button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="rounded-full bg-[#e98228] px-8 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-[#cf701a] transition-colors"
            >
                {showAll ? "Tampilkan lebih sedikit" : "Lihat lainnya"}
            </Button>
            </div>
        )}
        </>
    );
}
