function NewWalkerCta() {
  return (
    <section className="w-full overflow-hidden  px-4 py-16 md:px-8 lg:px-14 lg:py-24">
      <div className="relative mx-auto max-w-[1280px] pt-44 md:pt-56 lg:pt-44">
        <div className="rounded-lg bg-[#132027] px-7 py-10 md:px-14 lg:px-28 lg:py-9">
          <div className="max-w-[654.75px]">
            <h2
              className="h-[48px] w-[654.75px] text-[48px] font-normal leading-[100%] tracking-[0.5%] text-[#ffc400]"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              Looking For New Walker?
            </h2>
            <p className="mt-5 font-manrope text-base font-medium leading-7 text-[#ffc400] md:text-lg">
              Find everyting your need to start.
            </p>
            <a
              className="mt-5 inline-flex h-10 items-center justify-center gap-3 rounded-full bg-[#ffc400] px-5 font-manrope text-base font-medium text-black no-underline transition-colors hover:bg-[#f0b800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400]"
              href="/tools"
            >
              Learn More <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>

        <img
          className="absolute right-2 top-[-20px] h-[300px] w-auto max-w-none object-contain md:right-8 md:h-[420px] lg:right-8 lg:h-[530px]"
          src={`${process.env.PUBLIC_URL}/images/unsplash_KsFxqyZCJDA.png`}
          alt="Caregiver helping a person use a walker"
        />
      </div>
    </section>
  );
}

export default NewWalkerCta;
