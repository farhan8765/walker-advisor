function Newsletter() {
  return (
    <section className="w-full overflow-hidden pt-0">
      <div className="relative w-full pt-20 md:pt-[84px]">
        <div className="relative min-h-[500px] bg-[#fbf6e6] px-6 py-12 md:px-10 lg:min-h-[420px] lg:px-[464px] lg:py-[60px]">
          <img
            className="pointer-events-none absolute bottom-0 left-4 hidden h-[500px] w-auto object-contain md:block lg:left-10"
            src={`${process.env.PUBLIC_URL}/images/newsletter-pic-1024x1024.webp`}
            alt="Senior man walking with a wheeled walker"
          />

          <div className="relative z-10 mx-auto max-w-[820px] lg:mx-0">
            <h2 className="text-[38px] font-black uppercase leading-[0.95] text-black md:text-[56px] lg:text-[58px]">
              Welcome to The Walker Advisor Newsletter!
            </h2>
            <p className="mt-6 max-w-[820px] font-manrope text-base font-medium leading-7 text-[#66737c] md:text-lg">
              Stay informed with our monthly updates on the best mobility aids,
              safety tips, and exclusive deals designed to support senior
              independence.
            </p>

            <form
              className="mt-12 flex w-full max-w-[565px] items-center rounded-full border-2 border-[#303830] bg-transparent p-1"
              action="#"
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email
              </label>
              <input
                className="min-w-0 flex-1 bg-transparent px-4 font-manrope text-base font-medium text-[#172129] outline-none placeholder:text-[#66737c]"
                id="newsletter-email"
                name="email"
                placeholder="Enter Your Email"
                type="email"
              />
              <button
                className="inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-[#303830] px-6 font-manrope text-base font-medium text-white transition-colors hover:bg-[#202820] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#303830]"
                type="submit"
              >
                Subscribe Now <span aria-hidden="true">-&gt;</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
