import React from 'react';
import { Bike, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black-base border-t border-white/5 pt-16 pb-8 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Bike className="w-6 h-6 text-green-accent" />
              <span className="font-display font-black text-xl text-white">
                Moto<span className="text-green-accent">Riders</span> Co
              </span>
            </div>
            <p className="text-gray-400">
              Especialistas en el cuidado y personalización de motocicletas de alto cilindraje. Pasión en dos ruedas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-green-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-green-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-green-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-accent transition-colors">Mantenimiento General</a></li>
              <li><a href="#" className="hover:text-green-accent transition-colors">Diagnóstico</a></li>
              <li><a href="#" className="hover:text-green-accent transition-colors">Pintura y Personalización</a></li>
              <li><a href="#" className="hover:text-green-accent transition-colors">Peritaje</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-accent transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-green-accent transition-colors">Trabaja con nosotros</a></li>
              <li><a href="#" className="hover:text-green-accent transition-colors">Blog Motero</a></li>
              <li><a href="#" className="hover:text-green-accent transition-colors">Club de Beneficios</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-accent transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-green-accent transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-green-accent transition-colors">Garantías</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} MotoRiders Co. Todos los derechos reservados. Bogotá, Colombia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;