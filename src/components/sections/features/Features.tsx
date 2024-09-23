import Badge from "@/components/shared/Badge";
import { Sparkles } from "lucide-react";
import FeatureCard from "@/components/sections/features/FeatureCard";
import { featuresData } from "@/constants/constants";

const Features = () => {
  return (
    <div id="features" className="flex flex-col items-center mt-24">
      <Badge icon={<Sparkles className="size-3" />} text="FEATURES" />
      <div className="text-3xl font-medium text-center xl:text-4xl">
        Invest <br /> <span className="text-primary">Exponentially</span>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
