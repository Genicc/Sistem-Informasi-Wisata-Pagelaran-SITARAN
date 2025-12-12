"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type BlobImage = {
  id: string;
  name: string;
  url: string;
};

type GalleryGridProps = {
  items: BlobImage[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  // ====== PAGINATION ======
  const PAGE_SIZE = 8;
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const pageItems = items.slice(startIndex, endIndex);

  if (page > totalPages) setPage(totalPages);

  // ====== LIGHTBOX STATE ======
  const [activeImage, setActiveImage] = useState<BlobImage | null>(null);

  // Disable scroll saat lightbox aktif
  useEffect(() => {
    document.body.style.overflow = activeImage ? "hidden" : "";
  }, [activeImage]);

  return (
    <>
      {/* ====== GRID ====== */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:flex lg:flex-wrap lg:justify-center lg:gap-6">
        {pageItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveImage(item)}
            className="
              group relative overflow-hidden rounded-3xl
              bg-[#f4ece3] shadow-[0_18px_40px_rgba(0,0,0,0.06)]
              w-full
              lg:basis-1/5 lg:max-w-[25%]
              focus:outline-none
            "
          >
            <div className="relative w-full aspect-[4/3]">
              <img
                src={item.url}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.55)] via-[rgba(0,0,0,0.25)] to-transparent opacity-90" />

              {/* Text */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-center">
                <h3 className="text-md md:text-xl font-semibold text-white drop-shadow-md line-clamp-2">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-[#ffe9d6] opacity-80">
                  Desa Pagelaran
                </p>
              </div>
            </div>

            <div className="h-[3px] w-full bg-gradient-to-r from-[#cf2a0e] via-[#e98228] to-[#3b2a20]" />
          </button>
        ))}
      </div>

      {/* ====== PAGINATION ====== */}
      {totalPages > 1 && (
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Sebelumnya
            </Button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`h-8 w-8 rounded-full text-sm font-medium
                    ${
                      page === n
                        ? "bg-[#e98228] text-white"
                        : "bg-white/80 text-[#4b2b16] hover:bg-[#ffe6d2]"
                    }`}
                >
                  {n}
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Berikutnya
            </Button>
          </div>

          <p className="text-xs text-[#8a7461]">
            Halaman {page} dari {totalPages}
          </p>
        </div>
      )}

      {/* ====== LIGHTBOX / MODAL ====== */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveImage(null)}
              className="
                absolute -top-4 -right-4 z-10
                h-10 w-10 rounded-full
                bg-white text-black
                shadow-lg
                hover:bg-[#e98228] hover:text-white
                transition
              "
            >
              ✕
            </button>

            {/* Full image */}
            <img
              src={activeImage.url}
              alt={activeImage.name}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />

            {/* Caption */}
            <div className="mt-3 text-center text-white">
              <div className="text-lg font-semibold">
                {activeImage.name}
              </div>
              <div className="text-sm opacity-80">
                Desa Pagelaran
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
