/**
 * Proyectos del portfolio.
 * Añadir un proyecto = añadir un objeto al array `projects`.
 */
import type { ImageMetadata } from "astro";

export type ProjectStatus = "publicado" | "en-desarrollo" | "proximamente";

export interface Project {
  title: string;
  description: string;
  status: ProjectStatus;
  /**
   * Captura del proyecto (opcional). Guárdala en src/assets/ e impórtala:
   *   import captura from "../assets/proyecto.png";
   *   image: { src: captura, alt: "Captura de …" }
   * Sin imagen se muestra un placeholder.
   */
  image?: { src: ImageMetadata; alt: string };
  /** Enlace a la demo o al repositorio (opcional). */
  href?: string;
  tags?: string[];
}

/** Texto visible de cada estado. */
export const statusLabel: Record<ProjectStatus, string> = {
  publicado: "Publicado",
  "en-desarrollo": "En desarrollo",
  proximamente: "Próximamente",
};

// [PLACEHOLDER] Sustituye estas tarjetas por tus proyectos reales.
export const projects: Project[] = [

];
