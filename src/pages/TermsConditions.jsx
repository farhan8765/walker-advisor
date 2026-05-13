import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function TermsConditions() {
  useEffect(() => {
    const siteName = 'The Walker Advisor';
    const title = 'Terms and Conditions | The Walker Advisor';
    const description =
      'Read the Terms and Conditions for The Walker Advisor, including website use, intellectual property, affiliate disclosure, and liability terms.';
    const canonicalUrl = 'https://thewalkeradvisor.com/terms-and-conditions/';

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
            Terms and Conditions
          </h1>

          <div className="mt-6 space-y-8 font-['Manrope',sans-serif] text-base font-medium leading-7 tracking-[0.5%] text-[#172129] md:mt-8 md:text-lg md:leading-8">
            <section>
              <p className="font-semibold">Effective Date: March 13, 2025</p>
              <p className="mt-3">
                Welcome to TheWalkerAdvisor! We appreciate your interest in our platform,
                which serves as a valuable resource for individuals seeking information,
                reviews, and recommendations on mobility aids, particularly walkers and
                related products. Our goal is to provide unbiased, well-researched content
                that helps users make informed decisions about mobility solutions.
              </p>
              <p className="mt-3">
                These Terms and Conditions govern your use of our website,
                https://thewalkeradvisor.com/.
              </p>
              <p className="mt-3">
                By accessing or using this Website, you agree to comply with and be bound by
                these terms. If you do not agree with any part of these terms, please refrain
                from using our services. These Terms and Conditions outline your rights,
                responsibilities, and legal obligations when engaging with our platform.
                Understanding them ensures a transparent and smooth experience while using our
                website.
              </p>
              <p className="mt-3">
                It is important to recognize that TheWalkerAdvisor is primarily an
                informational resource and does not provide direct medical advice,
                professional healthcare recommendations, or physical product manufacturing.
                Our content is based on research, user experiences, and industry insights,
                but it should not be considered a substitute for professional guidance.
              </p>
              <p className="mt-3">
                By continuing to use this Website, you acknowledge that you understand the
                nature of our services and agree to abide by all stated policies. We
                encourage all visitors to read through these terms carefully to ensure they
                have a clear understanding of their rights and responsibilities when using our
                platform.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                1. Acceptance of Terms
              </h2>
              <p className="mt-3">
                By accessing, browsing, or using our Website, you acknowledge that you have
                read, understood, and agreed to these Terms and Conditions. Your agreement
                forms a legally binding contract between you and The Walker Advisor. We
                strongly advise reading these terms carefully before proceeding with any
                interactions on our site.
              </p>
              <p className="mt-3">
                We reserve the right to update or modify these terms at any time without
                prior notice. Any changes will take effect immediately upon posting. We may
                update these terms to reflect changes in our business, legal requirements, or
                updates to our platform and services. As a user, it is your responsibility to
                stay informed of these changes by reviewing this page periodically.
              </p>
              <p className="mt-3">
                Your continued use of the Website after modifications signifies your
                acceptance of the revised terms. If you disagree with any updates or
                modifications, you should immediately discontinue use of the Website. Your
                failure to review or acknowledge updates does not exempt you from compliance.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                2. Website Use &amp; Eligibility
              </h2>
              <p className="mt-3">
                To ensure responsible and lawful usage, all users must adhere to the
                following guidelines. Our Website is designed to provide informational
                content, reviews, and recommendations regarding mobility aids, particularly
                walkers and related products.
              </p>
              <p className="mt-3">
                Age Requirement: You must be at least 18 years old to use this Website
                independently. If you are under 18, you may only use this Website with
                parental or legal guardian consent. By continuing to use the Website, you
                confirm that you meet this requirement.
              </p>
              <p className="mt-3">
                Intended Use: This Website is intended for personal and informational purposes
                only. It should not be used for illegal, fraudulent, harmful, or malicious
                activities.
              </p>
              <p className="mt-3">
                Prohibited Actions: Users are strictly prohibited from attempting to hack,
                modify, disrupt, or damage the Website or any associated services.
                Unauthorized access, including efforts to tamper with the website&apos;s security
                measures, extract user data, or engage in deceptive practices, will result in
                legal action.
              </p>
              <p className="mt-3">
                Compliance with Laws: Users must abide by all local, state, and federal laws
                when using the Website. Any actions that violate applicable laws may result in
                immediate termination of access.
              </p>
              <p className="mt-3">
                Any violation of these terms may result in permanent restriction from using
                our services, along with legal consequences where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                3. Intellectual Property Rights
              </h2>
              <p className="mt-3">
                TheWalkerAdvisor and its affiliates own and control all content published on
                the Website, including but not limited to:
              </p>
              <p className="mt-3">
                Text, graphics, images, logos, videos, product descriptions, and reviews.
                Website layout, software, and design elements. Trademarks, service marks, and
                brand elements.
              </p>
              <p className="mt-3">
                All content is protected by copyright, trademark, and intellectual property
                laws. Unauthorized use, reproduction, or modification of our content without
                explicit written permission is strictly prohibited. Violators may face legal
                action, including but not limited to cease-and-desist orders, financial
                penalties, or lawsuits.
              </p>
              <p className="mt-3">You are strictly prohibited from:</p>
              <p className="mt-3">
                Copying, reproducing, distributing, modifying, or creating derivative works
                based on Website content.
              </p>
              <p className="mt-3">
                Using our content for commercial purposes, resale, or misleading
                representation.
              </p>
              <p className="mt-3">
                Misusing our trademarks, branding, or intellectual property for personal or
                financial gain.
              </p>
              <p className="mt-3">
                Any content that is lawfully shared from our Website must provide appropriate
                credit to The Walker Advisor, including a direct hyperlink where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                4. Affiliate Disclosure
              </h2>
              <p className="mt-3">
                TheWalkerAdvisor participates in affiliate marketing programs, including but
                not limited to the Amazon Associates Program and other third-party retailer
                partnerships. This means that we may earn a commission when you purchase
                products through our affiliate links. These commissions help support our
                website and allow us to continue providing valuable content.
              </p>
              <p className="mt-3">
                No Extra Cost to Users: Using an affiliate link does not increase the price
                of the product for you. The commission is paid by the retailer or affiliate
                partner.
              </p>
              <p className="mt-3">
                Transparency &amp; Integrity: We strive to provide honest, unbiased, and
                well-researched reviews to help users make informed purchasing decisions. Our
                recommendations are based on research, hands-on testing (where applicable),
                and user feedback.
              </p>
              <p className="mt-3">
                No Liability for Third-Party Products: While we review and recommend products,
                we do not manufacture, control, or guarantee any third-party products. Issues
                regarding product quality, shipping, warranties, or returns must be handled
                directly with the seller or manufacturer.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                5. User-Generated Content
              </h2>
              <p className="mt-3">
                At TheWalkerAdvisor, we encourage user interaction through comments, reviews,
                testimonials, and feedback. By submitting any form of content to our Website,
                you grant TheWalkerAdvisor a non-exclusive, royalty-free, perpetual, and
                worldwide license to use, modify, reproduce, and publish your submitted
                content in various formats and media. This means we may use your reviews,
                feedback, or testimonials to enhance our website, marketing materials, or
                product evaluations.
              </p>
              <p className="mt-3">
                However, when submitting content, users must adhere to the following
                guidelines:
              </p>
              <p className="mt-3">
                Content must not contain defamatory, offensive, misleading, fraudulent, or
                illegal material.
              </p>
              <p className="mt-3">
                Submissions should not include copyrighted material unless the user has
                explicit rights to distribute it.
              </p>
              <p className="mt-3">
                Spam, advertisements, or self-promotional content that does not align with
                the purpose of the website is strictly prohibited.
              </p>
              <p className="mt-3">
                Users must ensure that their content does not infringe on any third-party
                rights, including privacy and intellectual property rights.
              </p>
              <p className="mt-3">
                We reserve the right to review, edit, or remove any user-generated content
                that violates these terms or is deemed inappropriate at our sole discretion.
                Additionally, while we strive to monitor submissions, we do not take
                responsibility for user-generated content and its potential impact.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                6. Third-Party Links &amp; Services
              </h2>
              <p className="mt-3">
                Our Website may include links to third-party websites, services, or products
                that we believe may provide additional value to our users. These links are
                provided for informational and convenience purposes only.
              </p>
              <p className="mt-3">It is important to note that:</p>
              <p className="mt-3">
                TheWalkerAdvisor does not own, control, or endorse third-party websites and
                their content.
              </p>
              <p className="mt-3">
                We do not guarantee the accuracy, reliability, or safety of third-party
                services.
              </p>
              <p className="mt-3">
                Clicking on third-party links means you are interacting with an external
                website at your own risk.
              </p>
              <p className="mt-3">
                We are not responsible for any losses, damages, or security risks associated
                with third-party interactions.
              </p>
              <p className="mt-3">
                Users should carefully review the privacy policies and terms of third-party
                websites before engaging with them or making purchases. We assume no liability
                for any transactions, data breaches, or disputes that arise from external
                sites.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                7. Disclaimer of Warranties
              </h2>
              <p className="mt-3">
                The information provided on TheWalkerAdvisor is for informational purposes
                only. While we strive to offer accurate and up-to-date content, we do not
                guarantee the following:
              </p>
              <p className="mt-3">
                The accuracy, completeness, or reliability of the information presented on our
                Website.
              </p>
              <p className="mt-3">
                The performance, durability, safety, or effectiveness of the products we
                review or recommend.
              </p>
              <p className="mt-3">
                The continuous availability, uninterrupted functionality, or security of our
                Website.
              </p>
              <p className="mt-3">Additionally:</p>
              <p className="mt-3">
                Website downtime, maintenance, or technical failures may occur beyond our
                control.
              </p>
              <p className="mt-3">
                Product recommendations are based on research and expertise but should not be
                considered a substitute for professional medical or financial advice.
              </p>
              <p className="mt-3">
                Users should consult a healthcare professional or financial expert before
                making decisions based on our content.
              </p>
              <p className="mt-3">
                By using our Website, you acknowledge that reliance on our information is at
                your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                8. Limitation of Liability
              </h2>
              <p className="mt-3">
                To the fullest extent permitted by law, TheWalkerAdvisor and its affiliates,
                owners, employees, or partners shall not be held liable for:
              </p>
              <p className="mt-3">
                Any direct, indirect, incidental, consequential, or punitive damages
                resulting from the use of our Website.
              </p>
              <p className="mt-3">
                Errors, omissions, or misleading information found within product
                recommendations.
              </p>
              <p className="mt-3">
                Losses or dissatisfaction with third-party products purchased through
                affiliate links.
              </p>
              <p className="mt-3">
                Any security vulnerabilities, hacks, or data breaches affecting Website users.
              </p>
              <p className="mt-3">
                We make no guarantees regarding the effectiveness of mobility aids or any
                products we review. Users assume full responsibility for their purchasing
                decisions.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                9. Indemnification
              </h2>
              <p className="mt-3">
                By using our Website, you agree to indemnify and hold harmless
                TheWalkerAdvisor and its team from:
              </p>
              <p className="mt-3">
                Any claims, legal actions, damages, or losses arising from violations of
                these Terms and Conditions.
              </p>
              <p className="mt-3">
                Any consequences resulting from reliance on our Website&apos;s content or
                recommendations.
              </p>
              <p className="mt-3">
                Liabilities tied to third-party interactions, transactions, or disputes.
              </p>
              <p className="mt-3">
                This indemnification extends to legal costs and fees incurred in the defense
                of any claim brought against The Walker Advisor due to user actions or
                reliance on Website content.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                10. Privacy Policy
              </h2>
              <p className="mt-3">
                Your use of TheWalkerAdvisor is governed by our Privacy Policy, which
                outlines:
              </p>
              <p className="mt-3">
                How we collect, use, store, and protect your data.
              </p>
              <p className="mt-3">
                The types of personal and non-personal information we may collect.
              </p>
              <p className="mt-3">
                Our commitment is to not sell or share your data without your consent.
              </p>
              <p className="mt-3">
                Security measures implemented to safeguard user data.
              </p>
              <p className="mt-3">
                For more details, we encourage you to review our Privacy Policy to understand
                how your information is handled.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                11. Termination of Access
              </h2>
              <p className="mt-3">
                We reserve the right to terminate or restrict access to our Website for users
                who:
              </p>
              <p className="mt-3">
                Violate any provisions of these Terms and Conditions.
              </p>
              <p className="mt-3">
                Engage in abusive, fraudulent, or malicious activities on our platform.
              </p>
              <p className="mt-3">
                Attempt to hack, manipulate, or disrupt our Website&apos;s functionality.
              </p>
              <p className="mt-3">
                If your access is terminated, you must cease using our Website immediately. We
                are not obligated to provide advance notice of termination.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                12. Governing Law &amp; Dispute Resolution
              </h2>
              <p className="mt-3">
                These Terms and Conditions are governed by the laws of the United States.
              </p>
              <p className="mt-3">
                In the event of a dispute, the following resolution process applies:
              </p>
              <p className="mt-3">
                Negotiation First - Both parties must attempt to resolve the dispute through
                direct communication.
              </p>
              <p className="mt-3">
                Binding Arbitration - If negotiation fails, the dispute will be settled
                through arbitration by applicable U.S. laws.
              </p>
              <p className="mt-3">
                No Class-Action Lawsuits - Users waive their right to participate in any
                class-action lawsuits related to these Terms.
              </p>
              <p className="mt-3">
                This ensures fair dispute resolution while minimizing legal complexities for
                both parties.
              </p>
            </section>

            <section>
              <h2 className="text-[30px] font-normal uppercase leading-[100%] text-black md:text-[36px]" style={{ fontFamily: 'Anton, sans-serif' }}>
                13. Changes to These Terms
              </h2>
              <p className="mt-3">
                We reserve the right to modify, update, or amend these Terms and Conditions
                at any time.
              </p>
              <p className="mt-3">
                Changes will be effective immediately upon posting on our Website.
              </p>
              <p className="mt-3">
                Users are responsible for regularly reviewing this page to stay informed of
                updates.
              </p>
              <p className="mt-3">
                Continued use of our Website constitutes acceptance of any revised Terms.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TermsConditions;
