function NewWalkerCta() {
  return (
    <section className="w-full overflow-x-hidden px-4 py-16 md:px-8 lg:px-14 lg:py-24">
      <div className="relative mx-auto w-full min-w-0 max-w-[1280px] overflow-visible py-10 md:py-14 lg:py-12">
        <div className="relative z-0 rounded-lg bg-[#132027] px-7 py-12 md:px-14 md:py-14 lg:px-28 lg:py-16">
          <div className="max-w-[654.75px]">
            <h2
              className="h-auto w-full text-[32px] font-normal leading-[100%] tracking-[0.5%] text-[#ffc400] md:text-[40px] lg:h-[48px] lg:w-[654.75px] lg:text-[48px]"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              Looking For New Walker?
            </h2>
            <p className="mt-5 font-manrope text-base font-medium leading-7 text-[#ffc400] md:text-lg">
              Find everyting your need to start.
            </p>
            <a
              className="mt-5 inline-flex h-10 items-center justify-center gap-3 rounded-full bg-[#ffc400] px-5 font-manrope text-base font-medium text-black no-underline transition-colors hover:bg-[#f0b800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400]"
              href="/best-tools/"
            >
              Learn More <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>

        <img
          className="pointer-events-none absolute right-0 top-[140px] z-10 h-[200px] w-auto max-w-[50%] -translate-y-1/2 object-contain object-bottom sm:right-2 sm:h-[240px] sm:max-w-[52%] md:right-6 md:h-[420px] md:max-w-[55%] lg:right-8 lg:h-[480px] lg:max-w-[58%]"
          src={`${process.env.PUBLIC_URL}/images/unsplash_KsFxqyZCJDA.png`}
          alt="Caregiver helping a person use a walker"
        />
      </div>
    </section>
  );
}

export default NewWalkerCta;
