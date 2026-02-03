/**
 * API Configuration for MVP
 * 
 * Future Architecture:
 * - Backend: Java Spring Boot (Hexagonal Architecture)
 * - Auth: Supabase (JWT validation via JWKS)
 * - Multitenancy: Discriminated by X-Tenant-Id header
 */

export const API_CONFIG = {
  // En producción, esto vendría de variables de entorno (VITE_API_URL)
  BASE_URL: 'http://localhost:8080/api/v1', 
  
  // Identificador del Tenant para este deployment específico
  TENANT_ID: 'motoriders-bogota-001',
  
  // Headers base para todas las peticiones
  getHeaders: () => ({
    'Content-Type': 'application/json',
    'X-Tenant-Id': 'motoriders-bogota-001',
    // 'Authorization': `Bearer ${token}` // Se inyectará cuando exista auth real
  })
};