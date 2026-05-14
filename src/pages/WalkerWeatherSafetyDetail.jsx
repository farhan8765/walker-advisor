import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';



const toc = [
  'Safety tips for different weather conditions',
  'General walker safety tips for all weather',
  'Frequently Asked Questions',
  'Final Thoughts',
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

function CheckList({ items }) {
  return (
    <ul className="mt-3 space-y-1 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
      {items.map((item) => <li key={item}>✓ {item}</li>)}
    </ul>
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





function WalkerWeatherSafetyDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Rain, Snow, or Shine. How to Stay Safe with Your Walker - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1080px] bg-white px-4 pb-12 sm:px-6 lg:px-8">
        <article className="blog-detail-article w-full">
          <header className="pt-8 text-center">
            <h1 className="mx-auto max-w-[410px] text-[19px] font-black leading-tight text-black md:text-[21px]">Rain, Snow, or Shine. How to Stay Safe with Your Walker</h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">From slippery sidewalks to scorching heat, here is how seniors can navigate any weather with confidence.</p>
            <img className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover" src={`${process.env.PUBLIC_URL}/images/twa-blog12.webp`} alt="Snow-covered road lined with trees in winter" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">RD</div>
            <p className="font-manrope text-[12px] font-black text-black">Robin Dolan</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>Using a walker safely in bad weather requires preparation and careful surface choices. Rain, snow, heat, and wind can all change traction, visibility, endurance, and control. The safest plan is to inspect the walker, choose footwear carefully, and avoid risky routes when conditions are poor.</Paragraph>
          </section>

          <Paragraph>Every season creates different walker safety challenges. Wet floors can make rubber tips slip, snow can hide uneven pavement, heat can cause fatigue, and wind can make outdoor balance more difficult.</Paragraph>
          <Paragraph>The goal is not to stop moving. The goal is to adjust your route, equipment, and timing so movement stays safe and comfortable.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[15px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-2 px-6 py-5 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
              {toc.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Safety Tips for Different Weather Conditions</SectionHeading>
          <SubHeading>1. Rainy Weather</SubHeading>
          <Paragraph>Rain creates slippery surfaces, especially on tile, painted concrete, ramps, and smooth sidewalks. Before going outside, check walker tips, wheels, and brakes.</Paragraph>
          <CheckList items={['Use non-slip shoes', 'Wipe wet walker tips', 'Avoid painted curbs and ramps', 'Slow down when turning']} />

          <SubHeading>2. Snowy and Icy Conditions</SubHeading>
          <Paragraph>Snow and ice are the highest-risk conditions for walker users. Hidden ice, uneven snow piles, and salt buildup can make walker movement unpredictable.</Paragraph>
          <CheckList items={['Avoid icy sidewalks', 'Use cleared entrances', 'Ask for help with outdoor routes', 'Consider indoor walking instead']} />

          <SubHeading>3. Hot and Humid Conditions</SubHeading>
          <Paragraph>Heat can cause fatigue, dizziness, and slower reaction time. Seniors using walkers should plan walks during cooler parts of the day and carry water when appropriate.</Paragraph>
          <CheckList items={['Drink water before walking', 'Avoid midday heat', 'Use shaded routes', 'Rest before fatigue starts']} />

          <SubHeading>4. Windy Conditions</SubHeading>
          <Paragraph>Strong wind can affect posture and balance, especially with lightweight walkers or rollators. Avoid carrying loose bags that catch air or shift weight suddenly.</Paragraph>
          <CheckList items={['Use both hands on the walker', 'Avoid open windy areas', 'Keep bags secured', 'Pause before crossing driveways']} />

          <SubHeading>5. Foggy and Low-Visibility Weather</SubHeading>
          <Paragraph>Poor visibility can make curbs, puddles, and obstacles harder to see. Bright clothing, reflective details, and indoor alternatives can reduce risk.</Paragraph>
          <CheckList items={['Wear reflective gear', 'Use bright clothing', 'Walk with a companion', 'Avoid unfamiliar routes']} />

          <SectionHeading id="section-2">General Walker Safety Tips for All Weather</SectionHeading>
          <BlogList>
            <li>Inspect grips, wheels, and tips before every outing.</li>
            <li>Keep both hands on the walker while moving.</li>
            <li>Choose well-lit, familiar paths whenever possible.</li>
            <li>Do not rush across wet, icy, or uneven surfaces.</li>
            <li>Postpone outdoor walks when the weather feels unsafe.</li>
          </BlogList>

          <SectionHeading id="section-3">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['Can I use a regular walker in the snow?', 'Only on cleared, dry, and stable paths. Avoid ice, packed snow, and uneven outdoor surfaces.'],
              ['Is a rollator safe in cold or wet weather?', 'It can be, but only if brakes, wheels, and user control are reliable. Wet or icy surfaces increase risk.'],
              ['How do I keep my walker from slipping in the rain?', 'Use good rubber tips, avoid smooth wet surfaces, and dry the walker tips when moving indoors.'],
              ['Is it safe to walk in cold weather?', 'Yes, when paths are clear, clothing is warm, and fatigue or dizziness is not present.'],
              ['Are four-wheel walkers safe in the wind?', 'They can be harder to control in strong wind. Avoid open areas and secure all bags or loose items.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-4">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>Weather shouldn't limit your mobility or independence—with the right strategies, you can use your walker safely in any condition. Equip it with weather-appropriate accessories like ice grips for winter or foam handles for summer, and adjust your walking technique for slippery or windy surfaces.</Paragraph>
            <Paragraph>Stay proactive by checking forecasts, maintaining your walker, and dressing appropriately. Small adjustments, like reflective gear for low visibility or a weighted base for stability, make a big difference in safety. By adapting to each season's challenges, you can stay confident and active year-round. Remember, your walker is a tool for freedom—use these tips to keep moving forward, no matter the weather.</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-5">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://eatwalklearn.com/walking-in-the-rain-comfortably-and-safely/">Eatwalklearn.com. (2025). Walking In The Rain Comfortably And Safely.</a></li>
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://www.ramblers.org.uk/go-walking-hub/summer-walking-5-ways-stay-safe-heat">The Ramblers. (n.d.). Summer walking - 5 ways to stay safe in the heat.</a></li>
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://www.abc.net.au/news/2011-01-24/safety-tips-for-walking-in-the-heat/1917176">ABC News. (2011). 10 Safety Tips for Walking in the Heat.</a></li>
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

        <section className="mx-auto mt-16 w-full">
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
      <Newsletter />
      <Footer />
    </>
  );
}

export default WalkerWeatherSafetyDetail;
