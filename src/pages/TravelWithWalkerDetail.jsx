import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';



const tableOfContents = [
  'Assessing Your Travel Needs and Mobility',
  'Choosing the Right Walker for Mobility Aid',
  'Airline Policies: Transport, Accommodation and Other Services',
  'Packing Wisely: Equipment, Essentials and Emergency Supplies',
  'Ground Transport, Hotels, Cruises and Daily Travel Ease',
  'At Your Destination: Sightseeing, Resting, Terrain and Activities',
  'Health, Safety and Preparation',
  'Quick Travel Prep Checklist',
  'Frequently Asked Questions',
  'References',
];

const checklistRows = [
  ['Before booking', 'Confirm accessibility', 'Ask airlines, hotels, and transport providers about walker access.'],
  ['One week prior', 'Inspect walker', 'Check brakes, wheels, tips, screws, and folding parts.'],
  ['Packing', 'Bring essentials', 'Pack medication, documents, repair items, and comfort accessories.'],
  ['Airport day', 'Arrive early', 'Allow time for security, boarding help, and gate changes.'],
  ['At destination', 'Plan rest breaks', 'Avoid fatigue by spacing activities and meals.'],
  ['Return trip', 'Repeat checks', 'Inspect the walker again before heading home.'],
];

const faqs = [
  'Can I take a walker on an airplane?',
  'Do airlines charge for walkers?',
  'Should I check my walker or gate-check it?',
  'What type of walker is best for travel?',
  'How do I travel with a rollator safely?',
  'Can hotels provide accessibility help?',
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

function BlogList({ children }) {
  return <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">{children}</ul>;
}

function TravelDiagram() {
  const steps = ['Plan route', 'Confirm access', 'Pack walker', 'Ask for help', 'Rest often'];
  return (
    <div className="mx-auto mt-6 max-w-[250px] rounded-[8px] bg-[#f6d56a] p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
      <div className="space-y-2">
        {steps.map((step, index) => (
          <div className="rounded border border-black/20 bg-[#fff3bd] px-3 py-2 text-center font-manrope text-[10px] font-black text-black" key={step}>
            {index + 1}. {step}
          </div>
        ))}
      </div>
    </div>
  );
}

function BarChart() {
  const bars = [
    ['Energy', 'h-[96px]'],
    ['Time', 'h-[74px]'],
    ['Rest', 'h-[58px]'],
    ['Access', 'h-[42px]'],
  ];
  return (
    <div className="mx-auto mt-6 max-w-[220px] rounded-[8px] bg-[#111] p-5 text-white">
      <p className="font-manrope text-[10px] font-black text-[#ffc400]">Travel planning focus</p>
      <div className="mt-4 flex h-[120px] items-end gap-3 border-l border-b border-white/30 pl-3">
        {bars.map(([label, height]) => (
          <div className="flex flex-1 flex-col items-center gap-2" key={label}>
            <div className={`w-full rounded-t bg-[#ffc400] ${height}`} />
            <span className="font-manrope text-[8px] font-bold text-white/80">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialDots() {
  return <div className="mt-9 flex items-center justify-center gap-2" aria-label="Share article">{['f', 'in', 'x'].map((item) => <a className="flex h-6 w-6 items-center justify-center rounded-full bg-black font-manrope text-[10px] font-black text-white no-underline" href={`#share-${item}`} key={item}>{item}</a>)}</div>;
}





function TravelWithWalkerDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'How to Travel with a Walker - Tips for Seniors';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1080px] bg-white px-4 pb-12 sm:px-6 lg:px-8">
        <article className="blog-detail-article w-full">
          <header className="pt-9 text-center">
            <h1 className="mx-auto max-w-[560px] text-[25px] font-black leading-tight text-black md:text-[28px]">How to Travel with a Walker - Tips for Seniors</h1>
            <p className="mx-auto mt-3 max-w-[600px] font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">Think travelling with a walker sounds stressful? With the right planning, packing tricks, and mobility-smart choices, seniors can travel with more confidence.</p>
            <img className="mx-auto mt-5 h-auto w-full max-w-[330px] rounded-[8px] object-cover" src={`${process.env.PUBLIC_URL}/images/twa-1-1-e1761912917887.webp`} alt="Person traveling with a walker" />
          </header>

          <div className="mt-6 flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">RD</div><p className="font-manrope text-[12px] font-black text-black">Robin Dolan</p></div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[16px] font-black text-black">Key Summary</h2>
            <Paragraph>Travelling with a walker is manageable when seniors choose the right walker, confirm accessibility in advance, understand airline and transport policies, pack essential supplies, and plan realistic rest breaks.</Paragraph>
          </section>

          <Paragraph>Travel can feel intimidating when you rely on a walker, but mobility support does not have to stop vacations, family visits, medical travel, or day trips.</Paragraph>
          <Paragraph>The key is preparation. A few phone calls, smart packing, and a realistic pace can reduce stress and make the whole trip safer.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">{tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}</ol>
          </nav>

          <SectionHeading id="section-1">Assessing Your Travel Needs and Mobility</SectionHeading>
          <Paragraph>Before booking, think through the exact demands of the trip. Consider walking distance, uneven surfaces, stairs, bathroom access, fatigue, luggage handling, and how often you will need to sit.</Paragraph>
          <BlogList>
            <li>List the places you will visit each day.</li>
            <li>Estimate how long you can stand or walk comfortably.</li>
            <li>Identify who can help with bags, doors, ramps, and transfers.</li>
            <li>Plan slower travel days after flights or long car rides.</li>
          </BlogList>

          <SectionHeading id="section-2">Choosing the Right Walker for Mobility Aid</SectionHeading>
          <Paragraph>Not every walker travels equally well. A folding walker is simple and light, while a rollator may be better for longer outings because it offers wheels, brakes, and a seat.</Paragraph>
          <BlogList>
            <li>Choose a model that folds easily.</li>
            <li>Check weight limits and handle height.</li>
            <li>Make sure brakes and wheels work smoothly.</li>
            <li>Add a name tag and contact number before travel.</li>
          </BlogList>

          <SectionHeading id="section-3">Airline Policies: Transport, Accommodation and Other Services</SectionHeading>
          <Paragraph>Airlines usually allow mobility aids to travel without counting them as standard baggage, but policies and procedures can vary. Contact the airline before your trip and ask how they handle walkers at the gate.</Paragraph>
          <SubHeading>Before you fly</SubHeading>
          <BlogList>
            <li>Request wheelchair or mobility assistance when booking.</li>
            <li>Ask if the walker can be gate-checked.</li>
            <li>Arrive earlier than usual for security and boarding.</li>
            <li>Keep medications and documents in a carry-on bag.</li>
          </BlogList>
          <TravelDiagram />

          <SectionHeading id="section-4">Packing Wisely: Equipment, Essentials and Emergency Supplies</SectionHeading>
          <Paragraph>Pack for both comfort and backup support. Small accessories can make a major difference when a trip becomes tiring or unpredictable.</Paragraph>
          <BlogList>
            <li>Bring extra walker tips, simple tools, and a small repair kit.</li>
            <li>Pack medications in original containers.</li>
            <li>Carry emergency contacts, insurance cards, and prescriptions.</li>
            <li>Use a walker bag or pouch so hands stay free.</li>
          </BlogList>

          <SectionHeading id="section-5">Ground Transport, Hotels, Cruises and Daily Travel Ease</SectionHeading>
          <Paragraph>Ground travel is often where accessibility problems appear. Confirm details before arrival instead of assuming ramps, elevators, or accessible rooms will be available.</Paragraph>
          <SubHeading>Booking details to confirm</SubHeading>
          <BlogList>
            <li>Hotel elevator access and bathroom layout.</li>
            <li>Shuttle, rideshare, taxi, or rental car storage space.</li>
            <li>Cruise boarding assistance and cabin accessibility.</li>
            <li>Distance from parking areas to entrances.</li>
          </BlogList>
          <BarChart />

          <SectionHeading id="section-6">At Your Destination: Sightseeing, Resting, Terrain and Activities</SectionHeading>
          <Paragraph>Once you arrive, focus on pacing. Seniors often run into trouble when the schedule is too full or the walking route is harder than expected.</Paragraph>
          <BlogList>
            <li>Choose attractions with accessible entrances and restrooms.</li>
            <li>Schedule rest breaks before fatigue starts.</li>
            <li>Avoid loose gravel, steep hills, wet floors, and crowded routes.</li>
            <li>Use indoor routes during extreme heat, cold, or rain.</li>
          </BlogList>

          <SectionHeading id="section-7">Health, Safety and Preparation</SectionHeading>
          <Paragraph>Travel safety starts before leaving home. Ask a doctor or physical therapist if the trip is appropriate, especially after a recent fall, surgery, illness, or medication change.</Paragraph>
          <BlogList>
            <li>Review medications and possible side effects.</li>
            <li>Wear supportive shoes with non-slip soles.</li>
            <li>Hydrate and eat regularly during travel days.</li>
            <li>Keep a phone charged and easy to reach.</li>
          </BlogList>

          <SectionHeading id="section-8">Quick Travel Prep Checklist</SectionHeading>
          <div className="mt-4 overflow-hidden rounded-[8px] border border-[#d8dde2]">
            <table className="w-full border-collapse font-manrope text-[11px] font-semibold text-[#1f2930]">
              <thead className="bg-[#ffc400] text-black"><tr>{['Timing', 'Task', 'Notes'].map((item) => <th className="px-3 py-3 text-left" key={item}>{item}</th>)}</tr></thead>
              <tbody>{checklistRows.map((row) => <tr className="border-t border-[#d8dde2]" key={row[0]}>{row.map((cell) => <td className="px-3 py-3 align-top" key={cell}>{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>

          <SectionHeading id="section-9">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">{faqs.map((question) => <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}><summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary><p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">In most cases, yes, but confirm with the airline, hotel, or transport provider before travel. Keep instructions, documents, and contact numbers easy to access.</p></details>)}</div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>Travelling with a walker takes planning, but it is absolutely possible for many seniors. Choose the right walker, confirm access early, pace each day, and ask for help before fatigue creates risk.</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-10">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]"><li>U.S. Department of Transportation guidance on passengers with disabilities.</li><li>Transportation Security Administration guidance for travelers with mobility aids.</li><li>National Institute on Aging travel and health preparation resources.</li></ol>
          </section>

          <SocialDots />

          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <div className="mt-6 space-y-5 border-b border-[#d8dde2] pb-6">
              <div><p className="font-manrope text-[11px] font-black text-black">Karen Miller</p><p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">The airport assistance tip helped us plan my mother's trip.</p><button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button></div>
              <div><p className="font-manrope text-[11px] font-black text-black">James Whit</p><p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">Good reminder to check the walker before leaving home.</p><button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button></div>
            </div>
            <form className="mt-6 space-y-4" action="#"><label className="block"><span className="font-manrope text-[11px] font-black text-black">Comment *</span><textarea className="mt-2 min-h-[100px] w-full rounded-[4px] border border-black px-3 py-2 font-manrope text-[12px] outline-none" /></label><label className="block"><span className="font-manrope text-[11px] font-black text-black">Name *</span><input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" /></label><label className="block"><span className="font-manrope text-[11px] font-black text-black">Email *</span><input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" type="email" /></label><label className="flex items-center gap-2 font-manrope text-[10px] font-medium text-[#1f2930]"><input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.</label><button className="rounded-full bg-[#07364f] px-7 py-3 font-manrope text-[11px] font-black text-white" type="submit">Post Comment</button></form>
          </section>
        </article>

        <section className="mx-auto mt-16 w-full"><h2 className="font-manrope text-[13px] font-black text-black">Related Articles</h2><div className="mt-5 grid gap-6 md:grid-cols-3">{relatedArticles.map((article) => <article className="overflow-hidden rounded-[8px] border border-[#d8dde2] bg-white" key={article.title}><img className="h-40 w-full object-cover" src={`${process.env.PUBLIC_URL}/images/${article.image}`} alt="" /><div className="p-5"><h3 className="text-[17px] font-black leading-tight text-[#172129]">{article.title}</h3><p className="mt-3 font-manrope text-[12px] font-medium leading-6 text-[#303a42]">{article.description}</p></div></article>)}</div></section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}

export default TravelWithWalkerDetail;
