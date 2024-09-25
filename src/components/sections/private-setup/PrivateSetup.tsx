import { Button } from "@/components/ui/button";

const PrivateSetup = () => {
  return (
    <div id="private-setup" className="mt-24 flex justify-center">
      <div className="border-2 max-w-[960px] border-foreground/10 rounded-lg">
        <div className="flex flex-col items-center gap-4 bg-gradient-to-b from-card to-transparent rounded-md p-6 md:p-20">
          <p className="text-3xl font-medium text-balance text-center md:text-[42px] lg:text-5xl xl:text-6xl">
            Want a private trading setup?
          </p>
          <p className="text-muted-foreground text-balance md:text-pretty text-center max-w-[600px]">
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
