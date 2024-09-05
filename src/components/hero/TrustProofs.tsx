import { Sparkle } from "lucide-react";
import janeStreetLogo from "../../assets/jane street logo.png";
import optiverLogo from "../../assets/optiver logo.png";
import quadeyeLogo from "../../assets/quadeye logo.png";
import gravitonLogo from "../../assets/graviton logo.png";

const TrustProofs = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-1">
        <h3 className="text-xl">Algorithm Developers from</h3>
        <Sparkle size={20} className="-mt-2 rotate-12" />
      </div>
      <div className="flex gap-4 mt-4">
        <img src={janeStreetLogo} alt="Logo" className="h-10" />
        <img src={optiverLogo} alt="Logo" className="h-10" />
        <img src={quadeyeLogo} alt="Logo" className="h-10" />
        <img src={gravitonLogo} alt="Logo" className="h-10" />
      </div>
    </div>
  );
};

export default TrustProofs;
