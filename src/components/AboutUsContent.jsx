import OurMission from './OurMission';
import OurVision from './OurVision';
import Newsletter from './Newsletter';

function AboutUsContent() {
  return (
    <main className="min-h-screen bg-[#fbf6e6] pb-12 pt-12 md:pb-16 md:pt-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-[114px]">
        <section className="text-center">
          <h1 className="text-4xl uppercase leading-none text-black sm:text-5xl md:text-[92px]">
            About Us
          </h1>
          <p className="mt-4 font-['Manrope',sans-serif] text-base font-medium leading-6 tracking-[0.5%] text-[#5A666E] md:mt-6">
            tagline comes here
          </p>
        </section>

        <section className="mt-4 grid items-center gap-8 md:mt-10 md:gap-10 lg:grid-cols-[0.95fr_1fr] lg:gap-[100px]">
          <div className="overflow-hidden rounded-lg">
            <img
              className="h-[240px] w-full object-contain sm:h-[360px] md:h-[790px]"
              src={`${process.env.PUBLIC_URL}/images/about1.png`}
              alt="Person using a walker"
            />
          </div>

          <div
            className="w-full space-y-3 font-['Manrope',sans-serif] text-base font-medium leading-6 tracking-[0.5%] text-[#5A666E] md:space-y-2"
          >
            <p>
              Welcome to The Walker Advisor, your trusted guide for expert reviews
              and recommendations on walkers, rollators, and mobility aids. We are
              dedicated to helping seniors and their families find the right mobility
              solutions that promote safety, comfort, and independence.
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
            <p>
              For full details on our review process and affiliations, please read
              our{' '}
              <a
                className="text-inherit underline decoration-solid underline-offset-0 decoration-auto decoration-skip-ink-auto"
                href="#disclaimer"
              >
                Disclaimer
              </a>
              .
            </p>
          </div>
        </section>
      </div>
      <OurMission />
      <OurVision />
      <Newsletter />
    </main>
  );
}

export default AboutUsContent;
