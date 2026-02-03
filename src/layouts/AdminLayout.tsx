// src/layouts/AdminLayout.tsx
/**
 * CAPA: Presentation / Layouts
 * USO: Estructura visual para todas las páginas bajo /admin.
 * Incluye Sidebar, Header y manejo de sesión.
 */

import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTenant } from '../context/TenantContext';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Wrench, 
  Users, 
  Settings, 
  LogOut, 
  Bike 
} from 'lucide-react';
import Button from '../components/ui/Button';

const AdminLayout: React.FC = () => {
  const { user, signOut } = useAuth();
  const { tenantId, setTenantId } = useTenant();
  const navigate = useNavigate();

  // Redirección simple si no hay usuario (Admin Gate)
  // En una app real, verificaríamos el rol aquí también.
  React.useEffect(() => {
    if (!user) {
      // navigate('/'); // Comentado para permitir ver el layout mientras se integra auth real
    }
  }, [user, navigate]);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: ShoppingBag, label: 'Productos', path: '/admin/store/products' },
    { icon: Wrench, label: 'Taller / Órdenes', path: '/admin/workshop/work-orders' },
    { icon: Users, label: 'Clientes', path: '/admin/customers' },
    { icon: Settings, label: 'Configuración', path: '/admin/settings' },
  ];

  const handleSignOut = async () => {
      await signOut();
      navigate('/');
  };

  return (
    <div className="min-h-screen bg-black-base flex font-sans text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-black-surface border-r border-white/5 flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-white/5 flex items-center gap-2">
           <Bike className="text-green-accent w-6 h-6" />
           <span className="font-display font-black tracking-tighter text-lg">
             Moto<span className="text-green-accent">Riders</span> Admin
           </span>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/admin'} // Exact match for root
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                ${isActive 
                  ? 'bg-green-accent/10 text-green-accent border border-green-accent/20' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'}
              `}
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-8 h-8 rounded-full bg-petrol-blue flex items-center justify-center font-bold text-xs">
              {user?.email?.charAt(0).toUpperCase() || 'A'}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">{user?.email || 'Admin'}</p>
              <p className="text-xs text-gray-500 truncate">{tenantId}</p>
            </div>
          </div>
          <button 
            onClick={handleSignOut}
            className="w-full flex items-center gap-2 text-gray-500 hover:text-red-400 text-sm px-2 py-2 transition-colors"
          >
            <LogOut size={16} /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8">
        {/* Top Bar for Tenant Switching (Dev Tool) */}
        <div className="mb-8 flex justify-between items-center">
             <h1 className="text-2xl font-display font-bold text-white">Panel de Administración</h1>
             
             {/* Tenant Selector (Dev purposes mainly) */}
             <div className="flex items-center gap-2 bg-black-surface border border-white/10 rounded-lg px-3 py-1.5">
                <span className="text-xs text-gray-500 uppercase font-bold">Tenant:</span>
                <select 
                    value={tenantId}
                    onChange={(e) => setTenantId(e.target.value)}
                    className="bg-transparent text-sm text-green-accent font-mono outline-none cursor-pointer"
                >
                    <option value="motoriders-bogota-001">motoriders-bogota-001</option>
                    <option value="motoriders-medellin-001">motoriders-medellin-001</option>
                    <option value="demo-tenant">demo-tenant</option>
                </select>
             </div>
        </div>

        {/* Page Content */}
        <div className="animate-in fade-in duration-300">
           <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;