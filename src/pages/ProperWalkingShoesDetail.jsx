import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';



const tableOfContents = [
  'Balance Changes With Age - Shoes Must Compensate',
  'Joint Protection Becomes Critical After 60',
  'Poor Footwear Can Increase Fall Risk',
  'Proper Shoes Improve Posture and Alignment',
  'Foot Conditions Become More Common With Age',
  'Why Specialized Walking Shoes Matter More Than Regular Shoes',
  'Walking Shoes vs. Regular Sneakers',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const shoeComparison = [
  ['Designed for regular casual wear', 'Engineered for support and stability'],
  ['Often narrow or fashion focused', 'Offers wider toe box and better fit'],
  ['Limited arch support', 'Built-in arch and heel support'],
  ['May have slippery or flat soles', 'Non-slip outsole for safer walking'],
  ['Can increase fatigue during long walks', 'Reduces fatigue and joint strain'],
];

const relatedArticles = [
  {
    image: 'image-9-1.webp',
    title: 'Exercise Programs for Elderly Adults',
    description: "Most seniors don't realize they're missing these 4 essential exercises until mobility starts to decline.",
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



function SectionHeading({ children, id }) {
  return <h2 className="mt-9 text-[18px] font-black leading-tight text-black" id={id}>{children}</h2>;
}

function Paragraph({ children }) {
  return <p className="mt-3 font-manrope text-[12px] font-medium leading-[1.85] text-[#1f2930]">{children}</p>;
}

function BlogImage({ src, alt }) {
  return <img className="mx-auto mt-7 h-auto w-full max-w-[500px] rounded-[8px] object-cover" src={`${process.env.PUBLIC_URL}/images/${src}`} alt={alt} />;
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





function ProperWalkingShoesDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Why Seniors Need Proper Walking Shoes - The Walker Advisor';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1080px] bg-white px-4 pb-12 sm:px-6 lg:px-8">
        <article className="blog-detail-article w-full">
          <header className="pt-9 text-center">
            <h1 className="mx-auto max-w-[540px] text-[25px] font-black leading-tight text-black md:text-[28px]">Why Seniors Need Proper Walking Shoes</h1>
            <p className="mx-auto mt-3 max-w-[600px] font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">Aging changes balance, joints, muscles, and feet. The right walking shoes can help seniors move with more comfort and confidence.</p>
            <img className="mt-5 h-auto w-full rounded-[8px] object-cover" src={`${process.env.PUBLIC_URL}/images/info-blog-twa-38.webp`} alt="Why seniors need proper walking shoes infographic" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">RD</div>
            <p className="font-manrope text-[12px] font-black text-black">Robin Dolan</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[16px] font-black text-black">Key Summary</h2>
            <Paragraph>Proper walking shoes help seniors stay stable, reduce foot strain, and avoid unnecessary fall risks. They support the arches, cushion joints, improve grip, and make daily walking easier.</Paragraph>
          </section>

          <Paragraph>As we age, our feet and lower body change. Muscles weaken, balance becomes less reliable, and small footwear problems can turn into major mobility issues.</Paragraph>
          <Paragraph>Proper shoes are not just about comfort. They are an important safety tool for seniors who want to stay active, independent, and confident.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              {tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Balance Changes With Age - Shoes Must Compensate</SectionHeading>
          <Paragraph>Balance naturally becomes harder with age. Muscle weakness, reduced ankle mobility, and slower reaction time all affect walking confidence.</Paragraph>
          <Paragraph>Supportive shoes compensate for these changes by improving foot alignment, traction, and sensory feedback from the ground.</Paragraph>
          <BlogImage src="img38-1.webp" alt="The vital role of proper footwear in managing lower body deficits" />

          <SectionHeading id="section-2">Joint Protection Becomes Critical After 60</SectionHeading>
          <Paragraph>Walking places repeated impact on the ankles, knees, hips, and lower back. Without adequate cushioning, seniors may feel more pain and fatigue during daily movement.</Paragraph>
          <Paragraph>Proper walking shoes absorb shock and reduce pressure on joints, helping seniors walk longer with less discomfort.</Paragraph>

          <SectionHeading id="section-3">Poor Footwear Can Increase Fall Risk</SectionHeading>
          <Paragraph>Worn-out shoes, smooth soles, loose heels, and collapsed midsoles can all increase fall risk. Shoes should offer traction, support, and a secure fit.</Paragraph>
          <BlogImage src="img38-2.webp" alt="Footwear comparison safety and protection versus high slip risk" />

          <SectionHeading id="section-4">Proper Shoes Improve Posture and Alignment</SectionHeading>
          <Paragraph>Good walking shoes help align the foot, ankle, knee, and hip. Better alignment reduces strain and may improve walking posture over time.</Paragraph>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li>Arch support reduces foot collapse.</li>
            <li>Wide toe boxes allow natural toe movement.</li>
            <li>Firm heel counters reduce side-to-side movement.</li>
            <li>Shock absorption reduces joint stress.</li>
          </ul>
          <BlogImage src="img-38-3.webp" alt="Key features seniors should look for when choosing walking shoes" />

          <SectionHeading id="section-5">Foot Conditions Become More Common With Age</SectionHeading>
          <Paragraph>Many seniors deal with bunions, arthritis, swelling, heel pain, flat feet, or neuropathy. Poor shoe choices can make these conditions worse.</Paragraph>
          <Paragraph>Proper walking shoes provide space, cushioning, and structure so sensitive feet remain protected throughout the day.</Paragraph>

          <SectionHeading id="section-6">Why Specialized Walking Shoes Matter More Than Regular Shoes</SectionHeading>
          <Paragraph>Regular sneakers may look comfortable, but they are not always designed for senior balance, joint support, or long-term walking safety.</Paragraph>
          <Paragraph>Specialized walking shoes focus on grip, stability, heel control, cushioning, and proper fit.</Paragraph>

          <SectionHeading id="section-7">Walking Shoes vs. Regular Sneakers</SectionHeading>
          <div className="mt-5 grid grid-cols-2 border-y border-[#d8dde2] font-manrope text-[11px] text-[#1f2930]">
            <div className="px-8 py-4 font-black">Walking Shoes</div>
            <div className="border-l border-[#d8dde2] px-8 py-4 font-black">Regular Sneakers</div>
            {shoeComparison.map(([walking, regular]) => (
              <div className="contents" key={walking}>
                <div className="px-8 py-5 font-medium">{walking}</div>
                <div className="border-l border-[#d8dde2] px-8 py-5 font-medium">{regular}</div>
              </div>
            ))}
          </div>

          <SectionHeading id="section-8">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              'Why do seniors need proper walking shoes?',
              'Can shoes reduce fall risk?',
              'Are slip-on shoes safe for seniors?',
              'What shoe features are most important?',
            ].map((question) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">Seniors should prioritize arch support, non-slip soles, cushioning, a secure heel, and enough room in the toe box.</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-9">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>Proper walking shoes are one of the easiest ways seniors can improve comfort, stability, and confidence. Shoes should support the whole body, not just cover the feet.</Paragraph>
            <Paragraph>If shoes are worn out, slippery, too narrow, or painful, replacing them is a practical step toward safer daily movement.</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-10">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>American Podiatric Medical Association. Senior Foot Health.</li>
              <li>National Institute on Aging. Falls and Older Adults.</li>
              <li>CDC. Preventing Older Adult Falls.</li>
              <li>Mayo Clinic. Footwear and Joint Pain Guidance.</li>
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

        <section className="mx-auto mt-16 w-full">
          <h2 className="font-manrope text-[13px] font-black text-black">Related Articles</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {relatedArticles.map((article) => (
              <article className="overflow-hidden rounded-[8px] border border-[#d8dde2] bg-white" key={article.title}>
                <img className="h-40 w-full object-cover" src={`${process.env.PUBLIC_URL}/images/${article.image}`} alt="" />
                <div className="p-5"><h3 className="text-[17px] font-black leading-tight text-[#172129]">{article.title}</h3><p className="mt-3 font-manrope text-[12px] font-medium leading-6 text-[#303a42]">{article.description}</p></div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}

export default ProperWalkingShoesDetail;
