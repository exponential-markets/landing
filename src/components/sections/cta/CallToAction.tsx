import Badge from "@/components/shared/Badge";
import Mockup from "@/components/shared/Mockup";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkle } from "lucide-react";
import { useTranslation } from "react-i18next";

const CallToAction = ({ isDeveloperPage }: { isDeveloperPage: boolean }) => {
  const { t } = useTranslation();
  const contentKey = isDeveloperPage ? "developer.cta" : "investor.cta";

  const mockups = t(`${contentKey}.mockups`, {
    returnObjects: true,
  }) as { imageSrc: string; altText: string }[];

  return (
    <div
      id="developer-cta"
      className="mt-20 xl:mt-40 flex flex-col gap-4 items-center"
    >
      <Badge
        icon={<Sparkle className="size-4" />}
        text="Let your Code make Money!"
      />
      <div>
        <p className="text-3xl md:text-[42px] lg:text-5xl xl:text-6xl font-medium text-center text-balance">
          {t(`${contentKey}.title`)}
        </p>
        <p className="mt-4 xl:text-xl text-center text-pretty text-muted-foreground max-w-[800px]">
          {t(`${contentKey}.description`)}
        </p>
      </div>
      <div className="flex flex-col gap-4 xl:hidden">
        <div className="flex flex-col items-center justify-center md:flex-row gap-4">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base border-2 border-foreground hover:bg-foreground hover:text-background"
          >
            {isDeveloperPage ? "Join Waitlist" : "Join Dev Waitlist"}
            <ArrowUpRight className="size-5 ml-2" />
          </Button>
          <Button size="lg" className="rounded-full text-base">
            Book a Call with Founders
          </Button>
        </div>
        <div className="mt-12 flex flex-col md:grid md:grid-cols-2 xl:hidden gap-6 items-center">
          <Mockup imageSrc={mockups[0].imageSrc} altText={mockups[0].altText} />
          <Mockup imageSrc={mockups[1].imageSrc} altText={mockups[1].altText} />
          <div className="col-span-2 flex justify-center">
            <Mockup
              imageSrc={mockups[2].imageSrc}
              altText={mockups[2].altText}
              className="md:w-1/2"
            />
          </div>
        </div>
      </div>
      <div className="hidden xl:grid xl:grid-cols-3 gap-9 -mx-10">
        <Mockup
          imageSrc={mockups[0].imageSrc}
          altText={mockups[0].altText}
          className="mt-3 h-fit"
        />
        <div className="flex flex-col gap-14">
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => {
                window.location.href = isDeveloperPage ? "/" : "/developer";
              }}
              variant="outline"
              className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-background"
            >
              Discover More
              <ArrowUpRight className="size-5 ml-2" />
            </Button>
            <Button className="rounded-full">Book a Call with Founders</Button>
          </div>
          <Mockup imageSrc={mockups[1].imageSrc} altText={mockups[1].altText} />
        </div>
        <Mockup
          imageSrc={mockups[2].imageSrc}
          altText={mockups[2].altText}
          className="mt-3 h-fit"
        />
      </div>
    </div>
  );
};

export default CallToAction;
