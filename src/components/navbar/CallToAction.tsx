import { CircleArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="flex items-center justify-center self-baseline hidden md:flex h-full bg-[radial-gradient(50%_50%_at_50%_50%,#171717_0%,#494949_100%)] shadow-[0_0_20px_#FFFFFF,0_0_1px_4px_rgba(255,255,255,0.1),inset_0_-4px_2px_rgba(0,0,0,0.25),inset_0_2px_1px_rgba(255,255,255,0.25)] rounded-full hover:cursor-pointer">
      <div className="flex gap-2 items-center justify-center bg-noise-background px-3 py-1.5 md:px-6 md:py-3">
        <div>Coming Soon</div>
        <CircleArrowRight className="size-5 lg:size-6 -rotate-45" />
      </div>
    </div>
  );
};

export default CallToAction;