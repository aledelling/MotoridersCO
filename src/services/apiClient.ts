// src/services/apiClient.ts
/**
 * CAPA: Infrastructure / Network
 * USO: Wrapper sobre 'fetch' para inyectar headers de Multitenancy y Auth automáticamente.
 */

// Obtenemos la URL base de las variables de entorno (definidas en .env)
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

interface RequestOptions extends RequestInit {
  token?: string | null;     // Token JWT de Supabase
  tenantId?: string;         // ID del tenant (tienda) actual
}

export async function apiClient<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { token, tenantId, headers, ...customConfig } = options;

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // 1. Inyección de Auth Token (Bearer)
  // Si el usuario está logueado, enviamos su "pasaporte" al backend.
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  // 2. Inyección de Tenant ID
  // CRÍTICO: El backend necesita saber a qué tienda pertenece la petición para filtrar la DB.
  const currentTenant = tenantId || localStorage.getItem('motoriders_tenant_id') || 'motoriders-bogota-001';
  defaultHeaders['X-Tenant-Id'] = currentTenant;

  const config: RequestInit = {
    ...customConfig,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);

    // MENTOR NOTE: fetch no lanza error en 404 o 500, solo en fallos de red.
    // Debemos verificar response.ok manualmente.
    if (!response.ok) {
      let errorMessage = `Error ${response.status}: ${response.statusText}`;
      try {
        const errorBody = await response.json();
        if (errorBody.message) errorMessage = errorBody.message;
      } catch (e) {
        // Si el backend no devolvió JSON, nos quedamos con el texto genérico
      }
      throw new Error(errorMessage);
    }

    // Si la respuesta es 204 No Content (ej: un delete exitoso), retornamos null
    if (response.status === 204) {
        return null as T;
    }

    return await response.json();
  } catch (error) {
    console.error(`[API Error] ${endpoint}:`, error);
    throw error;
  }
}