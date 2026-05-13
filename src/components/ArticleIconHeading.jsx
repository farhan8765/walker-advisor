function FinalThoughtsIcon() {
  return (
    <svg
      className="h-10 w-10 flex-shrink-0 text-[#ffc400]"
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M32 62 5 22 16 4h32l11 18-27 40ZM12.7 24 32 52.6 51.3 24H12.7Zm8.1-14-4.9 8h9.8l3.2-8h-8.1Zm14.3 0-3.2 8h16.2l-4.9-8h-8.1Zm-3.1 18-8.7 18.4L32 59l8.7-13.6L32 28Zm-13.6 0 8.2 12.2L32 28H18.4Zm13.6 0 5.4 12.2L45.6 28H32Z"
      />
    </svg>
  );
}

function ReferencesIcon() {
  return (
    <svg
      className="h-10 w-10 flex-shrink-0 text-[#ffc400]"
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="32" cy="32" r="29" fill="none" stroke="currentColor" strokeWidth="4" />
      <path
        fill="currentColor"
        d="M19 8c4 1 7 3 10 5 3 3 2 6-1 7-3 2-7 1-9 4-2 2 1 5 3 7 3 3 6 5 6 9 0 5-5 8-10 9A27 27 0 0 1 19 8Zm25 7c6 3 11 10 12 18-4-2-8-1-11 1-4 2-8 2-10-1-3-4 2-7 5-9 4-2 2-6 4-9ZM34 45c3-2 7-2 10 0 3 1 5 4 6 7a27 27 0 0 1-25 5c2-5 5-9 9-12Z"
      />
    </svg>
  );
}

export default function ArticleIconHeading({ children, type }) {
  const Icon = type === 'references' ? ReferencesIcon : FinalThoughtsIcon;

  return (
    <div className="flex items-center gap-4">
      <Icon />
      <h2 className="text-[18px] font-black leading-tight text-black">{children}</h2>
    </div>
  );
}
