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
  'Recognizing When a Senior Requires a Walker',
  'Walker Varieties and How Caregivers Can Assist in Selection',
  'A Step-by-Step Guide to Ensuring a Proper Walker Fit',
  "Educating Seniors on Safe Walker Usage: A Caregiver's Duty",
  'Maintaining and Adjusting Walkers: Tips for Caregivers',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const walkerRows = [
  ['Standard Walker', 'High stability, slower pace', 'Seniors who need maximum support'],
  ['Two-Wheel Walker', 'Front wheels with rear tips', 'Seniors who need support but can step forward'],
  ['Rollator', 'Seat, brakes, basket, four wheels', 'Active seniors who need rest breaks'],
  ['Upright Walker', 'Forearm support and tall posture', 'Seniors with posture or wrist strain'],
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
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">SA</div>
            <p className="font-manrope text-[12px] font-black text-black">Syed Ali</p>
          </div>

          {/* Key Summary */}
          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>For caregivers, helping seniors choose and properly use a walker is more than simply buying a mobility device. The right walker can reduce fall risk, improve confidence, and support daily independence. The wrong walker, or poor walker habits, can create new safety problems.</Paragraph>
          </section>

          <Paragraph>As a caregiver, your presence is central in helping seniors preserve their dignity and independence. Many older adults resist walkers because they fear looking weak or losing freedom. Your role is to guide the conversation with patience, practical information, and respect for their preferences.</Paragraph>
          <Paragraph>This guide explains how to recognize when a walker may be needed, compare walker styles, help with proper fitting, teach safe habits, and keep the device working correctly over time.</Paragraph>

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

          <SectionHeading id="section-1">Recognizing When a Senior Requires a Walker</SectionHeading>
          <Paragraph>As a caregiver, you are often the first person to notice small changes in mobility. A senior may not ask for help directly, but repeated stumbles, furniture walking, fatigue, or fear of movement can be signs that extra support is needed.</Paragraph>
          <Paragraph>Watch for patterns over several days rather than judging from one difficult moment. The goal is to identify when a walker could make daily movement safer, not to take away independence.</Paragraph>
          <BlogList>
            <li>Holding walls, furniture, or countertops while walking.</li>
            <li>Taking shorter, slower, or more hesitant steps.</li>
            <li>Avoiding walks they used to complete comfortably.</li>
            <li>Standing up with more effort or needing nearby support.</li>
            <li>Recent falls, near-falls, dizziness, or fear of falling.</li>
          </BlogList>

          <SectionHeading id="section-2">Walker Varieties and How Caregivers Can Assist in Selection</SectionHeading>
          <div className="mt-4 overflow-hidden rounded-[6px] border border-[#d8dde2]">
            <div className="grid grid-cols-[1fr_1.15fr_1.2fr] bg-[#ffc400] font-manrope text-[8.5px] font-black text-black">
              {['Walker Type', 'Best For', 'Caregiver Role in Selection'].map((heading) => (
                <div className="border-r border-black/10 px-2 py-2 last:border-r-0" key={heading}>{heading}</div>
              ))}
            </div>
            {walkerRows.map((row) => (
              <div className="grid grid-cols-[1fr_1.15fr_1.2fr] border-t border-[#d8dde2] font-manrope text-[8.5px] font-medium leading-4 text-[#1f2930]" key={row[0]}>
                {row.map((cell) => (
                  <div className="border-r border-[#d8dde2] px-2 py-2 last:border-r-0" key={cell}>{cell}</div>
                ))}
              </div>
            ))}
          </div>
          <Paragraph>A caregiver can help by matching the walker to the senior's home, strength, balance, and daily routine. If the senior walks mostly indoors, a different walker may be appropriate than one used for errands, appointments, and outdoor paths.</Paragraph>
          <Paragraph>When possible, let the senior test the walker before buying. Comfort, grip height, brake control, and confidence matter as much as product features.</Paragraph>

          <SectionHeading id="section-3">A Step-by-Step Guide to Ensuring a Proper Walker Fit</SectionHeading>
          <Paragraph>A walker that is too high or too low can cause shoulder strain, poor posture, and unsafe movement. Caregivers should help with fitting before the senior uses the walker regularly.</Paragraph>
          <BlogList>
            <li>Have the senior wear their regular walking shoes.</li>
            <li>Ask them to stand upright with arms relaxed at their sides.</li>
            <li>Adjust handles to the crease of the wrist.</li>
            <li>Confirm the elbows bend slightly when gripping the handles.</li>
            <li>Check that every leg is locked at the same height.</li>
            <li>Watch the first few steps and correct leaning or overreaching.</li>
          </BlogList>

          <SectionHeading id="section-4">Educating Seniors on Safe Walker Usage: A Caregiver's Duty</SectionHeading>
          <Paragraph>Buying the walker is only the first step. Seniors often need repeated reminders and patient coaching before walker use becomes natural.</Paragraph>
          <BlogList>
            <li>Keep the walker close to the body instead of pushing it too far ahead.</li>
            <li>Step into the walker frame, not around it.</li>
            <li>Move slowly when turning, especially in tight spaces.</li>
            <li>Lock rollator brakes before sitting or standing.</li>
            <li>Avoid carrying heavy items while using the walker.</li>
          </BlogList>
          <Paragraph>Encouragement matters. Frame the walker as a tool that protects independence rather than a symbol of weakness.</Paragraph>

          <SectionHeading id="section-5">Maintaining and Adjusting Walkers: Tips for Caregivers</SectionHeading>
          <Paragraph>Walkers need routine inspection just like any other safety device. A caregiver should check for worn parts, loose fittings, and changes in the senior's posture or walking pattern.</Paragraph>
          <BlogList>
            <li>Inspect rubber tips or wheels weekly.</li>
            <li>Make sure push buttons and height locks click fully into place.</li>
            <li>Test rollator brakes before outings.</li>
            <li>Clean grips and handles regularly.</li>
            <li>Recheck height when shoes, posture, or strength changes.</li>
          </BlogList>

          <SectionHeading id="section-6">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['How can I convince a reluctant senior to use a walker?', 'Focus on independence and safety rather than weakness. Let the senior help choose the walker and explain how it can support the activities they care about.'],
              ['Can walkers be used on stairs?', 'Walkers are generally not safe on stairs unless a therapist has specifically trained the senior in a safe method. Use railings and assistance instead.'],
              ['How often should walkers be inspected?', 'Do a quick visual check weekly and a more careful inspection every month. Check tips, wheels, brakes, height pins, and frame stability.'],
              ['How can I know if the walker is the right fit for my loved one?', 'The senior should stand upright, keep shoulders relaxed, and have a slight elbow bend when gripping the handles.'],
              ['What are the signs that the walker may be causing pain or unsafe walking?', 'Watch for leaning, shoulder shrugging, wrist pain, dragging the walker, or avoiding the walker altogether.'],
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
            <Paragraph>As a caregiver, your role is about more than just providing a walker—it's about making it a tool that helps seniors move confidently and safely. From selecting the right walker to teaching safe usage and regular maintenance, every step helps foster independence and reduce mobility risks. Many seniors may resist walkers due to concerns about dependence, but by emphasizing how the walker enhances their safety and quality of life, you can ease their worries. Personalizing the walker with comfortable grips or accessories can also make it feel like a helpful companion.</Paragraph>
            <Paragraph>Your guidance and support are crucial in helping them embrace their mobility aids. The difference you make in their lives is immeasurable. When you ensure the walker is properly fitted and used safely, you're helping them live a more active and independent life. Your patience and encouragement provide more than just physical support—they help empower seniors to live with dignity and confidence.</Paragraph>
          </section>

          {/* References */}
          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-8">
            <div className="flex items-center gap-3">
              <span className="text-[22px] text-[#ffc400]">↪</span>
              <h2 className="text-[16px] font-black text-black">References</h2>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>Study looks at older adults' use of mobility devices, incidence of falls</li>
              <li>Housing design that improves the independence and safety of older adults using a walker.</li>
            </ol>
          </section>

          <SocialDots />

          {/* Comments */}
          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
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
