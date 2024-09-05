import HeroCallToActions from "./HeroCallToActions";
import HeroText from "./HeroText";
import TrustProofs from "./TrustProofs";
import WaitlistButton from "./WaitlistButton";

const Hero = () => {
  return (
    <div className="mt-24 mx-24">
      <WaitlistButton />
      <HeroText />
      <HeroCallToActions />
      <TrustProofs />
    </div>
  );
};

export default Hero;
