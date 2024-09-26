import Badge from "@/components/shared/Badge";
import XTwitterIcon from "@/components/shared/XTwitterIcon";
import { cn } from "@/lib/utils";
import { Founder } from "@/types";
import { Linkedin, Mail, Sparkles } from "lucide-react";
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
    <div className="pt-28 flex flex-col items-center gap-4">
      <div className="flex flex-col items-center max-w-[800px]">
        <Badge icon={<Sparkles className="size-2" />} text="ABOUT" />
        <p className="text-3xl md:text-[42px] lg:text-5xl xl:text-6xl text-center font-medium text-pretty">
          {aboutQuote.map((item, index) => (
            <span key={index} className={item.className}>
              {item.text}
            </span>
          ))}
        </p>
        <p className="mt-4 text-center text-base md:w-3/4">{t("about.by")}</p>
      </div>
      <div className="flex flex-col items-center">
        <Badge icon={<Sparkles className="size-2" />} text="FOUNDERS" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-6">
          {founders.map((founder, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center gap-3 max-w-[340px] relative",
                index % 2 == 0 ? "xl:order-1" : "xl:order-3"
              )}
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="size-24 rounded-xl object-cover"
              />
              <div className="text-center w-full">
                <p className="text-2xl font-medium">{founder.name}</p>
                <p className="text-base">{founder.role}</p>
                <div className="mt-2 text-base flex gap-4 justify-center text-muted-foreground">
                  {Object.entries(founder.contacts).map(([key, value]) => (
                    <a
                      key={key}
                      href={key === "email" ? `mailto:${value}` : value}
                      target={key === "email" ? "_self" : "_blank"}
                      className="text-primary p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors duration-200"
                    >
                      {key === "email" ? (
                        <Mail className="size-4" />
                      ) : key === "twitter" ? (
                        <XTwitterIcon className="size-4" />
                      ) : (
                        <Linkedin className="size-4" />
                      )}
                    </a>
                  ))}
                </div>
                <div className="mt-4 text-muted-foreground flex flex-col items-center">
                  {founder.bio.map((text, index) => (
                    <p key={index} className="w-max">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
