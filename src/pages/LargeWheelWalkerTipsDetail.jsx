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
  'Key tips for choosing and using walkers',
  'Walker comparison guide',
  'Frequently asked questions',
  'Final thoughts',
  'Reference',
];

const comparisonRows = [
  ['Weight capacity', 'Lower (up to 250 lbs)', 'Medium to high (up to 350 lbs)', 'Higher (up to 500 lbs)', 'Varies'],
  ['Wheels', 'None or 2', '4 wheels', '4 wheels (larger)', '2 or 4 wheels'],
  ['Brakes', 'No', 'Yes, hand brakes', 'Yes, heavy-duty', 'No or minimal'],
  ['Height adjustment', 'Yes', 'Yes', 'Yes', 'Yes'],
  ['Seat', 'No', 'Yes', 'Yes', 'Optional'],
  ['Storage', 'No', 'Baskets or bags', 'Larger storage', 'Portable storage'],
  ['Portability', 'Not foldable', 'Usually foldable', 'Typically non-foldable', 'Highly portable'],
  ['Best for', 'Home use, max stability', 'Active, mobile users', 'Bariatric needs', 'Travel and tight spaces'],
];

const relatedArticles = [
  {
    image: 'unnamed-768x512.png',
    title: 'Social Activities for Older Adults: The Best Ways to Stay Connected, Active, and Happy',
    description: 'A stronger social routine can support confidence, movement, and daily independence.',
  },
  {
    image: 'image-2-1-768x429.png',
    title: 'Can Heart Issues Increase Fall Risk in Seniors?',
    description: 'Your heart, blood flow, and medications can quietly affect balance and fall risk.',
  },
  {
    image: 'image-11-768x429.png',
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
  return (
    <section className="mt-4 rounded-[8px] border-l-4 border-[#ffc400] bg-[#fff8df] p-4">
      <p className="font-manrope text-[10px] font-bold leading-5 text-[#1f2930]">{children}</p>
    </section>
  );
}

function ComparisonTable() {
  const headers = ['Feature', 'Standard', 'Rollator', 'Bariatric', 'Folding'];
  return (
    <div className="mt-5 overflow-x-auto">
      <div className="min-w-[520px] overflow-hidden rounded-[8px] border border-[#d8dde2] font-manrope text-[9px] font-medium text-[#1f2930]">
        <div className="grid grid-cols-5 bg-[#ffc400]">
          {headers.map((h, i) => (
            <div className={`px-3 py-2 font-black text-black${i > 0 ? ' border-l border-[#d8dde2]' : ''}`} key={h}>{h}</div>
          ))}
        </div>
        {comparisonRows.map((row, ri) => (
          <div className={`grid grid-cols-5${ri % 2 === 0 ? ' bg-white' : ' bg-[#f9f9f9]'}`} key={row[0]}>
            {row.map((cell, ci) => (
              <div className={`px-3 py-2 border-t border-[#d8dde2]${ci > 0 ? ' border-l border-[#d8dde2]' : ''}`} key={`${ri}-${ci}`}>{cell}</div>
            ))}
          </div>
        ))}
      </div>
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

function LargeWheelWalkerTipsDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Tips for Choosing and Using Walkers | The Walker Advisor';
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
            <img className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover" src={`${process.env.PUBLIC_URL}/images/twa-blog4.jpg`} alt="Buying a Walker? Don't Make a Move Until You Read This!" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">RD</div>
            <p className="font-manrope text-[12px] font-black text-black">Robin Dolan</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>Walkers are essential mobility aids that help seniors and individuals with physical impairments stay independent and move safely. Choosing the right model and learning to use it correctly makes a real difference in comfort, confidence, and fall prevention.</Paragraph>
          </section>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[15px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-2 px-6 py-5 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
              {toc.map((item, index) => (
                <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>
              ))}
            </ol>
          </nav>

          {/* Section 1 */}
          <SectionHeading id="section-1">Key Tips for Choosing and Using Walkers</SectionHeading>
          <BlogList>
            <li>Ensure the right fit</li>
            <li>Consider the walker's weight capacity</li>
            <li>Look for key features for comfort and ease of use</li>
            <li>Test the walker before regular use</li>
            <li>Use the walker correctly for safety</li>
            <li>Ensure safe surroundings</li>
            <li>Perform regular maintenance</li>
            <li>Replace the walker when necessary</li>
          </BlogList>

          <SubHeading>1. Ensure the Right Fit</SubHeading>
          <Paragraph>The walker should be at the right height, with the top of the handles reaching the user's wrist crease when their arms hang naturally at their sides. Proper height reduces strain on the wrists, shoulders, and back while promoting upright posture.</Paragraph>
          <TipBox>Tip: Set the handles so the elbows bend about 15 degrees when gripping. If you're unsure, ask a physical therapist or pharmacist to check the fit before daily use.</TipBox>

          <SubHeading>2. Consider the Walker's Weight Capacity</SubHeading>
          <Paragraph>Every walker has a rated weight limit. Choose one rated above the user's actual weight for added stability and longer frame life. Bariatric users should look specifically for heavy-duty models built for higher loads.</Paragraph>
          <TipBox>Tip: Always check the manufacturer's weight rating before purchasing. Exceeding the limit can cause the frame, wheels, or brakes to fail without warning.</TipBox>

          <SubHeading>3. Look for Key Features for Comfort and Ease of Use</SubHeading>
          <Paragraph>Some features significantly improve the daily experience of using a walker:</Paragraph>
          <BlogList>
            <li>Padded handles reduce hand pressure, especially for those with arthritis.</li>
            <li>Hand brakes on rollators let users control speed and lock the walker before sitting.</li>
            <li>Storage baskets or pouches free the hands and make errands easier.</li>
            <li>A built-in seat is valuable for users who need to rest during longer outings.</li>
          </BlogList>
          <TipBox>Tip: Match features to lifestyle. A user who walks outdoors regularly benefits more from a rollator with large wheels than a basic indoor walker.</TipBox>

          <SubHeading>4. Test the Walker Before Use</SubHeading>
          <Paragraph>Try the walker on the actual surfaces the user will encounter: hardwood, carpet, tile, and outdoor pavement all behave differently under wheels and rubber tips. Also test how the walker folds and unfolds, especially if portability matters.</Paragraph>
          <TipBox>Tip: Spend 10 to 15 minutes testing on real-world surfaces before committing to a model. A stiff folding mechanism or rough wheel roll can become a daily frustration.</TipBox>

          <SubHeading>5. Use the Walker Correctly for Safety</SubHeading>
          <BlogList>
            <li>Move the walker a few inches forward first, then step into it.</li>
            <li>Take small, steady steps and avoid rushing on uneven surfaces.</li>
            <li>Stand upright and use the walker for support — avoid leaning heavily forward.</li>
          </BlogList>
          <TipBox>Tip: Practice in a familiar, controlled space before taking the walker outdoors or into crowded environments.</TipBox>

          <SubHeading>6. Ensure Safe Surroundings</SubHeading>
          <Paragraph>Clear the home of loose rugs, cords, and cluttered furniture paths. Good lighting in hallways and bathrooms is equally important — motion-sensor night lights can prevent nighttime falls. Outdoors, plan routes that avoid wet surfaces, gravel, or uneven pavement.</Paragraph>
          <TipBox>Tip: Avoid stairs and steep slopes unless the walker is specifically designed for them. Stick to smooth, flat paths whenever possible.</TipBox>

          <SubHeading>7. Perform Regular Maintenance</SubHeading>
          <Paragraph>Check the walker regularly for loose screws, worn rubber tips, damaged wheels, and brake function. A quick inspection before each use takes only seconds and can prevent falls caused by equipment failure.</Paragraph>
          <TipBox>Tip: Replace rubber tips as soon as they show significant wear. Worn tips reduce traction and increase the risk of slipping.</TipBox>

          <SubHeading>8. Replace the Walker When Necessary</SubHeading>
          <Paragraph>A walker that has become wobbly, hard to adjust, or structurally compromised should be replaced rather than repaired. Safety equipment needs to be dependable, not held together with workarounds.</Paragraph>
          <TipBox>Tip: If any part — wheels, brakes, grips, or the frame itself — shows signs of significant wear or damage, replace it promptly rather than continuing to use an unsafe device.</TipBox>

          {/* Section 2 */}
          <SectionHeading id="section-2">Walker Comparison Guide</SectionHeading>
          <ComparisonTable />
          <Paragraph>When evaluating models, weigh factors like weight capacity, portability, and comfort features together. The right walker depends on where it will be used, how much support the user needs, and what daily activities it must accommodate.</Paragraph>
          <Paragraph>If you're uncertain which type fits your situation best, our <a className="text-[#0b61a4] no-underline hover:underline" href="/the-complete-guide-to-walker-and-rollator-types-which-one-fits-you-best">complete guide to walker and rollator types</a> covers each option in detail.</Paragraph>

          {/* Section 3 - FAQ */}
          <SectionHeading id="section-3">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['What is the most stable type of walker?', 'Standard walkers offer maximum stability.'],
              ['How often should I maintain my walker?', 'Perform checks every few weeks and clean regularly.'],
              ['What not to do when using a walker?', "Don't use the walker to pull yourself up from sitting to standing.\nDon't bend your back to lean into the walker.\nDon't step forward with your foot until all four feet of the walker are on the ground.\nDon't slide a rubber-footed walker or lift-step a wheeled walker."],
              ['What should I look for when buying a walker?', 'Indoor or outdoor use and stability needs. What do you need the most help with? ...\nFit of the walker or rollator. Before you purchase a walker or rollator, you need to make sure it can accommodate your height and weight. ...\nGrips.\nPortability and storage.'],
              ['Can I customize my walker?', 'Yes, with accessories like glide caps and storage pouches.'],
              ['What is the proper technique for walking with a walker?', 'Move the walker forward first. Step in with the weaker or injured leg. Then bring the stronger leg forward past the weaker one. This three-step pattern — walker, weak leg, strong leg — provides safe, controlled movement.'],
              ['Which leg goes first with a walker?', 'The weaker or injured leg goes first. Make sure all tips or wheels are touching the ground before taking any step.'],
              ['How do I choose the right walker?', 'Choose a frame that supports your weight, handles that reach the right height, and a seat width that allows comfortable sitting with feet flat on the floor if a seat is included.'],
              ['Why use The Walker Advisor?', 'We provide independent, practical reviews and guides based on real user needs — not manufacturer claims — so you can make a confident, informed decision.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 whitespace-pre-line font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          {/* Section 4 - Final Thoughts */}
          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-4">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>The right walker, properly fitted and consistently maintained, can meaningfully improve mobility, confidence, and independence. Whether the right choice is a basic standard walker or a four-wheel rollator with a seat, the decision should be based on the user's actual needs — not what looks convenient in a store.</Paragraph>
            <Paragraph>When in doubt, consult a physical therapist or occupational therapist for a professional assessment. For guidance on where to find quality walkers, see our guide on <a className="font-black text-[#0b61a4] no-underline hover:underline" href="/the-7-best-places-to-buy-walkers-for-seniors">the best places to buy walkers for seniors</a>.</Paragraph>
          </section>

          {/* Section 5 - Reference */}
          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-5">
            <ArticleIconHeading type="references">Reference</ArticleIconHeading>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://www.rehab.research.va.gov/jour/jourindx.html" target="_blank" rel="noopener noreferrer"><em>Journal of Rehabilitation Research and Development</em>, 2019.</a></li>
            </ol>
          </section>

          <SocialDots />

          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <p className="mt-8 font-manrope text-[12px] font-black text-[#1f2930]">4 Comments:</p>
            <div className="mt-6 space-y-7 border-b border-[#d8dde2] pb-8">
              {[
                ['Pam O\'Neal', 'I had no idea the handle height made such a difference. My walker was set too high and I kept getting shoulder pain. Fixed it and it changed everything.'],
                ['Robin Dolan', 'Handle height is one of the most common issues we see. Glad fixing it helped — it really does make a significant difference.'],
                ['Arvin Redenbacher', 'Very relevant topic. There is always so much choice and it is difficult to figure out what works, especially with the budget. Thank you for the detailed write-up.'],
                ['thewalkeradvisor', 'Thank you, Arvin. That is exactly why we try to break things down by feature and use case rather than just listing products.'],
              ].map(([name, text], index) => (
                <div className={`${index % 2 === 1 ? 'ml-8' : ''} flex gap-4`} key={name + index}>
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

export default LargeWheelWalkerTipsDetail;
