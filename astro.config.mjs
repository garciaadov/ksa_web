// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // URL pública: se usa en las etiquetas para Google y redes sociales.
  site: "https://ksaga.es",
  output: "static",
  // Oculta la barra de herramientas de Astro en `npm run dev`.
  devToolbar: { enabled: false },
});
