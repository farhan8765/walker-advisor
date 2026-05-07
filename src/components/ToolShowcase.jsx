import { useState } from 'react';

const toolTabs = ['All', 'Winlove', 'Helavo', 'Elenker', 'Carex', 'Nova'];

const toolCards = [
  {
    id: 1,
    brand: 'Winlove',
    title: 'Track',
    description:
      'Stay in control of your ride with real-time cycling data. Monitor, measure, and move smarter.',
  },
  {
    id: 2,
    brand: 'Helavo',
    title: 'Track',
    description:
      'Stay in control of your ride with real-time cycling data. Monitor, measure, and move smarter.',
  },
  {
    id: 3,
    brand: 'Elenker',
    title: 'Track',
    description:
      'Stay in control of your ride with real-time cycling data. Monitor, measure, and move smarter.',
  },
  {
    id: 4,
    brand: 'Carex',
    title: 'Track',
    description:
      'Stay in control of your ride with real-time cycling data. Monitor, measure, and move smarter.',
  },
  {
    id: 5,
    brand: 'Nova',
    title: 'Track',
    description:
      'Stay in control of your ride with real-time cycling data. Monitor, measure, and move smarter.',
  },
];

function ToolShowcase() {
  const [activeTab, setActiveTab] = useState('All');
  const visibleCards =
    activeTab === 'All'
      ? toolCards.slice(0, 3)
      : toolCards.filter((card) => card.brand === activeTab);

  return (
    <section className="w-full bg-[#fbf6e6] px-4 py-16 md:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[42px] font-black uppercase leading-none text-black md:text-[58px] lg:text-[64px]">
            Test it, choose it
          </h2>
          <p className="mt-6 text-base font-medium leading-7 text-[#66737c] md:text-[20px]">
            Tools designed to boost your performance and comfort.
          </p>
        </div>

        <div className="mx-auto mt-12 flex w-full max-w-[1180px] flex-nowrap items-center justify-between gap-6 overflow-x-auto pb-2 md:mt-16 md:gap-10">
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

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {visibleCards.map((card) => (
            <article
              className="rounded-lg bg-[#ffc400] px-7 pb-7 pt-8 md:px-8 md:pb-9 md:pt-9 lg:px-9 lg:pb-10"
              key={card.id}
            >
              <h3 className="text-[42px] font-black leading-none text-[#4b2500] md:text-[48px]">
                {card.title}
              </h3>
              <p className="mt-8 font-manrope text-[24px] font-medium leading-[1.25] text-[#4b2500] md:text-[26px] lg:text-[28px]">
                {card.description}
              </p>

              <a
                className="mt-10 inline-flex h-11 items-center justify-center gap-3 rounded-full bg-[#33341d] px-5 font-manrope text-base font-medium text-white no-underline transition-colors hover:bg-[#222314] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:text-lg"
                href="/tools"
              >
                Learn More <span aria-hidden="true">-&gt;</span>
              </a>

              <div
                className="mt-8 min-h-[280px] rounded-lg bg-[#d8d8d8] md:min-h-[330px] lg:min-h-[390px]"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolShowcase;
