import { Chart } from "./Chart";
import HeroCallToActions from "./HeroCallToActions";
import HeroText from "./HeroText";
import TrustProofs from "./TrustProofs";
import WaitlistButton from "./WaitlistButton";

const Hero = () => {
  return (
    <div className="mt-24 mx-24">
      <div className="grid grid-cols-2 gap-32">
        <div>
          <WaitlistButton />
          <HeroText />
          <HeroCallToActions />
          <TrustProofs />
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default Hero;
