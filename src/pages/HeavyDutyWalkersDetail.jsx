import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

function HeavyDutyWalkersDetail() {
  const [articleHtml, setArticleHtml] = useState('');

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Strong, Stable & Reliable: Top Heavy-Duty Walkers Seniors Trust in 2026';

    let active = true;

    fetch('/best-heavy-duty-walkers-for-seniors.html')
      .then((response) => response.text())
      .then((html) => {
        if (!active) {
          return;
        }

        const documentFragment = new DOMParser().parseFromString(html, 'text/html');
        const article = documentFragment.querySelector('.single-post-wrapper');

        article
          ?.querySelectorAll(
            '.elementor-location-header, .elementor-location-footer, header, footer'
          )
          .forEach((element) => element.remove());

        article?.querySelector('.elementor-page-title')?.closest('section')?.classList.add('legacy-hero');
        article?.querySelector('.elementor-author-box')?.classList.add('legacy-author');
        article?.querySelector('.elementor-toc__header')?.closest('.elementor-widget')?.classList.add('legacy-toc');
        article?.querySelectorAll('img').forEach((image) => {
          if (!image.closest('.legacy-author') && !image.closest('.legacy-hero')) {
            image.classList.add('blog-content-image');
          }
        });
        article?.querySelectorAll('.elementor-button').forEach((button) => {
          button.classList.add('legacy-buy-button');
        });
        article?.querySelectorAll('.bdt-ep-review-card-carousel-content').forEach((card) => {
          card.classList.add('legacy-review-card');
        });
        article?.querySelectorAll('.bdt-ep-accordion-item').forEach((item) => {
          item.classList.add('legacy-faq-item');
        });
        article?.querySelector('.comments-wrapper')?.classList.add('legacy-comments');
        article?.querySelector('.elementor-posts-container')?.classList.add('legacy-related-grid');

        setArticleHtml(article?.innerHTML ?? '');
      });

    return () => {
      active = false;
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1080px] bg-white px-4 pb-12 sm:px-6 lg:px-8">
        <article
          className="blog-detail-article legacy-html-article w-full pt-9"
          dangerouslySetInnerHTML={{ __html: articleHtml }}
        />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}

export default HeavyDutyWalkersDetail;
