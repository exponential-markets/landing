import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Button } from "../ui/button";

const HeroCallToActions = () => {
  return (
    <div className="mt-8 flex gap-6">
      <Button className="py-4 rounded-full flex gap-2 justify-center items-center">
        Join the Waitlist <ArrowUpRight size={18} />
      </Button>
      <Button className="bg-[#393939] hover:bg-[#393939] text-foreground py-4 rounded-full flex gap-2 justify-center items-center">
        See How It Works <CirclePlay size={18} />
      </Button>
    </div>
  );
};

export default HeroCallToActions;
