function Newsletter() {
  return (
    <section className="relative flex min-h-[342px] w-full overflow-hidden bg-[#fee8b8] px-6 md:px-[86px]">
      <div className="pointer-events-none absolute left-0 top-0 h-[132px] w-full bg-[#f7f7f7]" />

      <div className="relative z-10 flex w-full items-end justify-center gap-[70px]">
        <div className="hidden w-[450px] shrink-0 justify-center md:flex">
          <img
            className="h-[460px] w-auto object-contain object-bottom"
            src={`${process.env.PUBLIC_URL}/images/newsletter-pic-1024x1024.webp`}
            alt="Senior man using a walker"
          />
        </div>

        <div className="flex max-w-[740px] flex-1 flex-col justify-center pb-[78px] pt-[170px]">
          <h2 className="text-[24px] font-black leading-tight text-black">
            Welcome to The Walker Advisor Newsletter!
          </h2>
          <p className="mt-6 max-w-[720px] text-base font-semibold leading-6 text-black">
            Stay informed with our monthly updates on the best mobility aids,
            safety tips, and exclusive deals designed to support senior
            independence.
          </p>

          <form className="mt-6 flex w-full gap-3" action="#">
            <label className="sr-only" htmlFor="newsletter-email">
              Email
            </label>
            <input
              className="h-12 flex-1 rounded-[10px] border-0 bg-white px-4 text-base font-medium text-[#1c2730] outline-none placeholder:text-[#1c2730] focus:ring-2 focus:ring-[#002f49]"
              id="newsletter-email"
              name="email"
              placeholder="Email"
              type="email"
            />
            <button
              className="h-12 min-w-[232px] rounded-full bg-[#002f49] px-8 text-base font-black text-white transition-colors duration-150 hover:bg-[#014363] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002f49]"
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
