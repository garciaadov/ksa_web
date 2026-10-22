// @ts-check
import { defineConfig } from "astro/config";

// SITE_URL y BASE_PATH se pueden definir como variables de entorno al compilar
// (útil para GitHub Pages). Ver README.md → "Publicar gratis".
export default defineConfig({
  // URL pública final. Se usa para Open Graph y URLs canónicas.
  site: process.env.SITE_URL ?? "https://ksaga.es",
  // "/" para dominio propio, Netlify o Cloudflare Pages; "/nombre-repo" para GitHub Pages sin dominio.
  base: process.env.BASE_PATH ?? "/",
  output: "static",
  // Desactiva la barra de herramientas de Astro en `npm run dev` (nunca aparece en producción).
  devToolbar: { enabled: false },
});
