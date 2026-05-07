import { useEffect } from 'react';

const navItems = [
  ['Home', '/'],
  ['Best Tools', '/tools'],
  ['Articles', '/articles'],
  ['About Us', '/about-us'],
  ['Contact Us', '/contact'],
  ["Caregiver's Corner", '/caregivers-corner'],
];

const tableOfContents = [
  'Benefits of Using a Walker with Wheels',
  'Types of Walkers with Wheels',
  'Step-by-Step Guide',
  'Common Mistakes to Avoid',
  'Safety Tips for Using a Walker with Wheels',
  'Additional Accessories for Wheel Walkers',
  'Frequently Asked Questions',
  'Final Thoughts',
];

const benefits = [
  ['Lifting Required', 'Yes', 'No, just push forward'],
  ['Stability', 'High', 'High with brakes'],
  ['Ease of Use', 'Moderate', 'Easy'],
  ['Indoor/Outdoor Use', 'Indoor only', 'Both'],
  ['Comfort & Energy Availability', 'Low', 'Common'],
];

const relatedArticles = [
  {
    image: 'image-9-1.webp',
    title: 'Exercise Programs for Elderly Adults',
    description: "Most seniors don't realize they're missing these 4 essential exercises until mobility starts to decline.",
  },
  {
    image: 'blog.webp',
    title: 'Social Activities for Older Adults: The Best Ways to Stay Connected, Active, and Happy',
    description: 'Loneliness in seniors is not just sad, it is as dangerous to health as smoking 15 cigarettes a day.',
  },
  {
    image: 'image-2-1.webp',
    title: 'Can Heart Issues Increase Fall Risk in Seniors?',
    description: 'You might think falls are just about balance, but what if your heart is the real culprit?',
  },
];

function DetailHeader() {
  return (
    <header className="w-full bg-white px-4 py-4">
      <div className="mx-auto flex max-w-[720px] items-center justify-between gap-4">
        <a href="/" aria-label="The Walker Advisor home">
          <img className="h-auto w-[76px] object-contain" src={`${process.env.PUBLIC_URL}/images/TWA-logo.webp`} alt="The Walker Advisor" />
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

function SectionHeading({ children, id }) {
  return <h2 className="mt-9 text-[18px] font-black leading-tight text-black" id={id}>{children}</h2>;
}

function SubHeading({ children }) {
  return <h3 className="mt-5 text-[14px] font-black text-black">{children}</h3>;
}

function Paragraph({ children }) {
  return <p className="mt-3 font-manrope text-[12px] font-medium leading-[1.85] text-[#1f2930]">{children}</p>;
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

function WalkerWithWheelsDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'How To Use A Walker With Wheels: A Complete Guide for Safe Mobility - The Walker Advisor';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[620px]">
          <header className="pt-9 text-center">
            <h1 className="mx-auto max-w-[560px] text-[25px] font-black leading-tight text-black md:text-[28px]">How To Use A Walker With Wheels: A Complete Guide for Safe Mobility</h1>
            <p className="mx-auto mt-3 max-w-[600px] font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">A walker with wheels can greatly improve balance, mobility, and independence, but safe use depends on setup, positioning, and control.</p>
            <img className="mx-auto mt-5 h-auto w-full max-w-[420px] rounded-[8px] object-cover" src={`${process.env.PUBLIC_URL}/images/twa-36-1-3.webp`} alt="Person using a wheeled walker at home" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">SA</div>
            <p className="font-manrope text-[12px] font-black text-black">Syed Ali</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[16px] font-black text-black">Key Summary</h2>
            <Paragraph>A walker with wheels helps seniors move with less effort, but it must be adjusted correctly, used with proper posture, and controlled with brakes when needed.</Paragraph>
          </section>

          <Paragraph>A walker with wheels makes movement smoother and reduces the need to lift the frame with every step. It is especially useful for seniors who need stability but still want easier mobility.</Paragraph>
          <Paragraph>Safe use starts with proper height adjustment, correct body position, and awareness of surfaces, turns, and obstacles.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              {tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Benefits of Using a Walker with Wheels</SectionHeading>
          <Paragraph>Using a walker with wheels offers several advantages:</Paragraph>
          <ol className="mt-3 list-decimal space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li>Enhanced mobility: wheels allow smoother movement.</li>
            <li>Reduced effort: users do not need to lift the walker each step.</li>
            <li>Improved safety: walkers with brakes improve control.</li>
            <li>Comfort: many walkers include seats, storage, or ergonomic handles.</li>
          </ol>
          <div className="mt-5 overflow-hidden border border-black font-manrope text-[11px] text-[#1f2930]">
            <div className="grid grid-cols-3 bg-[#ffc400] font-black">
              <div className="border-r border-black px-3 py-3">Feature</div>
              <div className="border-r border-black px-3 py-3">Standard Walker</div>
              <div className="px-3 py-3">Walker with Wheels</div>
            </div>
            {benefits.map(([feature, standard, wheeled]) => (
              <div className="grid grid-cols-3 border-t border-black" key={feature}>
                <div className="border-r border-black px-3 py-3 font-semibold">{feature}</div>
                <div className="border-r border-black px-3 py-3">{standard}</div>
                <div className="px-3 py-3">{wheeled}</div>
              </div>
            ))}
          </div>
          <img className="mx-auto mt-7 h-auto w-full max-w-[360px] rounded-[8px] object-cover" src={`${process.env.PUBLIC_URL}/images/twa-36-2-1.webp`} alt="Traditional walker versus wheeled walker" />

          <SectionHeading id="section-2">Types of Walkers with Wheels</SectionHeading>
          <Paragraph>Walkers with wheels come in different styles:</Paragraph>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li>Two-wheel walkers: front wheels with rear legs for extra stability.</li>
            <li>Four-wheel walkers or rollators: easier to push and often include brakes and seats.</li>
            <li>Heavy-duty walkers: wider frames and stronger support for larger users.</li>
          </ul>

          <SectionHeading id="section-3">Step-by-Step Guide</SectionHeading>
          <SubHeading>1. Adjust the Height</SubHeading>
          <Paragraph>Ensure the walker handles are at wrist level when standing upright. Your elbows should bend slightly when holding the grips.</Paragraph>
          <SubHeading>2. Position the Walker</SubHeading>
          <Paragraph>Stand inside the walker, close enough that your shoulders stay relaxed and your back remains straight.</Paragraph>
          <SubHeading>3. Move the Walker Forward</SubHeading>
          <Paragraph>Push the walker gently ahead about one small step. Avoid pushing it too far forward.</Paragraph>
          <SubHeading>4. Step Forward</SubHeading>
          <Paragraph>Step into the walker space with your weaker leg first, then your stronger leg.</Paragraph>
          <SubHeading>5. Use Brakes Properly</SubHeading>
          <Paragraph>If your walker has brakes, lock them before sitting or standing and release them only when ready to move.</Paragraph>
          <SubHeading>6. Sitting and Standing</SubHeading>
          <Paragraph>Back up until you feel the chair behind your legs, lock the brakes, reach back for the chair, and lower yourself slowly.</Paragraph>

          <SectionHeading id="section-4">Common Mistakes to Avoid</SectionHeading>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li>Overreaching or pushing the walker too far ahead.</li>
            <li>Leaning heavily on the walker instead of standing upright.</li>
            <li>Forgetting to lock brakes before sitting.</li>
            <li>Using the walker on unsafe surfaces without caution.</li>
          </ul>

          <SectionHeading id="section-5">Safety Tips for Using a Walker with Wheels</SectionHeading>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li>Wear non-slip shoes for better traction.</li>
            <li>Keep pathways clear of rugs, cords, and clutter.</li>
            <li>Use slow turns instead of twisting suddenly.</li>
            <li>Check brakes, wheels, and hand grips regularly.</li>
            <li>Ask a physical therapist to confirm fit and technique.</li>
          </ul>

          <SectionHeading id="section-6">Additional Accessories for Wheel Walkers</SectionHeading>
          <Paragraph>Common accessories can improve daily use:</Paragraph>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li>Storage baskets or pouches</li>
            <li>Cup holders and tray attachments</li>
            <li>Seat cushions for rollators with seats</li>
            <li>LED lights for visibility in low-light areas</li>
          </ul>

          <SectionHeading id="section-7">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              'Can I use a walker without wheels?',
              'How do I prevent falls while using a walker with wheels?',
              'How often should I adjust my walker?',
              'Can I use a walker on uneven surfaces?',
            ].map((question) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">Use the walker with proper height, short controlled steps, clear pathways, and locked brakes when sitting or standing.</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-8">
            <div className="flex items-center gap-3"><span className="text-[24px] text-[#ffc400]">◇</span><h2 className="text-[18px] font-black text-black">Final Thoughts</h2></div>
            <Paragraph>Using a walker with wheels properly can dramatically improve mobility, independence, and quality of life. The safest results come from correct adjustment, steady pacing, brake control, and regular maintenance.</Paragraph>
          </section>

          <SocialDots />

          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <div className="mt-6 space-y-5 border-b border-[#d8dde2] pb-6">
              <div className="flex gap-3"><div className="h-10 w-10 rounded-full bg-[#d8dde2]" /><div><p className="font-manrope text-[12px] font-black">Guest</p><p className="mt-1 font-manrope text-[11px] text-[#303a42]">Good comparison content. Nice!</p><button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button></div></div>
              <div className="ml-12 flex gap-3"><div className="h-10 w-10 rounded-full bg-[#d8dde2]" /><div><p className="font-manrope text-[12px] font-black">thewalkeradvisor</p><p className="mt-1 font-manrope text-[11px] text-[#303a42]">Glad it helped.</p><button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button></div></div>
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

        <section className="mx-auto mt-16 max-w-[900px]">
          <h2 className="font-manrope text-[13px] font-black text-black">Related Articles</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {relatedArticles.map((article) => (
              <article className="overflow-hidden rounded-[8px] border border-[#d8dde2] bg-white" key={article.title}>
                <img className="h-40 w-full object-cover" src={`${process.env.PUBLIC_URL}/images/${article.image}`} alt="" />
                <div className="p-5"><h3 className="text-[17px] font-black leading-tight text-[#172129]">{article.title}</h3><p className="mt-3 font-manrope text-[12px] font-medium leading-6 text-[#303a42]">{article.description}</p></div>
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

export default WalkerWithWheelsDetail;
