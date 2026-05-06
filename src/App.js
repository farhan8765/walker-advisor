import './App.css';
import AboutUs from './pages/AboutUs';
import CaregiversCorner from './pages/CaregiversCorner';
import Contact from './pages/Contact';
import BestTools from './components/BestTools';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import ToolsCards from './components/ToolsCards';

function Home() {
  return (
    <>
      <Navbar />
      <BestTools />
      <ToolsCards />
      <Newsletter />
      <Footer />
    </>
  );
}

const routes = {
  '/': Home,
  '/about-us': AboutUs,
  '/caregivers-corner': CaregiversCorner,
  '/contact': Contact,
};

function App() {
  const Page = routes[window.location.pathname] || Home;

  return (
    <Page />
  );
}

export default App;
