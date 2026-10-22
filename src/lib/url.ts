/**
 * Antepone la ruta base del sitio (config `base`) a una ruta interna.
 * Necesario para que los enlaces funcionen también en GitHub Pages (/nombre-repo/).
 */
export function withBase(path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
