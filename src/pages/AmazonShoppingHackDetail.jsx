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
  "How Amazon Warehouse Works: Secret Deals You Can't Miss",
  'How to Use Amazon Coupons to Save Even More',
  'Step-by-Step Guide: Find and Buy Warehouse Deals',
  'Tips to Pick the Best Product Condition',
  'Extra Tricks to Maximize Savings on Amazon',
  'Frequently Asked Questions',
  'Final Thoughts',
];

const faqs = [
  'Are Amazon Warehouse products guaranteed?',
  'Are Warehouse deals brand new?',
  'Can I stack coupons with Amazon Warehouse deals?',
  'Is it safe to buy open-box items?',
  'What does used like new mean on Amazon?',
  'Do Amazon Warehouse items have free returns?',
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

function SubHeading({ children }) {
  return <h3 className="mt-5 text-[14px] font-black text-black">{children}</h3>;
}

function Paragraph({ children }) {
  return <p className="mt-3 font-manrope text-[12px] font-medium leading-[1.85] text-[#1f2930]">{children}</p>;
}

function BlogList({ children }) {
  return <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">{children}</ul>;
}

function BlogImage({ src, alt, narrow = false }) {
  return (
    <div className="mt-6 rounded-[8px] bg-[#f3f3f3] px-5 py-4">
      <img className={`mx-auto h-auto w-full rounded-[7px] object-cover ${narrow ? 'max-w-[320px]' : 'max-w-[430px]'}`} src={`${process.env.PUBLIC_URL}/images/${src}`} alt={alt} />
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

function AmazonShoppingHackDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'The Secret Amazon Shopping Hack to Get a Deal - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[620px]">
          <header className="pt-9 text-center">
            <h1 className="mx-auto max-w-[560px] text-[25px] font-black leading-tight text-black md:text-[28px]">The Secret Amazon Shopping Hack to Get a Deal on Just About Anything</h1>
            <p className="mx-auto mt-3 max-w-[600px] font-manrope text-[12px] font-medium leading-6 text-[#1f2930]">Stop overpaying on Amazon. Use hidden Warehouse deals, coupons, and smart filters to save on everyday products.</p>
            <img className="mt-5 h-auto w-full rounded-[8px] object-cover" src={`${process.env.PUBLIC_URL}/images/twa-1-1.webp`} alt="Hands holding Amazon delivery boxes" />
          </header>

          <div className="mt-6 flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">SA</div><p className="font-manrope text-[12px] font-black text-black">Syed Ali</p></div>

          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[16px] font-black text-black">Key Summary</h2>
            <Paragraph>The best Amazon shopping hack is combining Amazon Warehouse open-box listings, clipped coupons, price checks, and careful condition reviews. This can help you find real savings without waiting for a major sale event.</Paragraph>
          </section>

          <Paragraph>Amazon prices move quickly. Two shoppers can search for the same product and see very different deals depending on whether they check coupons, used listings, open-box offers, and alternate sellers.</Paragraph>
          <Paragraph>This guide shows how to find the quieter discounts that many buyers miss.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">{tableOfContents.map((item, index) => <li key={item}><a className="text-[#1f2930] no-underline hover:text-black" href={`#section-${index + 1}`}>{index + 1}. {item}</a></li>)}</ol>
          </nav>

          <SectionHeading id="section-1">How Amazon Warehouse Works: Secret Deals You Can't Miss</SectionHeading>
          <Paragraph>Amazon Warehouse is where Amazon lists open-box, returned, and pre-owned products. Many items are fully functional but discounted because the packaging was opened, damaged, or replaced.</Paragraph>
          <BlogList>
            <li>Search for the product you want.</li>
            <li>Look for used, open-box, or Warehouse options.</li>
            <li>Compare the Warehouse price with the new price.</li>
          </BlogList>
          <SubHeading>Why this secret hack works</SubHeading>
          <BlogList>
            <li>Many shoppers only look at the main Buy Box price.</li>
            <li>Warehouse items can include steep markdowns on everyday products.</li>
            <li>Condition notes let you decide whether the discount is worth it.</li>
          </BlogList>
          <BlogImage src="twa-2-1024x988.webp" alt="Amazon Warehouse store with shoppers and products" narrow />

          <SectionHeading id="section-2">How to Use Amazon Coupons to Save Even More</SectionHeading>
          <Paragraph>Amazon coupons are easy to miss because they often appear as small checkbox-style offers near the product price.</Paragraph>
          <BlogList>
            <li>Search for the product category.</li>
            <li>Look for a coupon badge or checkbox on the product page.</li>
            <li>Clip the coupon before adding the item to your cart.</li>
            <li>Confirm the discount at checkout before buying.</li>
          </BlogList>
          <SubHeading>How to use Amazon coupons</SubHeading>
          <BlogList>
            <li>Visit Amazon's Coupons section.</li>
            <li>Browse by category or search for the item.</li>
            <li>Clip the coupon and add the product to your cart.</li>
            <li>Check the order total before placing the order.</li>
          </BlogList>
          <BlogImage src="twa-3-1024x561.webp" alt="Amazon coupon deals product grid" />

          <SectionHeading id="section-3">Step-by-Step Guide: Find and Buy Warehouse Deals</SectionHeading>
          <Paragraph>Use this simple process whenever you are shopping for electronics, home goods, mobility aids, kitchen items, or everyday essentials.</Paragraph>
          <BlogList>
            <li>Search for the exact product name.</li>
            <li>Open the product page and check all buying options.</li>
            <li>Compare new, used, and Warehouse prices.</li>
            <li>Read the condition note before choosing an item.</li>
            <li>Review return eligibility before checkout.</li>
          </BlogList>
          <SubHeading>Pro Tip</SubHeading>
          <Paragraph>If the discount is small, buy new. If the discount is large and the condition note says only the packaging is damaged, the Warehouse option may be worth it.</Paragraph>
          <SubHeading>Products you can find</SubHeading>
          <BlogList>
            <li>Small appliances and kitchen tools.</li>
            <li>Home safety products and organizers.</li>
            <li>Tech accessories, chargers, and headphones.</li>
            <li>Mobility and caregiving accessories when available.</li>
          </BlogList>

          <SectionHeading id="section-4">Tips to Pick the Best Product Condition</SectionHeading>
          <Paragraph>Condition labels matter. Read them carefully before choosing the lowest price.</Paragraph>
          <BlogList>
            <li><strong>Used Like New:</strong> often the safest Warehouse condition.</li>
            <li><strong>Used Very Good:</strong> may include minor cosmetic marks.</li>
            <li><strong>Used Good:</strong> can be a bigger discount, but check missing accessories.</li>
            <li><strong>Acceptable:</strong> usually best only when appearance does not matter.</li>
          </BlogList>
          <SubHeading>Tips to shop smart</SubHeading>
          <BlogList>
            <li>Avoid listings with missing essential parts.</li>
            <li>Check whether the item is returnable.</li>
            <li>Compare reviews on the main product page.</li>
            <li>Save the order details until you inspect the product.</li>
          </BlogList>

          <SectionHeading id="section-5">Extra Tricks to Maximize Savings on Amazon</SectionHeading>
          <BlogList>
            <li>Add items to your cart or list and watch for price movement.</li>
            <li>Compare subscribe-and-save pricing with one-time purchase pricing.</li>
            <li>Check coupon availability before every checkout.</li>
            <li>Compare all sellers, not only the default Buy Box.</li>
            <li>Search during sale events, but verify the final price is actually lower.</li>
          </BlogList>

          <SectionHeading id="section-6">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">{faqs.map((question) => <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}><summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary><p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">Check the product condition, seller, coupon terms, and return eligibility before buying. Amazon's displayed checkout price is the final number to trust.</p></details>)}</div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-7">
            <div className="flex items-center gap-3"><span className="text-[24px] text-[#ffc400]">◇</span><h2 className="text-[18px] font-black text-black">Final Thoughts</h2></div>
            <Paragraph>Amazon Warehouse and coupons are not complicated, but most shoppers skip them. Before buying, check Warehouse condition notes, clip available coupons, compare sellers, and confirm the final checkout price.</Paragraph>
          </section>

          <SocialDots />

          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <div className="mt-6 border-b border-[#d8dde2] pb-6"><p className="font-manrope text-[11px] font-black text-black">Laura Bright</p><p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">The Warehouse condition notes are the part I used to miss. Helpful breakdown.</p><button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button></div>
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

export default AmazonShoppingHackDetail;
