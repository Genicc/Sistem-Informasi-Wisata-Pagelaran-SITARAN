// src/components/section/product-grid.tsx
"use client";

import { useState } from "react";
import type { Product } from "@/lib/getLocalProductsFromBlob";

function ProductCard({ product }: { product: Product }) {
    return (
        <article
        className="
            group
            rounded-3xl
            bg-[#f7eee4]
            shadow-[0_18px_45px_rgba(0,0,0,0.06)]
            border border-[#f0dfcf]
            overflow-hidden
            transition-transform
            hover:-translate-y-2
            hover:shadow-[0_22px_55px_rgba(0,0,0,0.1)]
        "
        >
        <div className="relative aspect-[16/11] overflow-hidden">
            <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
            "
            />

            {/* Lapisan gradient halus di bawah untuk teks */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgba(0,0,0,0.55)] via-[rgba(0,0,0,0.2)] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="text-base md:text-lg font-bold text-white drop-shadow text-center">
                {product.name}
            </h3>
            </div>
        </div>
        </article>
    );
}

type ProductGridProps = {
    items: Product[];
};

const ITEMS_PER_PAGE = 6; // 6 produk per halaman

export function ProductGrid({ items }: ProductGridProps) {
    const [currentPage, setCurrentPage] = useState(1);

    if (items.length === 0) {
        return (
        <p className="mt-10 text-center text-sm md:text-base text-[#7a5a45]">
            Belum ada produk yang tersedia.
        </p>
        );
    }

    const totalPages = Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE));

    // Pastikan page selalu valid (kalau produk berkurang)
    const safePage = Math.min(currentPage, totalPages);

    const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pageItems = items.slice(startIndex, endIndex);

    // logika baris penuh & sisa → sama kayak sebelumnya, tapi pakai pageItems
    const fullRowCount = Math.floor(pageItems.length / 3) * 3;
    const fullRows = pageItems.slice(0, fullRowCount);
    const rest = pageItems.slice(fullRowCount);

    const goToPrev = () => {
        setCurrentPage((p) => Math.max(1, p - 1));
    };

    const goToNext = () => {
        setCurrentPage((p) => Math.min(totalPages, p + 1));
    };

    return (
        <>
        {/* Grid untuk baris-baris penuh (selalu 3 kolom di desktop) */}
        {fullRows.length > 0 && (
            <div
            className="
                mt-12
                grid
                gap-6
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
            "
            >
            {fullRows.map((product) => (
                <ProductCard key={product.name} product={product} />
            ))}
            </div>
        )}

        {/* Baris terakhir (kalau sisa 1 atau 2 item) → di-center */}
        {rest.length > 0 && (
            <div
            className={`
                ${fullRows.length === 0 ? "mt-12" : "mt-8"}
                flex flex-wrap justify-center gap-6
            `}
            >
            {rest.map((product) => (
                <div
                key={product.name}
                className="w-full sm:w-[320px] md:w-[360px]"
                >
                <ProductCard product={product} />
                </div>
            ))}
            </div>
        )}

        {/* Pagination controls */}
        {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-3">
            <button
                type="button"
                onClick={goToPrev}
                disabled={safePage === 1}
                className="
                px-4 py-2
                rounded-full
                border border-[#e2c9ac]
                text-xs md:text-sm
                font-medium
                text-[#7a5a45]
                bg-white/80
                hover:bg-[#fdf4ea]
                disabled:opacity-40
                disabled:cursor-not-allowed
                transition-colors
                "
            >
                Sebelumnya
            </button>

            <span className="text-xs md:text-sm text-[#7a5a45]">
                Halaman <span className="font-semibold">{safePage}</span> dari{" "}
                <span className="font-semibold">{totalPages}</span>
            </span>

            <button
                type="button"
                onClick={goToNext}
                disabled={safePage === totalPages}
                className="
                px-4 py-2
                rounded-full
                border border-[#e2c9ac]
                text-xs md:text-sm
                font-medium
                text-[#7a5a45]
                bg-white/80
                hover:bg-[#fdf4ea]
                disabled:opacity-40
                disabled:cursor-not-allowed
                transition-colors
                "
            >
                Berikutnya
            </button>
            </div>
        )}
        </>
    );
}
