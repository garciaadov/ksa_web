// Favicon generado a partir del logo (src/assets/ksa_logo.png).
import type { APIRoute } from "astro";
import { logoPng } from "../lib/brand";

export const GET: APIRoute = async () =>
  new Response(await logoPng(64), { headers: { "Content-Type": "image/png" } });
