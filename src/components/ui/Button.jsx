import { forwardRef } from 'react';

const variantStyles = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md active:scale-[0.98]',
  secondary:
    'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border border-neutral-200',
  outline:
    'border-2 border-primary text-primary hover:bg-primary-50',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Component = 'button',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold transition-all duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none min-h-[44px] min-w-[44px]';
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return <Component className={classes} {...props}>{children}</Component>;
}
