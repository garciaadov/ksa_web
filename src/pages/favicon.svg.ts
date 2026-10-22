// Favicon SVG con el monograma; se adapta al modo oscuro del sistema.
import type { APIRoute } from "astro";
import { monogramSvg } from "../lib/brand";

export const GET: APIRoute = () =>
  new Response(monogramSvg(64, true), { headers: { "Content-Type": "image/svg+xml" } });
