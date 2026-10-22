/**
 * Punto de integración reservado para un backend futuro ([BACKEND A CONFIRMAR]).
 *
 * Ahora la web es 100 % estática y ningún componente importa este módulo.
 * Si algún día se añade, por ejemplo, un formulario de contacto:
 *   1. Define PUBLIC_API_URL en .env (ver .env.example).
 *   2. Implementa aquí las llamadas (fetch) contra ese backend.
 *   3. Úsalas desde el <script> del componente que lo necesite.
 * Así la interfaz no queda acoplada a ningún proveedor concreto.
 */

/** URL base del backend; vacía mientras no exista. */
export const API_BASE_URL: string = import.meta.env.PUBLIC_API_URL ?? "";

/** Indica si hay un backend configurado. */
export const hasBackend = (): boolean => API_BASE_URL.length > 0;

/** Ejemplo de contrato de datos para un futuro formulario de contacto. */
export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}
