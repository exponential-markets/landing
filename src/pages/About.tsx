import Badge from "@/components/shared/Badge";
import { Button } from "@/components/ui/button";
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
    <div className="mt-28 flex flex-col items-center gap-4">
      <div className="flex flex-col items-center max-w-[1200px]">
        <Badge icon={<Sparkles className="size-2" />} text="ABOUT US" />
        <p className="text-9xl lg:text-[16rem] leading-none -mb-8 lg:-mb-32 font-grotesk text-primary">
          “
        </p>
        <p className="text-3xl font-medium lg:text-6xl xl:text-7xl text-center">
          {aboutQuote.map((item, index) => (
            <span key={index} className={item.className}>
              {item.text}
            </span>
          ))}
        </p>
        <p className="mt-4 text-center text-base text-foreground/70 md:w-3/4">
          {t("about.by")}
        </p>
        <p className="mt-16 text-center text-lg text-muted-foreground lg:w-[500px]">
          {t("about.description")}
        </p>
      </div>
      <div className="mt-20 lg:mx-10">
        <div className="mt-20 flex flex-col items-center">
          <Badge icon={<Sparkles className="size-2" />} text="FOUNDERS" />
          <div className="flex flex-col gap-4 items-center">
            <p className="text-5xl md:text-7xl min-[820px]:text-8xl font-bold lg:text-9xl xl:text-[8rem]">
              {t("about.team.title")}
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-12">
            <div className="flex flex-col items-center gap-6 max-w-[340px] relative">
              <img
                src={founders[0].image}
                alt={founders[0].name}
                className="size-52 rounded-xl object-cover"
              />
              <Button
                variant="outline"
                className="absolute border border-primary rounded-full font-light -rotate-45 left-0 top-0"
              >
                {founders[0].badge}
              </Button>
              <div className="text-center">
                <p className="text-2xl font-medium">{founders[0].name}</p>
                <p className="text-base text-muted-foreground">
                  {founders[0].role}
                </p>
                <p className="text-base text-muted-foreground">
                  {founders[0].contacts.email}
                </p>
                <ul className="mt-4 list-disc text-left pl-5">
                  {founders[0].bulletins.map((bulletin, index) => (
                    <li
                      key={index}
                      className="text-lg leading-[1.4] text-foreground/80 text-pretty pl-2"
                    >
                      <span className="inline-block -ml-2">{bulletin}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden lg:flex justify-center mt-12">
              <Button size="lg" className="rounded-full w-fit p-6 px-8">
                Meet the Co-Founders
              </Button>
            </div>
            <div className="flex flex-col items-center gap-6 max-w-[340px] relative">
              <img
                src={founders[1].image}
                alt={founders[1].name}
                className="size-52 rounded-xl object-cover"
              />
              <Button
                variant="outline"
                className="absolute border border-primary rounded-full font-light rotate-45 -right-3 -top-3"
              >
                {founders[1].badge}
              </Button>
              <div className="text-center">
                <p className="text-2xl font-medium">{founders[1].name}</p>
                <p className="text-base text-muted-foreground">
                  {founders[1].role}
                </p>
                <p className="text-base text-muted-foreground">
                  {founders[1].contacts.email}
                </p>
                <ul className="mt-4 list-disc list-inside text-left">
                  {founders[1].bulletins.map((bulletin, index) => (
                    <li
                      key={index}
                      className="text-lg leading-[1.4] text-foreground/80 text-pretty"
                    >
                      {bulletin}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
