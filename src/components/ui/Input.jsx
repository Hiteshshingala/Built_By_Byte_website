export default function Input({
  label,
  name,
  type = 'text',
  required = false,
  error,
  className = '',
  ...props
}) {
  const id = `input-${name}`;
  const errorClass = error ? 'border-error focus-visible:ring-error' : '';

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700 mb-1">
          {label}
          {required && <span className="text-error ml-0.5">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow ${errorClass}`}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
