import Hero from "@/components/sections/hero/Hero";
import Clients from "@/components/sections/clients/Clients";
import Features from "@/components/sections/features/Features";
import Guide from "@/components/sections/guide/Guide";
import Joinees from "@/components/sections/joinees/Joinees";
import Pricing from "@/components/sections/pricing/Pricing";
import FrequentlyAskedQuestions from "@/components/sections/faq/FrequentlyAskedQuestions";
import DeveloperCallToAction from "@/components/sections/developer-cta/DeveloperCallToAction";
import PrivateSetup from "@/components/sections/private-setup/PrivateSetup";

const Home = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Guide />
      <Joinees />
      <Pricing />
      <FrequentlyAskedQuestions />
      <DeveloperCallToAction />
      <PrivateSetup />
    </>
  );
};

export default Home;
