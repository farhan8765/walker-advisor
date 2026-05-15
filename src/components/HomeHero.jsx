function HomeHero() {
  return (
    <section className="w-full overflow-x-hidden bg-[#FFFAE7] px-4 pb-4 pt-8 md:px-6 md:pb-6 md:pt-10 lg:px-10 lg:pb-0 lg:pt-10">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-4 lg:gap-8">

          {/* Left — text content */}
          <div className="flex w-full min-w-0 flex-1 flex-col pb-8 lg:pb-16">
            {/* Star badge */}
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full bg-[#ffc400] px-3 py-2 sm:px-4">
              <span className="text-xs leading-none sm:text-sm">⭐⭐⭐⭐⭐</span>
              <span className="font-manrope text-xs font-semibold leading-snug text-black sm:text-sm">
                5-Star Reviews and Resources
              </span>
            </div>

            {/* Heading */}
            <h1
              className="mt-6 break-words text-[32px] font-normal leading-[1.05] text-[#172129] sm:text-[40px] md:text-[64px] lg:text-[80px]"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              WELCOME TO THE WALKER ADVISOR
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-[420px] font-manrope text-base font-medium leading-7 text-[#66737c] md:text-lg">
              The Walker Advisor is your trusted resource for finding the best
              walkers and mobility aids for seniors
            </p>
          </div>

          {/* Right — hero image (already has floating tags baked in) */}
          <div className="flex w-full min-w-0 flex-1 justify-center">
            <img
              className="h-auto w-full max-w-[min(100%,420px)]"
              src={`${process.env.PUBLIC_URL}/images/walker-advisor-hero.png`}
              alt="Senior woman using a walker — The Walker Advisor"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeHero;
