import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const tableOfContents = [
  'Canes: Reasons and Advantages',
  'The Side Effects of Using a Cane',
  'Comparison: Cane vs. Walker vs. Dual Sticks',
  'When Should You Transition Away from a Cane?',
  'How to Reduce Risks: Best Practices & Adjustments',
  'Recommended Cane Products',
  'Side Effects & Mitigation Strategies',
  'Frequently Asked Questions',
  'Final Thoughts',
  'Reference',
];

const comparisonRows = [
  ['Single-tip Cane', 'Low stability', 'High', 'Moderate', 'Moderate', 'Mild imbalance, pain'],
  ['Quad Cane', 'Medium (4-leg base)', 'Medium', 'Moderate', 'Slightly constrained', 'Hemiplegia, more balance need'],
  ['Walker / Rollator', 'High', 'Low/medium', 'Low (leaning)', 'Less freedom', 'Significant gait impairment'],
  ['Two Canes / Dual Walksticks', 'Medium-High (bilateral support)', 'Medium', 'Moderate', 'Constrained', 'Symmetric support needed'],
];

const mitigationRows = [
  ['Shoulder, wrist, or hand pain', 'Overuse of upper body, nerve compression', 'Use ergonomic grips or offset designs; alternate hands; adjust height'],
  ['Low back or trunk fatigue', 'Asymmetric loading, overcompensation', 'Core strengthening, posture awareness'],
  ['Altered gait / slower speed', 'Cane constraining natural stride', 'Practice proper gait patterns, gradually reduce reliance'],
  ['Joint stress (elbow, wrist)', 'Repeated impact on joints', 'Use cushioned or shock-absorbing tips; inspect components'],
  ['Increased fall risk', 'Misplacement, misuse, instability', 'Training, regular reassessment, upgrade when needed'],
  ['Postural deviation', 'Leaning toward cane side', 'Periodic posture checks, strength training'],
  ['Psychological resistance', 'Feeling old, stigma', 'Choose stylish aides, focus on function and confidence'],
];

const products = [
  {
    title: 'HurryCane Folding Cane',
    image: 'twa28-3-768x771.webp',
    buyHref: 'https://amzn.to/48jSWIn',
  },
  {
    title: 'Strong Arm Comfort Cane',
    image: 'twa28-4-768x846.webp',
    buyHref: 'https://amzn.to/4nyDaOB',
  },
  {
    title: 'Drive Medical Folding Cane',
    image: 'twa28-5-173x1024.webp',
    buyHref: 'https://amzn.to/3IC0Pyy',
  },
];

const faqs = [
  ['Can using a cane too early cause weakness in the legs?', 'If a cane is overused beyond necessity, users may underuse their leg muscles, leading to deconditioning. Studies indicate that using two canes can reduce muscle activation in lower limbs.'],
  ['Is a quad cane safer than a single-tip cane?', 'A quad cane provides more stability because of its four-foot base, but it limits gait freedom and requires all four legs to be in contact for full benefit.'],
  ['Should I alternate cane use between hands?', 'If safe and your condition permits, alternating (or resting one hand) can reduce overuse strain. However, the standard recommendation is to use the cane opposite the weaker leg.'],
  ['If I use a cane and still fall, was I safer without it?', 'Not necessarily. Many falls happen when the device isn’t used. In one study, 75% of respondents who fell were not using their cane at that time. But improper use or misfit cane can contribute to falls, so technique and training matter greatly.'],
  ['Can a cane be used long term, or is it just temporary?', 'Canes can be long-term aids in many cases, but periodic evaluation is essential. If side effects or instability escalate, transitioning to a walker or dual support may be warranted.'],
];

function ArticleLink({ children, href }) {
  return (
    <a className="font-black text-[#0b61a4] no-underline hover:underline" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
      {children}
    </a>
  );
}

function SectionHeading({ children, id }) {
  return <h2 className="mt-8 text-[15px] font-black leading-tight text-black" id={id}>{children}</h2>;
}

function SubHeading({ children }) {
  return <h3 className="mt-5 text-[13px] font-black leading-snug text-black">{children}</h3>;
}

function Paragraph({ children }) {
  return <p className="mt-3 font-manrope text-[10px] font-medium leading-[1.9] text-[#1f2930]">{children}</p>;
}

function BlogList({ children }) {
  return <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[10px] font-medium leading-5 text-[#1f2930]">{children}</ul>;
}

function CompactTable({ headers, rows }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-[8px] border border-[#d7dbe0]">
      <table className="w-full border-collapse font-manrope">
        <thead>
          <tr className="bg-[#ffc400] text-left text-black">
            {headers.map((header) => <th className="px-3 py-2 text-[10px] font-black" key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr className="border-t border-[#d7dbe0] odd:bg-white even:bg-[#f7f7f7]" key={row[0]}>
              {row.map((cell) => <td className="px-3 py-2 text-[10px] align-top font-semibold leading-4 text-[#1f2930]" key={cell}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
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

function HolidayWalkerSafetyDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'The Side Effects Of Using A Cane - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1080px] bg-white px-4 pb-12 sm:px-6 lg:px-8">
        <article className="blog-detail-article w-full">
          <header className="pt-8 text-center">
            <h1 className="mx-auto max-w-[410px] text-[19px] font-black leading-tight text-black md:text-[21px]">The Side Effects Of Using A Cane</h1>
            <p className="mx-auto mt-10 max-w-[min(100%,56rem)] text-[#1f2930]">Think your cane is helping you walk better? Think again. Discover the hidden side effects most users overlook, and the safer alternatives experts actually recommend!</p>
            <img className="mx-auto mt-5 h-auto w-full max-w-[700px] rounded-[7px] object-contain" src={`${process.env.PUBLIC_URL}/images/twa28-1.webp`} alt="Senior holding a cane" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <img className="h-8 w-8 rounded-full object-cover" src={`${process.env.PUBLIC_URL}/images/robin-dolan_avatar-154x216.webp`} alt="Robin Dolan" />
            <p className="font-manrope text-[12px] font-black text-black">Robin Dolan</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>Using a cane can provide critical support, balance, and relief when walking is challenging. However, improper usage or overreliance may lead to secondary issues such as joint strain, muscle imbalance, posture problems, reduced mobility, and even increased fall risk</Paragraph>
          </section>

          <Paragraph>The cane that is used by many people is the walking cane which helps them to be stable and to take the burden off the weak or aching leg. However, with time, paradoxical new issues can arise, but the user can experience pain in the shoulder, pain in the back, or even a decrease in balance. Such undesired side effects have the potential to counter the desired effect of the cane that may have left the user in a worse position than earlier.</Paragraph>
          <Paragraph>Just think that you have to use the tool that is supposed to help you, and you experience new pains: your arm is numb, your steps are clumsy, or you lose your confidence due to your fears of falls. The device that was intended to assist turns into an invisible source of evil without knowledge and proper usage.</Paragraph>
          <Paragraph>In this blog, you will find a comprehensive and human experience perspective of the side effects of using a cane and it will be supported by research, practical comparisons and practical advice. You will also find the product samples (as they will be offered on Amazon or similar services), as well as when it is necessary to think over a walker or a dual support system. This is your guide to smoother travel and more intelligent changes, by The Walker Advisor.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[15px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-2 px-6 py-5 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
              {tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">Canes: Reasons and Advantages</SectionHeading>
          <Paragraph>Cane is a favored assistive device to most health professionals and users. <ArticleLink href="https://www.mayoclinic.org/healthy-lifestyle/healthy-aging/in-depth/canes/art-20548206">Mayo Clinic</ArticleLink> says that the cane helps balance, or aid in mobility, following injury or when one has a disability. Mayo Clinic is very easy, transportable, and cheaper than walkers or rollators.</Paragraph>
          <Paragraph>Biomedically, a cane assists in taking some of the load off a sore or weak joint, taking the stress out of the joints and permitting more confident steps. <ArticleLink href="https://www.aafp.org/pubs/afp/issues/2021/0615/p737.html">American Academy of Family Physicians+1</ArticleLink> Due to the fact that the cane only touches on one point (or a small base in a quad <ArticleLink href="https://en.wikipedia.org/wiki/Assistive_cane">cane</ArticleLink>), the device will be very lightweight and manageable, something many users will like. However, the very same minimalism makes it less stable than multi-legged walkers.</Paragraph>
          <Paragraph>Cane prescribing by therapists is a secondary aid, sufficient to get the patient moving until he or she regains balance or strength. Nevertheless, the choice, fitting, and training are crucial in ensuring that the best results are achieved. Incorrect height, grip or <ArticleLink href="https://www.chipperfieldphysio.ca/blog-1/avoiding-the-most-common-mistakes-with-walking-canes-a-comprehensive-guide">technique</ArticleLink> may counteract the advantages.</Paragraph>
          <Paragraph>Practically, walking aids can hardly be a perfect solution. There are also <ArticleLink href="https://www.sciencedirect.com/science/article/pii/S2405844024136808">studies</ArticleLink> demonstrating such negative effects on gait as decreased walking pace or changing swing periods, particularly when a device is not used properly.</Paragraph>

          <SectionHeading id="section-2">The Side Effects of Using a Cane</SectionHeading>
          <Paragraph>Below are detailed explorations of the major side effects and complications that may arise with cane use.</Paragraph>
          <SubHeading>Musculoskeletal Stress and Fatigue</SubHeading>
          <Paragraph>Using the cane, you transfer some of the load which your legs would otherwise support to your upper extremity, the wrist, forearm, elbow and shoulder. This, in the long run, may cause injuries of overuse, exhaustion, and pain in those areas. Research and self-reported evidence suggests that the side effect of cane usage most <ArticleLink href="https://www.patientslikeme.com/treatment/walking-stick-cane">frequently reported</ArticleLink> is shoulder pain.</Paragraph>
          <Paragraph>Furthermore, the muscles resisting the trunk have to now tolerate minor asymmetries in loading. This additional recruitment may result in low back pains, muscle fatigue or even compensatory muscle hyper-activity on one side. Muscle activity in <ArticleLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8245264/">lower limbs</ArticleLink> can decrease in patients who use two canes resulting in deconditioning of leg muscles.</Paragraph>
          <Paragraph>The user can strangle the cane too hard or lean forward awkwardly which all adds to the strain in case the cane is not adjusted to the right height or the grip is not optimal.</Paragraph>

          <SubHeading>Joint Stress and Overload</SubHeading>
          <Paragraph>Transferring weight onto the wrist and elbow can escalate joint stress in these areas. Compression or irritation of nerves, such as the ulnar or median nerve, may result in tingling, numbness, or pain in the hands or forearms. Hand therapy specialists note that cane use can aggravate these compressive stresses. <ArticleLink href="https://www.handtherapy.com.au/a-guide-to-reducing-hand-pain-when-using-a-cane-or-walker/">Hand Therapy Group</ArticleLink></Paragraph>
          <Paragraph>Also, if a cane is held too rigidly or without frequent micro-adjustment, the impact during each step is less shock-absorbed, putting stress on joints. Over time, even the shoulder or elbow joints may show wear or inflammation.</Paragraph>
          <Paragraph>In addition, uneven weight distribution can impose asymmetric loading on hip, knee, or ankle joints. If one side is bearing more load (for instance, the “good” leg), degenerative changes or overuse injuries may emerge in those joints over the long term.</Paragraph>

          <SubHeading>Postural Alterations & Balance Disruption</SubHeading>
          <Paragraph>Persistent use of a cane, especially if poorly adjusted, can subtly alter your posture. You may lean slightly toward the cane side, twist your torso, or adopt uneven spinal curvature to accommodate. Such postural deviations gradually reinforce asymmetry.</Paragraph>
          <Paragraph>In studies of post-stroke individuals, those who used a cane often demonstrated worse balance and reduced social participation compared to those who walked unaided (or with improved balance). <ArticleLink href="https://pubmed.ncbi.nlm.nih.gov/18418331/">PubMed</ArticleLink> This suggests that, in some contexts, cane reliance can slow recovery of natural gait symmetry.</Paragraph>
          <Paragraph>A related concern: handling the cane (lifting, planting) can destabilize your center of mass if done improperly, sometimes increasing fall risk rather than reducing it. <ArticleLink href="https://www.prsrehab.com/2023/06/21/to-avoid-falls-assistive-devices-must-be-used-correctly/">Physical Rehabilitation Services</ArticleLink> Especially among elderly users, apparently stabilizing devices, when misused, may become destabilizers.</Paragraph>

          <SubHeading>Changes in gait and less ability to move around</SubHeading>
          <Paragraph>A cane changes the way you walk naturally. You can walk slower, take shorter steps, or change your cadence to make room for the cane. This is corroborated by observational gait studies.</Paragraph>
          <Paragraph>Reduced gait dynamics can cause less cardiovascular conditioning, less muscular conditioning, and less endurance over time. Users may avoid longer walks or uneven ground, which makes it even harder for them to get around.</Paragraph>
          <Paragraph>Using two canes instead of one has been shown to greatly lower muscle activation in the lower limbs, which could speed up deconditioning. If the cane becomes a crutch that the user relies on too much, they may not use their leg muscles enough, which will make them weaker over time.</Paragraph>

          <SubHeading>Increased Fall & Injury Risk</SubHeading>
          <Paragraph>Paradoxically, assistive devices like canes are implicated in fall-related injuries in older adults. In the U.S., about 47,312 older adults with fall injuries associated with walking aids are treated in emergency departments annually; though most involve walkers rather than canes, about <strong>12.3%</strong> are cane-related.</Paragraph>
          <Paragraph>Some studies suggest that incorrect use or nonuse of a cane at key moments leads to more severe injuries. For instance, in one survey, <strong>75%</strong> of respondents who fell weren’t using their cane at the time. Others link assistive device use with balance interference or delayed stepping responses.</Paragraph>
          <Paragraph>Because falls with <ArticleLink href="https://www.archives-pmr.org/article/S0003-9993%2804%2900474-5/abstract">assistive devices</ArticleLink> might lead to greater injury (e.g. fractures) if the device fails or trips, the stakes are higher.</Paragraph>

          <SubHeading>Psychological & Social Side Effects</SubHeading>
          <Paragraph>Beyond physical effects, cane use can invoke stigma, anxiety, or reduced social participation. Some users feel “old” or “disabled” and may resist using the cane, especially in public settings. This can lead to selective non-use, increasing fall risk.</Paragraph>
          <Paragraph>Additionally, users may limit their activities to avoid reliance on the cane, leading to social withdrawal or reduced physical activity. This psychological burden can subtly worsen quality of life.</Paragraph>

          <SectionHeading id="section-3">Comparison: Cane vs. Walker vs. Dual Sticks</SectionHeading>
          <Paragraph>Understanding trade-offs among mobility aids is key. Let’s compare:</Paragraph>
          <CompactTable headers={['Device Type', 'Stability', 'Portability', 'Upper-body Load', 'Gait Freedom', 'Common Use Cases']} rows={comparisonRows} />
          <BlogList>
            <li><strong>Canes</strong> offer mobility with minimal encumbrance but at the cost of lower stability and higher upper-body load (as discussed earlier).</li>
            <li><strong>Walkers</strong> (and rollators) provide more robust support because the load is shared across multiple contact points; they reduce upper-body strain and improve stability but sacrifice portability and natural gait freedom.</li>
            <li><strong>Dual sticks (two canes or walking poles)</strong> increase support symmetry but may demand more coordination and can overly constrain gait. Some users ask, “<ArticleLink href="https://darkcyan-lion-250828.hostingersite.com/walking-sticks-vs-walker-for-seniors-safety/">Is it safe to use two walking sticks, or is a walker the better option?</ArticleLink>” The answer depends on one’s balance, strength, and functional goals, often a walker is safer if coordination is poor.</li>
          </BlogList>

          <SectionHeading id="section-4">When Should You Transition Away from a Cane?</SectionHeading>
          <Paragraph>Knowing when to upgrade is as critical as knowing when to begin. Consider the following cues and guidelines:</Paragraph>
          <BlogList>
            <li>Frequent falls or loss of balance while using the cane. If near-misses or actual stumbles become common, a more stable device might be safer.</li>
            <li>Increasing upper-body pain or fatigue from cane dependency, especially in the wrist, shoulder or back.</li>
            <li>Progressive weakness or decline in lower limb strength such that the cane’s support is insufficient.</li>
            <li>Difficulty navigating stairs, curbs, or uneven surfaces with a cane, these require more support.</li>
            <li>Doctor, physical therapist, or rehab specialist recommendation, they may gauge via gait analysis.</li>
            <li>Transition toward dual or multiple supports, many users find that in time, a walker provides greater safety and encourages more walking.</li>
          </BlogList>
          <Paragraph>This aligns with the question <ArticleLink href="https://darkcyan-lion-250828.hostingersite.com/time-to-switch-cane-to-walker/">When should an elderly person upgrade from a cane to a walker?</ArticleLink>, often the answer is: when the risks and limitations of cane use start outweighing its benefits. For example, if a user is considering using two <ArticleLink href="https://darkcyan-lion-250828.hostingersite.com/should-seniors-use-walking-sticks/">walking sticks</ArticleLink>, but lacks coordination, the walker may still be superior.</Paragraph>
          <Paragraph>If these apply, upgrading to a more stable device such as a walker may be the best decision. In fact, exploring options among the <ArticleLink href="https://darkcyan-lion-250828.hostingersite.com/">best walkers for seniors</ArticleLink> can help you find models that enhance balance, posture, and comfort without overloading your arms</Paragraph>
          <div className="mt-5 overflow-hidden rounded-[8px] bg-[#f3f3f3]">
            <img className="mx-auto h-auto w-full object-cover" src={`${process.env.PUBLIC_URL}/images/twa28-2-1-768x362.webp`} alt="Walking aid comparison" />
          </div>

          <SectionHeading id="section-5">How to Reduce Risks: Best Practices & Adjustments</SectionHeading>
          <Paragraph>You don’t necessarily have to ditch a cane if it’s still adequate, just use it wisely. Here are strategies to mitigate side effects:</Paragraph>
          <SubHeading>Correct Cane Fit & Adjustment</SubHeading>
          <BlogList>
            <li>Height: The cane handle should align with the crease of your wrist when you stand upright. This helps you maintain posture without leaning.</li>
            <li>Use the cane on the side opposite the weaker or painful leg. This reduces hip and knee loading on the <ArticleLink href="https://venturaortho.com/using-a-cane-properly/">affected side</ArticleLink>.</li>
            <li>For quad <ArticleLink href="https://www.physio-pedia.com/Canes">canes</ArticleLink>, ensure all four resting legs contact the ground during use — otherwise, stability is compromised.</li>
          </BlogList>
          <SubHeading>Proper Technique & Gait Pattern</SubHeading>
          <BlogList>
            <li>Move the cane <em>at the same time</em> as your weaker leg (i.e., you step with the bad leg and place the cane at the same moment).</li>
            <li>Avoid “lifting” the cane too high; keep smooth, small movement. Over-exaggerated lifting can destabilize your center of mass.</li>
            <li>Practice transitioning on curbs or stairs: step up with the stronger leg first, then place the cane, then move the weaker leg.</li>
            <li>Regularly alternate or rest hands (if safe) to avoid fatigue and overuse.</li>
          </BlogList>
          <SubHeading>Strengthening, Physical Therapy & Balance Training</SubHeading>
          <BlogList>
            <li>Incorporate exercises for grip strength, wrist mobility, core stability, and leg strength to reduce overdependence on the cane.</li>
            <li>Work with a therapist to improve proprioception and dynamic balance so you gradually reduce reliance.</li>
          </BlogList>
          <SubHeading>Periodic Re-evaluation</SubHeading>
          <BlogList>
            <li>As your condition changes, reassess whether the cane remains optimal or whether a walker or dual device may better serve you.</li>
            <li>Regularly inspect the cane (especially tip or ferrule) for wear, and replace parts to prevent slipping.</li>
          </BlogList>
          <SubHeading>Mindful Usage</SubHeading>
          <BlogList>
            <li>Use the cane <em>only when needed</em>, overusing it unnecessarily can exacerbate side effects.</li>
            <li>Be cautious on slippery or irregular surfaces; ensure your cane has a high-quality rubber tip for traction.</li>
          </BlogList>

          <SectionHeading id="section-6">Recommended Cane Products</SectionHeading>
          <Paragraph>Below are sample cane product options you could find via Amazon or similar retailers. These are illustrative; always verify current listings, sizes, and reviews before purchase.</Paragraph>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {products.map((item) => (
              <article className="overflow-hidden rounded-[8px] border border-[#d8dde2] bg-white text-center" key={item.title}>
                <div className="flex h-40 items-center justify-center bg-[#f7f7f7] p-3">
                  <img className="max-h-full w-full object-contain" src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt={item.title} />
                </div>
                <div className="p-4">
                  <h3 className="text-[12px] font-black leading-tight text-black">{item.title}</h3>
                  <a className="mt-4 inline-flex rounded-full bg-[#ffc400] px-5 py-2 font-manrope text-[9px] font-black text-black no-underline" href={item.buyHref} target="_blank" rel="noopener noreferrer">Buy Now</a>
                </div>
              </article>
            ))}
          </div>

          <SectionHeading id="section-7">Side Effects & Mitigation Strategies</SectionHeading>
          <CompactTable headers={['Side Effect', 'Underlying Cause', 'Mitigation Strategy']} rows={mitigationRows} />

          <SectionHeading id="section-8">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {faqs.map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-9">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>Cane use offers vital support and confidence, but improper use can lead to strain or imbalance. Understanding its side effects helps you make safer mobility choices. At <strong>TheWalkerAdvisor</strong>, we promote assistive tools that truly enhance independence. Regular fitting checks and timely upgrades are key to safety. Explore our guides on walker use and cane-to-walker transitions to stay informed and confident.</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-10">
            <ArticleIconHeading type="references">Reference</ArticleIconHeading>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>Safety Concerns in Mobility-Assistive Products for Older Adults (PMC) <ArticleLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10020910/?utm_source=chatgpt.com">PMC</ArticleLink></li>
              <li><ArticleLink href="https://www.aafp.org/pubs/afp/issues/2021/0615/p737.html">https://www.aafp.org/pubs/afp/issues/2021/0615/p737.html</ArticleLink></li>
              <li>Unintentional Fall Injuries Associated with Walkers and Canes <ArticleLink href="https://pubmed.ncbi.nlm.nih.gov/19555423/?utm_source=chatgpt.com">PubMed+1</ArticleLink></li>
              <li>Do Canes or Walkers Make Any Difference? NonUse and Fall Injuries <ArticleLink href="https://pubmed.ncbi.nlm.nih.gov/26209797/?utm_source=chatgpt.com">PubMed+1</ArticleLink></li>
              <li>Effects of Walking With a Cane on Balance & Social Outcomes <ArticleLink href="https://pubmed.ncbi.nlm.nih.gov/18418331/?utm_source=chatgpt.com">PubMed</ArticleLink></li>
              <li>Effects of Cane Use on Walking Parameters & Lower Limbs <ArticleLink href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8245264/?utm_source=chatgpt.com">PMC</ArticleLink></li>
              <li>Tips for Choosing & Using Canes (Mayo Clinic) <ArticleLink href="https://www.mayoclinic.org/healthy-lifestyle/healthy-aging/in-depth/canes/art-20548206">https://www.mayoclinic.org/healthy-lifestyle/healthy-aging/in-depth/canes/art-20548206</ArticleLink></li>
              <li>Avoiding Common Mistakes with Canes <ArticleLink href="https://www.chipperfieldphysio.ca/blog-1/avoiding-the-most-common-mistakes-with-walking-canes-a-comprehensive-guide?utm_source=chatgpt.com">chipperfieldphysio.ca</ArticleLink></li>
              <li>Hand Pain in Cane Use & Nerve Compression <ArticleLink href="https://www.handtherapy.com.au/a-guide-to-reducing-hand-pain-when-using-a-cane-or-walker/?utm_source=chatgpt.com">Hand Therapy Group</ArticleLink></li>
              <li>Improper usage & risk of falls <ArticleLink href="https://www.prsrehab.com/2023/06/21/to-avoid-falls-assistive-devices-must-be-used-correctly/?utm_source=chatgpt.com">Physical Rehabilitation Services+2Proof Positive Consulting+2</ArticleLink></li>
            </ol>
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

export default HolidayWalkerSafetyDetail;
