function AboutUsContent() {
  return (
    <main className="min-h-screen bg-[#fbf6e6] px-6 pb-24 pt-16 md:px-[114px]">
      <section className="text-center">
        <h1 className="text-[70px] uppercase leading-none text-black md:text-[92px]">
          About Us
        </h1>
        <p className="mt-6 text-[26px] font-normal leading-tight text-black">
          tagline comes here
        </p>
      </section>

      <section className="mt-[70px] grid items-center gap-14 lg:grid-cols-[0.95fr_1fr] lg:gap-[114px]">
        <div className="overflow-hidden rounded-lg bg-white">
          <img
            className="h-[520px] w-full object-contain md:h-[790px]"
            src={`${process.env.PUBLIC_URL}/images/newsletter-pic-1024x1024.webp`}
            alt="Person using a walker"
          />
        </div>

        <div className="max-w-[760px] text-[25px] font-normal leading-[1.35] text-[#242424]">
          <p>
            Welcome to The Walker Advisor, your trusted guide for expert reviews
            and recommendations on walkers, rollators, and mobility aids. We are
            dedicated to helping seniors and their families find the right
            mobility solutions that promote safety, comfort, and independence.
          </p>
          <p>
            Our team carefully evaluates each product, focusing on what matters
            most: durability, ease of use, and overall quality. With a commitment
            to honest, unbiased insights, we simplify the decision-making process
            so you can choose with confidence.
          </p>
          <p>
            Whether you need a lightweight walker for daily use or a heavy-duty
            rollator for extra support, we&apos;re here to guide you every step of
            the way. At The Walker Advisor, we&apos;re passionate about improving
            quality of life through reliable, practical mobility solutions.
          </p>
          <p>
            Thank you for trusting us to help you move forward confidently and
            comfortably.
          </p>
          <p className="mt-10">
            For full details on our review process and affiliations, please read
            our{' '}
            <a
              className="text-[#242424] underline underline-offset-2"
              href="#disclaimer"
            >
              Disclaimer
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutUsContent;
