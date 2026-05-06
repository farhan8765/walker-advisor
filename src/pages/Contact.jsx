import ContactForm from '../components/ContactForm';
import ContactHero from '../components/ContactHero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
function Contact() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Contact;
