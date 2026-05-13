import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Disclaimer() {
  useEffect(() => {
    const siteName = 'The Walker Advisor';
    const title = 'Disclaimer | The Walker Advisor';
    const description =
      'Read the disclaimer for The Walker Advisor regarding medical advice, affiliate disclosure, and liability limitations.';
    const canonicalUrl = 'https://thewalkeradvisor.com/disclaimer/';

    const previousTitle = document.title;
    const previousValues = [];
    const createdNodes = [];

    document.title = title;

    const setMeta = (attr, key, content) => {
      let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
        createdNodes.push(tag);
      } else {
        previousValues.push({
          element: tag,
          attribute: 'content',
          value: tag.getAttribute('content'),
        });
      }
      tag.setAttribute('content', content);
    };

    const setLink = (rel, href) => {
      let tag = document.head.querySelector(`link[rel="${rel}"]`);
      if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', rel);
        document.head.appendChild(tag);
        createdNodes.push(tag);
      } else {
        previousValues.push({
          element: tag,
          attribute: 'href',
          value: tag.getAttribute('href'),
        });
      }
      tag.setAttribute('href', href);
    };

    setMeta('name', 'description', description);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large');
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', siteName);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setLink('canonical', canonicalUrl);

    return () => {
      document.title = previousTitle;
      previousValues.forEach(({ element, attribute, value }) => {
        if (value === null) {
          element.removeAttribute(attribute);
        } else {
          element.setAttribute(attribute, value);
        }
      });
      createdNodes.forEach((node) => node.remove());
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-4 py-10 md:px-8 md:py-12 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <h1
            className="text-[40px] font-normal uppercase leading-[100%] tracking-normal text-black md:text-[48px]"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Disclaimer
          </h1>

          <div className="mt-6 space-y-8 font-['Manrope',sans-serif] text-base font-medium leading-7 tracking-[0.5%] text-[#172129] md:mt-8 md:text-lg md:leading-8">
            <section>
              <p>
                At The Walker Advisor, we aim to provide accurate, well-researched, and
                helpful information about mobility aids, including walkers, rollators, and
                related products. However, all content on this website is for informational
                and educational purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                Not Medical Advice
              </h2>
              <p className="mt-3">
                We are not medical professionals, and the information provided on this
                website should not be considered medical advice, diagnosis, or treatment.
                Always consult a qualified healthcare provider, physician, or physical
                therapist before choosing or using any mobility aid, especially if you have
                specific health conditions or mobility concerns.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                Personal Responsibility
              </h2>
              <p className="mt-3">
                Mobility needs can vary from person to person. Any decisions you make based
                on the information provided on this website are at your own discretion and
                risk. We do not guarantee that the information is suitable for every
                individual situation.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                Affiliate Disclosure
              </h2>
              <p className="mt-3">
                The Walker Advisor participates in affiliate programs, including the Amazon
                Associates Program. This means we may earn a commission when you purchase
                products through our links at no additional cost to you.
              </p>
              <p className="mt-3">
                We strive to provide honest and unbiased reviews. However, affiliate
                partnerships may influence how products are presented on the site.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                Product Responsibility
              </h2>
              <p className="mt-3">
                We do not manufacture or sell any products directly. Any issues related to
                product quality, defects, warranties, or delivery should be directed to the
                respective seller or manufacturer.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                External Links
              </h2>
              <p className="mt-3">
                Our website may contain links to third-party websites. We do not control
                these sites and are not responsible for their content, policies, or
                practices.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                Limitation of Liability
              </h2>
              <p className="mt-3">
                By using this website, you agree that The Walker Advisor is not responsible
                for any damages, injuries, or losses resulting from the use of our content or
                any products purchased through external links.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Disclaimer;
