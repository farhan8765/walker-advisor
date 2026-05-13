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
  'Essential safety features in walkers for seniors',
  'Compare table: standard walker vs. rollator',
  'How to choose the right walker',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const comparisonRows = [
  ['Frame type', 'Simple fixed frame', 'Lightweight frame with wheels'],
  ['Brakes', 'Not usually included', 'Hand brakes or locking brakes'],
  ['Seat', 'No', 'Often included'],
  ['Storage', 'Minimal', 'Basket, pouch, or tray options'],
  ['Best for', 'Maximum stability', 'Longer walks and errands'],
];

const choiceRows = [
  ['Indoor recovery', 'Standard walker', 'Highest stability for short, careful movement'],
  ['Daily home use', 'Two-wheel walker', 'Easier movement while still controlled'],
  ['Outdoor errands', 'Four-wheel rollator', 'Seat, storage, brakes, and smoother movement'],
  ['Limited grip strength', 'Ergonomic handles', 'Reduces hand strain and improves control'],
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

function SimpleTable({ headers, rows }) {
  return (
    <div className="mt-5 overflow-hidden border border-black font-manrope">
      <div className={`grid ${headers.length === 3 ? 'grid-cols-[0.9fr_1fr_1.2fr]' : 'grid-cols-[0.9fr_1fr_1fr]'} bg-[#ffc400] text-[8px] font-black leading-4 text-black`}>
        {headers.map((header, index) => <div className={`${index === headers.length - 1 ? '' : 'border-r'} border-black px-3 py-2`} key={header}>{header}</div>)}
      </div>
      {rows.map((row) => (
        <div className={`grid ${headers.length === 3 ? 'grid-cols-[0.9fr_1fr_1.2fr]' : 'grid-cols-[0.9fr_1fr_1fr]'} text-[8px] font-semibold leading-4 text-[#1f2930]`} key={row[0]}>
          {row.map((cell, index) => <div className={`${index === row.length - 1 ? '' : 'border-r'} border-t border-black px-3 py-2`} key={cell}>{cell}</div>)}
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

function WalkerSafetyFeaturesDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'The Must-Have Walker Safety Features Every Senior Should Know About - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[430px]">
          <header className="pt-8 text-center">
            <h1 className="mx-auto max-w-[410px] text-[19px] font-black leading-tight text-black md:text-[21px]">The Must-Have Walker Safety Features Every Senior Should Know About</h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">Not all walkers keep you equally safe. Here are the essential safety features that can prevent falls and give seniors more confidence.</p>
            <img className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover" src={`${process.env.PUBLIC_URL}/images/TWA-BLOG8-1024x682.webp`} alt="Caregiver helping a senior hold a walker handle safely" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">AA</div>
            <p className="font-manrope text-[12px] font-black text-black">Amir Abbasi</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>A walker should do more than help someone stand. The safest walkers combine stable frames, reliable brakes, proper handle height, comfortable grips, storage control, and the right wheels or tips for the user's environment.</Paragraph>
          </section>

          <Paragraph>Walkers prevent falls only when their safety features match the user's body, home, and daily routine. A model that works well indoors may not be safe outdoors, and a rollator with wheels may be too fast for someone who needs maximum stability.</Paragraph>
          <Paragraph>This guide explains the features seniors and caregivers should check before buying or using a walker.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[15px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-2 px-6 py-5 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
              {toc.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Essential Safety Features in Walkers for Seniors</SectionHeading>
          <SubHeading>1. Sturdy and Lightweight Frame</SubHeading>
          <Paragraph>A walker should be strong enough to support the user but light enough to move safely. Aluminum frames are common because they balance durability and weight.</Paragraph>

          <SubHeading>2. Adjustable Height Settings</SubHeading>
          <Paragraph>Handles should align near the wrist crease when standing upright. Poor height can cause shoulder strain, leaning, wrist pain, and unstable posture.</Paragraph>

          <section className="mt-6 rounded-[8px] border-l-4 border-[#ffc400] bg-[#fff8df] p-4">
            <p className="font-manrope text-[10px] font-bold leading-5 text-[#1f2930]">Pro Tip: If the user bends forward, raises the shoulders, or pushes the walker too far ahead, check the handle height before assuming the walker is the wrong type.</p>
          </section>

          <SubHeading>3. Non-Slip Rubber Tips or Wheels</SubHeading>
          <Paragraph>Tips and wheels are the walker’s contact point with the floor. Worn tips, small wheels, or poor traction can turn a useful walker into a fall hazard.</Paragraph>
          <BlogList>
            <li>Replace cracked or smooth rubber tips.</li>
            <li>Choose larger wheels for outdoor paths.</li>
            <li>Check that wheels spin smoothly without wobbling.</li>
          </BlogList>

          <SubHeading>4. Ergonomic Hand Grips</SubHeading>
          <Paragraph>Comfortable grips reduce hand fatigue and help users maintain control. Foam, gel, or contoured grips can be especially helpful for arthritis or weak hands.</Paragraph>

          <SubHeading>5. Reliable Braking System</SubHeading>
          <Paragraph>Rollators should have brakes that are easy to squeeze and lock. If brakes require too much force, the user may not be able to stop safely.</Paragraph>

          <section className="mt-6 rounded-[8px] border-l-4 border-[#ffc400] bg-[#fff8df] p-4">
            <p className="font-manrope text-[10px] font-bold leading-5 text-[#1f2930]">Buyer checklist: test brake strength, handle comfort, storage placement, seat stability, and turning control before choosing a walker or rollator.</p>
          </section>

          <SubHeading>6. Foldability for Easy Storage</SubHeading>
          <Paragraph>A foldable walker is easier to transport and store, but the folding mechanism must lock securely. Loose folding joints can create instability.</Paragraph>

          <SubHeading>7. Weight Capacity</SubHeading>
          <Paragraph>Every walker has a maximum weight rating. Choose a model that supports the user comfortably and never exceed the listed capacity.</Paragraph>

          <SubHeading>8. Padded Seat and Backrest for Rollators</SubHeading>
          <Paragraph>Seats are helpful for rest breaks, but they must be stable, wide enough, and used only when brakes are locked.</Paragraph>

          <SubHeading>9. Anti-Tip Mechanism</SubHeading>
          <Paragraph>Some walkers include design features that reduce tipping risk. The best protection is still proper fit, posture, and controlled movement.</Paragraph>

          <SubHeading>10. Storage Basket or Pouch</SubHeading>
          <Paragraph>Storage should keep items centered and secure. Hanging heavy bags from handles can change balance and increase tipping risk.</Paragraph>

          <SectionHeading id="section-2">Comparison Table: Standard Walker vs. Rollator</SectionHeading>
          <SimpleTable headers={['Feature', 'Standard Walker', 'Rollator']} rows={comparisonRows} />

          <SectionHeading id="section-3">How to Choose the Right Walker</SectionHeading>
          <SimpleTable headers={['User Need', 'Best Choice', 'Why It Helps']} rows={choiceRows} />

          <SectionHeading id="section-4">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['What is the safest walker for seniors?', 'The safest walker is the one that matches the user’s balance, strength, home layout, and walking goals.'],
              ['How often should walker tips be replaced?', 'Replace tips when they become smooth, cracked, loose, or uneven. Check them monthly.'],
              ['Are rollators safe for every senior?', 'No. Rollators require brake control and should not be used by someone who needs heavy weight-bearing support.'],
              ['How do I know if walker height is correct?', 'Handles should usually line up near the wrist crease when the user stands upright with arms relaxed.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-5">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>Selecting the right walker is essential for ensuring safety, comfort, and mobility for seniors. A walker with key safety features like a sturdy frame, adjustable height, ergonomic grips, and a reliable braking system can make a significant difference in maintaining balance and independence.</Paragraph>
            <Paragraph>Invest in a high-quality walker tailored to specific mobility needs to enhance a senior's quality of life!</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-6">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9482089/">Circumstances of falls among older adult walker users in long-term care facilities</a></li>
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8742690/">Older Adult's Perceptions About Participation and Safety Using Walkers</a></li>
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

export default WalkerSafetyFeaturesDetail;
