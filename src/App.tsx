import DeveloperSection from "./components/developers/DeveloperSection";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import InvestorSection from "./components/investors/InvestorSection";
import Navbar from "./components/navbar/Navbar";
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
    </>
  );
};

export default App;
