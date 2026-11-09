import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer active:scale-[0.98] disabled:opacity-70 select-none';

  const variants = {
    primary:
      'bg-[#C6A15B] text-[#111111] hover:bg-[#B38E46] px-6 py-3.5 shadow-xs',
    outline:
      'bg-transparent text-[#111111] border border-[#111111]/15 hover:border-[#C6A15B] hover:bg-[#F2F2F0] px-5 py-2.5',
    secondary:
      'bg-white text-[#111111] border border-[#111111]/15 hover:bg-[#F2F2F0] px-6 py-3.5',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
