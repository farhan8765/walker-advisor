import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';



const tableOfContents = [
  'Why Choosing the Right Walking Shoes Matters',
  'Consider Shoe Width & Support',
  'Choose Shoes with Arch Support',
  'Check Cushioning, Sole and Balance Features',
  'Look for a Firm Heel Counter',
  'Prepare Fit & Daily Walking',
  'Choose the Right Sole',
  'Consider Lightweight Design',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
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

function SubHeading({ children }) {
  return <h3 className="mt-5 text-[14px] font-black text-black">{children}</h3>;
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





function WalkingShoesDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'How to Choose Walking Shoes for Balance and Stability - The Walker Advisor';
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
            <h1 className="mx-auto max-w-[540px] text-[25px] font-black leading-tight text-black md:text-[28px]">How to Choose Walking Shoes for Balance and Stability</h1>
            <p className="mx-auto mt-10 max-w-[min(100%,56rem)] text-[#1f2930]">The right shoes can improve comfort, confidence, and everyday stability. Learn what to look for before your next walk.</p>
            <img className="mx-auto mt-5 h-auto w-full max-w-[700px] rounded-[8px] object-contain" src={`${process.env.PUBLIC_URL}/images/image.webp`} alt="How to choose walking shoes for balance and stability" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">AA</div>
            <p className="font-manrope text-[12px] font-black text-black">Amir Abbasi</p>
          </div>

          <div className="mt-5">
            <Paragraph>Choosing walking shoes is about more than style. For seniors and anyone with balance concerns, shoes affect posture, traction, comfort, and confidence with every step.</Paragraph>
            <Paragraph>The wrong shoe can increase slipping, fatigue, foot pain, and instability. The right shoe supports natural alignment, absorbs shock, and gives the foot enough room to move safely.</Paragraph>
            <Paragraph>This guide explains what to check before buying walking shoes for balance and stability.</Paragraph>
          </div>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              {tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Why Choosing the Right Walking Shoes Matters</SectionHeading>
          <Paragraph>A stable walking shoe helps the body stay aligned from the ground up. Proper shoes can reduce wobbling, improve step confidence, and make daily walking safer.</Paragraph>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li>Better grip on indoor and outdoor surfaces</li>
            <li>Improved shock absorption</li>
            <li>Less foot fatigue during longer walks</li>
            <li>More reliable heel and arch support</li>
          </ul>

          <SectionHeading id="section-2">Consider Shoe Width & Support</SectionHeading>
          <Paragraph>Wide-base walking shoes usually offer a broader platform and more stability. Narrow shoes may feel sleek but can reduce the support area under the foot.</Paragraph>
          <BlogImage src="image-1.webp" alt="Wide-base walking shoe compared with narrow walking shoe" />

          <SectionHeading id="section-3">Choose Shoes with Arch Support</SectionHeading>
          <Paragraph>Your arch type affects how your foot absorbs impact. Flat arches, neutral arches, and high arches need different levels of support and cushioning.</Paragraph>
          <BlogImage src="image-2.webp" alt="Flat arch, neutral arch, and high arch foot types" />
          <SubHeading>Match Shoes to Your Feet</SubHeading>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li>Flat feet often need stability or motion-control support.</li>
            <li>Neutral arches usually work well with balanced cushioning.</li>
            <li>High arches often need extra cushioning and shock absorption.</li>
          </ul>

          <SectionHeading id="section-4">Check Cushioning, Sole and Balance Features</SectionHeading>
          <Paragraph>A good walking shoe should combine cushioning with structure. Too much softness can feel unstable, while too little cushioning can increase impact stress.</Paragraph>
          <BlogImage src="image-3.webp" alt="Walking shoe cushioning outsole and traction comparison" />

          <SectionHeading id="section-5">Look for a Firm Heel Counter</SectionHeading>
          <Paragraph>The heel counter is the back part of the shoe that cups the heel. A firm heel counter keeps the foot centered and limits side-to-side movement.</Paragraph>
          <BlogImage src="image-4.webp" alt="Testing heel counter firmness on walking shoe" />

          <SectionHeading id="section-6">Prepare Fit & Daily Walking</SectionHeading>
          <Paragraph>Proper fit matters as much as shoe design. Shoes should leave toe room, hold the heel securely, and avoid pressure points that cause pain during walks.</Paragraph>
          <BlogImage src="image-5.webp" alt="Guide to correct shoe fit toe spacing and heel alignment" />
          <SubHeading>Choose the Right Size</SubHeading>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li>Try shoes later in the day when feet are slightly larger.</li>
            <li>Leave about half an inch of space near the toes.</li>
            <li>Walk on a hard surface before deciding.</li>
            <li>Wear the socks you normally use for walking.</li>
          </ul>

          <SectionHeading id="section-7">Choose the Right Sole</SectionHeading>
          <Paragraph>The outsole should provide traction without being overly heavy. Deep tread can help outdoors, while smoother non-slip soles may work better indoors.</Paragraph>
          <BlogImage src="image-6.webp" alt="Walking shoe tread and outsole grip" />

          <SectionHeading id="section-8">Consider Lightweight Design</SectionHeading>
          <Paragraph>Heavy shoes can make walking tiring and may increase the chance of dragging the feet. Lightweight walking shoes support better stride rhythm and easier movement.</Paragraph>
          <BlogImage src="image-7.webp" alt="Woman walking outdoors in stable walking shoes" />
          <BlogImage src="image-8.webp" alt="New outsole compared with worn-out outsole" />

          <SectionHeading id="section-9">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              'What type of shoe is best for balance?',
              'Are running shoes good for walking stability?',
              'How often should walking shoes be replaced?',
              'Can shoes improve fall prevention?',
            ].map((question) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">Choose shoes with a stable sole, firm heel counter, good traction, and enough room for natural toe movement.</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-10">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>Walking shoes are one of the simplest tools for improving daily balance and stability. Prioritize fit, grip, support, and comfort before style.</Paragraph>
            <Paragraph>If your current shoes are worn down, slippery, too narrow, or uncomfortable, replacing them may make walking safer and easier.</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-11">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>American Podiatric Medical Association. Walking Shoes and Foot Health.</li>
              <li>National Institute on Aging. Falls and Older Adults.</li>
              <li>CDC. Preventing Falls: Footwear and Home Safety.</li>
              <li>Mayo Clinic. Footwear, Balance, and Joint Support.</li>
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
          <div className="mt-5 grid gap-8 md:grid-cols-3">
            {relatedArticles.map((article) => (
              <article className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#d8dde2] bg-white font-manrope" key={article.title}>
                <img className="block h-[260px] w-full object-cover" src={`${process.env.PUBLIC_URL}/images/${article.image}`} alt="" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="line-clamp-2 text-[20px] font-bold leading-[28px] tracking-[0.5%] text-[#172129]" style={{ fontFamily: 'Manrope, sans-serif' }}>{article.title}</h3>
                  <p className="mt-3 line-clamp-3 text-base font-medium leading-6 text-[#66737c]">{article.description}</p>
                </div>
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

export default WalkingShoesDetail;
