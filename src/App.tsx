import Hero from "./components/hero/Hero";
import InvestorSection from "./components/investors/InvestorSection";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <InvestorSection />
    </div>
  );
};

export default App;
