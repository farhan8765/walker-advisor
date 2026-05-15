const articles = [
  {
    image: 'blog.webp',
    title:
      'Social Activities for Older Adults: The Best Ways to Stay Connected, Active, and Happy',
    description:
      'Loneliness in seniors is not just sad, it is as dangerous to health as smoking 15 cigarettes a day. Here are the best ways older adults can stay connected and thrive.',
  },
  {
    image: 'blog2.webp',
    title: '3 Foods for Seniors to Avoid',
    description:
      'Your body after 60 is a different machine entirely. Metabolism slows. The immune system becomes more reactive. Kidneys filter less efficiently, and the gut microbiome shifts dramatically.',
  },
];

function CaregiverArticles() {
  return (
    <section className="w-full bg-[#f7f7f7] px-6 py-10 md:px-[51px]">
      <div className="mx-auto grid w-full max-w-[1660px] gap-8 md:grid-cols-2">
        {articles.map((article) => (
          <article
            className="overflow-hidden rounded-xl bg-white"
            key={article.title}
          >
            <img
              className="h-[270px] w-full object-cover md:h-[350px]"
              src={`${process.env.PUBLIC_URL}/images/${article.image}`}
              alt=""
            />
            <div className="px-[30px] pb-10 pt-7 md:px-[42px] md:pb-12 md:pt-8">
              <h2 className="max-w-[640px] text-[22px] leading-tight text-black md:text-[28px]">
                {article.title}
              </h2>
              <p className="mt-4 max-w-[610px] text-base font-medium leading-6 text-black md:text-[20px] md:leading-8">
                {article.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CaregiverArticles;
