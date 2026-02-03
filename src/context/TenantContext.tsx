// src/context/TenantContext.tsx
/**
 * CAPA: Infrastructure / State Management
 * USO: Provee el 'tenantId' actual a toda la aplicación.
 * 
 * MENTOR NOTE:
 * ¿Por qué un Contexto?
 * El Tenant ID es un dato "global". Muchos componentes (API calls, UI titles, config)
 * necesitan saber en qué tienda estamos. Pasarlo por props sería "prop drilling" infernal.
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

interface TenantContextType {
  tenantId: string;
  setTenantId: (id: string) => void;
}

// Valor por defecto para desarrollo o fallback
const DEFAULT_TENANT = 'motoriders-bogota-001';

const TenantContext = createContext<TenantContextType | undefined>(undefined);

export const TenantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Inicializamos leyendo de localStorage para persistir la elección del usuario (útil en dev/admin)
  const [tenantId, setTenantIdState] = useState<string>(() => {
    return localStorage.getItem('motoriders_tenant_id') || DEFAULT_TENANT;
  });

  const setTenantId = (id: string) => {
    setTenantIdState(id);
    localStorage.setItem('motoriders_tenant_id', id);
    // Opcional: Recargar página para asegurar limpieza de estados antiguos si fuera crítico
    // window.location.reload(); 
  };

  return (
    <TenantContext.Provider value={{ tenantId, setTenantId }}>
      {children}
    </TenantContext.Provider>
  );
};

// Custom Hook para consumir el contexto fácilmente
export const useTenant = () => {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error('useTenant must be used within a TenantProvider');
  }
  return context;
};