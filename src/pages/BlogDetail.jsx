import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import { BlogGridTable } from '../components/BlogTable';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';



const tableOfContents = [
  'How the Heart and Fall Risk Are Connected',
  'Heart Conditions That Increase Fall Risk in Seniors',
  'The Role of Diet in Heart Health and Fall Risk',
  'How to Reduce Fall Risk if You Have Heart Issues',
  'Warning Signs to Watch For',
  'Tips for Caregivers Supporting Seniors with Heart Conditions',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const riskReducers = [
  ['Use a walker or mobility aid', 'Provides stability during dizzy spells'],
  ['Wear proper footwear', 'Reduces slipping and improves grip'],
  ['Use an upright walker', 'Supports posture and reduces spinal strain'],
  ['Have emergency devices ready', 'Enables fast help after a fall'],
  ['Monitor blood pressure', 'Catches dangerous drops early'],
];

const relatedArticles = [
  {
    image: 'unnamed-768x512.png',
    title: 'Social Activities for Older Adults: The Best Ways to Stay Connected, Active, and Happy',
    description:
      'Loneliness in seniors is not just sad, it is as dangerous to health as smoking 15 cigarettes a day. Here are the best ways older',
  },
  {
    image: 'image-11-768x429.png',
    title: '3 Foods for Seniors to Avoid',
    description:
      'Your body after 70 is a different machine entirely. Metabolism slows. The immune system becomes more reactive. Kidneys filter less efficiently, and',
  },
  {
    image: 'image-9-1-768x419.png',
    title: 'Understanding Upright Walkers: How They Improve Senior Posture',
    description:
      "Most seniors don't realize they're missing these 4 essential exercises until mobility starts to decline. Discover the simple routine that keeps you active, balanced, and",
  },
];



function SectionHeading({ children, id }) {
  return (
    <h2 className="mt-9 text-[18px] font-black leading-tight text-black" id={id}>
      {children}
    </h2>
  );
}

function Paragraph({ children }) {
  return (
    <p className="mt-3 font-manrope text-[12px] font-medium leading-[1.85] text-[#1f2930]">
      {children}
    </p>
  );
}

function SocialDots() {
  return (
    <div className="mt-9 flex items-center justify-center gap-2" aria-label="Share article">
      {['f', 'in', 'x'].map((item) => (
        <a
          className="flex h-6 w-6 items-center justify-center rounded-full bg-black font-manrope text-[10px] font-black text-white no-underline"
          href={`#share-${item}`}
          key={item}
        >
          {item}
        </a>
      ))}
    </div>
  );
}





function BlogDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Can Heart Issues Increase Fall Risk in Seniors? - The Walker Advisor';

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="mx-auto w-full max-w-[1080px] bg-white px-4 pb-12 sm:px-6 lg:px-8">
        <article className="blog-detail-article w-full">
          <header className="w-full pt-16 text-center">
            <h1 className="mx-auto max-w-[min(100%,56rem)] text-black">
              Can Heart Issues Increase Fall Risk in Seniors?
            </h1>
            <p className="mx-auto mt-10 max-w-[min(100%,56rem)] text-[#1f2930]">
              You might think falls are just about balance, but what if your heart is the real culprit? Discover the hidden connection between heart issues and sudden falls in seniors before it’s too late.
            </p>

            <img
              className="mx-auto mt-5 h-auto w-full max-w-[700px] rounded-[8px] object-contain"
              src={`${process.env.PUBLIC_URL}/images/image-2-1.webp`}
              alt="Senior man with chest discomfort being supported by a caregiver"
            />

            <div className="mt-6 flex items-center gap-3">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src={`${process.env.PUBLIC_URL}/images/amir.webp`}
                alt="Amir Abbasi"
              />
              <p className="font-manrope text-[12px] font-black text-black">Amir Abbasi</p>
            </div>
          </header>

          <div className="mt-5">
            <Paragraph>
              Falls are one of the leading causes of injury among older adults, but what many people don't realize is that the heart plays a major role in fall risk. When the heart isn't functioning at its best, it affects blood flow, blood pressure, energy levels, and balance.
            </Paragraph>
            <Paragraph>
              For seniors already managing heart conditions, understanding this connection can be life-changing and potentially life-saving.
            </Paragraph>
            <p className="mt-3 font-manrope text-[12px] font-medium leading-[1.85] text-[#1f2930]">
              Having the right mobility support in place is one of the most practical steps a senior with heart issues can take. Our guide on{' '}
              <a className="text-[#0b61a4] no-underline hover:underline" href="https://thewalkeradvisor.com/best-walkers-for-seniors-with-balance-problems" target="_blank" rel="noopener noreferrer">Best Walkers for Seniors with Balance Problems</a>
              {' '}is a great place to start when looking for the right stability aid.
            </p>
            <Paragraph>
              Whether you walk daily for fitness, spend long hours standing at work, or simply want safer movement, understanding shoe structure will help you make an informed choice.
            </Paragraph>
          </div>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">
              Table of Contents
            </h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              {tableOfContents.map((item, index) => (
                <li key={item}>
                  <a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>
                    {index + 1}. {item}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <SectionHeading id="section-1">How the Heart and Fall Risk Are Connected</SectionHeading>
          <Paragraph>
            The heart is responsible for pumping oxygen-rich blood to the brain, muscles, and every organ in the body. When that process is disrupted, even briefly, it can cause dizziness, weakness, confusion, or sudden drops in blood pressure.
          </Paragraph>
          <Paragraph>
            Any one of these symptoms can cause a senior to lose their footing and fall. The relationship between heart health and fall risk is not always obvious because the symptoms can be subtle. A senior might simply feel "a little off" or suddenly lightheaded before a fall occurs, without ever connecting it to their heart.
          </Paragraph>

          <SectionHeading id="section-2">Heart Conditions That Increase Fall Risk in Seniors</SectionHeading>
          <h3 className="mt-5 text-[14px] font-black text-black">1. Orthostatic Hypotension (Low Blood Pressure on Standing)</h3>
          <Paragraph>
            Orthostatic hypotension is one of the most common causes of falls in older adults. It occurs when blood pressure drops suddenly after standing up from a seated or lying position. The brain temporarily receives less blood, causing dizziness or lightheadedness that can result in a fall within seconds.
          </Paragraph>
          <Paragraph>
            This condition is frequently linked to heart disease, dehydration, and certain medications.
          </Paragraph>

          <img
            className="mx-auto mt-7 h-auto w-full max-w-[520px] rounded-[10px] object-cover"
            src={`${process.env.PUBLIC_URL}/images/pump.webp`}
            alt="Diagram showing how the heart pumps blood and affects balance"
          />

          <h3 className="mt-7 text-[14px] font-black text-black">2. Arrhythmia (Irregular Heartbeat)</h3>
          <Paragraph>
            An irregular heartbeat means the heart is not pumping blood consistently. This can cause sudden feelings of weakness, palpitations, fainting, or brief blackouts, all of which dramatically increase fall risk.
          </Paragraph>
          <Paragraph>
            Atrial fibrillation (AFib) is one of the most common arrhythmias in seniors and is strongly associated with falls and related injuries.
          </Paragraph>

          <h3 className="mt-7 text-[14px] font-black text-black">3. Heart Failure</h3>
          <Paragraph>
            Heart failure doesn't mean the heart has stopped; it means the heart is not pumping as efficiently as it should. This leads to fatigue, fluid buildup in the legs, and reduced oxygen delivery to muscles and the brain. Seniors with heart failure often experience leg weakness and breathlessness, making it much harder to stay steady on their feet.
          </Paragraph>
          <p className="mt-3 font-manrope text-[12px] font-medium leading-[1.85] text-[#1f2930]">
            A sturdy walker can provide critical support in these moments. See our{' '}
            <a className="text-[#0b61a4] no-underline hover:underline" href="https://thewalkeradvisor.com/safest-walkers-for-seniors" target="_blank" rel="noopener noreferrer">Safest Walkers for Seniors: Top 5 Secure and Sturdy Choices</a>
            {' '}for reliable options.
          </p>

          <h3 className="mt-7 text-[14px] font-black text-black">4. Coronary Artery Disease (CAD)</h3>
          <Paragraph>
            Coronary artery disease restricts blood flow to the heart, often causing fatigue and reduced physical capacity. As seniors with CAD tire more easily, their muscle coordination and reaction time decrease, both of which are critical for preventing falls.
          </Paragraph>

          <h3 className="mt-7 text-[14px] font-black text-black">5. Cardiac Medications and Their Side Effects</h3>
          <Paragraph>
            Many medications used to manage heart conditions, including beta-blockers, diuretics, and blood pressure drugs, can cause side effects that increase fall risk.
          </Paragraph>
          <Paragraph>
            These include dizziness, fatigue, dehydration, and low blood pressure. Seniors managing multiple prescriptions should review their medications regularly with their doctor.
          </Paragraph>

          <SectionHeading id="section-3">The Role of Diet in Heart Health and Fall Risk</SectionHeading>
          <Paragraph>
            What seniors eat directly affects their heart health, and by extension, their fall risk. A diet high in sodium, saturated fats, and processed foods can worsen cardiovascular conditions and contribute to instability.
          </Paragraph>
          <p className="mt-3 font-manrope text-[12px] font-medium leading-[1.85] text-[#1f2930]">
            Proper footwear also plays a role in reducing fall risk. Read our guide on{' '}
              <a className="text-[#0b61a4] no-underline hover:underline" href="https://thewalkeradvisor.com/why-seniors-need-proper-walking-shoes" target="_blank" rel="noopener noreferrer">Why Seniors Need Proper Walking Shoes</a>
            {' '}for practical recommendations.
          </p>

          <SectionHeading id="section-4">How to Reduce Fall Risk if You Have Heart Issues</SectionHeading>
          <BlogGridTable className="mt-5" headers={['Strategy', 'How It Helps']} rows={riskReducers} />

                    <SectionHeading id="section-5">Warning Signs to Watch For</SectionHeading>
          <div className="mt-4 rounded-[6px] border border-[#cfd6dc] bg-[#f7f7f7] p-4">
            <p className="font-manrope text-[11px] font-semibold leading-6 text-[#1f2930]">
              If you or a loved one has a heart condition, be alert to these signs that could indicate an increased fall risk:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[11px] font-semibold leading-6 text-[#1f2930]">
              <li>Sudden dizziness or lightheadedness, especially when standing up</li>
              <li>Unexplained fatigue or weakness in the legs</li>
              <li>Heart palpitations or a racing heartbeat before or during activity</li>
              <li>Shortness of breath during light activity or walking</li>
              <li>Brief episodes of confusion or disorientation</li>
            </ul>
            <p className="mt-3 font-manrope text-[11px] font-semibold leading-6 text-[#1f2930]">
              These symptoms should always be reported to a doctor immediately. In the meantime, having a reliable mobility aid on hand can provide critical support. Our guide on{' '}
              <a className="text-[#0b61a4] no-underline hover:underline" href="https://thewalkeradvisor.com/best-mobility-devices-for-seniors" target="_blank" rel="noopener noreferrer">Best Mobility Devices for Seniors</a>
              {' '}covers a wide range of options to suit different needs.
            </p>
          </div>

          <img
            className="mx-auto mt-8 h-auto w-full max-w-[520px] rounded-[10px] object-cover"
            src={`${process.env.PUBLIC_URL}/images/blog1.webp`}
            alt="Senior woman near a walker monitoring her health"
          />

          <SectionHeading id="section-6">Tips for Caregivers Supporting Seniors with Heart Conditions</SectionHeading>
          <Paragraph>
            Caring for a senior with heart issues requires extra awareness around fall prevention. Here are some practical steps:
          </Paragraph>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li>Ensure the home is fall-proof: Remove loose rugs, improve lighting, and install grab bars in bathrooms.</li>
            <li>Encourage slow position changes: Help seniors stand up gradually to prevent orthostatic hypotension.</li>
            <li>Review medications regularly: Work with the senior's doctor to identify any drugs that may increase fall risk.</li>
            <li>Choose the right mobility aid: A rollator or upright walker can provide stability during dizzy spells.</li>
            <li>Have an emergency plan: Learn what to do in a fall situation</li>
          </ul>

          <SectionHeading id="section-7">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['Can a heart condition directly cause a fall?', 'Heart conditions like arrhythmia and orthostatic hypotension can cause sudden dizziness, fainting, or weakness that directly leads to falls. Managing your heart condition actively is one of the best ways to reduce this risk.'],
              ['What heart medication is most associated with falls in seniors?', 'Diuretics and blood pressure medications are most commonly linked to falls because they can cause dehydration and low blood pressure. Always discuss side effects with your doctor and never stop taking prescribed medication without medical advice.'],
              ['Should seniors with heart conditions use a walker?', 'In many cases, yes. A walker provides stability during episodes of dizziness or weakness.'],
              ['Can exercise help reduce fall risk for seniors with heart disease?', 'Gentle, doctor-approved exercise can strengthen the heart and improve balance. Always consult your physician before starting any new exercise routine.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">
                  {question}
                </summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">
                  {answer}
                </p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-8">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>
              Heart health and fall prevention are more closely connected than most people realize. By understanding how heart conditions affect balance, blood pressure, and energy levels, seniors and their caregivers can take proactive steps to reduce risk.
            </Paragraph>
            <Paragraph>
              The right combination of medical care, proper nutrition, appropriate mobility aids, and home safety measures can make a significant difference in quality of life.
            </Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-9">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>Centers for Disease Control and Prevention (CDC). Older Adult Falls.{' '}
                <a className="text-[#0b61a4] no-underline hover:underline" href="https://www.cdc.gov/falls/about/index.html" target="_blank" rel="noopener noreferrer">https://www.cdc.gov/falls/about/index.html</a>
              </li>
              <li>American Heart Association. Heart Failure and Fall Risk in Older Adults.{' '}
                <a className="text-[#0b61a4] no-underline hover:underline" href="https://www.heart.org/en/health-topics/heart-failure" target="_blank" rel="noopener noreferrer">https://www.heart.org/en/health-topics/heart-failure</a>
              </li>
              <li>National Institute on Aging. Falls and Older Adults.{' '}
                <a className="text-[#0b61a4] no-underline hover:underline" href="https://www.nia.nih.gov/health/falls-and-older-adults" target="_blank" rel="noopener noreferrer">https://www.nia.nih.gov/health/falls-and-older-adults</a>
              </li>
              <li>Mayo Clinic. Orthostatic Hypotension: Symptoms and Causes.{' '}
                <a className="text-[#0b61a4] no-underline hover:underline" href="https://www.mayoclinic.org/diseases-conditions/orthostatic-hypotension" target="_blank" rel="noopener noreferrer">https://www.mayoclinic.org/diseases-conditions/orthostatic-hypotension</a>
              </li>
              <li>Journal of the American Geriatrics Society. Cardiovascular Conditions and Fall Risk.{' '}
                <a className="text-[#0b61a4] no-underline hover:underline" href="https://agsjournals.onlinelibrary.wiley.com" target="_blank" rel="noopener noreferrer">https://agsjournals.onlinelibrary.wiley.com</a>
              </li>
            </ol>
          </section>

          <SocialDots />

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
              <button className="rounded-full bg-[#07364f] px-7 py-3 font-manrope text-[11px] font-black text-white" type="submit">
                Post Comment
              </button>
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

export default BlogDetail;
