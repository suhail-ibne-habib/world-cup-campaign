export default function TeamFlag({ flag, name, className = "text-2xl" }) {
  const isImageUrl = flag?.startsWith("http") || flag?.startsWith("/");

  if (isImageUrl) {
    return (
      <img
        src={flag}
        alt={`${name} flag`}
        className={`w-8 h-6 object-cover rounded-sm ${className}`}
      />
    );
  }

  return (
    <span className={className} role="img" aria-label={`${name} flag`}>
      {flag}
    </span>
  );
}
