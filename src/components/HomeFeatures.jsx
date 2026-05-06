const sideLinks = [
  'Best Rollator Walkers for Seniors',
  'How to Choose a Walker for Stability',
  'Walker Safety Tips for Daily Use',
  'Mobility Aids That Support Independence',
  'Caregiver Tips for Fall Prevention',
];

const featureCards = [
  {
    id: 1,
    title: 'Best Mobility Devices for Seniors',
    description:
      'Discover practical mobility aids that make daily life safer, easier, and more independent for seniors.',
  },
  {
    id: 2,
    title: 'How to Choose Walking Shoes for Balance',
    description:
      'Learn the key shoe features that support better grip, posture, and confidence while walking.',
  },
  {
    id: 3,
    title: 'Understanding Upright Walkers',
    description:
      'Find out how upright walkers can improve posture, comfort, and everyday mobility.',
  },
];

function ImagePlaceholder({ className = '' }) {
  return (
    <div
      className={`flex items-center justify-center bg-[#d8d8d8] ${className}`}
      aria-hidden="true"
    >
      <svg
        className="h-16 w-16 text-[#b9b9b9] md:h-20 md:w-20"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="12" y="18" width="72" height="60" rx="8" fill="currentColor" />
        <path
          d="M26 66l17-22 13 16 8-10 16 16H26z"
          fill="#ededed"
        />
        <circle cx="62" cy="35" r="6" fill="#ededed" />
      </svg>
    </div>
  );
}

function HomeFeatures() {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="text-[38px] font-black uppercase leading-[0.95] text-black md:text-[56px] lg:text-[64px]">
            Stay on top of your mobility progress
          </h2>
          <p className="mt-6 text-base font-medium leading-7 text-[#66737c] md:text-[20px]">
            Track your growth with smart insights from every walk.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-8 lg:mt-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h3 className="text-[32px] font-black uppercase leading-none text-[#172129] md:text-[40px]">
              Top Categories
            </h3>

            <div className="flex flex-wrap items-center gap-4 md:gap-10">
              {['All', "Caregiver's Corner", 'Informational', 'Comparison'].map(
                (category) => (
                  <button
                    className={`h-12 rounded-full px-6 font-manrope text-base font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400] md:text-lg ${
                      category === 'All'
                        ? 'border border-[#172129] bg-white text-[#172129]'
                        : 'border border-transparent bg-white text-black hover:text-[#a87900]'
                    }`}
                    key={category}
                    type="button"
                  >
                    {category}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[292px_minmax(0,_1fr)]">
            <aside className="rounded-lg bg-[#132027] px-5 py-6 text-[#fff3b9] lg:min-h-[735px]">
              <p className="font-manrope text-lg font-medium leading-7">
                Best of the
              </p>
              <p className="mt-1 text-[56px] font-black leading-none md:text-[64px]">
                Best
              </p>
              <p className="mt-4 max-w-[220px] font-manrope text-base font-semibold leading-6">
                Editors' picks and our top buying guides
              </p>

              <div className="mt-12 flex flex-col">
                {sideLinks.map((link) => (
                  <a
                    className="border-b border-dashed border-[#fff3b9]/70 py-5 font-manrope text-base font-medium leading-6 text-[#fff3b9] no-underline transition-colors hover:text-white"
                    href="#featured-articles"
                    key={link}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </aside>

            <div id="featured-articles" className="min-w-0">
              <article className="grid overflow-hidden rounded-lg bg-[#fff1b3] lg:grid-cols-2">
                <ImagePlaceholder className="min-h-[260px] lg:min-h-[342px]" />
                <div className="px-7 py-8 md:px-12 md:py-10 lg:px-14">
                  <h3 className="max-w-[430px] text-[36px] font-black leading-[1.08] text-[#172129] md:text-[48px] lg:text-[52px]">
                    Blog title heading will go here
                  </h3>
                  <p className="mt-5 max-w-[440px] font-manrope text-base font-medium leading-7 text-[#66737c] md:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <a
                    className="mt-9 inline-flex items-center gap-3 font-manrope text-base font-semibold text-[#3f351d] no-underline transition-colors hover:text-black md:text-lg"
                    href="#featured-articles"
                  >
                    Learn More <span aria-hidden="true">-&gt;</span>
                  </a>
                </div>
              </article>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {featureCards.map((card) => (
                  <article className="font-manrope" key={card.id}>
                    <ImagePlaceholder className="min-h-[210px] rounded-lg md:min-h-[218px]" />
                    <h3 className="mt-7 text-[24px] font-black leading-tight text-[#172129] md:text-[28px]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-base font-medium leading-7 text-[#66737c]">
                      {card.description}
                    </p>
                    <a
                      className="mt-8 inline-flex items-center gap-3 text-base font-semibold text-[#3f351d] no-underline transition-colors hover:text-black md:text-lg"
                      href="#featured-articles"
                    >
                      Learn More <span aria-hidden="true">-&gt;</span>
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFeatures;
