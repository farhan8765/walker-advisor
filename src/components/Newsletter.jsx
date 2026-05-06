function Newsletter() {
  return (
    <section className="relative flex w-full overflow-hidden bg-[#fee8b8] px-4 sm:px-6 md:min-h-[342px] md:px-[86px]">
      <div className="pointer-events-none absolute left-0 top-0 h-[132px] w-full bg-[#f7f7f7]" />

      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-10 py-14 md:flex-row md:items-end md:justify-center md:gap-[70px] md:py-0">
        <div className="hidden w-[450px] shrink-0 justify-center md:flex">
          <img
            className="h-[460px] w-auto object-contain object-bottom"
            src={`${process.env.PUBLIC_URL}/images/newsletter-pic-1024x1024.webp`}
            alt="Senior man using a walker"
          />
        </div>

        <div className="flex w-full max-w-[740px] flex-1 flex-col justify-center md:pb-[78px] md:pt-[170px]">
          <h2 className="text-xl font-black leading-tight text-black sm:text-2xl md:text-[24px]">
            Welcome to The Walker Advisor Newsletter!
          </h2>
          <p className="mt-4 max-w-[720px] text-sm font-semibold leading-6 text-black sm:text-base md:mt-6">
            Stay informed with our monthly updates on the best mobility aids,
            safety tips, and exclusive deals designed to support senior
            independence.
          </p>

          <form
            className="mt-5 flex w-full flex-col gap-3 sm:flex-row md:mt-6"
            action="#"
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email
            </label>
            <input
              className="h-12 min-h-12 w-full flex-1 rounded-[10px] border-0 bg-white px-4 text-base font-medium text-[#1c2730] outline-none placeholder:text-[#1c2730] focus:ring-2 focus:ring-[#002f49]"
              id="newsletter-email"
              name="email"
              placeholder="Email"
              type="email"
            />
            <button
              className="h-12 min-h-12 w-full shrink-0 rounded-full bg-[#002f49] px-8 text-base font-black text-white transition-colors duration-150 hover:bg-[#014363] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002f49] sm:min-w-[232px] sm:w-auto"
              type="submit"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
