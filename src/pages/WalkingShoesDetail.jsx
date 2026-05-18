import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import BlogImage from '../components/BlogImage';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';



const tableOfContents = [
  'Look for a Wide and Stable Base',
  'Choose Firm Arch Support',
  'Check Cushioning (But Avoid Excessive Softness)',
  'Look for a Firm Heel Counter',
  'Proper Fit is Everything',
  'Choose Non-Slip Soles',
  'Consider Lightweight Design',
  'Replace Shoes on Time',
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

function ArticleLink({ children, href }) {
  return (
    <a className="font-black text-[#0b61a4] no-underline hover:underline" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function SubHeading({ children }) {
  return <h3 className="mt-5 text-[14px] font-black text-black">{children}</h3>;
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
            <p className="mx-auto mt-10 max-w-[min(100%,56rem)] text-[#1f2930]">Most people wear the wrong walking shoes, and it quietly affects their balance every day. Discover the 8 stability features experts say you should never ignore before buying your next pair.</p>
            <img className="mx-auto mt-5 h-auto w-full max-w-[700px] rounded-[8px] object-contain" src={`${process.env.PUBLIC_URL}/images/image.webp`} alt="How to choose walking shoes for balance and stability" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <img className="h-8 w-8 rounded-full object-cover" src={`${process.env.PUBLIC_URL}/images/robin-dolan_avatar-154x216.webp`} alt="Robin Dolan" />
            <p className="font-manrope text-[12px] font-black text-black">Robin Dolan</p>
          </div>

          <div className="mt-5">
            <Paragraph>Choosing the right walking shoes is not just about comfort; it directly affects your posture, joint health, and fall prevention. Poor footwear can lead to foot fatigue, ankle instability, knee pain, and even long-term alignment issues. For seniors, individuals with weak ankles, or anyone recovering from injury, stable footwear becomes even more critical. If you want a deeper understanding of age-related balance challenges, you can explore <ArticleLink href="https://darkcyan-lion-250828.hostingersite.com/why-seniors-need-proper-walking-shoes/">Why Seniors Need Proper Walking Shoes</ArticleLink> to see how the right footwear reduces fall risk and improves mobility.</Paragraph>
            <Paragraph>Whether you walk daily for fitness, spend long hours standing at work, or simply want safer movement, understanding shoe structure will help you make an informed choice.</Paragraph>
          </div>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              {tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Look for a Wide and Stable Base</SectionHeading>
          <Paragraph>A stable walking shoe begins at the foundation the outsole. A good balance-focused walking shoe should have:</Paragraph>
          <BlogList>
            <li>A wide outsole (bottom platform of the shoe)</li>
            <li>A low heel-to-toe drop</li>
            <li>A strong rubber grip</li>
            <li>Minimal lateral wobbling</li>
          </BlogList>
          <Paragraph>A wider base increases ground contact area, improving stability during heel strike and toe-off phases of walking. Shoes that are too narrow can create instability, especially on uneven surfaces. A lower heel-to-toe drop keeps your body's center of gravity more aligned, reducing forward tilt and balance disruption.</Paragraph>
          <SubHeading>Avoid:</SubHeading>
          <BlogList>
            <li>Narrow silhouettes</li>
            <li>High-heeled walking shoes</li>
            <li>Highly curved rocker bottoms (unless medically prescribed)</li>
          </BlogList>
          <BlogImage src="image-1.webp" alt="Wide-base walking shoe compared with narrow walking shoe" />

          <SectionHeading id="section-2">Choose Firm Arch Support</SectionHeading>
          <Paragraph>Arch support plays a biomechanical role in maintaining proper foot alignment. Without adequate support, overpronation (foot rolling inward) or supination (rolling outward) can occur - both of which compromise balance.</Paragraph>
          <SubHeading>Identify Your Arch Type:</SubHeading>
          <BlogList>
            <li><strong>Flat feet</strong> - Stability or motion-control shoes</li>
            <li><strong>High arches</strong> - Cushioned shoes with structured arch support</li>
            <li><strong>Neutral arches</strong> - Standard stability walking shoes</li>
          </BlogList>
          <Paragraph>Arch support distributes body weight evenly across the foot, reducing stress on ankles, knees, and hips. If built-in support is insufficient, consider:</Paragraph>
          <BlogList>
            <li>Orthotic insoles</li>
            <li>Custom inserts prescribed by a podiatrist</li>
          </BlogList>
          <BlogImage src="image-2.webp" alt="Flat arch, neutral arch, and high arch foot types" />

          <SectionHeading id="section-3">Check Cushioning (But Avoid Excessive Softness)</SectionHeading>
          <Paragraph>Cushioning absorbs impact forces during walking. However, overly soft midsoles can create instability by allowing excessive foot movement inside the shoe.</Paragraph>
          <Paragraph>For optimal balance:</Paragraph>
          <BlogList>
            <li>Choose moderate cushioning</li>
            <li>Ensure the midsole feels responsive, not spongy</li>
            <li>Press the heel area; it should feel firm</li>
            <li>Twist the shoe gently, it should resist excessive bending</li>
          </BlogList>
          <Paragraph>Balanced cushioning protects joints while maintaining ground feedback, which is essential for proprioception (your body's awareness of position).</Paragraph>
          <BlogImage src="image-3.webp" alt="Walking shoe cushioning outsole and traction comparison" />

          <SectionHeading id="section-4">Look for a Firm Heel Counter</SectionHeading>
          <Paragraph>The heel counter is the structured back portion of the shoe that holds your heel securely in place. It prevents excessive rearfoot movement and reduces ankle rolling.</Paragraph>
          <SubHeading>How to Test:</SubHeading>
          <BlogList>
            <li>Press the back of the shoe.</li>
            <li>It should feel firm and resistant.</li>
            <li>It should not collapse easily.</li>
          </BlogList>
          <Paragraph>A rigid heel counter improves rearfoot alignment and enhances balance during the stance phase of walking.</Paragraph>
          <Paragraph>Weak heel counters often cause:</Paragraph>
          <BlogList>
            <li>Heel slippage</li>
            <li>Ankle instability</li>
          </BlogList>
          <Paragraph>Increased risk of missteps</Paragraph>
          <BlogImage src="image-4.webp" alt="Testing heel counter firmness on walking shoe" />

          <SectionHeading id="section-5">Proper Fit is Everything</SectionHeading>
          <Paragraph>Even the most technically advanced shoe fails if it does not fit correctly.</Paragraph>
          <SubHeading>Fitting Checklist:</SubHeading>
          <BlogList>
            <li>Leave about half an inch of space at the front</li>
            <li>Ensure the shoe is snug but not tight</li>
            <li>Walk around before purchasing</li>
            <li>Try shoes in the evening (feet swell slightly)</li>
            <li>Wear the socks you typically walk in</li>
          </BlogList>
          <Paragraph>Your toes should move freely, and your heel should remain locked without slipping. Poor fit causes friction, blisters, and imbalance.</Paragraph>
          <BlogImage src="image-5.webp" alt="Guide to correct shoe fit toe spacing and heel alignment" />

          <SectionHeading id="section-6">Choose Non-Slip Soles</SectionHeading>
          <Paragraph>Traction is crucial, especially if you walk on:</Paragraph>
          <BlogList>
            <li>Tile floors</li>
            <li>Wet surfaces</li>
            <li>Outdoor sidewalks</li>
            <li>Sloped paths</li>
          </BlogList>
          <Paragraph>Look for:</Paragraph>
          <BlogList>
            <li>Deep tread patterns</li>
            <li>Durable rubber outsoles</li>
            <li>Multi-directional grip design</li>
          </BlogList>
          <Paragraph>Non-slip soles enhance stability when the surface changes unexpectedly.</Paragraph>
          <BlogImage src="image-6.webp" alt="Walking shoe tread and outsole grip" />

          <SectionHeading id="section-7">Consider Lightweight Design</SectionHeading>
          <Paragraph>Heavy shoes increase muscular fatigue and can subtly affect walking mechanics. Lightweight walking shoes reduce energy expenditure and improve stride efficiency.</Paragraph>
          <Paragraph>However, avoid ultra-minimal shoes lacking structural support. The goal is lightweight with stability features. Materials to look for:</Paragraph>
          <BlogList>
            <li>Engineered mesh uppers</li>
            <li>EVA foam midsoles</li>
            <li>Reinforced heel and midfoot zones</li>
          </BlogList>
          <Paragraph>If you're unsure which models actually combine lightweight comfort with strong stability, check out <ArticleLink href="https://darkcyan-lion-250828.hostingersite.com/best-walking-shoes-for-seniors-2026/">Best Walking Shoes for Seniors in 2026</ArticleLink> for expert-reviewed options that meet these criteria.</Paragraph>
          <BlogImage src="image-7.webp" alt="Woman walking outdoors in stable walking shoes" />

          <SectionHeading id="section-8">Replace Shoes on Time</SectionHeading>
          <Paragraph>Walking shoes lose shock absorption and structural integrity over time.</Paragraph>
          <Paragraph>General replacement guideline:</Paragraph>
          <BlogList>
            <li>Every <strong>300-500 miles</strong></li>
            <li>When tread patterns wear down</li>
            <li>When cushioning feels compressed</li>
            <li>If you notice uneven sole wear</li>
          </BlogList>
          <Paragraph>Worn-out shoes compromise stability and increase fall risk.</Paragraph>
          <BlogImage src="image-8.webp" alt="New outsole compared with worn-out outsole" />

          <SectionHeading id="section-9">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['What type of walking shoes are best for balance?', 'Shoes with a wide base, firm heel counter, moderate cushioning, structured arch support, and non-slip rubber soles are best for stability.'],
              ['Are soft cushioned shoes good for stability?', 'Extremely soft shoes may feel comfortable but can reduce balance. Moderate cushioning with firm support is preferable.'],
              ['How do I know if a walking shoe fits properly?', 'You should have half an inch of toe space, no heel slippage, and comfortable toe movement.'],
              ['Do arch supports improve balance?', 'Yes. Proper arch support keeps the foot aligned and distributes body weight evenly.'],
              ['How often should walking shoes be replaced?', 'Typically, after 300-500 miles or when cushioning and tread begin to wear.'],
              ['Are lightweight shoes better?', 'They reduce fatigue but must still offer strong structural support.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-10">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>Selecting walking shoes for balance and stability requires attention to biomechanics, not just style. Focus on:</Paragraph>
            <BlogList>
              <li>Wide, stable base</li>
              <li>Firm heel counter</li>
              <li>Structured arch support</li>
              <li>Moderate cushioning</li>
              <li>Non-slip outsole</li>
              <li>Proper fit</li>
            </BlogList>
            <Paragraph>The right pair will feel secure from the first step and support your natural gait without instability. Investing in quality walking shoes improves posture, reduces joint strain, and most importantly, helps you move confidently and safely every day.</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-11">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
            <div className="mt-4 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <p>7 Best Stability Walking Shoes in 2025 https://runrepeat.com/guides/best-stability-walking-shoes</p>
              <p className="mt-2">The importance of Arch support: What you need to know for healthy feet</p>
              <p>https://batemansfootwear.ie/blogs/news/the-importance-of-arch-support-what-you-need-to-know-for-healthy-feet</p>
              <p className="mt-2">How Firm Heel Counters Alleviate Foot Pain</p>
              <p>https://thefitville.com/blogs/blog/how-firm-heel-counters-alleviate-foot-pain</p>
              <p className="mt-2">Best Walking Shoes for Drop Foot and Weak Ankles: Stability Features You Shouldn't Miss</p>
              <p>https://cadense.com/blogs/cadense-cares/best-walking-shoes-for-drop-foot-and-weak-ankles-stability-features-you-shouldn-t-miss</p>
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

export default WalkingShoesDetail;
