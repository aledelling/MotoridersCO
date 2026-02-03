// src/pages/admin/ProductList.tsx
/**
 * CAPA: Presentation / Pages
 * USO: CRUD de Productos para el Administrador.
 * MUESTRA: Consumo de API, manejo de estado de carga, y renderizado de tabla.
 */

import React, { useEffect, useState } from 'react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useAuth } from '../../context/AuthContext';
import { useTenant } from '../../context/TenantContext';
import { apiClient } from '../../services/apiClient';

// Definimos el tipo aquí o lo importamos de /types/dtos.ts
interface Product {
  id: string;
  name: string;
  category: string;
  priceCop: number;
  stockQty: number;
  isActive: boolean;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  const { token } = useAuth();
  const { tenantId } = useTenant();

  // Cargar productos al montar el componente
  useEffect(() => {
    fetchProducts();
  }, [tenantId]); // Si cambia el tenant, recargamos la lista

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      // Usamos el apiClient que ya inyecta X-Tenant-Id
      // Endpoint público por ahora, pero idealmente sería /api/admin/store/products
      const data = await apiClient<Product[]>('/public/store/products', { 
        token // opcional si el endpoint es público, pero buena práctica
      });
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Aquí podrías usar un toast notification
    } finally {
      setIsLoading(false);
    }
  };

  // Filtrado simple en cliente (para MVP)
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
           <h2 className="text-white font-bold text-xl">Inventario de Productos</h2>
           <p className="text-gray-400 text-sm">Gestiona el catálogo de tu tienda.</p>
        </div>
        <Button variant="primary" size="sm">
            <Plus size={18} className="mr-2" /> Nuevo Producto
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-black-surface p-4 rounded-xl border border-white/5 flex gap-4">
         <div className="w-full max-w-md relative">
            <Search className="absolute left-3 top-3.5 text-gray-500" size={18} />
            <Input 
                placeholder="Buscar por nombre o categoría..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
         </div>
      </div>

      {/* Table */}
      <div className="bg-black-surface rounded-xl border border-white/5 overflow-hidden">
         {isLoading ? (
             <div className="p-12 text-center text-gray-500">Cargando inventario...</div>
         ) : filteredProducts.length === 0 ? (
             <div className="p-12 text-center text-gray-500">No se encontraron productos.</div>
         ) : (
             <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-400">
                    <thead className="bg-white/5 text-white uppercase font-bold text-xs tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Producto</th>
                            <th className="px-6 py-4">Categoría</th>
                            <th className="px-6 py-4">Precio</th>
                            <th className="px-6 py-4 text-center">Stock</th>
                            <th className="px-6 py-4 text-center">Estado</th>
                            <th className="px-6 py-4 text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {filteredProducts.map((product) => (
                            <tr key={product.id} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 font-medium text-white">{product.name}</td>
                                <td className="px-6 py-4">
                                    <span className="bg-petrol-blue/30 text-petrol-light px-2 py-1 rounded text-xs font-bold uppercase">
                                        {product.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-white font-mono">{formatPrice(product.priceCop)}</td>
                                <td className="px-6 py-4 text-center">
                                    <span className={product.stockQty < 5 ? 'text-red-400 font-bold' : 'text-green-accent'}>
                                        {product.stockQty}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className={`w-2 h-2 rounded-full mx-auto ${product.isActive ? 'bg-green-accent' : 'bg-gray-600'}`}></div>
                                </td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button className="text-gray-400 hover:text-white transition-colors"><Edit size={18} /></button>
                                    <button className="text-gray-400 hover:text-red-400 transition-colors"><Trash2 size={18} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
         )}
      </div>
    </div>
  );
};

export default ProductList;