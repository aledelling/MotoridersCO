import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black-base">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-petrol-blue/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-accent animate-pulse"></span>
            <span className="text-green-accent text-xs font-bold uppercase tracking-widest">Taller & Boutique Premium</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black leading-tight text-white tracking-tight">
            POTENCIA <br />
            TU <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-accent to-petrol-light">PASIÓN</span>
          </h1>
          
          <p className="text-lg text-muted max-w-lg leading-relaxed border-l-2 border-green-accent pl-6">
            Especialistas en alto cilindraje. Mantenimiento certificado, repuestos originales y la mejor indumentaria para el rider moderno.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="/admin/store/products">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Ingresar al Panel <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="/store">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Ver Catálogo <ShoppingBag className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          <div className="pt-8 flex items-center gap-8 text-sm text-gray-400">
            <div className="flex flex-col">
              <span className="font-bold text-white text-2xl">12k+</span>
              <span>Servicios</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-2xl">4.9</span>
              <span>Rating</span>
            </div>
          </div>
        </div>

        {/* Visual Element Placeholder */}
        <div className="hidden lg:flex justify-center relative">
          <div className="relative w-full max-w-lg aspect-square bg-gradient-to-br from-black-surface to-black-base rounded-3xl border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black-base via-transparent to-transparent"></div>
            
            <div className="relative z-10 text-center p-8 bg-black-base/80 backdrop-blur-sm border border-white/10 rounded-2xl max-w-xs">
              <span className="text-green-accent font-bold uppercase tracking-wider text-xs">Colección 2024</span>
              <h3 className="text-2xl font-bold text-white mt-2">Nueva Mercancía</h3>
              <p className="text-muted text-sm mt-2 mb-4">Descubre accesorios exclusivos.</p>
              <a href="/store" className="text-white hover:text-green-accent underline decoration-green-accent underline-offset-4 text-sm font-bold">Explorar ahora</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;