import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialItem } from '../types';

const reviews: TestimonialItem[] = [
  {
    id: '1',
    name: 'Carlos Rodríguez',
    role: 'Dueño de Yamaha MT-09',
    rating: 5,
    comment: '¡Excelente servicio! Rápido y confiable. Mi moto quedó como nueva después del mantenimiento general. Se nota que saben lo que hacen.',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
  {
    id: '2',
    name: 'Ana María Gómez',
    role: 'Club Pulsar Bogotá',
    rating: 5,
    comment: 'Me encantó la atención. Me explicaron cada detalle de lo que necesitaba mi moto y no me cobraron repuestos innecesarios. Super recomendados.',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    id: '3',
    name: 'Felipe Torres',
    role: 'Viajero BMW GS',
    rating: 4,
    comment: 'Buenos precios en accesorios y llantas. El taller AI es una locura, pude ver cómo quedaba mi moto antes de pintarla. Innovación total.',
    avatarUrl: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-black-base">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-display text-3xl font-bold text-white mb-16">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-black-surface p-8 rounded-xl border-l-4 border-green-accent shadow-lg">
              <div className="flex gap-1 mb-4 text-green-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-700"} />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{review.comment}"</p>
              <div className="flex items-center gap-4">
                <img src={review.avatarUrl} alt={review.name} className="w-10 h-10 rounded-full bg-gray-700" />
                <div>
                  <h4 className="font-bold text-white text-sm">{review.name}</h4>
                  <span className="text-xs text-muted">{review.role}</span>
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