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
  'Why walker accessories matter',
  'Types of must-have walker accessories',
  'Best walker accessories to buy now',
  'How to choose the right accessories',
  'Installation and setup tips',
  'Frequently Asked Questions',
  'Final Thoughts',
  'References',
];

/* 4 accessory type cards — image left, text right */
const accessoryTypes = [
  {
    title: 'Walker Bags & Organizers',
    image: 'twa-3-1-768x684.webp',
    alt: 'Black walker bag organizer with multiple pockets holding notebook, keys, phone and thermos',
    text: 'Walker bags attach to the front bar of the walker and allow seniors to carry essentials hands-free — phones, medications, water bottles, and personal items — without needing a separate bag.',
  },
  {
    title: 'Walker Tray Tables',
    image: 'twa-6-2-683x1024.webp',
    alt: 'Gray plastic walker tray table attached to standard folding walker',
    text: 'Walker trays slide onto the front bar and create a flat surface for carrying meals, books, or daily items from room to room. Bamboo and plastic options are both widely available.',
  },
  {
    title: 'Cup & Bottle Holders',
    image: 'twa-12-764x1024.webp',
    alt: 'Black adjustable cup holder clamp for walker or rollator frame',
    text: 'Cup holders clamp directly onto the walker frame and keep drinks within easy reach during walks. They support water bottles, travel mugs, and insulated cups of various sizes.',
  },
  {
    title: 'Phone Mounts & Holders',
    image: 'twa-14-749x1024.webp',
    alt: 'Drive brand black phone holder mount that attaches to walker frame',
    text: 'Phone mounts attach to the walker handle or frame bar and hold smartphones securely, making GPS navigation, calls, and music accessible without putting the phone in a pocket.',
  },
];

/* compact grid — shown 3 per row (12 items = 4 rows) */
const gridProducts = [
  { title: 'Multi-Pocket Walker Bag (Gray)', image: 'twa-1-768x764.webp', alt: 'Gray multi-pocket walker bag organizer with tablet and cup holder' },
  { title: 'Floral Walker Organizer Bag', image: 'twa-2-768x591.webp', alt: 'Floral pattern walker bag with food, tablet and phone inside' },
  { title: 'Black Walker Storage Bag', image: 'twa-3-1-768x684.webp', alt: 'Black walker bag with notebook, keys, thermos and phone pockets' },
  { title: 'Bamboo Walker Tray Table', image: 'twa-4-2-768x760.webp', alt: 'Bamboo wood walker tray table with plate of food and glass of milk' },
  { title: 'Fabric Walker Meal Tray', image: 'twa-5-2-768x773.webp', alt: 'Black fabric walker tray being used to carry meal and thermos' },
  { title: 'Plastic Walker Tray', image: 'twa-6-2-683x1024.webp', alt: 'Gray plastic walker tray attached to folding walker frame' },
  { title: 'Cup + Phone Holder Combo', image: 'twa-7-1-768x827.webp', alt: 'Cup holder and phone holder combo attachment on blue walker' },
  { title: 'Black Cup & Phone Combo', image: 'twa-11-768x845.webp', alt: 'Black cup holder and phone holder combo unit with clamp mount' },
  { title: 'Adjustable Cup Holder', image: 'twa-12-764x1024.webp', alt: 'Black adjustable cup holder clamp for walker frame' },
  { title: 'Multi Cup & Phone Mount', image: 'twa-13-768x709.webp', alt: 'Multi cup holder with phone mount on stroller or walker' },
  { title: 'Drive Phone Holder Mount', image: 'twa-14-749x1024.webp', alt: 'Drive brand black phone holder mount for walker' },
  { title: 'Walker Phone Clamp Mount', image: 'twa-8-768x793.webp', alt: 'Phone clamp mount attached to walker pole showing golf GPS app' },
];

/* full detail sections with pros/cons */
const products = [
  {
    title: 'Multi-Pocket Walker Bag Organizer',
    image: 'twa-1-768x764.webp',
    alt: 'Gray multi-pocket walker bag organizer with tablet, glasses, keys and cup holder pocket',
    bestFor: 'Seniors who need to carry multiple daily essentials including a tablet, phone, glasses, keys, and a water bottle all in one place attached to their walker.',
    pros: ['Multiple pockets for organization', 'Includes built-in cup holder pocket', 'Attaches to most standard walkers', 'Durable gray linen-look material'],
    cons: ['May add weight to one side of walker', 'Zipper pockets can be stiff initially'],
  },
  {
    title: 'Bamboo Walker Tray Table',
    image: 'twa-4-2-768x760.webp',
    alt: 'Bamboo walker tray table attached to walker frame with plate of food and glass of milk on top',
    bestFor: 'Seniors who want to carry meals or drinks between rooms without assistance, using a natural bamboo tray that fits over the walker frame.',
    pros: ['Natural bamboo surface is easy to clean', 'Fits most standard walker handle widths', 'Folds flat for storage', 'Elegant, practical design'],
    cons: ['Heavier than plastic tray options', 'Must check handle width compatibility before ordering'],
  },
  {
    title: 'Universal Cup & Phone Holder Combo',
    image: 'twa-7-1-768x827.webp',
    alt: 'Black cup holder and phone mount combo attached to blue rollator walker frame',
    bestFor: 'Seniors who want both a drink holder and a phone mount in a single attachment that clamps onto any walker or rollator frame bar.',
    pros: ['Holds both cup and phone in one unit', 'Universal clamp fits most walker bars', 'Phone can rotate for best viewing angle', 'Easy one-handed installation'],
    cons: ['Combo unit is larger than individual mounts', 'Not ideal for very small walker frames'],
  },
  {
    title: 'Drive Medical Phone & Holder Mount',
    image: 'twa-14-749x1024.webp',
    alt: 'Drive Medical brand black phone holder that clips onto walker or rollator handlebar',
    bestFor: 'Trusted Drive Medical brand phone holder for seniors who want a secure, purpose-built clip-on mount for their smartphone on a walker or rollator.',
    pros: ['Drive Medical quality brand', 'Secure clip-on mechanism', 'Compatible with most smartphones', 'Simple installation, no tools needed'],
    cons: ['Designed primarily for rollators', 'May not fit all standard walker handle shapes'],
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
            <Paragraph>The right accessories transform a basic walker into a personalized, safer daily companion. Walker bags carry essentials hands-free, tray tables transport meals between rooms, cup holders keep hydration within reach, and phone mounts keep seniors connected. This guide covers the most impactful accessories available for standard walkers and rollators.</Paragraph>
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
          <Paragraph>Walker accessories fill the gap between what a standard walker provides and what a senior actually needs in daily life. From carrying a water bottle to transporting a meal between rooms, small additions make a real difference in how comfortable and independent everyday walking feels.</Paragraph>
          <BlogList>
            <li>Storage bags let seniors carry essentials without depending on others.</li>
            <li>Tray tables allow meal transport between rooms with both hands on the walker.</li>
            <li>Cup holders ensure hydration is always within easy reach during walks.</li>
            <li>Phone mounts keep emergency contacts and GPS accessible at all times.</li>
            <li>The right accessories reduce daily frustration and increase confidence.</li>
          </BlogList>

          {/* ── Section 2: Types ── */}
          <SectionHeading id="section-2">Types of Must-Have Walker Accessories</SectionHeading>
          <Paragraph>Walker accessories fall into four main categories. Understanding each type helps narrow down which additions will have the greatest impact on your daily routine.</Paragraph>
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
          <Paragraph>These are the most popular and highly rated walker accessories available today. Scroll down for detailed pros, cons, and pricing on each top pick.</Paragraph>

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
                    className="mt-auto mt-2 inline-block rounded-full bg-[#ffc400] px-2 py-1 text-center font-manrope text-[6px] font-black text-black no-underline"
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
              src={`${process.env.PUBLIC_URL}/images/twa-blog6-640x427.webp`}
              alt="Elderly woman's hands gripping a walker handle showing proper grip and accessory use"
            />
          </div>
          <Paragraph>With so many accessories available, focusing on the ones that solve your most immediate problems is the best approach. Start with everyday essentials, then add convenience items as your routine develops.</Paragraph>
          <BlogList>
            <li>If you carry items daily, start with a walker bag — it provides the most immediate independence.</li>
            <li>If you eat meals alone, a tray table is the safest way to move food between rooms.</li>
            <li>If you take medications or supplements with water, add a cup holder next.</li>
            <li>Check that any attachment is compatible with your walker frame width before ordering.</li>
            <li>Test any new accessory on a short walk before relying on it for longer distances.</li>
          </BlogList>

          {/* ── Section 5 ── */}
          <SectionHeading id="section-5">Installation and Setup Tips</SectionHeading>
          <BlogList>
            <li>Walker bags typically use velcro or buckle straps — attach at the top bar and tighten snugly so the bag does not sway during walking.</li>
            <li>For tray tables, slide the mounting brackets onto both side bars of the walker and lock in place before adding any items.</li>
            <li>Cup holders use a universal clamp — position on the side bar at a comfortable height and tighten the screw until the holder does not rotate.</li>
            <li>Phone mounts should be placed at eye level or slightly below so you can glance at the screen without bending your neck.</li>
            <li>After installing any accessory, push the walker forward a few steps empty before adding weight, to confirm it is balanced and stable.</li>
          </BlogList>

          {/* ── Section 6: FAQ ── */}
          <SectionHeading id="section-6">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {[
              ['What are the most important walker accessories for daily use?', 'A walker bag or organizer is the single most useful accessory for most seniors. It allows hands-free carrying of essentials and immediately improves independence in daily routines.'],
              ['Do walker bags and trays fit all walkers?', 'Most are designed for standard folding walkers with 7/8 inch or 1 inch frame bars. Always check the width specifications before purchasing to confirm compatibility.'],
              ['Can accessories make a walker less stable?', 'Properly installed accessories do not affect stability. Overloading a bag or placing it off-center can shift your balance — always distribute weight evenly and stay within the weight limit of the accessory.'],
              ['Are these accessories available at pharmacies?', 'Yes. Walker bags, cup holders, and basic trays are available at most pharmacies and medical supply stores. A wider selection including bamboo trays and combo phone-cup mounts is available online.'],
              ['How do I clean a walker bag?', 'Most walker bags are made from water-resistant polyester or nylon. Wipe clean with a damp cloth, or hand wash in mild soap and air dry. Check the product label before machine washing.'],
            ].map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          {/* ── Final Thoughts ── */}
          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-7">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>Walker accessories are among the most cost-effective investments a senior can make in daily safety and independence. A sturdy bag eliminates the need to ask for help carrying items. A tray table allows meal transport without risk. A cup holder keeps hydration in reach. A phone mount keeps help within reach at all times.</Paragraph>
            <Paragraph>Start with the accessory that solves your most common daily frustration, and build from there. A well-equipped walker is a safer, more independent walker.</Paragraph>
          </section>

          {/* ── References ── */}
          <section className="mt-8 rounded-[10px] bg-[#f3f3f3] p-6" id="section-8">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
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
