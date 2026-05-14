import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';



const tableOfContents = [
  'When Is It Ever Safe to Use a Walker on Stairs?',
  'The Only Truly Safe Methods for Stairs',
  'Danger Signs - Never Attempt Stairs If...',
  'Smarter Long-Term Solutions',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const relatedArticles = [
  {
    image: 'image-9-1.webp',
    title: 'Exercise Programs for Elderly Adults',
    description: "Most seniors don't realize they're missing these essential exercises until mobility starts to decline.",
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
  return <div className="mt-9 flex items-center justify-center gap-2" aria-label="Share article">{['f', 'in', 'x'].map((item) => <a className="flex h-6 w-6 items-center justify-center rounded-full bg-black font-manrope text-[10px] font-black text-white no-underline" href={`#share-${item}`} key={item}>{item}</a>)}</div>;
}





function WalkerStairsSafetyDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Senior Safety: How to Use a Walker on Stairs - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1080px] bg-white px-4 pb-12 sm:px-6 lg:px-8">
        <article className="blog-detail-article w-full">
          <header className="pt-9 text-center">
            <h1 className="mx-auto max-w-[560px] text-[25px] font-black leading-tight text-black md:text-[28px]">Senior Safety: How to Use a Walker on Stairs (And Why You Usually Shouldn’t)</h1>
            <p className="mx-auto mt-3 max-w-[600px] font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">Most seniors use their walkers wrong on stairs, and it is dangerous. Learn the safest, expert-approved way to climb up and down stairs with a walker.</p>
            <img className="mt-5 h-auto w-full rounded-[8px] object-cover" src={`${process.env.PUBLIC_URL}/images/Using-a-walker-on-stairs-or-steps-1536x864.webp`} alt="Using a walker on stairs or steps" />
          </header>

          <div className="mt-6 flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">SA</div><p className="font-manrope text-[12px] font-black text-black">Syed Ali</p></div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5"><h2 className="text-[16px] font-black text-black">Key Summary</h2><Paragraph>For most seniors and walker users, stairs are unsafe with a walker. The safest approach is to avoid stairs when possible, use handrails, ask for assistance, or choose accessibility upgrades for repeated stair use.</Paragraph></section>

          <Paragraph>Climbing stairs can be one of the most challenging and risky tasks for someone who relies on a walker. Even one missed step, slippery surface, or unstable hand position can lead to a serious fall.</Paragraph>
          <Paragraph>A walker is built for flat surfaces, not stair edges. This guide explains when stairs may be unavoidable, what safer alternatives exist, and when a senior should not attempt stairs at all.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents"><h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2><ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">{tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}</ol></nav>

          <SectionHeading id="section-1">When Is It Ever Safe to Use a Walker on Stairs?</SectionHeading>
          <Paragraph>Realistically, rarely. A walker should not be treated like a stair-climbing tool.</Paragraph>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Use stairs only when a safer route is not available.</li><li>Use sturdy handrails whenever possible.</li><li>Have another capable person nearby for support.</li><li>Never rush, carry items, or use stairs when dizzy or tired.</li></ul>

          <SectionHeading id="section-2">The Only Truly Safe Methods for Stairs</SectionHeading>
          <SubHeading>Method 1 - Park the Walker & Use the Handrail</SubHeading>
          <div className="mt-4 rounded-[8px] bg-[#f3f3f3] p-5 text-center"><img className="mx-auto max-h-[220px] rounded-[8px] object-contain" src={`${process.env.PUBLIC_URL}/images/walker-stairs-handrail.png`} alt="Safe walker stair method using a handrail" /></div>
          <ol className="mt-4 list-decimal space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Move the walker close to the stairs.</li><li>Do not carry the walker while stepping.</li><li>Hold the handrail firmly and step one stair at a time.</li><li>Ask a caregiver to move the walker to the next level.</li><li>Sit and rest before walking again if needed.</li></ol>

          <SubHeading>Method 2 - Helper Carries the Walker</SubHeading>
          <Paragraph>A caregiver can carry the walker while the senior uses the handrail. This is safer than asking the senior to manage both the walker and the stairs.</Paragraph>

          <SubHeading>Method 3 - Trained Caregiver Assist with Gait Belt</SubHeading>
          <Paragraph>Only trained caregivers should use a gait belt. It can provide support, but it does not make stairs safe for every senior.</Paragraph>
          <div className="mt-4 rounded-[8px] bg-[#f3f3f3] p-5 text-center"><img className="mx-auto max-h-[180px] rounded-[8px] object-contain" src={`${process.env.PUBLIC_URL}/images/walker-stairs-gait-belt.png`} alt="Caregiver assisting with walker near stairs" /></div>

          <SectionHeading id="section-3">Danger Signs - Never Attempt Stairs If...</SectionHeading>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>The senior is dizzy, weak, or short of breath.</li><li>The stairs are wet, icy, uneven, or poorly lit.</li><li>The senior cannot grip the handrail securely.</li><li>The walker brakes, tips, or wheels are not stable.</li><li>No helper is available when assistance is needed.</li></ul>

          <SectionHeading id="section-4">Smarter Long-Term Solutions</SectionHeading>
          <Paragraph>If stairs are a daily problem, a safer home setup is usually better than repeatedly trying to manage stairs with a walker.</Paragraph>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]"><li>Install a sturdy handrail on both sides where possible.</li><li>Add non-slip strips to stair treads.</li><li>Improve stair and landing lighting.</li><li>Consider a stair lift, ramp, or first-floor living setup.</li><li>Ask a physical therapist to assess stair safety.</li></ul>

          <SectionHeading id="section-5">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">{['Are there any proper walkers that climb stairs?', 'Is it safer to lift the walker or drag it on stairs?', 'What should I do if stairs are the only option?', 'How can I make home stairs safer?'].map((question) => <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}><summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary><p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">Use handrails, get help, remove hazards, and ask a clinician or physical therapist before attempting stairs regularly.</p></details>)}</div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-6"><ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading><Paragraph>A walker can improve mobility on flat surfaces, but stairs are different. For seniors, the safest choice is usually to avoid stairs, use handrails and assistance, and invest in safer long-term home solutions.</Paragraph></section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-7"><ArticleIconHeading type="references">References</ArticleIconHeading><ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]"><li>Centers for Disease Control and Prevention: older adult fall prevention.</li><li>American Physical Therapy Association: mobility and stair safety guidance.</li><li>National Institute on Aging: home safety and fall prevention.</li></ol></section>

          <SocialDots />
          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]"><h2 className="text-center text-[14px] font-black text-black">What do you think?</h2><div className="mt-6 space-y-6 border-b border-[#d8dde2] pb-6"><div><p className="font-manrope text-[11px] font-black text-black">Janice</p><p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">So helpful, thank you.</p><button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button></div><div><p className="font-manrope text-[11px] font-black text-black">John Richards</p><p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">My mother was using her walker wrong on steps. This helped us change the setup.</p><button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button></div></div><form className="mt-6 space-y-4" action="#"><label className="block"><span className="font-manrope text-[11px] font-black text-black">Comment *</span><textarea className="mt-2 min-h-[100px] w-full rounded-[4px] border border-black px-3 py-2 font-manrope text-[12px] outline-none" /></label><label className="block"><span className="font-manrope text-[11px] font-black text-black">Name *</span><input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" /></label><label className="block"><span className="font-manrope text-[11px] font-black text-black">Email *</span><input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" type="email" /></label><label className="flex items-center gap-2 font-manrope text-[10px] font-medium text-[#1f2930]"><input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.</label><button className="rounded-full bg-[#07364f] px-7 py-3 font-manrope text-[11px] font-black text-white" type="submit">Post Comment</button></form></section>
        </article>

        <section className="mx-auto mt-16 w-full"><h2 className="font-manrope text-[13px] font-black text-black">Related Articles</h2><div className="mt-5 grid gap-6 md:grid-cols-3">{relatedArticles.map((article) => <article className="overflow-hidden rounded-[8px] border border-[#d8dde2] bg-white" key={article.title}><img className="h-40 w-full object-cover" src={`${process.env.PUBLIC_URL}/images/${article.image}`} alt="" /><div className="p-5"><h3 className="text-[17px] font-black leading-tight text-[#172129]">{article.title}</h3><p className="mt-3 font-manrope text-[12px] font-medium leading-6 text-[#303a42]">{article.description}</p></div></article>)}</div></section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}

export default WalkerStairsSafetyDetail;
