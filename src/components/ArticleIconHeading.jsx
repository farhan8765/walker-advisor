export default function ArticleIconHeading({ children, type }) {
  const file = type === 'references' ? 'references.svg' : 'finalthoughts.svg';

  return (
    <div className="blog-detail-icon-heading flex items-center gap-4">
      <img
        className="h-10 w-10 shrink-0 object-contain"
        src={`${process.env.PUBLIC_URL}/images/${file}`}
        alt=""
        aria-hidden
      />
      <h2 className="text-[18px] font-black leading-tight text-black">{children}</h2>
    </div>
  );
}
