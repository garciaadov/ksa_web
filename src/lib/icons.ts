/**
 * Iconos SVG inline (viewBox 0 0 24 24).
 * - "stroke": iconos de línea, heredan currentColor como trazo.
 * - "fill": logotipos de marca, heredan currentColor como relleno.
 * Para añadir uno nuevo basta con añadir una entrada; el tipo IconName se actualiza solo.
 */
export const icons = {
  code: { kind: "stroke", body: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>' },
  database: {
    kind: "stroke",
    body: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>',
  },
  chart: { kind: "stroke", body: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>' },
  sparkles: {
    kind: "stroke",
    body: '<path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  },
  cloud: { kind: "stroke", body: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>' },
  mail: { kind: "stroke", body: '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-10 6L2 7"/>' },
  sun: {
    kind: "stroke",
    body: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  },
  moon: { kind: "stroke", body: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>' },
  arrowUpRight: { kind: "stroke", body: '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>' },
  download: { kind: "stroke", body: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>' },
  clock: { kind: "stroke", body: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>' },
  menu: { kind: "stroke", body: '<path d="M4 8h16"/><path d="M4 16h16"/>' },
  linkedin: {
    kind: "fill",
    body: '<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>',
  },
  github: {
    kind: "fill",
    body: '<path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57l-.02-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.21.69.82.57A12 12 0 0 0 12 .3"/>',
  },
} as const satisfies Record<string, { kind: "stroke" | "fill"; body: string }>;

export type IconName = keyof typeof icons;
