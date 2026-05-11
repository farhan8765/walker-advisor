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
  'Is Transitioning Off a Walker Right for You?',
  'Assessing Your Readiness to Walk Without a Walker',
  'Exercises to Build Strength and Balance',
  'Step-by-Step Transition Plan',
  'Transitioning from Walker to Cane',
  'Safety Tips During the Transition Period',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const readinessChecklist = [
  ['Balance test', 'Can you stand on one foot for 10 seconds without holding on to anything?'],
  ['Strength test', 'Can you rise from a standard chair without using your arms for support?'],
  ['Endurance test', 'Can you walk for at least 10 minutes continuously without significant fatigue?'],
  ['Confidence level', 'Do you feel confident walking indoors without the walker in short bursts?'],
  ['Medical clearance', 'Has your doctor or physiotherapist confirmed that reduced walker use is appropriate for your current condition?'],
];

const exercises = [
  {
    title: 'Standing Heel-to-Toe Walk',
    text: "Walk in a straight line placing one foot directly in front of the other so the heel of your front foot touches the toes of your back foot. Start with 10 steps and increase gradually. This exercise trains balance and builds walking coordination.",
  },
  {
    title: 'Single-Leg Balance Hold',
    text: 'Stand near a wall or counter for safety. Lift one foot slightly off the floor and hold for 10 seconds, then switch sides. Aim for 3 sets per side daily. This builds the ankle and hip stability needed for unsupported walking.',
  },
  {
    title: 'Sit-to-Stand Repetitions',
    text: 'Sit at the edge of a sturdy chair and stand up without using your hands. Slowly lower yourself back down. Perform 10 repetitions. This exercise strengthens the quadriceps and glutes, which are the primary muscles for independent walking.',
  },
  {
    title: 'Side Steps with Resistance Band',
    text: "Place a resistance band around your ankles or just above the knees. Step sideways 10 times in each direction. This strengthens the hip abductor muscles that stabilize the pelvis during walking.",
  },
];

const transitionSteps = [
  {
    step: '1',
    title: "Start by reducing indoor walker use",
    text: 'Begin using the walker less frequently on familiar indoor surfaces where the floor is flat, well-lit, and obstacle-free. Walk short distances — to the kitchen, to the bathroom — without it first.',
  },
  {
    step: '2',
    title: 'Walk near walls and furniture for backup support',
    text: 'Keep one hand near a wall or piece of furniture as you practice walking independently. This gives you the confidence of a safety net without relying on the walker.',
  },
  {
    step: '3',
    title: 'Increase distance gradually',
    text: 'Each week, extend the distance of your walker-free walks by a few meters. Track your progress. If you feel unsteady, reduce the distance and build more slowly.',
  },
  {
    step: '4',
    title: "Transition the walker to 'backup' status",
    text: 'Once you are comfortable walking indoors without the walker, keep it nearby rather than using it for every trip. Use it for longer distances, uneven surfaces, or when fatigued.',
  },
  {
    step: '5',
    title: 'Transition to a cane for outdoor use',
    text: 'A cane provides light support and balance assistance for outdoor use while being less restrictive than a walker. Work with your physiotherapist to select the correct cane height and technique.',
  },
];

const relatedArticles = [
  {
    image: 'twa-featured-image.webp',
    href: '/how-to-adjust-a-walker-to-the-correct-height-a-safety-checklist',
    title: 'How to Adjust a Walker to Correct Height',
    description: "The right walker height isn't just comfort — it's your first step toward safer, steadier movement.",
  },
  {
    image: 'twa-blog11-1024x683.webp',
    href: '/caregivers-guide-to-helping-seniors-pick-and-use-the-perfect-walker',
    title: "Caregivers' Guide to the Perfect Walker",
    description: 'The right guidance helps caregivers ensure seniors get the best walker for their needs.',
  },
  {
    image: 'twa-blog26-1-1.webp',
    href: '/stop-the-struggle-the-ultimate-easy-guide-to-fitting-a-walker-for-seniors',
    title: 'Guide to Fitting a Walker for Seniors',
    description: 'A step-by-step guide for seniors on choosing, adjusting, and maintaining walkers safely.',
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
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">AA</div>
            <p className="font-manrope text-[12px] font-black text-black">Amir Abbasi</p>
          </div>

          {/* Key Summary */}
          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>Transitioning from a walker to independent walking is a goal many seniors and rehabilitation patients share. It requires a careful, phased approach that builds strength, balance, and confidence progressively — without rushing into unsafe situations. This guide provides the exact steps and exercises needed to make that transition safely.</Paragraph>
          </section>

          <Paragraph>Using a walker long-term after recovery can sometimes become a habit rather than a medical necessity. Many seniors have the physical ability to walk with less support but continue relying heavily on their walker out of habit or fear of falling.</Paragraph>
          <Paragraph>Transitioning should always be guided by your doctor or physiotherapist. This article provides an educational overview of the process to complement professional advice.</Paragraph>

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
          <SectionHeading id="section-1">Is Transitioning Off a Walker Right for You?</SectionHeading>
          <Paragraph>Not every walker user should aim to stop using one. Walkers are long-term tools for many seniors, particularly those with progressive conditions, significant balance disorders, or advanced age-related weakness. The goal of this guide is not to pressure anyone to abandon support they genuinely need.</Paragraph>
          <Paragraph>However, for those who were prescribed a walker temporarily — after surgery, illness, or injury — and who have since regained significant strength and balance, a planned, gradual reduction in walker use may be appropriate.</Paragraph>
          <BlogList>
            <li>Always discuss the plan to reduce walker dependence with your doctor or physical therapist first.</li>
            <li>Never stop using a walker abruptly — transition gradually over weeks or months.</li>
            <li>Setbacks are normal; returning to full walker use temporarily is not failure.</li>
            <li>The goal is safety, not speed. A slow transition is a safe transition.</li>
          </BlogList>

          {/* Section 2 */}
          <SectionHeading id="section-2">Assessing Your Readiness to Walk Without a Walker</SectionHeading>
          <Paragraph>Before beginning any transition, assess whether your current strength and balance meet the basic requirements for reduced support. Use this checklist as a starting point.</Paragraph>
          <div className="mt-5 grid grid-cols-2 border-y border-[#d8dde2] font-manrope text-[9px] text-[#1f2930]">
            <div className="px-3 py-3 font-black">Test</div>
            <div className="border-l border-[#d8dde2] px-3 py-3 font-black">What to Look For</div>
            {readinessChecklist.map(([test, criteria]) => (
              <div className="contents" key={test}>
                <div className="px-3 py-3 font-medium">{test}</div>
                <div className="border-l border-[#d8dde2] px-3 py-3 font-medium">{criteria}</div>
              </div>
            ))}
          </div>

          {/* Section 3 */}
          <SectionHeading id="section-3">Exercises to Build Strength and Balance</SectionHeading>
          <Paragraph>These exercises are designed to be performed while still using a walker. They build the foundational strength and coordination required for independent walking without creating fall risk.</Paragraph>
          <div className="mt-3 overflow-hidden rounded-[8px] bg-[#f3f3f3]">
            <img
              className="mx-auto h-[220px] w-full object-cover p-3"
              src={`${process.env.PUBLIC_URL}/images/twa-blog11-1024x683.webp`}
              alt="Senior woman exercising with physiotherapist assistance to improve mobility"
            />
          </div>
          <div className="mt-4 space-y-3">
            {exercises.map((ex) => (
              <div className="rounded-[8px] border border-[#d8dde2] p-4" key={ex.title}>
                <h3 className="text-[11px] font-black text-black">{ex.title}</h3>
                <p className="mt-1 font-manrope text-[10px] font-medium leading-[1.85] text-[#1f2930]">{ex.text}</p>
              </div>
            ))}
          </div>

          {/* Section 4 */}
          <SectionHeading id="section-4">Step-by-Step Transition Plan</SectionHeading>
          <Paragraph>Follow this plan over several weeks, moving to the next step only when you feel stable and confident at the current one. There is no fixed timeline — listen to your body.</Paragraph>
          <div className="mt-4 space-y-3">
            {transitionSteps.map((item) => (
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
          <SectionHeading id="section-5">Transitioning from Walker to Cane</SectionHeading>
          <Paragraph>A cane is often the bridge between walker use and fully independent walking. It provides a single point of contact for balance without restricting movement or gait pattern.</Paragraph>
          <BlogList>
            <li>Hold the cane on the side opposite to your weaker leg for maximum support.</li>
            <li>Set cane height to the level of your wrist crease, just like a walker handle.</li>
            <li>Move the cane and the weaker leg forward at the same time for a natural gait rhythm.</li>
            <li>Practice on flat, familiar surfaces before using the cane outdoors or on slopes.</li>
            <li>A quad cane (four-point base) provides more stability than a standard single-point cane.</li>
          </BlogList>

          {/* Section 6 */}
          <SectionHeading id="section-6">Safety Tips During the Transition Period</SectionHeading>
          <Paragraph>The transition period carries the highest fall risk because confidence may exceed actual ability. Follow these precautions at all times during the transition.</Paragraph>
          <BlogList>
            <li>Always tell a family member or caregiver when you are attempting a walker-free walk.</li>
            <li>Wear non-slip shoes with firm soles during all practice sessions.</li>
            <li>Remove rugs, cables, and low obstacles from walking paths at home.</li>
            <li>Do not attempt stairs without a railing and a helper present during the early transition phase.</li>
            <li>Keep your medical alert device on your body at all times during transition walks.</li>
            <li>If you feel dizzy, short of breath, or unstable at any point, stop and use the walker.</li>
          </BlogList>

          {/* Section 7 - FAQ */}
          <SectionHeading id="section-7">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['How long does it take to transition off a walker?', 'The timeline varies widely depending on the original reason for walker use, current fitness level, and consistency of exercise. Most planned transitions take 4 to 12 weeks under physiotherapy guidance.'],
              ['Can I transition off a walker without physiotherapy?', 'Light indoor transitions with a helper present may be safe for some seniors. However, formal physiotherapy guidance significantly reduces fall risk and creates a more efficient transition plan.'],
              ['What if I fall during the transition period?', 'Remain calm and assess for injury before attempting to get up. If hurt or unable to get up, use your medical alert device or call for help. Report the fall to your doctor and review whether the transition pace needs to slow down.'],
              ["Should I keep my walker after I stop needing it?", 'Yes. Keep your walker accessible even after you feel you no longer need it regularly. Illness, fatigue, or a bad day can temporarily reduce balance and strength. Having the walker available prevents falls on difficult days.'],
              ['Is it normal to feel scared about walking without a walker?', 'Fear of falling is extremely common in seniors and completely understandable. Working with a physiotherapist in a structured environment and progressing very gradually helps build genuine confidence alongside physical ability.'],
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
            <Paragraph>Transitioning from a walker to walking independently is a meaningful goal that represents progress and recovery. It requires patience, consistency, and a willingness to take it one step at a time — literally and figuratively.</Paragraph>
            <Paragraph>Work with your healthcare team, commit to the exercises, and above all, prioritize safety over speed. Every stable, confident step you take without support is a genuine achievement worth celebrating.</Paragraph>
          </section>

          {/* References */}
          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-9">
            <div className="flex items-center gap-3">
              <span className="text-[22px] text-[#ffc400]">↪</span>
              <h2 className="text-[16px] font-black text-black">References</h2>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>National Institute on Aging: Physical Activity for Older Adults. https://www.nia.nih.gov</li>
              <li>American Physical Therapy Association: Gait Training and Walker Weaning. https://www.apta.org</li>
              <li>CDC: Preventing Falls — Strength and Balance Exercises. https://www.cdc.gov/falls</li>
              <li>Physiopedia: Mobility Aid Prescription and Weaning Protocols. https://www.physio-pedia.com</li>
            </ol>
          </section>

          <SocialDots />

          {/* Comments */}
          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <div className="mt-6 border-b border-[#d8dde2] pb-6">
              <p className="font-manrope text-[11px] font-black text-black">David H.</p>
              <p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">After my hip replacement, I was terrified I would need the walker forever. Following a plan like this one, I was walking on my own after about 8 weeks. The sit-to-stand exercise was the most helpful for me.</p>
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

export default TransitionWalkerIndependentDetail;
