export default function Card({ children, className = '', hover = false, ...props }) {
  const hoverClass = hover
    ? 'transition-all duration-base hover:-translate-y-0.5 hover:shadow-lg'
    : '';
  return (
    <div
      className={`rounded-xl bg-white border border-neutral-200 shadow-sm p-6 ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
