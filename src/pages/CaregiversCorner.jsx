import CaregiverArticles from '../components/CaregiverArticles';
import CaregiversHero from '../components/CaregiversHero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

function CaregiversCorner() {
  return (
    <>
      <Navbar />
      <CaregiversHero />
      <CaregiverArticles />
      <Newsletter />
      <Footer />
    </>
  );
}

export default CaregiversCorner;
