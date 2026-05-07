function OurMission() {
  const bodyClass =
    "space-y-3 font-['Manrope',sans-serif] text-base font-medium leading-6 tracking-[0.5%] text-[#5A666E] sm:space-y-4";

  return (
    <section className="w-full bg-white py-10 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:px-6 md:px-[114px] md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-[114px]">
        <div className="min-w-0">
          <h2 className="font-heading text-4xl font-normal uppercase leading-[100%] tracking-normal text-black sm:text-5xl md:text-[60px]">
            Our mission
          </h2>
          <div className={`mt-4 md:mt-6 ${bodyClass}`}>
            <p>
              Our mission is to provide detailed, unbiased reviews and practical
              guidance that help seniors and their families make informed
              decisions about mobility aids. We know choosing the right walker or
              rollator affects more than mobility—it impacts confidence,
              comfort, and daily living. That&apos;s why we evaluate each product
              carefully, focusing on quality, ease of use, and safety.
            </p>
            <p>
              We aim to be a trusted partner in this process, bridging the gap
              between mobility needs and real-world solutions. Through honest
              insights and clear comparisons, we support every step seniors take
              toward a safer, more independent life.
            </p>
          </div>
        </div>

        <div className="min-w-0 overflow-hidden rounded-2xl md:rounded-3xl bg-white lg:rounded-3xl">
          <img
            className="h-[200px] w-full object-cover sm:h-[280px] md:h-[360px] lg:h-[min(560px,55vh)] lg:min-h-[400px]"
            src={`${process.env.PUBLIC_URL}/images/legs.png`}
            alt="Two people walking outdoors with trekking poles for support"
          />
        </div>
      </div>
    </section>
  );
}

export default OurMission;
