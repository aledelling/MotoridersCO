import React from 'react';
import { Wrench, Gauge, ShieldCheck, Zap, Droplet, Settings } from 'lucide-react';

const servicesList = [
  {
    icon: Wrench,
    title: 'Mecánica General',
    desc: 'Ajuste de motor, transmisión y reparación integral para todas las marcas.'
  },
  {
    icon: Gauge,
    title: 'Diagnóstico Avanzado',
    desc: 'Escaneo computarizado para identificar fallas electrónicas con precisión.'
  },
  {
    icon: ShieldCheck,
    title: 'Frenos y Seguridad',
    desc: 'Mantenimiento de sistemas ABS, cambio de pastillas y líquido de frenos.'
  },
  {
    icon: Zap,
    title: 'Sistema Eléctrico',
    desc: 'Revisión de baterías, luces, estatores y cableado completo.'
  },
  {
    icon: Droplet,
    title: 'Cambio de Aceite',
    desc: 'Lubricantes sintéticos de alto rendimiento y filtros originales.'
  },
  {
    icon: Settings,
    title: 'Suspensión',
    desc: 'Mantenimiento de barras, retenedores y ajuste de amortiguadores.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-accent font-bold tracking-widest uppercase text-sm">Nuestra Especialidad</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">Servicios Profesionales</h2>
          <div className="w-20 h-1 bg-green-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((item, idx) => (
            <div 
              key={idx} 
              className="group p-8 bg-black-base border border-white/5 rounded-xl hover:border-green-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-accent/10"
            >
              <div className="w-12 h-12 bg-petrol-blue/20 rounded-lg flex items-center justify-center mb-6 text-green-accent group-hover:bg-green-accent group-hover:text-black-base transition-colors">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;