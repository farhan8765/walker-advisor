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
      <img
        className="h-8 w-8 object-contain"
        src={`${process.env.PUBLIC_URL}/images/Thumb.svg`}
        alt=""
      />
    </span>
  );
}

function WalkerChoices() {
  return (
    <section className="w-full overflow-x-hidden bg-[#fbf6e6] px-4 py-16 md:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1280px] min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,_590px)_minmax(0,_608px)] lg:gap-16">
        <div>
          <h2
            className="h-auto w-full text-[36px] font-normal uppercase leading-[100%] tracking-[0%] text-black md:text-[48px] lg:h-[120px] lg:w-[592px] lg:text-[60px]"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Everything You Need to Pick the Right Walker
          </h2>
          <p className="mt-10 max-w-[590px] font-manrope text-base font-medium leading-7 text-[#172129] md:text-lg">
          From in-depth research and focused comparisons to real user experiences and unbiased reviews,  we give you every tool to choose with total confidence
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
                  className="mt-6 h-auto w-full text-[20px] font-bold leading-[120%] tracking-[0.5%] lg:h-[58px] lg:w-[248px] lg:text-[24px]"
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
                  className="mt-6 h-auto w-full text-[20px] font-bold leading-[120%] tracking-[0.5%] lg:h-[58px] lg:w-[248px] lg:text-[24px]"
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
