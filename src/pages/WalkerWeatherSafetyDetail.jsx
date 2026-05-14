import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';

const navItems = [
  ['Home', '/'],
  ['Best Tools', '/tools'],
  ['Articles', '/articles'],
  ['About Us', '/about-us'],
  ['Contact Us', '/contact'],
  ["Caregiver's Corner", '/caregivers-corner'],
];

const toc = [
  'Safety tips for different weather conditions',
  'General walker safety tips for all weather',
  'Frequently asked questions',
  'Final thoughts',
  'References',
];

const relatedArticles = [
  {
    image: 'twa-blog11-1024x683.webp',
    title: 'Social Activities for Older Adults: The Best Ways to Stay Connected, Active, and Happy',
    description: 'A stronger social routine can support confidence, movement, and daily independence.',
  },
  {
    image: 'image-2-1.webp',
    title: 'Can Heart Issues Increase Fall Risk in Seniors?',
    description: 'Your heart, blood flow, and medications can quietly affect balance and fall risk.',
  },
  {
    image: 'blogg.webp',
    title: '3 Foods for Seniors to Avoid',
    description: 'The wrong food choices can affect energy, inflammation, and mobility comfort.',
  },
];

function DetailHeader() {
  return (
    <header className="w-full bg-white px-4 py-3">
      <div className="mx-auto flex max-w-[720px] items-center justify-between gap-4">
        <a href="/" aria-label="The Walker Advisor home">
          <img className="h-auto w-[68px] object-contain" src={`${process.env.PUBLIC_URL}/images/TWA-logo.webp`} alt="The Walker Advisor" />
        </a>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Blog detail navigation">
          {navItems.map(([label, href]) => (
            <a className="font-manrope text-[11px] font-bold text-[#08131b] no-underline transition-colors hover:text-[#b88b00]" href={href} key={label}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Paragraph({ children }) {
  return <p className="mt-3 font-manrope text-[10px] font-medium leading-[1.9] text-[#1f2930]">{children}</p>;
}

function SectionHeading({ children, id }) {
  return <h2 className="mt-8 text-[15px] font-black leading-tight text-black" id={id}>{children}</h2>;
}

function SubHeading({ children }) {
  return <h3 className="mt-5 text-[12px] font-black leading-tight text-black">{children}</h3>;
}

function BlogList({ children }) {
  return <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[10px] font-medium leading-5 text-[#1f2930]">{children}</ul>;
}

function QuickTipBox({ title, items }) {
  return (
    <section className="mt-4 rounded-[8px] border-l-4 border-[#ffc400] bg-[#fff8df] p-4">
      <p className="font-manrope text-[10px] font-black leading-5 text-[#1f2930]">{title}</p>
      <ul className="mt-2 space-y-1 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
        {items.map((item) => <li key={item}>✓ {item}</li>)}
      </ul>
    </section>
  );
}

function SocialDots() {
  return (
    <div className="mt-9 flex items-center justify-center gap-2" aria-label="Share article">
      {['f', 'in', 'x'].map((item) => (
        <a className="flex h-6 w-6 items-center justify-center rounded-full bg-black font-manrope text-[10px] font-black text-white no-underline" href={`#share-${item}`} key={item}>{item}</a>
      ))}
    </div>
  );
}

function DetailNewsletter() {
  return (
    <section className="mt-20 w-full bg-[#ffe8b6] px-4">
      <div className="mx-auto grid max-w-[1020px] items-end gap-8 py-8 md:grid-cols-[360px_1fr] md:py-0">
        <img className="mx-auto hidden h-[260px] w-auto object-contain md:block" src={`${process.env.PUBLIC_URL}/images/newsletter-pic-1024x1024.webp`} alt="Senior man walking with a wheeled walker" />
        <div className="py-8 md:py-12">
          <h2 className="text-[24px] font-black leading-tight text-black">Welcome to The Walker Advisor Newsletter!</h2>
          <p className="mt-3 max-w-[620px] font-manrope text-[12px] font-medium leading-6 text-[#303a42]">Stay informed with our monthly updates on the best mobility aids, safety tips, and exclusive deals designed to support senior independence.</p>
          <form className="mt-6 flex max-w-[560px] rounded-full bg-white p-1" action="#">
            <input className="min-w-0 flex-1 rounded-full px-5 font-manrope text-[12px] outline-none" placeholder="Email" type="email" />
            <button className="rounded-full bg-[#07364f] px-8 py-3 font-manrope text-[12px] font-black text-white" type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function DetailFooter() {
  return (
    <footer className="w-full bg-black px-4 py-12 text-white">
      <div className="mx-auto grid max-w-[900px] gap-10 md:grid-cols-[1.3fr_0.8fr_0.9fr_0.8fr]">
        <div>
          <img className="h-auto w-[112px] object-contain brightness-0 invert" src={`${process.env.PUBLIC_URL}/images/TWA-logo.webp`} alt="The Walker Advisor" />
          <p className="mt-4 max-w-[250px] font-manrope text-[12px] font-medium leading-6">The Walker Advisor is committed to helping seniors and their families find the best mobility aids for safe and independent living.</p>
          <div className="mt-5 flex gap-3 font-manrope text-[12px]">○ ○ ○ ○ ○</div>
        </div>
        {[
          ['About Authors', ['Meet Amir Abbasi', 'Meet Robin Dolan', 'Meet Syed Ali']],
          ['Walkers by categories', ['Without Wheels', 'Two Wheels', 'Rollator']],
          ['Walkers by brands', ['Winlove', 'Helavo', 'Elenker', 'Carex', 'Nova']],
        ].map(([title, links]) => (
          <div key={title}>
            <h3 className="font-manrope text-[12px] font-black">{title}</h3>
            <ul className="mt-4 space-y-3">{links.map((link) => <li className="font-manrope text-[12px] font-medium" key={link}>{link}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-[900px] flex-col justify-between gap-4 border-t border-white/20 pt-5 font-manrope text-[11px] md:flex-row">
        <p>©2026 All Right Reserved By The Walker Advisor</p>
        <p className="text-[#ffc400]">Disclaimer &nbsp; Terms & Conditions &nbsp; Privacy Policy &nbsp; Contact Us &nbsp; Cookies</p>
      </div>
    </footer>
  );
}

function WalkerWeatherSafetyDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Rain, Snow, or Shine, How to Stay Safe with Your Walker | The Walker Advisor";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[430px]">
          <header className="pt-8 text-center">
            <h1 className="mx-auto max-w-[410px] text-[19px] font-black leading-tight text-black md:text-[21px]">Rain, Snow, or Shine, How to Stay Safe with Your Walker</h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">From slippery sidewalks to scorching heat, here's how seniors can navigate any weather with confidence.</p>
            <img className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover" src={`${process.env.PUBLIC_URL}/images/twa-blog12.jpg`} alt="Rain, Snow, or Shine, How to Stay Safe with Your Walker" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">RD</div>
            <p className="font-manrope text-[12px] font-black text-black">Robin Dolan</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>Using a walker safely in all weather conditions requires preparation and smart adaptations. For rain, ensure non-slip tips and waterproof grips; for snow, add ice grips and wear cleated boots. In heat, use foam handles and stay hydrated, while windy days call for weighted walkers and angled walking. Low visibility demands reflective gear and LED lights. With these weather-specific strategies, seniors can maintain stability, confidence, and independence year-round—keeping mobility safe in any season.</Paragraph>
          </section>

          <Paragraph>For seniors and mobility-aid users, harsh weather conditions—rain, snow, ice, heat, and wind—turn simple walks into dangerous challenges. Slippery surfaces, poor visibility, and extreme temperatures increase the risk of slips, falls, and discomfort, making outdoor mobility stressful and unsafe. Without the right precautions, every step outside becomes a hazard. Wet pavement can cause walkers to slide, icy paths lead to instability, and scorching heat makes metal frames unbearable to touch. Even a mild breeze can throw off balance, while fog or heavy rain reduces visibility. These risks don't just limit independence—they create fear and hesitation, keeping seniors from staying active and engaged.</Paragraph>
          <Paragraph>The good news? With the right strategies, walker users can stay safe and confident in any weather. This guide covers essential tips—from weather-resistant accessories (like non-slip grips and wheel covers) to smart movement techniques (such as shorter steps on ice). Whether it's rain, snow, or blazing sun, you'll learn how to adapt and move with security.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[15px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-2 px-6 py-5 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
              {toc.map((item, index) => (
                <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>
              ))}
            </ol>
          </nav>

          {/* Section 1 */}
          <SectionHeading id="section-1">Safety Tips for Different Weather Conditions</SectionHeading>

          <SubHeading>1. Rainy Weather</SubHeading>
          <Paragraph>Rain creates slippery surfaces, increasing the risk of falls. To stay safe, ensure your walker has non-slip rubber tips for better traction. If the tips are worn out, replace them immediately—this small change can prevent dangerous slips.</Paragraph>
          <Paragraph>Accessories like waterproof handle covers keep your grip secure, while a hands-free rain poncho ensures you stay dry without compromising stability. Avoid plastic bags on handles, as they can become slippery. Instead, opt for textured, waterproof covers designed for walkers.</Paragraph>
          <Paragraph>Footwear matters—choose shoes with deep treads for better grip. Walk slowly and deliberately, avoiding quick steps that could lead to imbalance. Stick to textured surfaces like concrete rather than smooth tiles or metal grates. After use, dry your walker to prevent rust and maintain functionality.</Paragraph>
          <QuickTipBox
            title="Quick Tips for Rainy Weather:"
            items={[
              'Use rubber-tipped walkers',
              'Wear slip-resistant shoes',
              'Walk slowly on textured paths',
              'Dry your walker after use to prevent rust',
            ]}
          />

          <SubHeading>2. Snowy and Icy Conditions</SubHeading>
          <Paragraph>Winter weather poses serious slipping hazards. Ice grips or snow treads can be attached to walker legs for better stability. These accessories dig into ice, reducing the risk of falls.</Paragraph>
          <Paragraph>Dressing in warm, layered clothing helps regulate body temperature without restricting movement. Waterproof gloves improve grip, and boots with ice cleats add extra security. Always check weather reports before heading out—postponing trips during heavy snowfall may be the safest choice.</Paragraph>
          <Paragraph>When walking on ice, take small, flat-footed steps to minimize slipping. Avoid leaning too far forward, as this shifts weight unevenly. If possible, walk on salted or sanded paths for better traction. On extreme weather days, consider indoor exercises instead.</Paragraph>
          <QuickTipBox
            title="Quick Tips for Snow & Ice:"
            items={[
              'Attach ice grips to walker legs',
              'Wear boots with cleats',
              'Walk slowly on treated paths',
              'Avoid icy patches when possible',
            ]}
          />

          <SubHeading>3. Hot and Sunny Conditions</SubHeading>
          <Paragraph>Extreme heat can lead to dehydration and fatigue, making walker use more strenuous. Stay hydrated by carrying a water bottle in a walker-mounted holder. Wear breathable, light-colored clothing to reflect sunlight and reduce overheating.</Paragraph>
          <Paragraph>A wide-brimmed hat and sunscreen protect against sunburn. Foam-grip covers prevent handles from becoming too hot to hold. Plan walks for early morning or late evening when temperatures are cooler.</Paragraph>
          <Paragraph>Overheating can cause dizziness, increasing fall risk. Recognize signs of heat exhaustion (excessive sweating, nausea, confusion) and take breaks in shaded areas. A folding walker with a seat provides a quick resting spot when needed.</Paragraph>
          <QuickTipBox
            title="Quick Tips for Hot Weather:"
            items={[
              'Drink plenty of water',
              'Wear a hat and sunscreen',
              'Use foam grip covers',
              'Walk during cooler hours',
            ]}
          />

          <SubHeading>4. Windy Conditions</SubHeading>
          <Paragraph>Strong winds can destabilize lightweight walkers. To counter this, use a heavier walker or add weight to the base (some models allow sandbag attachments). Keep a firm grip on the handles, and avoid walking in gusts exceeding 20 mph if possible.</Paragraph>
          <Paragraph>Wear fitted clothing to reduce wind resistance. Walk at an angle against the wind rather than directly into it—this improves balance. Be cautious when moving between sheltered and open areas, as sudden wind bursts can catch you off guard.</Paragraph>
          <QuickTipBox
            title="Quick Tips for Windy Weather:"
            items={[
              'Use a weighted walker',
              'Wear snug-fitting clothes',
              'Walk at an angle to the wind',
              'Avoid open areas in strong gusts',
            ]}
          />

          <SubHeading>5. Foggy and Low-Visibility Weather</SubHeading>
          <Paragraph>Poor visibility increases accident risks. Wear reflective clothing to stay visible to drivers and pedestrians. Attach LED lights or reflectors to your walker for better recognition.</Paragraph>
          <Paragraph>If possible, walk with a companion for added safety. Stick to well-lit paths and avoid unfamiliar routes.</Paragraph>
          <QuickTipBox
            title="Quick Tips for Foggy Weather:"
            items={[
              'Use reflective gear',
              'Attach walker lights',
              'Walk in well-lit areas',
              'Avoid walking alone',
            ]}
          />

          {/* Section 2 */}
          <SectionHeading id="section-2">General Walker Safety Tips for All Weather</SectionHeading>
          <BlogList>
            <li>Inspect your walker regularly—check for loose screws, worn tips, or damage.</li>
            <li>Adjust walker height so elbows bend slightly when holding handles.</li>
            <li>Use accessories (LED lights, reflective strips) for visibility.</li>
            <li>Plan routes carefully—choose even, obstacle-free paths.</li>
            <li>Practice maneuvering in different environments for confidence.</li>
          </BlogList>
          <p className="mt-3 font-manrope text-[10px] font-medium leading-[1.9] text-[#1f2930]">For detailed guidance, see our article on <a className="text-[#0b61a4] no-underline hover:underline" href="/most-people-use-walkers-wrong-are-you-making-these-mistakes">What Is The Proper Way To Use A Walker?</a></p>

          {/* Section 3 - FAQ */}
          <SectionHeading id="section-3">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['Can I use a regular walker in the snow?', 'Standard walkers lack traction on ice. Adding snow treads or ice grips improves safety.'],
              ['Is it better to walk in cold or warm weather?', 'Running generates more heat than walking, and so, unless you are sitting in a cozy, well-heated room or are well wrapped up in thick clothing, it is better to run and warm up rather than walk and lose heat to the colder surroundings in cold weather.'],
              ['How do I keep my walker from slipping in the rain?', 'Ensure rubber tips are intact, walk slowly, and avoid smooth surfaces.'],
              ['Is it safe to walk in cold weather?', "It's easy to lose motivation to exercise when it's cold outside. However, you can remain active and exercise safely, especially outdoors, during the winter. A general rule to follow when exercising in the cold is to work your way slowly into the exercises. Also, start with lower loads or intensity."],
              ["What's the best walker for hot weather?", 'Look for models with ventilated handles and foam grips to prevent overheating.'],
              ['Are four-wheel walkers safer in the wind?', 'Not necessarily—three-wheel models may be more stable due to their triangular base.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          {/* Section 4 - Final Thoughts */}
          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-4">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>Weather shouldn't limit your mobility or independence—with the right strategies, you can use your walker safely in any condition. Equip it with weather-appropriate accessories like ice grips for winter or foam handles for summer, and adjust your walking technique for slippery or windy surfaces.</Paragraph>
            <Paragraph>Stay proactive by checking forecasts, maintaining your walker, and dressing appropriately. Small adjustments, like reflective gear for low visibility or a weighted base for stability, make a big difference in safety. By adapting to each season's challenges, you can stay confident and active year-round. Remember, your walker is a tool for freedom—use these tips to keep moving forward, no matter the weather.</Paragraph>
          </section>

          {/* Section 5 - References */}
          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-5">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://eatwalklearn.com/walking-in-the-rain-comfortably-and-safely/" target="_blank" rel="noopener noreferrer">Eatwalklearn.com. (2025). Walking In The Rain Comfortably And Safely.</a></li>
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://www.ramblers.org.uk/go-walking-hub/summer-walking" target="_blank" rel="noopener noreferrer">The Ramblers. (n.d.). Summer walking — 5 ways to stay safe in the heat.</a></li>
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://abcnews.go.com/Health/Wellness/10-safety-tips-walking-heat/story?id=14056562" target="_blank" rel="noopener noreferrer">ABC News. (2011). 10 Safety Tips for Walking in the Heat.</a></li>
            </ol>
          </section>

          <SocialDots />

          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <form className="mt-6 space-y-4" action="#">
              <label className="block"><span className="font-manrope text-[11px] font-black text-black">Comment *</span><textarea className="mt-2 min-h-[100px] w-full rounded-[4px] border border-black px-3 py-2 font-manrope text-[12px] outline-none" /></label>
              <label className="block"><span className="font-manrope text-[11px] font-black text-black">Name *</span><input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" /></label>
              <label className="block"><span className="font-manrope text-[11px] font-black text-black">Email *</span><input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" type="email" /></label>
              <label className="flex items-center gap-2 font-manrope text-[10px] font-medium text-[#1f2930]"><input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.</label>
              <button className="rounded-full bg-[#07364f] px-7 py-3 font-manrope text-[11px] font-black text-white" type="submit">Post Comment</button>
            </form>
          </section>
        </article>

        <section className="mx-auto mt-16 max-w-[680px]">
          <h2 className="font-manrope text-[13px] font-black text-black">Related Articles</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {relatedArticles.map((article) => (
              <article className="overflow-hidden rounded-[8px] border border-[#d8dde2] bg-white" key={article.title}>
                <img className="h-32 w-full object-cover" src={`${process.env.PUBLIC_URL}/images/${article.image}`} alt="" />
                <div className="p-4">
                  <h3 className="text-[13px] font-black leading-tight text-[#172129]">{article.title}</h3>
                  <p className="mt-2 font-manrope text-[10px] font-medium leading-5 text-[#303a42]">{article.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <DetailNewsletter />
      <DetailFooter />
    </>
  );
}

export default WalkerWeatherSafetyDetail;
