const resources = [
  'Understanding Upright Walkers: How They Improve Senior Posture',
  'How to Choose Walking Shoes for Balance and Stability',
  'Mental Health in Old Age: A Complete Guide for Seniors & Caregivers',
  'Why Seniors Need Proper Walking Shoes',
  'Can Heart Issues Increase Fall Risk in Seniors?',
  'Best Walking Shoes for Seniors in 2026',
];

function ResourceIcon() {
  return (
    <span
      className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#fff0ad]"
      aria-hidden="true"
    >
      <svg
        className="h-5 w-5 text-[#4a3a13]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 16.5H16a3 3 0 0 0 0-6h-.35A4.5 4.5 0 0 0 7 9.3 3.6 3.6 0 0 0 7.5 16.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 13.5h7M10.5 10.5l-2 3 2 3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function HelpfulResources() {
  return (
    <section className="w-full bg-[#fbf6e6] px-4 py-16 md:px-8 lg:px-14 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[850px] text-center">
          <h2
            className="mx-auto h-[60px] w-[840px] text-center text-[60px] font-normal uppercase leading-[100%] tracking-[0%] text-black"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Helpful Resources To Guide You
          </h2>
          <p className="mt-5 font-manrope text-base font-medium leading-7 text-[#66737c] md:text-lg">
            Discover valuable insights with thewalkeradvisor's expert guides and
            genuine reviews, designed to support you in finding the perfect
            mobility aid for your lifestyle.
          </p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <a
              className="rounded-lg border border-black/10 bg-white px-5 py-5 text-[#3f351d] no-underline shadow-[0_2px_0_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400]"
              href="/articles"
              key={resource}
            >
              <ResourceIcon />
              <h3 className="mt-5 font-manrope text-base font-black leading-6">
                {resource}
              </h3>
            </a>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            className="inline-flex h-10 items-center justify-center gap-3 rounded-full bg-[#ffc400] px-5 font-manrope text-base font-medium text-black no-underline transition-colors hover:bg-[#f0b800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400]"
            href="/articles"
          >
            See All Articles <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HelpfulResources;
