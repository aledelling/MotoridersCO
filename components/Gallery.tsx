import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types';

const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Ducati Panigale V4',
    category: 'Restauración',
    imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Restauración completa de carenado y pintura negro mate.'
  },
  {
    id: 'g2',
    title: 'BMW R1250 GS',
    category: 'Mantenimiento',
    imageUrl: 'https://images.unsplash.com/photo-1622185135505-2d795043dfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Preparación para viaje: llantas, suspensión y luces exploradoras.'
  },
  {
    id: 'g3',
    title: 'Yamaha MT-09',
    category: 'Personalización',
    imageUrl: 'https://images.unsplash.com/photo-1614164472147-3a13725514f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Sistema de escape completo Akrapovič y remapeo de ECU.'
  },
  {
    id: 'g4',
    title: 'Taller Premium',
    category: 'Instalaciones',
    imageUrl: 'https://images.unsplash.com/photo-1597771764658-0eb83e74542d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Tecnología de punta para el diagnóstico de tu máquina.'
  },
  {
    id: 'g5',
    title: 'Harley Davidson Sportster',
    category: 'Custom',
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Manillar custom, pintura tanque y revisión eléctrica.'
  },
  {
    id: 'g6',
    title: 'Kawasaki Z1000',
    category: 'Detailing',
    imageUrl: 'https://images.unsplash.com/photo-1574347715494-b77d61292025?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Tratamiento cerámico y protección de pintura.'
  }
];

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="py-24 bg-black-surface border-y border-white/5 relative">
       {/* Decorative blob */}
       <div className="absolute top-0 left-0 w-96 h-96 bg-petrol-blue/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-accent font-bold tracking-widest uppercase text-sm">Nuestro Trabajo</span>
          <h2 className="font-display text-4xl font-bold text-white mt-2">Galería de Proyectos</h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Una muestra de la dedicación y precisión que aplicamos a cada motocicleta que ingresa a MotoRiders Co.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="group relative h-80 overflow-hidden rounded-xl cursor-pointer bg-black-base border border-white/5"
              onClick={() => setSelectedItem(item)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black-base via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-green-accent text-xs font-bold uppercase tracking-wider">{item.category}</span>
                <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-300">
                    <ZoomIn size={16} />
                    <span>Ver detalles</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black-base/95 backdrop-blur-md animate-in fade-in duration-200">
          <button 
            className="absolute top-6 right-6 text-white hover:text-green-accent transition-colors"
            onClick={() => setSelectedItem(null)}
          >
            <X size={32} />
          </button>
          
          <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 bg-black-surface rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="h-64 lg:h-auto relative">
                <img 
                    src={selectedItem.imageUrl} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-green-accent font-bold uppercase tracking-widest text-sm mb-2">{selectedItem.category}</span>
                <h3 className="font-display text-3xl font-bold text-white mb-4">{selectedItem.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                    {selectedItem.description}
                </p>
                <div className="flex gap-4">
                    <button 
                        className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-sm font-bold border border-white/10 transition-all"
                        onClick={() => setSelectedItem(null)}
                    >
                        Cerrar
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;