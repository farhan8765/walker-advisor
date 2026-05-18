import { useMemo, useState } from 'react';
import { articles, sortArticlesForDisplay } from '../data/blogArticles';
import ExpertChoiceBlogCard from './ExpertChoiceBlogCard';

const categories = ['All', 'Informational', 'Comparison', "Caregiver's Corner"];
const articlesPerPage = 6;

function BlogArticles() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(articlesPerPage);
  const filteredArticles = useMemo(() => {
    const list =
      activeCategory === 'All'
        ? articles
        : articles.filter((article) => article.category === activeCategory);
    return sortArticlesForDisplay(list);
  }, [activeCategory]);
  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMoreArticles = visibleCount < filteredArticles.length;

  return (
    <section
      id="articles"
      className="w-full overflow-x-hidden bg-white px-4 pb-16 pt-8 md:px-8 md:pb-20 md:pt-16 lg:px-0 lg:pb-24 lg:pt-20"
    >
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="mx-auto w-full max-w-[840px] text-center">
          <h1
            className="break-words text-center text-[42px] font-normal uppercase leading-[0.98] tracking-[0] text-[#172129] sm:text-[52px] md:text-[60px]"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Guide to helpful resources
          </h1>
          <p className="mx-auto mt-4 max-w-[34ch] font-manrope text-base font-medium leading-7 text-[#66737c] md:mt-6 md:max-w-none md:text-lg">
            Discover valuable insights with The Walker Advisor&apos;s expert guides and
            genuine reviews, designed to support you in finding the perfect mobility aid
            for your lifestyle.
          </p>
        </div>

        <div
          className="mx-auto mt-8 flex w-full max-w-[380px] flex-wrap items-center justify-center gap-1 rounded-[28px] border border-[#d8dde2] bg-white p-1 shadow-[0_10px_26px_rgba(255,255,255,0.12)] sm:mt-12 sm:w-fit sm:max-w-full sm:rounded-full md:mt-16"
          aria-label="Article categories"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                type="button"
                className={`rounded-full px-4 py-3 text-sm font-medium leading-none transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400] sm:px-5 sm:text-base ${
                  isActive
                    ? 'bg-[#182126] text-white'
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

        <div className="mt-10 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {visibleArticles.map((article) => (
            <ExpertChoiceBlogCard
              key={article.id}
              image={article.image}
              alt={article.alt}
              title={article.title}
              description={article.description}
              href={article.href}
            />
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
