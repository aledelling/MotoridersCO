import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Benefits: React.FC = () => {
  const features = [
    "Garantía de 3 meses en mano de obra",
    "Uso exclusivo de repuestos originales",
    "Técnicos certificados por principales marcas",
    "Atención prioritaria y sala de espera VIP",
  ];

  return (
    <section className="py-20 bg-petrol-blue relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-20 opacity-10">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-18,87.9,-3.8C85.7,10.4,78.6,23.3,69.5,34.4C60.4,45.5,49.3,54.8,37.3,62.1C25.3,69.4,12.4,74.7,-0.7,75.9C-13.8,77.1,-27.9,74.2,-39.8,66.8C-51.7,59.4,-61.4,47.5,-69.4,34.2C-77.4,20.9,-83.7,6.2,-81.4,-7.3C-79.1,-20.8,-68.2,-33.1,-56.3,-41.8C-44.4,-50.5,-31.5,-55.6,-18.9,-63.3C-6.3,-71,6,-81.3,19.3,-82.4C32.6,-83.5,46.9,-75.4,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            ¿Por qué elegir <br/>MotoRiders Co?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            No somos solo un taller, somos el pit stop oficial de tu pasión. Entendemos lo que tu moto significa para ti.
          </p>
          <ul className="space-y-4">
            {features.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-white">
                <CheckCircle2 className="text-green-accent w-6 h-6 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 bg-black-base/30 backdrop-blur-md p-8 rounded-2xl border border-white/10">
          <div className="text-center">
            <span className="block text-5xl font-black text-green-accent mb-2">98%</span>
            <span className="text-white font-medium uppercase tracking-wider text-sm">Índice de Satisfacción</span>
            <div className="w-full bg-white/10 h-1 mt-6 rounded-full overflow-hidden">
              <div className="bg-green-accent w-[98%] h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;