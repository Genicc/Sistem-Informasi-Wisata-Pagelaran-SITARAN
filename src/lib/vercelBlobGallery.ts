// src/lib/vercelBlobGallery.ts
import { list } from "@vercel/blob";

export type BlobImage = {
  id: string;
  name: string;
  url: string;
};

export async function getBlobImages(): Promise<BlobImage[]> {
  const { blobs } = await list({
    prefix: "gallery/",
    limit: 100,
  });

  const imageBlobs = blobs.filter((blob) => {
    const fileNameWithExt = blob.pathname.split("/").pop() || "";

    // 1. buang "folder" (kasus "sitaran/gallery/")
    if (fileNameWithExt === "") return false;

    // 2. cek ekstensi file → hanya ambil gambar
    const lower = fileNameWithExt.toLowerCase();
    const allowedExt = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

    const isImage = allowedExt.some((ext) => lower.endsWith(ext));

    return isImage;
  });

  return imageBlobs.map((blob) => {
    const fileNameWithExt = blob.pathname.split("/").pop() || "";
    const cleanName = fileNameWithExt.replace(/\.[^/.]+$/, "");

    return {
      id: blob.url,
      name: cleanName,
      url: blob.url,
    };
  });
}
