import Hero from "@/components/sections/hero/Hero";
import Algorithms from "@/components/sections/algorithms/Algorithms";
import Features from "@/components/sections/features/Features";
import Guide from "@/components/sections/guide/Guide";
import Joinees from "@/components/sections/joinees/Joinees";
import FrequentlyAskedQuestions from "@/components/sections/faq/FrequentlyAskedQuestions";
import CallToAction from "@/components/sections/cta/CallToAction";
import PrivateSetup from "@/components/sections/private-setup/PrivateSetup";
import { useLocation } from "react-router-dom";
import { TracingBeam } from "@/components/ui/tracing-beam";

const Home = () => {
  const location = useLocation();
  const isDeveloperPage = location.pathname === "/developer";
  return (
    <>

      <Hero isDeveloperPage={isDeveloperPage} />
      <Algorithms />
      <Features isDeveloperPage={isDeveloperPage} />
      <Guide isDeveloperPage={isDeveloperPage} />
      <Joinees isDeveloperPage={isDeveloperPage} />
      <FrequentlyAskedQuestions isDeveloperPage={isDeveloperPage} />
      <CallToAction isDeveloperPage={isDeveloperPage} />
        <PrivateSetup />
    </>
  );
};

export default Home;
