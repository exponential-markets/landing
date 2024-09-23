import Badge from "@/components/shared/Badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const PrivateSetup = () => {
  return (
    <div
      id="private-setup"
      className="py-20 md:px-32 min-[820px]:px-40 lg:px-64 xl:px-60"
    >
      <div className="flex flex-col items-center gap-4 bg-secondary border rounded-lg p-8">
        <Badge icon={<Sparkles className="size-4" />} text="Private Setup" />
        <p className="text-3xl font-medium text-balance text-center xl:text-4xl">
          Want a private trading setup?
        </p>
        <p className="text-lg text-muted-foreground text-balance text-center">
          Join thousands of people worldwide who trust Exponential to simplify
          their project workflows and drive success.
        </p>
        <Button className="rounded-full">Get Started Today</Button>
      </div>
    </div>
  );
};

export default PrivateSetup;
