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
  'What are medical walkers and rollators?',
  'Types of walkers and their features',
  'Rollators: a step up in mobility assistance',
  'Choosing the right mobility aid: walker vs. rollator',
  'Frequently Asked Questions',
  'Final Thoughts',
];

const comparisonRows = [
  ['Level of mobility', 'Best for individuals who need strong stability standing still', 'Ideal for seniors who walk around and need more speed or support outdoors'],
  ['Type of terrain', 'Best for flat indoor use', 'Better outdoors, sidewalks, shopping areas, and uneven surfaces'],
  ['User strength and balance', 'Requires more upper-body effort because it must be lifted or advanced', 'Provides smoother movement with wheels, braking control, and a seat'],
  ['Comfort needs', 'Typically does not offer a seat or storage', 'Often includes a seat or basket for daily use'],
];

const relatedArticles = [
  {
    image: 'image-2-1.webp',
    title: 'Can Heart Issues Increase Fall Risk in Seniors?',
    description: 'Your heart, blood flow, and medications can quietly affect balance and fall risk.',
  },
  {
    image: 'twa-blog11-1024x683.webp',
    title: 'Social Activities for Older Adults: The Best Ways to Stay Connected, Active, and Happy',
    description: 'A stronger social routine can support confidence, movement, and daily independence.',
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
      <div className="grid grid-cols-[0.9fr_1.15fr_1.15fr] bg-[#ffc400] text-[8px] font-black leading-4 text-black">
        <div className="border-r border-black px-3 py-2">Feature</div>
        <div className="border-r border-black px-3 py-2">Walker</div>
        <div className="px-3 py-2">Rollator</div>
      </div>
      {comparisonRows.map(([feature, walker, rollator]) => (
        <div className="grid grid-cols-[0.9fr_1.15fr_1.15fr] text-[8px] font-semibold leading-4 text-[#1f2930]" key={feature}>
          <div className="border-r border-t border-black px-3 py-2">{feature}</div>
          <div className="border-r border-t border-black px-3 py-2">{walker}</div>
          <div className="border-t border-black px-3 py-2">{rollator}</div>
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

function WalkerRollatorTypesDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'The Complete Guide to Walker & Rollator Types, Which One Fits You Best? - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[430px]">
          <header className="pt-8 text-center">
            <h1 className="mx-auto max-w-[410px] text-[19px] font-black leading-tight text-black md:text-[21px]">The Complete Guide to Walker & Rollator Types, Which One Fits You Best?</h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">From basic frames to deluxe rollators, here is how to choose the mobility aid that matches your lifestyle.</p>
            <img className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover" src={`${process.env.PUBLIC_URL}/images/twa-blog5.webp`} alt="Clinician helping a senior compare walker and rollator options" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">AA</div>
            <p className="font-manrope text-[12px] font-black text-black">Amir Abbasi</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>Medical walkers are designed to make standing, walking, and everyday movement safer for people who need balance support. Rollators add wheels, brakes, seats, and storage for users who can walk more confidently but still need steady support.</Paragraph>
          </section>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[15px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-2 px-6 py-5 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
              {toc.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">What Are Medical Walkers and Rollators?</SectionHeading>
          <Paragraph>Medical walkers and rollators are mobility devices designed to help people walk with more stability. They offer support on both sides of the body and reduce the risk of losing balance during daily movement.</Paragraph>
          <Paragraph>A walker is usually more stable because it has a fixed frame and often requires the user to lift or advance it. A rollator has wheels, hand brakes, and usually a seat, making it easier for active seniors who need support while moving through larger spaces.</Paragraph>
          <BlogList>
            <li>Walkers are best for stronger stability and slower, careful movement.</li>
            <li>Rollators are better for users who can walk but need support, brakes, and a place to rest.</li>
            <li>The right choice depends on balance, strength, home layout, and outdoor activity level.</li>
          </BlogList>

          <SectionHeading id="section-2">Types of Walkers and Their Features</SectionHeading>
          <SubHeading>1. Standard Walkers</SubHeading>
          <Paragraph>Standard walkers have four legs and no wheels. They provide the highest level of stability because the frame stays firmly planted before each step.</Paragraph>
          <BlogList>
            <li>Best for indoor use and short distances.</li>
            <li>Useful after surgery or during early recovery.</li>
            <li>Requires enough arm strength to lift and move the frame.</li>
          </BlogList>

          <SubHeading>2. Two-Wheeled Walkers</SubHeading>
          <Paragraph>Two-wheeled walkers have front wheels and rear legs. They are easier to move than standard walkers while still offering more stability than most rollators.</Paragraph>
          <BlogList>
            <li>Good for seniors who need support but cannot lift a full walker repeatedly.</li>
            <li>Works well on smooth indoor floors.</li>
            <li>Rear tips slow the frame down and add control.</li>
          </BlogList>

          <SubHeading>3. Four-Wheeled Walkers (Rollators)</SubHeading>
          <Paragraph>Four-wheeled rollators are designed for more active seniors. They usually include hand brakes, a padded seat, and storage for errands, appointments, and outdoor walks.</Paragraph>
          <BlogList>
            <li>Best for users who can control brakes safely.</li>
            <li>Helpful for longer distances because the built-in seat allows rest breaks.</li>
            <li>Not ideal for users who lean heavily or need maximum weight-bearing support.</li>
          </BlogList>

          <section className="mt-6 rounded-[8px] border-l-4 border-[#ffc400] bg-[#fff8df] p-4">
            <p className="font-manrope text-[10px] font-bold leading-5 text-[#1f2930]">For seniors with balance problems, choosing the right walker or rollator is important. A professional fit and safety check can help avoid strain, poor posture, and falls.</p>
          </section>

          <SectionHeading id="section-3">Rollators: A Step Up in Mobility Assistance</SectionHeading>
          <Paragraph>Rollators are popular because they combine walking support with convenience. They help seniors move through stores, sidewalks, appointments, and community spaces with less fatigue.</Paragraph>
          <SubHeading>1. Standard Rollators</SubHeading>
          <Paragraph>Standard rollators offer four wheels, handlebars, hand brakes, a seat, and storage. They are a good choice for seniors who can walk independently but need balance support and rest breaks.</Paragraph>
          <SubHeading>2. Heavy-Duty Rollators</SubHeading>
          <Paragraph>Heavy-duty rollators are built with wider frames and stronger weight capacity. They may offer larger wheels, wider seats, and stronger brake systems.</Paragraph>
          <SubHeading>3. All-Terrain Rollators</SubHeading>
          <Paragraph>All-terrain rollators have larger wheels designed for sidewalks, parks, and uneven outdoor surfaces. They can be useful for active seniors who spend more time outside.</Paragraph>

          <SectionHeading id="section-4">Choosing the Right Mobility Aid: Walker vs. Rollator</SectionHeading>
          <ComparisonTable />

          <SectionHeading id="section-5">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['Can I use a rollator as a standard walker?', 'No. A rollator moves on wheels and requires brake control. It should not be used like a fixed walker for heavy weight-bearing.'],
              ['Are walkers adjustable in height?', 'Yes. Most walkers and rollators have adjustable handles. Proper height helps protect posture, shoulders, wrists, and balance.'],
              ['What is safer: walker or rollator?', 'A standard walker is usually safer for heavy support. A rollator is better for users who can walk but need convenience, brakes, and a seat.'],
              ['How do I know the right walker for my needs?', 'Consider balance, arm strength, walking distance, home layout, and whether a clinician recommends more stability or more mobility.'],
              ['Are three-wheel rollators safe?', 'They are lighter and easier to turn, but usually less stable than four-wheel rollators. They are best for users with good control.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-6">
            <div className="flex items-center gap-3">
              <span className="text-[24px] leading-none text-[#ffc400]">💎</span>
              <h2 className="text-[16px] font-black text-black">Final Thoughts</h2>
            </div>
            <Paragraph>Choosing the right mobility aid, whether it's a walker or rollator, is a crucial decision for individuals with mobility challenges. While both options offer support, rollators provide enhanced features like mobility, comfort, and flexibility, making them ideal for those who need more independence.</Paragraph>
            <Paragraph>On the other hand, standard walkers offer greater stability for users who need more assistance. It's important to evaluate your specific needs, walking environment, and comfort preferences to select the best option.</Paragraph>
          </section>

          <SocialDots />

          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <p className="mt-8 font-manrope text-[12px] font-black text-[#1f2930]">2 Comments:</p>
            <div className="mt-8 space-y-10 border-b border-[#d8dde2] pb-10">
              <div className="flex gap-5">
                <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-[#d9e0e5] font-manrope text-[16px] font-black text-[#07364f]">AC</div>
                <div>
                  <p className="font-manrope text-[12px] font-black text-[#1f2930]">Ali Chishti</p>
                  <p className="mt-2 font-manrope text-[10px] font-semibold leading-5 text-[#6d7982]">November 9, 2025</p>
                  <p className="mt-3 font-manrope text-[12px] font-semibold leading-5 text-[#1f2930]">I was unhappy with the walker they gave my father at the hospital and upgraded the walker twice. I started with the regular rollator and as my father was still quite active and walked on multiple surfaces it was not sufficient. I upgraded subsequently to a better walker that had larger wheels and was more sturdy like one of these https://thewalkeradvisor.com/top-4-walkers-with-seats-for-seniors-find-your-perfect-fit/</p>
                  <button className="mt-4 rounded-full bg-[#07364f] px-5 py-2 font-manrope text-[10px] font-black text-white">Reply</button>
                </div>
              </div>
              <div className="ml-10 flex gap-5">
                <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-[#d8dde2] font-manrope text-[16px] font-black text-[#07364f]">RD</div>
                <div>
                  <p className="font-manrope text-[12px] font-black text-[#1f2930]">Robin Dolan</p>
                  <p className="mt-2 font-manrope text-[10px] font-semibold leading-5 text-[#6d7982]">November 17, 2025</p>
                  <p className="mt-3 font-manrope text-[12px] font-semibold leading-5 text-[#1f2930]">Thank you, Ali! Glad the upgraded walker helped.</p>
                  <button className="mt-4 rounded-full bg-[#07364f] px-5 py-2 font-manrope text-[10px] font-black text-white">Reply</button>
                </div>
              </div>
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

export default WalkerRollatorTypesDetail;
