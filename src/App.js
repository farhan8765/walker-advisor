import "./App.css";
import { useEffect } from "react";
import AboutUs from "./pages/AboutUs";
import AmirAbbasi from "./pages/AmirAbbasi";
import Robin from "./pages/Robin";
import Ali from "./pages/Ali";
import AmazonReturnsDetail from "./pages/AmazonReturnsDetail";
import AmazonShoppingHackDetail from "./pages/AmazonShoppingHackDetail";
import Articles from "./pages/Articles";
import BestPlacesBuyWalkersDetail from "./pages/BestPlacesBuyWalkersDetail";
import BestWalkingShoesSeniorsDetail from "./pages/BestWalkingShoesSeniorsDetail";
import BestUprightWalkersOutdoorDetail from "./pages/BestUprightWalkersOutdoorDetail";
import BlogDetail from "./pages/BlogDetail";
import BuyingWalkerDetail from "./pages/BuyingWalkerDetail";
import CaregiversCorner from "./pages/CaregiversCorner";
import CaneSideEffectsDetail from "./pages/CaneSideEffectsDetail";
import Contact from "./pages/Contact";
import Cookies from "./pages/Cookies";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ProperWalkingShoesDetail from "./pages/ProperWalkingShoesDetail";
import ReplacementWalkerHandGripsDetail from "./pages/ReplacementWalkerHandGripsDetail";
import AdjustWalkerHeightDetail from "./pages/AdjustWalkerHeightDetail";
import CaregiversGuideWalkerDetail from "./pages/CaregiversGuideWalkerDetail";
import EmergencyPreparednessDetail from "./pages/EmergencyPreparednessDetail";
import ElenkerVsNovaLegacyDetail from "./pages/ElenkerVsNovaLegacyDetail";
import FittingWalkerDetail from "./pages/FittingWalkerDetail";
import FoodsSeniorsAvoidDetail from "./pages/FoodsSeniorsAvoidDetail";
import GiftsForSeniorsUnder20Detail from "./pages/GiftsForSeniorsUnder20Detail";
import MustHaveWalkerAccessoriesDetail from "./pages/MustHaveWalkerAccessoriesDetail";
import SupportiveGripsDetail from "./pages/SupportiveGripsDetail";
import TransitionWalkerIndependentDetail from "./pages/TransitionWalkerIndependentDetail";
import Tools from "./pages/Tools";
import TravelWithWalkerDetail from "./pages/TravelWithWalkerDetail";
import TravelWalkersComparisonDetail from "./pages/TravelWalkersComparisonDetail";
import UprightWalkersDetail from "./pages/UprightWalkersDetail";
import UprightWalkersComparisonDetail from "./pages/UprightWalkersComparisonDetail";
import ValentinesDetail from "./pages/ValentinesDetail";
import WalkerRollatorTypesDetail from "./pages/WalkerRollatorTypesDetail";
import WalkerSafetyFeaturesDetail from "./pages/WalkerSafetyFeaturesDetail";
import WalkerStairsSafetyDetail from "./pages/WalkerStairsSafetyDetail";
import WalkerWeatherSafetyDetail from "./pages/WalkerWeatherSafetyDetail";
import WalkerWithWheelsDetail from "./pages/WalkerWithWheelsDetail";
import WalkersWithSeatsComparisonDetail from "./pages/WalkersWithSeatsComparisonDetail";
import WalkingShoesDetail from "./pages/WalkingShoesDetail";
import ExpertsChoice from "./components/ExpertsChoice";
import Footer from "./components/Footer";
import HelpfulResources from "./components/HelpfulResources";
import HolidaySafetySeniorsDetail from "./pages/HolidaySafetySeniorsDetail";
import HolidayWalkerSafetyDetail from "./pages/HolidayWalkerSafetyDetail";
import HolidayGiftsSeniorsDetail from "./pages/HolidayGiftsSeniorsDetail";
import HeavyDutyObeseWalkersDetail from "./pages/HeavyDutyObeseWalkersDetail";
import HeavyDutyTallWalkersDetail from "./pages/HeavyDutyTallWalkersDetail";
import CompactWalkersDetail from "./pages/CompactWalkersDetail";
import ChristmasGiftsElderlyLadiesDetail from "./pages/ChristmasGiftsElderlyLadiesDetail";
import ChristmasGiftsSeniorsAmazonDetail from "./pages/ChristmasGiftsSeniorsAmazonDetail";
import ValentinesGiftIdeasDetail from "./pages/ValentinesGiftIdeasDetail";
import HomeFeatures from "./components/HomeFeatures";
import HomeHero from "./components/HomeHero";
import LargeWheelWalkerTipsDetail from "./pages/LargeWheelWalkerTipsDetail";
import MedicareWalkerCoverageDetail from "./pages/MedicareWalkerCoverageDetail";
import MentalHealthDetail from "./pages/MentalHealthDetail";
import MobilityDevicesDetail from "./pages/MobilityDevicesDetail";
import MobilityGuide from "./components/MobilityGuide";
import Navbar from "./components/Navbar";
import NewWalkerCta from "./components/NewWalkerCta";
import OsteoarthritisFallsDetail from "./pages/OsteoarthritisFallsDetail";
import Newsletter from "./components/Newsletter";
import PerformanceHighlight from "./components/PerformanceHighlight";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SmallHomeWalkerDetail from "./pages/SmallHomeWalkerDetail";
import SmallWalkersDetail from "./pages/SmallWalkersDetail";
// import ToolShowcase from "./components/ToolShowcase";
import SocialActivitiesOlderAdultsDetail from "./pages/SocialActivitiesOlderAdultsDetail";
import WalkerChoices from "./components/WalkerChoices";
import WalkerInsightsPromo from "./components/WalkerInsightsPromo";
import { applyRouteDocumentSeo } from "./seo/siteDocument";
import { normalizeRoutePath, toBrowserPath } from "./seo/pathUtils";
import WalkerMistakesDetail from "./pages/WalkerMistakesDetail";

function Home() {
  return (
    <div className="w-full min-w-0 max-w-full overflow-x-hidden">
      <Navbar />
      <HomeHero />
      <HomeFeatures />
      <ExpertsChoice />
      <MobilityGuide />
      {/* <ToolShowcase /> */}
      <NewWalkerCta />
      <WalkerChoices />
      <WalkerInsightsPromo />
      <HelpfulResources />
      <PerformanceHighlight />
      <Newsletter />
      <Footer />
  </div>
  );
}

const routes = {
  "/": Home,
  "/about-us": AboutUs,
  "/author-amir-abbasi": AmirAbbasi,
  "/author-robin-dolan": Robin,
  "/author-syed-ali": Ali,
  "/free-amazon-returns-guide": AmazonReturnsDetail,
  "/the-secret-amazon-shopping-hack-to-get-a-deal-on-just-about-anything": AmazonShoppingHackDetail,
  "/how-to-travel-with-a-walker": TravelWithWalkerDetail,
  "/best-travel-walkers-for-seniors-2025": TravelWalkersComparisonDetail,
  "/articles": Articles,
  "/can-heart-issues-increase-fall-risk-in-seniors": BlogDetail,
  "/how-to-choose-walking-shoes-for-balance-and-stability": WalkingShoesDetail,
  "/how-to-use-a-walker-with-wheels": WalkerWithWheelsDetail,
  "/mental-health-in-old-age": MentalHealthDetail,
  "/best-mobility-devices-for-seniors": MobilityDevicesDetail,
  "/can-osteoarthritis-lead-to-more-falls-in-seniors": OsteoarthritisFallsDetail,
  "/holiday-safety-tips-for-seniors": HolidaySafetySeniorsDetail,
  "/holiday-safety-tips-seniors-using-walkers": HolidayWalkerSafetyDetail,
  "/best-holiday-gifts-for-seniors-who-have-everything": HolidayGiftsSeniorsDetail,
  "/best-walking-shoes-for-seniors-2026": BestWalkingShoesSeniorsDetail,
  "/best-upright-walkers-for-outdoor-use-2025": BestUprightWalkersOutdoorDetail,
  "/5-best-upright-walkers-for-seniors-find-the-right-one": UprightWalkersComparisonDetail,
  "/best-heavy-duty-walkers-for-obese-seniors": HeavyDutyObeseWalkersDetail,
  "/heavy-duty-walkers-for-tall-people": HeavyDutyTallWalkersDetail,
  "/compact-walkers-for-seniors": CompactWalkersDetail,
  "/elenker-vs-nova-upright-walkers-2025": ElenkerVsNovaLegacyDetail,
  "/christmas-gift-ideas-for-elderly-ladies-december-2025": ChristmasGiftsElderlyLadiesDetail,
  "/16-best-christmas-gifts-for-seniors-amazon-2025": ChristmasGiftsSeniorsAmazonDetail,
  "/inexpensive-christmas-gift-ideas-for-senior-citizens": GiftsForSeniorsUnder20Detail,
  "/3-foods-seniors-should-avoid": FoodsSeniorsAvoidDetail,
  "/social-activities-for-older-adults": SocialActivitiesOlderAdultsDetail,
  "/valentines-day-gift-ideas-for-seniors": ValentinesGiftIdeasDetail,
  "/the-side-effects-of-using-a-cane": CaneSideEffectsDetail,
  "/senior-safety-how-to-use-a-walker-on-stairs": WalkerStairsSafetyDetail,
  "/understanding-upright-walkers-senior-posture": UprightWalkersDetail,
  "/valentines-day-ideas": ValentinesDetail,
  "/why-seniors-need-proper-walking-shoes": ProperWalkingShoesDetail,
  "/replacement-walker-hand-grips-for-all-kinds-of-walkers": ReplacementWalkerHandGripsDetail,
  "/an-easy-guide-on-how-to-fit-a-walker-for-seniors": FittingWalkerDetail,
  "/must-have-walker-accessories-to-make-life-easier-and-safer": MustHaveWalkerAccessoriesDetail,
  "/emergency-preparedness-for-walker-users": EmergencyPreparednessDetail,
  "/how-to-adjust-a-walker-to-the-correct-height": AdjustWalkerHeightDetail,
  "/how-to-transition-from-a-walker-to-walking-independently": TransitionWalkerIndependentDetail,
  "/caregivers-guide-to-senior-walker-selection-and-usage": CaregiversGuideWalkerDetail,
  "/how-do-supportive-grips-on-walkers-help-seniors-with-mobility": SupportiveGripsDetail,
  "/types-of-medical-walkers-and-rollators-a-comprehensive-guide": WalkerRollatorTypesDetail,
  "/tips-for-choosing-and-using-walkers-a-comprehensive-guide": BuyingWalkerDetail,
  "/walker-safety-tips-for-all-weather-conditions": WalkerWeatherSafetyDetail,
  "/important-safety-features-walkers-for-seniors": WalkerSafetyFeaturesDetail,
  "/how-to-use-walker-large-wheels-seniors-safely": LargeWheelWalkerTipsDetail,
  "/does-medicare-pay-for-walkers-for-seniors": MedicareWalkerCoverageDetail,
  "/what-is-the-proper-way-to-use-a-walker": WalkerMistakesDetail,
  "/where-to-buy-walkers-for-seniors-top-brands-reviews": BestPlacesBuyWalkersDetail,
  "/tips-using-walker-small-homes": SmallHomeWalkerDetail,
  "/best-small-walkers-for-seniors-top-4-options": SmallWalkersDetail,
  "/best-4-wheel-walkers-with-seats": WalkersWithSeatsComparisonDetail,
  "/caregivers-corner": CaregiversCorner,
  "/contact-us": Contact,
  "/cookies": Cookies,
  "/disclaimer": Disclaimer,
  "/privacy-policy": PrivacyPolicy,
  "/terms-and-conditions": TermsConditions,
  "/best-tools": Tools,
};

function App() {
  useEffect(() => {
    const browserPath = toBrowserPath(window.location.pathname);
    const suffix = window.location.search + window.location.hash;
    if (window.location.pathname !== browserPath) {
      window.history.replaceState(null, '', browserPath + suffix);
    }
    const path = normalizeRoutePath(window.location.pathname);
    applyRouteDocumentSeo(path);
    const timer = setTimeout(() => applyRouteDocumentSeo(path), 0);
    return () => clearTimeout(timer);
  }, []);

  const Page = routes[normalizeRoutePath(window.location.pathname)] || Home;

  return (
    <>
      <Page />
      <ScrollToTopButton />
    </>
  );
}

export default App;
