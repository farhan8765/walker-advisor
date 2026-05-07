import "./App.css";
import AboutUs from "./pages/AboutUs";
import Articles from "./pages/Articles";
import BlogDetail from "./pages/BlogDetail";
import CaregiversCorner from "./pages/CaregiversCorner";
import Contact from "./pages/Contact";
import ProperWalkingShoesDetail from "./pages/ProperWalkingShoesDetail";
import Tools from "./pages/Tools";
import UprightWalkersDetail from "./pages/UprightWalkersDetail";
import ValentinesDetail from "./pages/ValentinesDetail";
import WalkerWithWheelsDetail from "./pages/WalkerWithWheelsDetail";
import WalkingShoesDetail from "./pages/WalkingShoesDetail";
import ExpertsChoice from "./components/ExpertsChoice";
import Footer from "./components/Footer";
import HelpfulResources from "./components/HelpfulResources";
import HolidaySafetySeniorsDetail from "./pages/HolidaySafetySeniorsDetail";
import HomeFeatures from "./components/HomeFeatures";
import HomeHero from "./components/HomeHero";
import MentalHealthDetail from "./pages/MentalHealthDetail";
import MobilityDevicesDetail from "./pages/MobilityDevicesDetail";
import MobilityGuide from "./components/MobilityGuide";
import Navbar from "./components/Navbar";
import NewWalkerCta from "./components/NewWalkerCta";
import OsteoarthritisFallsDetail from "./pages/OsteoarthritisFallsDetail";
import Newsletter from "./components/Newsletter";
import PerformanceHighlight from "./components/PerformanceHighlight";
import ScrollToTopButton from "./components/ScrollToTopButton";
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
  "/can-heart-issues-increase-fall-risk-in-seniors": BlogDetail,
  "/how-to-choose-walking-shoes-for-balance-and-stability": WalkingShoesDetail,
  "/how-to-use-a-walker-with-wheels": WalkerWithWheelsDetail,
  "/mental-health-in-old-age-a-complete-guide-for-seniors-caregivers": MentalHealthDetail,
  "/best-mobility-devices-for-seniors": MobilityDevicesDetail,
  "/can-osteoarthritis-lead-to-more-falls-in-seniors": OsteoarthritisFallsDetail,
  "/holiday-safety-tips-for-seniors-prevent-falls-fires-seasonal-risks": HolidaySafetySeniorsDetail,
  "/understanding-upright-walkers-how-they-improve-senior-posture": UprightWalkersDetail,
  "/valentines-day-ideas-what-seniors-can-give-each-other": ValentinesDetail,
  "/why-seniors-need-proper-walking-shoes": ProperWalkingShoesDetail,
  "/caregivers-corner": CaregiversCorner,
  "/contact": Contact,
  "/tools": Tools,
};

function App() {
  const Page = routes[window.location.pathname] || Home;

  return (
    <>
      <Page />
      <ScrollToTopButton />
    </>
  );
}

export default App;
