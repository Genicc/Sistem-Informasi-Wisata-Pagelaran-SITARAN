// src/lib/products.ts
import { list } from "@vercel/blob";

export type Product = {
  name: string;
  image: string;
};

// 👉 fungsi untuk mengubah "product/1765...-jamu-mbak-ani.jpg" → "Jamu Mbak Ani"
export function prettifyProductName(pathname: string): string {
  // buang prefix folder
  const cleanPath = pathname.replace(/^gallery\//, "").replace(/^product\//, "");
  // contoh sekarang: "1765037775664-jamu-mbak-ani.jpg"

  // buang ekstensi (.jpg, .png, dll)
  const withoutExt = cleanPath.replace(/\.[^.]+$/, ""); // "1765037775664-jamu-mbak-ani"

  // buang angka + tanda "-" di depan (timestamp)
  const withoutTimestamp = withoutExt.replace(/^\d+-/, ""); // "jamu-mbak-ani"

  // ganti -/_ jadi spasi
  const withSpaces = withoutTimestamp.replace(/[-_]+/g, " "); // "jamu mbak ani"

  // rapikan spasi & kapital awal kata
  return withSpaces
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase()); // "Jamu Mbak Ani"
}

// 👉 fungsi ambil produk dari Vercel Blob
export async function getProductsFromBlob(): Promise<Product[]> {
  const { blobs } = await list({ prefix: "product/" });

  return blobs.map((blob) => ({
    name: prettifyProductName(blob.pathname), // ⬅️ nama sudah BERSIH di sini
    image: blob.url,
  }));
}
