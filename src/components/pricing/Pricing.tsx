import { ArrowUpRight, Sparkle } from "lucide-react";
import { Button } from "../ui/button";
import { pricingCardData } from "@/constants/pricings";
import { cn } from "@/lib/utils";

const Pricing = () => {
  return (
    <div id="pricing" className="lg:mx-12 xl:mx-24 mt-16 xl:mt-32">
      <div className="flex justify-center w-full">
        <h2 className="p-1 w-fit text-4xl text-transparent bg-gradient-to-r from-[#747478] via-white to-[#434345] bg-clip-text">
          Pricing
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 xl:mt-10 xl:mx-10">
        {pricingCardData.map((card, index) => (
          <div key={index} className="border p-6 rounded-xl bg-card-gradient">
            <h3 className="text-3xl">{card.title}</h3>
            <div className="lg:flex gap-6 mt-6">
              <div className="flex flex-col justify-between lg:w-1/2">
                <div>
                  <h4
                    className={
                      card.subSubtitle ? "" : "text-2xl text-muted-foreground"
                    }
                  >
                    {card.subtitle}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {card.subSubtitle}
                  </p>
                  <div
                    className={cn(
                      "flex gap-2 lg:justify-center items-center",
                      card.subSubtitle && "mt-5"
                    )}
                  >
                    <h3 className="text-3xl">{card.entryFee}</h3>
                    <p className="text-muted-foreground">
                      {card.feeDescription}
                    </p>
                  </div>
                </div>
                <Button className="rounded-full mt-2 mb-4 lg:m-0">
                  {card.button.text}
                  <ArrowUpRight size={18} className="ml-2" />
                </Button>
              </div>
              <div className="text-muted-foreground lg:w-1/2">
                {card.features.map((feature, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex gap-2 text-sm items-center",
                      index != card.features.length - 1 && "mb-2"
                    )}
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
