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
  'Types of Walkers for Gradual Independence',
  'Physical Therapy Exercises to Regain Strength',
  'Steps You Can Follow to Move On the Next Stage',
  'Balance Test Checklist for Mobility Aids',
  'Transition Timeline for Mobility Aids',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const timelineRows = [
  ['1', 'Standard Walker', 'Maximum support, safe gait practice', '1-4 weeks'],
  ['2', 'Rollator/rolling walker', 'More freedom, light turning practice', '2-6 weeks'],
  ['3', 'Quad cane', 'One-sided support, balance confidence', '2-4 weeks'],
  ['4', 'Single-point cane', 'Light touch support only', '1-3 weeks'],
  ['5', 'No aid', 'Independent walking, check-ins', 'Ongoing'],
];

const relatedArticles = [
  {
    image: 'blog.webp',
    href: '/articles',
    title: 'Social Activities for Older Adults: The Best Ways to Stay Connected, Active, and Happy',
    description: 'Loneliness in seniors is not just sad, it can affect health and confidence. Here are practical ways to stay connected.',
  },
  {
    image: 'image-2-1.webp',
    href: '/can-heart-issues-increase-fall-risk-in-seniors',
    title: 'Can Heart Issues Increase Fall Risk in Seniors?',
    description: 'You might think falls are just about balance, but heart health can play a major role in sudden falls.',
  },
  {
    image: 'blog2.webp',
    href: '/articles',
    title: '3 Foods for Seniors to Avoid',
    description: 'Your body after 70 changes in important ways. These common foods can make daily health harder to manage.',
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

function BlogList({ children }) {
  return <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[10px] font-medium leading-5 text-[#1f2930]">{children}</ul>;
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
            <ul className="mt-4 space-y-3">
              {links.map((link) => <li className="font-manrope text-[12px] font-medium" key={link}>{link}</li>)}
            </ul>
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

function TransitionWalkerIndependentDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'How to Transition From a Walker to Walking Independently: A Step-by-Step Guide - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[430px]">

          {/* Header */}
          <header className="pt-8 text-center">
            <h1 className="mx-auto max-w-[410px] text-[19px] font-black leading-tight text-black md:text-[21px]">
              How to Transition From a Walker to Walking Independently: A Step-by-Step Guide
            </h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">
              Regain your freedom with expert-backed tips, gentle exercises, and proven steps to confidently move from walker use to walking on your own.
            </p>
            <img
              className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover"
              src={`${process.env.PUBLIC_URL}/images/walker-6491828_1280-e1762320268423.webp`}
              alt="Senior person resting near steps with a rollator parked beside them"
            />
          </header>

          {/* Author */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">RB</div>
            <p className="font-manrope text-[12px] font-black text-black">Robin Bell</p>
          </div>

          {/* Key Summary */}
          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>Moving from a walker to walking independently should happen slowly, with the right support, balance checks, and professional guidance. The goal is not to stop using mobility aids too early. The goal is to reduce support only when your body, confidence, and environment are ready.</Paragraph>
          </section>

          <Paragraph>A walker offers safety, confidence, and stability. For many seniors, it remains the right long-term tool. For others, especially after recovery from surgery or injury, a gradual step-down plan may help them regain more natural walking.</Paragraph>
          <Paragraph>This guide explains common mobility aids, therapy exercises, balance checkpoints, and a safe transition timeline so seniors and caregivers can understand the process before discussing it with a clinician.</Paragraph>

          {/* TOC */}
          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[15px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-2 px-6 py-5 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
              {toc.map((item, index) => (
                <li key={item}>
                  <a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a>
                </li>
              ))}
            </ol>
          </nav>

          <SectionHeading id="section-1">Types of Walkers for Gradual Independence</SectionHeading>
          <Paragraph>A full walker is not the only mobility option. Many people move through several levels of support before walking independently.</Paragraph>

          <h3 className="mt-5 text-[12px] font-black text-black">1. Standard Walker (Maximum Support)</h3>
          <Paragraph>A standard walker offers the most support and is often used after surgery, injury, or a major decline in balance. It is stable, but it requires lifting and placing the frame forward with each step.</Paragraph>
          <div className="mt-4 rounded-[8px] bg-[#f3f3f3] py-4">
            <img className="mx-auto h-[180px] w-auto rounded-[4px] object-contain" src={`${process.env.PUBLIC_URL}/images/TWA-4-683x1024.webp`} alt="Standard walker for maximum support" />
          </div>

          <h3 className="mt-5 text-[12px] font-black text-black">2. Wheeled Walkers and Rollators</h3>
          <Paragraph>Rollators are easier to push and may allow a smoother walking rhythm, but they require better control because the wheels move continuously. Many include brakes, baskets, and seats.</Paragraph>
          <div className="mt-4 rounded-[8px] bg-[#f3f3f3] py-4">
            <img className="mx-auto h-[170px] w-auto rounded-[4px] object-contain" src={`${process.env.PUBLIC_URL}/images/TWA2-682x1024.webp`} alt="Rollator walker with seat and basket" />
          </div>

          <h3 className="mt-5 text-[12px] font-black text-black">3. Rollator Brakes and Progressive Training</h3>
          <Paragraph>A rollator can help a senior practice longer walking distances while still having support nearby. Brake control is essential before using a rollator outdoors.</Paragraph>
          <div className="mt-4 rounded-[8px] bg-[#f3f3f3] py-4">
            <img className="mx-auto h-[170px] w-auto rounded-[4px] object-contain" src={`${process.env.PUBLIC_URL}/images/TWA-3-751x1024.webp`} alt="Red rollator walker with hand brakes" />
          </div>

          <h3 className="mt-5 text-[12px] font-black text-black">4. Quad Canes</h3>
          <Paragraph>A quad cane is a smaller step down from a walker. Its four-point base gives more stability than a single-point cane while allowing the user to practice a less restricted walking pattern.</Paragraph>
          <div className="mt-4 rounded-[8px] bg-[#f3f3f3] py-4">
            <img className="mx-auto h-[170px] w-auto rounded-[4px] object-contain" src={`${process.env.PUBLIC_URL}/images/TWA-5-751x1024.webp`} alt="Quad cane for mobility transition" />
          </div>

          <h3 className="mt-5 text-[12px] font-black text-black">5. Single-Point Canes</h3>
          <Paragraph>A single-point cane offers the least support. It is usually the final mobility aid before independent walking and should be used only when balance and strength are strong enough.</Paragraph>
          <div className="mt-4 rounded-[8px] bg-[#f3f3f3] py-4">
            <img className="mx-auto h-[170px] w-auto rounded-[4px] object-contain" src={`${process.env.PUBLIC_URL}/images/TWA-6-768x768.webp`} alt="Single-point cane height range" />
          </div>

          <SectionHeading id="section-2">Physical Therapy Exercises to Regain Strength</SectionHeading>
          <Paragraph>Strength and balance exercises help prepare the body for less support. These should be practiced near a stable surface or with a therapist when fall risk is high.</Paragraph>
          <BlogList>
            <li><strong>Sit-to-stand practice:</strong> rise from a firm chair without pulling on the walker.</li>
            <li><strong>Heel raises:</strong> hold a counter and lift the heels to strengthen calf muscles.</li>
            <li><strong>Side stepping:</strong> move sideways along a counter to build hip stability.</li>
            <li><strong>Marching in place:</strong> lift one knee at a time while holding a stable surface.</li>
            <li><strong>Heel-to-toe walking:</strong> practice only with supervision if balance is limited.</li>
          </BlogList>

          <SectionHeading id="section-3">Steps You Can Follow to Move On the Next Stage</SectionHeading>
          <Paragraph>Moving to a lower-support device should happen in small steps. Do not change mobility aids because of impatience or comparison with someone else.</Paragraph>
          <BlogList>
            <li>Start with short indoor walks on flat floors.</li>
            <li>Practice near a wall, counter, or caregiver.</li>
            <li>Use the walker again when tired, dizzy, or uncertain.</li>
            <li>Try a rollator or cane only after a therapist confirms readiness.</li>
            <li>Increase distance slowly and return to more support after any setback.</li>
          </BlogList>
          <div className="mt-5 rounded-[8px] bg-[#f3f3f3] py-4">
            <img className="mx-auto h-[220px] w-auto rounded-[4px] object-contain" src={`${process.env.PUBLIC_URL}/images/TWA-7-683x1024.webp`} alt="Walker to independence flowchart" />
          </div>

          <SectionHeading id="section-4">Balance Test Checklist for Mobility Aids</SectionHeading>
          <Paragraph>Before reducing support, review these signs with a therapist or caregiver. If any item feels unsafe, stay with the current aid and keep practicing.</Paragraph>
          <BlogList>
            <li>Can you stand for 30 seconds without swaying heavily?</li>
            <li>Can you turn slowly without grabbing for furniture?</li>
            <li>Can you take several steps without dragging either foot?</li>
            <li>Can you recover balance after a small stumble?</li>
            <li>Can you walk while carrying on a short conversation?</li>
          </BlogList>

          <SectionHeading id="section-5">Transition Timeline for Mobility Aids</SectionHeading>
          <div className="mt-4 overflow-hidden rounded-[6px] border border-[#d8dde2]">
            <div className="grid grid-cols-[0.5fr_1.1fr_1.6fr_0.9fr] bg-[#ffc400] font-manrope text-[8.5px] font-black text-black">
              {['Stage', 'Mobility Aid', 'Goal', 'Timeline'].map((heading) => (
                <div className="border-r border-black/10 px-2 py-2 last:border-r-0" key={heading}>{heading}</div>
              ))}
            </div>
            {timelineRows.map((row) => (
              <div className="grid grid-cols-[0.5fr_1.1fr_1.6fr_0.9fr] border-t border-[#d8dde2] font-manrope text-[8.5px] font-medium leading-4 text-[#1f2930]" key={row[0]}>
                {row.map((cell) => (
                  <div className="border-r border-[#d8dde2] px-2 py-2 last:border-r-0" key={cell}>{cell}</div>
                ))}
              </div>
            ))}
          </div>

          <SectionHeading id="section-6">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['How soon after surgery should I reduce my walker use?', 'Only after your surgeon or physical therapist clears you. Recovery timelines vary by surgery, strength, pain, and balance.'],
              ['Can I skip the cane and go straight to walking independently?', 'Some people can, but many seniors benefit from stepping down gradually through a cane or quad cane.'],
              ['How do I know I am ready to walk outside without my walker?', 'You should be steady indoors, able to turn safely, and cleared by a clinician before outdoor walking without a walker.'],
              ['What if I feel more tired after reducing walker support?', 'Return to more support and shorten practice sessions. Fatigue is a sign the body may need more time.'],
              ['Should I keep my walker after I start using a cane?', 'Yes. Keep it available for tired days, illness, longer walks, or uneven surfaces.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          {/* Final Thoughts */}
          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-7">
            <div className="flex items-center gap-3">
              <span className="text-[24px] text-[#ffc400]">◇</span>
              <h2 className="text-[16px] font-black text-black">Final Thoughts</h2>
            </div>
            <Paragraph>Transitioning from a walker to independent walking is not about rushing. It is about choosing the right level of support at the right time.</Paragraph>
            <Paragraph>Use mobility aids as tools, not failures. With therapy, practice, and honest balance checks, many seniors can move from full walker support to lighter aids and sometimes to independent walking.</Paragraph>
          </section>

          {/* References */}
          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-8">
            <div className="flex items-center gap-3">
              <span className="text-[22px] text-[#ffc400]">↪</span>
              <h2 className="text-[16px] font-black text-black">References</h2>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>Cleveland Clinic. https://my.clevelandclinic.org/health/procedures/how-to-use-a-walker</li>
              <li>APTA. https://ppsapta.org/blog/marketing/physical-therapists-recommendation-walk</li>
              <li>Medline Plus https://medlineplus.gov/ency/patientinstructions/000342.htm</li>
            </ol>
          </section>

          <SocialDots />

          {/* Comments */}
          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            {[
              ['Linda J.', 'This was very helpful. I did not realize a cane could be part of the process.'],
              ['Martin P.', 'The balance checklist is useful before changing devices.'],
              ['George B.', 'My therapist told me the same thing: do not rush the walker transition.'],
              ['Ella R.', 'I am saving this for my mother. The timeline table makes it easier to understand.'],
            ].map(([name, comment]) => (
              <div className="mt-6 border-b border-[#d8dde2] pb-5" key={name}>
                <p className="font-manrope text-[11px] font-black text-black">{name}</p>
                <p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">{comment}</p>
                <button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button>
              </div>
            ))}
            <form className="mt-6 space-y-4" action="#">
              <label className="block">
                <span className="font-manrope text-[11px] font-black text-black">Comment *</span>
                <textarea className="mt-2 min-h-[100px] w-full rounded-[4px] border border-black px-3 py-2 font-manrope text-[12px] outline-none" />
              </label>
              <label className="block">
                <span className="font-manrope text-[11px] font-black text-black">Name *</span>
                <input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" />
              </label>
              <label className="block">
                <span className="font-manrope text-[11px] font-black text-black">Email *</span>
                <input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" type="email" />
              </label>
              <label className="flex items-center gap-2 font-manrope text-[10px] font-medium text-[#1f2930]">
                <input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.
              </label>
              <button className="rounded-full bg-[#07364f] px-7 py-3 font-manrope text-[11px] font-black text-white" type="submit">Post Comment</button>
            </form>
          </section>
        </article>

        {/* Related Articles */}
        <section className="mx-auto mt-16 max-w-[680px]">
          <h2 className="font-manrope text-[13px] font-black text-black">Related Articles</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {relatedArticles.map((article) => (
              <a className="overflow-hidden rounded-[8px] border border-[#d8dde2] bg-white no-underline" href={article.href} key={article.title}>
                <img className="h-32 w-full object-cover" src={`${process.env.PUBLIC_URL}/images/${article.image}`} alt="" />
                <div className="p-4">
                  <h3 className="text-[13px] font-black leading-tight text-[#172129]">{article.title}</h3>
                  <p className="mt-2 font-manrope text-[10px] font-medium leading-5 text-[#303a42]">{article.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <DetailNewsletter />
      <DetailFooter />
    </>
  );
}

export default TransitionWalkerIndependentDetail;
