// src/lib/getLocalGalleryFromBlob.ts
import { list } from "@vercel/blob";
import { prettifyBlobName } from "./products"; // ⬅️ pakai helper yang sama

export type GalleryItem = {
  id: string;
  name: string;
  url: string;
};

const GALLERY_BLOB_PREFIX = "gallery/";

export async function getLocalGalleryFromBlob(): Promise<GalleryItem[]> {
  const { blobs } = await list({
    prefix: GALLERY_BLOB_PREFIX,
    limit: 100,
  });

  console.log("GALLERY BLOBS:", blobs.map((b) => b.pathname));

  return blobs
    .filter((blob) => /\.(png|jpe?g|webp|gif|avif)$/i.test(blob.pathname))
    .map((blob) => ({
      id: blob.url,
      name: prettifyBlobName(blob.pathname), // ⬅️ helper yang sama
      url: blob.url,
    }));
}
