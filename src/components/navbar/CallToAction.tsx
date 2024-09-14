import { CircleArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="flex items-center justify-center self-baseline md:flex h-full bg-continue-button-background shadow-continue-button-shadow rounded-full hover:cursor-wait">
      <div className="flex gap-2 items-center justify-center bg-noise-background px-3 py-1.5 md:px-6 md:py-3">
        <div>Coming Soon</div>
        <CircleArrowRight className="size-5 lg:size-6 -rotate-45" />
      </div>
    </div>
  );
};

export default CallToAction;
