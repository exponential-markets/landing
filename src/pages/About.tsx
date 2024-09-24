import Badge from "@/components/shared/Badge";
import { Button } from "@/components/ui/button";
import { TeamMember } from "@/types";
import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const aboutTitle = t("about.title", { returnObjects: true }) as {
    text: string;
    className: string;
  }[];
  const ctaTitle = t("about.cta.title", { returnObjects: true }) as {
    text: string;
    className: string;
  }[];
  const team = t("team.members", { returnObjects: true }) as TeamMember[];

  return (
    <div className="mt-44 flex flex-col gap-4">
      <div className="flex flex-col gap-4 items-center">
        <p className="text-3xl font-medium lg:text-6xl xl:text-7xl text-center">
          {aboutTitle.map((item, index) => (
            <span key={index} className={item.className}>
              {item.text}
            </span>
          ))}
        </p>
        <p className="text-center text-base text-foreground/70">
          {t("about.description")}
        </p>
      </div>
      <div className="mt-60 mx-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <Badge icon={<Sparkles className="size-2.5" />} text="ABOUT US" />
          <p className="text-3xl md:text-[42px] font-medium lg:text-5xl xl:text-6xl xl:leading-[1.2]">
            {ctaTitle.map((item, index) => (
              <span key={index} className={item.className}>
                {item.text}
              </span>
            ))}
          </p>
          <div className="mt-4 flex justify-end">
            <Button size="lg" className="rounded-full text-base">
              Contact Us
            </Button>
          </div>
        </div>
        <div>
          <p className="text-xl leading-[1.6]">{t("about.cta.description")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
