import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/hero/Hero";
import Clients from "@/components/sections/clients/Clients";
import Features from "@/components/sections/features/Features";
import Guide from "@/components/sections/guide/Guide";
import Joinees from "@/components/sections/joinees/Joinees";
import Pricing from "@/components/sections/pricing/Pricing";
import FrequentlyAskedQuestions from "@/components/sections/faq/FrequentlyAskedQuestions";
import DeveloperCallToAction from "@/components/sections/developer-cta/DeveloperCallToAction";
import PrivateSetup from "@/components/sections/private-setup/PrivateSetup";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Hero />
        <Clients />
        <Features />
        <Guide />
        <Joinees />
        <Pricing />
        <FrequentlyAskedQuestions />
        <DeveloperCallToAction />
        <PrivateSetup />
      </Layout>
    </Router>
  );
}

export default App;
