import { useEffect } from 'react';
import ArticleIconHeading from '../components/ArticleIconHeading';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const activities = [
  {
    title: '1. Senior Community Centers',
    text: 'Most towns and cities have senior centers that offer a wide range of free or low-cost activities, including fitness classes, arts and crafts, cooking demos, movie screenings, and group outings. Senior centers are one of the best starting points for older adults looking to build a regular social routine outside the home.',
    image: 'https://darkcyan-lion-250828.hostingersite.com/wp-content/uploads/2026/04/unnamed-1.png',
  },
  {
    title: '2. Group Exercise Classes',
    text: 'Exercise becomes even more beneficial when done in a social setting. Group fitness classes, such as chair yoga, water aerobics, tai chi, or low-impact aerobics, combine physical health with social connection.',
    image: 'https://darkcyan-lion-250828.hostingersite.com/wp-content/uploads/2026/04/unnamed-3.png',
  },
  {
    title: '3. Volunteering',
    text: 'Volunteering gives seniors a sense of purpose, connection, and accomplishment. Whether it is mentoring young students, helping at a food bank, working at an animal shelter, or participating in community gardens, volunteering connects older adults to their community in a deeply meaningful way.',
  },
  {
    title: '4. Book Clubs and Reading Groups',
    text: 'A book club offers regular, structured social interaction built around a shared interest. Many libraries offer senior-specific reading groups that meet weekly or monthly. This kind of intellectually stimulating activity is ideal for seniors who prefer quieter social environments',
    image: 'https://darkcyan-lion-250828.hostingersite.com/wp-content/uploads/2026/04/unnamed-4.png',
  },
  {
    title: '5. Arts, Crafts, and Creative Classes',
    text: 'Painting, pottery, knitting, photography, and other creative activities are deeply satisfying and highly social. Many community centers, art studios, and libraries offer classes specifically designed for older adults. Creative activities also provide a sense of accomplishment and reduce symptoms of depression and anxiety.',
  },
  {
    title: '6. Religious and Spiritual Communities',
    text: 'For many older adults, their faith community is their primary social network. Regular attendance at religious services, prayer groups, and community events provides consistent human connection, a sense of belonging, and often practical support during difficult times.',
    image: 'https://darkcyan-lion-250828.hostingersite.com/wp-content/uploads/2026/04/unnamed-5.png',
  },
  {
    title: '7. Technology and Virtual Socialization',
    text: 'Not all social connections have to happen in person. Video calls with family, online senior communities, social media groups, and even online gaming can provide meaningful connections for seniors who have limited mobility or live in rural areas. Many libraries and senior centers offer free technology classes to help older adults get comfortable with devices and apps.',
  },
  {
    title: '8. Intergenerational Programs',
    text: 'Programs that connect seniors with younger generations, such as school mentorship programs, after-school volunteering, or grandparent reading programs, are among the most enriching social experiences available to older adults.',
    image: 'https://darkcyan-lion-250828.hostingersite.com/wp-content/uploads/2026/04/unnamed-6.png',
  },
  {
    title: '9. Day Trips and Group Outings',
    text: 'Organized day trips to museums, gardens, parks, restaurants, or theaters provide social interaction, gentle physical activity, and mental stimulation. Seniors who use mobility aids should ensure they have the right walker for outdoor environments.',
  },
  {
    title: '10. Pet Ownership or Animal Therapy',
    text: 'Pets provide unconditional companionship and have been shown to reduce blood pressure, ease depression, and improve overall well-being. For seniors who cannot care for a pet full-time, animal therapy programs offer many of the same benefits.',
    image: 'https://darkcyan-lion-250828.hostingersite.com/wp-content/uploads/2026/04/unnamed-7.png',
  },
];

const faqs = [
  ['Why is social activity important for seniors?', 'Regular social interaction reduces the risk of dementia, depression, cardiovascular disease, and early death. It also improves mood, quality of life, and sense of purpose.'],
  ['What are the best social activities for seniors with limited mobility?', 'Book clubs, arts and crafts, technology classes, virtual socializing, and in-home pet therapy are excellent options. With the right mobility aid, seniors can also participate in group exercise classes and community outings.'],
  ['How can I help a lonely senior get more socially active?', 'Start small, suggest one activity per week, and offer to accompany them the first time. Many seniors find that the hardest part is simply getting started. Community centers, faith communities, and volunteer organizations are excellent entry points.'],
  ['What walker accessories can make outings easier for seniors?', 'Baskets, trays, cup holders, and seat cushions all make walkers more practical for outings and social events.'],
];

const references = [
  'National Institute on Aging. Social Isolation, Loneliness in Older People. https://www.nia.nih.gov/news/social-isolation-loneliness-older-people-pose-health-risks',
  'Harvard Health Publishing. The Health Benefits of Strong Relationships. https://www.health.harvard.edu/newsletter_article/the-health-benefits-of-strong-relationships',
];

function Paragraph({ children }) {
  return <p className="mt-3 font-manrope text-[12px] font-medium leading-[1.85] text-[#1f2930]">{children}</p>;
}

function SectionHeading({ children, id }) {
  return <h2 className="mt-9 text-[18px] font-black leading-tight text-black" id={id}>{children}</h2>;
}

function ArticleLink({ href, children }) {
  return <a className="text-[#2361a1]" href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

function SocialActivitiesOlderAdultsDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Social Activities for Older Adults to Stay Active';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1080px] bg-white px-4 pb-12 sm:px-6 lg:px-8">
        <article className="blog-detail-article w-full">
          <header className="pt-9 text-center">
            <h1 className="mx-auto max-w-[760px] text-[25px] font-black leading-tight text-black md:text-[28px]">Social Activities for Older Adults: The Best Ways to Stay Connected, Active, and Happy</h1>
            <p className="mx-auto mt-10 max-w-[min(100%,56rem)] text-[#1f2930]">Loneliness in seniors is not just sad, it is as dangerous to health as smoking 15 cigarettes a day. Here are the best ways older adults can stay connected and thrive.</p>
            <img className="mx-auto mt-5 h-auto w-full max-w-[700px] rounded-[8px] object-contain" src={`${process.env.PUBLIC_URL}/images/blog.webp`} alt="Social activities for older adults" />
          </header>

          <div className="mt-6 flex items-center gap-3">
            <img className="h-8 w-8 rounded-full object-cover" src={`${process.env.PUBLIC_URL}/images/Ali.png`} alt="Syed Ali" />
            <p className="font-manrope text-[12px] font-black text-black">Syed Ali</p>
          </div>

          <Paragraph>Staying socially connected is one of the most powerful things older adults can do for their health. Research consistently shows that social isolation increases the risk of cognitive decline, depression, cardiovascular disease, and even early death. Yet loneliness among seniors is more common than ever, and it is a serious health issue that deserves the same attention as physical conditions.</Paragraph>
          <Paragraph>For seniors who use mobility aids, staying socially active often goes hand in hand with staying mobile. Our guide on <ArticleLink href="https://darkcyan-lion-250828.hostingersite.com/best-walkers-for-seniors-with-balance-problems">Best Walkers for Seniors with Balance Problems</ArticleLink> can help seniors stay independently mobile so they can participate fully in the activities covered in this blog.</Paragraph>

          <nav className="mt-7 overflow-hidden rounded-[8px] bg-[#f3f3f3]" aria-label="Table of contents">
            <h2 className="bg-[#ffc400] px-5 py-3 text-[17px] font-black leading-none text-black">Table of Contents</h2>
            <ol className="space-y-3 px-6 py-5 font-manrope text-[11px] font-semibold leading-5 text-[#1f2930]">
              <li><a href="#section-1">1. Why Social Activities Matter for Senior Health</a></li>
              <li><a href="#section-2">2. The Best Social Activities for Older Adults</a></li>
              <li><a href="#section-3">3. Frequently Asked Questions</a></li>
              <li><a href="#section-4">4. Final Thoughts</a></li>
              <li><a href="#section-5">5. References</a></li>
            </ol>
          </nav>

          <SectionHeading id="section-1">Why Social Activities Matter for Senior Health</SectionHeading>
          <Paragraph>The health benefits of staying socially active in older age are well-documented. Regular social interaction helps:</Paragraph>
          <ul className="mt-2 list-disc pl-5 font-manrope text-[12px] leading-6 text-[#1f2930]">
            <li>Reduce the risk of dementia and cognitive decline</li>
            <li>Lower rates of depression and anxiety</li>
            <li>Improve cardiovascular health</li>
            <li>Strengthen the immune system</li>
            <li>Increase lifespan and overall quality of life</li>
            <li>Maintain a sense of purpose and belonging</li>
          </ul>
          <img className="mt-5 h-auto w-full rounded-[8px] object-contain" src="https://darkcyan-lion-250828.hostingersite.com/wp-content/uploads/2026/04/unnamed-2.png" alt="" />

          <SectionHeading id="section-2">The Best Social Activities for Older Adults</SectionHeading>
          {activities.map((activity) => (
            <section className="mt-6" key={activity.title}>
              <h3 className="text-[15px] font-black text-black">{activity.title}</h3>
              <Paragraph>{activity.text}</Paragraph>
              {activity.title === '2. Group Exercise Classes' && (
                <Paragraph>For seniors who need mobility support, explore our <ArticleLink href="https://darkcyan-lion-250828.hostingersite.com/best-upright-walkers-for-outdoor-use">Best Upright Walkers for Outdoor Use: Top 5 Picks from Amazon</ArticleLink> or <ArticleLink href="https://darkcyan-lion-250828.hostingersite.com/best-rollator-for-balance-problems">Best Rollator for Balance Problems: Top 5 Reliable Options</ArticleLink> guides.</Paragraph>
              )}
              {activity.title === '9. Day Trips and Group Outings' && (
                <Paragraph>Our <ArticleLink href="https://darkcyan-lion-250828.hostingersite.com/best-all-terrain-walkers-for-seniors">Best All-Terrain Walkers for Seniors – Ultimate Guide</ArticleLink> covers the most reliable options.</Paragraph>
              )}
              {activity.image && <img className="mt-5 h-auto w-full rounded-[8px] object-contain" src={activity.image} alt="" />}
            </section>
          ))}

          <SectionHeading id="section-3">Frequently Asked Questions</SectionHeading>
          <div className="mt-4 space-y-2">
            {faqs.map(([question, answer]) => (
              <details className="rounded-[7px] bg-[#f3f3f3] px-5 py-3" key={question}>
                <summary className="cursor-pointer font-manrope text-[11px] font-black text-black">{question}</summary>
                <p className="mt-2 font-manrope text-[11px] font-semibold leading-5 text-[#303a42]">{answer}</p>
              </details>
            ))}
          </div>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-4">
            <ArticleIconHeading type="final">Final Thoughts</ArticleIconHeading>
            <Paragraph>Social connection is not a luxury for older adults; it is a fundamental component of health and well-being. Whether it is joining a book club, taking a group exercise class, volunteering in the community, or simply making a weekly phone call to a friend, every social interaction counts.</Paragraph>
          </section>

          <section className="mt-9 rounded-[10px] bg-[#f3f3f3] p-6" id="section-5">
            <ArticleIconHeading type="references">References</ArticleIconHeading>
            <div className="mt-3 space-y-2 font-manrope text-[12px] leading-6 text-[#1f2930]">
              {references.map((reference) => <p key={reference}>{reference}</p>)}
            </div>
          </section>
        </article>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}

export default SocialActivitiesOlderAdultsDetail;
