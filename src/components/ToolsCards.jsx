const tools = [
  {
    title: 'Find the Right Walker for Your Needs',
    description:
      'Answer a few simple questions to discover the ideal walker that fits your mobility needs, comfort, and budget.',
  },
  {
    title: 'Find Your Best Outdoor Walker',
    description: 'Answer 7 questions to find your perfect outdoor walker.',
  },
];

function ToolsCards() {
  return (
    <section className="w-full bg-[#f7f7f7] px-6 py-6 md:px-[68px]">
      <div className="flex max-w-[860px] flex-col gap-5 md:flex-row">
        {tools.map((tool) => (
          <article
            className="flex min-h-[275px] flex-1 flex-col items-center rounded-lg border border-[#ffd98d] bg-[#f7f7f7] px-8 pb-5 pt-7 text-center"
            key={tool.title}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#27236d] text-[28px] font-black leading-none text-white">
              ?
            </div>

            <h2 className="mt-5 text-[20px] font-black leading-tight text-black">
              {tool.title}
            </h2>
            <p className="mt-3 max-w-[350px] text-base font-medium leading-6 text-[#20272d]">
              {tool.description}
            </p>

            <button
              className="mt-auto h-[46px] min-w-[158px] rounded-full bg-[#002f49] px-8 text-base font-black text-white transition-colors duration-150 hover:bg-[#014363] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002f49]"
              type="button"
            >
              Check Now
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ToolsCards;
