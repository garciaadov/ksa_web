// Imagen Open Graph (1200×630) generada al compilar a partir de site.ts.
import type { APIRoute } from "astro";
import sharp from "sharp";
import { ogSvg } from "../lib/brand";

export const GET: APIRoute = async () => {
  const png = await sharp(Buffer.from(ogSvg())).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
