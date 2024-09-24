import Badge from "@/components/shared/Badge";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="mt-28 md:px-20 lg:px-36 xl:px-80 flex flex-col gap-4 items-center"
    >
      <Badge icon={<Sparkles className="size-2.5" />} text="PRICING" />
      <p className="text-3xl md:text-[42px] font-medium lg:text-5xl xl:text-6xl">
        Pricing
      </p>
      <div className="flex flex-col gap-4 xl:gap-6 w-full mt-10 xl:mt-20 p-8 bg-card rounded-lg relative overflow-hidden">
        <div className="w-4/5 h-[24px] blur-[45px] -top-4 bg-pricing-card-gradient absolute left-1/2 -translate-x-1/2"></div>
        <div className="flex flex-col gap-2">
          <p className="text-xl">Forever Free</p>
          <p className="text-muted-foreground">
            Join waitlist to claim while it lasts
          </p>
        </div>
        <p>
          <span className="text-primary text-5xl font-bold">$0</span> / per
          month
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Check className="size-5 text-primary" />
            <p>Access to all strategies</p>
          </div>
          <div className="flex items-center gap-2">
            <Check className="size-5 text-primary" />
            <p>Enter/Exit 24/7</p>
          </div>
          <div className="flex items-center gap-2">
            <Check className="size-5 text-primary" />
            <p>All transactions on-chain</p>
          </div>
          <div className="flex items-center gap-2">
            <Check className="size-5 text-primary" />
            <p>Chat with Founders anytime</p>
          </div>
          <div className="flex items-center gap-2">
            <Check className="size-5 text-primary" />
            <p>Wallet Integration</p>
          </div>
          <div className="flex items-center gap-2">
            <Check className="size-5 text-primary" />
            <p>Early Entry to Potential Token Airdrop</p>
          </div>
          <div className="flex items-center gap-2">
            <Check className="size-5 text-primary" />
            <p>Pay 25% (of profit) Fee only on Profits</p>
          </div>
        </div>
        <Button className="mt-10 rounded-full">Discover More</Button>
      </div>
    </div>
  );
};

export default Pricing;
