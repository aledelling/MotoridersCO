import { API_CONFIG } from './apiConfig';

/**
 * Mock Auth Service
 * Simulates interaction with Spring Boot + Supabase architecture.
 */

export const authService = {
  login: async (email: string, password: string) => {
    console.log(`[AuthService] Attempting login for ${email} on tenant ${API_CONFIG.TENANT_ID}`);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock success
    return {
      user: { id: 'u1', email, name: 'Usuario Demo' },
      token: 'mock-jwt-token-supabase'
    };
  },

  register: async (email: string, password: string, name: string) => {
    console.log(`[AuthService] Registering ${email}`);
    await new Promise(resolve => setTimeout(resolve, 1500));
    return {
      user: { id: 'u2', email, name },
      token: 'mock-jwt-token-supabase'
    };
  }
};