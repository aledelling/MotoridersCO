// src/App.tsx
/**
 * CAPA: Presentation / Root
 * USO: Punto de entrada de la aplicación. Configura Providers globales y Rutas.
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Providers
import { TenantProvider } from './context/TenantContext';
import { AuthProvider } from './context/AuthContext';

// Pages & Layouts
import LandingPage from './pages/LandingPage';
import AdminLayout from './layouts/AdminLayout';
import ProductList from './pages/admin/ProductList';

// Placeholder Components (para que compile MVP)
const DashboardPlaceholder = () => <div className="text-gray-400">Bienvenido al Panel de Administración. Selecciona una opción del menú.</div>;
const WorkOrdersPlaceholder = () => <div className="text-gray-400">Módulo de Taller (En construcción MVP).</div>;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* 1. TenantProvider: Envuelve todo para que el tenant esté disponible globalmente */}
      <TenantProvider>
        {/* 2. AuthProvider: Maneja sesión de usuario (depende de Tenant? No necesariamente, pero bueno tenerlo dentro) */}
        <AuthProvider>
          <Routes>
            {/* Ruta Pública: Landing Page */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Rutas Públicas de Tienda (ToDo MVP) */}
            <Route path="/store" element={<div className="text-white p-10">Catálogo Completo (Próximamente)</div>} />

            {/* Rutas Admin: Protegidas por AdminLayout */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<DashboardPlaceholder />} />
              <Route path="store/products" element={<ProductList />} />
              <Route path="workshop/work-orders" element={<WorkOrdersPlaceholder />} />
            </Route>

            {/* Fallback 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
      </TenantProvider>
    </BrowserRouter>
  );
};

export default App;