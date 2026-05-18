function ExpertChoiceBlogCard({ image, alt, title, description, href }) {
  const imageSrc = `${process.env.PUBLIC_URL}/images/${image}`;

  return (
    <a
      className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#d8dde2] bg-white font-manrope no-underline transition-shadow hover:shadow-[0_18px_40px_rgba(23,33,41,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400]"
      href={href}
    >
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

        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-base font-semibold text-[#3f351d]">
          Learn More <span aria-hidden="true">&#8594;</span>
        </span>
      </div>
    </a>
  );
}

export default ExpertChoiceBlogCard;
