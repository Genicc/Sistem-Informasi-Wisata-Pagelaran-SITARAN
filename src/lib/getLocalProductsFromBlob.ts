import { list } from "@vercel/blob";

export type Product = {
  name: string;
  image: string;
};

const BLOB_PREFIX = "local-products/"; // atau prefix yang kamu pakai

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

export async function getLocalProductsFromBlob(): Promise<Product[]> {
  const { blobs } = await list({
    prefix: BLOB_PREFIX,
  });

  return blobs
    // ⬇⬇⬇ perbaikan di sini: filter pakai ekstensi, bukan contentType
    .filter((blob) =>
      /\.(png|jpe?g|webp|gif|avif)$/i.test(blob.pathname)
    )
    .map((blob) => ({
      name: prettifyName(blob.pathname),
      image: blob.url,
    }));
}
