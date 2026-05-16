import { useEffect, useState } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const tableRows = [
  ['Helavo All Terrain Upright Walker', 'Helavo', '$249.99', '4.6/5', 'Stand taller with padded armrests that ease back strain · Glide over grass & gravel with 10” flat-free tires · Surprisingly lightweight yet holds up to 300 lbs · Adjusts to your comfort with customizable handles & backrest · Rest anywhere on a cushioned seat with safety brakes · Comes ready with a cup holder, cane holder & storage bag', 'https://amzn.to/3KgsIfY'],
  ['Journey UPWalker EZ Lite – The Original Upright Walker', 'Journey', '$545.00', '4.7/5', 'Just 16 lbs, lighter than most handbags · Keeps you walking upright to reduce joint pain & hunching · Adjustable padded armrests & seat fit users 4’7”–5’10” · Rolls smoothly indoors & outdoors with 8” wheels · Folds flat in seconds for car trunks & travel · FDA-Registered & ISO certified for peace of mind', 'https://amzn.to/4nk3BaP'],
  ['Drive Medical Elevate Upright Walker', 'Drive Medical', '$210.77', '4.4/5', 'Walk upright without slouching thanks to ergonomic armrests · 10” wheels power through uneven ground with ease · Comfort is built-in with a padded seat & adjustable design · Fits tall users up to 6’5” without compromise · One-hand folding design makes storage hassle-free · Strong loop-lock brakes keep you safe at every stop', 'https://amzn.to/4nHBa69'],
  ['Aliseniors Upright Walker, Foldable with Seat', 'Aliseniors', '$189.99', '4.5/5', 'Finally, a wide seat made for comfort (20.3” width!) · Walk taller with adjustable padded armrests · Built tough yet light: 18.7 lbs frame holds 300 lbs · Stay steady with an anti-tip safety design · Conquer any surface with 8” PVC wheels & locking brakes · Handy extras: detachable bag & cane holder included', 'https://amzn.to/4nHBSAl'],
  ['ELENKER Heavy Duty Upright Walker (Amazon’s Choice)', 'ELENKER', '$149.99', '4.6/5', 'Holds an incredible 500 lbs with reinforced frame · Extra-wide padded seat means comfort on every break · 10” anti-slip wheels built for grass, gravel & sidewalks · Dual braking system + wide stance keeps you steady · Adjustable armrests ease shoulder & back strain · Comes with cup holder, cane holder & under-seat storage', 'https://amzn.to/4mx6S5m'],
];

const products = [
  {
    title: '1. Helavo All Terrain Upright Walker',
    price: '$249.99',
    image: 'https://darkcyan-lion-250828.hostingersite.com/wp-content/uploads/2025/07/twa-blog3-1-912x1024.jpg',
    features: [
      'Upright design with padded armrests for better posture and less strain.',
      '10-inch flat-free tires for smooth movement on outdoor surfaces.',
      'Lightweight (22.7 lbs) and durable, supports up to 300 lbs.',
      'Height-adjustable handles and backrest for custom comfort.',
      'Secure braking system with hand brakes and parking brake.',
      'Cushioned seat for comfort during breaks.',
      'Includes cup holder, cane holder, and storage space.',
      'Easy assembly with video instructions.',
    ],
    columns: [
      ['Why It’s a Good Choice', ['Promotes a healthier posture with its upright design.', 'Large wheels provide excellent traction on outdoor surfaces.', 'Sturdy yet lightweight for easy handling.', 'Adjustable features cater to different user needs.', 'Comes with practical accessories for added convenience.']],
      ['Why It May Not Be Ideal', ['May feel bulky for small indoor spaces.', 'Higher price compared to basic walkers.', 'Armrests may not suit all users’ preferences.']],
    ],
    reviews: [
      ['Carol c.', 'Worked well for Mediterranean trip of 7 countries/ cobblestone excursions. Comfortable seat and nice bag for shopping or jackets.'],
      ['Susan', 'I purchased this model because I live in the country and my lawn has bumps and holes. The best attribute is I feel safe walking for the first time in months.'],
    ],
  },
  {
    title: '2. Journey UPWalker EZ Lite – The Original Upright Walker',
    price: '$545.00',
    image: 'https://darkcyan-lion-250828.hostingersite.com/wp-content/uploads/2025/07/twa-blog3-2-714x1024.jpg',
    features: ['Ultra-lightweight 16 lb frame.', 'Promotes upright posture and reduces hunching.', 'Adjustable padded armrests and seat.', '8-inch wheels for indoor and outdoor use.', 'Folds flat for travel and storage.', 'FDA-Registered and ISO certified.'],
    columns: [
      ['Why It’s a Good Choice', ['Very lightweight for an upright walker.', 'Compact folding design helps with travel.', 'Comfortable support for smaller users.']],
      ['Why It May Not Be Ideal', ['Higher price than the other models.', 'Best fit range is narrower than some alternatives.']],
    ],
    reviews: [
      ['Maria', 'Lightweight, stable, and much easier to manage in the car than expected.'],
      ['Tom', 'The upright position helped me walk longer without shoulder strain.'],
    ],
  },
  {
    title: '3. Drive Medical Elevate Upright Walker with Seat and Armrests',
    price: '$210.77',
    image: 'https://darkcyan-lion-250828.hostingersite.com/wp-content/uploads/2025/07/twa-blog3-3-739x1024.png',
    features: ['Ergonomic armrests encourage upright walking.', '10-inch wheels handle uneven surfaces.', 'Padded seat and adjustable support.', 'Fits users up to 6’5”.', 'One-hand folding design.', 'Loop-lock brakes for safety.'],
    columns: [
      ['Why It’s a Good Choice', ['Useful for taller users.', 'Large wheels help on varied ground.', 'One-hand folding makes storage easier.']],
      ['Why It May Not Be Ideal', ['Can feel larger indoors.', 'Not the lightest option in the group.']],
    ],
    reviews: [
      ['George', 'The height range was the reason I bought it, and it feels much better than bending over a standard walker.'],
      ['Linda', 'Good support, good brakes, and the seat is helpful when I need to pause.'],
    ],
  },
  {
    title: '4. Aliseniors Upright Walker, Foldable Walker with Seat for Seniors',
    price: '$189.99',
    image: 'https://darkcyan-lion-250828.hostingersite.com/wp-content/uploads/2025/07/twa-blog3-4-693x1024.png',
    features: ['20.3-inch wide seat for comfort.', 'Adjustable padded armrests.', '18.7 lb frame supports 300 lbs.', 'Anti-tip safety design.', '8-inch PVC wheels with locking brakes.', 'Detachable bag and cane holder included.'],
    columns: [
      ['Why It’s a Good Choice', ['Wide seat is more comfortable than many competitors.', 'Good accessory set is included.', 'Anti-tip design adds confidence.']],
      ['Why It May Not Be Ideal', ['Seat width adds some bulk.', 'May not be the best choice for very tight homes.']],
    ],
    reviews: [
      ['InaYarden', 'This is great for people needing to walk for exercise. Stand up straight and feel secure. Very strong despite being really light.'],
      ['cl5138', 'The padded armrests make it very comfortable, and I love how it helps me maintain good posture without bending over.'],
    ],
  },
  {
    title: '5. ELENKER Heavy Duty Upright Walker (Amazon’s Choice)',
    price: '$149.99',
    image: 'https://darkcyan-lion-250828.hostingersite.com/wp-content/uploads/2025/07/twa-blog3-5-705x1024.png',
    features: ['Designed for users between 5′ and 6’4″.', 'Extra-wide padded seat and backrest.', 'Reinforced aluminum frame supports up to 500 lbs.', '10-inch anti-slip tread wheels with dual braking system.', 'Adjustable handlebars with armrest pads.', 'Cup holder, cane holder, and under-seat storage.'],
    columns: [
      ['Why it’s good', ['Weight capacity up to 500 lbs.', 'Extra-wide padded seat and backrest.', '10-inch anti-slip wheels for varied terrain.', 'Built-in storage, cup holder, and cane holder.']],
      ['Why it’s not', ['Larger frame can feel bulky in tight spaces.', 'Not ideal for users needing a very compact walker.', 'Price may be higher for budget-conscious buyers.']],
    ],
    reviews: [
      ['KLSJR', 'Great quality for the price. It was described as wide, which I like and which works for me, but be sure to measure your doorways.'],
      ['Brenda', 'Very sturdy and the wider seat made a real difference for comfort.'],
    ],
  },
];

const faqs = [
  ['What is the difference between an upright walker and a traditional walker?', 'An upright walker is designed to promote better posture by allowing users to walk with their back straight and arms comfortably supported at an elevated level.'],
  ['Who should use an upright walker?', 'Upright walkers are ideal for seniors and individuals with mobility challenges who want better posture support, stability, and comfort while walking.'],
  ['Are upright walkers safe for outdoor use?', 'Yes, many upright walkers are designed for both indoor and outdoor use. Models with large, all-terrain wheels provide better traction on uneven surfaces.'],
  ['Can upright walkers be folded for storage and transport?', 'Yes, most upright walkers feature a foldable design, making them easier to store and transport.'],
];

function Paragraph({ children }) { return <p className="mt-3 font-manrope text-[12px] font-medium leading-[1.85] text-[#1f2930]">{children}</p>; }
function SectionHeading({ children, id }) { return <h2 className="mt-9 text-[18px] font-black leading-tight text-black" id={id}>{children}</h2>; }

function ReviewCarousel({ reviews }) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setActiveIndex((i) => (i + 1) % reviews.length), 3500);
    return () => window.clearInterval(id);
  }, [reviews.length]);
  return (
    <div className="relative mt-4">
      <button className="absolute left-0 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full bg-white text-[24px] shadow" onClick={() => setActiveIndex((i) => (i - 1 + reviews.length) % reviews.length)} type="button">&#8592;</button>
      <div className="overflow-hidden px-12">
        <div className="review-carousel-track flex transition-transform duration-500 ease-out" style={{ '--review-index': activeIndex }}>
          {reviews.map(([name, review]) => (
            <div className="w-full shrink-0" key={name}>
              <article className="min-h-[190px] rounded-[10px] border border-[#d8dde2] bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                <h5 className="text-[14px] font-black text-black">{name}</h5>
                <p className="mt-1 font-manrope text-[12px] font-semibold text-[#66737c]">By amazon user</p>
                <p className="mt-3 text-[16px] leading-none text-[#f4b400]">★★★★★</p>
                <p className="mt-3 font-manrope text-[12px] font-medium leading-6 text-[#66737c]">{review}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
      <button className="absolute right-0 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full bg-white text-[24px] shadow" onClick={() => setActiveIndex((i) => (i + 1) % reviews.length)} type="button">&#8594;</button>
    </div>
  );
}

function UprightWalkersComparisonDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = '5 Best Upright Walkers for Seniors – Find the Right One';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1080px] bg-white px-4 pb-12 sm:px-6 lg:px-8">
        <article className="blog-detail-article w-full">
          <header className="pt-9 text-center">
            <h1 className="mx-auto max-w-[720px] text-[25px] font-black leading-tight text-black md:text-[28px]">Rise Up! 5 Upright Walkers Seniors Love , Find Yours Today</h1>
            <p className="mx-auto mt-10 max-w-[min(100%,56rem)] text-[#1f2930]">Want better posture, more comfort, and less strain? We’ve reviewed the top 5 upright walkers for seniors to help you stand taller and move easier. See which one’s the right fit!</p>
            <img className="mx-auto mt-5 h-auto w-full max-w-[700px] rounded-[8px] object-contain" src={`${process.env.PUBLIC_URL}/images/comparison-cards/upright-walkers.png`} alt="Senior man seated indoors holding a walking cane" />
          </header>
          <div className="mt-6 flex items-center gap-3"><img className="h-8 w-8 rounded-full object-cover" src={`${process.env.PUBLIC_URL}/images/robin-dolan_avatar-154x216.webp`} alt="Robin Dolan" /><p className="font-manrope text-[12px] font-black text-black">Robin Dolan</p></div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <video className="w-full rounded-[8px]" controls preload="metadata" src="https://darkcyan-lion-250828.hostingersite.com/wp-content/uploads/2025/07/Video-3-2.mp4" />
            <section className="rounded-[8px] bg-[#f3f3f3] p-5"><h2 className="text-[16px] font-black text-black">Key Summary</h2><Paragraph>This blog reviews the top 5 upright walkers for seniors, highlighting key features, pros, and cons. While each walker offers unique benefits, we recommend the ELENKER Heavy Duty Upright Walker for its superior comfort, stability, and a 500 lbs weight capacity.</Paragraph><Paragraph>With large anti-slip wheels, built-in storage, and Amazon’s Choice status, it stands out for its durability and ease of use, making it our top pick for both indoor and outdoor mobility support.</Paragraph></section>
          </div>
          <SectionHeading id="section-1">Understanding Upright Walkers for Seniors</SectionHeading>
          <Paragraph>As we age, maintaining mobility, balance, and independence becomes essential for a high quality of life. However, traditional walkers and rollators often encourage a hunched posture, which can lead to back pain, shoulder strain, and reduced stability.</Paragraph>
          <div className="mt-4 overflow-x-auto rounded-[8px] border border-[#d8dde2]"><table className="w-full min-w-[900px] border-collapse font-manrope text-[12px]"><thead className="bg-[#f3f3f3] text-left font-black text-black"><tr><th className="p-3">Walker Name</th><th className="p-3">Brand</th><th className="p-3">Price</th><th className="p-3">Rating</th><th className="p-3">key features</th><th className="p-3" /></tr></thead><tbody>{tableRows.map(([name, brand, price, rating, features, href]) => <tr className="border-t border-[#d8dde2]" key={name}><td className="p-3">{name}</td><td className="p-3">{brand}</td><td className="p-3">{price}</td><td className="p-3">{rating}</td><td className="p-3">{features}</td><td className="p-3"><a className="font-black text-[#0b61a4]" href={href}>Buy Now</a></td></tr>)}</tbody></table></div>
          <SectionHeading id="section-2">Top 5 Upright Walkers for Seniors</SectionHeading>
          {products.map((product) => <section className="mt-7" key={product.title}><h3 className="text-[15px] font-black text-black">{product.title}</h3><p className="mt-3 font-manrope text-[12px] font-black text-black">Rating: ★★★★★</p><p className="mt-1 font-manrope text-[12px] font-black text-black">Price: {product.price}</p><img className="mt-4 h-auto max-h-[420px] w-full object-contain" src={product.image} alt="" /><h4 className="mt-5 text-[14px] font-black text-black">Key Features</h4><ul className="mt-2 list-disc pl-5 font-manrope text-[12px] leading-6 text-[#1f2930]">{product.features.map((f) => <li key={f}>{f}</li>)}</ul><div className="mt-6 overflow-hidden rounded-[10px] border border-[#d8dde2] md:grid md:grid-cols-2">{product.columns.map(([title, items], i) => <div className={`p-5 ${i ? 'border-t border-[#d8dde2] md:border-l md:border-t-0' : ''}`} key={title}><h4 className="text-[14px] font-black text-black">{title}</h4><ul className="mt-3 list-disc space-y-2 border-t border-[#e6e8ea] pt-3 pl-5 font-manrope text-[12px] leading-6 text-[#1f2930]">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div><h4 className="mt-7 text-[15px] font-black text-black">Verified Customer Reviews</h4><ReviewCarousel reviews={product.reviews} /></section>)}
          <SectionHeading id="section-3">Key Benefits of Using an Upright Walker</SectionHeading>
          <Paragraph>An upright walker is more than just a mobility aid—it’s a tool that enhances independence, posture, and overall well-being for seniors.</Paragraph>
          <SectionHeading id="section-4">How to Choose the Best Upright Walker for Your Needs</SectionHeading>
          <Paragraph>Selecting the right upright walker ensures comfort, stability, and ease of movement. Consider adjustable height, weight capacity, wheel size, comfort features, indoor versus outdoor use, and budget.</Paragraph>
          <SectionHeading id="section-5">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">{faqs.map(([q, a]) => <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={q}><summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{q}</summary><p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{a}</p></details>)}</div>
          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6"><ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading><Paragraph>Upright walkers can improve posture, comfort, and confidence for seniors who want safer movement with better support.</Paragraph></section>
        </article>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}

export default UprightWalkersComparisonDetail;
