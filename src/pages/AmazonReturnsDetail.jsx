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
  'Why Free Returns Matter',
  'Method 1: Amazon Fresh and Whole Foods Drop-Offs',
  "Method 2: Kohl's Drop-Off",
  'Method 3: UPS Store Drop-Off',
  'Method 4: Amazon Hub Locker Returns',
  'Method 5: Amazon Pickup Location',
  'How to Choose These Free Return Options',
  'Important Tips for Smooth Returns',
  'When You Might Not Get Free Returns',
  'Frequently Asked Questions',
];

const faqs = [
  'Is every Amazon return free?',
  'Do I always need original packaging for Amazon returns?',
  'Can I return Amazon orders at Kohl\'s?',
  'Do UPS Store Amazon returns require a box?',
  'What should I do if no free return option appears?',
  'How quickly will I get my refund after an Amazon return?',
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
        <a href="/" aria-label="The Walker Advisor home"><img className="h-auto w-[76px] object-contain" src={`${process.env.PUBLIC_URL}/images/TWA-logo.webp`} alt="The Walker Advisor" /></a>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Blog detail navigation">
          {navItems.map(([label, href]) => <a className="font-manrope text-[11px] font-bold text-[#08131b] no-underline transition-colors hover:text-[#b88b00]" href={href} key={label}>{label}</a>)}
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

function BlogList({ children }) {
  return <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">{children}</ul>;
}

function ReturnMethod({ id, title, children, image, imageAlt }) {
  return (
    <section id={id}>
      <SectionHeading>{title}</SectionHeading>
      {children}
      {image && (
        <div className="mt-5 rounded-[8px] bg-[#f3f3f3] px-5 py-4">
          <img className="mx-auto h-[210px] w-auto max-w-full rounded-[7px] object-cover" src={`${process.env.PUBLIC_URL}/images/${image}`} alt={imageAlt} />
        </div>
      )}
    </section>
  );
}

function ProsCons({ pros, cons }) {
  return (
    <div className="mt-4 grid gap-4 border-y border-[#d8dde2] py-4 md:grid-cols-2">
      <div>
        <h4 className="font-manrope text-[11px] font-black text-black">Pros</h4>
        <BlogList>{pros.map((item) => <li key={item}>{item}</li>)}</BlogList>
      </div>
      <div>
        <h4 className="font-manrope text-[11px] font-black text-black">Cons</h4>
        <BlogList>{cons.map((item) => <li key={item}>{item}</li>)}</BlogList>
      </div>
    </div>
  );
}

function SocialDots() {
  return <div className="mt-9 flex items-center justify-center gap-2" aria-label="Share article">{['f', 'in', 'x'].map((item) => <a className="flex h-6 w-6 items-center justify-center rounded-full bg-black font-manrope text-[10px] font-black text-white no-underline" href={`#share-${item}`} key={item}>{item}</a>)}</div>;
}

function DetailNewsletter() {
  return (
    <section className="mt-20 w-full bg-[#ffe8b6] px-4">
      <div className="mx-auto grid max-w-[1020px] items-end gap-8 py-8 md:grid-cols-[360px_1fr] md:py-0">
        <img className="mx-auto hidden h-[260px] w-auto object-contain md:block" src={`${process.env.PUBLIC_URL}/images/newsletter-pic-1024x1024.webp`} alt="Senior man walking with a wheeled walker" />
        <div className="py-8 md:py-12"><h2 className="text-[24px] font-black leading-tight text-black">Welcome to The Walker Advisor Newsletter!</h2><p className="mt-3 max-w-[620px] font-manrope text-[12px] font-medium leading-6 text-[#303a42]">Stay informed with our monthly updates on the best mobility aids, safety tips, and exclusive deals designed to support senior independence.</p><form className="mt-6 flex max-w-[560px] rounded-full bg-white p-1" action="#"><input className="min-w-0 flex-1 rounded-full px-5 font-manrope text-[12px] outline-none" placeholder="Email" type="email" /><button className="rounded-full bg-[#07364f] px-8 py-3 font-manrope text-[12px] font-black text-white" type="submit">Subscribe Now</button></form></div>
      </div>
    </section>
  );
}

function DetailFooter() {
  return (
    <footer className="w-full bg-black px-4 py-12 text-white">
      <div className="mx-auto grid max-w-[900px] gap-10 md:grid-cols-[1.3fr_0.8fr_0.9fr_0.8fr]">
        <div><img className="h-auto w-[112px] object-contain brightness-0 invert" src={`${process.env.PUBLIC_URL}/images/TWA-logo.webp`} alt="The Walker Advisor" /><p className="mt-4 max-w-[250px] font-manrope text-[12px] font-medium leading-6">The Walker Advisor is committed to helping seniors and their families find the best mobility aids for safe and independent living.</p><div className="mt-5 flex gap-3 font-manrope text-[12px]">○ ○ ○ ○ ○</div></div>
        {[
          ['About Authors', ['Meet Amir Abbasi', 'Meet Robin Dolan', 'Meet Syed Ali']],
          ['Walkers by categories', ['Without Wheels', 'Two Wheels', 'Rollator']],
          ['Walkers by brands', ['Winlove', 'Helavo', 'Elenker', 'Carex', 'Nova']],
        ].map(([title, links]) => <div key={title}><h3 className="font-manrope text-[12px] font-black">{title}</h3><ul className="mt-4 space-y-3">{links.map((link) => <li className="font-manrope text-[12px] font-medium" key={link}>{link}</li>)}</ul></div>)}
      </div>
      <div className="mx-auto mt-10 flex max-w-[900px] flex-col justify-between gap-4 border-t border-white/20 pt-5 font-manrope text-[11px] md:flex-row"><p>©2026 All Right Reserved By The Walker Advisor</p><p className="text-[#ffc400]">Disclaimer &nbsp; Terms & Conditions &nbsp; Privacy Policy &nbsp; Contact Us &nbsp; Cookies</p></div>
    </footer>
  );
}

function AmazonReturnsDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Every Way to Return Amazon Orders for Free - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[620px]">
          <header className="pt-9 text-center">
            <h1 className="mx-auto max-w-[560px] text-[25px] font-black leading-tight text-black md:text-[28px]">Every Way to Return Amazon Orders for Free: Your Complete Guide to Hassle-Free Returns</h1>
            <p className="mx-auto mt-3 max-w-[600px] font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">Wondering how to return Amazon orders for free? Learn the simple options that save time, avoid surprise costs, and make returns easier.</p>
            <img className="mt-5 h-auto w-full rounded-[8px] object-cover" src={`${process.env.PUBLIC_URL}/images/twainfo-1.webp`} alt="Amazon packages stacked near a front door" />
          </header>

          <div className="mt-6 flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">SA</div><p className="font-manrope text-[12px] font-black text-black">Syed Ali</p></div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[16px] font-black text-black">Key Summary</h2>
            <Paragraph>Amazon offers several free return options, including no-box drop-offs at select stores, UPS Store returns, Amazon Hub Lockers, and Amazon Pickup Locations. The best choice depends on what Amazon shows for your order during the return process.</Paragraph>
          </section>

          <Paragraph>Returning Amazon purchases should not feel complicated. In many cases, Amazon lets you return eligible items without printing a label, finding a box, or paying for postage.</Paragraph>
          <Paragraph>The trick is knowing where to look in the return flow and choosing the free option that is most convenient for you.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">{tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}</ol>
          </nav>

          <SectionHeading id="section-1">Why Free Returns Matter</SectionHeading>
          <Paragraph>Free returns can save more than money. They reduce the frustration of finding shipping supplies, printing labels, and making extra trips.</Paragraph>
          <Paragraph>For older adults, caregivers, and busy households, the easiest return is usually a nearby drop-off where the associate scans a QR code and handles the rest.</Paragraph>

          <ReturnMethod id="section-2" title="Method 1: Amazon Fresh and Whole Foods Drop-Offs">
            <Paragraph>Some Amazon returns can be dropped off at Amazon Fresh or Whole Foods Market locations. When this option is available, Amazon typically gives you a QR code to show at the counter.</Paragraph>
            <ProsCons
              pros={['Often no box or printed label is needed.', 'Convenient if you already shop at the store.']}
              cons={['Availability depends on your location.', 'Not every item qualifies for this method.']}
            />
          </ReturnMethod>

          <ReturnMethod id="section-3" title="Method 2: Kohl's Drop-Off" image="twainfo-2-683x1024.webp" imageAlt="Customer returning an Amazon package at Kohl's">
            <Paragraph>Kohl's is one of the most popular Amazon return locations because many eligible items can be returned without a shipping box or label.</Paragraph>
            <Paragraph>Start the return in your Amazon account, choose the Kohl's option if it appears, and bring the item with the QR code Amazon provides.</Paragraph>
            <ProsCons
              pros={['No-box returns are often available.', 'Many Kohl\'s stores have dedicated Amazon return counters.']}
              cons={['Some items still require packaging.', 'The nearest Kohl\'s may not appear for every order.']}
            />
          </ReturnMethod>

          <ReturnMethod id="section-4" title="Method 3: UPS Store Drop-Off" image="twainfo3-683x1024.webp" imageAlt="The UPS Store Amazon Returns location">
            <Paragraph>The UPS Store is another common free option. Amazon may allow you to show a QR code and leave the item with a store associate.</Paragraph>
            <Paragraph>Read the instructions carefully because some UPS options are free while others may charge for pickup, packing, or label printing.</Paragraph>
            <ProsCons
              pros={['Many locations are easy to find.', 'Good option for returns that need shipping support.']}
              cons={['Home pickup is usually not free.', 'Packaging rules vary by return type.']}
            />
          </ReturnMethod>

          <ReturnMethod id="section-5" title="Method 4: Amazon Hub Locker Returns">
            <Paragraph>Amazon Hub Lockers let you drop off some returns without waiting in a store line. You follow Amazon's return instructions, place the item in the assigned locker, and close the door.</Paragraph>
            <ProsCons
              pros={['Fast drop-off for small eligible items.', 'Useful when you want a contact-light option.']}
              cons={['Locker space is limited.', 'Large items usually do not qualify.']}
            />
          </ReturnMethod>

          <ReturnMethod id="section-6" title="Method 5: Amazon Pickup Location">
            <Paragraph>Some Amazon pickup counters also accept returns. These locations may be inside partner stores, campus areas, or Amazon-operated pickup points.</Paragraph>
            <ProsCons
              pros={['Can be simple if a pickup point is nearby.', 'Amazon instructions are usually clear in the app.']}
              cons={['Not available in every ZIP code.', 'Hours may be more limited than a carrier store.']}
            />
          </ReturnMethod>

          <SectionHeading id="section-7">How to Choose These Free Return Options</SectionHeading>
          <BlogList>
            <li>Open Amazon and go to Your Orders.</li>
            <li>Select the item, then choose Return or Replace Items.</li>
            <li>Pick the reason for the return.</li>
            <li>Review every return method before selecting one.</li>
            <li>Choose the option that says free and matches your preferred location.</li>
          </BlogList>

          <SectionHeading id="section-8">Important Tips for Smooth Returns</SectionHeading>
          <Paragraph>Before leaving home, check the return instructions one more time. Amazon may tell you whether to bring the item boxed, unboxed, labeled, or only with a QR code.</Paragraph>
          <BlogList>
            <li>Keep the item, accessories, tags, manuals, and packaging together when possible.</li>
            <li>Take a photo of the item before dropping it off.</li>
            <li>Save the return receipt until the refund arrives.</li>
            <li>Return items before the deadline shown in your Amazon account.</li>
          </BlogList>

          <SectionHeading id="section-9">When You Might Not Get Free Returns</SectionHeading>
          <Paragraph>Free returns are common, but they are not guaranteed for every purchase. The cost can depend on the seller, item category, return reason, item condition, and return window.</Paragraph>
          <Paragraph>If Amazon only shows paid options, compare the fee with the item value before deciding whether to send it back.</Paragraph>

          <SectionHeading id="section-10">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">{faqs.map((question) => <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}><summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary><p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">It depends on the exact item and return option Amazon displays. Always follow the instructions shown for that order before dropping it off.</p></details>)}</div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6">
            <div className="flex items-center gap-3"><span className="text-[24px] text-[#ffc400]">◇</span><h2 className="text-[18px] font-black text-black">Final Thoughts</h2></div>
            <Paragraph>The easiest free Amazon return is the one Amazon offers directly inside your order. Look for no-box, no-label drop-offs first, choose the closest convenient location, and keep your receipt until the refund is complete.</Paragraph>
          </section>

          <SocialDots />

          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <div className="mt-6 border-b border-[#d8dde2] pb-6"><p className="font-manrope text-[11px] font-black text-black">Dora Phelps</p><p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">Kohl's has been the easiest option for me. The QR code saves a lot of time.</p><button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button></div>
            <form className="mt-6 space-y-4" action="#"><label className="block"><span className="font-manrope text-[11px] font-black text-black">Comment *</span><textarea className="mt-2 min-h-[100px] w-full rounded-[4px] border border-black px-3 py-2 font-manrope text-[12px] outline-none" /></label><label className="block"><span className="font-manrope text-[11px] font-black text-black">Name *</span><input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" /></label><label className="block"><span className="font-manrope text-[11px] font-black text-black">Email *</span><input className="mt-2 h-8 w-full rounded-[4px] border border-black px-3 font-manrope text-[12px] outline-none" type="email" /></label><label className="flex items-center gap-2 font-manrope text-[10px] font-medium text-[#1f2930]"><input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.</label><button className="rounded-full bg-[#07364f] px-7 py-3 font-manrope text-[11px] font-black text-white" type="submit">Post Comment</button></form>
          </section>
        </article>

        <section className="mx-auto mt-16 max-w-[900px]"><h2 className="font-manrope text-[13px] font-black text-black">Related Articles</h2><div className="mt-5 grid gap-6 md:grid-cols-3">{relatedArticles.map((article) => <article className="overflow-hidden rounded-[8px] border border-[#d8dde2] bg-white" key={article.title}><img className="h-40 w-full object-cover" src={`${process.env.PUBLIC_URL}/images/${article.image}`} alt="" /><div className="p-5"><h3 className="text-[17px] font-black leading-tight text-[#172129]">{article.title}</h3><p className="mt-3 font-manrope text-[12px] font-medium leading-6 text-[#303a42]">{article.description}</p></div></article>)}</div></section>
      </main>
      <DetailNewsletter />
      <DetailFooter />
    </>
  );
}

export default AmazonReturnsDetail;
