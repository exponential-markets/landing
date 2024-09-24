import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Badge from "@/components/shared/Badge";
import { Check, Sparkles } from "lucide-react";
import Mockup from "@/components/shared/Mockup";
import { useTranslation } from "react-i18next";

const Hero = ({ isDeveloperPage }: { isDeveloperPage: boolean }) => {
  const { t } = useTranslation();
  const contentKey = isDeveloperPage ? "developer.hero" : "investor.hero";

  const heroTitleParts = t(`${contentKey}.title`, {
    returnObjects: true,
  }) as { text: string; className: string }[];

  const features = t(`${contentKey}.features`, {
    returnObjects: true,
  }) as string[];

  return (
    <div
      id="home"
      className="flex flex-col items-center bg-grid-white/[0.03] relative"
    >
      <div className="z-10 mt-[134px] md:mt-[156px]">
        <Badge icon={<Sparkles className="size-2.5" />} text="MVP is Live!" />
      </div>
      <div className="text-center text-4xl md:text-6xl xl:text-7xl md:leading-[1.2] font-semibold text-balance z-10">
        <div className="lg:w-2/3 mx-auto">
          {heroTitleParts.map((part, index) => (
            <span key={index} className={part.className}>
              {part.text}
            </span>
          ))}
        </div>
        <p className="text-base mt-4 font-normal text-white/70">
          {t(`${contentKey}.description`)}
        </p>
      </div>
      <div className="mt-8 w-full bg-background md:w-1/2 xl:w-1/3 flex border rounded-xl p-2 z-20">
        <Input placeholder="example@gmail.com" className="border-0" />
        <Button className="">Request Early Access</Button>
      </div>
      <div className="relative z-10">
        <div className="mt-4 flex gap-6 justify-center">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="w-full h-1/2 right-1/2 translate-x-1/2 absolute top-8 md:-top-6 lg:-top-10 xl:-top-8 bg-hero-gradient opacity-30"></div>
        <Mockup
          imageSrc={t(`${contentKey}.mockup`)}
          altText="hero-image"
          className="mt-16 mx-11 xl:mt-28 xl:mx-52"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_60%,black_80%)]"></div>
    </div>
  );
};

export default Hero;
