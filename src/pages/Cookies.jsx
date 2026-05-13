import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Cookies() {
  useEffect(() => {
    const siteName = 'The Walker Advisor';
    const title = 'Cookies Policy | The Walker Advisor';
    const description =
      'Learn how The Walker Advisor uses cookies and similar technologies, including how to manage preferences and your privacy rights.';
    const canonicalUrl = 'https://thewalkeradvisor.com/cookies-policy/';

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

  const h2 =
    'text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]';

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-4 py-10 md:px-8 md:py-12 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <h1
            className="text-[40px] font-normal uppercase leading-[100%] tracking-normal text-black md:text-[48px]"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Cookies Policy
          </h1>

          <div className="mt-6 space-y-8 font-['Manrope',sans-serif] text-base font-medium leading-7 tracking-[0.5%] text-[#172129] md:mt-8 md:text-lg md:leading-8">
            <section>
              <p className="font-semibold">Effective Date: March 13, 2025</p>
              <p className="mt-3">
                At TheWalkerAdvisor, we use cookies and similar tracking technologies to
                enhance your browsing experience, optimize website functionality, analyze
                performance, and deliver personalized content. Cookies are essential for
                providing a seamless user experience, ensuring website security, and
                supporting relevant advertising efforts. This Cookies Policy explains what
                cookies are, the types of cookies we use, how they benefit users, and how you
                can manage or disable them based on your preferences. By continuing to browse
                our website, you consent to our use of cookies as outlined in this policy.
                However, you have full control over their usage and can modify your settings
                at any time.
              </p>
            </section>

            <section>
              <h2 className={h2} style={{ fontFamily: 'Anton, sans-serif' }}>
                What Are Cookies?
              </h2>
              <p className="mt-3">
                Cookies are small text files that are stored on your device whether
                it&apos;s a computer, tablet, or smartphone when you visit a website. These
                files contain data that helps websites recognize returning visitors,
                remember their preferences, and improve overall functionality. Cookies allow
                for smoother navigation, improved security, and a personalized user
                experience. Some cookies are necessary for the website to function properly,
                while others serve purposes like analytics, targeted advertising, and user
                engagement tracking.
              </p>
              <p className="mt-3">
                Cookies can either be first-party cookies, which are set directly by
                TheWalkerAdvisor, or third-party cookies, which are placed by external
                services integrated into our website. Third-party cookies typically come from
                analytics providers, advertisers, and social media platforms.
              </p>
            </section>

            <section>
              <h2 className={h2} style={{ fontFamily: 'Anton, sans-serif' }}>
                Types of Cookies We Use
              </h2>
              <p className="mt-3">
                We utilize different types of cookies, each serving a specific function to
                improve website performance and user experience. Below are the primary
                categories of cookies used on The Walker Advisor:
              </p>
              <p className="mt-3 font-semibold">Essential Cookies:</p>
              <p className="mt-3">
                These cookies are strictly necessary for the website to function. They enable
                basic operations such as page navigation, user authentication, and secure
                transactions. Without these cookies, certain site features may not be
                available. Essential cookies do not collect personal data and cannot be
                disabled.
              </p>
              <p className="mt-3 font-semibold">Performance &amp; Analytics Cookies:</p>
              <p className="mt-3">
                These cookies collect information about how visitors interact with our
                website, including page visits, time spent on pages, bounce rates, and
                click-through patterns. We use tools such as Google Analytics to analyze
                traffic trends, detect technical issues, and continuously improve site
                performance. The data collected by these cookies is anonymized and used
                strictly for statistical analysis.
              </p>
              <p className="mt-3 font-semibold">Functional Cookies:</p>
              <p className="mt-3">
                These cookies enhance usability by remembering user preferences and settings.
                They store details such as language preferences, login information, and
                previously viewed products. This helps us offer a personalized experience
                without requiring users to re-enter details each time they visit.
              </p>
              <p className="mt-3 font-semibold">Advertising &amp; Targeting Cookies:</p>
              <p className="mt-3">
                These cookies track user behavior across different websites to deliver
                targeted advertisements based on browsing interests. They help prevent
                repetitive ads and ensure that promotions shown to users are relevant. We
                use Google Ads, Facebook Pixel, and affiliate tracking cookies for marketing
                purposes. These cookies may also help measure the effectiveness of ad
                campaigns.
              </p>
              <p className="mt-3 font-semibold">Session Cookies vs. Persistent Cookies:</p>
              <p className="mt-3">
                Session Cookies: These cookies are temporary and expire once the user closes
                their browser. They help websites recognize users as they navigate between
                pages during a single browsing session.
              </p>
              <p className="mt-3">
                Persistent Cookies: These cookies remain on the user&apos;s device for a set
                period, even after the browser is closed. They store login credentials,
                shopping cart data, and other preferences to ensure a consistent user
                experience.
              </p>
            </section>

            <section>
              <h2 className={h2} style={{ fontFamily: 'Anton, sans-serif' }}>
                How We Use Cookies
              </h2>
              <p className="mt-3">
                The use of cookies on The Walker Advisor provides numerous benefits,
                including:
              </p>
              <p className="mt-3">
                Enhancing website security and functionality — Essential cookies help protect
                user data, prevent fraud, and maintain secure logins.
              </p>
              <p className="mt-3">
                Providing a personalized browsing experience — Functional cookies store
                language preferences, search history, and past interactions to tailor content
                for individual users.
              </p>
              <p className="mt-3">
                Analyzing and improving website performance — Performance cookies enable us
                to track user engagement, identify technical problems, and optimize our
                platform accordingly.
              </p>
              <p className="mt-3">
                Delivering relevant advertising and product recommendations — Targeting
                cookies allow us to display personalized ads and promotional offers based on
                browsing history.
              </p>
              <p className="mt-3">
                Preventing repetitive ads — Advertising cookies ensure that users do not see
                the same advertisement multiple times.
              </p>
              <p className="mt-3">
                Optimizing customer support interactions — Cookies help recognize returning
                users and retrieve previous support requests for a more efficient assistance
                process.
              </p>
            </section>

            <section>
              <h2 className={h2} style={{ fontFamily: 'Anton, sans-serif' }}>
                Third-Party Cookies &amp; Tracking Technologies
              </h2>
              <p className="mt-3">
                We integrate trusted third-party services to enhance functionality, marketing,
                and analytics. These services may place their cookies on your device. Some of
                the third-party tools we use include:
              </p>
              <p className="mt-3">
                Google Analytics — Helps track website traffic, user behavior, and engagement
                patterns to improve performance.
              </p>
              <p className="mt-3">
                Facebook Pixel — Allows us to run targeted ad campaigns and measure their
                effectiveness.
              </p>
              <p className="mt-3">
                Affiliate Tracking Cookies — Used by partners like Amazon Associates to track
                purchases made through affiliate links and credit commissions accordingly.
              </p>
              <p className="mt-3">
                Email Marketing Platforms — Services like Mailchimp may use tracking cookies
                to monitor newsletter engagement and improve email campaign effectiveness.
              </p>
              <p className="mt-3">
                These third-party services collect anonymized data and do not receive
                personally identifiable information unless explicitly provided by the user.
              </p>
            </section>

            <section>
              <h2 className={h2} style={{ fontFamily: 'Anton, sans-serif' }}>
                How to Manage &amp; Disable Cookies
              </h2>
              <p className="mt-3">
                Users have full control over cookie preferences and can adjust settings
                through various methods:
              </p>
              <p className="mt-3">
                Browser Settings: Most web browsers allow users to block, delete, or manage
                cookies. This can be done in the browser&apos;s privacy settings section.
              </p>
              <p className="mt-3">
                Privacy Tools: Users can opt out of certain tracking technologies through
                third-party privacy tools, such as:
              </p>
              <p className="mt-3">
                Google Opt-Out Tool — Prevents Google Analytics from tracking user activity.
              </p>
              <p className="mt-3">
                AdChoices — Provides options to opt out of targeted advertising.
              </p>
              <p className="mt-3">
                Website Privacy Manager: The Walker Advisor provides a cookie consent banner
                where users can manage cookie preferences and disable non-essential tracking.
              </p>
            </section>

            <section>
              <h2 className={h2} style={{ fontFamily: 'Anton, sans-serif' }}>
                Your Rights &amp; Data Protection Compliance
              </h2>
              <p className="mt-3">
                We are committed to protecting user privacy and ensuring compliance with global
                data protection regulations, including:
              </p>
              <p className="mt-3">
                General Data Protection Regulation (GDPR) — Users in the European Economic
                Area (EEA) have the right to:
              </p>
              <p className="mt-3">
                Request access to personal data collected through cookies.
              </p>
              <p className="mt-3">
                Request data deletion or restriction of tracking.
              </p>
              <p className="mt-3">
                Withdraw consent at any time.
              </p>
              <p className="mt-3">
                California Consumer Privacy Act (CCPA) — California residents can:
              </p>
              <p className="mt-3">
                Opt out of data collection and targeted advertising.
              </p>
              <p className="mt-3">
                Request information on how their data is used.
              </p>
              <p className="mt-3">
                Request deletion of collected data (subject to legal exceptions).
              </p>
              <p className="mt-3">
                Users can contact us to exercise these rights and make privacy-related
                requests.
              </p>
            </section>

            <section>
              <h2 className={h2} style={{ fontFamily: 'Anton, sans-serif' }}>
                Changes to This Cookies Policy
              </h2>
              <p className="mt-3">
                We may update this policy periodically to reflect changes in cookie usage,
                technology, or legal requirements. Any modifications will be posted with a
                revised effective date. We encourage users to review this policy regularly to
                stay informed about how cookies are used.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Cookies;
