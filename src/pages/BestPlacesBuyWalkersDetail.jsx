import { useEffect } from 'react';

const navItems = [
  ['Home', '/'],
  ['Best Tools', '/tools'],
  ['Articles', '/articles'],
  ['About Us', '/about-us'],
  ['Contact Us', '/contact'],
  ["Caregiver's Corner", '/caregivers-corner'],
];

const toc = [
  'Types of walkers for seniors',
  'Where to buy walkers for seniors: top stores and online options',
  'Factors to consider when buying a walker',
  'Frequently Asked Questions',
  'Final Thoughts',
  'Reference',
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

function TipBox({ children }) {
  return <section className="mt-5 rounded-[8px] border-l-4 border-[#ffc400] bg-[#fff3c9] p-4"><p className="font-manrope text-[10px] font-bold leading-5 text-[#1f2930]">{children}</p></section>;
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

function BestPlacesBuyWalkersDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'The 7 Best Places to Buy Walkers for Seniors - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[430px]">
          <header className="pt-8 text-center">
            <h1 className="mx-auto max-w-[410px] text-[19px] font-black leading-tight text-black md:text-[21px]">The 7 Best Places to Buy Walkers for Seniors</h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">Don't waste money on the wrong store. Our expert picks reveal where to get the best walkers, at prices you'll love.</p>
            <img className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover" src={`${process.env.PUBLIC_URL}/images/improving-mobility-impairment-one-step-time-shot-nurse-helping-senior-man-with-walker.webp`} alt="Physical therapist helping a senior man use a rollator walker" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">RD</div>
            <p className="font-manrope text-[12px] font-black text-black">Robin Dolan</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>Walkers are available from many places, but the best store depends on whether you need professional fitting, fast delivery, insurance support, or the lowest price. Seniors should compare return policies, sizing help, reviews, and after-sale support before buying.</Paragraph>
          </section>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[15px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-2 px-6 py-5 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
              {toc.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Types of Walkers for Seniors</SectionHeading>
          <div className="mt-4 overflow-hidden rounded-[7px] border border-black/20">
            <table className="w-full border-collapse font-manrope text-[10px]">
              <thead className="bg-[#ffc400] text-black">
                <tr>
                  <th className="border border-black/20 px-3 py-2 text-left">#</th>
                  <th className="border border-black/20 px-3 py-2 text-left">Walker Type</th>
                  <th className="border border-black/20 px-3 py-2 text-left">Best For</th>
                  <th className="border border-black/20 px-3 py-2 text-left">Key Benefit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'Standard walker', 'Maximum stability', 'No wheels, strong support'],
                  ['2', 'Two-wheel walker', 'Indoor use with easier movement', 'Front wheels reduce lifting'],
                  ['3', 'Four-wheel walker', 'Outdoor walking and errands', 'Seat, brakes, and storage'],
                  ['4', 'Transport chair walker', 'Longer outings', 'Support plus resting option'],
                  ['5', 'Heavy-duty walker', 'Higher weight support', 'Wider frame and durability'],
                ].map((row) => (
                  <tr className="odd:bg-white even:bg-[#f7f7f7]" key={row[0]}>
                    {row.map((cell) => <td className="border border-black/20 px-3 py-2" key={cell}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionHeading id="section-2">Where to Buy Walkers for Seniors: Top Stores and Online Options</SectionHeading>
          <Paragraph>Purchasing a walker is easier when you know what each retailer does best. Some stores are better for low prices, while others are better for professional support, fitting, or insurance paperwork.</Paragraph>
          <SubHeading>1. Amazon</SubHeading>
          <Paragraph>Amazon is one of the fastest ways to compare walkers, read customer reviews, and find a broad range of styles.</Paragraph>
          <BlogList>
            <li>Large selection of standard walkers, rollators, and accessories.</li>
            <li>Useful reviews and photos from real buyers.</li>
            <li>Fast shipping and easy comparison between models.</li>
            <li>Good for seniors who already know the size and style they need.</li>
          </BlogList>
          <SubHeading>2. Walmart</SubHeading>
          <Paragraph>Walmart is a practical option for budget-friendly walkers and convenient pickup or delivery.</Paragraph>
          <BlogList>
            <li>Affordable pricing on basic walkers and rollators.</li>
            <li>Online ordering with home delivery or local pickup.</li>
            <li>Simple return options in many locations.</li>
          </BlogList>
          <SubHeading>3. CVS Pharmacy</SubHeading>
          <Paragraph>CVS can be helpful when you want a mobility aid from a familiar pharmacy brand with local availability.</Paragraph>
          <BlogList>
            <li>Convenient local stores in many areas.</li>
            <li>Basic walkers, rollators, and accessories.</li>
            <li>Good for quick replacement needs.</li>
          </BlogList>
          <SubHeading>4. Target</SubHeading>
          <Paragraph>Target is useful for shoppers who want simple checkout, household delivery, and recognizable brands.</Paragraph>
          <BlogList>
            <li>Easy online shopping experience.</li>
            <li>Simple return process.</li>
            <li>Good for comparing basic models and accessories.</li>
          </BlogList>
          <SubHeading>5. Medical Supply Stores</SubHeading>
          <Paragraph>Medical supply stores are often the strongest choice when fitting, safety, and clinical support matter most.</Paragraph>
          <BlogList>
            <li>Staff may help with sizing and product selection.</li>
            <li>Better access to specialty or heavy-duty walkers.</li>
            <li>May help explain insurance or Medicare documentation.</li>
          </BlogList>
          <TipBox>When choosing a store, prioritize return policy, sizing support, and product quality over the cheapest listed price.</TipBox>

          <SectionHeading id="section-3">Factors to Consider When Buying a Walker</SectionHeading>
          <BlogList>
            <li><strong>Walker style:</strong> standard, two-wheel, four-wheel, or heavy-duty.</li>
            <li><strong>Fit:</strong> handles should match the user's height and arm position.</li>
            <li><strong>Weight capacity:</strong> always check the manufacturer's stated limit.</li>
            <li><strong>Brakes:</strong> rollators should have reliable, easy-to-use hand brakes.</li>
            <li><strong>Return policy:</strong> keep packaging until the walker has been tested safely.</li>
            <li><strong>Professional advice:</strong> ask a physical therapist if the user has fall risk, weakness, or recovery needs.</li>
          </BlogList>
          <Paragraph>Buying the right walker is not just about price. It is about matching the device to the user's body, balance, daily environment, and comfort level.</Paragraph>

          <SectionHeading id="section-4">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['What features should I look for in a walker for seniors?', "Look for proper height adjustment, weight capacity, comfortable grips, reliable brakes if wheeled, and a frame that matches the user's environment."],
              ['Are rollators better than standard walkers?', 'Rollators are easier to move and often include seats, but standard walkers may provide more stability for users who need firm support.'],
              ['Is Walmart better than online stores?', 'Walmart can be convenient for budget models and returns, while online stores usually offer wider selection and more comparison options.'],
              ['How can The Walker Advisor help me choose the right walker?', 'The Walker Advisor compares walker types, safety features, and buying considerations so seniors and caregivers can make a more informed choice.'],
              ['How do I know which walker is best for me?', 'A physical therapist or healthcare provider can assess balance, strength, height, and home setup to recommend the safest option.'],
              ['Do seniors recommend walkers for seniors?', 'Many seniors benefit from walkers when the device is properly fitted and used with the right technique.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-5">
            <div className="flex items-center gap-3">
              <span className="text-[24px] leading-none text-[#ffc400]">💎</span>
              <h2 className="text-[16px] font-black text-black">Final Thoughts</h2>
            </div>
            <Paragraph>Finding the right walker can greatly enhance a senior's independence, confidence, and quality of life. Whether purchasing from a local medical store, online retailer, or national pharmacy, the best choice is one that fits safely, works in the user's home, and offers dependable support.</Paragraph>
            <Paragraph>Take the time to compare features, return policies, and sizing support. When in doubt, consult a healthcare professional before choosing a walker.</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-6">
            <div className="flex items-center gap-3">
              <span className="text-[22px] leading-none text-[#ffc400]">🌎</span>
              <h2 className="text-[16px] font-black text-black">Reference</h2>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://www.researchgate.net/journal/Journal-of-Aging-Research-2090-2212">Journal of Aging Research.</a></li>
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

export default BestPlacesBuyWalkersDetail;
