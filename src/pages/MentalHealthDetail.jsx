import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';



const tableOfContents = [
  'Why Mental Health in Seniors Deserves Attention',
  'Common Mental Health Conditions in Old Age',
  'Major Causes of Mental Health Challenges in Old Age',
  'Warning Signs Families Should Never Ignore',
  'Practical Strategies to Improve Mental Health in Old Age',
  'Myths About Mental Health in Old Age',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const myths = [
  ['Depression is a normal part of aging', 'Depression is treatable'],
  ['Memory loss is always dementia', 'Forgetfulness does not always mean dementia'],
  ['Therapy does not help older adults', 'Therapy can be effective'],
  ['Isolation is harmless', 'Isolation increases health risk'],
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

function SocialDots() {
  return (
    <div className="mt-9 flex items-center justify-center gap-2" aria-label="Share article">
      {['f', 'in', 'x'].map((item) => (
        <a className="flex h-6 w-6 items-center justify-center rounded-full bg-black font-manrope text-[10px] font-black text-white no-underline" href={`#share-${item}`} key={item}>{item}</a>
      ))}
    </div>
  );
}





function MentalHealthDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Mental Health in Old Age: A Complete Guide for Seniors & Caregivers - The Walker Advisor';
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
            <h1 className="mx-auto max-w-[560px] text-[25px] font-black leading-tight text-black md:text-[28px]">Mental Health in Old Age: A Complete Guide for Seniors & Caregivers</h1>
            <p className="mx-auto mt-3 max-w-[600px] font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">Mental health matters at every age. Learn the causes, warning signs, and practical support options for seniors and caregivers.</p>
            <img className="mt-5 h-auto w-full rounded-[8px] object-cover" src={`${process.env.PUBLIC_URL}/images/info-twa-38.webp`} alt="Mental health in old age guide for seniors and caregivers" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">SA</div>
            <p className="font-manrope text-[12px] font-black text-black">Syed Ali</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[16px] font-black text-black">Key Summary</h2>
            <Paragraph>Mental health challenges in old age are common, but they are not an unavoidable part of aging. With awareness, support, routine, mobility, nutrition, and professional care, seniors can improve emotional wellbeing.</Paragraph>
          </section>

          <Paragraph>Aging brings changes in health, mobility, independence, and social connection. These changes can affect mood, memory, sleep, motivation, and overall quality of life.</Paragraph>
          <Paragraph>Families and caregivers play a major role in recognizing warning signs early and helping seniors access the support they need.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              {tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Why Mental Health in Seniors Deserves Attention</SectionHeading>
          <Paragraph>Mental health influences energy, appetite, sleep, relationships, memory, and physical recovery. When emotional health declines, seniors may become less active and more isolated.</Paragraph>
          <Paragraph>Common warning signs include:</Paragraph>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li>Persistent sadness or worry</li>
            <li>Withdrawal from family or hobbies</li>
            <li>Changes in sleep or appetite</li>
            <li>Confusion, irritability, or loss of motivation</li>
            <li>Neglecting personal care</li>
          </ul>

          <SectionHeading id="section-2">Common Mental Health Conditions in Old Age</SectionHeading>
          <img className="mx-auto mt-7 h-auto w-full max-w-[500px] rounded-[8px] object-cover" src={`${process.env.PUBLIC_URL}/images/info-twa-38-1.webp`} alt="Key factors affecting senior mental health" />
          <SubHeading>1. Depression</SubHeading>
          <Paragraph>Depression can appear as sadness, fatigue, loss of interest, sleep problems, or unexplained aches. It may follow illness, bereavement, isolation, or major life changes.</Paragraph>
          <SubHeading>2. Anxiety Disorders</SubHeading>
          <Paragraph>Anxiety may show up as constant worry, restlessness, panic symptoms, or fear of falling. It can make seniors avoid normal activities.</Paragraph>
          <SubHeading>3. Dementia</SubHeading>
          <Paragraph>Dementia affects memory, reasoning, behavior, and daily function. Early evaluation matters because some symptoms may be treatable or manageable.</Paragraph>
          <SubHeading>4. Social Isolation & Loneliness</SubHeading>
          <Paragraph>Loneliness can increase stress and worsen both mental and physical health. Regular contact and purposeful activity can reduce risk.</Paragraph>

          <SectionHeading id="section-3">Major Causes of Mental Health Challenges in Old Age</SectionHeading>
          <SubHeading>1. Physical Health Problems</SubHeading>
          <Paragraph>Chronic pain, heart disease, diabetes, mobility limitations, and sensory loss can affect mood and independence.</Paragraph>
          <SubHeading>2. Loss and Grief</SubHeading>
          <Paragraph>The loss of loved ones, routines, roles, or independence can trigger deep sadness and anxiety.</Paragraph>
          <SubHeading>3. Reduced Mobility</SubHeading>
          <Paragraph>Mobility issues can make seniors less active, more isolated, and more dependent on others.</Paragraph>
          <SubHeading>4. Financial Stress</SubHeading>
          <Paragraph>Medical costs, fixed income, and caregiving expenses can create significant emotional pressure.</Paragraph>

          <SectionHeading id="section-4">Warning Signs Families Should Never Ignore</SectionHeading>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li>Talking about hopelessness or being a burden</li>
            <li>Sudden personality changes</li>
            <li>Confusion that appears quickly</li>
            <li>Refusing food, medication, or hygiene</li>
            <li>Extreme fear, agitation, or withdrawal</li>
          </ul>

          <SectionHeading id="section-5">Practical Strategies to Improve Mental Health in Old Age</SectionHeading>
          <SubHeading>1. Encourage Physical Activity</SubHeading>
          <Paragraph>Walking, stretching, light exercise, or supervised movement can improve mood, sleep, and confidence.</Paragraph>
          <SubHeading>2. Promote Social Engagement</SubHeading>
          <Paragraph>Regular phone calls, group activities, hobbies, and community programs can reduce loneliness.</Paragraph>
          <SubHeading>3. Optimize Nutrition</SubHeading>
          <Paragraph>Balanced meals, hydration, and regular eating schedules support brain and body health.</Paragraph>
          <SubHeading>4. Maintain Routine</SubHeading>
          <Paragraph>Predictable routines reduce stress and help seniors feel more in control.</Paragraph>
          <SubHeading>5. Professional Support</SubHeading>
          <Paragraph>Doctors, counselors, social workers, and therapists can help diagnose and treat mental health concerns.</Paragraph>

          <SectionHeading id="section-6">Myths About Mental Health in Old Age</SectionHeading>
          <div className="mt-5 grid grid-cols-2 border-y border-[#d8dde2] font-manrope text-[11px] text-[#1f2930]">
            <div className="bg-[#ffc400] px-8 py-4 font-black">Myth</div>
            <div className="border-l border-[#d8dde2] bg-[#ffc400] px-8 py-4 font-black">Reality</div>
            {myths.map(([myth, reality]) => (
              <div className="contents" key={myth}>
                <div className="px-8 py-5 font-medium">{myth}</div>
                <div className="border-l border-[#d8dde2] px-8 py-5 font-medium">{reality}</div>
              </div>
            ))}
          </div>

          <SectionHeading id="section-7">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              'What are the most common mental health problems in old age?',
              'Is depression a normal part of aging?',
              'Can mental health improve in older adults?',
              'What should caregivers watch for?',
              'When should families seek professional help?',
            ].map((question) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">Depression, anxiety, dementia symptoms, loneliness, and sleep problems are common, but support and treatment can help.</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-8">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>Mental health in old age deserves the same attention as physical health. With early recognition, compassionate care, social support, healthy routines, and professional guidance, seniors can enjoy better emotional wellbeing.</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-9">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>World Health Organization. Mental health of older adults.</li>
              <li>National Institute on Aging. Depression and older adults.</li>
              <li>Centers for Disease Control and Prevention. Older adult mental health.</li>
              <li>Alzheimer's Association. Dementia and memory loss guidance.</li>
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

export default MentalHealthDetail;
