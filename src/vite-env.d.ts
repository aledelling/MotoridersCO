/**
 * MENTOR NOTE:
 * Este archivo es crucial en proyectos Vite + TypeScript.
 * Le dice al compilador de TS: "Oye, existen variables globales inyectadas por Vite
 * en import.meta.env". Sin esto, TS se queja de que 'env' no existe.
 */

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
