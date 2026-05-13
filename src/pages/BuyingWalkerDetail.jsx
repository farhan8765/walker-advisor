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
  'Best features',
  'Seat for resting',
  'Walker comparison table',
  'Frequently asked questions',
  'Final Thoughts',
  'Reference',
];

const comparisonRows = [
  ['Standard walker', 'Maximum stability', 'Indoor recovery', 'Low', 'No seat'],
  ['Two-wheel walker', 'Stable with easier movement', 'Indoor daily use', 'Low', 'No seat'],
  ['Three-wheel rollator', 'Light and narrow', 'Tight spaces', 'Medium', 'Usually no seat'],
  ['Four-wheel rollator', 'Seat, brakes, storage', 'Errands and outdoor use', 'Medium', 'Yes'],
  ['Heavy-duty rollator', 'Wider frame and higher capacity', 'Larger users and long walks', 'High', 'Yes'],
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

function ComparisonTable() {
  return (
    <div className="mt-5 overflow-hidden border border-black font-manrope">
      <div className="grid grid-cols-[0.9fr_1fr_1fr_0.8fr_0.7fr] bg-[#ffc400] text-[7px] font-black leading-4 text-black">
        <div className="border-r border-black px-2 py-2">Walker Type</div>
        <div className="border-r border-black px-2 py-2">Main Benefit</div>
        <div className="border-r border-black px-2 py-2">Best For</div>
        <div className="border-r border-black px-2 py-2">Mobility Level</div>
        <div className="px-2 py-2">Seat</div>
      </div>
      {comparisonRows.map((row) => (
        <div className="grid grid-cols-[0.9fr_1fr_1fr_0.8fr_0.7fr] text-[7px] font-semibold leading-4 text-[#1f2930]" key={row[0]}>
          {row.map((cell, index) => (
            <div className={`${index === row.length - 1 ? '' : 'border-r'} border-t border-black px-2 py-2`} key={cell}>{cell}</div>
          ))}
        </div>
      ))}
    </div>
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

function BuyingWalkerDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Buying a Walker? Don't Make a Move Until You Read This! - The Walker Advisor";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[430px]">
          <header className="pt-8 text-center">
            <h1 className="mx-auto max-w-[410px] text-[19px] font-black leading-tight text-black md:text-[21px]">Buying a Walker? Don't Make a Move Until You Read This!</h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">Picking the wrong walker can cost you comfort, safety, and money. Our guide shows you how to get it right.</p>
            <img className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover" src={`${process.env.PUBLIC_URL}/images/twa-blog4.webp`} alt="Senior woman testing a walker outdoors" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">RD</div>
            <p className="font-manrope text-[12px] font-black text-black">Robin Dolan</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>Buying a walker should be based on where it will be used, how much support the user needs, and whether features like wheels, brakes, a seat, and storage will improve safety or create extra risk.</Paragraph>
          </section>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[15px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-2 px-6 py-5 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
              {toc.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Key Tips for Choosing and Using Walkers</SectionHeading>
          <BlogList>
            <li>Start with the user's balance level, not the product style.</li>
            <li>Measure handle height so wrists, shoulders, and posture stay comfortable.</li>
            <li>Choose wheels only when the user can control movement safely.</li>
            <li>Look for brakes that are easy to squeeze and lock.</li>
            <li>Consider the home layout, doorways, rugs, thresholds, and outdoor terrain.</li>
          </BlogList>

          <SubHeading>1. Know the Right Fit</SubHeading>
          <Paragraph>Fit is the first safety feature. A walker that is too high can strain the shoulders. A walker that is too low can cause leaning and back discomfort. The handles should usually sit near the wrist crease when the user stands upright with relaxed arms.</Paragraph>

          <section className="mt-6 rounded-[8px] border-l-4 border-[#ffc400] bg-[#fff8df] p-4">
            <p className="font-manrope text-[10px] font-bold leading-5 text-[#1f2930]">Tip: If the user leans heavily, skips steps, or struggles to turn, the walker may not be the right style or height. A professional fitting can prevent pain and falls.</p>
          </section>

          <SubHeading>2. Consider the Walker's Weight Capacity</SubHeading>
          <Paragraph>Every walker has a maximum weight rating. Staying within that rating protects the frame, wheels, brakes, and seat. Heavier users may need a bariatric or heavy-duty model with a wider frame and stronger construction.</Paragraph>

          <SubHeading>3. Look for Key Features for Comfort and Ease of Use</SubHeading>
          <BlogList>
            <li>Padded grips reduce pressure on the hands.</li>
            <li>Storage baskets or pouches help carry essentials safely.</li>
            <li>A seat is useful for seniors who get tired during walks or errands.</li>
            <li>Large wheels can handle outdoor paths better than small wheels.</li>
          </BlogList>

          <SubHeading>4. Test the Walker Before Use</SubHeading>
          <Paragraph>Before daily use, test the walker on the surfaces the user will actually encounter: bedroom floors, hallways, kitchen tile, sidewalks, car transitions, and thresholds. A model that feels good in a store may behave differently at home.</Paragraph>

          <SubHeading>5. Use the Walker Correctly for Safety</SubHeading>
          <Paragraph>A walker should stay close to the body. Reaching too far forward can pull the user off balance. For rollators, brakes should be locked before sitting, standing, or leaning on the frame.</Paragraph>

          <SubHeading>6. Ensure Safe Surroundings</SubHeading>
          <Paragraph>Clear loose rugs, cords, clutter, and narrow furniture paths. Walkers need predictable space. Small obstacles can catch wheels or rear tips and create a fall risk.</Paragraph>

          <SubHeading>7. Pay Attention to Fatigue</SubHeading>
          <Paragraph>Fatigue changes walking quality. If the user begins leaning, shuffling, or rushing, a walker with a seat or a planned rest routine may be safer.</Paragraph>

          <SubHeading>8. Replace the Walker When Necessary</SubHeading>
          <Paragraph>Replace worn tips, loose grips, weak brakes, damaged wheels, or bent frames. A walker is safety equipment and should not be used when parts are unstable.</Paragraph>

          <SectionHeading id="section-2">Walker Comparison Guide: Key Features to Look For</SectionHeading>
          <ComparisonTable />

          <SectionHeading id="section-3">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['What is the most stable type of walker?', 'A standard walker is usually the most stable because it has four fixed points of contact.'],
              ['Does every walker need a seat?', 'No. A seat is useful for fatigue, but it adds size and requires brake control.'],
              ['What walker is best for outdoor use?', 'A rollator with larger wheels is usually better for sidewalks and errands.'],
              ['Can insurance cover a walker?', 'Coverage varies. Ask the insurer or clinician what documentation is required.'],
              ['How do I choose the right size?', 'Measure handle height and make sure the frame fits through important doorways at home.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-4">
            <div className="flex items-center gap-3">
              <span className="text-[24px] leading-none text-[#ffc400]">💎</span>
              <h2 className="text-[16px] font-black text-black">Final Thoughts</h2>
            </div>
            <Paragraph>Choosing the right walker and using it properly can greatly enhance your mobility, independence, and quality of life. Whether you opt for a simple standard walker or a more advanced rollator, it's important to understand the different types, features, and adjustments to meet your specific needs.</Paragraph>
            <Paragraph>Always prioritize safety, and don't hesitate to consult with a healthcare professional or physical therapist for personalized advice. By following the right tips for choosing and using walkers, you can move confidently and securely, whether you're at home or on the go. For more tips on where to purchase the best walkers, check out our guide on <a className="font-black text-[#0b61a4] no-underline hover:underline" href="/articles">buying mobility aids</a></Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-5">
            <div className="flex items-center gap-3">
              <span className="text-[22px] leading-none text-[#ffc400]">🌎</span>
              <h2 className="text-[16px] font-black text-black">Reference</h2>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://jrrd.org/">Journal of Rehabilitation Research and Development, 2019.</a></li>
            </ol>
          </section>

          <SocialDots />

          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <p className="mt-8 font-manrope text-[12px] font-black text-[#1f2930]">4 Comments:</p>
            <div className="mt-6 space-y-7 border-b border-[#d8dde2] pb-8">
              {[
                ['Pam Kosh', 'Thanks for the clear checklist. I had no idea brake style mattered this much.'],
                ['Robin Dolan', 'Glad it helped. Brake comfort is one of the first things to test.'],
                ['Alex Henderson', 'We upgraded to a wider rollator for my dad and it made outdoor walks easier.'],
                ['thewalkeradvisor', 'That is a good example of matching wheel size and frame strength to the user.'],
              ].map(([name, text], index) => (
                <div className={`${index % 2 === 1 ? 'ml-8' : ''} flex gap-4`} key={name}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d8dde2] font-manrope text-[10px] font-black text-[#07364f]">{name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</div>
                  <div>
                    <p className="font-manrope text-[11px] font-black text-black">{name}</p>
                    <p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">{text}</p>
                    <button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button>
                  </div>
                </div>
              ))}
            </div>
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

export default BuyingWalkerDetail;
