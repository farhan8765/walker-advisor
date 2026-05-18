import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const tableOfContents = [
  'What Is Osteoarthritis?',
  'How Osteoarthritis Increases Fall Risk in Seniors',
  'Why Falls Are Dangerous for Older Adults',
  'How Seniors with Osteoarthritis Can Reduce Fall Risk',
  'Frequently Asked Questions',
  'Final Thoughts',
];

const faqs = [
  ['Can osteoarthritis directly cause falls?', 'Osteoarthritis does not directly cause falls, but it increases fall risk by affecting balance, strength, and mobility.'],
  ['Which joints increase fall risk the most?', 'Osteoarthritis in the knees and hips poses the highest fall risk because these joints support body weight and movement.'],
  ['Can walking aids help seniors with osteoarthritis?', 'Yes. Walkers and canes provide added stability, reduce joint strain, and significantly lower fall risk.'],
  ['Is exercise safe for seniors with osteoarthritis?', 'Low-impact exercises are not only safe but recommended. They strengthen muscles and improve balance when done correctly.'],
  ['Should seniors with osteoarthritis avoid walking?', 'No. Avoiding movement can worsen muscle weakness. Walking with proper support is beneficial.'],
];

function ArticleLink({ children, href }) {
  return (
    <a className="font-black text-[#0b61a4] no-underline hover:underline" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
      {children}
    </a>
  );
}

function SectionHeading({ children, id }) {
  return <h2 className="mt-9 text-[18px] font-black leading-tight text-black" id={id}>{children}</h2>;
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
function OsteoarthritisFallsDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Can Osteoarthritis Lead to More Falls in Seniors? - The Walker Advisor';
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
            <h1 className="mx-auto max-w-[560px] text-[25px] font-black leading-tight text-black md:text-[28px]">Can Osteoarthritis Lead to More Falls in Seniors?</h1>
            <p className="mx-auto mt-10 max-w-[min(100%,56rem)] text-[#1f2930]">Osteoarthritis can quietly increase fall risk in seniors by affecting balance, strength, and mobility, often before warning signs appear.</p>
            <img className="mx-auto mt-5 h-auto w-full max-w-[700px] rounded-[8px] object-contain" src={`${process.env.PUBLIC_URL}/images/twaa-1.webp`} alt="Senior woman sitting beside a walker with knee pain" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">AA</div>
            <p className="font-manrope text-[12px] font-black text-black">Amir Abbasi</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[16px] font-black text-black">Key Summary</h2>
            <Paragraph>Osteoarthritis affects balance, strength, and movement in seniors. Joint pain and stiffness increase the likelihood of falls. Proper support, exercise, and fall-prevention strategies can reduce risk.</Paragraph>
          </section>

          <Paragraph>As people age, joint health becomes a major concern. One of the most common conditions affecting older adults is osteoarthritis, a degenerative joint disease that can significantly impact mobility. A common and important question many families ask is: Can osteoarthritis increase the risk of falls in seniors? The short answer is yes, and understanding why is essential for prevention and safety.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              {tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">What Is Osteoarthritis?</SectionHeading>
          <Paragraph>Osteoarthritis (OA) occurs when the protective cartilage that cushions the joints gradually wears away. It most commonly affects the knees, hips, hands, and spine, especially in older adults.</Paragraph>
          <Paragraph>Common symptoms include:</Paragraph>
          <BlogList>
            <li>Joint pain and stiffness</li>
            <li>Swelling or tenderness</li>
            <li>Reduced range of motion</li>
            <li>Difficulty walking or standing for long periods</li>
          </BlogList>
          <Paragraph>Over time, these symptoms can interfere with balance, coordination, and daily movement.</Paragraph>

          <SectionHeading id="section-2">How Osteoarthritis Increases Fall Risk in Seniors</SectionHeading>
          <Paragraph>Osteoarthritis does not directly cause falls, but it creates conditions that make falls more likely.</Paragraph>
          <SubHeading>Joint Pain and Weakness</SubHeading>
          <Paragraph>Painful joints make walking uncomfortable. Seniors may limp, walk slowly, or shift weight unevenly, increasing instability.</Paragraph>
          <SubHeading>Reduced Balance and Stability</SubHeading>
          <Paragraph>Limited joint movement affects posture and balance reactions, making it harder to recover from a slip or stumble.</Paragraph>
          <SubHeading>Muscle Weakness</SubHeading>
          <Paragraph>Pain often leads to reduced activity. Less movement results in weaker leg muscles, which are critical for maintaining balance.</Paragraph>
          <SubHeading>Stiffness After Rest</SubHeading>
          <Paragraph>Stiff joints after sitting or sleeping can make sudden movement risky, especially when standing up quickly.</Paragraph>
          <SubHeading>Fear of Movement</SubHeading>
          <Paragraph>Fear of pain can cause hesitant or unnatural walking patterns, which paradoxically increases fall risk.</Paragraph>

          <SectionHeading id="section-3">Why Falls Are Dangerous for Older Adults</SectionHeading>
          <Paragraph>Falls are a leading cause of injury among seniors. For those with osteoarthritis, falls can result in:</Paragraph>
          <BlogList>
            <li>Hip or wrist fractures</li>
            <li>Head injuries</li>
            <li>Loss of mobility and independence</li>
            <li>Extended recovery periods</li>
          </BlogList>

          <SectionHeading id="section-4">How Seniors with Osteoarthritis Can Reduce Fall Risk</SectionHeading>
          <Paragraph>Although osteoarthritis cannot be cured, fall risk can be managed effectively.</Paragraph>
          <SubHeading>Practical Safety Measures</SubHeading>
          <BlogList>
            <li>Use walking aids such as walkers or canes</li>
            <li>Wear supportive, non-slip footwear</li>
            <li>Keep floors clutter-free and well-lit</li>
            <li>Install grab bars in bathrooms and hallways</li>
            <li>Stand up slowly from sitting or lying positions</li>
          </BlogList>
          <Paragraph>Using a walker correctly is just as important as having one. If you’re unsure about proper setup, read <ArticleLink href="https://thewalkeradvisor.com/an-easy-guide-on-how-to-fit-a-walker-for-seniors/">The Ultimate Easy Guide to Fitting a Walker for Seniors Safely</ArticleLink> to ensure maximum stability and comfort.</Paragraph>
          <SubHeading>Stay Active with Low-Impact Exercise</SubHeading>
          <Paragraph>Gentle activities like walking, stretching, chair exercises, or water aerobics help improve strength and flexibility without stressing the joints.</Paragraph>
          <SubHeading>Manage Pain Properly</SubHeading>
          <Paragraph>Effective pain management through medical guidance, physical therapy, or lifestyle changes helps seniors move with confidence and control.</Paragraph>
          <Paragraph>Caregivers also play a vital role in fall prevention. If you’re supporting a loved one, explore <ArticleLink href="https://thewalkeradvisor.com/caregivers-guide-to-senior-walker-selection-and-usage/">How Caregivers Can Assist Seniors in Choosing and Using Walkers</ArticleLink> better to understand safe mobility practices and proper walker use.</Paragraph>
          <SubHeading>Prepare for Emergencies</SubHeading>
          <Paragraph>Even with precautions, falls can still happen. Having the right safety systems in place can make a critical difference. Consider reading <ArticleLink href="https://thewalkeradvisor.com/emergency-preparedness-for-walker-users/">Emergency Preparedness for Walker Users</ArticleLink> to learn how technology can provide quick assistance during emergencies.</Paragraph>

          <SectionHeading id="section-5">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {faqs.map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-6">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>Yes, osteoarthritis can increase the risk of falls in seniors, mainly by affecting pain levels, balance, and muscle strength. However, with the right support, lifestyle adjustments, and preventive measures, seniors can stay mobile, confident, and safe.</Paragraph>
            <Paragraph>Focusing on joint health today can help protect independence and prevent dangerous falls tomorrow.</Paragraph>
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

export default OsteoarthritisFallsDetail;
