// src/components/sections/local-products-section.tsx
import Image from "next/image";

type Product = {
    name: string;
    image: string;
};

const products: Product[] = [
    { name: "Bumbu Rujak Manis", image: "/image/rujak.jpg" },
    { name: "Brambang Goreng", image: "/image/bawang.jpg" },
    { name: "Minuman Tradisional Sinom", image: "/image/sinom.jpg" },
    { name: "Susu Kedelai Ibu Ani", image: "/image/susu.jpg" },
    { name: "Jamu Mbak Ani", image: "/image/jamu.jpg" },
];

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
            <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Lapisan gradient halus di bawah untuk teks */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgba(0,0,0,0.55)] via-[rgba(0,0,0,0.2)] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="text-sm md:text-lg font-bold text-white drop-shadow text-center">
                {product.name}
            </h3>
            </div>
        </div>
        </article>
    );
}

export default function LocalProductsSection() {
    // berapa produk yang bisa membentuk baris penuh (kelipatan 3)
    const fullRowCount = Math.floor(products.length / 3) * 3;
    const fullRows = products.slice(0, fullRowCount); // baris-baris penuh (3, 6, 9, ...)
    const rest = products.slice(fullRowCount);        // sisa 0, 1, atau 2 item

    return (
        <section id="products" className="relative py-20 bg-gradient-to-b from-[#D4F3E4]/65 via-[#D4F3E4]/75 to-[#D4F3E4]/85">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
            {/* Heading */}
            <div className="mx-auto max-w-4xl text-center">
                <p className="inline-flex items-center gap-2 rounded-full bg-[#FFF3E7] px-4 py-1 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-[#D98454]">
                    Produk Lokal
                </p>
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                            <span className="text-[#3b2a20]">Karya Asli </span>
                            <span className="text-[#D98454]">Pagelaran</span>
                </h2>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-[#8a7461]">
                    Jelajahi ragam produk lokal dari Pagelaran yang dibuat dengan
                    ketelatenan dan sentuhan seni masyarakat desa.
                </p>
            </div>

            {/* Garis aksen */}
            <div className="mt-8 flex justify-center">
                <div className="h-[3px] w-32 md:w-44 rounded-full bg-gradient-to-r from-[#E6A56E] via-[#D98454] to-[#4A3326]" />
            </div>

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
        </div>
        </section>
    );
}
