import "./App.css";
import AboutUs from "./pages/AboutUs";
import Articles from "./pages/Articles";
import CaregiversCorner from "./pages/CaregiversCorner";
import Contact from "./pages/Contact";
import Tools from "./pages/Tools";
import ExpertsChoice from "./components/ExpertsChoice";
import Footer from "./components/Footer";
import HelpfulResources from "./components/HelpfulResources";
import HomeFeatures from "./components/HomeFeatures";
import HomeHero from "./components/HomeHero";
import MobilityGuide from "./components/MobilityGuide";
import Navbar from "./components/Navbar";
import NewWalkerCta from "./components/NewWalkerCta";
import Newsletter from "./components/Newsletter";
import PerformanceHighlight from "./components/PerformanceHighlight";
import ToolShowcase from "./components/ToolShowcase";
import WalkerChoices from "./components/WalkerChoices";
import WalkerInsightsPromo from "./components/WalkerInsightsPromo";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <HomeFeatures />
      <ExpertsChoice />
      <MobilityGuide />
      <ToolShowcase />
      <NewWalkerCta />
      <WalkerChoices />
      <WalkerInsightsPromo />
      <HelpfulResources />
      <PerformanceHighlight />
      <Newsletter />
      <Footer />
    </>
  );
}

const routes = {
  "/": Home,
  "/about-us": AboutUs,
  "/articles": Articles,
  "/caregivers-corner": CaregiversCorner,
  "/contact": Contact,
  "/tools": Tools,
};

function App() {
  const Page = routes[window.location.pathname] || Home;

  return <Page />;
}

export default App;
