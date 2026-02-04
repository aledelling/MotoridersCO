import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Benefits: React.FC = () => {
  const list = [
    "Garantía de 6 meses en mano de obra.",
    "Técnicos certificados por marcas líderes.",
    "Sala de espera VIP con WiFi y Café.",
    "Repuestos 100% originales garantizados.",
    "Seguimiento de tu moto en tiempo real.",
    "Servicio de recogida y entrega a domicilio."
  ];

  return (
    <section id="benefits" className="py-24 bg-petrol-blue/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            ¿POR QUÉ ELEGIR <br />
            <span className="text-green-accent">MOTORIDERS CO?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            No somos solo un taller, somos un centro de experiencia para motociclistas. Tu máquina merece el mejor trato, y tú la mejor atención.
          </p>
          
          <ul className="space-y-4">
            {list.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="text-green-accent w-6 h-6 shrink-0 mt-0.5" />
                <span className="text-white font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-green-accent/20 blur-3xl rounded-full"></div>
          <div className="relative bg-black-base border border-white/10 p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-5xl font-black text-white block">98%</span>
                <span className="text-muted text-sm uppercase tracking-wider">Satisfacción</span>
              </div>
              <div className="h-12 w-px bg-white/10"></div>
              <div>
                <span className="text-5xl font-black text-white block">24h</span>
                <span className="text-muted text-sm uppercase tracking-wider">Respuesta</span>
              </div>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div className="bg-green-accent h-full w-[98%]"></div>
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">Basado en más de 500 reseñas verificadas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;