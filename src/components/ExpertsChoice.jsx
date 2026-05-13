import ExpertChoiceBlogCard from './ExpertChoiceBlogCard';
import { getLatestBlogArticles } from '../data/blogArticles';

const latestArticles = getLatestBlogArticles(3);

function ExpertsChoice() {
  return (
    <section
      id="experts-choice"
      className="w-full bg-[#fbf6e6] px-4 py-16 md:px-8 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <h2
          className="h-[40px] w-[1280px] text-[40px] font-normal uppercase leading-[100%] tracking-[0%] text-[#172129]"
          style={{ fontFamily: 'Anton, sans-serif' }}
        >
          Experts Choice
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3 lg:mt-16">
          {latestArticles.map((article) => (
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
      </div>
    </section>
  );
}

export default ExpertsChoice;
