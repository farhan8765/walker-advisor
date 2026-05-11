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
  'Why Walker Height Matters',
  'Signs Your Walker Is Set to the Wrong Height',
  'How to Measure the Correct Walker Height',
  'Step-by-Step Height Adjustment Guide',
  'Posture and Alignment Checklist',
  'Special Considerations by Walker Type',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const wrongHeightSigns = [
  ['Walker too high', 'Shoulders are raised or hunched. Arms must stretch upward to reach the grips. Neck and upper back become tense during walking.'],
  ['Walker too low', 'User bends forward at the waist. Back pain develops during or after walking. Posture is rounded and stooped.'],
  ['Uneven leg height', 'Walker rocks or wobbles during use. One side feels higher than the other. Balance feels unstable when pushing down.'],
  ['Elbow fully straight', 'No shock absorption through the arms. Wrist and shoulder joint strain increases over time. Fatigue develops faster.'],
];

const adjustmentSteps = [
  {
    step: '1',
    title: 'Put on the shoes you walk in',
    text: "Shoe thickness changes the measurement. Always wear your regular walking shoes when adjusting height, not bare feet or slippers.",
  },
  {
    step: '2',
    title: 'Stand upright inside the walker',
    text: 'Stand straight with relaxed shoulders. Do not lean on the walker or grip the handles yet. Allow your arms to hang naturally at your sides.',
  },
  {
    step: '3',
    title: 'Check where the handle meets your wrist',
    text: 'The top of the handle should align with the crease of your wrist — the fold of skin at the base of your palm. This is your target height.',
  },
  {
    step: '4',
    title: 'Press the adjustment button and slide the leg',
    text: 'Press the push-button pin on each walker leg firmly and hold it in. Slide the leg tube up or down to align the pin with the correct height notch, then release.',
  },
  {
    step: '5',
    title: 'Match all four legs to the same height',
    text: "Check the numbered markers on each leg and set all four to the same notch number. Uneven legs cause wobbling and increase fall risk.",
  },
  {
    step: '6',
    title: 'Grip the handles and test the elbow angle',
    text: 'Hold the handles lightly. Your elbows should have a comfortable 15 to 20 degree bend — a slight angle, not a full bend and not fully straight.',
  },
];

const walkerTypeConsiderations = [
  {
    title: 'Standard Walker (No Wheels)',
    text: 'Height adjustment is the same across all four legs. After adjusting, test by lifting the walker and placing it forward. Confirm that both front and rear tips land flat on the ground simultaneously.',
  },
  {
    title: 'Two-Wheel Walker',
    text: 'Adjust the front wheeled legs and rear rubber-tipped legs to the same height. The glide action of the front wheels should not cause the rear tips to drag excessively.',
  },
  {
    title: 'Rollator (Four Wheels)',
    text: 'Rollator handles are adjusted using the same push-button system. Some rollator models also have an additional height range adjustment on the upper frame bar.',
  },
  {
    title: 'Upright Walker',
    text: 'Upright walkers support the forearms rather than the hands. Height adjustment is made at the forearm platform level, not the handle level. The forearms should rest flat and comfortably.',
  },
];

const relatedArticles = [
  {
    image: 'twa-blog26-1-1.webp',
    href: '/stop-the-struggle-the-ultimate-easy-guide-to-fitting-a-walker-for-seniors',
    title: 'Guide to Fitting a Walker for Seniors',
    description: 'Discover this step-by-step guide for seniors on choosing, adjusting, and maintaining walkers safely.',
  },
  {
    image: 'twa-blog11-1024x683.webp',
    href: '/caregivers-guide-to-helping-seniors-pick-and-use-the-perfect-walker',
    title: "Caregivers' Guide to the Perfect Walker",
    description: 'The right guidance helps caregivers ensure seniors get the best walker for their needs.',
  },
  {
    image: 'blog-27-1.webp',
    href: '/must-have-walker-accessories-to-make-life-easier-and-safer',
    title: 'Must-Have Walker Accessories',
    description: 'Smart accessories that boost comfort, independence, and everyday ease for walker users.',
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

function AdjustWalkerHeightDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'How to Adjust a Walker to the Correct Height: A Safety Checklist - The Walker Advisor';
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
              How to Adjust a Walker to the Correct Height: A Safety Checklist
            </h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">
              The right walker height is not just about comfort — it is your first step toward safer, steadier movement every single day.
            </p>
            <img
              className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover"
              src={`${process.env.PUBLIC_URL}/images/twa-featured-image.webp`}
              alt="Caregiver helping elderly man use a walker in a care facility"
            />
          </header>

          {/* Author */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">AA</div>
            <p className="font-manrope text-[12px] font-black text-black">Amir Abbasi</p>
          </div>

          {/* Key Summary */}
          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>Incorrect walker height is one of the most common causes of back pain, poor posture, and instability in seniors. This safety checklist walks through the exact steps to measure, adjust, and verify that a walker is set to the right height for each individual user.</Paragraph>
          </section>

          <Paragraph>Most walkers are delivered or purchased without fitting instructions. Many seniors simply set the walker to a height that feels comfortable at first glance — but comfortable is not always correct. A few centimeters in the wrong direction can cause weeks of unnecessary discomfort.</Paragraph>
          <Paragraph>This guide provides a complete, easy-to-follow checklist for adjusting any type of walker to the correct height for safer, more comfortable daily use.</Paragraph>

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

          {/* Section 1 */}
          <SectionHeading id="section-1">Why Walker Height Matters</SectionHeading>
          <Paragraph>Walker height directly affects posture, joint strain, and walking efficiency. A correctly fitted walker keeps the spine upright, allows the arms to absorb force naturally, and positions the weight evenly over the center of mass.</Paragraph>
          <BlogList>
            <li>Correct height maintains an upright spine and reduces back strain.</li>
            <li>A slight elbow bend allows muscles and joints to share the load during walking.</li>
            <li>Proper height prevents overreaching, which causes instability and tipping risk.</li>
            <li>Seniors walk with more confidence and less fatigue at the correct height.</li>
            <li>Caregivers can use height as a quick check to identify setup problems.</li>
          </BlogList>

          {/* Section 2 */}
          <SectionHeading id="section-2">Signs Your Walker Is Set to the Wrong Height</SectionHeading>
          <Paragraph>Before measuring, check whether any of these signs are present. They indicate that an adjustment is needed even if no pain has developed yet.</Paragraph>
          <div className="mt-5 grid grid-cols-2 border-y border-[#d8dde2] font-manrope text-[9px] text-[#1f2930]">
            <div className="px-3 py-3 font-black">Problem</div>
            <div className="border-l border-[#d8dde2] px-3 py-3 font-black">What It Causes</div>
            {wrongHeightSigns.map(([problem, cause]) => (
              <div className="contents" key={problem}>
                <div className="px-3 py-3 font-medium">{problem}</div>
                <div className="border-l border-[#d8dde2] px-3 py-3 font-medium">{cause}</div>
              </div>
            ))}
          </div>

          {/* Section 3 */}
          <SectionHeading id="section-3">How to Measure the Correct Walker Height</SectionHeading>
          <div className="mt-3 overflow-hidden rounded-[8px] bg-[#f3f3f3]">
            <img
              className="mx-auto h-[220px] w-full object-contain p-3"
              src={`${process.env.PUBLIC_URL}/images/image-10-768x419.webp`}
              alt="Diagram showing proper walker height and posture alignment"
            />
          </div>
          <Paragraph>The most accurate measurement method for walker height uses the wrist crease as the reference point. This is the horizontal fold of skin where the hand meets the forearm when the arm hangs relaxed at the side.</Paragraph>
          <BlogList>
            <li>Stand upright wearing your usual walking shoes.</li>
            <li>Let both arms hang relaxed at your sides.</li>
            <li>Have a helper measure the height from the floor to your wrist crease on each side.</li>
            <li>Set the walker handle height to match this measurement exactly.</li>
            <li>Confirm by holding the handles and checking for a 15 to 20 degree elbow bend.</li>
          </BlogList>

          {/* Section 4 */}
          <SectionHeading id="section-4">Step-by-Step Height Adjustment Guide</SectionHeading>
          <Paragraph>Follow these steps to safely and accurately adjust a standard push-button walker. The process is similar for all common walker types.</Paragraph>
          <div className="mt-4 space-y-3">
            {adjustmentSteps.map((item) => (
              <div className="rounded-[8px] border border-[#d8dde2] p-4" key={item.step}>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">{item.step}</span>
                  <div>
                    <h3 className="text-[11px] font-black text-black">{item.title}</h3>
                    <p className="mt-1 font-manrope text-[10px] font-medium leading-[1.85] text-[#1f2930]">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section 5 */}
          <SectionHeading id="section-5">Posture and Alignment Checklist</SectionHeading>
          <Paragraph>Once the height is adjusted, use this checklist to confirm the full body alignment is correct before walking.</Paragraph>
          <BlogList>
            <li>Head is level, eyes looking forward — not down at the floor.</li>
            <li>Shoulders are relaxed — not raised or pulled forward.</li>
            <li>Back is straight — no significant forward lean or rounding.</li>
            <li>Elbows have a slight bend — 15 to 20 degrees when gripping the handles.</li>
            <li>Wrists are straight — not bent up or down while gripping.</li>
            <li>Weight is distributed evenly through both hands and both feet.</li>
            <li>The walker frame is in front of the body, not to the side.</li>
          </BlogList>

          {/* Section 6 */}
          <SectionHeading id="section-6">Special Considerations by Walker Type</SectionHeading>
          <Paragraph>Different walker types have slightly different adjustment points and body mechanics. Here is what to know for each type.</Paragraph>
          <div className="mt-4 space-y-3">
            {walkerTypeConsiderations.map((item) => (
              <div className="rounded-[8px] border border-[#d8dde2] p-4" key={item.title}>
                <h3 className="text-[11px] font-black text-black">{item.title}</h3>
                <p className="mt-1 font-manrope text-[10px] font-medium leading-[1.85] text-[#1f2930]">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Section 7 - FAQ */}
          <SectionHeading id="section-7">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['How do I know what height to set my walker to?', 'Set the handle height to the level of your wrist crease when your arms hang relaxed at your sides while wearing your usual shoes. Then check that your elbows have a 15 to 20 degree bend when you hold the grips.'],
              ['What happens if I set my walker too high?', 'A walker set too high forces your shoulders and arms upward, which creates tension in the upper back, neck, and shoulders. It also reduces your ability to use your arms for proper support and balance.'],
              ['Can I adjust my walker by myself?', 'Most walkers can be adjusted by pressing the push-button leg pins and sliding the tube to the correct notch. However, if you have difficulty seeing or reaching the adjustment points, ask a caregiver or physiotherapist for help.'],
              ['How often should I check the walker height?', 'Check the height if you change shoe types significantly, after the walker has been used by someone else, or if you notice any discomfort, back pain, or changes in your posture while walking.'],
              ['Do all walker legs need to be set to the same height?', 'Yes. All four legs must be set to the same height notch to prevent wobbling. An uneven walker is unstable and increases fall risk significantly.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          {/* Final Thoughts */}
          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-8">
            <div className="flex items-center gap-3">
              <span className="text-[24px] text-[#ffc400]">◇</span>
              <h2 className="text-[16px] font-black text-black">Final Thoughts</h2>
            </div>
            <Paragraph>Adjusting a walker to the correct height is a simple process that takes only a few minutes but makes a significant difference in daily comfort, posture, and safety. Most seniors who experience back pain or instability with a walker are using it at the wrong height.</Paragraph>
            <Paragraph>Use this checklist as a starting point, and revisit the adjustment whenever footwear changes or discomfort appears. A well-adjusted walker is one of the most effective tools for maintaining mobility and independence as you age.</Paragraph>
          </section>

          {/* References */}
          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-9">
            <div className="flex items-center gap-3">
              <span className="text-[22px] text-[#ffc400]">↪</span>
              <h2 className="text-[16px] font-black text-black">References</h2>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>National Institute on Aging: Safe Use of Walkers and Canes. https://www.nia.nih.gov</li>
              <li>American Physical Therapy Association: Walker Height Fitting Guidelines. https://www.apta.org</li>
              <li>CDC: Older Adult Fall Prevention — Mobility Aid Safety. https://www.cdc.gov/falls</li>
              <li>Mayo Clinic: Walker Adjustment and Safe Mobility for Seniors. https://www.mayoclinic.org</li>
            </ol>
          </section>

          <SocialDots />

          {/* Comments */}
          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <div className="mt-6 border-b border-[#d8dde2] pb-6">
              <p className="font-manrope text-[11px] font-black text-black">Susan K.</p>
              <p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">My mother was using her walker at completely the wrong height for months. After following this checklist, her back pain disappeared within days. Simple but life-changing advice.</p>
              <button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button>
            </div>
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

export default AdjustWalkerHeightDetail;
