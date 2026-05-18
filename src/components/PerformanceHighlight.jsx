import { useCallback, useState } from 'react';

const base = `${process.env.PUBLIC_URL}/images`;

const authorSlides = [
  {
    id: 'amir',
    image: 'Amir.png',
    name: 'Amir Abbasi',
    href: '/author-amir-abbasi/',
    bio: "Amir Abbasi is an experienced IT professional whose journey has grown far beyond technology. Since 2012, he has also served as a devoted caregiver for his parents, an experience that has given him unique insight into the everyday realities of aging. Through this personal role, Amir came to understand how the right products, resources, and support can make a profound difference in the lives of seniors and their families.",
  },
  {
    id: 'robin',
    image: 'Robin.png',
    name: 'Robin Dolan',
    href: '/author-robin-dolan/',
    bio: 'Robin Dolan, LVN (Licensed Vocational Nurse), has been serving in the nursing profession since 2024, dedicating her career to geriatric and rehabilitative care. She began her journey at Scripps Home in Altadena, California, a multilevel facility supporting low-income seniors. Over the years, she has gained extensive experience working in skilled nursing, rehabilitation centers, and assisted living facilities, where she witnessed the unique challenges seniors and their families face in accessing quality healthcare.',
  },
  {
    id: 'editorial',
    image: 'Ali.png',
    name: 'Syed Ali',
    href: '/author-syed-ali/',
    bio: 'Syed brings a wealth of hands-on experience to the advisor site for mobility devices. As a dedicated caregiver for aging relatives facing Parkinson’s, stroke rehabilitation, diabetes, and other long-term conditions, Syed has personally navigated the wide spectrum of mobility and senior products. His practical expertise covers everything from canes and walkers to emergency assistive devices, grab bars, and specialized bathroom safety equipment, always with the goal of enhancing comfort and safety.',
  },
];

const slideCount = authorSlides.length;

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
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + slideCount) % slideCount);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % slideCount);
  }, []);

  const translatePct = (activeIndex * 100) / slideCount;
  const activeSlide = authorSlides[activeIndex];

  return (
    <section className="w-full overflow-x-hidden px-4 py-16 md:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mx-auto w-full max-w-[850px] text-center">
          <h2
            className="mx-auto h-auto w-full text-center text-[36px] font-normal uppercase leading-[100%] tracking-[0%] text-black md:text-[48px] lg:h-[60px] lg:w-[840px] lg:text-[60px]"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Our Authors
          </h2>
          <p className="mt-5 font-manrope text-base font-medium leading-7 text-[#66737c] md:text-lg">
            Meet the experts behind every review and recommendation
          </p>
        </div>

        <div className="mt-20 min-w-0 max-w-full rounded-lg bg-[#ffc400] px-4 py-6 sm:px-8 md:px-10 lg:grid lg:grid-cols-[466px_minmax(0,_1fr)] lg:grid-rows-[1fr_auto] lg:gap-x-24 lg:gap-y-6 lg:px-8 lg:py-8">
          <div className="hidden lg:flex lg:row-span-2 lg:items-center lg:justify-center lg:self-stretch lg:py-4">
            <div className="w-full max-w-[466px] overflow-hidden rounded-md">
              <div className="h-[300px] w-full lg:h-[340px]">
                <img
                  className="h-full w-full object-cover object-center"
                  src={`${base}/${activeSlide.image}`}
                  alt={activeSlide.name}
                />
              </div>
            </div>
          </div>

          <div className="min-w-0 max-w-full lg:hidden">
            <div className="w-full max-w-[466px] shrink-0 overflow-hidden rounded-md">
              <div className="h-[260px] w-full md:h-[300px]">
                <img
                  className="h-full w-full object-cover object-center"
                  src={`${base}/${activeSlide.image}`}
                  alt={activeSlide.name}
                />
              </div>
            </div>

            <div className="mt-1 flex min-w-0 flex-col gap-5">
              <h3 className="font-manrope text-[28px] font-black leading-tight text-[#172129] md:text-[36px]">
                {activeSlide.name}
              </h3>
              <p className="font-manrope text-base font-medium leading-7 text-black md:text-lg">
                {activeSlide.bio}
              </p>
              <a
                className="inline-flex h-10 w-fit items-center justify-center gap-3 rounded-full bg-[#17262d] px-5 font-manrope text-base font-medium text-white no-underline transition-colors hover:bg-[#223841] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#172129]"
                href={activeSlide.href}
              >
                Learn More <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
          </div>

          <div className="hidden min-w-0 max-w-full overflow-hidden lg:col-start-2 lg:row-start-1 lg:block lg:min-h-[340px]">
            <div
              className="flex h-full w-[300%] transition-transform duration-500 ease-out lg:min-h-[340px]"
              style={{ transform: `translateX(-${translatePct}%)` }}
            >
              {authorSlides.map((slide) => (
                <div className="w-1/3 min-w-0 shrink-0 lg:h-full" key={slide.id}>
                  <div className="min-w-0 lg:h-full">
                    <div className="flex min-w-0 flex-col gap-5 lg:h-full lg:justify-evenly lg:gap-0">
                      <h3 className="font-manrope text-[28px] font-black leading-tight text-[#172129] md:text-[36px] lg:text-[40px]">
                        {slide.name}
                      </h3>
                      <p className="max-w-[650px] font-manrope text-base font-medium leading-7 text-black md:text-lg">
                        {slide.bio}
                      </p>
                      <a
                        className="inline-flex h-10 w-fit items-center justify-center gap-3 rounded-full bg-[#17262d] px-5 font-manrope text-base font-medium text-white no-underline transition-colors hover:bg-[#223841] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#172129]"
                        href={slide.href}
                      >
                        Learn More <span aria-hidden="true">-&gt;</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-6 sm:mt-8 sm:flex-row sm:items-center sm:justify-between lg:col-start-2 lg:row-start-2 lg:mt-0">
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Author slides"
            >
              {authorSlides.map((slide, dotIndex) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={dotIndex === activeIndex}
                  aria-label={`Show ${slide.name}`}
                  className={
                    dotIndex === activeIndex
                      ? 'h-2 w-12 rounded-full bg-[#172129] transition-[width] duration-300'
                      : 'h-2 w-2 rounded-full bg-white transition-transform duration-300 hover:scale-110'
                  }
                  onClick={() => setActiveIndex(dotIndex)}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#33341d] text-white transition-colors hover:bg-[#222314] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                type="button"
                aria-label="Previous author"
                onClick={goPrev}
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#33341d] text-white transition-colors hover:bg-[#222314] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                type="button"
                aria-label="Next author"
                onClick={goNext}
              >
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerformanceHighlight;
