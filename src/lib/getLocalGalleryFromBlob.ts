// src/lib/getLocalGalleryFromBlob.ts
import { list } from "@vercel/blob";

export type GalleryItem = {
  id: string;
  name: string;
  url: string;
};

const GALLERY_BLOB_PREFIX = "gallery/";

// Ubah "gallery/1765...-foto-kegiatan-desa.jpg" → "Foto Kegiatan Desa"
function prettifyGalleryName(pathname: string): string {
  // 1. buang prefix folder
  const withoutFolder = pathname
    .replace(/^gallery\//, "")
    .replace(/^product\//, "");

  // 2. buang ekstensi (.jpg, .png, dll)
  const withoutExt = withoutFolder.replace(/\.[^.]+$/, "");

  // 3. buang angka + "-" di depan (timestamp)
  //    contoh: "1765037775664-foto-kegiatan-desa" → "foto-kegiatan-desa"
  const withoutTimestamp = withoutExt.replace(/^\d+-/, "");

  // 4. ganti - dan _ jadi spasi
  const withSpaces = withoutTimestamp.replace(/[-_]+/g, " ");

  // 5. rapikan spasi & kapital tiap kata
  return withSpaces
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function getLocalGalleryFromBlob(): Promise<GalleryItem[]> {
  const { blobs } = await list({
    prefix: GALLERY_BLOB_PREFIX,
    limit: 100,
  });

  console.log("GALLERY BLOBS:", blobs.map((b) => b.pathname));

  return blobs
    // hanya file gambar
    .filter((blob) =>
      /\.(png|jpe?g|webp|gif|avif)$/i.test(blob.pathname)
    )
    .map((blob) => ({
      id: blob.url, // bisa juga pakai blob.pathname kalau mau
      name: prettifyGalleryName(blob.pathname),
      url: blob.url,
    }));
}
