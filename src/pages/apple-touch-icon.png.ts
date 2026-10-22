// Icono para la pantalla de inicio de iOS (180×180), generado a partir del logo.
import type { APIRoute } from "astro";
import { logoPng } from "../lib/brand";

export const GET: APIRoute = async () =>
  new Response(await logoPng(180, true), { headers: { "Content-Type": "image/png" } });
