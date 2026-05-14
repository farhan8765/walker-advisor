import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';

const navItems = [
  ['Home', '/'],
  ['Best Tools', '/tools'],
  ['Articles', '/articles'],
  ['About Us', '/about-us'],
  ['Contact Us', '/contact'],
  ["Caregiver's Corner", '/caregivers-corner'],
];

const toc = [
  'Recognizing When a Senior Requires a Walker',
  'Walker Varieties and How Caregivers Can Assist in Selection',
  'A Step-by-Step Guide to Ensuring a Proper Walker Fit',
  "Educating Seniors on Safe Walker Usage: A Caregiver's Duty",
  'Maintaining and Adjusting Walkers: Tips for Caregivers',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const walkerRows = [
  ['Standard Walker', 'Maximum stability; post-surgical use', 'Ensure the correct height; instruct on lifting technique'],
  ['Two-wheel walker', 'Partial support needed for some mobility', 'Tested glide function; supervised use on uneven surfaces'],
  ['Rollator', 'Active seniors who need a seat & brakes', 'Verify brake operation; demonstrate folding/unfolding technique'],
  ['Knee walker', 'Non-weight bearing recovery', 'Assist with weight distribution; monitor comfort level'],
];

const relatedArticles = [
  {
    image: 'twa-blog11-1024x683.webp',
    href: '/social-activities-for-older-adults',
    title: 'Social Activities for Older Adults: The Best Ways to Stay Connected, Active, and Happy',
    description: 'Loneliness in seniors is not just sad, it is as dangerous to health as smoking 15 cigarettes a day. Here are the best ways older adults can stay connected.',
  },
  {
    image: 'image-2-1.webp',
    href: '/can-heart-issues-increase-fall-risk-in-seniors',
    title: 'Can Heart Issues Increase Fall Risk in Seniors?',
    description: 'You might think falls are just about balance, but what if your heart is the real culprit? Discover the hidden connection between heart issues and falls.',
  },
  {
    image: 'blogg.webp',
    href: '/3-foods-seniors-should-avoid',
    title: '3 Foods for Seniors to Avoid',
    description: 'Your body after 60 is a different machine entirely. Metabolism slows. The immune system becomes more reactive. Kidneys filter less efficiently, and the gut microbiome changes.',
  },
];

function DetailHeader() {
  return (
    <header className="w-full bg-white px-4 py-3">
      <div className="mx-auto flex max-w-[720px] items-center justify-between gap-4">
        <a href="/" aria-label="The Walker Advisor home">
          <img className="h-auto w-[68px] object-contain" src={`${process.env.PUBLIC_URL}/images/TWA-logo.webp`} alt="The Walker Advisor" />
        </a>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Blog detail navigation">
          {navItems.map(([label, href]) => (
            <a className="font-manrope text-[11px] font-bold text-[#08131b] no-underline transition-colors hover:text-[#b88b00]" href={href} key={label}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Paragraph({ children }) {
  return <p className="mt-3 font-manrope text-[10px] font-medium leading-[1.9] text-[#1f2930]">{children}</p>;
}

function SectionHeading({ children, id }) {
  return <h2 className="mt-8 text-[15px] font-black leading-tight text-black" id={id}>{children}</h2>;
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

function DetailNewsletter() {
  return (
    <section className="mt-20 w-full bg-[#ffe8b6] px-4">
      <div className="mx-auto grid max-w-[1020px] items-end gap-8 py-8 md:grid-cols-[360px_1fr] md:py-0">
        <img className="mx-auto hidden h-[260px] w-auto object-contain md:block" src={`${process.env.PUBLIC_URL}/images/newsletter-pic-1024x1024.webp`} alt="Senior man walking with a wheeled walker" />
        <div className="py-8 md:py-12">
          <h2 className="text-[24px] font-black leading-tight text-black">Welcome to The Walker Advisor Newsletter!</h2>
          <p className="mt-3 max-w-[620px] font-manrope text-[12px] font-medium leading-6 text-[#303a42]">Stay informed with our monthly updates on the best mobility aids, safety tips, and exclusive deals designed to support senior independence.</p>
          <form className="mt-6 flex max-w-[560px] rounded-full bg-white p-1" action="#">
            <input className="min-w-0 flex-1 rounded-full px-5 font-manrope text-[12px] outline-none" placeholder="Email" type="email" />
            <button className="rounded-full bg-[#07364f] px-8 py-3 font-manrope text-[12px] font-black text-white" type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function DetailFooter() {
  return (
    <footer className="w-full bg-black px-4 py-12 text-white">
      <div className="mx-auto grid max-w-[900px] gap-10 md:grid-cols-[1.3fr_0.8fr_0.9fr_0.8fr]">
        <div>
          <img className="h-auto w-[112px] object-contain brightness-0 invert" src={`${process.env.PUBLIC_URL}/images/TWA-logo.webp`} alt="The Walker Advisor" />
          <p className="mt-4 max-w-[250px] font-manrope text-[12px] font-medium leading-6">The Walker Advisor is committed to helping seniors and their families find the best mobility aids for safe and independent living.</p>
          <div className="mt-5 flex gap-3 font-manrope text-[12px]">○ ○ ○ ○ ○</div>
        </div>
        {[
          ['About Authors', ['Meet Amir Abbasi', 'Meet Robin Dolan', 'Meet Syed Ali']],
          ['Walkers by categories', ['Without Wheels', 'Two Wheels', 'Rollator']],
          ['Walkers by brands', ['Winlove', 'Helavo', 'Elenker', 'Carex', 'Nova']],
        ].map(([title, links]) => (
          <div key={title}>
            <h3 className="font-manrope text-[12px] font-black">{title}</h3>
            <ul className="mt-4 space-y-3">
              {links.map((link) => <li className="font-manrope text-[12px] font-medium" key={link}>{link}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-[900px] flex-col justify-between gap-4 border-t border-white/20 pt-5 font-manrope text-[11px] md:flex-row">
        <p>©2026 All Right Reserved By The Walker Advisor</p>
        <p className="text-[#ffc400]">Disclaimer &nbsp; Terms & Conditions &nbsp; Privacy Policy &nbsp; Contact Us &nbsp; Cookies</p>
      </div>
    </footer>
  );
}

function CaregiversGuideWalkerDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Caregiver's Guide to Senior Walker Selection & Usage | The Walker Advisor";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[430px]">

          {/* Header */}
          <header className="pt-8 text-center">
            <h1 className="mx-auto max-w-[410px] text-[19px] font-black leading-tight text-black md:text-[21px]">
              {"Caregivers' Guide to Helping Seniors Pick and Use the Perfect Walker"}
            </h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">
              {"The right guidance can make all the difference, here's how caregivers can ensure seniors get the best walker for their needs."}
            </p>
            <img
              className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover"
              src={`${process.env.PUBLIC_URL}/images/twa-blog11.jpg`}
              alt="Caregiver assisting senior woman with walking support in a home environment"
            />
          </header>

          {/* Author */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">SA</div>
            <p className="font-manrope text-[12px] font-black text-black">Syed Ali</p>
          </div>

          {/* Key Summary */}
          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>As a caregiver, helping seniors choose and properly use a walker is crucial to their safety and independence. The right walker can reduce the risk of falls, increase mobility, and improve overall quality of life. Start by recognizing when a walker is necessary, which may be evident through signs like instability, muscle frailty, or recent falls.</Paragraph>
            <Paragraph>You should then help select the appropriate walker type, ensuring it fits the senior's needs and daily environment. Once the walker is chosen, proper fitting and teaching safe usage are essential to maximize its effectiveness. Regular maintenance, such as checking for wear and tear, can prevent issues and ensure continued safety. Above all, your patience and understanding are key in encouraging a senior to embrace the walker and feel more independent.</Paragraph>
          </section>

          <Paragraph>As a caregiver, your presence is integral in helping seniors preserve their mobility and autonomy. One of your most vital roles involves aiding in the careful selection and proficient use of walkers. Many older adults may feel hesitant to use mobility aids, driven by pride or apprehension about dependency. This is where your expertise and gentle guidance become crucial to their well-being, safety, and overall quality of life.</Paragraph>
          <Paragraph>{"You are often the first to witness when a loved one struggles with stability or stamina while walking. Perhaps they are clinging to furniture or pausing before each step. These are unmistakable indicators that they might benefit from a walker. Your responsibility doesn't end at recognizing the need—you must assist in selecting the right model, ensuring an accurate fit, and instructing on proper technique. Without your involvement, seniors may select unsuitable walkers or misuse them, which can lead to falls or unnecessary discomfort."}</Paragraph>
          <Paragraph>{"This guide will take you through each stage, from identifying when a walker is necessary to ensuring its maintenance over time. By the conclusion, you'll feel equipped to enhance your loved one's mobility, minimizing risks while maximizing their independence."}</Paragraph>

          {/* TOC */}
          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[15px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-2 px-6 py-5 font-manrope text-[10px] font-semibold leading-5 text-[#1f2930]">
              {toc.map((item, index) => (
                <li key={item}>
                  <a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Section 1 */}
          <SectionHeading id="section-1">Recognizing When a Senior Requires a Walker</SectionHeading>
          <Paragraph>As a caregiver, you are in a prime position to observe subtle shifts in mobility. The most common signs that indicate a senior might benefit from a walker include frequent instability, visible muscle frailty, or a recent fall. If you observe your loved one shuffling, shortening their stride, or avoiding walks altogether, these could be clear signals for intervention.</Paragraph>
          <Paragraph>Certain medical conditions often necessitate the use of walkers. Seniors recovering from joint replacements—such as hip or knee surgery—may require temporary support. Those managing Parkinson's disease, arthritis, or mobility limitations due to stroke might require a more long-term solution. Even seniors without a formal diagnosis can gain significant advantages from walkers if they experience general unsteadiness.</Paragraph>
          <Paragraph><a className="text-[#2361a1] underline" href="https://www.public-health.uiowa.edu/news-items/study-looks-at-older-adults-use-of-mobility-devices-incidence-of-falls/" target="_blank" rel="noopener noreferrer">Research</a> has shown that mobility devices, such as walkers, play a crucial role in reducing the risk of falls among seniors. However, a study published in the Journal of the American Geriatrics Society found that while 24% of adults aged 65 and older use mobility aids, the incidence of falls remains high, with 35-40% of seniors experiencing falls annually. This emphasizes the importance of selecting the right walker and ensuring proper usage to maximize its benefits.</Paragraph>
          <Paragraph>{"It's invaluable to consult with a physical therapist to evaluate gait and strength—an assessment that will confirm whether a walker is necessary. Your role is to facilitate this process by scheduling appointments and accompanying your loved one to ensure all concerns are addressed. Early intervention with the correct mobility aid can greatly reduce the risk of debilitating falls, thereby helping to maintain independence longer."}</Paragraph>

          {/* Section 2 */}
          <SectionHeading id="section-2">Walker Varieties and How Caregivers Can Assist in Selection</SectionHeading>
          <div className="mt-4 overflow-hidden rounded-[6px] border border-[#d8dde2]">
            <div className="grid grid-cols-3 bg-[#ffc400] font-manrope text-[8.5px] font-black text-black">
              {['Walker Type', 'Best for', "Caregiver's role in selection"].map((heading) => (
                <div className="border-r border-black/10 px-2 py-2 last:border-r-0" key={heading}>{heading}</div>
              ))}
            </div>
            {walkerRows.map((row) => (
              <div className="grid grid-cols-3 border-t border-[#d8dde2] font-manrope text-[8.5px] font-medium leading-4 text-[#1f2930]" key={row[0]}>
                {row.map((cell, i) => (
                  <div className="border-r border-[#d8dde2] px-2 py-2 last:border-r-0" key={i}>{cell}</div>
                ))}
              </div>
            ))}
          </div>
          <p className="mt-3 font-manrope text-[10px] font-medium leading-[1.9] text-[#1f2930]"><strong>How You Can Help:</strong></p>
          <ul className="mt-2 list-disc space-y-1 pl-5 font-manrope text-[10px] font-medium leading-5 text-[#1f2930]">
            <li>{"Observe their daily routine—tight hallways? A compact frame is best. Enjoy outdoor walks? Choose a rollator with durable wheels."}</li>
            <li>Consider ergonomics. As a study in <em>Applied Ergonomics</em> notes, walker design often overlooks user-specific needs, so features like adjustable height, padded grips, and lightweight frames matter.</li>
            <li>Visit a medical supply store together to test models.</li>
          </ul>
          <Paragraph>Help check Medicare coverage to ease the financial burden. (Related: Does Medicare Pay for Walkers for Seniors?)</Paragraph>
          <Paragraph>When selecting a walker, remember that the needs of walker users can differ from those of wheelchair users. The <a className="text-[#2361a1] underline" href="https://www.sciencedirect.com/science/article/abs/pii/S0003687021001861" target="_blank" rel="noopener noreferrer"><em>Applied Ergonomics</em> study</a> (Kuboshima &amp; McIntosh, 2021) points out that design guidelines often fail to adequately accommodate walkers. Consider features like adjustable height and appropriate width for navigating common household spaces.</Paragraph>
          <Paragraph>{"For added peace of mind, it's also important to choose walkers that offer essential safety features. Understanding these features can ensure that your loved one stays as safe and comfortable as possible. Check out our guide on "}<a className="text-[#2361a1] underline" href="https://thewalkeradvisor.com/important-safety-features-walkers-for-seniors/" target="_blank" rel="noopener noreferrer">Essential Safety Features in Walkers</a>{" for Seniors for more insights."}</Paragraph>

          {/* Section 3 */}
          <SectionHeading id="section-3">{"A Step-by-Step Guide to Ensuring a Proper Walker Fit"}</SectionHeading>
          <Paragraph>{"A walker that doesn't fit properly can lead to back pain or increased risk of falling. Here's how to ensure a precise fit:"}</Paragraph>
          <ul className="mt-3 list-disc space-y-3 pl-5 font-manrope text-[10px] font-medium leading-5 text-[#1f2930]">
            <li><strong>Height Adjustment: </strong>Have the senior stand up straight with their arms hanging naturally. The handles of the walker should be level with their wrist creases. Most walkers feature push-button height adjustments, and you may need to make these adjustments yourself.</li>
            <li><strong>Grip Comfort: </strong>Make sure the handles are adequately padded to avoid blisters. Seniors with arthritis might benefit from ergonomic grips, which can be purchased separately.</li>
            <li><strong>Stability Check: </strong>After adjusting the walker, have the senior take a few steps. The walker should not require them to lean forward too much or bend their back unnaturally.</li>
            <li><strong>Weight Capacity: </strong>{"Ensure that the walker's weight limit exceeds the senior's weight. This information is typically found on a label near the walker's base."}</li>
          </ul>
          <Paragraph>{"As a caregiver, you'll often be responsible for making these adjustments. If needed, ask a physical therapist to demonstrate the fitting process during your appointments. Proper fitting is essential for safe and effective walker use."}</Paragraph>

          {/* Section 4 */}
          <SectionHeading id="section-4">{"Educating Seniors on Safe Walker Usage: A Caregiver's Duty"}</SectionHeading>
          <Paragraph>{"Providing a walker is just the first step—teaching the senior how to use it properly is equally important:"}</Paragraph>
          <ul className="mt-3 list-disc space-y-3 pl-5 font-manrope text-[10px] font-medium leading-5 text-[#1f2930]">
            <li>Movement Fundamentals: Show them how to lift or push the walker ahead of them before taking a step forward. For wheeled models, demonstrate the gentle pushing motion rather than lifting.</li>
            <li>Posture Reminders: Encourage them to look ahead, not down at their feet. Their shoulders should remain relaxed, not hunched.</li>
            <li>{"Sit-to-Stand Transitions: Practice using the walker when rising from chairs. They should push up using the chair's arms and then grasp the walker once fully standing."}</li>
            <li>Navigating Obstacles: Teach them how to cross curbs or thresholds safely, ensuring they approach slowly and squarely.</li>
          </ul>
          <Paragraph>Initial outings should be supervised to reinforce these techniques. Many seniors, when unsupervised, may rush or neglect proper technique, so your consistent and patient guidance is vital.</Paragraph>

          {/* Section 5 */}
          <SectionHeading id="section-5">Maintaining and Adjusting Walkers: Tips for Caregivers</SectionHeading>
          <Paragraph>Routine maintenance can prevent accidents:</Paragraph>
          <ul className="mt-3 list-disc space-y-3 pl-5 font-manrope text-[10px] font-medium leading-5 text-[#1f2930]">
            <li>Weekly Inspections: Tighten any loose screws and check the rubber tips for wear. Replace worn-out parts immediately.</li>
            <li>Cleaning: Wipe down the handles and frame regularly to avoid germ buildup—particularly important if the walker is used in the bathroom.</li>
            <li>Seasonal Adjustments: For seniors using walkers outdoors, ensure the wheels are appropriate for the current weather conditions (e.g., larger wheels for snowy conditions).</li>
          </ul>
          <Paragraph>Always keep essential tools handy for quick adjustments, and mark the ideal height settings with tape for easy reference post-cleaning. Your proactive maintenance ensures the walker stays in optimal working condition over time.</Paragraph>

          {/* Section 6 FAQs */}
          <SectionHeading id="section-6">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3">
              <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">How can I convince a reluctant senior to use a walker?</summary>
              <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">Highlight that a walker enhances safety and independence. Let them personalize it to make it feel more comfortable and less like a "dependency."</p>
            </details>
            <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3">
              <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">Can walkers be used on stairs?</summary>
              <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">No, standard walkers should never be used on stairs. Consult a physical therapist for safer alternatives.</p>
            </details>
            <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3">
              <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">How often should walkers be replaced?</summary>
              <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">Walkers should be replaced every 3 to 5 years or sooner if parts are worn or damaged.</p>
            </details>
            <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3">
              <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">How can I ensure the walker is the right fit for my loved one?</summary>
              <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{"Ensure the walker's handles are at wrist height when their arms hang naturally. Make sure the grips are comfortable, and test the walker for balance and stability."}</p>
            </details>
            <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3">
              <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">What are the 5 guidelines to help the patient use a walker safely?</summary>
              <div className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">
                <p>Follow these safety tips when you use a walker:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Stay upright as you move.</li>
                  <li>Step into the walker rather than walking behind it.</li>
                  <li>{"Don't push the walker too far out in front of you."}</li>
                  <li>Make sure the handles are set at the right height.</li>
                  <li>Take small steps and move slowly when you turn.</li>
                </ul>
              </div>
            </details>
            <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3">
              <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">How to encourage someone to use a walker?</summary>
              <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{"Allow them to share their thoughts, feelings, and any concerns they may have about incorporating a mobility aid into their daily life. Listen actively without interrupting, acknowledging their fears or reservations. Once they've shared their concerns, address each one with compassion and provide reassurance."}</p>
            </details>
          </div>

          {/* Final Thoughts */}
          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-7">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>{"As a caregiver, your role is about more than just providing a walker—it's about making it a tool that helps seniors move confidently and safely. From selecting the right walker to teaching safe usage and regular maintenance, every step helps foster independence and reduce mobility risks. Many seniors may resist walkers due to concerns about dependence, but by emphasizing how the walker enhances their safety and quality of life, you can ease their worries. Personalizing the walker with comfortable grips or accessories can also make it feel like a helpful companion."}</Paragraph>
            <Paragraph>{"Your guidance and support are crucial in helping them embrace their mobility aids. The difference you make in their lives is immeasurable. When you ensure the walker is properly fitted and used safely, you're helping them live a more active and independent life. Your patience and encouragement provide more than just physical support—they help empower seniors to live with dignity and confidence."}</Paragraph>
          </section>

          {/* References */}
          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-8">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li><a className="text-[#2361a1] underline" href="https://www.public-health.uiowa.edu/news-items/study-looks-at-older-adults-use-of-mobility-devices-incidence-of-falls/" target="_blank" rel="noopener noreferrer">Study looks at older adults' use of mobility devices, incidence of falls</a></li>
              <li><a className="text-[#2361a1] underline" href="https://www.sciencedirect.com/science/article/abs/pii/S0003687021001861" target="_blank" rel="noopener noreferrer">Housing design that improves the independence and safety of older adults using a walker.</a></li>
            </ol>
          </section>

          <SocialDots />

          {/* Comments */}
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
              <button className="rounded-full bg-[#07364f] px-7 py-3 font-manrope text-[11px] font-black text-white" type="submit">Post Comment</button>
            </form>
          </section>
        </article>

        {/* Related Articles */}
        <section className="mx-auto mt-16 max-w-[680px]">
          <h2 className="font-manrope text-[13px] font-black text-black">Related Articles</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {relatedArticles.map((article) => (
              <a className="overflow-hidden rounded-[8px] border border-[#d8dde2] bg-white no-underline" href={article.href} key={article.title}>
                <img className="h-32 w-full object-cover" src={`${process.env.PUBLIC_URL}/images/${article.image}`} alt="" />
                <div className="p-4">
                  <h3 className="text-[13px] font-black leading-tight text-[#172129]">{article.title}</h3>
                  <p className="mt-2 font-manrope text-[10px] font-medium leading-5 text-[#303a42]">{article.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <DetailNewsletter />
      <DetailFooter />
    </>
  );
}

export default CaregiversGuideWalkerDetail;
