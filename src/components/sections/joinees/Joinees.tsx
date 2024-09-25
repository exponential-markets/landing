import { Button } from "@/components/ui/button";
import InfiniteVerticalMovingCards from "@/components/ui/infinite-vertical-moving-cards";
import { Component, Figma } from "lucide-react";
import { useTranslation } from "react-i18next";

const Joinees = ({ isDeveloperPage }: { isDeveloperPage: boolean }) => {
  const { t } = useTranslation();
  const contentKey = isDeveloperPage ? "developer.joinees" : "investor.joinees";

  return (
    <div className="flex flex-col items-center mt-40">
      <div className="flex flex-col items-center xl:flex-row xl:gap-20">
        <div className="flex flex-col justify-center md:mx-32 lg:mx-44 xl:mx-0 max-w-[620px]">
          <Button variant="secondary" size="icon">
            <Component className="size-5 text-primary fill-primary" />
          </Button>
          <div className="flex gap-4 mt-6">
            <p className="text-3xl font-medium md:text-[42px] lg:text-5xl xl:text-6xl">
              {t(`${contentKey}.title`)}
            </p>
          </div>
          <div className="my-6 xl:mt-2 xl:mb-6">
            <p className="text-base text-muted-foreground text-pretty">
              {t(`${contentKey}.description`)}
            </p>
          </div>
          <Button size="lg" className="rounded-full w-fit text-base">
            {t(`${contentKey}.cta`)}
          </Button>
        </div>
        <div className="mt-20 min-[820px]:px-12 lg:px-24 xl:px-0 flex gap-4 w-full xl:w-[620px]">
          <div className="w-full">
            <InfiniteVerticalMovingCards speed="normal" pauseOnHover={false}>
              <div className="bg-card py-12 xl:ml-6 text-3xl flex flex-col gap-2 items-center rounded-lg">
                <div className="p-4 bg-background rounded-full border border-primary/50 border-b-0 border-r-0">
                  <Figma className="size-14" />
                </div>
                <p className="text-2xl font-medium w-max mt-8">
                  Vitalik Buterin
                </p>
              </div>
              <div className="bg-card py-12 xl:ml-6 text-3xl flex flex-col gap-2 items-center rounded-lg">
                <div className="p-4 bg-background rounded-full border border-primary/50 border-b-0 border-r-0">
                  <Figma className="size-14" />
                </div>
                <p className="text-2xl font-medium w-max mt-8">
                  Vitalik Buterin
                </p>
              </div>
              <div className="bg-card py-12 xl:ml-6 text-3xl flex flex-col gap-2 items-center rounded-lg">
                <div className="p-4 bg-background rounded-full border border-primary/50 border-b-0 border-r-0">
                  <Figma className="size-14" />
                </div>
                <p className="text-2xl font-medium w-max mt-8">
                  Vitalik Buterin
                </p>
              </div>
            </InfiniteVerticalMovingCards>
          </div>
          <div className="hidden md:block w-full">
            <InfiniteVerticalMovingCards
              direction="down"
              speed="normal"
              pauseOnHover={false}
            >
              <div className="bg-card py-12 mr-6 text-3xl flex flex-col gap-2 items-center rounded-lg">
                <div className="p-4 bg-background rounded-full border border-primary/50 border-b-0 border-r-0">
                  <Figma className="size-14" />
                </div>
                <p className="text-2xl font-medium w-max mt-8">
                  Vitalik Buterin
                </p>
              </div>
              <div className="bg-card py-12 mr-6 text-3xl flex flex-col gap-2 items-center rounded-lg">
                <div className="p-4 bg-background rounded-full border border-primary/50 border-b-0 border-r-0">
                  <Figma className="size-14" />
                </div>
                <p className="text-2xl font-medium w-max mt-8">
                  Vitalik Buterin
                </p>
              </div>
              <div className="bg-card py-12 mr-6 text-3xl flex flex-col gap-2 items-center rounded-lg">
                <div className="p-4 bg-background rounded-full border border-primary/50 border-b-0 border-r-0">
                  <Figma className="size-14" />
                </div>
                <p className="text-2xl font-medium w-max mt-8">
                  Vitalik Buterin
                </p>
              </div>
            </InfiniteVerticalMovingCards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinees;
