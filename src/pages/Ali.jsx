import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

function Ali() {
  useEffect(() => {
    const siteName = 'The Walker Advisor';
    const title = 'Syed Ali – About the Author | The Walker Advisor';
    const description =
      'Meet Syed Ali, contributing author at The Walker Advisor, sharing practical mobility and caregiving guidance for seniors and families.';
    const canonicalUrl = 'https://thewalkeradvisor.com/author-syed-ali/';

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
      <main className="min-h-screen bg-white">
        <header className="bg-[#fbf6e6] px-4 py-8 md:px-8 md:py-10 lg:px-14">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-manrope text-base font-black leading-6 tracking-[0.5%] text-black md:text-lg">
              About the Author
            </p>
            <h1
              className="mt-2 text-center font-heading text-[40px] font-normal uppercase leading-[100%] tracking-normal text-black md:mt-3 md:text-[48px]"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              Syed Ali
            </h1>
          </div>
        </header>

        <section className="mx-auto max-w-5xl px-4 pb-8 pt-5 md:px-8 md:pb-10 md:pt-6 lg:px-14 lg:pb-12 lg:pt-8">
          <img
            className="mx-auto mb-6 block aspect-square w-full max-w-[280px] rounded-2xl object-cover sm:max-w-[320px] md:mb-7 md:max-w-[360px]"
            src={`${process.env.PUBLIC_URL}/images/Ali.png`}
            alt="Syed Ali"
          />
          <div className="space-y-4 font-['Manrope',sans-serif] text-base font-medium leading-7 tracking-[0.5%] text-[#5A666E] md:space-y-5 md:text-lg md:leading-8">
            <p>
              Syed brings a wealth of hands-on experience to the advisor site for mobility
              devices. As a dedicated caregiver for aging relatives facing Parkinson&apos;s,
              stroke rehabilitation, diabetes, and other long-term conditions, Syed has
              personally navigated the wide spectrum of mobility and senior products. His
              practical expertise covers everything from canes and walkers to emergency
              assistive devices, grab bars, and specialized bathroom safety equipment, always
              with the goal of enhancing comfort and safety.
            </p>
            <p>
              Beyond his knowledge of equipment, Syed&apos;s responsibilities have included
              managing daily care, finances, trusts, and other essential aspects of senior
              life, giving him a comprehensive understanding of the challenges families face
              as loved ones age.
            </p>
            <p>
              Outside of his caregiving role, Syed enjoys spending time with his family,
              playing basketball, and exploring new technology ideas. His insights combine
              compassion, real-world experience, and a drive for innovation, making his
              advice especially valuable for anyone seeking reliable guidance on mobility
              solutions and senior care.
            </p>
          </div>
        </section>

        <section className="w-full px-4 py-8 md:py-10 lg:py-12">
          <div className="mx-auto flex justify-center">
            <div className="mx-auto flex w-full max-w-lg flex-col items-center px-4 text-center sm:max-w-xl md:max-w-2xl md:rounded-3xl md:border md:border-[#d8cdb0] md:bg-[#fdf2d0] md:px-12 md:py-8 lg:max-w-3xl lg:rounded-[1.75rem] lg:px-14 lg:py-9">
              <h2
                className="font-heading text-[36px] font-normal uppercase leading-[100%] tracking-normal text-black md:text-[40px] lg:text-[44px]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Need a New Walker?
              </h2>
              <p className="mt-3 font-manrope text-base font-normal leading-7 text-[#3d4549] md:mt-3.5 md:text-lg md:leading-8">
                Discover top-rated options built for comfort, safety, and style.
              </p>
              <a
                className="mt-6 inline-flex h-12 min-w-[160px] shrink-0 items-center justify-center rounded-full bg-black px-10 font-manrope text-base font-bold text-white no-underline transition-colors hover:bg-[#1a1a1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:mt-6 md:h-14 md:px-12"
                href={`${process.env.PUBLIC_URL}/tools/`}
              >
                Explore Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <div className="-mt-4 md:-mt-8">
        <Newsletter />
      </div>
      <Footer />
    </>
  );
}

export default Ali;
