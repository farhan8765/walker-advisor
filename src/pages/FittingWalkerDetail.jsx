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
  'The Purpose of Fitting a Walker Correctly',
  'Types of Walkers Available',
  'Step-by-Step Walker Fitting Guide',
  'How to Adjust Walker Height',
  'Common Mistakes to Avoid',
  'Walker Maintenance Safety Checks',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const walkerTypes = [
  {
    title: 'Standard Walker (No Wheels)',
    image: 'twa-blog26-3-683x1024.webp',
    alt: 'Standard walker with no wheels on light gray background',
    text: 'A standard walker has four rubber-tipped legs and no wheels. It must be lifted and placed forward with each step. This type offers maximum stability and is best for seniors who need strong support.',
  },
  {
    title: 'Two-Wheel Walker',
    image: 'twablog26-4-683x1024.webp',
    alt: 'Two-wheel walker with front wheels and rubber back tips',
    text: 'A two-wheel walker has front wheels that allow the walker to glide forward while the rear legs drag. It requires less lifting effort than a standard walker and suits seniors with moderate balance needs.',
  },
  {
    title: 'Rollator Walker (Four Wheels with Seat)',
    image: 'twablog26-5-683x1024.webp',
    alt: 'Blue rollator walker with seat, bag, and four wheels',
    text: 'A rollator has four wheels, hand brakes, and a built-in seat. It rolls smoothly and allows for a more natural gait. The seat provides a rest option during longer walks.',
  },
  {
    title: 'Four-Wheel Walker (No Seat)',
    image: 'twablog26-6-683x1024.webp',
    alt: 'Dark graphite four-wheel walker without seat on gray background',
    text: 'A four-wheel walker without a seat offers the smooth rolling of a rollator with a lighter, more compact frame. It suits active seniors who want easy movement without the bulk of a full rollator.',
  },
  {
    title: 'Upright Walker',
    image: 'twa-blog26-1-1.webp',
    alt: 'Senior men using upright walkers with forearm support',
    text: 'An upright walker supports the forearms rather than the wrists, encouraging an upright posture. It is especially helpful for seniors with back pain, hunched posture, or wrist weakness.',
  },
];

const fittingSteps = [
  {
    step: '1',
    title: 'Stand upright inside the walker',
    text: 'Stand tall with your shoulders relaxed and arms hanging naturally at your sides. Do not lean forward or slouch. The walker should surround you on three sides.',
  },
  {
    step: '2',
    title: 'Check your elbow bend',
    text: 'When your hands rest on the grips, your elbows should be bent at approximately 15 to 20 degrees. A slight bend allows the arms to absorb impact and support movement naturally.',
  },
  {
    step: '3',
    title: 'Align the handles with your wrist',
    text: 'The top of the walker handle should line up with the crease of your wrist when your arms hang straight down. This is the most reliable measurement for correct height.',
  },
  {
    step: '4',
    title: 'Adjust the height using the push-button pins',
    text: 'Press the push-button adjustment pins on each leg and slide the leg up or down to the correct notch. Make sure both sides are set to the same height before walking.',
  },
  {
    step: '5',
    title: 'Test the grip and stability',
    text: 'Hold the grips firmly, take a few steps, and check that the walker moves smoothly without rocking. If it wobbles or feels uneven, recheck the leg settings.',
  },
];

const mistakes = [
  ['Setting the walker too high', 'Forces the shoulders upward and creates neck and shoulder tension.'],
  ['Setting the walker too low', 'Causes hunching, back strain, and reduced balance control.'],
  ['Leaning too far forward', 'Shifts weight away from center and increases fall risk.'],
  ['Using a walker sized for someone else', 'Fit varies by body height, arm length, and condition.'],
  ['Skipping the safety pin check', 'Unsecured legs can slip under pressure during walking.'],
];

const relatedArticles = [
  {
    image: 'twa-36-1-3.webp',
    href: '/how-to-use-a-walker-with-wheels',
    title: 'How To Use A Walker With Wheels',
    description: 'A walker with wheels can greatly improve balance and mobility when used correctly.',
  },
  {
    image: 'image-9-1.webp',
    href: '/understanding-upright-walkers-how-they-improve-senior-posture',
    title: 'Understanding Upright Walkers',
    description: 'Learn how upright walkers promote better alignment, balance, and confidence.',
  },
  {
    image: 'twa33-1.webp',
    href: '/holiday-safety-tips-for-seniors-prevent-falls-fires-seasonal-risks',
    title: 'Holiday Safety Tips for Seniors',
    description: 'The holidays can hide serious dangers for seniors, from slippery floors to fire hazards.',
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

function FittingWalkerDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Stop the Struggle: The Ultimate Easy Guide to Fitting a Walker for Seniors Safely - The Walker Advisor';
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
              Stop the Struggle: The Ultimate Easy Guide to Fitting a Walker for Seniors Safely
            </h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">
              Struggling to find the right walker fit? Discover this easy step-by-step guide for seniors on choosing, adjusting, and maintaining walkers for maximum comfort and safety.
            </p>
            <img
              className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover"
              src={`${process.env.PUBLIC_URL}/images/twa-blog26-1-1.webp`}
              alt="Senior man adjusting an upright walker"
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
            <Paragraph>A walker that is set to the wrong height or used incorrectly can cause back pain, poor posture, and increased fall risk. This guide walks through every step needed to fit a walker correctly, choose the right type, and keep it safe for daily use.</Paragraph>
          </section>

          <Paragraph>Many seniors receive a walker without proper fitting instructions. A walker set too high forces the shoulders up and strains the neck. A walker set too low causes hunching and back pain. Neither extreme is safe.</Paragraph>
          <Paragraph>Fitting a walker correctly takes only a few minutes and can dramatically improve comfort, posture, and confidence during every walk.</Paragraph>

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
          <SectionHeading id="section-1">The Purpose of Fitting a Walker Correctly</SectionHeading>
          <Paragraph>A properly fitted walker keeps the spine aligned, reduces joint strain, and allows the body to move with confidence. When the fit is off, the benefits of using a walker can quickly become drawbacks.</Paragraph>
          <Paragraph>Correct fitting also helps caregivers understand what to look for when a senior seems uncomfortable, is walking with a stoop, or is gripping the handles too tightly.</Paragraph>
          <BlogList>
            <li>Maintains upright posture and reduces back strain.</li>
            <li>Allows arms to bear weight naturally through the wrists.</li>
            <li>Prevents overreaching or overcrowding the frame.</li>
            <li>Reduces the chance of tripping over the walker legs.</li>
            <li>Improves the confidence needed for daily walking.</li>
          </BlogList>

          {/* Section 2 */}
          <SectionHeading id="section-2">Types of Walkers Available</SectionHeading>
          <Paragraph>Each walker type fits differently and suits different levels of mobility. Choosing the correct type before adjusting the fit is an important first step.</Paragraph>
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
          <SectionHeading id="section-3">Step-by-Step Walker Fitting Guide</SectionHeading>
          <Paragraph>Follow these steps in order for a safe and accurate fit. Have the senior wear the shoes they plan to walk in, since shoe thickness affects the correct measurement.</Paragraph>
          <div className="mt-4 space-y-3">
            {fittingSteps.map((item) => (
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
          <SectionHeading id="section-4">How to Adjust Walker Height</SectionHeading>
          <div className="mt-3 overflow-hidden rounded-[8px] bg-[#f3f3f3]">
            <img
              className="mx-auto h-[220px] w-full object-contain p-3"
              src={`${process.env.PUBLIC_URL}/images/twa-blog26-2-683x1024.webp`}
              alt="Too-short walker vs correct walker height comparison"
            />
          </div>
          <Paragraph>Most walkers use push-button height adjustment pins on each leg. To adjust, press the button firmly, slide the leg to the desired notch, and release. The button should snap into place with a click.</Paragraph>
          <BlogList>
            <li>Always adjust all four legs to the same height.</li>
            <li>Press and hold the button fully before sliding the leg.</li>
            <li>Check the pin is locked before putting weight on the walker.</li>
            <li>Some walkers use twist-lock screws instead of pins, which need to be tightened by hand.</li>
            <li>Re-check the height after every few weeks of regular use.</li>
          </BlogList>

          {/* Section 5 */}
          <SectionHeading id="section-5">Common Mistakes to Avoid</SectionHeading>
          <div className="mt-5 grid grid-cols-2 border-y border-[#d8dde2] font-manrope text-[9px] text-[#1f2930]">
            <div className="px-3 py-3 font-black">Mistake</div>
            <div className="border-l border-[#d8dde2] px-3 py-3 font-black">Why It Matters</div>
            {mistakes.map(([mistake, reason]) => (
              <div className="contents" key={mistake}>
                <div className="px-3 py-3 font-medium">{mistake}</div>
                <div className="border-l border-[#d8dde2] px-3 py-3 font-medium">{reason}</div>
              </div>
            ))}
          </div>

          {/* Section 6 */}
          <SectionHeading id="section-6">Walker Maintenance Safety Checks</SectionHeading>
          <Paragraph>A well-fitted walker is only safe if it is also well-maintained. Carry out these checks regularly to prevent unexpected failures during use.</Paragraph>
          <BlogList>
            <li>Inspect rubber tips on all legs for wear — replace when worn smooth.</li>
            <li>Check that all push-button pins are snapping securely into place.</li>
            <li>Examine the frame for cracks, bends, or loose joints.</li>
            <li>For wheeled walkers, test that the wheels roll smoothly and do not wobble.</li>
            <li>For rollators, check that the hand brakes engage and hold firmly.</li>
            <li>Wipe down the grips and frame regularly to keep surfaces hygienic.</li>
          </BlogList>

          {/* Section 7 - FAQ */}
          <SectionHeading id="section-7">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['How do I know if my walker is the right height?', 'Stand upright in your walker. Your elbows should have a slight 15 to 20 degree bend when holding the grips. The grip top should align with your wrist crease when arms hang at your sides.'],
              ['Can a walker that is too tall cause back pain?', 'Yes. A walker set too high forces the shoulders and arms upward, which creates tension in the upper back, neck, and shoulders during walking.'],
              ['What type of walker is best for seniors with poor balance?', 'A standard four-leg walker without wheels provides the most stability. Rollators and two-wheel walkers are better for seniors with more mobility but less endurance.'],
              ['How often should walker tips be replaced?', 'Replace rubber tips when they become worn smooth, cracked, or compressed. On average this is every 6 to 12 months depending on how often the walker is used.'],
              ['Can I adjust my walker myself or do I need a professional?', 'Most walkers can be adjusted at home using the push-button pins. However, if you are unsure about the correct height, an occupational therapist or physiotherapist can help with proper fitting.'],
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
            <Paragraph>Fitting a walker correctly is one of the most impactful things a senior or caregiver can do to improve daily safety and comfort. A few minutes of adjustment can prevent months of back pain, reduce fall risk, and make walking feel easier and more natural.</Paragraph>
            <Paragraph>Whether the walker is brand new or has been in use for years, it is always worth checking the fit. Pair the right height with the right walker type, and mobility becomes far less of a struggle.</Paragraph>
          </section>

          {/* References */}
          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-9">
            <div className="flex items-center gap-3">
              <span className="text-[22px] text-[#ffc400]">↪</span>
              <h2 className="text-[16px] font-black text-black">References</h2>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>National Institute on Aging: Using Walkers Safely. https://www.nia.nih.gov</li>
              <li>CDC: Older Adult Fall Prevention — Mobility Aids. https://www.cdc.gov/falls</li>
              <li>American Physical Therapy Association: Walker Fitting Guidelines. https://www.apta.org</li>
              <li>Mayo Clinic: Walker Use and Adjustment for Seniors. https://www.mayoclinic.org</li>
            </ol>
          </section>

          <SocialDots />

          {/* Comments */}
          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <div className="mt-6 border-b border-[#d8dde2] pb-6">
              <p className="font-manrope text-[11px] font-black text-black">Robert M.</p>
              <p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">I followed the wrist alignment tip and it completely fixed the back pain my father was having. Simple fix that made a huge difference.</p>
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

export default FittingWalkerDetail;
