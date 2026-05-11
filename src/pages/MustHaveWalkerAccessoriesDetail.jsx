import { useEffect } from 'react';

const navItems = [
  ['Home', '/'],
  ['Best Tools', '/tools'],
  ['Articles', '/articles'],
  ['About Us', '/about-us'],
  ['Contact Us', '/contact'],
  ["Caregiver's Corner", '/caregivers-corner'],
];

const toc = [
  'Why walker accessories matter',
  'Types of must-have walker accessories',
  'Best walker accessories to buy now',
  'How to choose the right accessories',
  'Installation and setup tips',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

const accessoryTypes = [
  {
    title: 'Padded Grip Covers',
    image: 'twa6-768x717.webp',
    alt: 'Navy blue padded walker hand grip covers on a walker frame in multiple colors',
    text: 'Padded grip covers slide over existing handles and add cushioning that reduces palm pressure and hand fatigue. They are available in a wide range of colors and are easy to install without tools.',
  },
  {
    title: 'Rubber Non-Slip Replacement Grips',
    image: 'twa5-683x1024.webp',
    alt: 'Pair of black textured rubber replacement walker hand grips',
    text: 'Rubber grips replace the original handles entirely. They provide a firmer, non-slip surface that is more durable than foam options and ideal for outdoor or active walkers.',
  },
  {
    title: 'Rollator Storage Bags',
    image: 'twablog26-5-683x1024.webp',
    alt: 'Black rollator walker with storage bag attached below the seat',
    text: 'Walker bags attach to the front bar and allow seniors to carry essentials hands-free — phones, medications, water bottles, and personal items — without needing a separate bag.',
  },
  {
    title: 'Ergonomic Contoured Grips',
    image: 'twa-blog6-640x427.webp',
    alt: 'Elderly hands gripping a padded walker handle securely',
    text: 'Ergonomic grips are shaped to match the natural curve of the palm and fingers. They reduce muscular effort needed to hold the walker and minimize pressure points during extended use.',
  },
];

/* compact grid — shown 3 per row */
const gridProducts = [
  { title: 'Standard Foam Walker Grips', image: 'twa1-683x1024.webp', alt: 'Black foam walker hand grips pair' },
  { title: 'Textured Rubber Walker Grips', image: 'twa2-200x300.webp', alt: 'Textured rubber walker hand grips' },
  { title: 'Contoured Comfort Grips', image: 'twa3-683x1024.webp', alt: 'Contoured ergonomic walker hand grips' },
  { title: 'Gel Walker Hand Grips', image: 'twa4-683x1024.webp', alt: 'Gel walker hand grips pair' },
  { title: 'Rubber Non-Slip Grips', image: 'twa5-683x1024.webp', alt: 'Black rubber non-slip walker grips' },
  { title: 'Multi-Color Padded Grip Covers', image: 'twa6-768x717.webp', alt: 'Padded walker grip covers in multiple colors' },
  { title: 'Crutcheze Padded Grip Covers', image: 'twa7-768x589.webp', alt: 'Crutcheze padded walker hand grip covers' },
  { title: 'Pink Padded Grip Covers', image: 'twa8-768x796.webp', alt: 'Pink padded walker hand grip covers' },
  { title: 'Vive Walker Grip Covers', image: 'twa9-768x768.webp', alt: 'Vive brand walker hand grip covers' },
];

/* full detail sections with pros/cons */
const products = [
  {
    title: 'Padded Walker Hand Grip Covers – Multiple Colors',
    image: 'twa6-768x717.webp',
    alt: 'Navy blue padded walker hand grip covers in multiple color options on walker frame',
    bestFor: 'Seniors who want a soft cushioned grip cover in a range of colors to match their walker style.',
    pros: ['Available in 8+ colors', 'Soft padded neoprene material', 'Wrap-on fits most walkers', 'Machine washable'],
    cons: ['May feel slightly bulky on narrow handles', 'Fit varies by walker model'],
  },
  {
    title: 'Crutcheze Padded Walker Hand Grip Covers',
    image: 'twa7-768x589.webp',
    alt: 'Crutcheze padded walker hand grip covers in black, blue, purple and pink options',
    bestFor: 'Users who want a trusted brand with reliable padding and color options for daily comfort.',
    pros: ['Trusted Crutcheze quality', 'Quick installation', 'Available in black, blue, purple, pink', 'Non-slip surface'],
    cons: ['Not a full grip replacement', 'Needs secure wrapping to stay in place'],
  },
  {
    title: 'Pink Padded Walker Hand Grip Covers',
    image: 'twa8-768x796.webp',
    alt: 'Pink soft padded walker hand grip covers with walker shown below',
    bestFor: 'Adding soft extra padding over worn or hard handles for immediate daily comfort improvement.',
    pros: ['Extra thick soft padding', 'Bright pink color option', 'Easy slide-on design', 'Reduces palm soreness'],
    cons: ['Can shift on very smooth handles', 'May need occasional cleaning'],
  },
  {
    title: 'Vive Walker Hand Grip Covers',
    image: 'twa9-768x768.webp',
    alt: 'Vive brand walker hand grip covers in black with color options including teal, pink and blue',
    bestFor: 'Replacing worn grips with a firm, secure cover from a trusted mobility accessories brand.',
    pros: ['Durable neoprene material', 'Secure non-shift fit', 'Available in teal, pink, blue and black', 'Good for arthritis'],
    cons: ['Must check handle size before ordering', 'Less cushion than thick padded options'],
  },
];

const relatedArticles = [
  {
    image: 'twa-fi.webp',
    href: '/replacement-walker-hand-grips-for-all-kinds-of-walkers',
    title: 'Replacement Walker Hand Grips',
    description: 'Sore hands or slippery grips? Find the best replacement grips for every walker style.',
  },
  {
    image: 'twa-blog26-1-1.webp',
    href: '/stop-the-struggle-the-ultimate-easy-guide-to-fitting-a-walker-for-seniors',
    title: 'Guide to Fitting a Walker for Seniors',
    description: 'Discover this step-by-step guide for seniors on choosing and adjusting walkers safely.',
  },
  {
    image: 'twa-featured-image.webp',
    href: '/how-to-adjust-a-walker-to-the-correct-height-a-safety-checklist',
    title: 'How to Adjust a Walker to the Correct Height',
    description: 'The right walker height improves posture, comfort, and balance every step of the way.',
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

function BlogList({ children }) {
  return <ul className="mt-3 list-disc space-y-1 pl-5 font-manrope text-[10px] font-medium leading-5 text-[#1f2930]">{children}</ul>;
}

function ProductTable({ product }) {
  return (
    <div className="mt-3 overflow-hidden border border-black">
      <div className="grid grid-cols-[1fr_1fr_74px] bg-[#ffc400] font-manrope text-[8px] font-black text-black">
        <div className="border-r border-black px-2 py-2">Pros</div>
        <div className="border-r border-black px-2 py-2">Cons</div>
        <div className="px-2 py-2 text-center">Buy</div>
      </div>
      <div className="grid grid-cols-[1fr_1fr_74px] font-manrope text-[8px] font-semibold leading-4 text-[#1f2930]">
        <ul className="list-disc space-y-1 border-r border-black px-4 py-3">
          {product.pros.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <ul className="list-disc space-y-1 border-r border-black px-4 py-3">
          {product.cons.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="flex items-center justify-center px-2 py-3">
          <a className="rounded-full bg-[#ffc400] px-3 py-2 text-center text-[8px] font-black text-black no-underline" href="/tools">Check Price</a>
        </div>
      </div>
    </div>
  );
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

function MustHaveWalkerAccessoriesDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Must-Have Walker Accessories to Make Life Easier and Safer - The Walker Advisor';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <DetailHeader />
      <main className="bg-white px-4 pb-12">
        <article className="mx-auto max-w-[430px]">

          {/* ── Header ── */}
          <header className="pt-8 text-center">
            <h1 className="mx-auto max-w-[410px] text-[19px] font-black leading-tight text-black md:text-[21px]">
              Must-Have Walker Accessories to Make Life Easier and Safer
            </h1>
            <p className="mx-auto mt-2 max-w-[410px] font-manrope text-[9px] font-medium leading-4 text-[#1f2930]">
              Upgrade your walker into a safety powerhouse with smart, stylish accessories that boost comfort, independence, and everyday ease.
            </p>
            <img
              className="mx-auto mt-5 h-auto w-full rounded-[7px] object-cover"
              src={`${process.env.PUBLIC_URL}/images/blog-27-1.webp`}
              alt="Senior woman in pink walking on a path with a rollator giving a thumbs up"
            />
          </header>

          {/* ── Author ── */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffc400] font-manrope text-[10px] font-black text-black">AA</div>
            <p className="font-manrope text-[12px] font-black text-black">Amir Abbasi</p>
          </div>

          {/* ── Key Summary ── */}
          <section className="mt-5 rounded-[8px] bg-[#f3f3f3] p-5">
            <h2 className="text-[14px] font-black text-black">Key Summary</h2>
            <Paragraph>The right accessories transform a basic walker into a personalized, safer daily companion. Padded grips reduce hand fatigue, storage bags enable hands-free carrying, and comfort add-ons make every walk more enjoyable. This guide covers the most impactful accessories available for standard walkers and rollators.</Paragraph>
          </section>

          <Paragraph>Most walkers are sold with standard handles and a bare frame. Yet most seniors walk for extended periods, carry personal items, and need features their basic walker simply does not provide out of the box.</Paragraph>
          <Paragraph>Adding the right accessories costs very little but can significantly improve daily comfort, safety, and independence.</Paragraph>

          {/* ── TOC ── */}
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

          {/* ── Section 1 ── */}
          <SectionHeading id="section-1">Why Walker Accessories Matter</SectionHeading>
          <Paragraph>Walker accessories fill the gap between what a standard walker provides and what a senior actually needs in daily life. From carrying a water bottle to protecting sore hands, small additions make a real difference in how comfortable and confident walking feels.</Paragraph>
          <BlogList>
            <li>Padded grips reduce hand and wrist pain during extended walking.</li>
            <li>Storage bags enable seniors to carry essentials without assistance.</li>
            <li>Replacement rubber tips improve traction and prevent slipping on smooth floors.</li>
            <li>Cup holders ensure hydration is always within reach.</li>
            <li>Reflective strips and LED clips improve visibility for evening walks.</li>
          </BlogList>

          {/* ── Section 2: Types ── */}
          <SectionHeading id="section-2">Types of Must-Have Walker Accessories</SectionHeading>
          <Paragraph>Walker accessories fall into several categories. Understanding each type helps narrow down which additions will have the greatest impact on your daily routine.</Paragraph>
          <div className="mt-4 space-y-4">
            {accessoryTypes.map((item) => (
              <div className="overflow-hidden rounded-[8px] border border-[#d8dde2] bg-white" key={item.title}>
                <div className="flex items-start gap-3 p-3">
                  <div className="flex-shrink-0 overflow-hidden rounded-[6px] bg-[#f3f3f3]">
                    <img
                      className="h-[90px] w-[90px] object-contain p-2"
                      src={`${process.env.PUBLIC_URL}/images/${item.image}`}
                      alt={item.alt}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[11px] font-black leading-tight text-black">{item.title}</h3>
                    <p className="mt-1 font-manrope text-[9px] font-medium leading-[1.7] text-[#1f2930]">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Section 3: Best accessories — compact 3-col grid ── */}
          <SectionHeading id="section-3">Best Walker Accessories to Buy Now</SectionHeading>
          <Paragraph>These are the most popular and highly rated walker grip and comfort accessories available today. Scroll down for detailed pros, cons, and pricing on each top pick.</Paragraph>

          {/* 3-column compact product grid */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {gridProducts.map((item) => (
              <div className="flex flex-col overflow-hidden rounded-[6px] border border-[#d8dde2] bg-white" key={item.title}>
                <div className="bg-[#f3f3f3]">
                  <img
                    className="mx-auto h-[80px] w-full object-contain p-2"
                    src={`${process.env.PUBLIC_URL}/images/${item.image}`}
                    alt={item.alt}
                  />
                </div>
                <div className="flex flex-1 flex-col p-2">
                  <p className="font-manrope text-[7px] font-black leading-tight text-[#172129]">{item.title}</p>
                  <a
                    className="mt-auto inline-block rounded-full bg-[#ffc400] px-2 py-1 text-center font-manrope text-[6px] font-black text-black no-underline mt-2"
                    href="/tools"
                  >
                    Check Price
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Full product detail sections */}
          {products.map((product) => (
            <section className="mt-6" key={product.title}>
              <h3 className="text-[13px] font-black text-black">{product.title}</h3>
              <div className="mt-3 overflow-hidden rounded-[8px] bg-[#f3f3f3]">
                <img
                  className="mx-auto h-[200px] w-full object-contain p-4"
                  src={`${process.env.PUBLIC_URL}/images/${product.image}`}
                  alt={product.alt}
                />
              </div>
              <Paragraph>{product.bestFor}</Paragraph>
              <ProductTable product={product} />
            </section>
          ))}

          {/* ── Section 4 ── */}
          <SectionHeading id="section-4">How to Choose the Right Accessories</SectionHeading>
          <div className="mt-3 overflow-hidden rounded-[8px] bg-[#f3f3f3]">
            <img
              className="mx-auto h-[220px] w-full object-cover p-3"
              src={`${process.env.PUBLIC_URL}/images/image-9-1.webp`}
              alt="Senior woman walking confidently with a fully equipped rollator walker in a park"
            />
          </div>
          <Paragraph>With so many accessories available, focusing on the ones that solve your most immediate problems is the best approach. Start with comfort and safety essentials, then add storage and convenience items as your routine develops.</Paragraph>
          <BlogList>
            <li>Measure your handle diameter before buying grip covers — most walkers use 7/8 inch or 1 inch tubes.</li>
            <li>Check bag compatibility with your walker frame width before purchasing.</li>
            <li>Prioritize rubber tips and grip covers above all other accessories.</li>
            <li>Test any new grip on a short walk before relying on it for longer distances.</li>
            <li>If you have arthritis, consult an occupational therapist before selecting grip types.</li>
          </BlogList>

          {/* ── Section 5 ── */}
          <SectionHeading id="section-5">Installation and Setup Tips</SectionHeading>
          <BlogList>
            <li>Clean the handle tube with rubbing alcohol before sliding on a new grip — this removes residue and improves adhesion.</li>
            <li>Use a small amount of water inside the grip opening to help it slide on, then allow it to dry and grip firmly.</li>
            <li>For wrap-on padded covers, start from one end and stretch evenly to avoid bunching.</li>
            <li>Secure walker bags using all available attachment points to avoid them affecting balance.</li>
            <li>Replace rubber leg tips by pulling the old one off and pressing the new one firmly until fully seated.</li>
          </BlogList>

          {/* ── Section 6: FAQ ── */}
          <SectionHeading id="section-6">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['What are the most important walker accessories for daily use?', 'Padded grip covers and replacement rubber leg tips are the highest priority. They directly affect hand comfort and floor traction — the two factors most linked to walker safety.'],
              ['Do grip covers fit all walker sizes?', 'Most padded grip covers fit standard handle diameters of 7/8 inch or 1 inch. Always check the diameter of your walker handles before ordering.'],
              ["Can accessories be used on a rollator?", 'Yes. Rollators are compatible with most grip covers, bags, cup holders, and phone holders. Some rollators have dedicated attachment rails that make installing accessories even easier.'],
              ['How often should rubber leg tips be replaced?', 'Replace rubber tips when the bottom surface becomes smooth, cracked, or visibly worn. For daily walkers, this is typically every 6 to 12 months.'],
              ['Where can I buy walker accessories?', 'Walker accessories are available at pharmacies, medical supply stores, and major retailers including Walmart and Amazon.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          {/* ── Final Thoughts ── */}
          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-7">
            <div className="flex items-center gap-3">
              <span className="text-[24px] text-[#ffc400]">◇</span>
              <h2 className="text-[16px] font-black text-black">Final Thoughts</h2>
            </div>
            <Paragraph>Walker accessories are among the most cost-effective investments a senior can make in daily safety and comfort. A padded grip cover, fresh rubber tips, and a simple storage bag can dramatically improve how a walker feels and functions.</Paragraph>
            <Paragraph>Start with the essentials — grips and tips — then add storage and comfort accessories based on your specific routine. A well-equipped walker is a safer walker.</Paragraph>
          </section>

          {/* ── References ── */}
          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-8">
            <div className="flex items-center gap-3">
              <span className="text-[22px] text-[#ffc400]">↪</span>
              <h2 className="text-[16px] font-black text-black">References</h2>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li>National Institute on Aging: Walker Accessories and Safe Mobility. https://www.nia.nih.gov</li>
              <li>CDC: Fall Prevention for Older Adults — Mobility Aid Maintenance. https://www.cdc.gov/falls</li>
              <li>American Occupational Therapy Association: Walker Adaptations for Independence. https://www.aota.org</li>
              <li>AARP: Mobility Aid Accessories Guide for Seniors. https://www.aarp.org</li>
            </ol>
          </section>

          <SocialDots />

          {/* ── Comments ── */}
          <section className="mt-8 rounded-[10px] bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
            <h2 className="text-center text-[14px] font-black text-black">What do you think?</h2>
            <div className="mt-6 border-b border-[#d8dde2] pb-6">
              <p className="font-manrope text-[11px] font-black text-black">Patricia L.</p>
              <p className="mt-2 font-manrope text-[11px] font-medium leading-5 text-[#303a42]">The walker bag was a game-changer for my mother. She can carry her phone and water bottle now without needing to ask for help every time she walks to another room.</p>
              <button className="mt-2 rounded-full bg-[#07364f] px-4 py-1 font-manrope text-[10px] font-black text-white">Reply</button>
            </div>
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

        {/* ── Related Articles ── */}
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

export default MustHaveWalkerAccessoriesDetail;
