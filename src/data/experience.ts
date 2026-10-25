/**
 * Experiencia: logos que se desplazan en la fila circular bajo la presentación.
 * Añadir una entrada = guardar el logo en src/assets/experiencia/ e importarlo aquí.
 */
import type { ImageMetadata } from "astro";
import accenc from "../assets/experiencia/accenc.jpg";
import jasawa from "../assets/experiencia/jasawa.svg";
import t1 from "../assets/experiencia/t1.jpg";
import spbgu from "../assets/experiencia/spbgu.jpg";

export interface Experience {
  /** Nombre visible en el tooltip y para lectores de pantalla. */
  name: string;
  logo: ImageMetadata;
  /** Color de fondo del círculo; conviene que coincida con el fondo del logo. */
  background: string;
  /** Tamaño del logo dentro del círculo (1 = ocupa todo el círculo). */
  scale?: number;
  /** Opcional: puesto o descripción breve, se añade al tooltip. */
  role?: string;
}

export const experience: Experience[] = [
  { name: "ACCENC", logo: accenc, background: "#FFFFFF" },
  // "JASA" es blanco y "WA" azul marino: el fondo intermedio permite leer ambos
  { name: "JASAWA", logo: jasawa, background: "#7F9CC4", scale: 0.78 },
  { name: "T1", logo: t1, background: "#FFFFFF" },
  { name: "Universidad Estatal de San Petersburgo", logo: spbgu, background: "#F2F2F2", scale: 0.74 },
];
