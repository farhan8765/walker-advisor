function ExpertChoiceBlogCard({ image, alt, title, description, href }) {
  const imageSrc = `${process.env.PUBLIC_URL}/images/${image}`;

  return (
    <article className="font-manrope">
      <img
        className="block min-h-[260px] w-full rounded-lg object-cover md:min-h-[310px] lg:min-h-[340px]"
        src={imageSrc}
        alt={alt}
      />

      <h3
        className="line-clamp-2 mt-8 min-h-0 w-full max-w-[420px] overflow-hidden text-[24px] font-bold leading-[32px] tracking-[0.5%] text-[#172129]"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        {title}
      </h3>
      <p className="line-clamp-2 mt-4 overflow-hidden text-base font-medium leading-7 text-[#66737c] md:text-lg">
        {description}
      </p>

      <a
        className="mt-10 inline-flex items-center gap-3 text-base font-semibold text-[#3f351d] no-underline transition-colors hover:text-black md:text-lg"
        href={href}
      >
        Learn More <span aria-hidden="true">-&gt;</span>
      </a>
    </article>
  );
}

export default ExpertChoiceBlogCard;
