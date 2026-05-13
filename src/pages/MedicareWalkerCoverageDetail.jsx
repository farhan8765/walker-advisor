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
  'Understanding Medicare coverage for walkers',
  'Eligibility for Medicare coverage',
  'Types of walkers covered by Medicare',
  'How to get Medicare coverage for a walker',
  'Tips for maximizing Medicare benefits',
  'Frequently Asked Questions',
  'Final Thoughts',
  'Reference',
];

const coverageRows = [
  ['Medicare part', 'Part B durable medical equipment'],
  ['What is covered', 'Standard walkers, rollators, and medically necessary mobility aids'],
  ['Who qualifies', 'Patients with a medical need documented by a Medicare-enrolled provider'],
  ['Approved supplier', 'Must use a Medicare-approved supplier'],
  ['Cost coverage', 'Typically 80% after deductible when requirements are met'],
  ['Replacement policy', 'Covered when medically necessary or when equipment is no longer usable'],
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

function CoverageTable() {
  return (
    <div className="mt-5 overflow-hidden border border-black font-manrope">
      <div className="grid grid-cols-[0.9fr_1.8fr] bg-[#ffc400] text-[8px] font-black leading-4 text-black">
        <div className="border-r border-black px-3 py-2">Topic</div>
        <div className="px-3 py-2">Details</div>
      </div>
      {coverageRows.map(([topic, details]) => (
        <div className="grid grid-cols-[0.9fr_1.8fr] text-[8px] font-semibold leading-4 text-[#1f2930]" key={topic}>
          <div className="border-r border-t border-black px-3 py-2">{topic}</div>
          <div className="border-t border-black px-3 py-2">{details}</div>
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

function MedicareWalkerCoverageDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Will Medicare Really Pay for Your Walker? The Truth Every Senior Should Know - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[430px]">
          <header className="pt-8 text-center">
            <h1 className="mx-auto max-w-[410px] text-[19px] font-black leading-tight text-black md:text-[21px]">Will Medicare Really Pay for Your Walker? The Truth Every Senior Should Know</h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">Many seniors miss out on walker coverage simply because they don't know the rules. Here's what Medicare actually covers, and how to qualify.</p>
            <img className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover" src={`${process.env.PUBLIC_URL}/images/doctor-talking-senior-man-indoors.webp`} alt="Doctor speaking with a senior man using a walker" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">AA</div>
            <p className="font-manrope text-[12px] font-black text-black">Amir Abbasi</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>Medicare may cover a walker when it is medically necessary and prescribed by a Medicare-enrolled provider. Coverage usually falls under Medicare Part B durable medical equipment rules and requires an approved supplier.</Paragraph>
          </section>

          <Paragraph>Walkers can be essential for safety, independence, and fall prevention. But many seniors are unsure whether Medicare pays for them, what documentation is needed, and how much they may still owe.</Paragraph>
          <Paragraph>This guide explains the basics so families can avoid missed coverage, denied claims, and unnecessary out-of-pocket costs.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[15px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-2 px-6 py-5 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
              {toc.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Understanding Medicare Coverage for Walkers</SectionHeading>
          <CoverageTable />
          <TipBox>Looking for support after a hospital stay or mobility change? Confirm Medicare rules before buying so the supplier, prescription, and paperwork line up correctly.</TipBox>

          <SectionHeading id="section-2">Eligibility for Medicare Coverage</SectionHeading>
          <Paragraph>To qualify, the walker must be medically necessary for use in the home. A doctor or qualified clinician generally needs to document why the walker is needed for daily mobility and safety.</Paragraph>
          <BlogList>
            <li>The user must have a medical condition affecting safe movement.</li>
            <li>The provider must write an order or prescription.</li>
            <li>The supplier must participate in Medicare.</li>
            <li>The walker must be appropriate for the person's condition and home use.</li>
          </BlogList>

          <SectionHeading id="section-3">Types of Walkers Covered by Medicare</SectionHeading>
          <SubHeading>1. Standard walkers</SubHeading>
          <Paragraph>Standard walkers are commonly covered when they are medically necessary for stability and fall prevention.</Paragraph>
          <SubHeading>2. Rollators with wheels</SubHeading>
          <Paragraph>Rollators may be covered when the user can safely operate brakes and the device is medically appropriate.</Paragraph>
          <SubHeading>3. Heavy-duty walkers</SubHeading>
          <Paragraph>Heavy-duty or bariatric walkers may require extra documentation showing why a standard walker is not sufficient.</Paragraph>
          <TipBox>Coverage can vary by plan and supplier. Always ask whether the exact walker model is covered before purchase.</TipBox>

          <SectionHeading id="section-4">How to Get Medicare Coverage for a Walker</SectionHeading>
          <BlogList>
            <li>Schedule a visit with a Medicare-enrolled provider.</li>
            <li>Discuss mobility limitations, falls, fatigue, pain, or unsafe walking.</li>
            <li>Ask for documentation and a written order if a walker is medically necessary.</li>
            <li>Choose a Medicare-approved DME supplier.</li>
            <li>Confirm costs, deductible status, and whether prior authorization is needed.</li>
          </BlogList>
          <TipBox>Do not buy first and assume reimbursement later. Medicare coverage usually depends on proper documentation and supplier rules.</TipBox>

          <SectionHeading id="section-5">Tips for Maximizing Medicare Benefits</SectionHeading>
          <BlogList>
            <li>Keep copies of prescriptions, visit notes, invoices, and supplier paperwork.</li>
            <li>Ask whether your Medicare Advantage plan has network restrictions.</li>
            <li>Verify that replacement or upgrade requests are medically justified.</li>
            <li>Compare supplier costs before committing.</li>
          </BlogList>

          <SectionHeading id="section-6">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['Does Medicare cover the full cost of a walker?', 'Usually not the full cost. Medicare Part B commonly covers 80% after the deductible when all requirements are met.'],
              ['What kind of walkers are covered by Medicare?', 'Standard walkers and some rollators may be covered when medically necessary and supplied through an approved DME supplier.'],
              ['Can I purchase a walker without a doctor prescription?', 'Yes, but Medicare coverage generally requires a provider order and documentation.'],
              ['Are walker accessories covered?', 'Sometimes, but only when medically necessary and allowed by the plan or supplier rules.'],
              ['Will Medicare pay for a wheelchair?', 'Wheelchairs have separate medical necessity rules and documentation requirements.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-7">
            <div className="flex items-center gap-3">
              <span className="text-[24px] leading-none text-[#ffc400]">💎</span>
              <h2 className="text-[16px] font-black text-black">Final Thoughts</h2>
            </div>
            <Paragraph>Walkers can significantly improve the quality of life for seniors by enhancing mobility and reducing fall risks. Medicare Part B offers substantial financial support for walkers, ensuring seniors can access this essential equipment. However, understanding the requirements, documentation, and process is crucial to avoid unnecessary expenses or delays.</Paragraph>
            <Paragraph>For additional information on choosing the best walker for your needs, visit <a className="font-black text-[#0b61a4] no-underline hover:underline" href="/">The Walker Advisor</a>, your trusted resource for mobility solutions and senior care advice.</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-8">
            <div className="flex items-center gap-3">
              <span className="text-[22px] leading-none text-[#ffc400]">🌎</span>
              <h2 className="text-[16px] font-black text-black">Reference</h2>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://agsjournals.onlinelibrary.wiley.com/">Journal of the American Geriatrics Society</a></li>
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://www.ncbi.nlm.nih.gov/">National Center for Biotechnology Information (NCBI).</a></li>
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

export default MedicareWalkerCoverageDetail;
