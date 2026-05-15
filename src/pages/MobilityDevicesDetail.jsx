import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const tableOfContents = [
  'Best Mobility Devices for Seniors',
  'Canes',
  'Walkers',
  'Rollators (Four-Wheel Walkers)',
  'Wheelchairs',
  'Mobility Scooters',
  'Transfer & Support Aids',
  'Safety Tips for Using Mobility Devices',
  'Frequently Asked Questions',
  'Final Thoughts',
];

const faqs = [
  ['What is the best mobility device for seniors with balance problems?', 'Walkers and rollators are generally best for balance issues, as they provide more stability than canes.'],
  ['Are mobility scooters safe for seniors?', 'Yes, when used correctly. Seniors should have good vision, reaction time, and the ability to sit upright safely.'],
  ['Can a senior use more than one mobility device?', 'Yes. Many seniors use different devices for indoor and outdoor activities depending on their needs.'],
  ['Do mobility devices require a prescription?', 'Basic aids like canes and walkers usually do not, but wheelchairs and scooters may require medical documentation for insurance coverage.'],
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

function SubHeading({ children, id }) {
  return <h3 className="mt-5 text-[14px] font-black text-black" id={id}>{children}</h3>;
}

function Paragraph({ children }) {
  return <p className="mt-3 font-manrope text-[12px] font-medium leading-[1.85] text-[#1f2930]">{children}</p>;
}

function BlogList({ children }) {
  return <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">{children}</ul>;
}

function ProsCons({ pros, cons }) {
  return (
    <div className="mt-4 grid grid-cols-2 border border-black font-manrope text-[11px] text-[#1f2930]">
      <div className="border-r border-black px-4 py-3 font-black">Pros:</div>
      <div className="px-4 py-3 font-black">Cons:</div>
      <div className="border-r border-t border-black px-4 py-3"><BlogList>{pros.map((item) => <li key={item}>{item}</li>)}</BlogList></div>
      <div className="border-t border-black px-4 py-3"><BlogList>{cons.map((item) => <li key={item}>{item}</li>)}</BlogList></div>
    </div>
  );
}

function BlogImage({ src, alt, narrow = false }) {
  return <img className={`mx-auto mt-7 h-auto w-full rounded-[8px] object-cover ${narrow ? 'max-w-[320px]' : 'max-w-[500px]'}`} src={`${process.env.PUBLIC_URL}/images/${src}`} alt={alt} />;
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
function MobilityDevicesDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Best Mobility Devices for Seniors: A Complete Guide to Safe & Independent Living - The Walker Advisor';
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
            <h1 className="mx-auto max-w-[560px] text-[25px] font-black leading-tight text-black md:text-[28px]">Best Mobility Devices for Seniors: A Complete Guide to Safe & Independent Living</h1>
            <p className="mx-auto mt-10 max-w-[min(100%,56rem)] text-[#1f2930]">Discover the top mobility devices that can instantly make daily life safer and easier for seniors. Don’t miss these game-changing solutions.</p>
            <img className="mx-auto mt-5 h-auto w-full max-w-[700px] rounded-[8px] object-contain" src={`${process.env.PUBLIC_URL}/images/blog35-1-1.webp`} alt="Mobility devices for seniors including wheelchair, scooter, cane, and walker" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <img className="h-8 w-8 rounded-full object-cover" src={`${process.env.PUBLIC_URL}/images/syed-ali_avatar-300x300.webp`} alt="Syed Ali" />
            <p className="font-manrope text-[12px] font-black text-black">Syed Ali</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[16px] font-black text-black">Key Summary</h2>
            <Paragraph>Mobility devices help seniors maintain independence and reduce fall risk. Choosing the right device depends on balance, strength, and lifestyle needs. Walkers, canes, wheelchairs, and scooters each serve different mobility levels.</Paragraph>
          </section>

          <Paragraph>As people age, mobility challenges become increasingly common due to conditions such as arthritis, osteoporosis, muscle weakness, neurological disorders, or post-surgical recovery. Limited mobility not only affects physical health but also impacts confidence, independence, and overall quality of life.</Paragraph>
          <Paragraph>The good news is that modern mobility devices for seniors are designed to provide stability, comfort, and freedom of movement while significantly reducing the risk of falls. From simple walking canes to advanced mobility scooters, choosing the right device can make everyday activities safer and more manageable.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              {tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Best Mobility Devices for Seniors</SectionHeading>
          <SubHeading id="section-2">1. Canes</SubHeading>
          <Paragraph><strong>Best for:</strong> Mild balance issues or light support</Paragraph>
          <Paragraph>Canes are among the most basic mobility aids and are ideal for seniors who need minimal assistance. They help redistribute weight and improve walking stability.</Paragraph>
          <SubHeading>Types of Canes:</SubHeading>
          <BlogList>
            <li>Single-point canes</li>
            <li>Quad canes (four-point base for added stability)</li>
            <li>Offset handle canes</li>
          </BlogList>
          <ProsCons pros={['Lightweight and affordable', 'Easy to use and transport']} cons={['Limited support for advanced mobility issues']} />
          <BlogImage src="blog35-2.webp" alt="Different canes for seniors" narrow />

          <SubHeading id="section-3">2. Walkers</SubHeading>
          <Paragraph><strong>Best for:</strong> Moderate balance problems and leg weakness</Paragraph>
          <Paragraph>Walkers provide greater support than canes and are commonly recommended for seniors recovering from surgery or dealing with chronic instability.</Paragraph>
          <Paragraph>Walkers provide greater support than canes and are commonly recommended for seniors recovering from surgery or dealing with chronic instability. Choosing the right walker type is essential, especially for individuals with specific needs like height or body support. For example, taller individuals can benefit from specialized options, learn more in <ArticleLink href="https://darkcyan-lion-250828.hostingersite.com/heavy-duty-walkers-for-tall-people/">heavy-duty walker for tall people</ArticleLink>, to ensure proper posture and stability.</Paragraph>
          <SubHeading>Common Types:</SubHeading>
          <BlogList>
            <li>Standard walkers</li>
            <li>Two-wheel walkers</li>
            <li>Four-wheel walkers (rollators)</li>
          </BlogList>
          <ProsCons pros={['Excellent stability', 'Adjustable height options']} cons={['Bulkier than canes']} />
          <BlogImage src="blog35-3.webp" alt="Senior using a walker indoors" narrow />

          <SubHeading id="section-4">3. Rollators (Four-Wheel Walkers)</SubHeading>
          <Paragraph><strong>Best for:</strong> Seniors who need support but want mobility freedom</Paragraph>
          <Paragraph>Rollators come with four wheels, hand brakes, a seat, and often a storage basket. They are ideal for active seniors who walk longer distances.</Paragraph>
          <ProsCons pros={['Built-in seat for resting', 'Easy maneuverability', 'Suitable for outdoor use']} cons={['Requires good hand control for the brakes']} />
          <Paragraph>Using wheeled walkers correctly is crucial for safety. If you’re new to this type of mobility aid, check out <ArticleLink href="https://darkcyan-lion-250828.hostingersite.com/how-to-use-a-walker-with-wheels/">How To Use A Walker With Wheels for proper techniques and safety guidance</ArticleLink>.</Paragraph>
          <BlogImage src="blog35-5.webp" alt="Four-wheel rollator walker" narrow />

          <SubHeading id="section-5">4. Wheelchairs</SubHeading>
          <Paragraph><strong>Best for:</strong> Seniors with severe mobility limitations</Paragraph>
          <Paragraph>Wheelchairs provide full mobility support for those unable to walk safely for extended periods.</Paragraph>
          <SubHeading>Types:</SubHeading>
          <BlogList>
            <li>Manual wheelchairs</li>
            <li>Transport wheelchairs</li>
            <li>Power wheelchairs</li>
          </BlogList>
          <ProsCons pros={['Maximum mobility support', 'Customizable seating options']} cons={['Less independence without assistance (manual models)']} />
          <BlogImage src="blog35-6.webp" alt="Manual wheelchair and power wheelchair comparison" />

          <SubHeading id="section-6">5. Mobility Scooters</SubHeading>
          <Paragraph><strong>Best for:</strong> Seniors who can sit upright but struggle with walking long distances</Paragraph>
          <Paragraph>Mobility scooters are battery-powered devices designed for outdoor use, shopping, and travel.</Paragraph>
          <ProsCons pros={['Long-distance mobility', 'Comfortable seating', 'High independence']} cons={['Not suitable for indoor tight spaces', 'Higher cost']} />

          <SectionHeading id="section-7">6. Transfer & Support Aids</SectionHeading>
          <Paragraph><strong>Best for:</strong> Assistance with sitting, standing, and transfers</Paragraph>
          <Paragraph>These devices complement primary mobility aids and improve safety at home.</Paragraph>
          <SubHeading>Examples:</SubHeading>
          <BlogList>
            <li>Grab bars</li>
            <li>Bed rails</li>
            <li>Transfer boards</li>
            <li>Lift chairs</li>
          </BlogList>

          <SectionHeading id="section-8">Safety Tips for Using Mobility Devices</SectionHeading>
          <BlogList>
            <li>Adjust the device to the correct height</li>
            <li>Ensure brakes and wheels are functioning properly</li>
            <li>Wear supportive, non-slip footwear</li>
            <li>Avoid rushing or uneven terrain</li>
            <li>Perform regular maintenance checks</li>
          </BlogList>

          <SectionHeading id="section-9">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {faqs.map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-10">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>Mobility devices play a critical role in helping seniors maintain independence, dignity, and safety. Selecting the right mobility aid can significantly improve daily life, reduce fall risks, and promote long-term well-being. By understanding the different types of mobility devices available and matching them to individual needs, seniors and caregivers can make informed, confident decisions that support active and secure aging.</Paragraph>
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

export default MobilityDevicesDetail;
