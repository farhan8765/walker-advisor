import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';



const tableOfContents = [
  'What is an Upright Walker?',
  'How Upright Walkers Improve Senior Posture',
  'Benefits of Upright Walkers Beyond Posture',
  'Choosing the Right Upright Walker',
  'Common Mistakes Seniors Make When Using Walkers',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const benefits = [
  ['Reduced Back Pain', 'An upright stance reduces spinal stress', 'Supports comfortable walking'],
  ['Increased Confidence', 'Stability encourages independence', 'Less fear of falls'],
  ['Better Circulation', 'Encourages proper stride', 'Promotes cardiovascular health'],
  ['Comfortable Walking', 'Ergonomic handles & adjustable height', 'Prevents wrist & shoulder strain'],
  ['Adaptable to Home & Outdoors', 'Lightweight and foldable', 'Convenient for all environments'],
];

const relatedArticles = [
  {
    image: 'image-9-1.webp',
    title: 'Exercise Programs for Elderly Adults',
    description:
      "Most seniors don't realize they're missing these 4 essential exercises until mobility starts to decline. Discover the simple routine that keeps you active, balanced, and",
  },
  {
    image: 'blog.webp',
    title: 'Social Activities for Older Adults: The Best Ways to Stay Connected, Active, and Happy',
    description:
      'Loneliness in seniors is not just sad, it is as dangerous to health as smoking 15 cigarettes a day. Here are the best ways older',
  },
  {
    image: 'image-2-1.webp',
    title: 'Can Heart Issues Increase Fall Risk in Seniors?',
    description:
      'You might think falls are just about balance, but what if your heart is the real culprit? Discover the hidden connection between heart issues and',
  },
];



function SectionHeading({ children, id }) {
  return <h2 className="mt-9 text-[18px] font-black leading-tight text-black" id={id}>{children}</h2>;
}

function ArticleLink({ children, href }) {
  return (
    <a className="font-black text-[#0b61a4] no-underline hover:underline" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Paragraph({ children }) {
  return <p className="mt-3 font-manrope text-[12px] font-medium leading-[1.85] text-[#1f2930]">{children}</p>;
}

function BlogList({ children }) {
  return <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">{children}</ul>;
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





function UprightWalkersDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Understanding Upright Walkers: How They Improve Senior Posture - The Walker Advisor';
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
            <h1 className="mx-auto max-w-[540px] text-[25px] font-black leading-tight text-black md:text-[28px]">
              Understanding Upright Walkers: How They Improve Senior Posture
            </h1>
            <p className="mx-auto mt-10 max-w-[min(100%,56rem)] text-[#1f2930]">
              Many seniors struggle with poor posture while walking. Learn how upright walkers promote better alignment, balance, and confidence.
            </p>
            <img className="mx-auto mt-5 h-auto w-full max-w-[700px] rounded-[8px] object-contain" src={`${process.env.PUBLIC_URL}/images/image-9-1.webp`} alt="Senior woman walking outdoors with an upright walker" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <img className="h-8 w-8 rounded-full object-cover" src={`${process.env.PUBLIC_URL}/images/robin-dolan_avatar-154x216.webp`} alt="Robin Dolan" />
            <p className="font-manrope text-[12px] font-black text-black">Robin Dolan</p>
          </div>

          <div className="mt-5">
            <Paragraph>
              Seniors must maintain proper posture to avoid back pain, enhance their balance, and lower their risk of falling. Walking and standing comfortably become more difficult as we age due to a decline in muscle strength and possible changes in spinal alignment. These problems are addressed by upright walkers, which provide seniors with a safer and healthier means of maintaining their mobility. We discuss the advantages of upright walkers, how they operate, and how to choose the best one in this blog.
            </Paragraph>
            <Paragraph>
              For a complete guide to the top products, check out our <ArticleLink href="https://thewalkeradvisor.com/5-best-upright-walkers-for-seniors-find-the-right-one/">5 Best Upright Walkers for Seniors</ArticleLink> blog.
            </Paragraph>
          </div>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              {tableOfContents.map((item, index) => (
                <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>
              ))}
            </ol>
          </nav>

          <SectionHeading id="section-1">What is an Upright Walker?</SectionHeading>
          <Paragraph>
            An upright walker is a type of mobility aid designed to encourage seniors to maintain a <strong>more upright posture</strong> while walking. Unlike traditional walkers, upright walkers allow users to stand straight, reducing forward leaning and associated back or neck strain.
          </Paragraph>
          <Paragraph><strong>Key features of upright walkers include:</strong></Paragraph>
          <BlogList>
            <li>Ergonomically designed handles to support proper wrist alignment</li>
            <li>Lightweight yet sturdy frames for easy maneuverability</li>
            <li>Adjustable height settings for personalized posture support</li>
            <li>Optional accessories, such as seats or baskets, for convenience</li>
          </BlogList>
          <Paragraph>
            <em>Visual suggestion:</em> Image of a senior using an upright walker with posture lines showing correct alignment.
          </Paragraph>

          <SectionHeading id="section-2">How Upright Walkers Improve Senior Posture</SectionHeading>
          <h3 className="mt-5 text-[14px] font-black text-black">1. Encourages an Upright Stance</h3>
          <Paragraph>
            Many seniors develop a forward-leaning posture due to weak core muscles or spinal conditions. Upright walkers promote standing tall while walking, helping realign the spine and reduce tension in the lower back and shoulders.
          </Paragraph>
          <h3 className="mt-5 text-[14px] font-black text-black">2. Reduces Pressure on the Spine</h3>
          <Paragraph>
            By supporting natural posture, upright walkers redistribute body weight, easing strain on the spine and reducing back pain often caused by leaning forward with traditional walkers.
          </Paragraph>
          <h3 className="mt-5 text-[14px] font-black text-black">3. Improves Balance and Stability</h3>
          <Paragraph>
            Good posture contributes directly to balance. Upright walkers encourage proper alignment of hips, knees, and ankles, making it easier to maintain stability and prevent falls.
          </Paragraph>
          <h3 className="mt-5 text-[14px] font-black text-black">4. Enhances Core Muscle Engagement</h3>
          <Paragraph>
            Walking upright engages core muscles, strengthening them over time. This improvement in core strength supports overall posture and mobility.
          </Paragraph>

          <SectionHeading id="section-3">Benefits of Upright Walkers Beyond Posture</SectionHeading>
          <div className="blog-table-wrap mt-5 overflow-x-auto font-manrope text-[11px] text-[#1f2930]">
            <div className="grid grid-cols-3 bg-[#ffc400] font-black">
              <div className="border-r border-black px-3 py-3">Benefit</div>
              <div className="border-r border-black px-3 py-3">Explanation</div>
              <div className="px-3 py-3">Why It Matters</div>
            </div>
            {benefits.map(([benefit, link, why]) => (
              <div className="grid grid-cols-3 border-t border-black" key={benefit}>
                <div className="border-r border-black px-3 py-3 font-semibold">{benefit}</div>
                <div className="border-r border-black px-3 py-3">{link}</div>
                <div className="px-3 py-3">{why}</div>
              </div>
            ))}
          </div>

          <SectionHeading id="section-4">Choosing the Right Upright Walker</SectionHeading>
          <Paragraph>When selecting an upright walker, seniors should consider:</Paragraph>
          <BlogList>
            <li><strong>Height Adjustability:</strong> Ensures the walker matches your natural standing posture.</li>
            <li><strong>Weight:</strong> Lightweight walkers are easier to handle, especially for longer distances.</li>
            <li><strong>Handle Design:</strong> Ergonomic grips prevent wrist strain.</li>
            <li><strong>Additional Features:</strong> Wheels, brakes, seats, or baskets for convenience.</li>
            <li><strong>Durability:</strong> Ensure the frame is sturdy enough to support your weight safely.</li>
          </BlogList>

          <SectionHeading id="section-5">Common Mistakes Seniors Make When Using Walkers</SectionHeading>
          <ol className="mt-3 list-decimal space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li><strong>Incorrect Height Adjustment:</strong> Using a walker that is too tall or short can worsen posture.</li>
            <li><strong>Over-Leaning:</strong> Pushing down on the handles too much can strain wrists and shoulders.</li>
            <li><strong>Skipping Maintenance:</strong> Loose wheels or worn-out grips reduce safety.</li>
            <li><strong>Ignoring Footwear:</strong> Proper supportive shoes enhance walker effectiveness.</li>
          </ol>

          <img className="blog-content-image" src={`${process.env.PUBLIC_URL}/images/image-10-768x419.webp`} alt="Proper walker height and posture alignment" />

          <SectionHeading id="section-6">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['Can upright walkers help with chronic back pain?', 'Yes. By promoting an upright posture, these walkers reduce spinal strain, which can alleviate back pain during walking.'],
              ['Are upright walkers suitable for outdoor use?', 'Many upright walkers are designed for both indoor and outdoor environments. Check for durable wheels and anti-slip features.'],
              ['How often should seniors adjust their walker height?', 'Walkers should be checked regularly, especially if a senior experiences changes in posture, weight, or comfort.'],
              ['Can upright walkers improve balance over time?', 'Yes. They promote proper alignment and engage core muscles, which helps enhance stability and reduce fall risk.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-7">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>
              Upright walkers are more than just mobility aids; they are posture-enhancing tools that support seniors in maintaining independence, comfort, and safety. Choosing the right walker, understanding proper use, and combining it with supportive shoes and core exercises can significantly improve posture and overall quality of life.
            </Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-8">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
            <div className="mt-4 space-y-2 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <p>National Institute on Aging. <em>Healthy Aging and Mobility.</em> https://www.nia.nih.gov/health/healthy-aging</p>
              <p>Mayo Clinic. <em>Back Pain in Older Adults: Causes & Prevention.</em> https://www.mayoclinic.org/diseases-conditions/back-pain/symptoms-causes/syc-20369906</p>
              <p>Centers for Disease Control and Prevention (CDC). <em>Preventing Falls in Older Adults.</em> https://www.cdc.govhttps://www.cdc.gov/falls/about/index.html</p>
              <p>American Physical Therapy Association. <em>Improving Balance and Posture in Seniors.</em> https://www.choosept.com/guide/physical-therapy-guide-balance-problems</p>
            </div>
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
                <img className="blog-related-thumb block h-[260px] w-full object-cover" src={`${process.env.PUBLIC_URL}/images/${article.image}`} alt="" />
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

export default UprightWalkersDetail;
