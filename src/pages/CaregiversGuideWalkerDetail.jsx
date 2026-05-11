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
  "Understanding the Senior's Mobility Needs",
  'Types of Walkers and Who They Suit',
  'How to Assess the Right Walker Together',
  'Fitting the Walker with the Senior',
  'Teaching Safe Walker Technique',
  'Common Caregiver Mistakes to Avoid',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const walkerTypes = [
  {
    title: 'Standard Walker (No Wheels)',
    image: 'waaaaa-683x1024.webp',
    alt: 'Standard folding walker without wheels on a neutral background',
    text: 'Best for seniors with significant balance issues or those recovering from surgery. Requires lifting with each step, which makes it slower but maximally stable. Suitable for indoor use on flat surfaces.',
  },
  {
    title: 'Two-Wheel Walker',
    image: 'twablog26-4-683x1024.webp',
    alt: 'Two-wheel walker with front wheels and rear rubber tips',
    text: 'A good middle-ground option. Front wheels allow the walker to glide forward while the rear rubber tips provide braking resistance. Suitable for seniors who find lifting a standard walker exhausting.',
  },
  {
    title: 'Rollator (Four Wheels with Seat)',
    image: 'twablog26-5-683x1024.webp',
    alt: 'Blue rollator walker with seat and storage bag',
    text: 'Best for seniors who can walk but need regular rest breaks. The built-in seat, hand brakes, and smooth rolling make rollators ideal for outdoor use and longer distances. Requires some coordination to use brakes correctly.',
  },
  {
    title: 'Upright Walker',
    image: 'twa-blog26-1-1.webp',
    alt: 'Seniors using upright walkers with forearm support pads',
    text: 'Supports the forearms rather than the hands. Encourages an upright posture, which reduces back pain. Best for seniors with stooped posture, back pain, or wrist weakness. Usually heavier and more expensive.',
  },
];

const assessmentSteps = [
  {
    step: '1',
    title: 'Observe how the senior currently walks',
    text: "Watch for leaning, shuffling, hesitation, or uneven weight bearing. These observations help identify whether the senior needs maximum stability, smooth gliding, or rest capability.",
  },
  {
    step: '2',
    title: "Discuss the senior's daily routine",
    text: 'Ask where they walk most — indoors on carpet, outdoors on pavement, or in community spaces. The walking environment determines which walker type will be most practical.',
  },
  {
    step: '3',
    title: 'Try different walker types with supervision',
    text: 'If possible, allow the senior to briefly try two or three walker types in a safe setting. Comfort and confidence with a specific type matter as much as clinical suitability.',
  },
  {
    step: '4',
    title: 'Consult a physiotherapist or occupational therapist',
    text: 'For seniors with complex needs, a formal assessment by a mobility professional provides the most accurate recommendation and ensures the chosen walker is funded or reimbursed if applicable.',
  },
];

const techniques = [
  ['Stand upright — do not lean forward', 'Leaning increases fall risk and causes back strain over time.'],
  ['Keep the walker close to the body', "A walker pushed too far forward creates overreaching and instability."],
  ['Step into the walker — not alongside it', 'The feet should move into the frame, not beside it, on each step.'],
  ['Never drag the walker', 'For standard walkers, lift and place — do not drag. For rollators, roll smoothly without jerking.'],
  ['Brake before sitting (rollator)', 'Always lock the brakes before lowering to the rollator seat to prevent rolling.'],
];

const relatedArticles = [
  {
    image: 'twa-featured-image.webp',
    href: '/how-to-adjust-a-walker-to-the-correct-height-a-safety-checklist',
    title: 'How to Adjust a Walker to Correct Height',
    description: "The right walker height isn't just comfort — it's your first step toward safer movement.",
  },
  {
    image: 'twa-blog26-1-1.webp',
    href: '/stop-the-struggle-the-ultimate-easy-guide-to-fitting-a-walker-for-seniors',
    title: 'Guide to Fitting a Walker for Seniors',
    description: 'A step-by-step guide for seniors on choosing, adjusting, and maintaining walkers safely.',
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

function CaregiversGuideWalkerDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Caregivers' Guide to Helping Seniors Pick and Use the Perfect Walker - The Walker Advisor";
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
              {"Caregivers' Guide to Helping Seniors Pick and Use the Perfect Walker"}
            </h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">
              The right guidance can make all the difference. Here is how caregivers can ensure seniors get the best walker for their needs and use it correctly every day.
            </p>
            <img
              className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover"
              src={`${process.env.PUBLIC_URL}/images/twa-blog11-1024x683.webp`}
              alt="Caregiver assisting senior woman with walking support in a home environment"
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
            <Paragraph>Caregivers play a critical role in helping seniors select the right walker and develop safe habits with it. Choosing the wrong type, skipping the fitting process, or allowing poor technique to develop can significantly increase fall risk. This guide gives caregivers the tools and knowledge to support safe, confident walker use from day one.</Paragraph>
          </section>

          <Paragraph>When a senior is prescribed or recommended a walker, the caregiver is often the one who researches options, sets up the equipment, and provides day-to-day guidance. This is a significant responsibility — and one that requires the right information.</Paragraph>
          <Paragraph>This guide is designed specifically for caregivers and family members who want to ensure their loved one's walker experience is as safe and effective as possible.</Paragraph>

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
          <SectionHeading id="section-1">{"Understanding the Senior's Mobility Needs"}</SectionHeading>
          <Paragraph>Before selecting a walker, caregivers should have a clear understanding of the senior's current mobility level, living environment, and medical conditions. This assessment forms the foundation of a good walker choice.</Paragraph>
          <BlogList>
            <li>What surfaces does the senior walk on most — carpet, tile, outdoor pavement, or mixed?</li>
            <li>Does the senior have significant balance issues, or do they mainly need support for endurance?</li>
            <li>Are there wrist, hand, or shoulder conditions that limit grip strength?</li>
            <li>Does the senior need to carry items like medications, phones, or water bottles during walks?</li>
            <li>Has a physiotherapist or doctor already made a specific recommendation?</li>
          </BlogList>

          {/* Section 2 */}
          <SectionHeading id="section-2">Types of Walkers and Who They Suit</SectionHeading>
          <Paragraph>Each walker type has distinct strengths. Matching the walker to the individual's specific needs and environment is more important than price or brand.</Paragraph>
          {walkerTypes.map((item) => (
            <section className="mt-5" key={item.title}>
              <h3 className="text-[13px] font-black text-black">{item.title}</h3>
              <div className="mt-3 overflow-hidden rounded-[8px] bg-[#f3f3f3]">
                <img
                  className="mx-auto h-[200px] w-full object-contain p-3"
                  src={`${process.env.PUBLIC_URL}/images/${item.image}`}
                  alt={item.alt}
                />
              </div>
              <Paragraph>{item.text}</Paragraph>
            </section>
          ))}

          {/* Section 3 */}
          <SectionHeading id="section-3">How to Assess the Right Walker Together</SectionHeading>
          <Paragraph>The selection process should involve the senior as an active participant. A walker chosen together is more likely to be used consistently than one chosen without their input.</Paragraph>
          <div className="mt-4 space-y-3">
            {assessmentSteps.map((item) => (
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

          {/* Section 4 */}
          <SectionHeading id="section-4">Fitting the Walker with the Senior</SectionHeading>
          <div className="mt-3 overflow-hidden rounded-[8px] bg-[#f3f3f3]">
            <img
              className="mx-auto h-[220px] w-full object-contain p-3"
              src={`${process.env.PUBLIC_URL}/images/image-10-768x419.webp`}
              alt="Diagram of proper walker height and posture alignment"
            />
          </div>
          <Paragraph>Once a walker is selected, the caregiver should help set the correct height before the senior takes their first step with it. This takes only a few minutes but is one of the most important things a caregiver can do.</Paragraph>
          <BlogList>
            <li>Have the senior stand upright with shoes on while the caregiver adjusts the height.</li>
            <li>Set the handle top to align with the crease of the wrist when the arms hang relaxed.</li>
            <li>Confirm a 15 to 20 degree elbow bend when gripping the handles.</li>
            <li>Check that all four legs are at the same height to prevent wobbling.</li>
            <li>Verify rubber tips are in good condition before the first use.</li>
          </BlogList>

          {/* Section 5 */}
          <SectionHeading id="section-5">Teaching Safe Walker Technique</SectionHeading>
          <Paragraph>Caregivers should walk through the correct technique with the senior during the first few uses and monitor for bad habits that can develop over time.</Paragraph>
          <div className="mt-5 grid grid-cols-2 border-y border-[#d8dde2] font-manrope text-[9px] text-[#1f2930]">
            <div className="px-3 py-3 font-black">Correct Technique</div>
            <div className="border-l border-[#d8dde2] px-3 py-3 font-black">Why It Matters</div>
            {techniques.map(([tech, reason]) => (
              <div className="contents" key={tech}>
                <div className="px-3 py-3 font-medium">{tech}</div>
                <div className="border-l border-[#d8dde2] px-3 py-3 font-medium">{reason}</div>
              </div>
            ))}
          </div>

          {/* Section 6 */}
          <SectionHeading id="section-6">Common Caregiver Mistakes to Avoid</SectionHeading>
          <BlogList>
            <li><strong>Selecting a walker without the senior present</strong> — Fit and comfort require the senior to be physically present during selection and setup.</li>
            <li><strong>Skipping the height adjustment</strong> — Many caregivers simply hand over the walker at the factory-set height, which is almost never correct for the individual.</li>
            <li><strong>Allowing the senior to grip the front bar instead of the handles</strong> — This is a sign the walker is too high or the senior is leaning too far forward.</li>
            <li><strong>Not checking the rubber tips regularly</strong> — Worn tips significantly increase the risk of slipping on smooth floors.</li>
            <li><strong>Rushing the walker technique learning phase</strong> — Allow the senior to move at their own pace. Rushing leads to anxiety and sloppy technique.</li>
            <li><strong>Using the walker as the only fall prevention measure</strong> — Combine walker use with home safety modifications, footwear checks, and regular exercise for maximum protection.</li>
          </BlogList>

          {/* Section 7 - FAQ */}
          <SectionHeading id="section-7">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['How do I know if the walker I chose is the right one?', "Watch the senior use it for a full week. If they are using correct technique without discomfort and moving with confidence, the choice is likely correct. If they consistently lean, complain of pain, or avoid using it, reassess."],
              ['Should I walk alongside the senior when they first use the walker?', 'Yes. Walk on their weaker or less stable side for the first several sessions. Stay close enough to steady them without holding them. Gradually reduce your presence as confidence grows.'],
              ['What if the senior refuses to use the walker?', "Resistance often comes from feelings of loss of independence or embarrassment. Acknowledge these feelings, involve them in selecting a model they find appealing, and frame the walker as a tool for independence rather than a sign of weakness."],
              ['How often should I inspect the walker?', 'Conduct a brief visual check weekly — look at rubber tips, push-button pins, and wheel condition. Do a more thorough inspection monthly including testing brakes on rollators and checking for frame cracks.'],
              ['When should I contact a physiotherapist about the walker?', 'Contact a physiotherapist if the senior shows signs of pain during use, falls while using the walker, has significant difficulty learning technique, or if their mobility needs change due to a new medical diagnosis.'],
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
            <Paragraph>Caregivers are often the most important factor in how well a senior adapts to using a walker. Your patience, attention to fit, and consistent reinforcement of good technique can make the difference between a walker that enhances independence and one that sits unused in the corner.</Paragraph>
            <Paragraph>Take the time to choose together, fit correctly, teach patiently, and check regularly. A well-chosen, properly fitted walker is one of the most powerful tools available for keeping a senior safe and independent at home and in the community.</Paragraph>
          </section>

          {/* References */}
          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-9">
            <div className="flex items-center gap-3">
              <span className="text-[22px] text-[#ffc400]">↪</span>
              <h2 className="text-[16px] font-black text-black">References</h2>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>American Occupational Therapy Association: Mobility Aid Selection for Caregivers. https://www.aota.org</li>
              <li>National Council on Aging: Caregiver Resources — Assistive Devices. https://www.ncoa.org</li>
              <li>CDC: Older Adult Fall Prevention — Caregiver Role. https://www.cdc.gov/falls</li>
              <li>AARP: Family Caregiver Guide — Choosing a Walker. https://www.aarp.org</li>
            </ol>
          </section>

          <SocialDots />

          {/* Comments */}
          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <div className="mt-6 border-b border-[#d8dde2] pb-6">
              <p className="font-manrope text-[11px] font-black text-black">Maria C.</p>
              <p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">As a home health aide, this is exactly the kind of practical guide I needed. The section on common caregiver mistakes was especially eye-opening. I had been skipping the height check for years.</p>
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

export default CaregiversGuideWalkerDetail;
