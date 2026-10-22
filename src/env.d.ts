/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Reservado para un backend futuro. Ver src/lib/api.ts. */
  readonly PUBLIC_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
