import { useState } from 'react';

const categories = ['All', 'Informational', 'Comparison', "Caregiver's Corner"];
const articlesPerPage = 6;

const articles = [
  {
    id: 1,
    category: 'Informational',
    image: 'image-2-1.webp',
    href: '/can-heart-issues-increase-fall-risk-in-seniors',
    alt: 'Caregiver supporting an older man with chest discomfort',
    title: 'Can Heart Issues Increase Fall Risk in Seniors?',
    description:
      'You might think falls are just about balance, but what if your heart is the real culprit? Discover the hidden connection between heart issues and fall risk.',
  },
  {
    id: 2,
    category: 'Comparison',
    image: 'image-9-1.webp',
    href: '/understanding-upright-walkers-how-they-improve-senior-posture',
    alt: 'Senior woman walking outdoors with an upright walker',
    title: 'Understanding Upright Walkers: How They Improve Senior Posture',
    description:
      'Many seniors struggle with poor posture while walking. Learn how upright walkers promote better alignment, balance, and confidence.',
  },
  {
    id: 3,
    category: 'Comparison',
    image: 'image.webp',
    href: '/how-to-choose-walking-shoes-for-balance-and-stability',
    alt: 'Walking shoes for balance and stability',
    title: 'How to Choose Walking Shoes for Balance and Stability',
    description:
      'Most people wear the wrong walking shoes, and it quietly affects their balance every day. Discover the stability features experts say you should never skip.',
  },
  {
    id: 4,
    category: 'Informational',
    image: 'info-blog-twa-38.webp',
    href: '/why-seniors-need-proper-walking-shoes',
    alt: 'Illustration explaining why seniors need proper walking shoes',
    title: 'Why Seniors Need Proper Walking Shoes',
    description:
      'Are your shoes secretly putting your health at risk? Discover why seniors are falling, hurting their joints, and losing independence, and how the right walking shoes help.',
  },
  {
    id: 5,
    category: "Caregiver's Corner",
    image: 'info-twa-38.webp',
    href: '/mental-health-in-old-age-a-complete-guide-for-seniors-caregivers',
    alt: 'Caregiver smiling with an older adult using a walker',
    title: 'Mental Health in Old Age: A Complete Guide for Seniors & Caregivers',
    description:
      'Up to 14% of adults over 60 live with a mental health condition, and many cases go undiagnosed. This guide explains the causes, warning signs, and support options.',
  },
  {
    id: 6,
    category: "Caregiver's Corner",
    image: 'valentines.webp',
    href: '/valentines-day-ideas-what-seniors-can-give-each-other',
    alt: "Valentine's Day ideas for seniors",
    title: "Valentine's Day Ideas: What Seniors Can Give Each Other",
    description:
      "Discover sweet, low-effort Valentine's Day ideas for seniors that celebrate decades of love in meaningful ways.",
  },
  {
    id: 7,
    category: 'Informational',
    image: 'twa-36-1-3.webp',
    href: '/how-to-use-a-walker-with-wheels',
    alt: 'Person using a wheeled walker at home',
    title: 'How To Use A Walker With Wheels: A Complete Guide for Safe Mobility',
    description:
      'A walker with wheels can greatly improve balance, mobility, and independence, when used correctly. This guide explains the proper setup, walking technique, and safety tips.',
  },
  {
    id: 8,
    category: 'Comparison',
    image: 'blog35-1-1.webp',
    href: '/best-mobility-devices-for-seniors',
    alt: 'Mobility devices for seniors including wheelchair, scooter, cane, and walker',
    title: 'Best Mobility Devices for Seniors: A Complete Guide to Safe & Independent Living',
    description:
      "Discover the top mobility devices that can instantly make daily life safer and easier for seniors. Don't miss these game-changing solutions.",
  },
  {
    id: 9,
    category: 'Informational',
    image: 'twaa-1.webp',
    href: '/can-osteoarthritis-lead-to-more-falls-in-seniors',
    alt: 'Senior woman sitting beside a walker with knee pain',
    title: 'Can Osteoarthritis Lead to More Falls in Seniors?',
    description:
      'Osteoarthritis can quietly increase fall risk in seniors by affecting balance, strength, and mobility, often before warning signs appear.',
  },
  {
    id: 10,
    category: "Caregiver's Corner",
    image: 'extra-blog-1.png',
    href: '/holiday-safety-tips-for-seniors-prevent-falls-fires-seasonal-risks',
    alt: 'Holiday safety tips for seniors',
    title: 'Holiday Safety Tips for Seniors: Prevent Falls, Fires & Seasonal Risks',
    description:
      'The holidays can hide serious dangers for seniors, from slippery floors to fire hazards. Discover the must-know safety tips that families are using to protect their',
  },
  {
    id: 11,
    category: 'Informational',
    image: 'extra-blog-2.png',
    alt: 'Senior woman holding holiday walker decorations',
    title: 'Holiday Safety Tips for Seniors Using Walkers: Stay Confident & Independent This Season',
    description:
      'Holiday fun should not come with a fall. Discover simple walker hacks, gift tips, and safety strategies to keep seniors steady, confident, and enjoying every festive',
  },
  {
    id: 12,
    category: 'Informational',
    image: 'extra-blog-3.png',
    alt: 'Using a walker on stairs or steps',
    title: 'Senior Safety: How to Use a Walker on Stairs (And Why You Usually Shouldn’t)',
    description:
      'Most seniors use their walkers wrong on stairs, and it is dangerous. Learn the safest, expert-approved way to climb up and down stairs with a walker.',
  },
  {
    id: 13,
    category: 'Comparison',
    image: 'extra-blog-4.png',
    alt: 'Amazon packages stacked near a front door',
    title: 'Every Way to Return Amazon Orders for Free: Your Complete Guide to Hassle-Free Returns',
    description:
      'Wondering how to return Amazon orders for free? Learn the secret hacks that will save you time and money, no hassle, no cost!',
  },
  {
    id: 14,
    category: 'Comparison',
    image: 'extra-blog-5.png',
    alt: 'Hands holding Amazon delivery boxes',
    title: 'The Secret Amazon Shopping Hack to Get a Deal on Just About Anything',
    description:
      'Stop overpaying on Amazon! Use these hidden tricks, warehouse deals, and coupons to save up to 70% on almost anything you buy.',
  },
  {
    id: 15,
    category: 'Informational',
    image: 'extra-blog-6.png',
    alt: 'Person traveling with a walker',
    title: 'How to Travel with a Walker – Tips for Seniors',
    description:
      'Think travelling with a walker sounds stressful? Think again! With the right planning, packing tricks, and a few mobility-smart hacks, you can explore the world',
  },
  {
    id: 16,
    category: 'Informational',
    image: 'extra-blog-7.png',
    alt: 'Senior holding a cane',
    title: 'The Side Effects Of Using A Cane',
    description:
      'Think your cane is helping you walk better? Think again. Discover the hidden side effects most users overlook, and the safer alternatives experts actually',
  },
  {
    id: 17,
    category: 'Informational',
    image: 'extra-blog-8.png',
    alt: 'Group of people holding canes and walkers outdoors',
    title: 'Replacement Walker Hand Grips for All Kinds of Walkers',
    description:
      'Sore hands or slippery grips? Replacement walker hand grips add comfort, support, and style, making every walk easier and safer.',
  },
  {
    id: 18,
    category: 'Informational',
    image: 'extra-blog-9.png',
    alt: 'Seniors fitting upright walkers',
    title: 'Stop the Struggle: The Ultimate Easy Guide to Fitting a Walker for Seniors Safely',
    description:
      'Struggling to find the right walker fit? Discover this easy step-by-step guide for seniors on choosing, adjusting, and maintaining walkers for maximum comfort, safety, and',
  },
];

function BlogArticles() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(articlesPerPage);
  const filteredArticles =
    activeCategory === 'All'
      ? articles
      : articles.filter((article) => article.category === activeCategory);
  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMoreArticles = visibleCount < filteredArticles.length;

  return (
    <section
      id="articles"
      className="w-full px-4 pb-20 pt-36 md:px-8 md:pt-44 lg:px-0 lg:pb-24"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-[840px] text-center">
          <p className="text-base font-semibold leading-7 text-[#66737c] md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div
          className="mx-auto mt-16 flex w-fit max-w-full flex-wrap items-center justify-center gap-1 rounded-full border border-[#d8dde2] bg-white p-1 shadow-[0_10px_26px_rgba(255,255,255,0.12)]"
          aria-label="Article categories"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                type="button"
                className={`rounded-full px-4 py-3 text-sm font-medium leading-none transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400] sm:px-5 sm:text-base ${
                  isActive
                    ? 'bg-[#5f6870] text-white'
                    : 'text-[#6d7982] hover:bg-[#f3f5f6] hover:text-[#172129]'
                }`}
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(articlesPerPage);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article) => (
            <article
              className="flex h-full overflow-hidden rounded-[10px] border border-[#d8dde2] bg-white font-raleway shadow-[0_12px_28px_rgba(255,255,255,0.08)]"
              key={article.id}
            >
              <div className="flex h-full w-full flex-col">
                <img
                  className="h-[248px] w-full bg-[#d9d9d9] object-cover"
                  src={`${process.env.PUBLIC_URL}/images/${article.image}`}
                  alt={article.alt}
                />

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="text-[22px] font-black leading-tight text-[#172129]">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-medium leading-6 text-[#6d7982]">
                    {article.description}
                  </p>

                  <a
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-8 font-manrope text-base font-semibold text-[#6b5a2c] no-underline transition-colors duration-150 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffc400]"
                    href={article.href || `#article-${article.id}`}
                  >
                    <span>Learn More</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {hasMoreArticles && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-[#ffc400] px-8 py-4 font-manrope text-base font-bold text-black shadow-[0_14px_30px_rgba(255,196,0,0.24)] transition-colors duration-150 hover:bg-[#f0b800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400]"
              onClick={() =>
                setVisibleCount((count) => count + articlesPerPage)
              }
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogArticles;
