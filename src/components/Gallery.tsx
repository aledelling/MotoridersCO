import React from 'react';

const Gallery: React.FC = () => {
  const items = [
    { title: 'Restauración BMW', cat: 'Proyecto', color: 'from-blue-900 to-black' },
    { title: 'Ducati Panigale', cat: 'Mantenimiento', color: 'from-red-900 to-black' },
    { title: 'Yamaha MT-09', cat: 'Tuning', color: 'from-purple-900 to-black' },
    { title: 'Kawasaki Z1000', cat: 'Pintura', color: 'from-green-900 to-black' },
    { title: 'Harley Davidson', cat: 'Custom', color: 'from-orange-900 to-black' },
    { title: 'KTM Duke', cat: 'Suspensión', color: 'from-yellow-900 to-black' },
  ];

  return (
    <section id="gallery" className="py-24 bg-black-base overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Galería de Trabajos</h2>
            <p className="text-muted mt-2">Resultados que hablan por sí mismos.</p>
          </div>
          <button className="text-green-accent font-bold hover:text-white transition-colors mt-4 md:mt-0">
            Ver todo en Instagram →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-white/10">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
              
              {/* Fake Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <span className="text-9xl font-black text-white mix-blend-overlay select-none">{idx + 1}</span>
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-green-accent text-xs font-bold uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{item.cat}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-green-accent transition-colors">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;