// src/components/ui/Input.tsx
import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

/**
 * Componente Input base para formularios.
 * Soporta "forwardRef" para integrarse bien con librerías de formularios si se desea.
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="text-sm font-bold text-gray-400 block">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={twMerge(
            "w-full bg-black-base border border-white/10 rounded-lg px-4 py-3 text-white",
            "focus:outline-none focus:border-green-accent focus:ring-1 focus:ring-green-accent",
            "placeholder:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed",
            "transition-all duration-200",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-500 font-medium">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;