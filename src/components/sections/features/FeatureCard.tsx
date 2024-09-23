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
    <div className="bg-secondary p-5 rounded-lg flex gap-4">
      <div className="bg-primary/10 p-4 rounded-lg h-fit">
        <Icon className="text-primary size-8" />
      </div>
      <div>
        <p className="text-2xl font-medium">{title}</p>
        <p className="text-lg text-muted-foreground text-balance md:text-pretty">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
