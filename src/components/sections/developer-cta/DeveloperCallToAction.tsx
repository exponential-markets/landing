import Badge from "@/components/shared/Badge";
import Mockup from "@/components/shared/Mockup";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkle } from "lucide-react";
import DeveloperDashboard from "@/assets/Light Developer Dashboard.png";
import DeveloperIDE from "@/assets/Light Developer IDE.png";
import DeveloperAlgorithms from "@/assets/Light Developer Algorithms.png";

const DeveloperCallToAction = () => {
  return (
    <div id="developer-cta" className="mt-20 flex flex-col gap-4 items-center">
      <Badge
        icon={<Sparkle className="size-4" />}
        text="Let your Code make Money!"
      />
      <div>
        <p className="text-3xl font-medium text-center text-balance">
          <span className="text-primary">Code</span> Algorithms? <br />
          Get <span className="text-primary">Paid</span>
        </p>
        <p className="mt-4 text-lg text-center text-pretty text-muted-foreground lg:px-36 xl:px-80">
          Write Python algorithms with our backtesting engine & helper tools.
          From our IDE, deploy strategies, retain full IP, & earn commissions as
          investors engage!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Button variant="outline" className="rounded-full">
          Join Developer Waitlist
          <ArrowUpRight className="size-4 ml-2" />
        </Button>
        <Button className="rounded-full">Book a Call with Founders</Button>
      </div>
      <div className="mt-12 flex flex-col xl:hidden gap-4 items-center">
        <Mockup imageSrc={DeveloperDashboard} altText="Developer Dashboard" />
        <Mockup imageSrc={DeveloperIDE} altText="Developer IDE" />
        <Mockup imageSrc={DeveloperAlgorithms} altText="Developer Algorithms" />
      </div>
    </div>
  );
};

export default DeveloperCallToAction;
