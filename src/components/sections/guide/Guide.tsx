import Badge from "@/components/shared/Badge";
import { Check, Sparkles } from "lucide-react";
import Mockup from "@/components/shared/Mockup";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const Guide = ({ isDeveloperPage }: { isDeveloperPage: boolean }) => {
  const { t } = useTranslation();
  const contentKey = isDeveloperPage ? "developer.guide" : "investor.guide";

  const steps = t(`${contentKey}.steps`, {
    returnObjects: true,
  }) as {
    title: {
      text: string;
      className: string;
    }[];
    description: string;
    mockup: string;
    features: string[];
  }[];

  return (
    <div id="guide" className="mt-40 flex flex-col items-center">
      <div className="flex flex-col gap-32 md:gap-40">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col gap-10 md:gap-16 lg:gap-[100px] md:grid md:grid-cols-2"
          >
            <div
              className={cn(
                "flex flex-col justify-center max-w-[540px]",
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              )}
            >
              <Badge
                icon={<Sparkles className="size-2.5" />}
                text={t(`${contentKey}.badge`)}
              />
              <p className="text-3xl font-medium md:text-[42px] lg:text-5xl xl:text-6xl">
                {step.title.map((part, index) => (
                  <span key={index} className={part.className}>
                    {part.text}
                  </span>
                ))}
              </p>
              <p className="text-muted-foreground text-balance md:text-pretty mt-4 max-w-[500px] leading-[1.8]">
                {step.description}
              </p>
              <div className="flex flex-col gap-2 mt-8">
                {step.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-light text-muted-foreground"
                  >
                    <div className="size-5">
                      <Check className="text-primary size-5" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className={cn(index % 2 === 0 ? "md:order-2" : "md:order-1")}>
              <Mockup
                imageSrc={step.mockup}
                altText={step.title[0].text}
                className="max-h-[470px] max-w-[540px] border-0 mx-atuo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
