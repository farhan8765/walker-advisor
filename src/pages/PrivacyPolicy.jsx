import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function PrivacyPolicy() {
  useEffect(() => {
    const siteName = 'The Walker Advisor';
    const title = 'Privacy Policy | The Walker Advisor';
    const description =
      'Read the Privacy Policy for The Walker Advisor—how we collect, use, and protect information, including cookies, GDPR, and CCPA rights.';
    const canonicalUrl = 'https://thewalkeradvisor.com/privacy-policy/';

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
            Privacy Policy
          </h1>

          <div className="mt-6 space-y-8 font-['Manrope',sans-serif] text-base font-medium leading-7 tracking-[0.5%] text-[#172129] md:mt-8 md:text-lg md:leading-8">
            <section>
              <p className="font-semibold">Effective Date: March 13, 2025</p>
              <p className="mt-3">
                Protecting your privacy is very important to us. At TheWalkerAdvisor, we prioritize
                your privacy and are committed to safeguarding your personal information. This
                Privacy Policy explains the types of data we collect, how we use it, and the rights
                you have concerning your information. By using our website, you acknowledge and
                agree to the practices outlined in this policy. We do not collect personally
                identifiable information (PII), such as your name or contact details, unless you
                voluntarily provide it through actions like subscribing to our newsletter or
                submitting a contact form. However, we do collect non-personally identifiable
                information automatically to understand website usage and improve functionality.
              </p>
              <p className="mt-3">
                If you choose to provide PII, we use it solely to deliver personalized services,
                respond to inquiries, and enhance your experience. This may include sending
                newsletters, offering product recommendations, or providing customer support. The
                Walker Advisor does not sell or trade any personal information collected.
              </p>
            </section>

            <section>
              <h2
                className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Types of Information We Collect
              </h2>
              <p className="mt-3">
                We collect two main types of information:
              </p>
              <p className="mt-3">
                Automatically collected data
              </p>
              <p>
                Voluntarily provided data.
              </p>
              <p className="mt-3 font-semibold">Automatically Collected Information:</p>
              <p className="mt-3">
                When you visit TheWalkerAdvisor, we gather certain details to enhance your
                experience and improve website performance. This includes your internet domain name,
                IP address (to determine approximate location), browser type and version,
                operating system details, device type (desktop, tablet, or mobile), screen
                resolution, language settings, pages visited, time spent on each page, scroll
                depth, and referring websites or search engines. This information helps us analyze
                trends, diagnose technical issues, and optimize content based on user preferences.
              </p>
              <p className="mt-3 font-semibold">Information You Provide Voluntarily:</p>
              <p className="mt-3">
                You may choose to share personal information when engaging with our website, such as
                subscribing to our newsletter, submitting a contact form, participating in surveys
                or product reviews, inquiring about mobility aids, or reaching out to customer
                support. This data may include your name, email address, phone number, and any other
                details you provide. We only collect the personal data necessary to fulfill your
                request and do not store unnecessary information.
              </p>
            </section>

            <section>
              <h2
                className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                How We Use Information Collected
              </h2>
              <p className="mt-3">
                We use the data collected to provide a personalized and seamless experience. This
                includes offering tailored mobility-aid recommendations, optimizing website
                performance, responding to inquiries, and providing customer support.
              </p>
              <p className="mt-3">
                If you opt in, we may send newsletters, promotional offers, and service updates.
                Additionally, we analyze user behavior to improve the website&apos;s functionality
                and ensure a user-friendly experience. We do not sell, rent, or trade your personal
                information with third parties.
              </p>
            </section>

            <section>
              <h2
                className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Legal Basis for Processing Personal Data (GDPR Compliance)
              </h2>
              <p className="mt-3">
                For users in the European Economic Area (EEA), we ensure compliance with the General
                Data Protection Regulation (GDPR) by processing personal data under the following
                legal bases:
              </p>
              <p className="mt-3">
                Consent — When you voluntarily provide data, such as subscribing to our newsletter.
              </p>
              <p className="mt-3">
                Legitimate Interest — When processing data improves website functionality and user
                experience.
              </p>
              <p className="mt-3">
                Contractual Necessity — When processing is required to fulfill inquiries or
                requests.
              </p>
              <p className="mt-3">
                Legal Obligation — When required by law or regulatory authorities.
              </p>
            </section>

            <section>
              <h2
                className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Cookies &amp; Tracking Technologies
              </h2>
              <p className="mt-3">
                We use cookies and tracking technologies to enhance your experience.
              </p>
              <p className="mt-3">
                Session Cookies — Temporary cookies that expire when you close your browser.
              </p>
              <p className="mt-3">
                Persistent Cookies — Stored on your device for a set period to remember preferences.
              </p>
              <p className="mt-3">
                Third-Party Cookies — Used for analytics, advertising, and performance tracking
                through tools like Google Analytics and Facebook Pixel.
              </p>
              <p className="mt-3">
                You can manage cookies through your browser settings or opt out of third-party
                tracking using privacy tools.
              </p>
            </section>

            <section>
              <h2
                className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Your Choices About Tracking &amp; Data Collection
              </h2>
              <p className="mt-3">
                You have control over how your data is collected and used. You can adjust browser
                settings to block or delete cookies, opt out of third-party tracking via tools like
                Google Opt-Out Tool and AdChoices, or manage preferences using our Privacy Manager
                tool. We respect your right to control personal data and provide clear options for
                opting out of unnecessary tracking.
              </p>
            </section>

            <section>
              <h2
                className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Third-Party Tools &amp; Applications
              </h2>
              <p className="mt-3">
                We utilize third-party tools to improve website functionality and marketing efforts.
                These include:
              </p>
              <p className="mt-3">
                Google Analytics — To track website traffic and performance.
              </p>
              <p className="mt-3">
                Facebook Pixel — For targeted advertising and retargeting campaigns.
              </p>
              <p className="mt-3">
                Email Marketing Platforms — To send newsletters and service updates.
              </p>
              <p className="mt-3">
                These third-party tools may collect non-identifiable data to improve website
                efficiency. We do not share personally identifiable information (PII) without your
                consent.
              </p>
            </section>

            <section>
              <h2
                className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                How We Protect Your Personal Information
              </h2>
              <p className="mt-3">
                We employ industry-standard security measures to protect your data. This includes
                encryption protocols to secure data transmissions, secure servers with restricted
                access, and regular security audits to prevent unauthorized access. We are committed
                to maintaining high standards of data protection and implementing safeguards to
                minimize risks associated with online data sharing.
              </p>
            </section>

            <section>
              <h2
                className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Data Retention &amp; Access
              </h2>
              <p className="mt-3">
                We retain personal data only for as long as necessary to fulfill business operations
                and comply with legal obligations. You have the right to request access to your
                data, correct inaccuracies, or request deletion (subject to legal exceptions). If
                you wish to exercise these rights, please contact us through the details provided
                below.
              </p>
            </section>

            <section>
              <h2
                className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Data Sharing &amp; Disclosure
              </h2>
              <p className="mt-3">
                We do not sell your personal information, but we may share it in limited
                circumstances, such as:
              </p>
              <p className="mt-3">
                Legal Requirements — When required by law enforcement or regulatory authorities.
              </p>
              <p className="mt-3">
                Trusted Service Providers — When working with secure third-party vendors for
                operational purposes.
              </p>
              <p className="mt-3">
                Security &amp; Fraud Prevention — When necessary to protect our website from
                unauthorized activity.
              </p>
              <p className="mt-3">
                We ensure that data sharing is conducted securely and only when necessary.
              </p>
            </section>

            <section>
              <h2
                className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Children &amp; Privacy
              </h2>
              <p className="mt-3">
                We do not knowingly collect information from children under 13 years old.
                TheWalkerAdvisor complies with the Children&apos;s Online Privacy Protection Act
                (COPPA), and if we become aware of any unintentional data collection from minors, we
                take steps to remove it. Parents and guardians should supervise online activity to
                ensure children&apos;s privacy is maintained.
              </p>
            </section>

            <section>
              <h2
                className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                International Data Transfers
              </h2>
              <p className="mt-3">
                If you access our website from outside the United States, your data may be
                transferred to and processed in the U.S. under U.S. data protection laws. We take
                appropriate measures to safeguard international data transfers, ensuring compliance
                with applicable legal requirements.
              </p>
            </section>

            <section>
              <h2
                className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Links to Other Websites
              </h2>
              <p className="mt-3">
                Our website may contain links to third-party sites, such as Amazon affiliate links.
                These websites operate independently, and we are not responsible for their privacy
                policies or data-handling practices. We encourage users to review external privacy
                policies before sharing personal data.
              </p>
            </section>

            <section>
              <h2
                className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Your Rights Under GDPR &amp; CCPA
              </h2>
              <p className="mt-3">
                Depending on your location, you may have rights under GDPR (for EEA users) or CCPA
                (for California residents). These include:
              </p>
              <p className="mt-3">
                Right to Access — Obtain a copy of your data.
              </p>
              <p className="mt-3">
                Right to Correction — Correct inaccuracies in your data.
              </p>
              <p className="mt-3">
                Right to Deletion — Request the deletion of your data (subject to legal
                requirements).
              </p>
              <p className="mt-3">
                Right to Opt-Out — California residents can opt out of data sales under CCPA.
              </p>
              <p className="mt-3">
                Right to File Complaints — Complain to regulatory authorities if you believe your
                rights have been violated.
              </p>
              <p className="mt-3">
                To exercise these rights, contact us through the provided details.
              </p>
            </section>

            <section>
              <h2
                className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Updates to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy periodically to reflect changes in regulations,
                technologies, or business practices. Any modifications will be posted with a revised
                effective date. We encourage users to review this policy regularly to stay informed
                about how their data is handled.
              </p>
            </section>

            <section>
              <h2
                className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Contact Us
              </h2>
              <p className="mt-3">
                For privacy-related inquiries or concerns, contact us at:
              </p>
              <p className="mt-3">
                Email:{' '}
                <a
                  className="font-semibold text-[#1a56db] underline decoration-solid underline-offset-2 hover:text-[#1547b0]"
                  href="mailto:thewalkeradvisor@esqops.com"
                >
                  thewalkeradvisor@esqops.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
