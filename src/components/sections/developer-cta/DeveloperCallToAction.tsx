import Badge from "@/components/shared/Badge";
import Mockup from "@/components/shared/Mockup";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkle } from "lucide-react";
import DeveloperDashboard from "@/assets/Light Developer Dashboard.png";
import DeveloperIDE from "@/assets/Light Developer IDE.png";
import DeveloperAlgorithms from "@/assets/Light Developer Algorithms.png";

const DeveloperCallToAction = () => {
  return (
    <div
      id="developer-cta"
      className="mt-20 xl:mt-40 flex flex-col gap-4 items-center"
    >
      <Badge
        icon={<Sparkle className="size-4" />}
        text="Let your Code make Money!"
      />
      <div>
        <p className="text-3xl md:text-[42px] lg:text-5xl xl:text-6xl font-medium text-center text-balance">
          <span className="text-primary">Code</span> Algorithms? Get{" "}
          <span className="text-primary">Paid</span>
        </p>
        <p className="mt-4 xl:text-xl text-center text-pretty text-muted-foreground min-[820px]:px-20 lg:px-36 xl:px-64">
          Write Python algorithms with our backtesting engine & helper tools.
          From our IDE, deploy strategies, retain full IP, & earn commissions as
          investors engage!
        </p>
      </div>
      <div className="flex flex-col gap-4 xl:hidden">
        <div className="flex flex-col items-center justify-center md:flex-row gap-4">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base border-2 border-foreground hover:bg-foreground hover:text-background"
          >
            Join Dev Waitlist
            <ArrowUpRight className="size-5 ml-2" />
          </Button>
          <Button size="lg" className="rounded-full text-base">
            Book a Call with Founders
          </Button>
        </div>
        <div className="mt-12 flex flex-col md:grid md:grid-cols-2 xl:hidden gap-6 items-center">
          <Mockup imageSrc={DeveloperDashboard} altText="Developer Dashboard" />
          <Mockup imageSrc={DeveloperIDE} altText="Developer IDE" />
          <div className="col-span-2 flex justify-center">
            <Mockup
              imageSrc={DeveloperAlgorithms}
              altText="Developer Algorithms"
              className="md:w-1/2"
            />
          </div>
        </div>
      </div>
      <div className="hidden xl:grid xl:grid-cols-3 gap-9 -mx-10">
        <Mockup
          imageSrc={DeveloperDashboard}
          altText="Developer Dashboard"
          className="mt-3"
        />
        <div className="flex flex-col gap-14">
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-background"
            >
              Join Dev Waitlist
              <ArrowUpRight className="size-5 ml-2" />
            </Button>
            <Button className="rounded-full">Book a Call with Founders</Button>
          </div>
          <Mockup imageSrc={DeveloperIDE} altText="Developer IDE" />
        </div>
        <Mockup
          imageSrc={DeveloperAlgorithms}
          altText="Developer Algorithms"
          className="mt-3"
        />
      </div>
    </div>
  );
};

export default DeveloperCallToAction;
