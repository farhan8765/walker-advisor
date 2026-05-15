function WalkerInsightsPromo() {
  return (
    <section className="w-full overflow-x-hidden px-4 py-16 md:px-8 lg:px-14">
      <div className="mx-auto grid w-full max-w-[1280px] min-w-0 overflow-hidden rounded-lg lg:grid-cols-2">
        <div className="flex min-h-[360px] flex-col justify-between bg-[#fff0ad] px-7 py-9 md:px-10 lg:min-h-[468px] lg:px-10">
          <h2
            className="h-auto w-full text-[36px] font-normal uppercase leading-[100%] tracking-[0%] text-black md:text-[48px] lg:h-[120px] lg:w-[560px] lg:text-[60px]"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Walker Reviews & Mobility Insights
          </h2>

          <div>
            <p className="max-w-[560px] font-manrope text-base font-medium leading-6 text-[#172129] md:text-lg md:leading-7">
              Discover top-rated walkers and mobility aids with our in-depth
              reviews and expert comparisons - helping you or your loved ones
              move safely, confidently, and comfortably.
            </p>
            <a
              className="mt-5 inline-flex h-10 items-center justify-center gap-3 rounded-full bg-[#303830] px-5 font-manrope text-base font-medium text-white no-underline transition-colors hover:bg-[#202820] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#303830]"
              href="/tools"
            >
              Find The Best Walker <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>

        <img
          className="h-[320px] w-full object-cover md:h-[420px] lg:h-[468px]"
          src={`${process.env.PUBLIC_URL}/images/walker-insights-panel.png`}
          alt="Two older adults standing outdoors with rollator walkers"
        />
      </div>
    </section>
  );
}

export default WalkerInsightsPromo;
