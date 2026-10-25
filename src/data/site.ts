/**
 * CONTENIDO DE LA WEB
 * Todo lo que se puede cambiar sin tocar el diseño está en este archivo,
 * ordenado igual que las secciones de la página:
 *   1. General (nombre, título, colores)
 *   2. Inicio (foto y presentación)
 *   3. Experiencia (logos y currículum)
 *   4. Proyectos
 *   5. Contacto
 *
 * Imágenes: van en src/assets/ y se importan aquí arriba (Astro las optimiza).
 * Archivos para descargar (PDF): van en public/documentos/.
 */
import type { ImageMetadata } from "astro";
import type { IconName } from "../components/Icon.astro";

import logo from "../assets/logo.png";
import foto from "../assets/foto.jpg";
import accenc from "../assets/experiencia/accenc.jpg";
import jasawa from "../assets/experiencia/jasawa.svg";
import t1 from "../assets/experiencia/t1.jpg";
import spbgu from "../assets/experiencia/spbgu.jpg";

/* ------------------------------------------------------------------ */
/* 1. General                                                          */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Aleks Garcia",
  /** Texto de la pestaña del navegador y título al compartir en redes. */
  title: "KSAGA",
  /** Descripción para Google y redes sociales. */
  description:
    "Portfolio de Aleks Garcia, Software Developer orientado a la ciberseguridad: proyectos y contacto.",
  /** Logo del header (el favicon y og.png de public/ son imágenes fijas aparte). */
  logo,
  /** Color de acento para el tema claro y el oscuro. */
  accent: { light: "#7A1F3D", dark: "#C0506E" },
};

/* ------------------------------------------------------------------ */
/* 2. Inicio                                                           */
/* ------------------------------------------------------------------ */

export const hero = {
  role: "Software Developer",
  headline: "Aleks Garcia",
  intro:
    "Desarrollo aplicaciones y soluciones web, y actualmente estoy orientando mi camino hacia la ciberseguridad. " +
    "Me interesa especialmente la seguridad en aplicaciones, el análisis de vulnerabilidades " +
    "y construir software más seguro desde el diseño.",
  photo: foto,
  photoAlt: "Retrato de Aleks Garcia",
};

/* ------------------------------------------------------------------ */
/* 3. Experiencia                                                      */
/* ------------------------------------------------------------------ */

export interface Experience {
  /** Nombre que aparece al pasar el ratón. */
  name: string;
  logo: ImageMetadata;
  /** Color de fondo del círculo; conviene que coincida con el fondo del logo. */
  background: string;
  /** Tamaño del logo dentro del círculo (1 = ocupa todo el círculo). */
  scale?: number;
  /** Opcional: puesto o años, se añade al nombre. */
  role?: string;
}

export const experience: Experience[] = [
  { name: "ACCENC", logo: accenc, background: "#FFFFFF" },
  // "JASA" es blanco y "WA" azul marino: el fondo intermedio permite leer ambos
  { name: "JASAWA", logo: jasawa, background: "#7F9CC4", scale: 0.78 },
  { name: "T1", logo: t1, background: "#FFFFFF" },
  { name: "Universidad Estatal de San Petersburgo", logo: spbgu, background: "#F2F2F2", scale: 0.74 },
];

/** PDF del botón "Más información..." (ruta dentro de public/). Pon "" para ocultar el botón. */
export const cv = "/documentos/CV_Aleksey_Garcia_Adov.pdf";

/* ------------------------------------------------------------------ */
/* 4. Proyectos                                                        */
/* ------------------------------------------------------------------ */

export type ProjectStatus = "publicado" | "en-desarrollo" | "proximamente";

export interface Project {
  title: string;
  description: string;
  status: ProjectStatus;
  /** Captura opcional: guárdala en src/assets/, impórtala arriba y pon { src: captura, alt: "…" }. */
  image?: { src: ImageMetadata; alt: string };
  /** Enlace a la demo o al repositorio (opcional). */
  href?: string;
  tags?: string[];
}

/** Mientras esté vacío, la sección muestra "Próximamente...". Añadir un proyecto = añadir un objeto. */
export const projects: Project[] = [];

/* ------------------------------------------------------------------ */
/* 5. Contacto                                                         */
/* ------------------------------------------------------------------ */

export interface ContactLink {
  label: string;
  /** Texto pequeño bajo el nombre (usuario, dirección…). */
  handle: string;
  href: string;
  icon: IconName;
}

export const contact: { intro: string; links: ContactLink[] } = {
  intro: "¿Tienes una idea o una oferta? Escríbeme por cualquiera de estos canales.",
  links: [
    {
      label: "LinkedIn",
      handle: "in/alekseygarciaadov",
      href: "https://www.linkedin.com/in/alekseygarciaadov",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      handle: "@garciaadov",
      href: "https://github.com/garciaadov",
      icon: "github",
    },
  ],
};
