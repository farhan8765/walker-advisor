import { useMemo, useState } from 'react';
import { articles, sortArticlesForDisplay } from '../data/blogArticles';

const sideLinks = [
  {
    label: 'Best Rollator Walkers for Seniors',
    href: '/types-of-medical-walkers-and-rollators-a-comprehensive-guide/',
  },
  {
    label: 'How to Choose a Walker for Stability',
    href: '/an-easy-guide-on-how-to-fit-a-walker-for-seniors/',
  },
  {
    label: 'Walker Safety Tips for Daily Use',
    href: '/important-safety-features-walkers-for-seniors/',
  },
  {
    label: 'Mobility Aids That Support Independence',
    href: '/best-mobility-devices-for-seniors/',
  },
  {
    label: 'Caregiver Tips for Fall Prevention',
    href: '/holiday-safety-tips-for-seniors/',
  },
];

const categoryFilters = ['All', "Caregiver's Corner", 'Informational', 'Comparison'];

function HomeFeatures() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = useMemo(() => {
    const list =
      activeCategory === 'All'
        ? articles
        : articles.filter((article) => article.category === activeCategory);
    return sortArticlesForDisplay(list);
  }, [activeCategory]);

  const featuredArticle = filteredArticles[0];
  const supportingArticles = filteredArticles.slice(1, 4);

  return (
    <section className="w-full overflow-x-hidden bg-white px-4 py-16 md:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mx-auto w-full max-w-[840px] text-center">
          <h2
            className="mx-auto h-auto w-full text-center text-[36px] font-normal uppercase leading-[100%] tracking-[0%] text-black md:text-[48px] lg:h-[80px] lg:w-[840px] lg:text-[60px]"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
          Top Pick Seniors 
          Actually Love
          </h2>
          <p
            className="mx-auto mt-2 flex w-full items-center justify-center text-center text-[15px] font-normal leading-[28px] tracking-[0.5%] text-[#5A666E] lg:h-[28px] lg:w-[840px] lg:text-[18px]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
          Handpicked by our experts based on real user feedback and rigorous testing
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-8 lg:mt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-nowrap sm:items-center sm:gap-6 lg:gap-8">
            <h3
              className="w-fit shrink-0 whitespace-nowrap text-[28px] font-normal uppercase leading-[100%] tracking-[0%] text-[#172129] md:text-[32px] lg:text-[40px]"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              Top Categories
            </h3>

            <div className="flex min-w-0 flex-1 flex-nowrap items-center justify-end gap-2 overflow-x-auto md:gap-3 lg:gap-4">
              {categoryFilters.map((category) => (
                <button
                  className={`h-12 whitespace-nowrap rounded-full px-4 font-manrope text-base font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400] md:text-[17px] ${
                    category === activeCategory
                      ? 'border border-[#172129] bg-white text-[#172129]'
                      : 'border border-transparent bg-white text-black hover:text-[#a87900]'
                  }`}
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid min-w-0 gap-6 lg:grid-cols-[292px_minmax(0,_1fr)]">
            <aside className="rounded-lg bg-[#132027] px-5 py-6 text-[#fff3b9] lg:min-h-[735px]">
              <p className="font-manrope text-lg font-medium leading-7">
                Best of the
              </p>
              <p className="mt-1 text-[56px] font-black leading-none md:text-[64px]">
                Best
              </p>
              <p className="mt-4 max-w-[220px] font-manrope text-base font-semibold leading-6">
                Editors' picks and our top buying guides
              </p>

              <div className="mt-12 flex flex-col">
                {sideLinks.map((link) => (
                  <a
                    className="border-b border-dashed border-[#fff3b9]/70 py-5 font-manrope text-base font-medium leading-6 text-[#fff3b9] no-underline transition-colors hover:text-white"
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </aside>

            <div id="featured-articles" className="min-w-0">
              {featuredArticle ? (
                <>
                  <article className="grid overflow-hidden rounded-lg bg-[#fff1b3] lg:grid-cols-2 lg:items-stretch">
                    <div className="relative min-h-[260px] w-full overflow-hidden lg:min-h-0 lg:h-full">
                      <img
                        className="h-full min-h-[260px] w-full object-cover lg:absolute lg:inset-0 lg:min-h-0 lg:h-full"
                        src={`${process.env.PUBLIC_URL}/images/${featuredArticle.image}`}
                        alt={featuredArticle.alt}
                      />
                    </div>
                    <div className="px-7 py-8 md:px-12 md:py-10 lg:px-14">
                      <h3
                        className="line-clamp-2 w-full max-w-[400px] overflow-hidden text-[30px] font-bold leading-[1.15] tracking-[0.5%] text-[#172129] md:text-[36px]"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {featuredArticle.title}
                      </h3>
                      <p className="mt-4 max-w-[440px] font-manrope text-sm font-medium leading-6 text-[#66737c] md:text-base md:leading-7">
                        {featuredArticle.description}
                      </p>
                      <a
                        className="mt-7 inline-flex items-center gap-3 font-manrope text-sm font-semibold text-[#3f351d] no-underline transition-colors hover:text-black md:mt-8 md:text-base"
                        href={featuredArticle.href}
                      >
                        Learn More <span aria-hidden="true">-&gt;</span>
                      </a>
                    </div>
                  </article>

                  <div className="mt-6 grid gap-6 md:grid-cols-3">
                    {supportingArticles.map((card) => (
                      <article className="font-manrope" key={card.id}>
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                          <img
                            className="absolute inset-0 h-full w-full object-cover"
                            src={`${process.env.PUBLIC_URL}/images/${card.image}`}
                            alt={card.alt}
                          />
                        </div>
                        <h3
                          className="line-clamp-2 mt-6 w-full max-w-[329.33px] overflow-hidden text-[18px] font-bold leading-snug tracking-[0.5%] text-[#172129] md:mt-7 md:text-[20px] md:leading-7"
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                          {card.title}
                        </h3>
                        <p className="line-clamp-2 mt-3 overflow-hidden text-sm font-medium leading-6 text-[#66737c] md:mt-4">
                          {card.description}
                        </p>
                        <a
                          className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#3f351d] no-underline transition-colors hover:text-black md:mt-8 md:text-base"
                          href={card.href}
                        >
                          Learn More <span aria-hidden="true">-&gt;</span>
                        </a>
                      </article>
                    ))}
                  </div>
                </>
              ) : (
                <article className="rounded-lg bg-[#fff1b3] px-7 py-12 md:px-12">
                  <p className="font-manrope text-lg font-medium text-[#66737c]">
                    No articles in this category yet. Try &quot;All&quot; or check
                    back soon.
                  </p>
                  <a
                    className="mt-6 inline-flex items-center gap-3 font-manrope text-base font-semibold text-[#3f351d] no-underline hover:text-black"
                    href="/articles/"
                  >
                    View all articles <span aria-hidden="true">-&gt;</span>
                  </a>
                </article>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFeatures;
