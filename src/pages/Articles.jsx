import BlogArticles from '../components/BlogArticles';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

function Articles() {
  return (
    <>
      <Navbar />
      <BlogArticles />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Articles;
