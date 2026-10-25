/**
 * CONTENIDO DE LA WEB
 * Todo lo que se puede cambiar sin tocar el diseño está en este archivo:
 *   1. Datos comunes a los dos idiomas (imágenes, enlaces, colores)
 *   2. Textos en español
 *   3. Textos en inglés (misma estructura que el español; TypeScript avisa si falta alguno)
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
/* Idiomas                                                             */
/* ------------------------------------------------------------------ */

/** Idiomas de la web. El primero es el principal (ksaga.es/); el resto cuelga de /en/, etc. */
export const languages = ["es", "en"] as const;
export type Lang = (typeof languages)[number];

/** Nombre de cada idioma tal como aparece en el menú de idiomas (siempre en su propio idioma). */
export const languageNames: Record<Lang, string> = { es: "Español", en: "English" };

/** Texto que cambia según el idioma. */
export type Localized = Record<Lang, string>;

/** Devuelve el texto en el idioma pedido (acepta texto fijo o { es, en }). */
export const tr = (value: string | Localized, lang: Lang): string =>
  typeof value === "string" ? value : value[lang];

/** Ruta de una página en un idioma: path("/privacidad/", "en") → "/en/privacidad/". */
export const path = (page: string, lang: Lang): string => (lang === "es" ? page : `/${lang}${page}`);

/* ------------------------------------------------------------------ */
/* 1. Datos comunes                                                    */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Aleks Garcia",
  /** Texto de la pestaña del navegador y título al compartir en redes. */
  title: "KSAGA",
  /** Logo del header (el favicon y og.png de public/ son imágenes fijas aparte). */
  logo,
  photo: foto,
  /** Color de acento para el tema claro y el oscuro. */
  accent: { light: "#7A1F3D", dark: "#C0506E" },
  /** PDF del botón "Más información..." (ruta dentro de public/). Pon "" para ocultar el botón. */
  cv: "/documentos/CV_Aleksey_Garcia_Adov.pdf",
};

export interface Experience {
  /** Nombre que aparece al pasar el ratón (texto fijo o { es, en }). */
  name: string | Localized;
  logo: ImageMetadata;
  /** Color de fondo del círculo; conviene que coincida con el fondo del logo. */
  background: string;
  /** Tamaño del logo dentro del círculo (1 = ocupa todo el círculo). */
  scale?: number;
}

export const experience: Experience[] = [
  { name: "ACCENC", logo: accenc, background: "#FFFFFF" },
  // "JASA" es blanco y "WA" azul marino: el fondo intermedio permite leer ambos
  { name: "JASAWA", logo: jasawa, background: "#7F9CC4", scale: 0.78 },
  { name: "T1", logo: t1, background: "#FFFFFF" },
  {
    name: { es: "Universidad Estatal de San Petersburgo", en: "Saint Petersburg State University" },
    logo: spbgu,
    background: "#F2F2F2",
    scale: 0.74,
  },
];

export type ProjectStatus = "publicado" | "en-desarrollo" | "proximamente";

export interface Project {
  title: string | Localized;
  description: string | Localized;
  status: ProjectStatus;
  /** Captura opcional: guárdala en src/assets/, impórtala arriba y pon { src: captura, alt: { es, en } }. */
  image?: { src: ImageMetadata; alt: string | Localized };
  /** Enlace a la demo o al repositorio (opcional). */
  href?: string;
  tags?: string[];
}

/** Mientras esté vacío, la sección muestra "Próximamente...". Añadir un proyecto = añadir un objeto. */
export const projects: Project[] = [];

export interface ContactLink {
  label: string;
  /** Texto pequeño bajo el nombre (usuario, dirección…). */
  handle: string;
  href: string;
  icon: IconName;
}

export const contactLinks: ContactLink[] = [
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
];

/* ------------------------------------------------------------------ */
/* 2. Textos en español                                                */
/* ------------------------------------------------------------------ */

const es = {
  /** Descripción para Google y redes sociales. */
  description:
    "Portfolio de Aleks Garcia, Software Developer orientado a la ciberseguridad: proyectos y contacto.",
  skipLink: "Saltar al contenido",
  nav: {
    label: "Principal",
    inicio: "Inicio",
    experiencia: "Experiencia",
    proyectos: "Proyectos",
    contactos: "Contactos",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    darkMode: "Modo oscuro",
    homeLink: "ir al inicio",
    /** Botón del menú de idiomas (para lectores de pantalla). */
    language: "Idioma",
  },
  hero: {
    role: "Software Developer",
    headline: "Aleks Garcia",
    intro:
      "Desarrollo aplicaciones y soluciones web, y actualmente estoy orientando mi camino hacia la ciberseguridad. " +
      "Me interesa especialmente la seguridad en aplicaciones, el análisis de vulnerabilidades " +
      "y construir software más seguro desde el diseño.",
    photoAlt: "Retrato de Aleks Garcia",
    ctaProjects: "Ver proyectos",
    ctaContact: "Contactar",
  },
  experience: {
    eyebrow: "Experiencia",
    title: "Experiencia",
    cvButton: "Más información...",
    cvLabel: "Más información: descargar currículum en PDF",
  },
  projects: {
    eyebrow: "Proyectos",
    title: "Market de proyectos",
    empty: "Próximamente...",
    tagsLabel: "Tecnologías",
    status: { publicado: "Publicado", "en-desarrollo": "En desarrollo", proximamente: "Próximamente" },
  },
  contact: {
    eyebrow: "Contactos",
    title: "Hablemos",
    intro: "¿Tienes una idea o una oferta? Escríbeme por cualquiera de estos canales.",
  },
  footer: { privacy: "Privacidad" },
};

/* ------------------------------------------------------------------ */
/* 3. Textos en inglés                                                 */
/* ------------------------------------------------------------------ */

const en: typeof es = {
  description:
    "Portfolio of Aleks Garcia, a Software Developer focused on cybersecurity: projects and contact.",
  skipLink: "Skip to content",
  nav: {
    label: "Main",
    inicio: "Home",
    experiencia: "Experience",
    proyectos: "Projects",
    contactos: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    darkMode: "Dark mode",
    homeLink: "go to home",
    language: "Language",
  },
  hero: {
    role: "Software Developer",
    headline: "Aleks Garcia",
    intro:
      "I build web applications and solutions, and I'm currently steering my path towards cybersecurity. " +
      "I'm especially interested in application security, vulnerability analysis " +
      "and building software that is secure by design.",
    photoAlt: "Portrait of Aleks Garcia",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
  },
  experience: {
    eyebrow: "Experience",
    title: "Experience",
    cvButton: "More info...",
    cvLabel: "More info: download résumé (PDF)",
  },
  projects: {
    eyebrow: "Projects",
    title: "Project showcase",
    empty: "Coming soon...",
    tagsLabel: "Technologies",
    status: { publicado: "Live", "en-desarrollo": "In progress", proximamente: "Coming soon" },
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    intro: "Got an idea or an offer? Reach out through any of these channels.",
  },
  footer: { privacy: "Privacy" },
};

/** Textos de la interfaz por idioma: t[lang].hero.intro, etc. */
export const t: Record<Lang, typeof es> = { es, en };
