export function Mark({ size = 40, title }) {
  return (
    <svg
      className="mark"
      width={size}
      height={size}
      viewBox="0 0 80 80"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <rect width="80" height="80" rx="22" fill="#006AFF" />
      <circle cx="40" cy="46" r="15.5" fill="none" stroke="#fff" strokeWidth="5" />
      <path d="M40 16.5 46.4 25 40 30.4 33.6 25Z" fill="#fff" />
    </svg>
  );
}

export function Lockup({ onClick, image = false }) {
  return (
    <a className="lockup" href="#top" onClick={onClick}>
      {image ? (
        <img
          className="wordmark"
          src={`${import.meta.env.BASE_URL}brand/ringle-wordmark.png`}
          alt="RINGLE"
          width="1024"
          height="214"
        />
      ) : (
        <span className="wordmark">RINGLE</span>
      )}
    </a>
  );
}

export function Diamond({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" aria-hidden="true">
      <path d="M6 0.6 11 6 6 11.4 1 6Z" fill="#FF5C8A" />
    </svg>
  );
}
