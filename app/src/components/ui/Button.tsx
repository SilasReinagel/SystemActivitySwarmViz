import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  // Base classes that apply to all buttons
  const baseClasses = 'inline-flex items-center justify-center border border-transparent font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';

  // Size-specific classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Variant-specific classes with improved contrast
  const variantClasses = {
    primary: 'text-white bg-indigo-600 hover:bg-indigo-700 shadow-md font-bold',
    secondary: 'text-indigo-900 bg-white hover:bg-gray-50 shadow-sm border-gray-200 border',
    outline: 'text-indigo-700 bg-transparent border-indigo-600 hover:bg-indigo-50 border',
  };

  // Text shadow for primary buttons to improve readability
  const textShadowStyle = variant === 'primary' ? { textShadow: '0 1px 1px rgba(0,0,0,0.3)' } : {};

  // Combined classes
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  // Render as button or link
  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick as any}
        style={textShadowStyle}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      style={textShadowStyle}
    >
      {children}
    </button>
  );
} 