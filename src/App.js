import "./App.css";
import { useLayoutEffect } from "react";
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
import FittingWalkerDetail from "./pages/FittingWalkerDetail";
import FoodsSeniorsAvoidDetail from "./pages/FoodsSeniorsAvoidDetail";
import GiftsForSeniorsUnder20Detail from "./pages/GiftsForSeniorsUnder20Detail";
import MustHaveWalkerAccessoriesDetail from "./pages/MustHaveWalkerAccessoriesDetail";
import SupportiveGripsDetail from "./pages/SupportiveGripsDetail";
import TransitionWalkerIndependentDetail from "./pages/TransitionWalkerIndependentDetail";
import WalmartWalkerGripsDetail from "./pages/WalmartWalkerGripsDetail";
import Tools from "./pages/Tools";
import TravelWithWalkerDetail from "./pages/TravelWithWalkerDetail";
import UprightWalkersDetail from "./pages/UprightWalkersDetail";
import ValentinesDetail from "./pages/ValentinesDetail";
import WalkerRollatorTypesDetail from "./pages/WalkerRollatorTypesDetail";
import WalkerSafetyFeaturesDetail from "./pages/WalkerSafetyFeaturesDetail";
import WalkerStairsSafetyDetail from "./pages/WalkerStairsSafetyDetail";
import WalkerWeatherSafetyDetail from "./pages/WalkerWeatherSafetyDetail";
import WalkerWithWheelsDetail from "./pages/WalkerWithWheelsDetail";
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
import { applyHomePageDocumentSeo, setCanonicalToCurrentPath } from "./seo/siteDocument";
import WalkerMistakesDetail from "./pages/WalkerMistakesDetail";

function Home() {
  useLayoutEffect(() => {
    applyHomePageDocumentSeo();
  }, []);

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
  "/amir-abbasi": AmirAbbasi,
  "/robin-dolan": Robin,
  "/syed-ali": Ali,
  "/every-way-to-return-amazon-orders-for-free": AmazonReturnsDetail,
  "/the-secret-amazon-shopping-hack-to-get-a-deal-on-just-about-anything": AmazonShoppingHackDetail,
  "/how-to-travel-with-a-walker-tips-for-seniors": TravelWithWalkerDetail,
  "/articles": Articles,
  "/can-heart-issues-increase-fall-risk-in-seniors": BlogDetail,
  "/how-to-choose-walking-shoes-for-balance-and-stability": WalkingShoesDetail,
  "/how-to-use-a-walker-with-wheels": WalkerWithWheelsDetail,
  "/mental-health-in-old-age-a-complete-guide-for-seniors-caregivers": MentalHealthDetail,
  "/best-mobility-devices-for-seniors": MobilityDevicesDetail,
  "/can-osteoarthritis-lead-to-more-falls-in-seniors": OsteoarthritisFallsDetail,
  "/holiday-safety-tips-for-seniors-prevent-falls-fires-seasonal-risks": HolidaySafetySeniorsDetail,
  "/holiday-safety-tips-for-seniors-using-walkers": HolidayWalkerSafetyDetail,
  "/the-best-holiday-gifts-for-seniors-who-have-everything": HolidayGiftsSeniorsDetail,
  "/best-walking-shoes-for-seniors-in-2026": BestWalkingShoesSeniorsDetail,
  "/best-upright-walkers-for-outdoor-use-top-5-picks-from-amazon-2026-edition": BestUprightWalkersOutdoorDetail,
  "/best-heavy-duty-walkers-for-obese-seniors-top-5-picks-for-2026": HeavyDutyObeseWalkersDetail,
  "/heavy-duty-walkers-for-tall-people-top-picks": HeavyDutyTallWalkersDetail,
  "/compact-walkers-for-seniors-a-comprehensive-guide": CompactWalkersDetail,
  "/christmas-gift-ideas-for-elderly-ladies-this-december-2026": ChristmasGiftsElderlyLadiesDetail,
  "/20-thoughtful-inexpensive-christmas-gift-ideas-for-senior-citizens-under-20": GiftsForSeniorsUnder20Detail,
  "/3-foods-for-seniors-to-avoid": FoodsSeniorsAvoidDetail,
  "/social-activities-for-older-adults-the-best-ways-to-stay-connected-active-and-happy": SocialActivitiesOlderAdultsDetail,
  "/valentines-day-gift-ideas-for-seniors-to-give-to-each-other": ValentinesGiftIdeasDetail,
  "/the-side-effects-of-using-a-cane": CaneSideEffectsDetail,
  "/senior-safety-how-to-use-a-walker-on-stairs": WalkerStairsSafetyDetail,
  "/understanding-upright-walkers-how-they-improve-senior-posture": UprightWalkersDetail,
  "/valentines-day-ideas-what-seniors-can-give-each-other": ValentinesDetail,
  "/why-seniors-need-proper-walking-shoes": ProperWalkingShoesDetail,
  "/replacement-walker-hand-grips-for-all-kinds-of-walkers": ReplacementWalkerHandGripsDetail,
  "/replacement-walker-hand-grips-for-all-sizes-at-walmart": WalmartWalkerGripsDetail,
  "/stop-the-struggle-the-ultimate-easy-guide-to-fitting-a-walker-for-seniors": FittingWalkerDetail,
  "/must-have-walker-accessories-to-make-life-easier-and-safer": MustHaveWalkerAccessoriesDetail,
  "/emergency-preparedness-for-walker-users-top-medical-alert-devices-smart-tech": EmergencyPreparednessDetail,
  "/how-to-adjust-a-walker-to-the-correct-height-a-safety-checklist": AdjustWalkerHeightDetail,
  "/how-to-transition-from-a-walker-to-walking-independently": TransitionWalkerIndependentDetail,
  "/caregivers-guide-to-helping-seniors-pick-and-use-the-perfect-walker": CaregiversGuideWalkerDetail,
  "/how-do-supportive-grips-on-walkers-help-seniors-with-mobility": SupportiveGripsDetail,
  "/the-complete-guide-to-walker-and-rollator-types-which-one-fits-you-best": WalkerRollatorTypesDetail,
  "/buying-a-walker-dont-make-a-move-until-you-read-this": BuyingWalkerDetail,
  "/rain-snow-or-shine-how-to-stay-safe-with-your-walker": WalkerWeatherSafetyDetail,
  "/the-must-have-walker-safety-features-every-senior-should-know-about": WalkerSafetyFeaturesDetail,
  "/got-a-walker-with-large-wheels-try-these-game-changing-tips-for-seniors": LargeWheelWalkerTipsDetail,
  "/will-medicare-really-pay-for-your-walker-the-truth-every-senior-should-know": MedicareWalkerCoverageDetail,
  "/most-people-use-walkers-wrong-are-you-making-these-mistakes": WalkerMistakesDetail,
  "/the-7-best-places-to-buy-walkers-for-seniors": BestPlacesBuyWalkersDetail,
  "/struggling-with-a-walker-in-a-small-home-try-these-space-saving-hacks": SmallHomeWalkerDetail,
  "/best-small-walkers-for-seniors-top-4-options": SmallWalkersDetail,
  "/caregivers-corner": CaregiversCorner,
  "/contact": Contact,
  "/cookies-policy": Cookies,
  "/disclaimer": Disclaimer,
  "/privacy-policy": PrivacyPolicy,
  "/terms-and-conditions": TermsConditions,
  "/tools": Tools,
};

function App() {
  useLayoutEffect(() => {
    setCanonicalToCurrentPath();
  }, []);

  const Page = routes[window.location.pathname] || Home;

  return (
    <>
      <Page />
      <ScrollToTopButton />
    </>
  );
}

export default App;
