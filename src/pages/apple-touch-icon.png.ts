// Icono para la pantalla de inicio de iOS (180×180), rasterizado al compilar.
import type { APIRoute } from "astro";
import sharp from "sharp";
import { monogramSvg } from "../lib/brand";

export const GET: APIRoute = async () => {
  // iOS redondea las esquinas por su cuenta: se rellena todo el cuadrado
  const svg = monogramSvg(180).replace(/rx="\d+"/, 'rx="0"');
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
