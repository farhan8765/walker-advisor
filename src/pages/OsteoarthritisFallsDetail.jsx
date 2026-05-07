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
  'What is Osteoarthritis?',
  'How Osteoarthritis Increases Fall Risk in Seniors',
  'Why Falls Are Dangerous for Older Adults',
  'How Seniors with Osteoarthritis Can Reduce Fall Risk',
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
          <div key={title}><h3 className="font-manrope text-[12px] font-black">{title}</h3><ul className="mt-4 space-y-3">{links.map((link) => <li className="font-manrope text-[12px] font-medium" key={link}>{link}</li>)}</ul></div>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-[900px] flex-col justify-between gap-4 border-t border-white/20 pt-5 font-manrope text-[11px] md:flex-row"><p>©2026 All Right Reserved By The Walker Advisor</p><p className="text-[#ffc400]">Disclaimer &nbsp; Terms & Conditions &nbsp; Privacy Policy &nbsp; Contact Us &nbsp; Cookies</p></div>
    </footer>
  );
}

function OsteoarthritisFallsDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Can Osteoarthritis Lead to More Falls in Seniors? - The Walker Advisor';
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
            <h1 className="mx-auto max-w-[560px] text-[25px] font-black leading-tight text-black md:text-[28px]">Can Osteoarthritis Lead to More Falls in Seniors?</h1>
            <p className="mx-auto mt-3 max-w-[600px] font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">Osteoarthritis can quietly increase fall risk in seniors by affecting balance, strength, and mobility, often before warning signs appear.</p>
            <img className="mt-5 h-auto w-full rounded-[8px] object-cover" src={`${process.env.PUBLIC_URL}/images/blog1.webp`} alt="Senior woman near walker with knee discomfort" />
          </header>

          <div className="mt-6 flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">AA</div><p className="font-manrope text-[12px] font-black text-black">Amir Abbasi</p></div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5"><h2 className="text-[16px] font-black text-black">Key Summary</h2><Paragraph>Osteoarthritis affects joints, balance, movement, and confidence. It can make seniors more likely to trip, stumble, or avoid activity, which may increase fall risk.</Paragraph></section>

          <Paragraph>As people age, joint health becomes a major concern. One of the most common conditions affecting older adults is osteoarthritis, a disease that causes joint pain, stiffness, and reduced mobility.</Paragraph>
          <Paragraph>The real concern is not only pain. Osteoarthritis can change how seniors walk, stand, and move, increasing the chance of falls.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents"><h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2><ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">{tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}</ol></nav>

          <SectionHeading id="section-1">What Is Osteoarthritis?</SectionHeading>
          <Paragraph>Osteoarthritis is the gradual wear and tear of protective cartilage that cushions the joints. It commonly affects the knees, hips, hands, and spine.</Paragraph>
          <Paragraph>Common symptoms include:</Paragraph>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Joint pain and stiffness</li><li>Swelling or tenderness</li><li>Reduced range of motion</li><li>Difficulty standing or walking for long periods</li><li>Grinding or popping sensations in joints</li></ul>

          <SectionHeading id="section-2">How Osteoarthritis Increases Fall Risk in Seniors</SectionHeading>
          <SubHeading>Joint Pain and Weakness</SubHeading><Paragraph>Painful joints can make seniors shift weight unevenly or avoid using certain muscles. Over time, this can reduce strength and stability.</Paragraph>
          <SubHeading>Reduced Balance and Stability</SubHeading><Paragraph>Limited joint movement affects posture and balance reactions, making it harder to recover from a slip or stumble.</Paragraph>
          <SubHeading>Muscle Weakness</SubHeading><Paragraph>Less movement often leads to weaker muscles, especially in the legs and hips, which are critical for preventing falls.</Paragraph>
          <SubHeading>Stiffness After Rest</SubHeading><Paragraph>Stiff joints after sitting or sleeping can make first steps more uncertain, especially when standing quickly.</Paragraph>
          <SubHeading>Fear of Movement</SubHeading><Paragraph>Fear of pain can cause seniors to move less. Reduced activity can worsen weakness and balance problems.</Paragraph>

          <SectionHeading id="section-3">Why Falls Are Dangerous for Older Adults</SectionHeading>
          <Paragraph>Falls are a leading cause of injury among seniors. For those with osteoarthritis, falls can result in:</Paragraph>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Hip or wrist fractures</li><li>Head injuries</li><li>Loss of mobility and independence</li><li>Extended recovery periods</li></ul>

          <SectionHeading id="section-4">How Seniors with Osteoarthritis Can Reduce Fall Risk</SectionHeading>
          <Paragraph>Managing osteoarthritis does not mean avoiding movement. The goal is to move safely and consistently.</Paragraph>
          <SubHeading>Practical Safety Measures</SubHeading><ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Use walking aids such as a cane or walker when needed.</li><li>Wear supportive non-slip shoes.</li><li>Keep floors free from clutter and rugs.</li><li>Install grab bars in bathrooms and hallways.</li><li>Exercise gently to maintain strength and flexibility.</li></ul>
          <SubHeading>Stay Active with Low-Impact Exercise</SubHeading><Paragraph>Low-impact activities like walking, stretching, chair exercises, or water aerobics help improve strength and flexibility without stressing the joints.</Paragraph>
          <SubHeading>Manage Pain Properly</SubHeading><Paragraph>Work with a healthcare provider to manage pain safely. Pain control can make movement easier and safer.</Paragraph>
          <SubHeading>Prepare for Emergencies</SubHeading><Paragraph>Keep emergency contacts accessible and consider using a medical alert device if fall risk is high.</Paragraph>

          <SectionHeading id="section-5">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">{['Can osteoarthritis directly cause falls?', 'Which joints increase fall risk the most?', 'Can walking aids help seniors with osteoarthritis?', 'Is exercise safe for seniors with osteoarthritis?', 'Should seniors with arthritis use a walker?'].map((question) => <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}><summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary><p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">Yes, osteoarthritis can increase fall risk by causing pain, stiffness, weakness, and reduced balance.</p></details>)}</div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-6"><div className="flex items-center gap-3"><span className="text-[24px] text-[#ffc400]">◇</span><h2 className="text-[18px] font-black text-black">Final Thoughts</h2></div><Paragraph>Osteoarthritis can increase the risk of falls in seniors, mostly by affecting joint health, balance, and walking confidence. With the right support, mobility aids, exercise, and home safety measures, seniors can stay mobile, confident, and safer.</Paragraph></section>

          <SocialDots />

          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]"><h2 className="text-center text-[14px] font-black text-black">What do you think?</h2><div className="mt-6 space-y-5 border-b border-[#d8dde2] pb-6"><div className="flex gap-3"><div className="h-10 w-10 rounded-full bg-[#d8dde2]" /><div><p className="font-manrope text-[12px] font-black">Harris Jabbar</p><p className="mt-1 font-manrope text-[11px] text-[#303a42]">This article is helpful.</p><button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button></div></div><div className="ml-12 flex gap-3"><div className="h-10 w-10 rounded-full bg-[#d8dde2]" /><div><p className="font-manrope text-[12px] font-black">thewalkeradvisor</p><p className="mt-1 font-manrope text-[11px] text-[#303a42]">Thank you. Glad it helped.</p><button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button></div></div></div><form className="mt-6 space-y-4" action="#"><label className="block"><span className="font-manrope text-[11px] font-black text-black">Comment *</span><textarea className="mt-2 min-h-[100px] w-full rounded-[4px] border border-black px-3 py-2 font-manrope text-[12px] outline-none" /></label><label className="block"><span className="font-manrope text-[11px] font-black text-black">Name *</span><input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" /></label><label className="block"><span className="font-manrope text-[11px] font-black text-black">Email *</span><input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" type="email" /></label><label className="flex items-center gap-2 font-manrope text-[10px] font-medium text-[#1f2930]"><input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.</label><button className="rounded-full bg-[#07364f] px-7 py-3 font-manrope text-[11px] font-black text-white" type="submit">Post Comment</button></form></section>
        </article>

        <section className="mx-auto mt-16 max-w-[900px]"><h2 className="font-manrope text-[13px] font-black text-black">Related Articles</h2><div className="mt-5 grid gap-6 md:grid-cols-3">{relatedArticles.map((article) => <article className="overflow-hidden rounded-[8px] border border-[#d8dde2] bg-white" key={article.title}><img className="h-40 w-full object-cover" src={`${process.env.PUBLIC_URL}/images/${article.image}`} alt="" /><div className="p-5"><h3 className="text-[17px] font-black leading-tight text-[#172129]">{article.title}</h3><p className="mt-3 font-manrope text-[12px] font-medium leading-6 text-[#303a42]">{article.description}</p></div></article>)}</div></section>
      </main>
      <DetailNewsletter />
      <DetailFooter />
    </>
  );
}

export default OsteoarthritisFallsDetail;
