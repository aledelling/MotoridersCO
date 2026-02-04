import React from 'react';
import Button from './ui/Button';

const products = [
  { name: 'Casco AGV K1', price: '$850.000', type: 'Seguridad' },
  { name: 'Motul 7100 4T', price: '$65.000', type: 'Lubricantes' },
  { name: 'Guantes Alpinestars', price: '$220.000', type: 'Indumentaria' },
  { name: 'Kit Arrastre Racing', price: '$350.000', type: 'Repuestos' },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-black-surface border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-accent font-bold uppercase text-sm">Tienda Oficial</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2">Productos Destacados</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, idx) => (
            <div key={idx} className="bg-black-base rounded-xl overflow-hidden border border-white/5 group hover:border-green-accent/30 transition-all">
              <div className="h-48 bg-white/5 relative flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <span className="text-white/20 font-bold text-4xl">IMG</span>
                <div className="absolute top-3 left-3 bg-green-accent text-black-base text-xs font-bold px-2 py-1 rounded">
                  {p.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-1">{p.name}</h3>
                <p className="text-green-accent font-mono font-bold text-xl mb-4">{p.price}</p>
                <a href="/store">
                  <Button variant="outline" size="sm" fullWidth className="group-hover:bg-green-accent group-hover:text-black-base group-hover:border-green-accent">
                    Ver Detalles
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/store">
            <Button variant="secondary" size="lg">
              Ver Catálogo Completo
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;