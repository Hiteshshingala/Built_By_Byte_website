const variantStyles = {
  primary: 'bg-primary-100 text-primary-800',
  neutral: 'bg-neutral-100 text-neutral-700',
  accent: 'bg-accent-light text-accent-dark',
};

export default function Badge({ children, variant = 'primary', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
