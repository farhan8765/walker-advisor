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
  'Choosing the right walker for small spaces',
  'Optimizing home layout for walker use',
  'Safe maneuvering techniques in tight spaces',
  'Storage solutions for walkers when not in use',
  'Maintaining and repairing your walker',
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

function SmallHomeWalkerDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Struggling with a Walker in a Small Home? Try These Space-Saving Hacks - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[430px]">
          <header className="pt-8 text-center">
            <h1 className="mx-auto max-w-[410px] text-[19px] font-black leading-tight text-black md:text-[21px]">Struggling with a Walker in a Small Home? Try These Space-Saving Hacks</h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">Tight spaces don't have to limit your mobility. These smart tips make using a walker in small homes safer and easier.</p>
            <img className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover" src={`${process.env.PUBLIC_URL}/images/twa-blogg.webp`} alt="Senior woman holding a walker in a small home" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">SA</div>
            <p className="font-manrope text-[12px] font-black text-black">Syed Ali</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>Small homes, narrow hallways, and crowded rooms can make walker use feel difficult. The solution is not only a smaller walker. It is a safer layout, better turning habits, clear pathways, and smart storage choices that keep the walker accessible without blocking daily movement.</Paragraph>
          </section>

          <Paragraph>Using a walker at home should make life easier, not more stressful. A compact apartment, bedroom, or bathroom can still be walker-friendly when furniture is placed carefully and the walker matches the user's needs.</Paragraph>
          <Paragraph>Before buying a new walker, look at the home environment. Measure doorways, remove clutter, check rugs, and decide where the walker will be parked when it is not being used.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[15px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-2 px-6 py-5 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
              {toc.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Choosing the Right Walker for Small Spaces</SectionHeading>
          <Paragraph>The best walker for a small home is stable enough for support but compact enough to move through doorways, around furniture, and into bathrooms without constant lifting or bumping.</Paragraph>
          <SubHeading>Best Walker Types for Small Homes</SubHeading>
          <BlogList>
            <li><strong>Standard walkers:</strong> good for maximum stability but may require lifting.</li>
            <li><strong>Two-wheel walkers:</strong> easier to slide forward in hallways and bedrooms.</li>
            <li><strong>Narrow rollators:</strong> useful when the user needs wheels, brakes, and a seat.</li>
            <li><strong>Folding walkers:</strong> helpful when storage space is limited.</li>
          </BlogList>
          <SubHeading>Check These Measurements</SubHeading>
          <BlogList>
            <li>Doorway width, especially bathroom and bedroom doors.</li>
            <li>Hallway turning space.</li>
            <li>Distance around the bed, sofa, and dining table.</li>
            <li>Storage spot where the walker can stand without creating a trip hazard.</li>
          </BlogList>
          <TipBox>A walker that feels perfect in a store can be awkward at home. Measure the narrowest spaces before choosing a model.</TipBox>

          <SectionHeading id="section-2">Optimizing Home Layout for Walker Use</SectionHeading>
          <SubHeading>Decluttering Essentials</SubHeading>
          <BlogList>
            <li>Remove loose shoes, baskets, cords, and floor decorations.</li>
            <li>Keep daily items at waist height so the user does not need to bend.</li>
            <li>Move small tables away from main walking paths.</li>
            <li>Use wall hooks or shelves instead of floor storage.</li>
          </BlogList>
          <SubHeading>Furniture Adjustments</SubHeading>
          <BlogList>
            <li>Leave a clear path from bed to bathroom.</li>
            <li>Angle chairs so the walker can approach straight on.</li>
            <li>Choose stable chairs with arms for easier sitting and standing.</li>
            <li>Keep frequently used rooms open and simple.</li>
          </BlogList>
          <SubHeading>Lighting Improvements</SubHeading>
          <Paragraph>Good lighting reduces hesitation and helps seniors see rugs, thresholds, pets, and furniture edges. Add night lights in hallways and bathrooms, and keep switches easy to reach.</Paragraph>

          <SectionHeading id="section-3">Safe Maneuvering Techniques in Tight Spaces</SectionHeading>
          <SubHeading>Turning Methods That Work</SubHeading>
          <Paragraph>Turn slowly with small steps instead of twisting the walker sharply. Keep both hands on the grips and stay inside the walker frame as much as possible.</Paragraph>
          <BlogList>
            <li>Move the walker a few inches at a time.</li>
            <li>Step with the weaker leg first if advised by a clinician.</li>
            <li>Avoid backing up unless there is no safer option.</li>
            <li>Use brakes before sitting if the walker has wheels.</li>
          </BlogList>
          <SubHeading>Bathroom Safety Tips</SubHeading>
          <BlogList>
            <li>Remove bath mats that slide or bunch up.</li>
            <li>Add grab bars near the toilet and shower.</li>
            <li>Use a raised toilet seat if standing is difficult.</li>
            <li>Keep towels and toiletries within easy reach.</li>
          </BlogList>
          <SubHeading>Kitchen Safety</SubHeading>
          <BlogList>
            <li>Carry items in a walker basket or tray instead of holding them by hand.</li>
            <li>Keep heavy cookware on easy-access shelves.</li>
            <li>Use non-slip footwear when standing on tile.</li>
          </BlogList>

          <SectionHeading id="section-4">Storage Solutions for Walkers When Not in Use</SectionHeading>
          <div className="mt-4 overflow-hidden rounded-[7px] border border-black/20">
            <table className="w-full border-collapse font-manrope text-[10px]">
              <thead className="bg-[#ffc400] text-black">
                <tr>
                  <th className="border border-black/20 px-3 py-2 text-left">Storage Option</th>
                  <th className="border border-black/20 px-3 py-2 text-left">Best For</th>
                  <th className="border border-black/20 px-3 py-2 text-left">Tip</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Fold beside a chair', 'Daily access', 'Keep brakes locked'],
                  ['Wall corner parking', 'Small bedrooms', 'Avoid blocking outlets'],
                  ['Entryway spot', 'Leaving home', 'Keep path clear'],
                  ['Closet storage', 'Backup walker', 'Store upright if possible'],
                  ['Bedside parking', 'Nighttime use', 'Keep lights nearby'],
                ].map((row) => (
                  <tr className="odd:bg-white even:bg-[#f7f7f7]" key={row[0]}>
                    {row.map((cell) => <td className="border border-black/20 px-3 py-2" key={cell}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionHeading id="section-5">Maintaining and Repairing Your Walker</SectionHeading>
          <SubHeading>Regular Checks</SubHeading>
          <BlogList>
            <li>Check rubber tips for wear.</li>
            <li>Make sure wheels roll smoothly.</li>
            <li>Test brakes before every outing.</li>
            <li>Tighten loose screws or knobs.</li>
            <li>Replace worn grips if hands slip.</li>
          </BlogList>
          <SubHeading>When to Replace Parts</SubHeading>
          <Paragraph>Replace walker tips, wheels, brake cables, or hand grips as soon as they become worn. A small repair can prevent a serious fall.</Paragraph>

          <SectionHeading>Additional Accessories</SectionHeading>
          <SubHeading>Walker Basket</SubHeading>
          <Paragraph>A basket helps carry small items without using the hands. It should be centered and lightweight so the walker does not tip.</Paragraph>
          <SubHeading>Walker Tray</SubHeading>
          <Paragraph>A tray can help move a cup or plate short distances. Use it only on flat surfaces and avoid carrying hot liquids in crowded spaces.</Paragraph>
          <SubHeading>Clip-On Lights</SubHeading>
          <Paragraph>Small lights can improve visibility during night bathroom trips or dim hallway walking.</Paragraph>

          <SectionHeading>Emergency Preparedness</SectionHeading>
          <Paragraph>Keep a phone or medical alert device within reach. Seniors who live alone should have a plan for falls, power outages, and blocked pathways.</Paragraph>
          <BlogList>
            <li>Keep emergency numbers near the phone.</li>
            <li>Use non-slip footwear indoors.</li>
            <li>Store a flashlight near the bed.</li>
            <li>Tell caregivers where the walker is parked at night.</li>
          </BlogList>

          <SectionHeading id="section-6">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['What is the best walker for a small space?', 'A narrow two-wheel walker or compact rollator often works well, but the safest choice depends on balance, doorway width, and turning space.'],
              ['How much space does a walker need?', 'The walker should pass through doorways comfortably and allow the user to turn without twisting or lifting the frame awkwardly.'],
              ['Can you use a walker in a small bathroom?', 'Yes, but rugs should be removed, grab bars should be added, and the path to the toilet or shower should stay clear.'],
              ['How do I make my home safer for walker use?', 'Remove clutter, improve lighting, secure rugs, widen walking paths, and keep everyday items within easy reach.'],
              ['Are folding walkers better for small homes?', 'They can be helpful for storage, but stability and proper fit should still come first.'],
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
            <Paragraph>Choosing the best walker for seniors in small homes requires careful consideration of space constraints, mobility needs, and safety features. When selecting a walker, focus on factors such as frame width, foldability, weight capacity, and adjustability. Ultra-narrow folding walkers, space-saving rollators, and convertible walker-cane hybrids are excellent options for compact living spaces. Don't overlook accessories like LED lights, modular storage, and safety features to enhance usability and comfort.</Paragraph>
            <Paragraph>By implementing the strategies outlined in this guide and prioritizing proper setup, technique, and regular maintenance, you can transform small-space walker use from challenging to functional. Ultimately, the right walker can significantly improve a senior's independence, safety, and quality of life, even in small living environments. Consult with healthcare professionals and consider trying different models to find the perfect fit for your specific needs and home layout.</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-8">
            <div className="flex items-center gap-3">
              <span className="text-[22px] leading-none text-[#ffc400]">🌎</span>
              <h2 className="text-[16px] font-black text-black">Reference</h2>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://www.arthritis.org/health-wellness/healthy-living/managing-pain/joint-protection/walking-aids">Arthritis Foundation Recommendations</a></li>
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://www.researchgate.net/publication/7909503_Socially_assistive_walkers_Research_trends_and_prospects">Socially Assistive Walkers</a></li>
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/23774283/">Factors influencing the size of activity spaces for people who use mobility devices</a></li>
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

export default SmallHomeWalkerDetail;
