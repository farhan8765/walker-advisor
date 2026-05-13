import { useCallback, useState } from 'react';

const base = `${process.env.PUBLIC_URL}/images`;

const authorSlides = [
  {
    id: 'amir',
    image: 'Amir.png',
    name: 'Amir Murtaza',
    bio: "Amir Abbasi is an experienced IT professional whose journey has grown far beyond technology. Since 2012, he has also served as a devoted caregiver for his parents, an experience that has given him unique insight into the everyday realities of aging. Through this personal role, Amir came to understand how the right products, resources, and support can make a profound difference in the lives of seniors and their families.",
  },
  {
    id: 'robin',
    image: 'Robin.png',
    name: 'Robin',
    bio: 'Robin Dolan, LVN (Licensed Vocational Nurse), has been serving in the nursing profession since 2024, dedicating her career to geriatric and rehabilitative care. She began her journey at Scripps Home in Altadena, California, a multilevel facility supporting low-income seniors. Over the years, she has gained extensive experience working in skilled nursing, rehabilitation centers, and assisted living facilities, where she witnessed the unique challenges seniors and their families face in accessing quality healthcare.',
  },
  {
    id: 'editorial',
    image: 'Ali.png',
    name: 'Syed Ali',
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

  return (
    <section className="w-full  px-4 py-16 md:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <h2
          className="text-center font-heading text-[40px] font-normal uppercase leading-[100%] tracking-normal text-black md:text-[48px]"
          style={{ fontFamily: 'Anton, sans-serif' }}
        >
          Our Authors
        </h2>
        <p className="mt-4 text-center font-manrope text-base font-black leading-6 text-[#132027] md:mt-5 md:text-lg">
          Tools designed to boost your performance and comfort.
        </p>

        <div className="mt-20 rounded-lg bg-[#ffc400] px-8 py-8 md:px-10 lg:px-8">
          <div className="overflow-hidden">
            <div
              className="flex w-[300%] transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${translatePct}%)` }}
            >
              {authorSlides.map((slide) => (
                <div className="w-1/3 shrink-0" key={slide.id}>
                  <div className="grid items-center gap-10 pr-0 lg:grid-cols-[466px_minmax(0,_1fr)] lg:gap-24">
                    <div className="w-full max-w-[466px] shrink-0 overflow-hidden rounded-md lg:w-[466px]">
                      <div className="h-[260px] w-full md:h-[314px]">
                        <img
                          className="h-full w-full object-cover object-center"
                          src={`${base}/${slide.image}`}
                          alt={slide.name}
                        />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-manrope text-[40px] font-black leading-tight text-[#172129] md:text-[48px]">
                        {slide.name}
                      </h3>
                      <p className="mt-5 max-w-[650px] font-manrope text-base font-medium leading-7 text-black md:text-lg">
                        {slide.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 lg:mt-10 lg:grid-cols-[466px_minmax(0,_1fr)] lg:gap-24">
            <div className="hidden lg:block" aria-hidden="true" />
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between lg:col-start-2">
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
    </div>
    </section>
  );
}

export default PerformanceHighlight;
