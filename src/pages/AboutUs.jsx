import { useEffect } from 'react';
import AboutUsContent from '../components/AboutUsContent';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function AboutUs() {
  useEffect(() => {
    const siteName = 'The Walker Advisor';
    const title = 'About Us - The Walker Advisor';
    const description =
      'Learn about The Walker Advisor, your trusted source for expert reviews on walkers, rollators, and mobility aids, helping seniors find reliable solutions.';
    const canonicalUrl = 'https://thewalkeradvisor.com/about-us/';

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

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'About Us',
      url: canonicalUrl,
      description,
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: 'https://thewalkeradvisor.com/',
      },
      about: {
        '@type': 'Organization',
        name: siteName,
        url: 'https://thewalkeradvisor.com/',
      },
    };

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify(schema);
    document.head.appendChild(schemaScript);
    createdNodes.push(schemaScript);

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
      <AboutUsContent />
      <Footer />
    </>
  );
}

export default AboutUs;
