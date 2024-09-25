import Badge from "@/components/shared/Badge";
import { icons, Sparkles } from "lucide-react";
import FeatureCard from "@/components/sections/features/FeatureCard";
import { useTranslation } from "react-i18next";

const Features = ({ isDeveloperPage }: { isDeveloperPage: boolean }) => {
  const { t } = useTranslation();
  const contentKey = isDeveloperPage
    ? "developer.features"
    : "investor.features";

  const featuresData = t(`${contentKey}.features`, {
    returnObjects: true,
  }) as {
    title: string;
    description: string;
    icon: keyof typeof icons;
  }[];

  return (
    <div id="features" className="flex flex-col items-center mt-14">
      <Badge icon={<Sparkles className="size-2" />} text="FEATURES" />
      <div className="text-3xl font-medium text-center md:text-[42px] lg:text-5xl xl:text-6xl xl:leading-[1.2]">
        {t(`${contentKey}.title`)}
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 xl:px-12">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
