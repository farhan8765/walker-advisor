import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';



const toc = [
  'Easy Ways to Determine and Modify Your Walker Height',
  'Walker Height Adjustment Safety Checklist',
  'Typical Errors When Determining Walker Height',
  'When to Seek Expert Assistance',
  'Walker Height Adjustment Table',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const heightRows = [
  ['4\'10"-5\'0"', '30-32 inches'],
  ['5\'1"-5\'4"', '32-34 inches'],
  ['5\'5"-5\'8"', '34-36 inches'],
  ['5\'9"-6\'2"', '36-39 inches'],
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





function AdjustWalkerHeightDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'How to Adjust a Walker to the Correct Height: A Safety Checklist - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1080px] bg-white px-4 pb-12 sm:px-6 lg:px-8">
        <article className="blog-detail-article w-full">

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
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">RD</div>
            <p className="font-manrope text-[12px] font-black text-black">Robin Dolan</p>
          </div>

          {/* Key Summary */}
          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>Finding the right height for your walker might not feel urgent at first, but it has a direct effect on posture, balance, and daily comfort. A walker that is too high can strain the shoulders, while a walker that is too low can cause bending, back pain, and unsafe walking habits.</Paragraph>
          </section>

          <Paragraph>A properly adjusted height is one of the easiest ways to make walker use safer. When the handles sit at the right level, your arms can support your weight naturally, your shoulders stay relaxed, and your steps feel more controlled.</Paragraph>
          <Paragraph>This guide walks through simple measurement steps, common mistakes, and when to ask a professional for help so the walker supports the body instead of working against it.</Paragraph>

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

          <SectionHeading id="section-1">Easy Ways to Determine and Modify Your Walker Height</SectionHeading>
          <h3 className="mt-4 text-[12px] font-black text-black">Step 1: Put on Your Regular Shoes</h3>
          <Paragraph>Always use the shoes you normally wear while walking. Shoe sole thickness changes your body height and can make the walker too high or too low if you measure barefoot or in slippers.</Paragraph>
          <h3 className="mt-4 text-[12px] font-black text-black">Step 2: Take a Straight stance and relax your arms</h3>
          <Paragraph>Stand as tall as you comfortably can, with your shoulders relaxed and your arms hanging naturally at your sides. Avoid leaning into the walker while you measure.</Paragraph>
          <h3 className="mt-4 text-[12px] font-black text-black">Step 3: Adjust the Handle Height to the Wrist Crease</h3>
          <Paragraph>The top of each walker handle should line up with the crease of your wrist when your arms hang naturally. This position usually creates the safest hand and elbow position for walking.</Paragraph>
          <h3 className="mt-4 text-[12px] font-black text-black">Step 4: Press the Button for Adjustment</h3>
          <Paragraph>Press the small adjustment button on each leg and slide the leg until the pin clicks firmly into the correct hole. Make sure all legs are locked before placing weight on the walker.</Paragraph>
          <h3 className="mt-4 text-[12px] font-black text-black">Step 5: Take a Walk to Check the Fit</h3>
          <Paragraph>Grip the handles and take a few slow steps. Your elbows should bend slightly, your shoulders should stay relaxed, and your body should remain upright.</Paragraph>
          <div className="mt-5 rounded-[8px] bg-[#f3f3f3] py-4">
            <img className="mx-auto h-[230px] w-auto rounded-[4px] object-contain" src={`${process.env.PUBLIC_URL}/images/TWA-blog25-1-683x1024.webp`} alt="Correct walker height adjustment sequence" />
          </div>

          <SectionHeading id="section-2">Walker Height Adjustment Safety Checklist</SectionHeading>
          <Paragraph>For a safe adjustment, follow this checklist before each use, especially after changing shoes or after someone else has used the walker.</Paragraph>
          <BlogList>
            <li>All four legs are set to the same height notch unless a clinician has advised otherwise.</li>
            <li>Push-button pins are fully visible through the holes and locked in place.</li>
            <li>The walker stands level and does not wobble when placed on the floor.</li>
            <li>Shoulders stay relaxed when both hands rest on the grips.</li>
            <li>Elbows bend slightly, usually around 15 to 20 degrees.</li>
            <li>Wrists remain straight instead of bending sharply up or down.</li>
            <li>The walker feels close enough to support you without forcing you to lean forward.</li>
          </BlogList>

          <SectionHeading id="section-3">Typical Errors When Determining Walker Height</SectionHeading>
          <Paragraph>Many walker problems begin with a small setup mistake. A walker that is too high can raise the shoulders and make each step feel tense. A walker that is too low can pull the body forward and create back or neck discomfort.</Paragraph>
          <Paragraph>Another common mistake is adjusting the walker while wearing different shoes than the ones used every day. Even a small change in shoe height can alter the fit.</Paragraph>
          <Paragraph>Some users also forget to check that all legs are set evenly. If one leg is shorter or longer, the walker may tilt or wobble, which can make balance worse instead of better.</Paragraph>
          <div className="mt-5 rounded-[8px] bg-[#f3f3f3] py-4">
            <img className="mx-auto h-[210px] w-auto rounded-[4px] object-contain" src={`${process.env.PUBLIC_URL}/images/twa-blog25-2-683x1024.webp`} alt="Common walker height mistakes" />
          </div>

          <SectionHeading id="section-4">When to Seek Expert Assistance</SectionHeading>
          <Paragraph>Most walker height changes are simple, but some situations require help from a doctor, physical therapist, or occupational therapist. Ask for expert assistance if the user still leans, feels unstable, or has shoulder, wrist, or back pain after the walker is adjusted.</Paragraph>
          <Paragraph>Professional fitting is especially useful after surgery, stroke, injury, or a new diagnosis that affects strength or balance. A therapist can watch the user walk, correct posture, and confirm the walker type and height are appropriate.</Paragraph>
          <Paragraph>Caregivers should also seek help if the walker user cannot safely stand still during adjustment, cannot press the adjustment pins, or becomes confused about how to use the walker.</Paragraph>

          <SectionHeading id="section-5">Walker Height Adjustment Table</SectionHeading>
          <div className="mt-4 overflow-hidden rounded-[6px] border border-[#d8dde2]">
            <div className="grid grid-cols-2 bg-[#ffc400] font-manrope text-[9px] font-black text-black">
              <div className="border-r border-black/10 px-3 py-2">User Height</div>
              <div className="px-3 py-2">Approximate Handle Height</div>
            </div>
            {heightRows.map(([height, handle]) => (
              <div className="grid grid-cols-2 border-t border-[#d8dde2] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]" key={height}>
                <div className="border-r border-[#d8dde2] px-3 py-2">{height}</div>
                <div className="px-3 py-2">{handle}</div>
              </div>
            ))}
          </div>
          <Paragraph>Use this table only as an estimate. Always confirm with wrist-crease alignment and a short walking test.</Paragraph>

          <SectionHeading id="section-6">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['Can I adjust my walker on my own?', 'Many walkers can be adjusted at home, but ask for help if you have balance problems, trouble pressing the pins, or uncertainty about the correct height.'],
              ['How frequently should I check the height of my walker again?', 'Check it whenever shoes change, after travel, after someone else uses the walker, or anytime posture or comfort feels different.'],
              ['What if the walker is only one notch off?', 'Even one notch can affect shoulder position, elbow bend, and balance. Use the wrist crease and walking test to confirm the fit.'],
              ['Do I need a therapist to set a walker height?', 'Not always, but professional help is recommended after surgery, injury, stroke, or repeated falls.'],
              ['Do users need all wheels set to the same height?', 'Yes. Uneven leg settings can make the walker rock, tilt, or feel unstable during movement.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          {/* Final Thoughts */}
          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-7">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>Adjusting a walker height is one of the simplest ways to improve comfort, confidence, and safety. A few careful checks can reduce unnecessary strain and make daily walking feel more natural.</Paragraph>
            <Paragraph>Use the wrist crease method, test the fit while wearing regular shoes, and ask a professional for help if pain, posture problems, or balance concerns continue.</Paragraph>
          </section>

          {/* References */}
          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-8">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>MedlinePlus. (2024). Walker safety tips. Medline Resource: https://medlineplus.gov/ency/patientinstructions/000342.htm</li>
              <li>American Physical Therapy Association. (2025). Choosing the right assistive device. APTA https://www.choosept.com/</li>
            </ol>
          </section>

          <SocialDots />

          {/* Comments */}
          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <div className="mt-6 border-b border-[#d8dde2] pb-6">
              <p className="font-manrope text-[11px] font-black text-black">George B. Quinn</p>
              <p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">This helped. Thanks!</p>
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
        <section className="mx-auto mt-16 w-full">
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
      <Newsletter />
      <Footer />
    </>
  );
}

export default AdjustWalkerHeightDetail;
