function HomeHero() {
  return (
    <section className="w-full overflow-hidden bg-[#fbf6e6] px-0 pb-8 pt-0 md:pb-12 lg:pb-16">
      <div className="mx-auto max-w-[1443px]">
        <img
          className="block h-auto w-full"
          src={`${process.env.PUBLIC_URL}/images/walker-advisor-hero.png`}
          alt="Welcome to The Walker Advisor. The Walker Advisor is your trusted resource for finding the best walkers and mobility aids for seniors."
        />
      </div>
    </section>
  );
}

export default HomeHero;
