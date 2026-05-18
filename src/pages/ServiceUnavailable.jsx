import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ServiceUnavailable() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[60vh] items-center justify-center bg-white px-4 py-16">
        <section className="w-full max-w-[560px] text-center">
          <p className="font-manrope text-[18px] font-bold text-[#66737c]">503</p>
          <h1 className="mt-3 font-manrope text-[36px] font-bold leading-tight text-[#172129]">
            Service Unavailable
          </h1>
          <p className="mt-4 font-manrope text-base leading-7 text-[#66737c]">
            This blog detail page is not available yet.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ServiceUnavailable;
