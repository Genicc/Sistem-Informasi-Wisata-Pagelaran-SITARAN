// src/lib/products.ts
import { list } from "@vercel/blob";

export type Product = {
  name: string;
  image: string;
};

// ✅ helper generic untuk nama file Blob
export function prettifyBlobName(pathname: string): string {
  // buang prefix folder
  const cleanPath = pathname.replace(/^gallery\//, "").replace(/^product\//, "");
  // contoh: "1765037775664-jamu-mbak-ani.jpg"

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

  return blobs
    .filter((blob) => /\.(png|jpe?g|webp|gif|avif)$/i.test(blob.pathname))
    .map((blob) => ({
      name: prettifyBlobName(blob.pathname), // ⬅️ pakai helper generic
      image: blob.url,
    }));
}
