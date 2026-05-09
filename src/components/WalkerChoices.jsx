const choiceCards = [
  {
    title: 'Walker Research',
    description:
      "We dive deep into each walker's features, specifications, and expert insights to give you a complete picture of what to expect.",
    highlighted: true,
  },
  {
    title: 'Authentic Experiences',
    description:
      'We collect honest feedback from real users who rely on walkers daily, so you can understand how each model performs in real life.',
  },
  {
    title: 'Focused Comparisons',
    description:
      'We evaluate what truly matters - comfort, stability, durability, maneuverability, and ease of use - to help you choose the right walker for your needs.',
  },
  {
    title: 'Brand-Neutral Reviews',
    description:
      'Our reviews are based on facts and real feedback - no sponsorships, no bias - just clear advice to help you find the best walker.',
  },
];

function CardIcon({ highlighted = false }) {
  return (
    <span
      className={`inline-flex h-14 w-14 items-center justify-center rounded-md ${
        highlighted ? 'bg-white' : 'bg-[#ffe58a]'
      }`}
      aria-hidden="true"
    >
      <svg
        className="h-5 w-5 text-[#3f351d]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="4" width="14" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 16V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 16V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15 16V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function WalkerChoices() {
  return (
    <section className="w-full bg-[#fbf6e6] px-4 py-16 md:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[minmax(0,_590px)_minmax(0,_608px)] lg:gap-16">
        <div>
          <h2
            className="h-[120px] w-[592px] text-[60px] font-normal uppercase leading-[100%] tracking-[0%] text-black"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Struggling with walker choices?
          </h2>
          <p className="mt-10 max-w-[590px] font-manrope text-base font-medium leading-7 text-[#172129] md:text-lg">
            We will help a client's problems to develop the products they have
            with high quality Develop a website by finding a product identity
            that has value and branding to become a characteristic of a company.
            We will also facilitate the business marketing of these products
            with our SEO experts so that they become a ready-to-use website and
            help sell a product from the company
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-4 md:translate-y-[-16px]">
            {choiceCards.slice(0, 2).map((card) => (
              <article
                className={`rounded-[20px] p-6 shadow-[0_2px_0_rgba(0,0,0,0.08)] ${
                  card.highlighted
                    ? 'bg-[#f2c300] text-black'
                    : 'border border-black/10 bg-white text-[#172129]'
                }`}
                key={card.title}
              >
                <CardIcon highlighted={card.highlighted} />
                <h3
                  className="mt-6 h-[58px] w-[248px] text-[24px] font-bold leading-[120%] tracking-[0.5%]"
                  style={{ fontFamily: 'Mulish, sans-serif' }}
                >
                  {card.title}
                </h3>
                <p className="mt-5 font-manrope text-base font-medium leading-6">
                  {card.description}
                </p>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-4 md:translate-y-[56px]">
            {choiceCards.slice(2).map((card) => (
              <article
                className="rounded-[20px] border border-black/10 bg-white p-6 text-[#172129] shadow-[0_2px_0_rgba(0,0,0,0.08)]"
                key={card.title}
              >
                <CardIcon />
                <h3
                  className="mt-6 h-[58px] w-[248px] text-[24px] font-bold leading-[120%] tracking-[0.5%]"
                  style={{ fontFamily: 'Mulish, sans-serif' }}
                >
                  {card.title}
                </h3>
                <p className="mt-5 font-manrope text-base font-medium leading-6">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WalkerChoices;
