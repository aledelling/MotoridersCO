import React from 'react';
import { ProductItem } from '../types';
import Button from './ui/Button';

const products: ProductItem[] = [
  {
    id: 'p1',
    name: 'Casco AGV K3 SV',
    category: 'Cascos',
    price: 1250000,
    imageUrl: 'https://images.unsplash.com/photo-1622615951556-9a572620703f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'p2',
    name: 'Guantes Alpinestars SP-8',
    category: 'Protección',
    price: 450000,
    imageUrl: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'p3',
    name: 'Motul 7100 10W40',
    category: 'Aceites',
    price: 85000,
    imageUrl: 'https://m.media-amazon.com/images/I/61k8wO9+S+L._AC_SL1000_.jpg', // Placeholder fallback
  },
  {
    id: 'p4',
    name: 'Kit de Arrastre Racing',
    category: 'Repuestos',
    price: 320000,
    imageUrl: 'https://images.unsplash.com/photo-1586797305949-0d8692695503?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'p5',
    name: 'Chaqueta Protección',
    category: 'Indumentaria',
    price: 890000,
    imageUrl: 'https://images.unsplash.com/photo-1559530432-849547d6d33a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'p6',
    name: 'Intercomunicador Cardo',
    category: 'Accesorios',
    price: 1100000,
    imageUrl: 'https://images.unsplash.com/photo-1625043484555-5f6531393653?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
];

const FeaturedProducts: React.FC = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="tienda" className="py-24 bg-black-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-green-accent font-bold tracking-wider uppercase text-sm">Tienda Oficial</span>
            <h2 className="font-display text-4xl font-bold text-white mt-2">Productos Destacados</h2>
          </div>
          <a href="#" className="text-muted hover:text-white transition-colors underline decoration-green-accent underline-offset-4 mt-4 md:mt-0">
            Ver catálogo completo
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-black-base rounded-xl overflow-hidden group border border-white/5 hover:border-green-accent/30 transition-all">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-black-surface/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-white z-10 uppercase">
                  {product.category}
                </div>
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/500x500/16191F/FFFFFF?text=MotoRiders';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-accent font-display font-bold text-xl">
                    {formatPrice(product.price)}
                  </span>
                  <Button variant="outline" size="sm" className="!px-3 !py-1 text-xs">
                    Añadir
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;