import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import BlogImage from '../components/BlogImage';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const tableOfContents = [
  'When Is It Ever Safe to Use a Walker on Stairs?',
  'The Only Truly Safe Methods for Stairs',
  'Danger Signs – Never Attempt Stairs If…',
  'Smarter Long-Term Solutions',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const faqs = [
  ['Are there any regular walkers who can safely go up stairs?', 'No. Only specialty models costing $1,500–$4,000 with stair-climbing attachments — and even those require training.'],
  ['My rollator has 10-inch wheels. Is that safe on stairs?', 'No. Larger wheels help outdoors; they do nothing for stair safety.'],
  ['What about just one step into the house?', 'Still dangerous. Use a portable threshold ramp or caregiver + gait-belt assist.'],
  ['Mom refuses to leave her walker behind. Help!', 'Get an inexpensive second walker for the upper floor. Clients tell me it’s the cheapest “insurance policy” they ever bought.'],
];

function ArticleLink({ children, href }) {
  return (
    <a className="font-black text-[#0b61a4] no-underline hover:underline" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
      {children}
    </a>
  );
}

function SectionHeading({ children, id }) {
  return <h2 className="mt-9 text-[18px] font-black leading-tight text-black" id={id}>{children}</h2>;
}

function SubHeading({ children }) {
  return <h3 className="mt-5 text-[14px] font-black text-black">{children}</h3>;
}

function Paragraph({ children }) {
  return <p className="mt-3 font-manrope text-[12px] font-medium leading-[1.85] text-[#1f2930]">{children}</p>;
}

function BlogList({ children }) {
  return <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">{children}</ul>;
}

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
function WalkerStairsSafetyDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Senior Safety: How to Use a Walker on Stairs - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1080px] bg-white px-4 pb-12 sm:px-6 lg:px-8">
        <article className="blog-detail-article w-full">
          <header className="pt-9 text-center">
            <h1 className="mx-auto max-w-[560px] text-[25px] font-black leading-tight text-black md:text-[28px]">Senior Safety: How to Use a Walker on Stairs (And Why You Usually Shouldn’t)</h1>
            <p className="mx-auto mt-10 max-w-[min(100%,56rem)] text-[#1f2930]">Most seniors use their walkers wrong on stairs, and it is dangerous. Learn the safest, expert-approved way to climb up and down stairs with a walker.</p>
            <img className="mx-auto mt-5 h-auto w-full max-w-[700px] rounded-[8px] object-contain" src={`${process.env.PUBLIC_URL}/images/Using-a-walker-on-stairs-or-steps-1536x864.webp`} alt="Using a walker on stairs or steps" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <img className="h-8 w-8 rounded-full object-cover" src={`${process.env.PUBLIC_URL}/images/syed-ali_avatar-300x300.webp`} alt="Syed Ali" />
            <p className="font-manrope text-[12px] font-black text-black">Syed Ali</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[16px] font-black text-black">Key Summary</h2>
            <Paragraph>Standard walkers and rollators are NOT safe on stairs. The safest approach is to park the walker and use handrails only. Attempting stairs with a regular walker is a top cause of life-changing falls in seniors.</Paragraph>
          </section>

          <Paragraph>Climbing stairs can be one of the most challenging and risky tasks for seniors who rely on a walker. Even the most stable mobility aid is designed for flat ground, not uneven steps. That’s why using the right technique matters. In this quick guide, we break down the safest way for older adults to handle stairs while using a walker, when it’s appropriate to avoid stairs altogether, and what alternatives offer better long-term safety.</Paragraph>
          <Paragraph>As a certified The Walker Advisor who has fitted thousands of seniors with the best walkers for seniors, I hear the same worried question every week: “Can I take my walker up and down the stairs?” Our answer is almost always: Please don’t, your hips and independence are worth far more than that risk.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              {tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">When Is It Ever Safe to Use a Walker on Stairs?</SectionHeading>
          <Paragraph>Realistically, rarely.</Paragraph>
          <Paragraph>The only exceptions are:</Paragraph>
          <BlogList>
            <li>You own a specialized stair-climbing model (very rare and expensive) and have been formally trained by a physical therapist.</li>
            <li>A strong caregiver uses a gait belt to assist on 1–2 steps only.</li>
          </BlogList>
          <Paragraph>Even popular upright walkers for balance problems (such as the <ArticleLink href="https://amzn.to/4a8iDwB">UPWalker</ArticleLink> or <ArticleLink href="https://amzn.to/3XJavuX">BEYOUR Walker</ArticleLink>) that dramatically improve posture and reduce back pain are still not approved for stair climbing without the optional stair kit and professional training.</Paragraph>

          <SectionHeading id="section-2">The Only Truly Safe Methods for Stairs</SectionHeading>
          <SubHeading>Method 1 – Park the Walker & Use the Handrail (Gold standard for 95 % of users)</SubHeading>
          <BlogImage src="twa-info32.webp" alt="Safe walker stair method using a handrail" />
          <BlogList>
            <li>Leave the walker at the top or bottom.</li>
            <li>Grip the handrail firmly with one or both hands.</li>
            <li>Going up → Lead with your stronger leg (“Good goes to heaven”).</li>
            <li>Going down → Lead with your weaker leg (“Bad goes down below”).</li>
            <li>Have someone carry the walker or keep a second one on each floor.</li>
          </BlogList>
          <Paragraph>→ New to walkers? Master the basics first: <ArticleLink href="https://thewalkeradvisor.com/what-is-the-proper-way-to-use-a-walker/">What Is The Proper Way To Use A Walker?</ArticleLink></Paragraph>

          <SubHeading>Method 2 – Helper Carries the Walker</SubHeading>
          <Paragraph>Same handrail technique above, while a family member folds and carries your walker (even the best 3-wheel walkers for seniors fold easily for this).</Paragraph>

          <SubHeading>Method 3 – Trained Caregiver Assist with Gait Belt</SubHeading>
          <Paragraph>Only for very short flights. The caregiver stands one step below, secures a gait belt around your waist, and moves in sync while you hold the rail. Walker is carried separately.</Paragraph>
          <Paragraph>Never let anyone “spot” you from behind while you push the walker on the stairs; physics guarantees a backward fall.</Paragraph>
          <BlogImage src="twa-info3.webp" alt="Caregiver assisting with gait belt near stairs" />

          <SectionHeading id="section-3">Danger Signs – Never Attempt Stairs If…</SectionHeading>
          <BlogList>
            <li>Your walker is a standard pick-up or two-wheel model</li>
            <li>You require the walker to stand from a chair</li>
            <li>There’s no sturdy handrail on at least one side</li>
            <li>More than 3–4 steps without a landing</li>
            <li>You’re using a lightweight 3-wheel walker (great for tight spaces but tips easily on stairs)</li>
          </BlogList>

          <SectionHeading id="section-4">Smarter Long-Term Solutions</SectionHeading>
          <Paragraph>Instead of risking a fall, consider these proven options my clients love:</Paragraph>
          <BlogList>
            <li>Install a stairlift (many pay for themselves by preventing one hospital visit)</li>
            <li>Relocate the bedroom and daily living to the main floor</li>
            <li>Strengthen legs with targeted physical therapy</li>
            <li>Upgrade from a cane when balance starts failing → <ArticleLink href="https://thewalkeradvisor.com/time-to-switch-cane-to-walker/">How do you know it’s time to start using a walker instead of a cane?</ArticleLink></li>
            <li>Choose the best walkers for seniors suited to your exact home layout → <ArticleLink href="https://thewalkeradvisor.com/tips-for-choosing-and-using-walkers-a-comprehensive-guide/">Tips for Choosing and Using Walkers</ArticleLink></li>
            <li>Live in a small apartment? Learn space-saving tricks → <ArticleLink href="https://thewalkeradvisor.com/tips-using-walker-small-homes/">Tips for Using a Walker in Small Homes</ArticleLink></li>
          </BlogList>
          <Paragraph>Struggle with stooped posture or back pain? An upright walker for balance problems can be life-changing on flat surfaces (but still not for stairs).</Paragraph>

          <SectionHeading id="section-5">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {faqs.map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-6">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>We’ve watched too many wonderful, active seniors lose everything from one “quick try” on the stairs with their walker. Don’t let that be you or your loved one. Protect your future by respecting the limits of even the best walkers for seniors. When in doubt, park it, grab the rail, and get help.</Paragraph>
            <Paragraph>Need personalized advice on your walker model or home? Comment below or send a photo, and we will answer every single one. Stay upright and keep moving.</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-7">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>Centers for Disease Control and Prevention (CDC) – STEADI Fall Prevention</li>
              <li>American Physical Therapy Association – Safe Stair Negotiation with Mobility Aids</li>
              <li>National Institute on Aging – Home Safety Tips for Older Adults</li>
              <li>Journal of Gerontology – Risk Factors for Falls on Stairs Among Community-Dwelling Older Adults (2022)</li>
            </ol>
          </section>
        </article>

        <section className="mx-auto mt-16 w-full">
          <h2 className="font-manrope text-[13px] font-black text-black">Related Articles</h2>
          <div className="mt-5 grid gap-8 md:grid-cols-3">
            {relatedArticles.map((article) => (
              <article className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#d8dde2] bg-white font-manrope" key={article.title}>
                <img className="blog-related-thumb block h-[260px] w-full object-cover" src={`${process.env.PUBLIC_URL}/images/${article.image}`} alt="" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="line-clamp-2 text-[20px] font-bold leading-[28px] tracking-[0.5%] text-[#172129]" style={{ fontFamily: 'Manrope, sans-serif' }}>{article.title}</h3>
                  <p className="mt-3 line-clamp-3 text-base font-medium leading-6 text-[#66737c]">{article.description}</p>
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

export default WalkerStairsSafetyDetail;
