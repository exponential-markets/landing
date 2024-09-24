import { icons } from "lucide-react";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: keyof typeof icons;
  title: string;
  description: string;
}) => {
  const Icon = icons[icon];
  return (
    <div className="bg-card p-5 xl:p-6 rounded-lg flex gap-4">
      <div className="bg-primary/5 p-4 rounded-lg h-fit">
        <Icon className="text-primary size-8" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-medium">{title}</p>
        <p className="text-base text-muted-foreground text-balance md:text-pretty">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
