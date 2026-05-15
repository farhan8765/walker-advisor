import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

const toolTabs = ['All', 'Winlove', 'Helavo', 'Elenker', 'Carex', 'Nova'];

/** Sab cards yahan — `brand` se tab filter hota hai. `image` null = placeholder block. */
const toolCards = [
  {
    id: 1,
    brand: 'Winlove',
    title: 'Winlove',
    description:
      'Walker or Transport Chair? The Winlove 2-in-1 Does Both',
    image: 'winlove1.webp',
  },
  {
    id: 2,
    brand: 'Winlove',
    title: 'Winlove',
    description:
      'Is the Winlove Rollator Walker the Game-Changer Seniors Need?',
    image: 'winlove2.webp',
  },
  {
    id: 3,
    brand: 'Winlove',
    title: 'Winlove',
    description:
      'Why the Winlove Heavy Duty Rollator Could Be the Safest Choice for Seniors',
    image: 'winlove3.webp',
  },
  {
    id: 4,
    brand: 'Helavo',
    title: 'Helavo',
    description:
      'Is This the World’s Lightest Walker? Helavo Carbon Fiber Review',
    image: 'Helova1.webp',
  },
  {
    id: 5,
    brand: 'Helavo',
    title: 'Helavo',
    description:
      'The Helavo All-Terrain Walker That Lets Seniors Go Anywhere',
    image: 'Helova2.webp',
  },
  {
    id: 6,
    brand: 'Helavo',
    title: 'Helavo',
    description:
      'One Walker, Two Uses, Why Seniors Love the Helavo 2-in-1',
    image: 'Helova3.webp',
  },
  {
    id: 7,
    brand: 'Elenker',
    title: 'Elenker',
    description:
      'Comprehensive Product Review Of ELENKER All Terrain Rollator Walker',
    image: 'Elenker1.webp',
  },
  {
    id: 8,
    brand: 'Elenker',
    title: 'Elenker',
    description:
      'In-Depth Review of the ELENKER Heavy Duty Upright Walker',
    image: 'Elenker2.webp',
  },
  {
    id: 9,
    brand: 'Elenker',
    title: 'Elenker',
    description:
      'Detailed Product Review Of ELENKER Upright Rollator Walker',
    image: 'Elenker3.webp',
  },
  {
    id: 10,
    brand: 'Elenker',
    title: 'Elenker',
    description:
      'Comprehensive Product Review Of ELENKER Knee Scooter with Basket',
    image: 'Elenker4.webp',
  },
  {
    id: 11,
    brand: 'Elenker',
    title: 'Elenker',
    description:
      'Complete Review of ELENKER All-Terrain Rollator Transport Chair',
    image: 'Elenker5.webp',
  },
  {
    id: 12,
    brand: 'Elenker',
    title: 'Elenker',
    description:
      'Detailed Review of ELENKER Steerable Knee Walker Scooter',
    image: 'Elenker6.webp',
  },
  {
    id: 13,
    brand: 'Carex',
    title: 'Carex',
    description:
      'Complete Product Review Of Carex Crosstour Rolling Walker Rollator',
    image: 'Carex1.webp',
  },
  {
    id: 14,
    brand: 'Carex',
    title: 'Carex',
    description:
      'In-Depth Review of Carex Step ‘N Rest Aluminum Rolling Walker',
    image: 'Carex2.webp',
  },
  {
    id: 15,
    brand: 'Carex',
    title: 'Carex',
    description:
      'Detailed Review of Carex Steel Rollator Walker Seat',
    image: 'Carex3.webp',
  },
  {
    id: 16,
    brand: 'Nova',
    title: 'Nova',
    description:
      'Comprehensive Review of NOVA Zoom Rollator Walker',
    image: 'Nova1.webp',
  },
  {
    id: 17,
    brand: 'Nova',
    title: 'Nova',
    description:
      'Detailed Review of NOVA Star 8 Rollator Walker',
    image: 'Nova2.webp',
  },
];

const CAROUSEL_GAP_PX = 24; // gap-6

/** In tabs: 3-up desktop carousel + mobile horizontal strip (same as All). */
const CAROUSEL_TAB_IDS = new Set(['All', 'Elenker']);

function ToolShowCard({ card, className = '', style }) {
  return (
    <article
      className={`min-w-0 rounded-lg bg-[#ffc400] px-5 pb-7 pt-8 md:px-8 md:pb-9 md:pt-9 lg:px-9 lg:pb-10 ${className}`}
      style={style}
    >
      <h3 className="break-words text-[28px] font-black leading-tight text-[#4b2500] md:text-[42px] lg:text-[48px]">
        {card.title}
      </h3>
      <p className="mt-6 break-words font-manrope text-base font-medium leading-snug text-[#4b2500] md:mt-8 md:text-[24px] md:leading-[1.25] lg:text-[28px]">
        {card.description}
      </p>

      <a
        className="mt-10 inline-flex h-11 items-center justify-center gap-3 rounded-full bg-[#33341d] px-5 font-manrope text-base font-medium text-white no-underline transition-colors hover:bg-[#222314] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:text-lg"
        href="/tools"
      >
        Learn More <span aria-hidden="true">-&gt;</span>
      </a>

      {card.image ? (
        <img
          className="mt-8 min-h-[280px] w-full rounded-lg object-cover md:min-h-[330px] lg:min-h-[390px]"
          src={`${process.env.PUBLIC_URL}/images/${card.image}`}
          alt={`${card.brand} product`}
        />
      ) : (
        <div
          className="mt-8 min-h-[280px] rounded-lg bg-[#d8d8d8] md:min-h-[330px] lg:min-h-[390px]"
          aria-hidden="true"
        />
      )}
    </article>
  );
}

function ToolShowcase() {
  const [activeTab, setActiveTab] = useState('All');
  const [carouselSlideIndex, setCarouselSlideIndex] = useState(0);
  const carouselViewportRef = useRef(null);
  const [carouselStepPx, setCarouselStepPx] = useState(0);
  const [carouselCardWidthPx, setCarouselCardWidthPx] = useState(0);

  const useCarouselLayout = CAROUSEL_TAB_IDS.has(activeTab);

  const carouselItems = useMemo(() => {
    if (activeTab === 'All') {
      return toolCards;
    }
    if (activeTab === 'Elenker') {
      return toolCards.filter((card) => card.brand === 'Elenker');
    }
    return [];
  }, [activeTab]);

  const carouselItemCount = carouselItems.length;

  const carouselMaxSlide = useMemo(
    () => Math.max(0, carouselItemCount - 3),
    [carouselItemCount],
  );

  const gridCards =
    activeTab === 'All' || activeTab === 'Elenker'
      ? []
      : toolCards.filter((card) => card.brand === activeTab);

  useLayoutEffect(() => {
    const el = carouselViewportRef.current;
    if (!el) {
      return undefined;
    }
    const measure = () => {
      const w = el.getBoundingClientRect().width;
      if (w <= 0) {
        return;
      }
      const cardW = (w - 2 * CAROUSEL_GAP_PX) / 3;
      setCarouselCardWidthPx(cardW);
      setCarouselStepPx(cardW + CAROUSEL_GAP_PX);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [activeTab]);

  useEffect(() => {
    setCarouselSlideIndex(0);
  }, [activeTab]);

  useEffect(() => {
    if (!useCarouselLayout || carouselMaxSlide === 0) {
      return undefined;
    }
    const id = setInterval(() => {
      setCarouselSlideIndex((i) => (i >= carouselMaxSlide ? 0 : i + 1));
    }, 4500);
    return () => clearInterval(id);
  }, [useCarouselLayout, carouselMaxSlide]);

  return (
    <section className="w-full overflow-x-hidden bg-[#fbf6e6] px-4 py-16 md:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto w-full min-w-0 max-w-[1280px]">
        <div className="mx-auto w-full max-w-[840px] text-center">
          <h2
            className="mx-auto h-auto w-full text-center text-[36px] font-normal uppercase leading-[100%] tracking-[0%] text-black md:text-[48px] lg:h-[60px] lg:w-[840px] lg:text-[60px]"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Test it, choose it
          </h2>
          <p className="mt-6 text-base font-medium leading-7 text-[#66737c] md:text-[20px]">
            Tools designed to boost your performance and comfort.
          </p>
        </div>

        <div className="mx-auto mt-12 flex min-w-0 max-w-full flex-wrap items-center justify-center gap-2 pb-2 md:mt-16 md:max-w-[800px] md:flex-nowrap md:justify-evenly md:gap-6 md:overflow-x-auto">
          {toolTabs.map((tab) => (
            <button
              className={`h-12 rounded-full px-6 font-manrope text-base font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400] md:text-lg ${
                activeTab === tab
                  ? 'border border-[#172129] bg-transparent text-[#172129]'
                  : 'border border-transparent bg-transparent text-black hover:text-[#a87900]'
              }`}
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {useCarouselLayout ? (
          <>
            <div className="mt-24 min-w-0 max-w-full md:hidden">
              <div className="-mx-4 overflow-x-auto px-4 pb-4 [scrollbar-width:thin]">
                <div className="flex w-max gap-4">
                  {carouselItems.map((card) => (
                    <ToolShowCard
                      key={card.id}
                      card={card}
                      className="w-[260px] shrink-0 sm:w-[280px]"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div
              ref={carouselViewportRef}
              className="mt-24 hidden w-full max-w-[1280px] overflow-hidden md:block"
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  gap: `${CAROUSEL_GAP_PX}px`,
                  transform:
                    carouselStepPx > 0
                      ? `translateX(-${carouselSlideIndex * carouselStepPx}px)`
                      : undefined,
                }}
              >
                {carouselItems.map((card) => (
                  <ToolShowCard
                    key={card.id}
                    card={card}
                    className="shrink-0"
                    style={
                      carouselCardWidthPx > 0
                        ? { flex: `0 0 ${carouselCardWidthPx}px`, width: carouselCardWidthPx }
                        : { flex: '0 0 calc((100% - 3rem) / 3)' }
                    }
                  />
                ))}
              </div>
              <p className="sr-only" aria-live="polite">
                Showing cards {carouselSlideIndex + 1} to{' '}
                {Math.min(carouselSlideIndex + 3, carouselItemCount)} of {carouselItemCount}
              </p>
            </div>
          </>
        ) : (
          <div className="mt-24 grid gap-6 md:grid-cols-3">
            {gridCards.map((card) => (
              <ToolShowCard key={card.id} card={card} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ToolShowcase;
