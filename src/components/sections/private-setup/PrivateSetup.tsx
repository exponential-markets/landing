import Badge from "@/components/shared/Badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const PrivateSetup = () => {
  return (
    <div id="private-setup" className="mt-24 lg:px-24 xl:px-40">
      <div className="border-2 border-foreground/10 rounded-lg">
        <div className="flex flex-col items-center gap-4 bg-gradient-to-b from-card to-transparent rounded-md p-8">
          <Badge
            icon={<Sparkles className="size-2.5" />}
            text="Private Setup"
          />
          <p className="text-3xl font-medium text-balance text-center md:text-[42px] lg:text-5xl xl:text-6xl">
            Want a private trading setup?
          </p>
          <p className="text-muted-foreground text-balance md:text-pretty text-center xl:w-2/3">
            Join our existing trader groups utilizing our Infra on their servers
            without concerns about international data and financial rules
          </p>
          <Button className="rounded-full">Get Started Today</Button>
        </div>
      </div>
    </div>
  );
};

export default PrivateSetup;
