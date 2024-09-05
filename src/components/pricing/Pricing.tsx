import { ArrowUpRight, Sparkle } from "lucide-react";
import { Button } from "../ui/button";
import { pricingCardData } from "@/constants/pricings";

const Pricing = () => {
  return (
    <div id="pricing" className="mx-24 mt-32">
      <div className="flex justify-center w-full">
        <h2 className="p-1 w-fit text-4xl text-transparent bg-gradient-to-r from-[#747478] via-white to-[#434345] bg-clip-text">
          Pricing
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-10 mx-10">
        {/* card */}
        {pricingCardData.map((card, index) => (
          <div key={index} className="border p-6 rounded-xl bg-card-gradient">
            <h3 className="text-3xl">{card.title}</h3>
            <div className="flex gap-6 mt-6">
              <div>
                <h4>{card.subtitle}</h4>
                <p className="text-muted-foreground text-sm">
                  {card.subSubtitle}
                </p>
                <div className="flex gap-2 my-5 justify-center items-center">
                  <h3 className="text-3xl">{card.entryFee}</h3>
                  <p className="text-muted-foreground">{card.feeDescription}</p>
                </div>
                <Button className="rounded-full">
                  {card.button.text}
                  <ArrowUpRight size={18} className="ml-2" />
                </Button>
              </div>
              <div className="text-muted-foreground">
                {card.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-2 mb-2 text-sm items-center"
                  >
                    <Sparkle size={16} className="text-white" /> {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
