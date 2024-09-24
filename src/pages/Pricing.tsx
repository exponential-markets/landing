import Badge from "@/components/shared/Badge";
import PricingCard from "@/components/shared/PricingCard";
import { cn } from "@/lib/utils";
import { PricingPlan } from "@/types";
import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();
  const pricing = t("pricing.plans", { returnObjects: true }) as PricingPlan[];

  return (
    <>
      <div
        id="pricing"
        className="mt-28 md:px-20 min-[820px]:px-0 flex flex-col gap-4 items-center"
      >
        <Badge icon={<Sparkles className="size-2.5" />} text="PRICING" />
        <p className="text-3xl md:text-[42px] font-medium lg:text-6xl xl:text-7xl min-[820px]:w-1/2 text-center">
          {t("pricing.title")}
        </p>
        <div className="mt-20 xl:px-16 grid grid-cols-1 min-[820px]:grid-cols-2 xl:grid-cols-3 justify-center gap-6">
          {pricing.map((plan, index) => (
            <div
              className={cn(
                index == pricing.length - 1
                  ? "min-[820px]:col-span-2 xl:col-span-1 flex justify-center"
                  : ""
              )}
            >
              <PricingCard
                key={plan.name}
                data={plan}
                className={cn(
                  index == pricing.length - 1 && "min-[820px]:w-1/2 xl:w-full"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
