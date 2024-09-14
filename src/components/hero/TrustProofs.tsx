import { Sparkle } from "lucide-react";
import janeStreetLogo from "../../assets/jane street logo.png";
import quadeyeLogo from "../../assets/quadeye logo.png";
import gravitonLogo from "../../assets/graviton logo.png";

const TrustProofs = () => {
  return (
    <div className="mt-10 xl:mt-20">
      <div className="flex gap-1 justify-center min-[820px]:justify-normal">
        <h3 className="text-xl">Algorithm Developers from</h3>
        <Sparkle size={20} className="-mt-2 rotate-12" />
      </div>
      <div className="flex gap-4 mt-4 justify-center min-[820px]:justify-normal">
        <img src={janeStreetLogo} alt="Logo" className="h-6 lg:h-10" />
        <img src={quadeyeLogo} alt="Logo" className="h-6 lg:h-10" />
        <img src={gravitonLogo} alt="Logo" className="h-6 lg:h-10" />
      </div>
    </div>
  );
};

export default TrustProofs;
