mport { useEffect } from 'react';
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
  ['Depression is normal in aging', 'It is common, not normal'],
  ['Memory loss is inevitable', 'Significant decline requires evaluation'],
  ['Therapy doesn’t work for seniors', 'It is highly effective'],
  ['Isolation is harmless', 'It increases the mortality risk'],
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

function ArticleLink({ children, href }) {
  return (
    <a className="font-black text-[#0b61a4] no-underline hover:underline" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
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
            <p className="mx-auto mt-10 max-w-[min(100%,56rem)] text-[#1f2930]">Mental health matters at every age. Learn the causes, warning signs, and practical support options for seniors and caregivers.</p>
            <img className="mx-auto mt-5 h-auto w-full max-w-[700px] rounded-[8px] object-contain" src={`${process.env.PUBLIC_URL}/images/info-twa-38.webp`} alt="Mental health in old age guide for seniors and caregivers" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <img className="h-8 w-8 rounded-full object-cover" src={`${process.env.PUBLIC_URL}/images/syed-ali_avatar-300x300.webp`} alt="Syed Ali" />
            <p className="font-manrope text-[12px] font-black text-black">Syed Ali</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[16px] font-black text-black">Key Summary</h2>
            <Paragraph>Mental health in old age is influenced by mobility, social connection, physical health, and cognitive stimulation. Depression, anxiety, and dementia are common but treatable with early recognition and supportive care. Maintaining independence through safe mobility and active engagement significantly protects emotional well-being. Healthy aging requires both physical stability and psychological resilience.</Paragraph>
          </section>

          <Paragraph>Aging brings wisdom, perspective, and life experience. But it can also introduce emotional challenges that many families overlook. Mental health in old age is not simply about avoiding depression; it encompasses cognitive clarity, emotional resilience, social connection, and overall psychological well-being.</Paragraph>
          <Paragraph>At <strong>The Walker Advisor</strong>, we talk a lot about mobility, independence, and physical safety. However, true independence is incomplete without strong mental health. This guide provides a comprehensive, practical, and evidence-informed breakdown of mental health in seniors, causes, symptoms, prevention, and support strategies.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              {tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Why Mental Health in Seniors Deserves Attention</SectionHeading>
          <Paragraph>According to the World Health Organization, approximately 14% of adults aged 60 and older live with a mental health condition. Yet mental health issues in seniors are often underdiagnosed because symptoms may appear as “normal aging.” They are not.</Paragraph>
          <Paragraph>Untreated mental health conditions can:</Paragraph>
          <BlogList>
            <li>Increase fall risk</li>
            <li>Worsen chronic illnesses</li>
            <li>Reduce mobility</li>
            <li>Increase social withdrawal</li>
            <li>Lower life expectancy</li>
          </BlogList>
          <Paragraph>Mental well-being directly affects physical stability, something especially relevant for seniors who rely on walkers or mobility aids.</Paragraph>

          <SectionHeading id="section-2">Common Mental Health Conditions in Old Age</SectionHeading>
          <img className="mx-auto mt-7 h-auto w-full max-w-[500px] rounded-[8px] object-cover" src={`${process.env.PUBLIC_URL}/images/info-twa-38-1.webp`} alt="Key factors affecting senior mental health" />
          <SubHeading>1. Depression</SubHeading>
          <Paragraph>Depression is the most prevalent mental health disorder in older adults.</Paragraph>
          <Paragraph><strong>Symptoms may include:</strong></Paragraph>
          <BlogList><li>Persistent sadness</li><li>Loss of interest in activities</li><li>Appetite changes</li><li>Sleep disturbances</li><li>Fatigue</li><li>Feelings of hopelessness</li></BlogList>
          <Paragraph>Unlike younger adults, seniors may express depression through physical complaints rather than emotional language.</Paragraph>
          <SubHeading>2. Anxiety Disorders</SubHeading>
          <Paragraph>Anxiety in older adults often revolves around:</Paragraph>
          <BlogList><li>Health concerns</li><li>Fear of falling</li><li>Financial stress</li><li>Loss of independence</li></BlogList>
          <Paragraph>Chronic anxiety can increase muscle tension, balance instability, and cardiovascular strain.</Paragraph>
          <SubHeading>3. Dementia</SubHeading>
          <Paragraph>Dementia is not a single disease but a group of symptoms affecting memory and cognitive function. The most common type is Alzheimer’s disease.</Paragraph>
          <Paragraph><strong>Early signs:</strong></Paragraph>
          <BlogList><li>Memory loss affecting daily tasks</li><li>Confusion about time or place</li><li>Difficulty planning</li><li>Personality changes</li></BlogList>
          <SubHeading>4. Social Isolation & Loneliness</SubHeading>
          <Paragraph>Loneliness is one of the strongest predictors of mental health decline in seniors. Research from the National Institute on Aging shows that social isolation increases risks of depression, cognitive decline, and heart disease.</Paragraph>
          <Paragraph>Isolation can stem from:</Paragraph>
          <BlogList><li>Retirement</li><li>Loss of a spouse</li><li>Mobility limitations</li><li>Relocation</li></BlogList>

          <SectionHeading id="section-3">Major Causes of Mental Health Challenges in Old Age</SectionHeading>
          <SubHeading>1. Physical Health Problems</SubHeading>
          <Paragraph>Chronic pain conditions such as arthritis, not only affect mobility but also increase emotional stress. In fact, research shows that joint instability and reduced balance significantly raise fall risk, something we explore in detail in our guide on <ArticleLink href="https://darkcyan-lion-250828.hostingersite.com/can-osteoarthritis-lead-to-more-falls-in-seniors/">Can Osteoarthritis Lead to More Falls in Seniors?</ArticleLink></Paragraph>
          <SubHeading>2. Reduced Mobility</SubHeading>
          <Paragraph>Fear of falling or actual falls reduces confidence, leading to withdrawal.</Paragraph>
          <SubHeading>3. Loss and Grief</SubHeading>
          <Paragraph>Losing lifelong partners or friends deeply affects emotional stability.</Paragraph>
          <SubHeading>4. Medication Side Effects</SubHeading>
          <Paragraph>Certain medications can influence mood, cognition, or sleep.</Paragraph>
          <SubHeading>5. Financial Stress</SubHeading>
          <Paragraph>Fixed income and rising healthcare costs create anxiety.</Paragraph>

          <SectionHeading id="section-4">Warning Signs Families Should Never Ignore</SectionHeading>
          <Paragraph>If you notice these changes, intervention may be necessary:</Paragraph>
          <BlogList><li>Sudden personality shifts</li><li>Neglecting hygiene</li><li>Withdrawal from social interaction</li><li>Confusion beyond mild forgetfulness</li><li>Expressing hopelessness or worthlessness</li><li>Increased fear of movement or walking</li></BlogList>

          <SectionHeading id="section-5">Practical Strategies to Improve Mental Health in Old Age</SectionHeading>
          <SubHeading>1. Encourage Physical Activity</SubHeading>
          <Paragraph>Even gentle walking improves:</Paragraph>
          <BlogList><li>Mood regulation</li><li>Sleep quality</li><li>Cognitive function</li><li>Self-esteem</li></BlogList>
          <SubHeading>2. Promote Social Engagement</SubHeading>
          <Paragraph>Encourage:</Paragraph>
          <BlogList><li>Senior centers</li><li>Community groups</li><li>Religious gatherings</li><li>Family video calls</li><li>Group exercise classes</li></BlogList>
          <SubHeading>3. Cognitive Stimulation</SubHeading>
          <Paragraph>Activities like:</Paragraph>
          <BlogList><li>Puzzles</li><li>Reading</li><li>Memory games</li><li>Learning new skills</li><li>Playing bingo</li></BlogList>
          <SubHeading>4. Routine and Structure</SubHeading>
          <Paragraph>Older adults thrive with predictable schedules:</Paragraph>
          <BlogList><li>Regular wake/sleep times</li><li>Mealtime consistency</li><li>Planned activities</li></BlogList>
          <Paragraph>Structure reduces anxiety.</Paragraph>
          <SubHeading>5. Professional Support</SubHeading>
          <Paragraph>If symptoms persist, consult:</Paragraph>
          <BlogList><li>Primary care physicians</li><li>Geriatric psychiatrists</li><li>Therapists specializing in older adults</li></BlogList>
          <Paragraph>Early treatment significantly improves outcomes.</Paragraph>

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
            <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3">
              <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">What are the most common mental health problems in old age?</summary>
              <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">The most common conditions include depression, anxiety disorders, and cognitive disorders such as Alzheimer’s disease. Social isolation and grief-related emotional distress are also highly prevalent among seniors.</p>
            </details>
            <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3">
              <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">Is depression a normal part of aging?</summary>
              <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">No. While emotional changes can occur with life transitions, clinical depression is not a normal part of aging. Persistent sadness, lack of interest in activities, and appetite or sleep disturbances require medical evaluation.</p>
            </details>
            <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3">
              <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">How does reduced mobility affect mental health?</summary>
              <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">Reduced mobility often leads to social withdrawal, decreased independence, and fear of falling. Over time, this can increase the risk of depression and anxiety. Maintaining safe movement with proper support tools helps protect both physical and mental health.</p>
            </details>
            <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3">
              <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">What are early warning signs of mental decline in seniors?</summary>
              <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">Early signs may include:</p>
              <ul className="mt-2 list-disc pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">
                <li>Memory lapses affecting daily tasks</li>
                <li>Increased confusion</li>
                <li>Personality changes</li>
                <li>Withdrawal from social interaction</li>
                <li>Sudden mood shifts</li>
              </ul>
            </details>
            <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3">
              <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">Can lifestyle changes improve mental health in older adults?</summary>
              <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">Yes. Evidence shows that regular physical activity, social engagement, balanced nutrition, structured routines, and cognitive stimulation significantly improve emotional well-being and delay cognitive decline.</p>
            </details>
            <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3">
              <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">When should families seek professional help?</summary>
              <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">Professional help is recommended if a senior:</p>
              <ul className="mt-2 list-disc pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">
                <li>Shows persistent depressive symptoms</li>
                <li>Expresses hopelessness</li>
                <li>Stops participating in daily activities</li>
                <li>Experiences severe confusion</li>
                <li>Talks about self-harm</li>
              </ul>
            </details>
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-8">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>Mental health in old age is neither rare nor inevitable; it is manageable and treatable. With early recognition, proactive care, and supportive environments, seniors can maintain both physical and psychological independence.</Paragraph>
            <Paragraph>Strong legs matter but a strong mind matters just as much.</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-9">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>World Health Organization. (2023). <em>Mental health of older adults.</em></li>
              <li>National Institute on Aging. (2022). <em>Depression and Older Adults.</em></li>
              <li>Centers for Disease Control and Prevention. (2023). <em>Important Facts about Falls.</em></li>
              <li>National Institute of Mental Health. (2022). <em>Older Adults and Mental Health.</em></li>
              <li>Alzheimer’s Association. (2023). <em>2023 Alzheimer’s Disease Facts and Figures.</em></li>
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

export default MentalHealthDetail;
