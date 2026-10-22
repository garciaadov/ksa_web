/**
 * Configuración central del sitio.
 * Toda la personalización está aquí. Busca "[PLACEHOLDER]" para ver qué sustituir.
 */
import type { ImageMetadata } from "astro";
import type { IconName } from "../lib/icons";
import logo from "../assets/ksa_logo.png";
import foto from "../assets/inv.jpg";

export interface QuickItem {
  /** Texto del tooltip / etiqueta. */
  label: string;
  icon: IconName;
  /** Opcional: si se indica, el círculo es un enlace. */
  href?: string;
}

export interface ContactLink {
  label: string;
  /** Texto visible bajo la etiqueta (usuario, dirección…). */
  handle: string;
  href: string;
  icon: IconName;
}

export interface SiteConfig {
  name: string;
  /** Iniciales del monograma (favicon e imagen Open Graph). Máximo 2-3 letras. */
  initials: string;
  /** Logo del header. Cambia el archivo en src/assets/ o el import de arriba. */
  logo: ImageMetadata;
  role: string;
  /** Título y descripción por defecto para SEO y Open Graph. */
  title: string;
  description: string;
  locale: string;
  /** Color de acento para cada tema. */
  accent: { light: string; dark: string };
  hero: {
    headline: string;
    intro: string;
    /**
     * Foto del hero. Mientras sea null se muestra un placeholder.
     * Para usar la tuya: guarda la imagen en src/assets/ e impórtala arriba:
     *   import foto from "../assets/foto.jpg";
     * y pon aquí `photo: foto`.
     */
    photo: ImageMetadata | null;
    photoAlt: string;
  };
  /** Fila de 5 iconos circulares bajo el hero. */
  quickItems: QuickItem[];
  contact: {
    intro: string;
    links: ContactLink[];
  };
}

export const site: SiteConfig = {
  name: "Aleks Garcia",
  initials: "KSA",
  logo,
  role: "Software Developer",
  title: "KSAGA",
  description:
    "Portfolio de Aleks Garcia, Software Developer orientado a la ciberseguridad: proyectos y contacto.",
  locale: "es_ES",
  accent: { light: "#7A1F3D", dark: "#C0506E" },

  hero: {
    headline: "Aleks Garcia",
    intro:
      "Desarrollo aplicaciones y soluciones web, y actualmente estoy orientando mi camino hacia la ciberseguridad. " +
      "Me interesa especialmente la seguridad en aplicaciones, el análisis de vulnerabilidades " +
      "y construir software más seguro desde el diseño.",
    photo: foto,
    photoAlt: "Retrato de Aleks Garcia",
  },

  // [PLACEHOLDER] Pueden ser tu stack, habilidades o enlaces rápidos (añade `href`).
  // Iconos disponibles: ver src/lib/icons.ts.
  quickItems: [
    { label: "Python", icon: "code" },
    { label: "SQL y bases de datos", icon: "database" },
    { label: "Visualización de datos", icon: "chart" },
    { label: "Machine Learning e IA", icon: "sparkles" },
    { label: "Cloud", icon: "cloud" },
  ],

  contact: {
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
  },
};
