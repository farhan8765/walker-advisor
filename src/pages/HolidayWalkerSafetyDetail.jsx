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
  'Cane Dependence and Overreliance',
  'The Big Effects of Using a Cane',
  'Addressing Side Effects',
  'Cane Fit, Technique, and Posture',
  'Comparison: Cane vs Walker',
  'When Should You Transition Away from a Cane?',
  'Cane vs Walker Comparison',
  'Best Cane Alternatives for Seniors',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const caneEffects = [
  ['Wrist and hand pain', 'Too much pressure through a small grip', 'Choose an ergonomic handle and adjust height'],
  ['Shoulder strain', 'Cane is too high, too low, or used on the wrong side', 'Reset height and review technique'],
  ['Back or hip discomfort', 'Leaning heavily to one side', 'Use light support and keep the body upright'],
  ['Higher fall risk', 'Cane does not provide enough stability', 'Consider a walker or rollator'],
  ['Reduced confidence', 'Fear of moving without support', 'Practice balance and strength exercises'],
];

const caneComparison = [
  ['Standard cane', 'Mild balance support', 'Low', 'Lightweight and simple', 'Least stable option'],
  ['Quad cane', 'More contact with floor', 'Medium', 'Stands better than a single tip cane', 'Can catch on rugs or uneven surfaces'],
  ['Hemi walker', 'One-sided support after weakness', 'High', 'More stable than most canes', 'Bulkier to move'],
  ['Two-wheel walker', 'Indoor support and balance', 'High', 'Very stable for daily use', 'Less convenient outdoors'],
  ['Rollator walker', 'Outdoor mobility and rest breaks', 'High', 'Wheels, brakes, seat, and storage', 'Requires brake control'],
];

const alternatives = [
  {
    title: 'HurryCane Freedom Edition',
    image: 'twa28-5-173x1024.webp',
    description: 'A compact pivoting cane option for light daily support.',
  },
  {
    title: 'Drive Cane with Offset Handle',
    image: 'blog35-2.webp',
    description: 'A simple adjustable cane style for mild balance support.',
  },
  {
    title: 'Drive Medical Folding Cane',
    image: 'twa-info3.webp',
    description: 'A folding option that stores easily for travel and errands.',
  },
];

const relatedArticles = [
  {
    image: 'image-9-1.webp',
    title: 'Exercise Programs for Elderly Adults',
    description: "Most seniors don't realize they're missing these essential exercises until mobility starts to decline.",
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

function SectionHeading({ children, id }) {
  return <h2 className="mt-8 text-[15px] font-black leading-tight text-black" id={id}>{children}</h2>;
}

function SubHeading({ children }) {
  return <h3 className="mt-5 text-[13px] font-black leading-snug text-black">{children}</h3>;
}

function Paragraph({ children }) {
  return <p className="mt-3 font-manrope text-[10px] font-medium leading-[1.9] text-[#1f2930]">{children}</p>;
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

function CompactTable({ headers, rows }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-[8px] border border-[#d7dbe0]">
      <table className="w-full border-collapse font-manrope text-[9px]">
        <thead>
          <tr className="bg-[#ffc400] text-left text-black">
            {headers.map((header) => <th className="px-3 py-2 font-black" key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr className="border-t border-[#d7dbe0] odd:bg-white even:bg-[#f7f7f7]" key={row[0]}>
              {row.map((cell) => <td className="px-3 py-2 align-top font-semibold leading-4 text-[#1f2930]" key={cell}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HolidayWalkerSafetyDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'The Side Effects Of Using A Cane - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[430px]">
          <header className="pt-8 text-center">
            <h1 className="mx-auto max-w-[410px] text-[19px] font-black leading-tight text-black md:text-[21px]">The Side Effects Of Using A Cane</h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">Think your cane is helping you walk better? Think again. Discover the hidden side effects most users overlook, and the safer alternatives experts actually recommend.</p>
            <img className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover" src={`${process.env.PUBLIC_URL}/images/twa28-1.webp`} alt="Senior holding a cane" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">RD</div>
            <p className="font-manrope text-[12px] font-black text-black">Robin Dolan</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>Canes are helpful for mild balance problems, short-term recovery, and one-sided support. Problems start when a cane is the wrong height, used on the wrong side, or used when the person really needs a walker, rollator, or professional mobility assessment.</Paragraph>
          </section>

          <Paragraph>A cane seems simple: one hand, one stick, one extra point of contact. That simplicity is exactly why many seniors rely on one longer than they should. It can feel like an easy answer, but it is not always the safest or healthiest long-term support.</Paragraph>
          <Paragraph>Used correctly, a cane can make walking safer. Used incorrectly, it can shift stress into the wrist, elbow, shoulder, back, hip, and knees. It can also hide a bigger mobility problem until a fall happens.</Paragraph>
          <Paragraph>This guide explains the common side effects of cane use, the warning signs that a cane is no longer enough, and the safer alternatives that may protect balance, posture, and independence.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[15px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-2 px-6 py-5 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
              {tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Cane Dependence and Overreliance</SectionHeading>
          <Paragraph>A cane should support movement, not replace strength, balance, or proper gait mechanics. When someone leans heavily on a cane every step, the body can begin compensating in ways that create new discomfort.</Paragraph>
          <Paragraph>Overreliance also changes confidence. A person may start avoiding short walks without the cane, even when supervised exercise or therapy could help improve stability.</Paragraph>
          <BlogList>
            <li>The walking pattern becomes uneven.</li>
            <li>The cane-side shoulder may stay tense and lifted.</li>
            <li>The wrist and palm absorb more pressure than they should.</li>
            <li>The person may avoid balance training because the cane feels safer.</li>
          </BlogList>

          <SectionHeading id="section-2">The Big Effects of Using a Cane</SectionHeading>
          <SubHeading>Hand, wrist, and elbow pain</SubHeading>
          <Paragraph>Most cane grips are small. When a senior presses down hard, body weight concentrates into the palm and wrist. Over time, that can irritate joints, tendons, and nerves.</Paragraph>
          <SubHeading>Shoulder and neck strain</SubHeading>
          <Paragraph>A cane that is too tall pushes the shoulder upward. A cane that is too short encourages leaning. Both patterns can create shoulder fatigue and neck tension.</Paragraph>
          <SubHeading>Back, hip, and knee discomfort</SubHeading>
          <Paragraph>Canes can encourage side-to-side movement if the user plants the cane too far away from the body. This extra sway may aggravate the lower back, hip, or knee.</Paragraph>
          <SubHeading>False confidence</SubHeading>
          <Paragraph>A cane does not stop every fall. If dizziness, leg weakness, poor vision, neuropathy, or medication side effects are involved, a cane may not provide enough support.</Paragraph>

          <CompactTable headers={['Side Effect', 'Common Cause', 'What Helps']} rows={caneEffects} />

          <SectionHeading id="section-3">Addressing Side Effects</SectionHeading>
          <Paragraph>The first step is to check the basics: height, grip style, rubber tip condition, footwear, and walking pattern. Small adjustments can reduce pain quickly, but persistent pain means the cane should be reassessed.</Paragraph>
          <BlogList>
            <li>Choose an ergonomic grip if the palm or wrist hurts.</li>
            <li>Use a wider base only if it does not catch on rugs or thresholds.</li>
            <li>Keep the cane vertical when stepping instead of angled far away.</li>
            <li>Use a walker for longer routes if fatigue causes leaning.</li>
          </BlogList>

          <SectionHeading id="section-4">Cane Fit, Technique, and Posture</SectionHeading>
          <Paragraph>Correct cane setup matters. The top of the cane should usually line up near the wrist crease when the user stands upright with arms relaxed. The elbow should bend slightly while holding the grip.</Paragraph>
          <BlogList>
            <li>Use the cane on the stronger side unless a clinician instructs otherwise.</li>
            <li>Move the cane and weaker leg together.</li>
            <li>Keep the cane close to the body, not far out to the side.</li>
            <li>Do not carry bags in the cane hand.</li>
            <li>Replace worn rubber tips before they become slick.</li>
          </BlogList>

          <SectionHeading id="section-5">Comparison: Cane vs Walker</SectionHeading>
          <Paragraph>A cane is light and convenient. A walker is more stable. The right choice depends on balance, endurance, hand strength, fall history, and how much support the person needs during real daily movement.</Paragraph>
          <CompactTable headers={['Mobility Aid', 'Best Use', 'Support Level', 'Main Limitation']} rows={[
            ['Cane', 'Mild one-sided support', 'Low to medium', 'Not enough for serious balance loss'],
            ['Quad cane', 'More contact with floor', 'Medium', 'Can feel awkward on uneven surfaces'],
            ['Walker', 'Indoor stability', 'High', 'Requires more space'],
            ['Rollator', 'Outdoor walking and rest breaks', 'High', 'Needs brake control'],
          ]} />

          <section className="mx-auto mt-7 max-w-[340px] rounded-[6px] bg-[#f3f3f3] p-4">
            <div className="rounded-[4px] bg-black px-4 py-3 text-center text-white">
              <p className="font-manrope text-[9px] font-black uppercase tracking-[0.08em]">Still unstable with a cane?</p>
              <div className="mt-2 flex items-center justify-center gap-3">
                <span className="h-[2px] w-14 bg-[#ffc400]" />
                <span className="text-[18px] text-[#ffc400]">→</span>
                <span className="h-[2px] w-14 bg-[#ffc400]" />
              </div>
            </div>
          </section>

          <SectionHeading id="section-6">When Should You Transition Away from a Cane?</SectionHeading>
          <Paragraph>A cane may no longer be enough if the user is furniture-walking indoors, grabbing walls, falling, shuffling, or feeling unsafe on uneven ground.</Paragraph>
          <SubHeading>Warning signs a walker may be safer</SubHeading>
          <BlogList>
            <li>Falls or near-falls have happened in the last few months.</li>
            <li>The person needs both hands for balance.</li>
            <li>The cane causes pain in the hand, wrist, shoulder, or back.</li>
            <li>The user feels tired quickly when walking.</li>
            <li>Outdoor surfaces feel stressful or unpredictable.</li>
          </BlogList>

          <section className="mt-7 rounded-[8px] bg-[#f3f3f3] p-5 text-center">
            <p className="font-manrope text-[11px] font-black uppercase tracking-[0.08em] text-[#07364f]">Mobility check</p>
            <h3 className="mt-2 text-[15px] font-black text-black">Need more support than a cane?</h3>
            <a className="mt-4 inline-flex rounded-full bg-[#07364f] px-6 py-3 font-manrope text-[11px] font-black text-white no-underline" href="/tools">Find a safer walker option</a>
          </section>

          <SectionHeading id="section-7">Cane vs Walker Comparison</SectionHeading>
          <Paragraph>The goal is not always to stop using a cane. The goal is to use the right mobility aid at the right time with the least strain possible.</Paragraph>
          <BlogList>
            <li>Ask a physical therapist to check cane height and gait pattern.</li>
            <li>Practice sit-to-stand strength so the cane is not doing all the work.</li>
            <li>Choose shoes with stable soles and good traction.</li>
            <li>Remove loose rugs, cords, clutter, and slippery mats at home.</li>
            <li>Use a walker or rollator for longer distances if fatigue affects balance.</li>
          </BlogList>
          <CompactTable headers={['Device', 'Best For', 'Stability', 'Pros', 'Watch Out For']} rows={caneComparison} />

          <SectionHeading id="section-8">Best Cane Alternatives for Seniors</SectionHeading>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {alternatives.map((item) => (
              <article className="overflow-hidden rounded-[8px] border border-[#d8dde2] bg-white text-center" key={item.title}>
                <div className="flex h-24 items-center justify-center bg-[#f7f7f7] p-2">
                  <img className="max-h-full w-full object-contain" src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt={item.title} />
                </div>
                <div className="p-4">
                  <h3 className="text-[11px] font-black leading-tight text-black">{item.title}</h3>
                  <p className="mt-2 font-manrope text-[9px] font-semibold leading-4 text-[#303a42]">{item.description}</p>
                  <a className="mt-3 inline-flex rounded-full bg-[#ffc400] px-4 py-2 font-manrope text-[9px] font-black text-black no-underline" href="/tools">Review</a>
                </div>
              </article>
            ))}
          </div>

          <SectionHeading id="section-9">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['Can using a cane cause pain?', 'Yes. Poor height, heavy leaning, and small grips can cause wrist, shoulder, back, hip, or knee discomfort.'],
              ['Is a cane safer than a walker?', 'Not always. A cane is lighter, but a walker provides more stability for people with higher fall risk.'],
              ['Which side should I use a cane on?', 'Many people use it on the stronger side so the cane moves with the weaker leg, but medical guidance is best.'],
              ['When should I stop using a cane?', 'Do not stop suddenly if you depend on it. Speak with a clinician and build strength, balance, and confidence first.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-10">
            <div className="flex items-center gap-3"><span className="text-[24px] text-[#ffc400]">◇</span><h2 className="text-[16px] font-black text-black">Final Thoughts</h2></div>
            <Paragraph>A cane can be useful, but it should not become a painful habit or a substitute for safer support. If a cane causes strain, feels unstable, or no longer matches the user's mobility needs, it is time to reassess the setup and consider a stronger mobility aid.</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-11">
            <div className="flex items-center gap-3"><span className="text-[22px] text-[#ffc400]">↪</span><h2 className="text-[16px] font-black text-black">References</h2></div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>Centers for Disease Control and Prevention: older adult fall prevention guidance.</li>
              <li>National Institute on Aging: falls and home safety recommendations.</li>
              <li>American Physical Therapy Association: mobility aid and gait safety resources.</li>
              <li>Mayo Clinic: cane selection, fit, and safe walking guidance.</li>
            </ol>
          </section>

          <SocialDots />

          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <div className="mt-6 space-y-6 border-b border-[#d8dde2] pb-6">
              <div className="flex gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-[#d8dde2]" />
                <div><p className="font-manrope text-[11px] font-black text-black">Candice</p><p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">This explains why my wrist hurts after longer walks.</p><button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button></div>
              </div>
              <div className="ml-8 flex gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-[#d8dde2]" />
                <div><p className="font-manrope text-[11px] font-black text-black">thewalkeradvisor</p><p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">Checking the handle height is a good first step.</p><button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button></div>
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
                <div className="p-4"><h3 className="text-[13px] font-black leading-tight text-[#172129]">{article.title}</h3><p className="mt-2 font-manrope text-[10px] font-medium leading-5 text-[#303a42]">{article.description}</p></div>
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

export default HolidayWalkerSafetyDetail;
