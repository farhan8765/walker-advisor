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
  'Why walkers are essential for seniors',
  'Walker buying guide: features to look for',
  'How to properly use a walker',
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

function DiamondIcon() {
  return (
    <svg className="h-7 w-7 shrink-0 text-[#ffc400]" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M7 6h18l5 7-14 15L2 13 7 6Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      <path d="M7 6l4 7 5-7 5 7 4-7M2 13h28M11 13l5 15 5-15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="h-7 w-7 shrink-0 text-[#ffc400]" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M5 14h7l2-5h5l2 5h6M8 22h6l2-4 3 2 1 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
    </svg>
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

function WalkerMistakesDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Most People Use Walkers Wrong. Are You Making These Mistakes? - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[430px]">
          <header className="pt-8 text-center">
            <h1 className="mx-auto max-w-[410px] text-[19px] font-black leading-tight text-black md:text-[21px]">Most People Use Walkers Wrong. Are You Making These Mistakes?</h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">Using a walker seems simple, until you realize most people do it incorrectly. Learn the right way before it affects your safety.</p>
            <img className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover" src={`${process.env.PUBLIC_URL}/images/injured-man-doing-physiotherapy-exercises-walking-1-scaled.webp`} alt="Person using a walker in a rehabilitation room" />
          </header>

          <div className="mt-8 flex items-center gap-6">
            <img className="h-20 w-20 rounded-full object-cover" src={`${process.env.PUBLIC_URL}/images/syed-ali_avatar-300x300.webp`} alt="Syed Ali" />
            <p className="font-manrope text-[32px] font-bold leading-none text-black">Syed Ali</p>
          </div>

          <section className="mt-14 rounded-[18px] bg-[#f3f3f3] p-6">
            <h2 className="font-manrope text-[30px] font-bold leading-9 text-black">key summary</h2>
            <p className="mt-5 font-manrope text-[18px] font-normal leading-7 text-[#303030]">
              Walkers improve mobility and independence for those facing challenges in walking. Whether recovering from surgery or dealing with balance issues, a walker can significantly enhance safety. Yet, learning the proper techniques is vital to prevent falls and injuries. In this blog, we will cover the essential steps for using a walker effectively, along with safety tips.. Key Questions to Consider: Who can benefit the most from using a walker? What are the main safety concerns when using a walker? How can you make sure your walker fits correctly? These are just some of the questions we'll address as we explore this topic.
            </p>
          </section>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[15px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-2 px-6 py-5 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
              {toc.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Why Walkers Are Essential for Seniors</SectionHeading>
          <Paragraph>Walkers provide seniors with the stability, safety, and independence they need for daily movement. Whether recovering from surgery, managing arthritis, or simply needing balance support, walkers reduce fall risks and improve confidence.</Paragraph>
          <SubHeading>Benefits of Using Walkers:</SubHeading>
          <BlogList>
            <li>Improve balance and prevent falls.</li>
            <li>Provide mobility support during recovery.</li>
            <li>Enhance confidence for outdoor and indoor walking.</li>
            <li>Reduce strain on joints and muscles.</li>
          </BlogList>
          <SubHeading>Who Can Benefit the Most From Using a Walker?</SubHeading>
          <BlogList>
            <li>Seniors with balance issues.</li>
            <li>Individuals recovering from surgery.</li>
            <li>People with arthritis or joint pain.</li>
            <li>Those needing extra stability for walking.</li>
          </BlogList>
          <Paragraph>A study published in the <a className="text-[#0b61a4] no-underline hover:underline" href="https://journals.humankinetics.com/view/journals/japa/japa-overview.xml">Journal of Aging and Physical Activity</a> shows that seniors who use walkers correctly experience a 40% reduction in fall risk.</Paragraph>
          <Paragraph>For a detailed guide on different walker options, check out our article: <a className="text-[#0b61a4] no-underline hover:underline" href="/the-complete-guide-to-walker-and-rollator-types-which-one-fits-you-best">Types of Medical Walkers and Rollators: A Comprehensive Guide.</a></Paragraph>

          <SectionHeading id="section-2">Walker Buying Guide – Features to Look For</SectionHeading>
          <Paragraph>Choosing the best walker for seniors depends on specific needs. Here’s what to consider:</Paragraph>
          <ol className="mt-6 space-y-5 pl-5 font-manrope text-[18px] font-normal leading-7 text-[#303030]">
            <li><strong>Weight Capacity:</strong> Ensure it supports your weight. Bariatric walkers are ideal for heavier users.</li>
            <li><strong>Adjustability:</strong> Adjustable handles provide a custom fit for comfort and safety.</li>
            <li><strong>Portability:</strong> Foldable walkers are easy to store and travel with.</li>
            <li><strong>Wheels and Brakes:</strong> Larger wheels offer better stability outdoors, while hand brakes add control.</li>
            <li><strong>Storage Options:</strong> Look for built-in baskets or pouches for added convenience.</li>
            <li><strong>Comfort Features:</strong> Cushioned seats and backrests make longer walks easier.</li>
          </ol>
          <TipBox>Looking to buy a walker? Check out our guide on <a className="text-[#0b61a4] no-underline hover:underline" href="/the-7-best-places-to-buy-walkers-for-seniors">Where to Buy Walkers for Seniors: A Comprehensive Guide to Mobility Aids.</a></TipBox>

          <SectionHeading id="section-3">How to Properly Use a Walker: Safety Tips and Techniques</SectionHeading>
          <SubHeading>Step 1: Adjust the Height for Comfort and Safety</SubHeading>
          <BlogList>
            <li>Stand Upright: Wear your regular walking shoes and stand tall.</li>
            <li>Handle Alignment: The walker handles should align with the crease of your wrists when your arms hang naturally by your sides.</li>
            <li>Elbow Position: Your elbows should bend slightly (15-20 degrees) when gripping the handles.</li>
          </BlogList>
          <Paragraph>How Can You Make Sure Your Walker Fits Correctly? Walkers set at an improper height increase fall risks by 22%, according to the <a className="text-[#0b61a4] no-underline hover:underline" href="https://academic.oup.com/gerontologist">Journal of Gerontology</a>. Always test adjustments before prolonged use.</Paragraph>
          <SubHeading>Step 2: Position the Walker Correctly</SubHeading>
          <BlogList>
            <li>Place the walker directly in front of you—not too far ahead.</li>
            <li>Ensure all four legs (or wheels) are firmly on the ground before moving forward.</li>
            <li>Keep your body centered between the handles to avoid tipping forward or sideways.</li>
          </BlogList>
          <Paragraph>Quick Check:</Paragraph>
          <BlogList>
            <li>Too far forward? You may lose balance and overreach.</li>
            <li>Too close? It can cause tripping or awkward steps.</li>
          </BlogList>
          <SubHeading>Step 3: Walk with the Right Technique</SubHeading>
          <Paragraph>Method for Standard Walkers (No Wheels):</Paragraph>
          <ol className="mt-4 list-decimal space-y-1 pl-6 font-manrope text-[18px] font-normal leading-7 text-[#303030]">
            <li>Push the Walker Forward: Move it a short distance ahead (6–12 inches).</li>
            <li>Step Forward with the Weaker Leg First: Use the walker to support your weight.</li>
            <li>Follow with the Stronger Leg: Move it in line with the weaker leg.</li>
            <li>Repeat the Motion: Maintain steady, controlled movements.</li>
          </ol>
          <Paragraph>Method for Rolling Walkers (Rollators):</Paragraph>
          <ol className="mt-4 list-decimal space-y-1 pl-6 font-manrope text-[18px] font-normal leading-7 text-[#303030]">
            <li>Engage Brakes Before Moving: Ensure the wheels are locked when starting.</li>
            <li>Push the Walker While Walking: Roll it slightly ahead as you step.</li>
            <li>Walk Naturally: Avoid pushing too fast to maintain balance.</li>
            <li>Use Hand Brakes When Stopping: Prevent rolling on uneven surfaces.</li>
          </ol>
          <Paragraph>In a study published in <a className="text-[#0b61a4] no-underline hover:underline" href="https://academic.oup.com/ageing">Age and Ageing</a>, seniors using walkers with brakes experienced 35% fewer falls outdoors due to increased control during movement.</Paragraph>
          <SubHeading>Step 4: Turning and Maneuvering Safely</SubHeading>
          <BlogList>
            <li>Standard Walker Users: Lift the walker slightly to turn—don’t twist your body.</li>
            <li>Rolling Walker Users: Turn gradually, keeping the wheels on the ground for smooth movement.</li>
            <li>Narrow Spaces: Fold one side of the walker inward to pass through tight areas like doorways.</li>
          </BlogList>
          <SubHeading>Step 5: Sitting and Standing with a Walker</SubHeading>
          <SubHeading>Sitting Down:</SubHeading>
          <ol className="mt-4 list-decimal space-y-1 pl-6 font-manrope text-[18px] font-normal leading-7 text-[#303030]">
            <li>Back up until your legs touch the chair.</li>
            <li>Keep the walker steady and do not use it to support your descent.</li>
            <li>Place both hands on the chair’s armrests and sit down slowly.</li>
          </ol>
          <SubHeading>Standing Up:</SubHeading>
          <ol className="mt-4 list-decimal space-y-1 pl-6 font-manrope text-[18px] font-normal leading-7 text-[#303030]">
            <li>Place both hands on the armrests of the chair and push yourself up.</li>
            <li>Grab the walker’s handles only after you’re fully standing.</li>
          </ol>
          <SubHeading>Step 6: Navigating Stairs (If Necessary)</SubHeading>
          <Paragraph>If using a walker on stairs cannot be avoided:</Paragraph>
          <ol className="mt-4 list-decimal space-y-1 pl-6 font-manrope text-[18px] font-normal leading-7 text-[#303030]">
            <li>Fold the walker and carry it in one hand.</li>
            <li>Use a railing for support with the other hand.</li>
            <li>Ask for assistance if balance is an issue.</li>
          </ol>
          <TipBox>Note: Most walkers are not designed for stairs. Use ramps whenever possible.</TipBox>

          <SectionHeading id="section-4">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['What is the best walker for seniors?', 'Lightweight rollators are ideal for active seniors, while bariatric walkers suit heavier users.'],
              ['How do I adjust the height of a walker?', 'Align handles with wrists and check elbow bends slightly.'],
              ['Are walkers suitable for outdoor use?', 'Yes, models with large wheels perform well on uneven surfaces.'],
              ['How often should I replace my walker?', 'Replace if the frame, brakes, or wheels show signs of wear.'],
              ['What should you not do with a walker?', ['Don’t use the walker to pull yourself up from sitting to standing.', 'Don’t bend your back to lean into the walker.', 'Don’t step forward with your foot until all four feet of the walker are on the ground.', 'Don’t slide a rubber-footed walker or lift-step a wheeled walker.']],
              ['Which Leg Goes First When Using a Walker?', 'Start with the weaker leg and then move the stronger leg forward.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                {Array.isArray(answer) ? (
                  <ul className="mt-2 list-disc space-y-1 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">
                    {answer.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : (
                  <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
                )}
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-5">
            <div className="flex items-center gap-3">
              <DiamondIcon />
              <h2 className="text-[16px] font-black text-black">Final Thoughts</h2>
            </div>
            <Paragraph>Using a walker properly can transform daily life by enhancing mobility and safety. By following these guidelines and tips, you can boost your confidence, independence, and quality of life. Remember, small adjustments and consistent practice make a big difference.</Paragraph>
            <Paragraph>Don't hesitate to seek advice from a physical therapist for personalized support and keep improving your technique!</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-6">
            <div className="flex items-center gap-3">
              <GlobeIcon />
              <h2 className="text-[16px] font-black text-black">Reference</h2>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://academic.oup.com/gerontologist">Journal of Gerontology - Study on the popularity and benefits of rolling walkers.</a></li>
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://academic.oup.com/ageing">Age and Ageing - Research on the role of hand brakes in improving walker safety.</a></li>
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://academic.oup.com/ptj">Journal of Physical Therapy - Findings on adjustable rollators improving posture and mobility.</a></li>
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

export default WalkerMistakesDetail;
