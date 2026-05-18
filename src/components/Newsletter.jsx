function Newsletter() {
  return (
    <section className="w-full overflow-x-hidden pt-0">
      <div className="relative w-full pt-20 md:pt-[84px]">
        <div className="w-full bg-[#fbf6e6]">
          <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8 lg:px-14">
            <div className="relative min-h-[500px] px-2 py-12 sm:px-6 md:py-12 md:pl-[min(360px,52vw)] md:pr-10 lg:min-h-[420px] lg:py-[60px] lg:pl-[min(480px,42vw)] lg:pr-10 xl:pl-[520px] xl:pr-14">
              <img
                className="pointer-events-none absolute bottom-0 left-4 hidden h-[500px] w-auto object-contain md:block lg:left-10"
                src={`${process.env.PUBLIC_URL}/images/newsletter-pic-1024x1024.webp`}
                alt="Senior man walking with a wheeled walker"
              />

              <div className="relative z-10 w-full max-w-none lg:ml-0">
                <h2 className="w-full break-words font-heading text-[32px] font-normal uppercase leading-[100%] tracking-normal text-black sm:text-[40px] md:text-[48px] lg:text-[60px]">
                  Welcome to The Walker Advisor Newsletter!
                </h2>
                <p className="mt-4 w-full font-['Manrope',sans-serif] text-[18px] font-medium leading-7 tracking-[0.5%] text-[#5A666E] md:mt-6">
                  Stay informed with our monthly updates on the best mobility aids,
                  safety tips, and exclusive deals designed to support senior
                  independence.
                </p>

                <form
                  className="mt-8 flex w-full max-w-[520px] items-center rounded-full border-2 border-[#303830] bg-transparent p-1 sm:mt-12"
                  action="#"
                >
                  <label className="sr-only" htmlFor="newsletter-email">
                    Email
                  </label>
                  <input
                    className="min-w-0 flex-1 bg-transparent px-3 font-manrope text-sm font-medium text-[#172129] outline-none placeholder:text-[#66737c] sm:px-4 sm:text-base"
                    id="newsletter-email"
                    name="email"
                    placeholder="Enter Your Email"
                    type="email"
                  />
                  <button
                    className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#303830] px-4 font-manrope text-sm font-medium text-white transition-colors hover:bg-[#202820] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#303830] sm:gap-3 sm:px-6 sm:text-base"
                    type="submit"
                  >
                    Subscribe Now <span aria-hidden="true">-&gt;</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
