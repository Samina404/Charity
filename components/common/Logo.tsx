// Server Component — static brand logo as inline SVG
export default function Logo() {
  return (
    <div className="logo">
      {/* Heart + rays SVG mark */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="18" cy="18" r="18" fill="#D4A853" />
        <path
          d="M18 26s-8-5.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 5.5-8 11-8 11z"
          fill="white"
        />
      </svg>
      <span className="logo__text">
        Hope<span className="logo__accent">Foundation</span>
      </span>
    </div>
  );
}
