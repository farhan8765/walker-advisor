const articles = [
  {
    id: 1,
    image: 'info-blog-twa-38.webp',
    alt: 'Caregiver supporting an older man with chest discomfort',
    title: 'Can Heart Issues Increase Fall Risk in Seniors?',
    description:
      'You might think falls are just about balance, but what if your heart is the real culprit? Discover the hidden connection between heart issues and fall risk.',
  },
  {
    id: 2,
    image: 'image-9-1.webp',
    alt: 'Senior woman walking outdoors with an upright walker',
    title: 'Understanding Upright Walkers: How They Improve Senior Posture',
    description:
      'Many seniors struggle with poor posture while walking. Learn how upright walkers promote better alignment, balance, and confidence.',
  },
  {
    id: 3,
    image: 'image.webp',
    alt: 'Walking shoes for balance and stability',
    title: 'How to Choose Walking Shoes for Balance and Stability',
    description:
      'Most people wear the wrong walking shoes, and it quietly affects their balance every day. Discover the stability features experts say you should never skip.',
  },
  {
    id: 4,
    image: 'image-2-1.webp',
    alt: 'Illustration explaining why seniors need proper walking shoes',
    title: 'Why Seniors Need Proper Walking Shoes',
    description:
      'Are your shoes secretly putting your health at risk? Discover why seniors are falling, hurting their joints, and losing independence, and how the right walking shoes help.',
  },
  {
    id: 5,
    image: 'info-twa-38.webp',
    alt: 'Caregiver smiling with an older adult using a walker',
    title: 'Mental Health in Old Age: A Complete Guide for Seniors & Caregivers',
    description:
      'Up to 14% of adults over 60 live with a mental health condition, and many cases go undiagnosed. This guide explains the causes, warning signs, and support options.',
  },
  {
    id: 6,
    image: 'valentines.webp',
    alt: "Valentine's Day ideas for seniors",
    title: "Valentine's Day Ideas: What Seniors Can Give Each Other",
    description:
      "Discover sweet, low-effort Valentine's Day ideas for seniors that celebrate decades of love in meaningful ways.",
  },
  {
    id: 7,
    image: 'twa-36-1-3.webp',
    alt: 'Person using a wheeled walker at home',
    title: 'How To Use A Walker With Wheels: A Complete Guide for Safe Mobility',
    description:
      'A walker with wheels can greatly improve balance, mobility, and independence, when used correctly. This guide explains the proper setup, walking technique, and safety tips.',
  },
  {
    id: 8,
    image: 'blog35-1-1.webp',
    alt: 'Mobility devices for seniors including wheelchair, scooter, cane, and walker',
    title: 'Best Mobility Devices for Seniors: A Complete Guide to Safe & Independent Living',
    description:
      "Discover the top mobility devices that can instantly make daily life safer and easier for seniors. Don't miss these game-changing solutions.",
  },
  {
    id: 9,
    image: 'twaa-1.webp',
    alt: 'Senior woman sitting beside a walker with knee pain',
    title: 'Can Osteoarthritis Lead to More Falls in Seniors?',
    description:
      'Osteoarthritis can quietly increase fall risk in seniors by affecting balance, strength, and mobility, often before warning signs appear.',
  },
];

function BlogArticles() {
  return (
    <section
      id="articles"
      className="w-full  px-4 pb-16 pt-2 md:px-10 lg:px-0"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[840px] text-center">
          <p className="font-raleway text-base font-semibold leading-6 tracking-[0.005em] text-[#182126]">
            Blog
          </p>
          <h2 className="mt-6 text-[34px] font-black leading-[0.96] text-[#a87900] md:text-[46px] lg:text-[56px]">
            Transforming Adult Learning with AI innovation
          </h2>
          <p className="mt-8 text-lg font-semibold leading-7 text-[#66737c]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              className="flex h-full flex-col rounded-[10px] border border-[#d8dde2] bg-white p-6 font-raleway"
              key={article.id}
            >
              <img
                className="h-[264px] w-full rounded-lg object-cover"
                src={`${process.env.PUBLIC_URL}/images/${article.image}`}
                alt={article.alt}
              />

              <h3 className="mt-7 text-[25px] font-black leading-tight text-[#172129]">
                {article.title}
              </h3>
              <p className="mt-4 text-base font-medium leading-6 text-[#5f6c76]">
                {article.description}
              </p>

              <a
                className="mt-auto flex h-10 w-full items-center justify-center gap-3 rounded-full bg-[#ffc400] px-5 font-manrope text-base font-medium text-black no-underline transition-colors duration-150 hover:bg-[#f0b800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400]"
                href={`#article-${article.id}`}
              >
                <span>Learn More</span>
                <img
                  className="h-3 w-3"
                  src={`${process.env.PUBLIC_URL}/images/Vector.svg`}
                  alt=""
                  aria-hidden="true"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogArticles;
