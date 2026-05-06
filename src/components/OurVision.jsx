function OurVision() {
  const bodyClass =
    "space-y-3 font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-[15px] font-normal leading-[150%] tracking-normal text-[#242424] sm:space-y-4 sm:text-base";

  return (
    <section className="w-full bg-white py-10 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:px-6 md:px-[114px] md:gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-[114px]">
        <div className="order-2 min-w-0 overflow-hidden rounded-2xl md:rounded-3xl bg-white lg:order-1 lg:rounded-3xl">
          <img
            className="h-[200px] w-full object-cover sm:h-[280px] md:h-[360px] lg:h-[min(560px,55vh)] lg:min-h-[400px]"
            src={`${process.env.PUBLIC_URL}/images/gwalk.png`}
            alt="Woman walking outdoors using a blue four-wheeled rollator"
          />
        </div>

        <div className="order-1 min-w-0 lg:order-2">
          <h2 className="font-heading text-4xl font-normal uppercase leading-[100%] tracking-normal text-black sm:text-5xl md:text-[60px]">
            Our vision
          </h2>
          <div className={`mt-4 md:mt-6 ${bodyClass}`}>
            <p>
              At The Walker Advisor, our vision is to create a world where seniors
              can move through life with confidence, dignity, and independence. We
              believe mobility is key to freedom, and that starts with the right
              guidance and tools. By offering reliable reviews, trusted advice, and
              helpful resources, we aim to support seniors and caregivers at every
              stage of the journey. We don&apos;t just focus on products; we focus
              on people.
            </p>
            <p>
              Our goal is to empower individuals with the knowledge they need to
              live fully and safely. Through compassion and expertise, we strive to
              make everyday mobility a possibility for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurVision;
