const expertsChoiceArticles = [
  {
    id: 1,
    title: 'Blog title heading will go here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim',
  },
  {
    id: 2,
    title: 'Blog title heading will go here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim',
  },
  {
    id: 3,
    title: 'Blog title heading will go here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim',
  },
];

function ExpertImagePlaceholder() {
  return (
    <div
      className="flex min-h-[260px] items-center justify-center rounded-lg bg-[#d8d8d8] md:min-h-[310px] lg:min-h-[340px]"
      aria-hidden="true"
    >
      <svg
        className="h-16 w-16 text-[#b9b9b9] md:h-20 md:w-20"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="12" y="18" width="72" height="60" rx="8" fill="currentColor" />
        <path d="M26 66l17-22 13 16 8-10 16 16H26z" fill="#ededed" />
        <circle cx="62" cy="35" r="6" fill="#ededed" />
      </svg>
    </div>
  );
}

function ExpertsChoice() {
  return (
    <section
      id="experts-choice"
      className="w-full bg-[#fbf6e6] px-4 py-16 md:px-8 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <h2
          className="h-[40px] w-[1280px] text-[40px] font-normal uppercase leading-[100%] tracking-[0%] text-[#172129]"
          style={{ fontFamily: 'Anton, sans-serif' }}
        >
          Experts Choice
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3 lg:mt-16">
          {expertsChoiceArticles.map((article) => (
            <article className="font-manrope" key={article.id}>
              <ExpertImagePlaceholder />

              <h3
                className="mt-8 h-[32px] w-[420px] text-[24px] font-bold leading-[32px] tracking-[0.5%] text-[#172129]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {article.title}
              </h3>
              <p className="mt-4 text-base font-medium leading-7 text-[#66737c] md:text-lg">
                {article.description}
              </p>

              <a
                className="mt-10 inline-flex items-center gap-3 text-base font-semibold text-[#3f351d] no-underline transition-colors hover:text-black md:text-lg"
                href="#experts-choice"
              >
                Learn More <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertsChoice;
