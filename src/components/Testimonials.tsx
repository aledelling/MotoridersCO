import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: 'Carlos Rodríguez', role: 'Dueño de Yamaha MT09', city: 'Bogotá' },
    { name: 'Andrea Torres', role: 'Viajera Kawasaki Versys', city: 'Medellín' },
    { name: 'Julián Méndez', role: 'Club Pulsar', city: 'Cali' },
  ];

  return (
    <section id="testimonials" className="py-24 bg-black-base">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-black text-center text-white mb-16">Lo Que Dicen Nuestros Clientes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div key={idx} className="bg-black-surface p-8 rounded-xl border border-white/5 relative">
              <div className="text-green-accent text-2xl mb-4">★★★★★</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "El servicio fue impecable. Solucionaron un ruido en el motor que nadie más había podido encontrar. Totalmente recomendados."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-bold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{r.name}</h4>
                  <p className="text-muted text-xs">{r.role} • {r.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;