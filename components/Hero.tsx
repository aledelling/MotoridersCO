import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black-base via-black-base/80 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-accent/10 border border-green-accent/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-accent animate-pulse"></span>
            <span className="text-green-accent text-xs font-bold uppercase tracking-widest">Abierto Ahora • Bogotá D.C.</span>
          </div>
          
          <h1 className="font-display text-5xl lg:text-7xl font-black leading-[1.1] text-white">
            TU MOTO EN LAS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-accent to-green-600">
              MEJORES MANOS
            </span>
          </h1>
          
          <p className="text-lg text-muted max-w-lg leading-relaxed">
            Taller especializado y almacén premium. Repuestos originales, técnicos certificados y garantía total para que ruedes seguro por la ciudad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}
            >
              Agendar Cita <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('tienda')?.scrollIntoView({behavior: 'smooth'})}
            >
              Ver Tienda <ShoppingBag className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-8 text-sm text-muted">
            <div className="flex flex-col">
              <span className="font-bold text-white text-2xl">10+</span>
              <span>Años de experiencia</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-2xl">5k+</span>
              <span>Clientes satisfechos</span>
            </div>
          </div>
        </div>

        {/* Visual Element (Right Side) - keeping it abstract/techy if no specific image asset */}
        <div className="hidden lg:flex justify-end relative">
          <div className="relative w-full max-w-lg aspect-square">
            {/* Decorative circles */}
            <div className="absolute inset-0 border border-green-accent/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-petrol-blue/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1609630856954-27ca22d65d63?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Motorcycle Detail" 
                className="w-3/4 h-3/4 object-cover rounded-full border-4 border-black-surface shadow-2xl shadow-green-accent/20 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-10 -left-10 bg-black-surface border border-white/10 p-4 rounded-lg shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="bg-green-accent/20 p-2 rounded-md text-green-accent">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <p className="font-bold text-white">Garantía Total</p>
                  <p className="text-xs text-muted">En cada servicio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;