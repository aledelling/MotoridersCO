import React from 'react';
import { Wrench, MonitorSmartphone, ShieldCheck, Disc, Droplets, Zap } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Mantenimiento General',
    description: 'Revisión completa de motor, frenos y transmisión para asegurar el rendimiento óptimo.',
    Icon: Wrench,
  },
  {
    id: '2',
    title: 'Diagnóstico Computarizado',
    description: 'Escaneo avanzado de fallas con equipos de última generación multimarca.',
    Icon: MonitorSmartphone,
  },
  {
    id: '3',
    title: 'Frenos y Seguridad',
    description: 'Cambio de pastillas, líquido y ajuste de sistemas ABS.',
    Icon: ShieldCheck,
  },
  {
    id: '4',
    title: 'Llantas y Suspensión',
    description: 'Montaje, balanceo y calibración de suspensión delantera y trasera.',
    Icon: Disc,
  },
  {
    id: '5',
    title: 'Cambio de Aceite',
    description: 'Aceites sintéticos y semi-sintéticos de alto rendimiento + filtros originales.',
    Icon: Droplets,
  },
  {
    id: '6',
    title: 'Sistema Eléctrico',
    description: 'Reparación de luces, baterías, estatores y sistemas de carga.',
    Icon: Zap,
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-black-base">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
          <div className="w-20 h-1 bg-green-accent mx-auto"></div>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Combinamos tecnología de punta con la experiencia de mecánicos apasionados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 bg-black-surface border border-white/5 rounded-xl hover:border-green-accent/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-petrol-blue/20 rounded-lg flex items-center justify-center mb-6 text-green-accent group-hover:bg-green-accent group-hover:text-black-base transition-colors">
                <service.Icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;