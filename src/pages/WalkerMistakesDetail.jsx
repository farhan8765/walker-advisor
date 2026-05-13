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
  'Why walkers are essential for seniors',
  'Walker buying guide: features to look for',
  'How to properly use a walker',
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

function WalkerMistakesDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Most People Use Walkers Wrong. Are You Making These Mistakes? - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[430px]">
          <header className="pt-8 text-center">
            <h1 className="mx-auto max-w-[410px] text-[19px] font-black leading-tight text-black md:text-[21px]">Most People Use Walkers Wrong. Are You Making These Mistakes?</h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">Using a walker seems simple, until you realize most people do it incorrectly. Learn the right way before it affects your safety.</p>
            <img className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover" src={`${process.env.PUBLIC_URL}/images/injured-man-doing-physiotherapy-exercises-walking-1-scaled.webp`} alt="Person using a walker in a rehabilitation room" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">SA</div>
            <p className="font-manrope text-[12px] font-black text-black">Syed Ali</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>Walkers improve safety only when they are fitted and used correctly. Common mistakes include setting the walker too high or low, pushing it too far ahead, leaning heavily through the arms, and turning too quickly.</Paragraph>
          </section>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[15px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-2 px-6 py-5 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
              {toc.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Why Walkers Are Essential for Seniors</SectionHeading>
          <Paragraph>Walkers provide support, stability, and independence for people who need help standing or walking. But a walker is not automatically safe simply because it is present. The technique matters.</Paragraph>
          <SubHeading>Benefits of Using Walkers</SubHeading>
          <BlogList>
            <li>Improves balance and walking confidence.</li>
            <li>Reduces the risk of falls when used correctly.</li>
            <li>Helps with recovery after injury or surgery.</li>
            <li>Supports independence during daily activities.</li>
          </BlogList>
          <SubHeading>Who Can Benefit the Most From Using a Walker?</SubHeading>
          <BlogList>
            <li>Seniors with balance issues.</li>
            <li>People recovering from surgery or injury.</li>
            <li>Adults with arthritis, weakness, or fatigue.</li>
            <li>Anyone advised by a clinician to use mobility support.</li>
          </BlogList>

          <SectionHeading id="section-2">Walker Buying Guide: Features to Look For</SectionHeading>
          <BlogList>
            <li><strong>Weight capacity:</strong> choose a frame that safely supports the user.</li>
            <li><strong>Adjustable height:</strong> handles should align near the wrist crease.</li>
            <li><strong>Comfortable grips:</strong> reduce hand pain and improve control.</li>
            <li><strong>Wheels or tips:</strong> match the home, outdoor routes, and balance needs.</li>
            <li><strong>Storage:</strong> keep items centered instead of hanging bags from handles.</li>
          </BlogList>
          <TipBox>Looking for a walker? Check our guide on <a className="text-[#0b61a4] no-underline hover:underline" href="/articles">where to buy walkers for seniors</a> before choosing a model.</TipBox>

          <SectionHeading id="section-3">How to Properly Use a Walker: Safety Tips and Techniques</SectionHeading>
          <SubHeading>Step 1: Adjust the Height for Comfort and Safety</SubHeading>
          <Paragraph>Stand upright inside the walker. The handles should line up near the wrist crease, with a slight bend in the elbows.</Paragraph>
          <SubHeading>Step 2: Position the Walker Correctly</SubHeading>
          <Paragraph>Keep the walker close. Pushing it too far forward encourages leaning and can pull the body off balance.</Paragraph>
          <SubHeading>Step 3: Walk with the Right Technique</SubHeading>
          <BlogList>
            <li>Move the walker forward a short distance.</li>
            <li>Step into the frame instead of behind it.</li>
            <li>Keep both hands on the grips.</li>
            <li>Turn slowly with small steps.</li>
          </BlogList>
          <SubHeading>Step 4: Use Brakes Properly</SubHeading>
          <Paragraph>If using a rollator, lock the brakes before sitting, standing, or leaning on the frame. Light brake pressure can help control speed on slopes.</Paragraph>
          <SubHeading>Step 5: Turning and Maneuvering Safely</SubHeading>
          <Paragraph>Use wide, controlled turns. Pivoting sharply can twist the walker and destabilize the user.</Paragraph>
          <SubHeading>Step 6: Sitting and Standing with a Walker</SubHeading>
          <BlogList>
            <li>Back up until the chair touches the legs.</li>
            <li>Reach back when possible before sitting.</li>
            <li>Do not pull up on an unlocked rollator.</li>
          </BlogList>
          <SubHeading>Step 7: Navigating Stairs if Necessary</SubHeading>
          <Paragraph>Walkers are generally not safe on stairs without professional training. Use ramps, railings, or caregiver assistance when available.</Paragraph>
          <TipBox>Never rush while using a walker. Slow movement and correct posture are safer than speed.</TipBox>

          <SectionHeading id="section-4">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['What is the best walker for seniors?', 'The best walker depends on balance, strength, home layout, and whether the user needs wheels, brakes, or a seat.'],
              ['How do I adjust the height of a walker?', 'Set handles near wrist height when standing upright with arms relaxed.'],
              ['Are walkers suitable for outdoor use?', 'Some are. Rollators or walkers with larger wheels work better outdoors than standard walkers.'],
              ['How often should I replace my walker?', 'Replace it when the frame, tips, wheels, brakes, or folding locks become worn or unsafe.'],
              ['Which leg goes first when using a walker?', 'This depends on the condition. A clinician can teach the correct gait pattern for the user.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-5">
            <div className="flex items-center gap-3">
              <span className="text-[24px] leading-none text-[#ffc400]">💎</span>
              <h2 className="text-[16px] font-black text-black">Final Thoughts</h2>
            </div>
            <Paragraph>Using a walker properly can transform daily life by enhancing mobility and safety. By following these guidelines and tips, you can boost your confidence, independence, and quality of life. Remember, small adjustments and consistent practice make a big difference.</Paragraph>
            <Paragraph>Don't hesitate to seek advice from a physical therapist for personalized support and keep improving your technique!</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-6">
            <div className="flex items-center gap-3">
              <span className="text-[22px] leading-none text-[#ffc400]">🌎</span>
              <h2 className="text-[16px] font-black text-black">Reference</h2>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://academic.oup.com/gerontologist">Journal of Gerontology - Study on the popularity and benefits of rolling walkers.</a></li>
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://www.cambridge.org/core/journals/ageing-and-society">Age and Ageing - Research on the role of hand brakes in improving walker safety.</a></li>
              <li><a className="text-[#0b61a4] no-underline hover:underline" href="https://academic.oup.com/ptj">Journal of Physical Therapy - Findings on adjustable rollators improving posture and mobility.</a></li>
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

export default WalkerMistakesDetail;
