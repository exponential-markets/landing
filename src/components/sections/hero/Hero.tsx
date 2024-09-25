import Badge from "@/components/shared/Badge";
import Mockup from "@/components/shared/Mockup";
import HackerText from "@/components/shared/HackerText";
import WaitlistInput from "@/components/shared/WaitlistInput";
import { Check, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = ({ isDeveloperPage }: { isDeveloperPage: boolean }) => {
  const { t } = useTranslation();
  const role = isDeveloperPage ? "developer" : "investor";
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
      className="flex flex-col items-center bg-grid-white/[0.035] relative"
    >
      <div className="z-10 mt-36">
        <Badge
          icon={<Sparkles className="size-2" />}
          text="Early Access is Live!"
        />
      </div>
      <div className="text-center flex flex-col items-center text-4xl md:text-6xl xl:text-7xl font-medium text-balance z-10">
        <div className="lg:w-2/3 mx-auto md:leading-[1.2] text-pretty">
          {heroTitleParts.map((part, index) => (
            <span key={index} className={part.className}>
              {part.text.toLowerCase() == " algorithms" ? (
                <HackerText text={part.text} />
              ) : (
                part.text
              )}
            </span>
          ))}
        </div>
        <p className="text-base text-pretty leading-[1.8] mt-4 font-normal text-white/70 min-w-[350px] max-w-[540px]">
          {t(`${contentKey}.description`)}
        </p>
      </div>
      <div className="mt-12">
        <WaitlistInput buttonText="Request Early Access" role={role} />
      </div>
      <div className="relative z-10">
        <div className="flex gap-6 justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-white/70"
            >
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
