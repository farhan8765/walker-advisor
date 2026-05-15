import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const culprits = [
  {
    title: 'Processed Meats',
    intro: 'Bacon, deli ham, hot dogs, sausages, and canned meats are loaded with sodium nitrates, excess salt, and saturated fat, a triple threat to the aging body.',
    harms: ['Heart disease risk: High sodium raises blood pressure and strains aging arteries', 'Cancer link: WHO classifies processed meats as Group 1 carcinogens', 'Kidney strain: Aging kidneys struggle to filter excessive sodium loads'],
    swap: 'Grilled salmon, roasted chicken breast, legumes, or eggs — rich in protein without the preservatives.',
  },
  {
    title: 'Sugary Beverages',
    intro: 'Sodas, sweetened juices, energy drinks, and flavored waters deliver massive sugar hits with zero nutritional value, and seniors process sugar far less efficiently.',
    harms: ['Diabetes acceleration: Insulin sensitivity declines sharply after 60', 'Bone density loss: Phosphoric acid in sodas leaches calcium from bones', 'Cognitive decline: High sugar intake linked to accelerated brain aging'],
    swap: 'Sparkling water with citrus, herbal teas, green tea, or water infused with cucumber and mint.',
  },
  {
    title: 'White Bread & Refined Grains',
    intro: 'White bread, white rice, pasta, and packaged crackers have been stripped of fiber, vitamins, and minerals. For seniors, this means dangerous blood sugar spikes and gut health deterioration.',
    harms: ['Blood sugar spikes: Refined grains act like pure sugar in the bloodstream', 'Gut microbiome damage: Low fiber starves beneficial bacteria essential for immunity', 'Inflammation: Refined carbs are a leading driver of systemic inflammation in seniors'],
    swap: 'Whole grain bread, brown rice, quinoa, oats, or sweet potatoes, fiber-rich and nutrient-dense.',
  },
];

const goldenRules = [
  ['01', 'Prioritize Protein', 'Aim for 1.2g per kg of body weight daily. Muscle mass declines with age — protein is essential.'],
  ['02', 'Hydrate Intentionally', 'Drink 8 glasses daily, whether you feel thirsty or not. The thirst mechanism weakens after 60.'],
  ['03', 'Eat the Rainbow', 'Colorful fruits and vegetables deliver antioxidants that fight chronic inflammation.'],
  ['04', 'Don’t Skip Calcium & D3', 'Bone density loss accelerates post-60. Dairy, leafy greens, and sun exposure are non-negotiable.'],
  ['05', 'Watch Portion Sizes', 'Caloric needs decrease with age, but nutrient needs stay the same. Every bite should count.'],
  ['06', 'Consult Your Doctor', 'Every senior’s health picture is unique. Always personalize your diet with a healthcare provider.'],
];

const faqs = [
  ['Can seniors occasionally eat processed meats?', 'Small amounts occasionally are usually fine, but regular consumption increases heart and cancer risks.'],
  ['Are natural fruit juices safe for seniors?', 'Fresh juices in moderation are okay, but avoid sweetened or packaged juices that spike blood sugar.'],
  ['Which whole grains are best for seniors?', 'Oats, quinoa, brown rice, barley, and whole wheat bread are fiber-rich and nutrient-dense options.'],
  ['How soon can seniors notice health benefits from these changes?', 'Many notice improved energy and digestion within weeks, but long-term benefits like heart health and cognitive support build over months.'],
];

const references = [
  'World Health Organization. Processed Meat and Cancer Risk. [WHO, 2020]',
  'Harvard T.H. Chan School of Public Health. Sugar and Health. [Harvard Nutrition Source]',
  'National Institute on Aging. Healthy Eating After 60. [NIA.gov]',
  'Ann Wigmore Foundation. Food as Medicine.',
];

function Paragraph({ children }) {
  return <p className="mt-3 font-manrope text-[12px] font-medium leading-[1.85] text-[#1f2930]">{children}</p>;
}

function SectionHeading({ children, id }) {
  return <h2 className="mt-9 text-[18px] font-black leading-tight text-black" id={id}>{children}</h2>;
}

function FoodsSeniorsAvoidDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = '3 Foods for Seniors to Avoid';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1080px] bg-white px-4 pb-12 sm:px-6 lg:px-8">
        <article className="blog-detail-article w-full">
          <header className="pt-9 text-center">
            <h1 className="mx-auto max-w-[620px] text-[25px] font-black leading-tight text-black md:text-[28px]">3 Foods for Seniors to Avoid</h1>
            <p className="mx-auto mt-10 max-w-[min(100%,56rem)] text-[#1f2930]">Your body after 60 is a different machine entirely. Metabolism slows. The immune system becomes more reactive. Kidneys filter less efficiently, and the gut microbiome shifts dramatically.</p>
            <img className="mx-auto mt-5 h-auto w-full max-w-[700px] rounded-[8px] object-contain" src={`${process.env.PUBLIC_URL}/images/blog2.webp`} alt="3 Foods for Seniors to Avoid" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <img className="h-8 w-8 rounded-full object-cover" src={`${process.env.PUBLIC_URL}/images/robin-dolan_avatar-154x216.webp`} alt="Robin Dolan" />
            <p className="font-manrope text-[12px] font-black text-black">Robin Dolan</p>
          </div>

          <SectionHeading id="section-1">Why Your Diet Changes Everything After 60</SectionHeading>
          <Paragraph>Your body after 60 is a different machine entirely. Metabolism slows. The immune system becomes more reactive. Kidneys filter less efficiently, and the gut microbiome shifts dramatically. Foods that were perfectly fine at 40 can quietly accelerate inflammation, weaken bones, and strain your heart at 65.</Paragraph>
          <Paragraph>The most dangerous part? These aren’t exotic or obviously unhealthy foods. They’re everyday staples that millions of seniors eat without a second thought, and that’s exactly what makes them so important to understand.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li><a href="#section-1">1. Why Your Diet Changes Everything After 60</a></li>
              <li><a href="#section-2">2. The 3 Culprits to Eliminate</a></li>
              <li><a href="#section-3">3. 6 Golden Rules for Eating Well After 60</a></li>
              <li><a href="#section-4">4. Small Changes, Profound Results</a></li>
              <li><a href="#section-5">5. Frequently Asked Questions</a></li>
              <li><a href="#section-6">6. Final Thoughts</a></li>
              <li><a href="#section-7">7. References</a></li>
            </ol>
          </nav>

          <blockquote className="mt-7 rounded-[8px] bg-[#f3f3f3] p-5 font-manrope text-[12px] italic leading-6 text-[#1f2930]">
            “Food is either the safest and most powerful form of medicine, or the slowest form of poison.”
            <strong className="mt-2 block not-italic text-black">— Ann Wigmore, Nutritional Pioneer</strong>
          </blockquote>

          <SectionHeading id="section-2">The 3 Culprits to Eliminate</SectionHeading>
          {culprits.map((item) => (
            <section className="mt-6" key={item.title}>
              <h3 className="text-[15px] font-black text-black">{item.title}</h3>
              <Paragraph>{item.intro}</Paragraph>
              <p className="mt-4 font-manrope text-[12px] font-black text-black">WHY IT’S HARMFUL:</p>
              <ul className="mt-2 list-disc pl-5 font-manrope text-[12px] leading-6 text-[#1f2930]">
                {item.harms.map((harm) => <li key={harm}>{harm}</li>)}
              </ul>
              <Paragraph><strong>✓ HEALTHY SWAP:</strong> {item.swap}</Paragraph>
            </section>
          ))}

          <SectionHeading id="section-3">6 Golden Rules for Eating Well After 60</SectionHeading>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {goldenRules.map(([number, title, text]) => (
              <div className="rounded-[8px] bg-[#f3f3f3] p-5" key={number}>
                <p className="font-manrope text-[12px] font-black text-black">{number}</p>
                <h3 className="mt-2 text-[15px] font-black text-black">{title}</h3>
                <Paragraph>{text}</Paragraph>
              </div>
            ))}
          </div>

          <SectionHeading id="section-4">Small Changes, Profound Results</SectionHeading>
          <Paragraph>You don’t need a dramatic overhaul. Removing just these three food categories and replacing them with whole, nutrient-dense alternatives can transform your energy, cognition, and longevity.</Paragraph>

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
            <Paragraph>Diet shapes aging more than almost any other factor. After 60, the body responds differently to foods, and everyday staples like processed meats, sugary drinks, and refined grains can quietly erode health. By making small, intentional swaps and following the golden rules of senior nutrition, it’s possible to enhance energy, strengthen bones, protect the heart, and even support mental clarity. Aging gracefully starts on the plate.</Paragraph>
          </section>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-7">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
            <ol className="mt-3 list-decimal pl-5 font-manrope text-[12px] leading-6 text-[#1f2930]">
              {references.map((reference) => <li key={reference}>{reference}</li>)}
            </ol>
          </section>
        </article>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}

export default FoodsSeniorsAvoidDetail;
