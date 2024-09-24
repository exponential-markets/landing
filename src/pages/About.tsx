import Badge from "@/components/shared/Badge";
import XTwitterIcon from "@/components/shared/XTwitterIcon";
import { Button } from "@/components/ui/button";
import { TeamMember } from "@/types";
import { Phone, Sparkles } from "lucide-react";
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
  const teamTitle = t("about.team.title", { returnObjects: true }) as {
    text: string;
    className: string;
  }[];

  const team = t("about.team.members", { returnObjects: true }) as TeamMember[];

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
        <p className="text-center text-base text-foreground/70 md:w-3/4">
          {t("about.description")}
        </p>
      </div>
      <div className="mt-60 lg:mx-10 grid grid-cols-1 min-[820px]:grid-cols-2 gap-20 min-[820px]:gap-6 lg:gap-20">
        <div>
          <Badge icon={<Sparkles className="size-2.5" />} text="ABOUT US" />
          <p className="text-3xl md:text-[42px] font-medium lg:text-5xl xl:text-6xl md:leading-[1.2]">
            {ctaTitle.map((item, index) => (
              <span key={index} className={item.className}>
                {item.text}
              </span>
            ))}
          </p>
          <div className="mt-4 flex min-[820px]:justify-end">
            <Button size="lg" className="rounded-full text-base">
              Contact Us
            </Button>
          </div>
        </div>
        <div>
          <p className="text-xl leading-[1.6]">{t("about.cta.description")}</p>
        </div>
      </div>
      <div className="mt-20 lg:mx-10">
        <img src={t("about.teamImage")} alt="team" className="rounded-xl" />
        <div className="mt-20 flex flex-col items-center">
          <Badge icon={<Sparkles className="size-2.5" />} text="OUR TEAM" />
          <div className="flex flex-col gap-4 items-center">
            <p className="text-3xl md:text-[42px] font-medium lg:text-5xl xl:text-6xl">
              {teamTitle.map((item, index) => (
                <span key={index} className={item.className}>
                  {item.text}
                </span>
              ))}
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center gap-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="size-[72px] rounded-full object-cover"
                />
                <div className="text-center">
                  <p className="text-2xl font-medium">{member.name}</p>
                  <p className="text-lg font-medium">{member.role}</p>
                  <p className="mt-4 text-base leading-[1.8] text-foreground/80 text-pretty">
                    {member.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  {member.contacts.twitter && (
                    <Button
                      variant="secondary"
                      className="rounded-full size-12"
                    >
                      <a href={member.contacts.twitter} target="_blank">
                        <XTwitterIcon className="text-primary size-4" />
                      </a>
                    </Button>
                  )}
                  {member.contacts.mobile && (
                    <Button
                      variant="secondary"
                      className="rounded-full size-12"
                    >
                      <a href={member.contacts.mobile} target="_blank">
                        <Phone className="text-primary size-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
