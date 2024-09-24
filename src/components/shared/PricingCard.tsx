import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PricingPlan } from "@/types";
import { Check } from "lucide-react";

const PricingCard = ({
  data,
  className,
}: {
  data: PricingPlan;
  className: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-between w-full h-full p-8 bg-card rounded-lg relative overflow-hidden",
        className
      )}
    >
      <div className="w-4/5 h-[24px] blur-[45px] -top-4 bg-pricing-card-gradient absolute left-1/2 -translate-x-1/2"></div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-xl">{data.name}</p>
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
            <p className="text-muted-foreground text-balance w-1/3">
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
      {data.cta.type === "primary" ? (
        <Button size="lg" className="mt-10 text-base rounded-full">
          {data.cta.text}
        </Button>
      ) : (
        <Button
          className="mt-10 text-base rounded-full border-2 border-foreground hover:text-background hover:bg-foreground"
          size="lg"
          variant="outline"
        >
          {data.cta.text}
        </Button>
      )}
    </div>
  );
};

export default PricingCard;
