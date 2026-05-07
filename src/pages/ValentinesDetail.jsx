import { useEffect } from 'react';

const navItems = [
  ['Home', '/'],
  ['Best Tools', '/tools'],
  ['Articles', '/articles'],
  ['About Us', '/about-us'],
  ['Contact Us', '/contact'],
  ["Caregiver's Corner", '/caregivers-corner'],
];

const tableOfContents = [
  'A Handwritten Love Note or Card',
  'A Small, Thoughtful Gift Wrapped with Love',
  'The Gift of Time: A Cozy Shared Moment',
  'A Memory Revival Surprise',
  'Gentle Pampering for Each Other',
  'A Promise or Love Coupon Book',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
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

function DetailHeader() {
  return (
    <header className="w-full bg-white px-4 py-4">
      <div className="mx-auto flex max-w-[720px] items-center justify-between gap-4">
        <a href="/" aria-label="The Walker Advisor home">
          <img className="h-auto w-[76px] object-contain" src={`${process.env.PUBLIC_URL}/images/TWA-logo.webp`} alt="The Walker Advisor" />
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

function SectionHeading({ children, id }) {
  return <h2 className="mt-9 text-[18px] font-black leading-tight text-black" id={id}>{children}</h2>;
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
            <ul className="mt-4 space-y-3">{links.map((link) => <li className="font-manrope text-[12px] font-medium" key={link}>{link}</li>)}</ul>
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

function ValentinesDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Valentine's Day Ideas: What Seniors Can Give Each Other - The Walker Advisor";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[620px]">
          <header className="pt-9 text-center">
            <h1 className="mx-auto max-w-[560px] text-[25px] font-black leading-tight text-black md:text-[28px]">Valentine's Day Ideas: What Seniors Can Give Each Other</h1>
            <p className="mx-auto mt-3 max-w-[600px] font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">Discover sweet, low-effort Valentine's Day ideas for seniors that celebrate decades of love in meaningful ways.</p>
            <img className="mt-5 h-auto w-full rounded-[8px] object-cover" src={`${process.env.PUBLIC_URL}/images/valentines.webp`} alt="Valentine's Day ideas for seniors" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">SA</div>
            <p className="font-manrope text-[12px] font-black text-black">Syed Ali</p>
          </div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[16px] font-black text-black">Key Summary</h2>
            <Paragraph>This guide offers seniors simple, thoughtful ways to celebrate Valentine's Day. From handwritten notes to cozy shared moments, it focuses on meaningful gestures that express enduring love.</Paragraph>
          </section>

          <Paragraph>Valentine's Day is a sweet reminder that love only gets better with time. For senior couples who have shared decades of life, the most meaningful gifts are often simple, heartfelt, and focused on closeness rather than extravagance.</Paragraph>
          <Paragraph>These ideas are low-cost, personal, and easy to adapt for different energy levels, health needs, and living situations.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              {tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}
            </ol>
          </nav>

          <SectionHeading id="section-1">A Handwritten Love Note or Card</SectionHeading>
          <Paragraph>One of the most powerful gifts is words from the heart. Sit down with pen and paper, or even a pretty card, and write a short note about what you still love most after all these years.</Paragraph>
          <Paragraph>Read it aloud to each other over tea or before bed. Many long-married couples say these moments become treasured keepsakes.</Paragraph>

          <SectionHeading id="section-2">A Small, Thoughtful Gift Wrapped with Love</SectionHeading>
          <Paragraph>Pick something personal and easy to enjoy:</Paragraph>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li>A single favorite flower or a small potted plant</li>
            <li>Their preferred chocolate, cookies, or special tea blend</li>
            <li>A cozy item like warm socks, a soft scarf, or a new throw blanket</li>
          </ul>
          <Paragraph>Wrap it simply, give it with a smile, and say why it made you think of them.</Paragraph>

          <SectionHeading id="section-3">The Gift of Time: A Cozy Shared Moment</SectionHeading>
          <Paragraph>Plan a quiet activity just for the two of you:</Paragraph>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li>Prepare a simple breakfast or afternoon tea together</li>
            <li>Sit up and talk while listening to your favorite old songs</li>
            <li>Watch a favorite movie with snacks nearby</li>
            <li>Look through old photos and remember happy moments</li>
          </ul>

          <SectionHeading id="section-4">A “Memory Revival” Surprise</SectionHeading>
          <Paragraph>Bring back an old photo, love letter, wedding invitation, or keepsake from early days together. Present it with a note like: “Remember when...?”</Paragraph>
          <Paragraph>You can also create a short playlist of “your songs” on a phone or tablet and enjoy it together.</Paragraph>

          <SectionHeading id="section-5">Gentle Pampering for Each Other</SectionHeading>
          <Paragraph>Offer something soothing and caring:</Paragraph>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li>A warm foot soak or hand massage with lotion</li>
            <li>Help brushing hair, applying cream, or choosing a comfortable outfit</li>
            <li>A promise to handle a small chore they usually do</li>
          </ul>

          <SectionHeading id="section-6">A Promise or “Love Coupon” Book</SectionHeading>
          <Paragraph>Make a few homemade coupons for things like:</Paragraph>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">
            <li>“One slow dance whenever you want”</li>
            <li>“Breakfast in bed on a lazy morning”</li>
            <li>“A no-rush listening session, no interruptions”</li>
            <li>“A favorite story retold just for you”</li>
          </ul>

          <SectionHeading id="section-7">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              'What are simple Valentine’s Day gifts for seniors?',
              'How can seniors celebrate Valentine’s Day without going out?',
              'Are homemade gifts good for senior couples?',
              'Can seniors give each other non-material gifts?',
              'How do I make Valentine’s Day special for my long-married partner?',
            ].map((question) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">Choose something personal, simple, and meaningful, such as a handwritten note, shared meal, photo memory, or small comfort gift.</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-8">
            <div className="flex items-center gap-3"><span className="text-[24px] text-[#ffc400]">◇</span><h2 className="text-[18px] font-black text-black">Final Thoughts</h2></div>
            <Paragraph>The best gifts seniors give each other are not about perfection. They are about presence, appreciation, and reminding one another that the love is still strong and valued.</Paragraph>
            <Paragraph>Celebrate gently, creatively, and joyfully. Even a small gesture can become a beautiful memory.</Paragraph>
          </section>

          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-9">
            <div className="flex items-center gap-3"><span className="text-[22px] text-[#ffc400]">◔</span><h2 className="text-[18px] font-black text-black">References</h2></div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>Love For Our Elders. Senior Love Notes and Meaningful Gestures.</li>
              <li>The Daily Heartbeat. Valentine’s Day Ideas for Senior Couples.</li>
              <li>Connections Matter. Couples Bonding Ideas and Memory Activities.</li>
            </ol>
          </section>

          <SocialDots />

          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <div className="mt-6 space-y-5 border-b border-[#d8dde2] pb-6">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-[#d8dde2]" />
                <div><p className="font-manrope text-[12px] font-black">Terry Kin</p><p className="mt-1 font-manrope text-[11px] text-[#303a42]">Lovely article</p><button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button></div>
              </div>
              <div className="ml-12 flex gap-3">
                <div className="h-10 w-10 rounded-full bg-[#d8dde2]" />
                <div><p className="font-manrope text-[12px] font-black">thewalkeradvisor</p><p className="mt-1 font-manrope text-[11px] text-[#303a42]">Thank you, very glad you found the article useful.</p><button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button></div>
              </div>
            </div>
            <form className="mt-6 space-y-4" action="#">
              <label className="block"><span className="font-manrope text-[11px] font-black text-black">Comment *</span><textarea className="mt-2 min-h-[100px] w-full rounded-[4px] border border-black px-3 py-2 font-manrope text-[12px] outline-none" /></label>
              <label className="block"><span className="font-manrope text-[11px] font-black text-black">Name *</span><input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" /></label>
              <label className="block"><span className="font-manrope text-[11px] font-black text-black">Email *</span><input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" type="email" /></label>
              <label className="flex items-center gap-2 font-manrope text-[10px] font-medium text-[#1f2930]"><input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.</label>
              <button className="rounded-full bg-[#07364f] px-7 py-3 font-manrope text-[11px] font-black text-white" type="submit">Post Comment</button>
            </form>
          </section>
        </article>

        <section className="mx-auto mt-16 max-w-[900px]">
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
      <DetailNewsletter />
      <DetailFooter />
    </>
  );
}

export default ValentinesDetail;
