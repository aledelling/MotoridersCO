import React from 'react';
import Button from './ui/Button';
import Input from './ui/Input';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensaje enviado (simulado). Gracias por contactarnos.');
  };

  return (
    <section id="contact" className="py-24 bg-black-surface border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-green-accent font-bold uppercase text-sm">Contáctanos</span>
          <h2 className="text-4xl font-black text-white mt-2">Agenda tu Cita</h2>
          <p className="text-muted mt-4">Déjanos tus datos y te contactaremos para confirmar tu visita.</p>
        </div>

        <div className="bg-black-base p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Nombre Completo" required className="bg-black-surface" />
              <Input type="email" placeholder="Correo Electrónico" required className="bg-black-surface" />
            </div>
            <Input type="tel" placeholder="Teléfono / WhatsApp" className="bg-black-surface" />
            <textarea 
              className="w-full bg-black-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-accent focus:ring-1 focus:ring-green-accent min-h-[120px]"
              placeholder="¿En qué podemos ayudarte? (Mantenimiento, Repuestos, etc.)"
              required
            ></textarea>
            
            <Button variant="primary" size="lg" fullWidth type="submit">
              Enviar Mensaje
            </Button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-muted text-sm">
            <p>O visítanos en:</p>
            <p className="text-white font-bold mt-2">Av. Caracas # 63-58, Bogotá, Colombia</p>
            <p className="mt-1">Lunes a Sábado: 8:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;