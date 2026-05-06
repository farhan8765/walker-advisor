function ArrowIcon({ direction = 'right' }) {
  return (
    <svg
      className={`h-5 w-5 ${direction === 'left' ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PerformanceHighlight() {
  return (
    <section className="w-full  px-4 py-16 md:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-center font-manrope text-base font-black leading-6 text-[#132027] md:text-lg">
          Tools designed to boost your performance and comfort.
        </p>

        <div className="mt-20 rounded-lg bg-[#ffc400] px-8 py-8 md:px-10 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[466px_minmax(0,_1fr)] lg:gap-24">
            <div
              className="min-h-[260px] rounded-md bg-[#dedee6] md:min-h-[314px]"
              aria-hidden="true"
            />

            <div className="min-w-0">
              <h2 className="font-manrope text-[40px] font-black leading-tight text-[#172129] md:text-[48px]">
                Amir Murtaza
              </h2>
              <p className="mt-5 max-w-[650px] font-manrope text-base font-medium leading-7 text-black md:text-lg">
                We will help a client's problems to develop the products they
                have with high quality Develop a website by finding a product
                identity that has value and branding to become a characteristic
                of a company. We will also facilitate the business marketing of
                these products with our SEO experts so that they become a
                ready-to-use website and help sell a product from the company
              </p>

              <div className="mt-20 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2" aria-label="Slide 1 of 4">
                  <span className="h-2 w-12 rounded-full bg-[#172129]" />
                  <span className="h-2 w-2 rounded-full bg-white" />
                  <span className="h-2 w-2 rounded-full bg-white" />
                  <span className="h-2 w-2 rounded-full bg-white" />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#33341d] text-white transition-colors hover:bg-[#222314] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    type="button"
                    aria-label="Previous testimonial"
                  >
                    <ArrowIcon direction="left" />
                  </button>
                  <button
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#33341d] text-white transition-colors hover:bg-[#222314] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    type="button"
                    aria-label="Next testimonial"
                  >
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerformanceHighlight;
