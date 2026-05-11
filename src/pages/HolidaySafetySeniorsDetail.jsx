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
  'Why Holiday Safety Matters for Seniors',
  'Fall Prevention Tips for a Safe Holiday Home',
  'Fire Safety Essentials for Seniors During the Holidays',
  'Senior-Friendly Decorating Tips for a Joyful, Safe Home',
  'Comfort & Wellness Tips for Seniors During Holiday Gatherings',
  'Frequently Asked Questions',
  'Final Thoughts',
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
        <a href="/" aria-label="The Walker Advisor home"><img className="h-auto w-[76px] object-contain" src={`${process.env.PUBLIC_URL}/images/TWA-logo.webp`} alt="The Walker Advisor" /></a>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Blog detail navigation">
          {navItems.map(([label, href]) => <a className="font-manrope text-[11px] font-bold text-[#08131b] no-underline transition-colors hover:text-[#b88b00]" href={href} key={label}>{label}</a>)}
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
  return <div className="mt-9 flex items-center justify-center gap-2" aria-label="Share article">{['f', 'in', 'x'].map((item) => <a className="flex h-6 w-6 items-center justify-center rounded-full bg-black font-manrope text-[10px] font-black text-white no-underline" href={`#share-${item}`} key={item}>{item}</a>)}</div>;
}

function DetailNewsletter() {
  return (
    <section className="mt-20 w-full bg-[#ffe8b6] px-4">
      <div className="mx-auto grid max-w-[1020px] items-end gap-8 py-8 md:grid-cols-[360px_1fr] md:py-0">
        <img className="mx-auto hidden h-[260px] w-auto object-contain md:block" src={`${process.env.PUBLIC_URL}/images/newsletter-pic-1024x1024.webp`} alt="Senior man walking with a wheeled walker" />
        <div className="py-8 md:py-12"><h2 className="text-[24px] font-black leading-tight text-black">Welcome to The Walker Advisor Newsletter!</h2><p className="mt-3 max-w-[620px] font-manrope text-[12px] font-medium leading-6 text-[#303a42]">Stay informed with our monthly updates on the best mobility aids, safety tips, and exclusive deals designed to support senior independence.</p><form className="mt-6 flex max-w-[560px] rounded-full bg-white p-1" action="#"><input className="min-w-0 flex-1 rounded-full px-5 font-manrope text-[12px] outline-none" placeholder="Email" type="email" /><button className="rounded-full bg-[#07364f] px-8 py-3 font-manrope text-[12px] font-black text-white" type="submit">Subscribe Now</button></form></div>
      </div>
    </section>
  );
}

function DetailFooter() {
  return (
    <footer className="w-full bg-black px-4 py-12 text-white">
      <div className="mx-auto grid max-w-[900px] gap-10 md:grid-cols-[1.3fr_0.8fr_0.9fr_0.8fr]">
        <div><img className="h-auto w-[112px] object-contain brightness-0 invert" src={`${process.env.PUBLIC_URL}/images/TWA-logo.webp`} alt="The Walker Advisor" /><p className="mt-4 max-w-[250px] font-manrope text-[12px] font-medium leading-6">The Walker Advisor is committed to helping seniors and their families find the best mobility aids for safe and independent living.</p><div className="mt-5 flex gap-3 font-manrope text-[12px]">○ ○ ○ ○ ○</div></div>
        {[
          ['About Authors', ['Meet Amir Abbasi', 'Meet Robin Dolan', 'Meet Syed Ali']],
          ['Walkers by categories', ['Without Wheels', 'Two Wheels', 'Rollator']],
          ['Walkers by brands', ['Winlove', 'Helavo', 'Elenker', 'Carex', 'Nova']],
        ].map(([title, links]) => <div key={title}><h3 className="font-manrope text-[12px] font-black">{title}</h3><ul className="mt-4 space-y-3">{links.map((link) => <li className="font-manrope text-[12px] font-medium" key={link}>{link}</li>)}</ul></div>)}
      </div>
      <div className="mx-auto mt-10 flex max-w-[900px] flex-col justify-between gap-4 border-t border-white/20 pt-5 font-manrope text-[11px] md:flex-row"><p>©2026 All Right Reserved By The Walker Advisor</p><p className="text-[#ffc400]">Disclaimer &nbsp; Terms & Conditions &nbsp; Privacy Policy &nbsp; Contact Us &nbsp; Cookies</p></div>
    </footer>
  );
}

function HolidaySafetySeniorsDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Holiday Safety Tips for Seniors: Prevent Falls, Fires & Seasonal Risks - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[620px]">
          <header className="pt-9 text-center">
            <h1 className="mx-auto max-w-[560px] text-[25px] font-black leading-tight text-black md:text-[28px]">Holiday Safety Tips for Seniors: Prevent Falls, Fires & Seasonal Risks</h1>
            <p className="mx-auto mt-3 max-w-[600px] font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">The holidays can hide serious dangers for seniors, from slippery floors to fire hazards. Discover the must-know safety tips that families are using to protect their loved ones.</p>
            <img className="mt-5 h-auto w-full rounded-[8px] object-cover" src={`${process.env.PUBLIC_URL}/images/twa33-1.webp`} alt="Holiday safety tips for seniors" />
          </header>

          <div className="mt-6 flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">AA</div><p className="font-manrope text-[12px] font-black text-black">Amir Abbasi</p></div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5"><h2 className="text-[16px] font-black text-black">Key Summary</h2><Paragraph>Seniors face unique risks during the holidays, including falls, fire hazards, and winter dangers. Simple preparation, safer walkways, good lighting, and careful decoration choices can significantly reduce accidents.</Paragraph></section>

          <Paragraph>The holiday season is meant to bring warmth, family, and joy. But for many older adults, busy homes, slippery weather, cords, candles, and decorations can quickly create safety hazards.</Paragraph>
          <Paragraph>With practical planning, families can keep celebrations comfortable, accessible, and safer for seniors.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents"><h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2><ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">{tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}</ol></nav>

          <SectionHeading id="section-1">Why Holiday Safety Matters for Seniors</SectionHeading>
          <Paragraph>Winter holidays often bring crowded rooms, dim lighting, extra cords, heavy meals, and weather changes that affect balance and energy levels.</Paragraph>
          <SubHeading>Common Holiday Risk Factors for Seniors</SubHeading>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Cluttered or crowded spaces from decorations and wrapped gifts</li><li>Loose cords, rugs, or uneven flooring</li><li>Poor lighting near stairs and hallways</li><li>Cooking distractions and increased fire hazards</li><li>Cold, wet, or icy outdoor walkways</li><li>Fatigue from long gatherings or overstimulation</li><li>Changes in medication timing or missed doses</li></ul>

          <SectionHeading id="section-2">Fall Prevention Tips for a Safe Holiday Home</SectionHeading>
          <SubHeading>Clear Pathways and Remove Clutter</SubHeading>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Keep hallways, stairs, and entryways open and clutter-free.</li><li>Avoid placing gifts, extension cords, or decorations on the floor.</li><li>Remove loose rugs or secure them with non-slip backing.</li><li>Provide sturdy, easy-to-reach seating throughout the home.</li></ul>
          <SubHeading>Bright, Warm Lighting</SubHeading><ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Add nightlights near main hallways and doorways.</li><li>Use warm, non-glare bulbs.</li><li>Make sure outdoor pathways and entrances are well-lit.</li></ul>
          <SubHeading>Safe Holiday Décor Placement</SubHeading><ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Place decorations at eye or waist level.</li><li>Avoid using chairs or ladders.</li><li>Tuck electrical cords securely behind furniture.</li><li>Choose lightweight, non-breakable ornaments.</li></ul>
          <SubHeading>Outdoor Safety Measures</SubHeading><ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Remove snow or ice from walkways.</li><li>Keep walkways clear of leaves, ice, and clutter.</li><li>Use non-slip mats near entryways.</li></ul>

          <SectionHeading id="section-3">Fire Safety Essentials for Seniors During the Holidays</SectionHeading>
          <SubHeading>Kitchen Safety</SubHeading><ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Never leave cooking unattended.</li><li>Keep towels, curtains, and paper away from the stove.</li><li>Use timers to prevent overheating.</li><li>Choose appliances with automatic shut-off features.</li></ul>
          <SubHeading>Candle & Fireplace Safety</SubHeading><ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Use flameless candles when possible.</li><li>Keep real candles away from curtains and décor.</li><li>Never leave a fireplace unattended.</li><li>Ensure fire and smoke alarms are working.</li></ul>

          <SectionHeading id="section-4">Senior-Friendly Decorating Tips for a Joyful, Safe Home</SectionHeading>
          <Paragraph>Decorating should bring joy without creating hazards. Keep decorations visible, stable, and easy to move around.</Paragraph>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Choose tabletop decorations instead of floor décor.</li><li>Use battery-powered lights where possible.</li><li>Keep the main walking path open.</li><li>Avoid décor that blocks windows or chairs.</li></ul>

          <SectionHeading id="section-5">Comfort & Wellness Tips for Seniors During Holiday Gatherings</SectionHeading>
          <SubHeading>Support Their Routine</SubHeading><ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Maintain regular meal, hydration, and medication schedules.</li><li>Offer quiet rest breaks during long gatherings.</li><li>Encourage comfortable seating and lighting.</li></ul>
          <SubHeading>Create a Calm, Gentle Environment</SubHeading><ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Reduce loud music or overwhelming decorations.</li><li>Offer quiet spaces for breaks.</li><li>Limit overly long or crowded events.</li></ul>
          <SubHeading>Include Seniors in Festivities</SubHeading><ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Invite them to help with safe tasks.</li><li>Encourage storytelling or participation in family games.</li><li>Ask about favorite holiday traditions.</li></ul>

          <SectionHeading id="section-6">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">{['How can I prevent slips on icy outdoor walkways?', 'Are electric candles safer than real candles?', 'Should seniors participate in decorating?', 'How do I ensure seniors safely use mobility aids during holidays?'].map((question) => <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}><summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary><p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">Keep paths clear, improve lighting, avoid loose cords, and choose safer alternatives such as flameless candles.</p></details>)}</div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-7"><div className="flex items-center gap-3"><span className="text-[24px] text-[#ffc400]">◇</span><h2 className="text-[18px] font-black text-black">Final Thoughts</h2></div><Paragraph>Holidays are a time for joy, connection, and celebration, but for seniors, thoughtful preparation is key to staying safe. By organizing the home, improving lighting, preventing fire risks, and supporting routines, families can make celebrations safer and more comfortable.</Paragraph></section>

          <SocialDots />
          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]"><h2 className="text-center text-[14px] font-black text-black">What do you think?</h2><form className="mt-6 space-y-4" action="#"><label className="block"><span className="font-manrope text-[11px] font-black text-black">Comment *</span><textarea className="mt-2 min-h-[100px] w-full rounded-[4px] border border-black px-3 py-2 font-manrope text-[12px] outline-none" /></label><label className="block"><span className="font-manrope text-[11px] font-black text-black">Name *</span><input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" /></label><label className="block"><span className="font-manrope text-[11px] font-black text-black">Email *</span><input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" type="email" /></label><label className="flex items-center gap-2 font-manrope text-[10px] font-medium text-[#1f2930]"><input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.</label><button className="rounded-full bg-[#07364f] px-7 py-3 font-manrope text-[11px] font-black text-white" type="submit">Post Comment</button></form></section>
        </article>

        <section className="mx-auto mt-16 max-w-[900px]"><h2 className="font-manrope text-[13px] font-black text-black">Related Articles</h2><div className="mt-5 grid gap-6 md:grid-cols-3">{relatedArticles.map((article) => <article className="overflow-hidden rounded-[8px] border border-[#d8dde2] bg-white" key={article.title}><img className="h-40 w-full object-cover" src={`${process.env.PUBLIC_URL}/images/${article.image}`} alt="" /><div className="p-5"><h3 className="text-[17px] font-black leading-tight text-[#172129]">{article.title}</h3><p className="mt-3 font-manrope text-[12px] font-medium leading-6 text-[#303a42]">{article.description}</p></div></article>)}</div></section>
      </main>
      <DetailNewsletter />
      <DetailFooter />
    </>
  );
}

export default HolidaySafetySeniorsDetail;
