import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import { supabase } from '../lib/supabase';

/**
 * CAPA: Presentation / Components
 * USO: Modal para Iniciar Sesión o Registrarse usando Supabase Auth.
 */

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  // Estado del formulario
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);

    try {
      if (mode === 'login') {
        // MENTOR NOTE: Login real contra Supabase
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        
        // Si es exitoso, el AuthContext detectará el cambio automáticamente
        onClose();
        
      } else {
        // MENTOR NOTE: Registro real
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            // Guardamos el nombre en los metadatos del usuario
            data: { full_name: formData.name },
          },
        });
        if (error) throw error;
        
        alert('Registro exitoso. Por favor verifica tu correo (si Supabase lo requiere) o inicia sesión.');
        onClose();
      }
    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message || 'Ocurrió un error inesperado');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop oscuro con blur */}
      <div className="absolute inset-0 bg-black-base/90 backdrop-blur-sm" onClick={onClose}></div>

      {/* Tarjeta del Modal */}
      <div className="relative w-full max-w-md bg-black-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Pestañas Login / Registro */}
        <div className="flex border-b border-white/10">
          <button
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wide transition-colors ${mode === 'login' ? 'bg-black-surface text-green-accent border-b-2 border-green-accent' : 'bg-black-base text-gray-400 hover:text-white'}`}
            onClick={() => { setMode('login'); setErrorMsg(null); }}
          >
            Iniciar Sesión
          </button>
          <button
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wide transition-colors ${mode === 'register' ? 'bg-black-surface text-green-accent border-b-2 border-green-accent' : 'bg-black-base text-gray-400 hover:text-white'}`}
            onClick={() => { setMode('register'); setErrorMsg(null); }}
          >
            Registrarse
          </button>
        </div>

        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white z-10">
          <X size={20} />
        </button>

        {/* Cuerpo del Formulario */}
        <div className="p-8">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold text-white">
                    {mode === 'login' ? 'Bienvenido de nuevo' : 'Únete a MotoRiders'}
                </h3>
                <p className="text-muted text-sm mt-2">
                    {mode === 'login' ? 'Accede a tu panel administrativo.' : 'Crea una cuenta para gestionar tus compras.'}
                </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded text-red-400 text-sm text-center">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'register' && (
                    <div className="relative group">
                        <User className="absolute left-3 top-3 text-gray-500 group-focus-within:text-green-accent" size={20} />
                        <input
                            type="text"
                            placeholder="Nombre completo"
                            className="w-full bg-black-base border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-green-accent transition-colors"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                        />
                    </div>
                )}
                
                <div className="relative group">
                    <Mail className="absolute left-3 top-3 text-gray-500 group-focus-within:text-green-accent" size={20} />
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="w-full bg-black-base border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-green-accent transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                    />
                </div>

                <div className="relative group">
                    <Lock className="absolute left-3 top-3 text-gray-500 group-focus-within:text-green-accent" size={20} />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="w-full bg-black-base border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-green-accent transition-colors"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        required
                        minLength={6}
                    />
                </div>

                <div className="pt-2">
                    <Button variant="primary" fullWidth isLoading={isLoading} type="submit">
                        {mode === 'login' ? 'Ingresar' : 'Crear Cuenta'} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </form>

            <div className="mt-6 text-center">
                <p className="text-xs text-muted">
                    Al continuar, aceptas nuestros <a href="#" className="underline hover:text-green-accent">Términos</a> y <a href="#" className="underline hover:text-green-accent">Política de Privacidad</a>.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;