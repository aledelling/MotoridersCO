import React, { useState, useEffect } from 'react';
import { Menu, X, Bike, UserCircle } from 'lucide-react';
import Button from './ui/Button';
import AuthModal from './AuthModal';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' }, 
    { name: 'Tienda', href: '#tienda' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
          isScrolled ? 'bg-black-base/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Bike className="w-8 h-8 text-green-accent transition-transform group-hover:-rotate-12" />
            <span className="font-display font-black text-2xl tracking-tighter text-white">
              Moto<span className="text-green-accent">Riders</span> Co
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-green-accent transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => openAuth('login')}
              className="text-sm font-bold text-white hover:text-green-accent flex items-center gap-2 px-4 py-2"
            >
              <UserCircle size={20} />
              Entrar
            </button>
            <Button variant="primary" size="sm" onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}>
              Agendar Cita
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black-surface border-b border-white/10 p-6 flex flex-col gap-4 lg:hidden shadow-2xl">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-white hover:text-green-accent font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-white/10 my-2"></div>
            <button 
              onClick={() => openAuth('login')}
              className="text-white hover:text-green-accent font-bold py-2 flex items-center gap-2"
            >
              <UserCircle size={20} /> Iniciar Sesión / Registrarse
            </button>
            <Button variant="primary" fullWidth onClick={() => setIsMobileMenuOpen(false)}>Agendar Cita</Button>
          </div>
        )}
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialMode={authMode}
      />
    </>
  );
};

export default Header;