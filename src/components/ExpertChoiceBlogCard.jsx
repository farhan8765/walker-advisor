function ExpertChoiceBlogCard({ image, alt, title, description, href }) {
  const imageSrc = `${process.env.PUBLIC_URL}/images/${image}`;

  return (
    <article className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#d8dde2] bg-white font-manrope">
      <img
        className="block h-[260px] w-full object-cover"
        src={imageSrc}
        alt={alt}
      />

      <div className="flex flex-1 flex-col p-6">
        <h3
          className="line-clamp-2 text-[20px] font-bold leading-[28px] tracking-[0.5%] text-[#172129]"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {title}
        </h3>
        <p className="mt-3 line-clamp-3 text-base font-medium leading-6 text-[#66737c]">
          {description}
        </p>

        <a
          className="mt-auto pt-6 inline-flex items-center gap-2 text-base font-semibold text-[#3f351d] no-underline transition-colors hover:text-black"
          href={href}
        >
          Learn More <span aria-hidden="true">&#8594;</span>
        </a>
      </div>
    </article>
  );
}

export default ExpertChoiceBlogCard;
