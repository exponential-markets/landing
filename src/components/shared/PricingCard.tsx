import WaitlistButton from "@/components/shared/WaitlistButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { PricingPlan } from "@/types";
import { scheduleCall } from "@/lib/cta";

const PricingCard = ({
  data,
  className,
}: {
  data: PricingPlan;
  className: string;
}) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="text-center text-2xl">{data.name}</div>
      <div
        className={cn(
          "flex flex-col justify-between w-full h-full mt-2 px-8 pb-8 pt-4 bg-card rounded-lg relative overflow-hidden",
          className
        )}
      >
        <div className="w-4/5 h-[24px] blur-[45px] -top-4 bg-pricing-card-gradient absolute left-1/2 -translate-x-1/2"></div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground">{data.description}</p>
          </div>
          <div className="flex justify-between">
            <p>
              <span className="text-primary text-5xl font-bold">
                {data.price}
              </span>{" "}
              {data.price === "$0" ? "/ per month" : ""}
            </p>
            {data.earn && (
              <p className="text-foreground font-bold text-balance w-1/3">
                {data.earn}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            {data.features.map((feature) => (
              <div className="flex items-center gap-2">
                <Check className="size-5 text-primary" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          {data.name.toLowerCase() != "enterprise" ? (
            data.cta.type === "primary" ? (
              <WaitlistButton
                buttonText={data.cta.text}
                role={data.name.toLowerCase()}
                showIcon={false}
                className="w-full rounded-full text-base"
              />
            ) : (
              <WaitlistButton
                buttonText={data.cta.text}
                role={data.name.toLowerCase()}
                showIcon={false}
                variant="outline"
                className="w-full text-base rounded-full border-2 border-foreground hover:text-background hover:bg-foreground"
              />
            )
          ) : (
            <Button
              onClick={scheduleCall}
              variant="outline"
              className="w-full text-base rounded-full border-2 border-foreground hover:text-background hover:bg-foreground"
            >
              Reach Out
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
