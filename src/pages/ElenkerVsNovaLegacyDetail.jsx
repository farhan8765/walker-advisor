import { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ElenkerVsNovaLegacyDetail() {
  const frameRef = useRef(null);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Elenker vs. Nova Upright Walkers: Which Should You Choose in 2026?';

    return () => {
      document.title = previousTitle;
    };
  }, []);

  const syncFrame = () => {
    const frame = frameRef.current;
    const frameDocument = frame?.contentDocument;

    if (!frame || !frameDocument) {
      return;
    }

    frameDocument
      .querySelectorAll(
        '.elementor-location-header, .elementor-location-footer, header, footer'
      )
      .forEach((element) => {
        element.style.display = 'none';
      });

    frame.style.height = `${frameDocument.documentElement.scrollHeight}px`;
  };

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <iframe
          ref={frameRef}
          className="block min-h-screen w-full border-0"
          src="/elenker-vs-nova-upright-walkers-2026.html"
          title="Elenker vs. Nova Upright Walkers article"
          onLoad={syncFrame}
        />
      </main>
      <Footer />
    </>
  );
}

export default ElenkerVsNovaLegacyDetail;
