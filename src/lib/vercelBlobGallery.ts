// src/lib/vercelBlobGallery.ts
import { list } from "@vercel/blob";

export type BlobImage = {
  id: string;
  name: string;
  url: string;
};

const GALLERY_BLOB_PREFIX = "gallery/"; // samain gaya dengan BLOB_PREFIX di product

function prettifyName(pathname: string): string {
  const parts = pathname.split("/");
  const filename = parts[parts.length - 1];

  const withoutExt = filename.replace(/\.[^.]+$/, "");
  const withSpaces = withoutExt.replace(/[-_]+/g, " ");

  return withSpaces
    .split(" ")
    .map((word) =>
      word.length === 0 ? "" : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");
}

export async function getBlobImages(): Promise<BlobImage[]> {
  const { blobs } = await list({
    prefix: GALLERY_BLOB_PREFIX,
    limit: 100,
  });

  console.log("GALLERY BLOBS:", blobs.map((b) => b.pathname));

  return blobs
    // buang "folder kosong" dan non-image sekaligus, pakai pola yang sama dengan product
    .filter((blob) =>
      /\.(png|jpe?g|webp|gif|avif)$/i.test(blob.pathname)
    )
    .map((blob) => ({
      id: blob.url, // boleh juga pakai blob.pathname kalau mau stable ID
      name: prettifyName(blob.pathname),
      url: blob.url,
    }));
}
