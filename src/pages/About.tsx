import Badge from "@/components/shared/Badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Founder } from "@/types";
import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const aboutQuote = t("about.quote", { returnObjects: true }) as {
    text: string;
    className: string;
  }[];

  const founders = t("about.team.founders", {
    returnObjects: true,
  }) as Founder[];

  return (
    <div className="mt-36 xl:mt-48 flex flex-col xl:grid xl:grid-cols-1 gap-32 xl:gap-4">
      <div className="xl:grid xl:grid-cols-4 xl:gap-6">
        <div className="flex flex-col items-center max-w-[1200px] col-span-2 order-2">
          <Badge icon={<Sparkles className="size-2" />} text="ABOUT" />
          <p className="text-3xl md:text-4xl lg:text-5xl Xl:text-6xl text-center font-medium text-pretty">
            {aboutQuote.map((item, index) => (
              <span key={index} className={item.className}>
                {item.text}
              </span>
            ))}
          </p>
          <p className="mt-4 text-center text-base md:w-3/4">{t("about.by")}</p>
        </div>
        {founders.map((founder, index) => (
          <div
            key={index}
            className={cn(
              "hidden xl:flex flex-col items-center gap-6 max-w-[340px] relative",
              index % 2 == 0 ? "xl:order-1" : "xl:order-3"
            )}
          >
            <img
              src={founder.image}
              alt={founder.name}
              className="size-52 rounded-xl object-cover"
            />
            <Button
              variant="outline"
              className={cn(
                "absolute border border-primary rounded-full font-light top-0",
                index % 2 == 0 ? "-rotate-45 left-0" : "rotate-45 right-0"
              )}
            >
              {founder.badge}
            </Button>
            <div className="text-center w-full">
              <p className="text-2xl font-medium">{founder.name}</p>
              <p className="text-base text-muted-foreground">{founder.role}</p>
              <p className="text-base text-muted-foreground">
                {founder.contacts.email}
              </p>
              <ul className="mt-4 list-disc text-left pl-5 w-full">
                {founder.bulletins.map((bulletin, index) => (
                  <li
                    key={index}
                    className="text-lg leading-[1.4] text-foreground/80 text-pretty pl-2"
                  >
                    <span>{bulletin}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col xl:hidden items-center">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-6">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-6 max-w-[340px] relative"
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="size-52 rounded-xl object-cover"
              />
              <Button
                variant="outline"
                className={cn(
                  "absolute border border-primary rounded-full font-light top-0",
                  index % 2 == 0 ? "-rotate-45 left-0" : "rotate-45 right-0"
                )}
              >
                {founder.badge}
              </Button>
              <div className="text-center w-full">
                <p className="text-2xl font-medium">{founder.name}</p>
                <p className="text-base text-muted-foreground">
                  {founder.role}
                </p>
                <p className="text-base text-muted-foreground">
                  {founder.contacts.email}
                </p>
                <ul className="mt-4 list-disc text-left pl-5 w-full">
                  {founder.bulletins.map((bulletin, index) => (
                    <li
                      key={index}
                      className="text-lg leading-[1.4] text-foreground/80 text-pretty pl-2"
                    >
                      <span>{bulletin}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
