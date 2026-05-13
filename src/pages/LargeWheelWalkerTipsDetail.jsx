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
  'Understanding walkers with large wheels',
  'Helpful preparation for using a large wheel walker',
  'Comfort and stability with large wheels',
  'Troubleshooting common large-wheel walker issues',
  'Frequently Asked Questions',
  'Final Thoughts',
  'Reference',
];

const relatedArticles = [
  {
    image: 'twa-blog11-1024x683.webp',
    title: 'Social Activities for Older Adults: The Best Ways to Stay Connected, Active, and Happy',
    description: 'A stronger social routine can support confidence, movement, and daily independence.',
  },
  {
    image: 'image-2-1.webp',
    title: 'Can Heart Issues Increase Fall Risk in Seniors?',
    description: 'Your heart, blood flow, and medications can quietly affect balance and fall risk.',
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

function TipBox({ children }) {
  return <section className="mt-5 rounded-[8px] border-l-4 border-[#ffc400] bg-[#fff3c9] p-4"><p className="font-manrope text-[10px] font-bold leading-5 text-[#1f2930]">{children}</p></section>;
}

function FeatureDiagram() {
  const items = [
    ['Large Wheels', 'smoother outdoor movement'],
    ['Hand Brakes', 'speed and stopping control'],
    ['Stable Seat', 'safer rest breaks'],
    ['Storage', 'keeps items off handles'],
  ];

  return (
    <div className="mt-5 flex items-center justify-between rounded-[8px] bg-[#f3f3f3] px-4 py-5">
      {items.map(([title, text], index) => (
        <div className="flex items-center" key={title}>
          <div className={`flex h-14 w-14 flex-col items-center justify-center rounded-full px-2 text-center font-manrope ${index % 2 === 0 ? 'bg-black text-white' : 'bg-[#ffc400] text-black'}`}>
            <span className="text-[7px] font-black leading-none">{title}</span>
            <span className="mt-1 text-[5px] font-bold leading-tight">{text}</span>
          </div>
          {index < items.length - 1 && <div className="mx-1 h-[2px] w-4 bg-[#b7bdc3]" />}
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

function LargeWheelWalkerTipsDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Got a Walker with Large Wheels? Try These Game-Changing Tips for Seniors - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[430px]">
          <header className="pt-8 text-center">
            <h1 className="mx-auto max-w-[410px] text-[19px] font-black leading-tight text-black md:text-[21px]">Got a Walker with Large Wheels? Try These Game-Changing Tips for Seniors</h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">Large-wheel walkers can make mobility smoother, if you know how to use them right. These expert tips will help seniors move safely and confidently.</p>
            <img className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover" src={`${process.env.PUBLIC_URL}/images/twa-blog7-1-1024x684.webp`} alt="Older man using a large wheel walker on a porch with caregiver support" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">SA</div>
            <p className="font-manrope text-[12px] font-black text-black">Syed Ali</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>Large-wheel walkers can make outdoor walking smoother and more comfortable, but they require brake control, posture awareness, and careful use on slopes, curbs, and uneven ground.</Paragraph>
          </section>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[15px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-2 px-6 py-5 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
              {toc.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Understanding Walkers with Large Wheels</SectionHeading>
          <SubHeading>What Makes a Walker Large-Wheeled?</SubHeading>
          <Paragraph>Large-wheel walkers and rollators usually have bigger front wheels than standard indoor walkers. These wheels can roll more smoothly over sidewalks, thresholds, brick paths, and outdoor surfaces.</Paragraph>
          <Paragraph>The benefit is smoother movement. The tradeoff is that the walker may move faster, so the user needs good hand control and reliable brakes.</Paragraph>
          <SubHeading>Benefits of a Walker with Large Wheels</SubHeading>
          <FeatureDiagram />
          <Paragraph>A large-wheel walker is designed to reduce vibration, make outdoor walking feel less choppy, and help the user travel across small surface changes with less effort.</Paragraph>

          <SectionHeading id="section-2">Helpful Preparation for Using a Large Wheel Walker</SectionHeading>
          <SubHeading>1. Choose the Right Walker for Your Needs</SubHeading>
          <BlogList>
            <li>Choose large wheels for outdoor paths, errands, and uneven surfaces.</li>
            <li>Choose smaller or fixed walkers for maximum indoor stability.</li>
            <li>Test brake reach and squeeze strength before daily use.</li>
          </BlogList>
          <TipBox>If the walker rolls away too quickly, slow down and practice brake control before using it outdoors.</TipBox>

          <SubHeading>2. Adjust the Walker Properly</SubHeading>
          <Paragraph>Handle height should allow the user to stand upright with relaxed shoulders. A walker that is too high or low can cause leaning, shoulder strain, or poor control.</Paragraph>
          <Paragraph>Stand inside the walker frame with arms relaxed. The handles should sit around wrist height, and the elbows should bend slightly when holding the grips.</Paragraph>

          <SubHeading>3. Practice Proper Walking Technique</SubHeading>
          <Paragraph>Keep the walker close to the body, step into the frame, and avoid pushing it far ahead. On slopes, use the brakes lightly to control speed instead of letting the walker pull forward.</Paragraph>
          <BlogList>
            <li>Walk slowly on ramps and driveways.</li>
            <li>Lock brakes before sitting or standing.</li>
            <li>Turn in a wide, controlled arc instead of pivoting sharply.</li>
          </BlogList>
          <TipBox>Practice in a hallway or driveway before using a large-wheel walker in crowded public areas.</TipBox>

          <SubHeading>4. Use the Walker on Good Surfaces</SubHeading>
          <Paragraph>Large wheels are helpful outdoors, but they are not safe on every surface. Avoid loose gravel, steep grass, wet leaves, icy sidewalks, and broken pavement whenever possible.</Paragraph>
          <SubHeading>Best surfaces for large-wheel walkers</SubHeading>
          <BlogList>
            <li>Smooth sidewalks and paved paths.</li>
            <li>Shopping centers and medical offices.</li>
            <li>Flat driveways and patios.</li>
            <li>Indoor floors where the frame has enough turning space.</li>
          </BlogList>
          <SubHeading>Surfaces to approach with caution</SubHeading>
          <BlogList>
            <li>Steep ramps or sloped driveways.</li>
            <li>Loose gravel, grass, sand, or mulch.</li>
            <li>Wet leaves, ice, snow, or broken pavement.</li>
            <li>Raised thresholds that can stop the wheels suddenly.</li>
          </BlogList>
          <TipBox>Large wheels help with small surface changes, but they do not make unsafe terrain safe. Choose the smoothest route available.</TipBox>

          <SubHeading>5. Learn How to Sit and Stand Safely</SubHeading>
          <Paragraph>If the walker has a seat, brakes must be locked before sitting. The user should back up until the seat touches the legs, reach back when possible, and sit slowly.</Paragraph>
          <BlogList>
            <li>Lock both brakes before sitting.</li>
            <li>Never sit on a rollator while someone pushes it.</li>
            <li>Stand slowly and regain balance before walking.</li>
          </BlogList>

          <SubHeading>6. Pay Attention to Comfort and Control</SubHeading>
          <Paragraph>Large-wheel walkers are useful only when the user can manage speed and steering. If the walker feels too fast, too wide, or too heavy, another style may be safer.</Paragraph>
          <TipBox>If the walker feels like it is pulling the user forward, review brake tension, handle height, and walking posture before continuing.</TipBox>

          <SubHeading>7. Strengthen Your Hands for Better Stability</SubHeading>
          <Paragraph>Grip strength helps with brake use and steering. Gentle hand exercises, reviewed with a clinician when needed, can make the walker easier to control.</Paragraph>
          <div className="mt-4 grid grid-cols-2 gap-3 rounded-[8px] border border-[#d8dde2] p-3 font-manrope text-[9px] font-semibold leading-4 text-[#1f2930]">
            <div>
              <p className="font-black text-black">Helpful hand skills</p>
              <p className="mt-1">Squeezing brakes, holding grips, and controlling turns.</p>
            </div>
            <div>
              <p className="font-black text-black">When to ask for help</p>
              <p className="mt-1">Pain, numbness, weak grip, or difficulty locking brakes.</p>
            </div>
          </div>

          <SectionHeading id="section-3">Comfort and Stability with Large Wheels</SectionHeading>
          <Paragraph>Large wheels reduce vibration and make outdoor movement smoother, but comfort also depends on handle height, grip shape, seat height, frame width, and weight capacity.</Paragraph>
          <BlogList>
            <li>Check that the walker fits through doorways and hallways.</li>
            <li>Keep storage weight centered and low.</li>
            <li>Do not hang heavy bags from the handles.</li>
            <li>Inspect brakes, wheels, and folding locks every week.</li>
          </BlogList>
          <TipBox>If the walker feels unstable, stop using it outdoors until the brakes, wheel alignment, and handle height are checked.</TipBox>

          <SectionHeading id="section-4">Troubleshooting Common Large-Wheel Walker Issues</SectionHeading>
          <BlogList>
            <li><strong>Walker pulls forward:</strong> slow down, check brake tension, and keep the frame closer to the body.</li>
            <li><strong>Walker is hard to turn:</strong> confirm the frame is not too wide for the space and practice wider turns.</li>
            <li><strong>Wheels wobble:</strong> inspect wheel hardware and stop using the walker outdoors until checked.</li>
            <li><strong>Hands get tired:</strong> review grip shape, brake reach, and handle height.</li>
            <li><strong>Seat feels unstable:</strong> lock brakes, sit slowly, and check the weight rating.</li>
          </BlogList>
          <TipBox>Any sudden change in braking, steering, folding locks, or wheel alignment should be treated as a safety issue.</TipBox>

          <SectionHeading id="section-5">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['Are bigger walker wheels always better?', 'No. They are smoother outdoors, but they can move too quickly for users who need maximum stability.'],
              ['What surfaces are best for large wheels?', 'Sidewalks, paved paths, stores, and smooth outdoor areas are usually best.'],
              ['Can large wheels be used indoors?', 'Yes, if the walker fits through doorways and the user can turn it safely.'],
              ['Do large wheels need more maintenance?', 'They should be checked regularly for wobbling, debris, worn tread, and brake alignment.'],
              ['Can I use large wheels on grass?', 'Only with caution on firm, flat grass. Soft, wet, or uneven grass can stop wheels or cause tipping.'],
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
            <Paragraph>Walkers with larger wheels offer significant advantages for seniors who need mobility support while maintaining an active lifestyle. The <a className="font-black text-[#0b61a4] no-underline hover:underline" href="/tools">best walkers for seniors</a> provide stability, ease of movement, and comfort, helping users navigate various terrains more smoothly.</Paragraph>
            <Paragraph>By following proper usage techniques and avoiding common mistakes, seniors can enjoy increased independence and safety. Always consult a healthcare provider or physical therapist when selecting or adjusting a walker.</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-7">
            <div className="flex items-center gap-3">
              <span className="text-[22px] leading-none text-[#ffc400]">🌎</span>
              <h2 className="text-[16px] font-black text-black">Reference</h2>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://pubmed.ncbi.nlm.nih.gov/22157334/">PubMed - The effect of first-time 4-wheeled walker use on gait</a></li>
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6852995/">PMC - Walking with rollator: A systematic review</a></li>
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://www.handicapcentrum.se/en/the-importance-of-the-4-wheeled-walker/">Swedish Handicap Institute - The Importance of the 4-Wheeled Walker</a></li>
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://physio-pedia.com/Walkers">Physio-Pedia - Walkers</a></li>
            </ol>
          </section>

          <SocialDots />

          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
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

export default LargeWheelWalkerTipsDetail;
