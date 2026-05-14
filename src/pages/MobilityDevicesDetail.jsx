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

function ProsCons({ pros, cons }) {
  return (
    <div className="mt-4 grid grid-cols-2 border border-black font-manrope text-[11px] text-[#1f2930]">
      <div className="border-r border-black px-4 py-3 font-black">Pros</div>
      <div className="px-4 py-3 font-black">Cons</div>
      <div className="border-r border-t border-black px-4 py-3"><ul className="list-disc space-y-1 pl-4">{pros.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <div className="border-t border-black px-4 py-3"><ul className="list-disc space-y-1 pl-4">{cons.map((item) => <li key={item}>{item}</li>)}</ul></div>
    </div>
  );
}

function BlogImage({ src, alt, narrow = false }) {
  return <img className={`mx-auto mt-7 h-auto w-full rounded-[8px] object-cover ${narrow ? 'max-w-[320px]' : 'max-w-[500px]'}`} src={`${process.env.PUBLIC_URL}/images/${src}`} alt={alt} />;
}

function SocialDots() {
  return (
    <div className="mt-9 flex items-center justify-center gap-2" aria-label="Share article">
      {['f', 'in', 'x'].map((item) => <a className="flex h-6 w-6 items-center justify-center rounded-full bg-black font-manrope text-[10px] font-black text-white no-underline" href={`#share-${item}`} key={item}>{item}</a>)}
    </div>
  );
}





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
            <p className="mx-auto mt-3 max-w-[600px] font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">Choosing the right mobility aid can make daily life safer, easier, and more independent.</p>
            <img className="mt-5 h-auto w-full rounded-[8px] object-cover" src={`${process.env.PUBLIC_URL}/images/blog35-1-1.webp`} alt="Best mobility devices for seniors" />
          </header>

          <div className="mt-6 flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">SA</div><p className="font-manrope text-[12px] font-black text-black">Syed Ali</p></div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5"><h2 className="text-[16px] font-black text-black">Key Summary</h2><Paragraph>Mobility devices help seniors regain confidence, reduce fall risk, and move through daily routines with more safety. The best choice depends on strength, balance, endurance, and living environment.</Paragraph></section>

          <Paragraph>As people age, mobility challenges become more common. The right device can support independence while reducing strain on caregivers and family members.</Paragraph>
          <Paragraph>This guide explains common mobility devices, who they are best for, and what to consider before choosing one.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents"><h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2><ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">{tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}</ol></nav>

          <SectionHeading id="section-1">Best Mobility Devices for Seniors</SectionHeading>
          <SubHeading id="section-2">1. Canes</SubHeading>
          <Paragraph>Canes are ideal for seniors who need light support and only minor balance assistance. They are portable, affordable, and easy to use.</Paragraph>
          <ProsCons pros={['Lightweight and affordable', 'Easy to carry', 'Good for mild balance needs']} cons={['Limited support', 'Not ideal for severe instability']} />
          <BlogImage src="blog35-2.webp" alt="Different canes for seniors" narrow />

          <SubHeading>2. Walkers</SubHeading>
          <Paragraph>Walkers provide more stability than canes and are helpful for seniors who need reliable support while standing or walking indoors.</Paragraph>
          <ProsCons pros={['Excellent stability', 'Good for indoor use', 'Supports weak legs']} cons={['Can be bulky', 'Requires upper body strength']} />
          <BlogImage src="blog35-3.webp" alt="Senior using a walker indoors" narrow />

          <SubHeading>3. Rollators (Four-Wheel Walkers)</SubHeading>
          <Paragraph>Rollators are walkers with wheels, hand brakes, seats, and often a storage basket. They work well for seniors who can walk but need rest breaks.</Paragraph>
          <ProsCons pros={['Built-in seat for resting', 'Storage basket or pouch', 'Easier to push outdoors']} cons={['Requires brake control', 'Not ideal for severe balance loss']} />
          <BlogImage src="blog35-5.webp" alt="Four-wheel rollator walker" narrow />

          <SubHeading>4. Wheelchairs</SubHeading>
          <Paragraph>Wheelchairs support seniors with limited walking ability or those recovering from illness, injury, or surgery.</Paragraph>
          <ProsCons pros={['Strong support', 'Useful for longer distances', 'Manual or powered options']} cons={['Requires storage space', 'May need caregiver support']} />
          <BlogImage src="blog35-6.webp" alt="Manual wheelchair and power wheelchair comparison" />

          <SubHeading id="section-6">5. Mobility Scooters</SubHeading>
          <Paragraph>Mobility scooters are useful for seniors who can transfer safely but have limited endurance for walking long distances.</Paragraph>
          <ProsCons pros={['Long-distance mobility', 'Comfortable seat', 'Helpful outdoors']} cons={['Requires charging', 'Needs storage space']} />

          <SectionHeading id="section-7">Transfer & Support Aids</SectionHeading>
          <Paragraph>Transfer aids help seniors move safely from bed to chair, toilet, or car. Common options include transfer boards, grab bars, lift chairs, and bed rails.</Paragraph>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Lift chairs</li><li>Grab bars</li><li>Bed rails</li><li>Transfer boards</li><li>Gait belts</li></ul>

          <SectionHeading id="section-8">Safety Tips for Using Mobility Devices</SectionHeading>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Use the correct height and fit.</li><li>Keep pathways clear from clutter and rugs.</li><li>Check brakes, wheels, and grips regularly.</li><li>Ask a therapist to confirm safe technique.</li><li>Wear supportive non-slip shoes.</li></ul>

          <SectionHeading id="section-9">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">{['What is the best mobility device for seniors?', 'Are walkers safer than canes?', 'What mobility device works best outdoors?', 'Can mobility devices prevent falls?'].map((question) => <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}><summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary><p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">The best device depends on balance, strength, endurance, and where it will be used.</p></details>)}</div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-10"><ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading><Paragraph>Mobility devices can restore confidence, safety, and independence. The right choice should match the senior's physical ability, daily environment, and comfort level.</Paragraph></section>

          <SocialDots />

          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]"><h2 className="text-center text-[14px] font-black text-black">What do you think?</h2><div className="mt-6 space-y-5 border-b border-[#d8dde2] pb-6"><div className="flex gap-3"><div className="h-10 w-10 rounded-full bg-[#d8dde2]" /><div><p className="font-manrope text-[12px] font-black">Ray Ahmed</p><p className="mt-1 font-manrope text-[11px] text-[#303a42]">Very helpful guide.</p><button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button></div></div></div><form className="mt-6 space-y-4" action="#"><label className="block"><span className="font-manrope text-[11px] font-black text-black">Comment *</span><textarea className="mt-2 min-h-[100px] w-full rounded-[4px] border border-black px-3 py-2 font-manrope text-[12px] outline-none" /></label><label className="block"><span className="font-manrope text-[11px] font-black text-black">Name *</span><input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" /></label><label className="block"><span className="font-manrope text-[11px] font-black text-black">Email *</span><input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" type="email" /></label><label className="flex items-center gap-2 font-manrope text-[10px] font-medium text-[#1f2930]"><input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.</label><button className="rounded-full bg-[#07364f] px-7 py-3 font-manrope text-[11px] font-black text-white" type="submit">Post Comment</button></form></section>
        </article>

        <section className="mx-auto mt-16 w-full"><h2 className="font-manrope text-[13px] font-black text-black">Related Articles</h2><div className="mt-5 grid gap-6 md:grid-cols-3">{relatedArticles.map((article) => <article className="overflow-hidden rounded-[8px] border border-[#d8dde2] bg-white" key={article.title}><img className="h-40 w-full object-cover" src={`${process.env.PUBLIC_URL}/images/${article.image}`} alt="" /><div className="p-5"><h3 className="text-[17px] font-black leading-tight text-[#172129]">{article.title}</h3><p className="mt-3 font-manrope text-[12px] font-medium leading-6 text-[#303a42]">{article.description}</p></div></article>)}</div></section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}

export default MobilityDevicesDetail;
