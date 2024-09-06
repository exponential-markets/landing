import DeveloperSection from "./components/developers/DeveloperSection";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import InvestorSection from "./components/investors/InvestorSection";
import Navbar from "./components/navbar/Navbar";
import StickyNavbarTab from "./components/navbar/StickyNavbarTab";
import Pricing from "./components/pricing/Pricing";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <InvestorSection />
      <DeveloperSection />
      <Pricing />
      <Footer />
      <StickyNavbarTab />
    </>
  );
};

export default App;
