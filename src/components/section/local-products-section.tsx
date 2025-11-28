// src/components/sections/local-products-section.tsx
import { getLocalProductsFromBlob } from "@/lib/getLocalProductsFromBlob";
import { ProductGrid } from "./product-grid"; // atau "../section/product-grid" sesuai struktur folder

export const revalidate = 60;

export default async function LocalProducts() {
  const products = await getLocalProductsFromBlob();

  return (
    <section
      id="products"
      className="relative py-20 bg-gradient-to-b from-[#D4F3E4]/65 via-[#D4F3E4]/75 to-[#D4F3E4]/85"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#FFF3E7] px-4 py-1 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-[#D98454]">
            Produk Lokal
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight">
            <span className="text-[#3b2a20]">Karya Asli </span>
            <span className="text-[#D98454]">Pagelaran</span>
          </h2>
          <p className="mt-4 text-base md:text-base leading-relaxed text-[#8a7461]">
            Jelajahi ragam produk lokal dari Pagelaran yang dibuat dengan
            ketelatenan dan sentuhan seni masyarakat desa.
          </p>
        </div>

        {/* Garis aksen */}
        <div className="mt-8 flex justify-center">
          <div className="h-[3px] w-32 md:w-44 rounded-full bg-gradient-to-r from-[#E6A56E] via-[#D98454] to-[#4A3326]" />
        </div>

        {/* Grid */}
        <ProductGrid items={products} />
      </div>
    </section>
  );
}
