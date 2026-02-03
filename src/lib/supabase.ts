// src/lib/supabase.ts
/**
 * CAPA: Infrastructure / Configuration
 * USO: Inicialización del cliente de Supabase (Singleton).
 */

import { createClient } from '@supabase/supabase-js';

// MENTOR NOTE: Gracias a src/vite-env.d.ts, ya no necesitamos (import.meta as any)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('⚠️ Supabase credentials missing. Auth will not work properly.');
}

// Exportamos una única instancia para toda la app
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseKey || 'placeholder-key'
);