const imagePath = `${process.env.PUBLIC_URL}/images`;

function MobilityGuide() {
  return (
    <section className="w-full px-4 py-16 md:px-8 lg:px-14 lg:py-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[minmax(360px,_478px)_minmax(0,_1fr)] lg:gap-36">
        <img
          className="h-[420px] w-full rounded-lg object-cover object-center md:h-[560px] lg:h-[740px]"
          src={`${imagePath}/image-9-1.webp`}
          alt="Senior woman walking outdoors with a rollator walker"
        />

        <div className="flex flex-col items-start lg:pt-40">
          <div className="grid w-full max-w-[430px] grid-cols-2 gap-4 md:gap-5">
            <img
              className="aspect-square w-full rounded-lg object-cover"
              src={`${imagePath}/Rectangle 42035.png`}
              alt="People standing outdoors with walkers"
            />
            <img
              className="aspect-square w-full rounded-lg object-cover"
              src={`${imagePath}/Rectangle 42036.png`}
              alt="Two women talking beside mobility walkers"
            />
          </div>

          <p className="mt-20 max-w-[580px] font-manrope text-base font-black leading-6 text-[#132027] md:text-lg">
            Walkers help you stay mobile, and independent. Choosing the right
            one and using the right way makes all the difference
          </p>

          <a
            className="mt-5 inline-flex h-10 items-center justify-center gap-3 rounded-full bg-[#17262d] px-5 font-manrope text-base font-medium text-white no-underline transition-colors hover:bg-[#223841] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="/articles"
          >
            Learn More <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default MobilityGuide;
