import React from 'react';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import Button from './ui/Button';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-black-surface border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Block */}
          <div>
            <span className="text-green-accent font-bold tracking-widest uppercase text-sm">Visítanos</span>
            <h2 className="font-display text-4xl font-bold text-white mt-2 mb-8">Horario y Ubicación</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-petrol-blue/30 p-3 rounded-lg text-green-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Dirección Principal</h3>
                  <p className="text-muted">Av. Caracas # 63-58, Bogotá, Colombia</p>
                  <p className="text-muted text-sm mt-1">Barrio Chapinero</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-petrol-blue/30 p-3 rounded-lg text-green-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Horario de Atención</h3>
                  <p className="text-muted">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted">Sábados: 8:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-petrol-blue/30 p-3 rounded-lg text-green-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Contacto</h3>
                  <p className="text-muted">+57 (601) 123 4567</p>
                  <p className="text-muted">contacto@motoridersco.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="https://wa.me/573001234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto"
              >
                <Button variant="primary" size="lg" className="w-full flex items-center justify-center gap-2">
                  <MessageCircle size={20} />
                  Chatea por WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-[400px] lg:h-auto bg-gray-800 rounded-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                {/* Simulated Map Visual */}
                <div className="text-center opacity-50">
                    <MapPin size={48} className="mx-auto mb-2 text-green-accent" />
                    <span className="text-white font-bold">Mapa Interactivo</span>
                    <p className="text-xs">Cargando Google Maps...</p>
                </div>
                {/* Background Grid for tech look */}
                <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.2}}></div>
            </div>
            {/* Interactive overlay mock */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 rounded-lg shadow-lg flex justify-between items-center backdrop-blur-sm">
                <div>
                    <h4 className="font-bold text-black-base">MotoRiders Co</h4>
                    <p className="text-xs text-gray-600">15 min desde tu ubicación</p>
                </div>
                <Button variant="secondary" size="sm" className="!py-1 !px-3 text-xs">Cómo llegar</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;