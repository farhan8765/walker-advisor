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
  'What Are Supportive Grips on Walkers?',
  'How Grips Improve Mobility and Safety',
  'Types of Supportive Grips Available',
  'Grips and Arthritis — A Special Consideration',
  'How to Choose the Right Grip for Your Walker',
  'Installing and Replacing Walker Grips',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const gripBenefits = [
  ['Reduces hand fatigue', 'Cushioned grips absorb vibration and reduce the effort needed to maintain grip during longer walks.'],
  ['Improves balance and control', 'A secure, comfortable grip allows the user to apply force confidently without the hand slipping.'],
  ['Reduces joint pain', 'Soft materials reduce the pressure transmitted to arthritic finger joints and inflamed wrists.'],
  ['Increases grip confidence', 'Seniors who are not confident in their grip tend to hold the walker with less force, which reduces stability. Better grips restore that confidence.'],
];

const gripTypeRows = [
  ['Foam grips', 'Soft cushioning', 'Light daily use and basic comfort'],
  ['Gel grips', 'Pressure relief and shock absorption', 'Arthritis, neuropathy, or sore palms'],
  ['Ergonomic grips', 'Contoured hand support', 'Weak grip strength or longer walking sessions'],
  ['Platform grips', 'Forearm weight support', 'Wrist pain or limited hand weight-bearing'],
];

const choosingTips = [
  {
    step: '1',
    title: 'Measure the handle diameter',
    text: "Most replacement grips are designed to fit standard handle diameters of 7/8 inch or 1 inch. Measure the handle before purchasing to ensure a snug, non-rotating fit.",
  },
  {
    step: '2',
    title: 'Consider your hand condition',
    text: 'For arthritis or reduced grip strength, choose gel or ergonomic grips. For general comfort improvement, standard foam grips are sufficient. For wrist pain, consider whether an upright walker with forearm platforms is more appropriate.',
  },
  {
    step: '3',
    title: 'Choose the right length',
    text: 'Replacement grips come in different lengths. A grip that is too short leaves the ends of the handle exposed. A grip that is too long may overhang and interfere with pushing the walker.',
  },
  {
    step: '4',
    title: 'Test the texture',
    text: 'If possible, handle the grip material before buying. A grip should feel secure and non-slip even with slightly damp hands. Smooth plastic grips should be avoided for seniors with reduced hand sensation.',
  },
];

const relatedArticles = [
  {
    image: 'twa-blog5.webp',
    href: '/the-complete-guide-to-walker-and-rollator-types-which-one-fits-you-best',
    title: 'The Complete Guide to Walker & Rollator Types, Which One Fits You Best?',
    description: 'From basic frames to deluxe rollators, here is how to choose the mobility aid that matches your lifestyle.',
  },
  {
    image: 'twa-blog4.webp',
    href: '/buying-a-walker-dont-make-a-move-until-you-read-this',
    title: "Buying a Walker? Don't Make a Move Until You Read This!",
    description: 'Picking the wrong walker can cost you comfort, safety, and money. Our guide shows you how to get it right.',
  },
  {
    image: 'twa-blog12.webp',
    href: '/rain-snow-or-shine-how-to-stay-safe-with-your-walker',
    title: 'Rain, Snow, or Shine. How to Stay Safe with Your Walker',
    description: 'From slippery sidewalks to scorching heat, here is how seniors can navigate any weather with confidence.',
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

function SupportTable() {
  return (
    <div className="mt-5 overflow-hidden border border-black font-manrope">
      <div className="grid grid-cols-[0.9fr_1.1fr_1.3fr] bg-[#ffc400] text-[8px] font-black leading-4 text-black">
        <div className="border-r border-black px-3 py-2">Grip Type</div>
        <div className="border-r border-black px-3 py-2">Main Benefit</div>
        <div className="px-3 py-2">Best For</div>
      </div>
      {gripTypeRows.map(([type, benefit, bestFor]) => (
        <div className="grid grid-cols-[0.9fr_1.1fr_1.3fr] text-[8px] font-semibold leading-4 text-[#1f2930]" key={type}>
          <div className="border-r border-t border-black px-3 py-2">{type}</div>
          <div className="border-r border-t border-black px-3 py-2">{benefit}</div>
          <div className="border-t border-black px-3 py-2">{bestFor}</div>
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

function SupportiveGripsDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'How do supportive grips on walkers help seniors with mobility? - The Walker Advisor';
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
              How do supportive grips on walkers help seniors with mobility?
            </h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">
              Supportive grips boost comfort, improve balance, and make every step safer — here is why they matter and how to choose the right ones.
            </p>
            <img
              className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover"
              src={`${process.env.PUBLIC_URL}/images/twa-blog6-640x427.webp`}
              alt="Elderly hands gripping a walking stick handle with both hands"
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
            <Paragraph>The grip is the only point of contact between a senior and their walker. A poorly designed or worn-out grip can reduce balance control, cause hand pain, and undermine confidence during walking. Supportive grips — whether foam, gel, or ergonomic — directly improve comfort, stability, and daily mobility for seniors of all activity levels.</Paragraph>
          </section>

          <Paragraph>Most standard walkers come equipped with basic plastic or thin foam handles. While functional, these grips are not optimized for seniors who may walk for extended periods or who have conditions that affect hand comfort and strength.</Paragraph>
          <Paragraph>Upgrading or replacing walker grips is one of the simplest and most cost-effective improvements a senior or caregiver can make to an existing walker.</Paragraph>

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
          <SectionHeading id="section-1">What Are Supportive Grips on Walkers?</SectionHeading>
          <Paragraph>Supportive grips are the handle coverings on a walker that the user holds during walking. They serve as the primary interface between the user's hands and the walker's frame, transferring body weight and guiding movement direction.</Paragraph>
          <Paragraph>Standard grips are typically hard plastic tubes. Supportive grips replace or cover these tubes with materials designed to reduce pressure, improve friction, absorb vibration, and accommodate different hand shapes and conditions.</Paragraph>
          <Paragraph>For seniors, this contact point matters because the hands are doing more than holding the walker. They help guide the frame, control turning, stabilize the body during each step, and provide confidence when standing from a chair or navigating tight spaces.</Paragraph>
          <BlogList>
            <li>Common materials include foam, gel, rubber, and thermoplastic elastomer (TPE).</li>
            <li>Supportive grips come in slide-on, wrap-on, and replacement styles.</li>
            <li>Grip diameter and length vary to fit different walker handle sizes.</li>
            <li>Some grips are designed for specific conditions such as arthritis or Parkinson's disease.</li>
          </BlogList>

          {/* Section 2 */}
          <SectionHeading id="section-2">The Role of Supportive Grips in Senior Mobility</SectionHeading>
          <Paragraph>The quality of the grip affects the user's confidence, endurance, and technique. A walker only works well when the user can comfortably press down, steer, and reposition it. If the grip is painful, slippery, or too narrow, the senior may avoid using enough hand pressure, which can make the walker feel unstable.</Paragraph>
          <Paragraph>Supportive grips help by making that hand contact steadier and less tiring. Better grips allow seniors to maintain a natural wrist position, apply controlled downward force, and keep the walker aligned as they move from room to room.</Paragraph>
          <SectionHeading id="section-2-benefits">Benefits of Supportive Grips for Seniors</SectionHeading>
          <div className="mt-5 grid grid-cols-2 border-y border-[#d8dde2] font-manrope text-[9px] text-[#1f2930]">
            <div className="px-3 py-3 font-black">Benefit</div>
            <div className="border-l border-[#d8dde2] px-3 py-3 font-black">How It Helps</div>
            {gripBenefits.map(([benefit, description]) => (
              <div className="contents" key={benefit}>
                <div className="px-3 py-3 font-medium">{benefit}</div>
                <div className="border-l border-[#d8dde2] px-3 py-3 font-medium">{description}</div>
              </div>
            ))}
          </div>

          {/* Section 3 */}
          <SectionHeading id="section-3">Types of Supportive Grips Available</SectionHeading>
          <Paragraph>Different grip types serve different needs. Understanding the options available helps seniors and caregivers make the best choice for their specific situation.</Paragraph>
          <SupportTable />
          <Paragraph>Foam grips are the most common and work well for light daily use. Gel and ergonomic grips are better when hand pain, arthritis, or reduced grip strength are part of the picture. Platform grips are used on upright walkers and shift some pressure from the hand to the forearm.</Paragraph>

          {/* Section 4 */}
          <SectionHeading id="section-4">How Supportive Grips Improve Safety</SectionHeading>
          <Paragraph>Supportive grips improve safety by reducing the small moments of uncertainty that can lead to a fall. When the hand is comfortable and secure, the senior can focus on stepping, turning, and watching the floor instead of constantly adjusting their hand position.</Paragraph>
          <BlogList>
            <li>Better traction helps prevent the hand from sliding during transfers.</li>
            <li>Extra cushioning reduces pressure on the palm and wrist.</li>
            <li>A larger grip diameter can make it easier for weak hands to hold the walker.</li>
            <li>Consistent hand placement improves steering and walker control.</li>
            <li>Comfortable grips encourage regular walker use instead of unsafe furniture walking.</li>
          </BlogList>

          <SectionHeading id="section-4-arthritis">Psychological Benefits of Using a Walker with Supportive Grips</SectionHeading>
          <Paragraph>Comfort affects confidence. Seniors who feel pain or slipping at the handles often become hesitant, shorten their walking distance, or rely more heavily on caregivers. Supportive grips can make the walker feel more predictable and easier to control.</Paragraph>
          <Paragraph>This confidence matters during daily activities such as walking to the bathroom at night, standing in a kitchen, moving across carpet, or stepping through a doorway. The grip is small, but it can influence whether a senior feels willing to move independently.</Paragraph>

          <SectionHeading id="section-4-extra">Grips and Arthritis: A Special Consideration</SectionHeading>
          <Paragraph>Arthritis in the hands is one of the most common reasons seniors find standard walker grips uncomfortable or painful. The inflammation and joint changes associated with arthritis reduce grip strength and increase sensitivity to pressure.</Paragraph>
          <BlogList>
            <li>Larger diameter grips require less finger flexion and reduce joint stress during gripping.</li>
            <li>Gel and soft foam materials distribute pressure more evenly across the palm.</li>
            <li>Ergonomic grips reduce the muscular effort needed to maintain hold during longer walks.</li>
            <li>Heated grip sleeves are available for seniors with extreme cold-weather sensitivity in the joints.</li>
            <li>An occupational therapist can recommend the most appropriate grip type for a specific type of arthritis.</li>
          </BlogList>

          {/* Section 5 */}
          <SectionHeading id="section-5">How to Choose the Right Grip for Your Walker</SectionHeading>
          <Paragraph>Choosing the right replacement grip requires matching the material, diameter, length, and texture to the user's specific needs and walker specifications.</Paragraph>
          <div className="mt-4 space-y-3">
            {choosingTips.map((item) => (
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

          {/* Section 6 */}
          <SectionHeading id="section-6">Walker Care and Maintenance with Supportive Grips</SectionHeading>
          <Paragraph>Supportive grips only help when they remain secure, clean, and intact. Seniors and caregivers should inspect grips as part of the same routine used to check walker tips, wheels, brakes, and frame stability.</Paragraph>
          <BlogList>
            <li>Remove the old grip by twisting and pulling firmly, or slitting it with scissors if it is permanently attached.</li>
            <li>Clean the handle tube with rubbing alcohol to remove residue and improve adhesion.</li>
            <li>For slide-on grips, apply a small amount of water or rubbing alcohol inside the new grip to lubricate during installation. It will dry and hold firmly once in place.</li>
            <li>Push the grip firmly to the end of the handle and rotate slightly to seat it evenly.</li>
            <li>Allow 30 minutes to dry before using the walker if a lubricant was used.</li>
            <li>Replace grips when the surface becomes smooth, cracked, or excessively compressed.</li>
          </BlogList>
          <Paragraph>Loose grips should be corrected immediately. A grip that rotates unexpectedly can make the walker feel unstable, especially when the user stands up, turns, or places more weight through one side.</Paragraph>

          <SectionHeading id="section-6-extra">Supportive Grips and Long-Term Health</SectionHeading>
          <Paragraph>Comfortable walker grips can support long-term mobility by reducing hand strain and encouraging consistent movement. Seniors who avoid walking because their hands hurt may gradually lose strength, balance, and endurance.</Paragraph>
          <Paragraph>When grips reduce pain and improve control, the walker becomes easier to use throughout the day. That can support safer bathroom trips, short indoor walks, outdoor strolls, and light household routines that help maintain independence.</Paragraph>

          {/* Section 7 - FAQ */}
          <SectionHeading id="section-7">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['How do supportive grips help with balance?', 'A secure, non-slip grip allows the user to apply controlled force through the walker without the hand shifting or slipping. This direct force transfer improves the effectiveness of the walker as a balance aid.'],
              ['Can I add grips to any walker?', 'Yes. Most walkers use standard handle tube diameters of 7/8 inch or 1 inch, and replacement grips are widely available for these sizes. Measure before purchasing to confirm compatibility.'],
              ['How often should walker grips be replaced?', 'Replace grips when they become worn smooth, develop cracks, or feel noticeably compressed. For regular users, this is typically every 12 to 18 months. Check monthly for visible wear.'],
              ["Are gel grips better than foam grips for arthritis?", 'Gel grips are generally preferred for arthritis because they distribute pressure more evenly and conform slightly to the shape of the hand. However, the best choice depends on the specific type and severity of arthritis.'],
              ['Do wider grips help seniors with weak hands?', 'Yes. A larger grip diameter reduces the degree of finger flexion needed to hold the walker. This directly reduces effort and discomfort for seniors with limited grip strength or finger mobility.'],
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
              <span className="text-[24px] leading-none text-[#ffc400]">💎</span>
              <h2 className="text-[16px] font-black text-black">Final Thoughts</h2>
            </div>
            <Paragraph>Supportive grips are essential for seniors who rely on walkers to preserve their mobility. These grips enhance protection, promote comfort, and assist seniors to regain confidence in their ability to transport independently.</Paragraph>
            <Paragraph>By selecting the <a className="font-black text-[#0b61a4] no-underline hover:underline" href="/tools">best walkers for seniors</a> with well-designed supportive grips, they can experience existence and keep conducting their everyday activities with more ease and security.</Paragraph>
          </section>

          {/* References */}
          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-9">
            <div className="flex items-center gap-3">
              <span className="text-[22px] leading-none text-[#ffc400]">🌎</span>
              <h2 className="text-[16px] font-black text-black">Reference</h2>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9482089/">Circumstances of falls among older adult walker users in long-term care and the associated walker design deficits</a></li>
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3890129/">Applications of biomechanics for the prevention of work-related musculoskeletal disorders</a></li>
            </ol>
          </section>

          <SocialDots />

          {/* Comments */}
          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <div className="mt-6 border-b border-[#d8dde2] pb-6">
              <p className="font-manrope text-[11px] font-black text-black">Linda T.</p>
              <p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">My father has severe arthritis in both hands and the standard grips were causing him a lot of pain. We switched to gel grips and the difference was almost immediate. He walks so much more now.</p>
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
        <section className="mx-auto mt-16 max-w-[1120px]">
          <h2 className="font-manrope text-[13px] font-black text-black">Related Articles</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {relatedArticles.map((article) => (
              <a className="overflow-hidden bg-white no-underline" href={article.href} key={article.title}>
                <img className="h-56 w-full object-cover" src={`${process.env.PUBLIC_URL}/images/${article.image}`} alt="" />
                <div className="pt-3">
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

export default SupportiveGripsDetail;
