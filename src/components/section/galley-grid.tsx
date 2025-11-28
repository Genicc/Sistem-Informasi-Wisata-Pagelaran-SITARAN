// src/components/sections/gallery-grid.tsx
"use client";

import { useState } from "react";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { Skeleton } from "../ui/skeleton";

type BlobImage = {
    id: string;
    name: string;
    url: string;
};

type GalleryGridProps = {
    items: BlobImage[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
    // ====== PAGINATION STATE ======
    const PAGE_SIZE = 8; // jumlah foto per halaman
    const [page, setPage] = useState(1);

    const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const pageItems = items.slice(startIndex, endIndex);

    // Pastikan page tidak lebih dari totalPages jika data berubah
    if (page > totalPages) {
        setPage(totalPages);
    }

    // ====== LOADING STATE PER GAMBAR ======
    const [loadedMap, setLoadedMap] = useState<{ [key: string]: boolean }>({});

    const handleLoaded = (id: string) => {
        setLoadedMap((prev) => ({ ...prev, [id]: true }));
    };

    return (
        <>
        {/*
            < lg   : grid 1–2 kolom
            >= lg : flex 4 kartu per baris, row terakhir auto center
        */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:flex lg:flex-wrap lg:justify-center lg:gap-6">
            {pageItems.map((item) => {
            const cleanTitle = item.name
                .replace(/[-_]+/g, " ")
                .replace(/\s+/g, " ")
                .trim()
                .replace(/\b\w/g, (c) => c.toUpperCase());

            // const isLoaded = loadedMap[item.id];

            return (
                <div
                key={item.id}
                className="
                    group relative overflow-hidden rounded-3xl
                    bg-[#f4ece3] shadow-[0_18px_40px_rgba(0,0,0,0.06)]
                    w-full
                    lg:basis-1/5 lg:max-w-[25%]   /* 4 kolom di desktop */
                "
                >
                {/* KONTROL UKURAN GAMBAR (RESPONSIVE) */}
                <div className="relative w-full aspect-[4/3]">
                    {/* Skeleton tanpa kedip */}
                    {/* {!isLoaded && (
                    <Skeleton className="absolute inset-0 w-full h-full rounded-none animate-none" />
                    )} */}

                    <img
                    src={item.url}
                    alt={cleanTitle}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onLoad={() => handleLoaded(item.id)}
                    onError={() => handleLoaded(item.id)}
                    />

                    {/* Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.55)] via-[rgba(0,0,0,0.25)] to-transparent opacity-90" />

                    {/* Text pada gambar */}
                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-center">
                    <h3 className="mt-1 text-md md:text-xl font-semibold text-white drop-shadow-md line-clamp-2">
                        {cleanTitle}
                    </h3>
                    <p className="mt-1 text-sm md:text-md text-[#ffe9d6] opacity-80">
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

        {/* ====== NAVIGASI HALAMAN ====== */}
        {totalPages > 1 && (
            <div className="mt-10 flex flex-col items-center gap-4">
            {/* Prev / Next */}
            <div className="flex items-center gap-3">
                <Button
                type="button"
                variant="outline"
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="px-4 py-2 text-sm md:text-base"
                >
                Sebelumnya
                </Button>

                {/* Nomor halaman */}
                <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNumber) => (
                    <button
                        key={pageNumber}
                        type="button"
                        onClick={() => setPage(pageNumber)}
                        className={`
                        inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium
                        ${
                            page === pageNumber
                            ? "bg-[#e98228] text-white shadow-md"
                            : "bg-white/80 text-[#4b2b16] hover:bg-[#ffe6d2]"
                        }
                        `}
                    >
                        {pageNumber}
                    </button>
                    )
                )}
                </div>

                <Button
                type="button"
                variant="outline"
                disabled={page === totalPages}
                onClick={() =>
                    setPage((p) => Math.min(totalPages, p + 1))
                }
                className="px-4 py-2 text-sm md:text-base"
                >
                Berikutnya
                </Button>
            </div>

            {/* Info halaman */}
            <p className="text-xs md:text-sm text-[#8a7461]">
                Halaman {page} dari {totalPages}
            </p>
            </div>
        )}
        </>
    );
}
