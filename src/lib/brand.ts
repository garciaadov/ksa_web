/**
 * Gráficos de marca generados al compilar (favicon, icono iOS, imagen Open Graph).
 * Se sirven como archivos estáticos desde src/pages/*.ts.
 */
import { join } from "node:path";
import sharp from "sharp";
import { site } from "../data/site";

/** Logo original. Se lee desde la raíz del proyecto porque los endpoints se ejecutan al compilar. */
const LOGO_PATH = join(process.cwd(), "src/assets/ksa_logo.png");
/** Recorte que quita el halo exterior del logo, que a tamaño icono solo ensucia. */
const LOGO_CROP = { left: 120, top: 120, width: 1014, height: 1014 };

/** Logo recortado y escalado a PNG. `opaque` lo pone sobre fondo negro (iOS no admite transparencia). */
export async function logoPng(size: number, opaque = false): Promise<Uint8Array<ArrayBuffer>> {
  let image = sharp(LOGO_PATH).extract(LOGO_CROP).resize(size, size);
  if (opaque) image = image.flatten({ background: "#000000" });
  return new Uint8Array(await image.png({ compressionLevel: 9 }).toBuffer());
}

const FONT = "-apple-system, 'SF Pro Display', Inter, 'Segoe UI', Helvetica, Arial, sans-serif";

const escapeXml = (text: string): string =>
  text.replace(/[<>&"']/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[c] ?? c);

/** Monograma cuadrado con las iniciales (usado en la imagen Open Graph). */
export function monogramSvg(size: number): string {
  const initials = escapeXml(site.initials);
  const fontSize = Math.round(size * (site.initials.length > 2 ? 0.33 : 0.42));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><rect width="${size}" height="${size}" rx="${Math.round(size * 0.28)}" fill="${site.accent.light}"/><text x="50%" y="50%" dy="0.36em" text-anchor="middle" fill="#ffffff" font-family="${FONT}" font-size="${fontSize}" font-weight="700">${initials}</text></svg>`;
}

/** Imagen para compartir en redes (1200×630). */
export function ogSvg(): string {
  const name = escapeXml(site.name);
  const role = escapeXml(site.role);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="85%" cy="0%" r="75%">
      <stop offset="0" stop-color="${site.accent.light}" stop-opacity="0.16"/>
      <stop offset="1" stop-color="${site.accent.light}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#FBFBFD"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g transform="translate(96 110)">${monogramSvg(112).replace("<svg ", '<svg x="0" y="0" ')}</g>
  <text x="96" y="380" fill="#1D1D1F" font-family="${FONT}" font-size="88" font-weight="700" letter-spacing="-3">${name}</text>
  <text x="96" y="450" fill="#6E6E73" font-family="${FONT}" font-size="38" font-weight="500">${role}</text>
  <rect x="96" y="510" width="72" height="6" rx="3" fill="${site.accent.light}"/>
</svg>`;
}
