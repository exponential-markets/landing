import WaitlistButton from "@/components/shared/WaitlistButton";
import { Button } from "@/components/ui/button";
import InfiniteVerticalMovingCards from "@/components/ui/infinite-vertical-moving-cards";
import { Component } from "lucide-react";
import { useTranslation } from "react-i18next";

const newJoinees = [
  {
    username: "Vitalik Buterin",
    bio: "Founder of Ethereum",
    image: "/images/vitalik buterin.jpg",
  },
  {
    username: "Satoshi Nakamoto",
    bio: "Founder of Bitcoin",
    image: "/images/satoshi nakamoto.jpg",
  },
];

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
          <WaitlistButton buttonText="Join Waitlist" showIcon />
        </div>
        <div className="mt-20 min-[820px]:px-12 lg:px-24 xl:px-0 flex gap-4 w-full xl:w-[620px]">
          <div className="w-full">
            <InfiniteVerticalMovingCards speed="normal" pauseOnHover={false}>
              {newJoinees.map((joinee, index) => (
                <div
                  key={index}
                  className="bg-card py-12 xl:ml-6 text-3xl flex flex-col gap-2 items-center rounded-lg"
                >
                  <div className="p-2 bg-background rounded-full border border-primary/50 border-b-0 border-r-0">
                    <img
                      src={joinee.image}
                      alt={joinee.username}
                      className="size-16 rounded-full object-cover"
                    />
                  </div>
                  <p className="text-2xl font-medium w-max mt-4">
                    {joinee.username}
                  </p>
                  <p className="text-muted-foreground text-base max-w-40 text-center text-ellipsis mt-2">
                    {joinee.bio}
                  </p>
                </div>
              ))}
            </InfiniteVerticalMovingCards>
          </div>
          <div className="hidden md:block w-full">
            <InfiniteVerticalMovingCards
              direction="down"
              speed="normal"
              pauseOnHover={false}
            >
              {newJoinees.map((joinee, index) => (
                <div
                  key={index}
                  className="bg-card py-12 xl:mr-6 text-3xl flex flex-col gap-2 items-center rounded-lg"
                >
                  <div className="p-2 bg-background rounded-full border border-primary/50 border-b-0 border-r-0">
                    <img
                      src={joinee.image}
                      alt={joinee.username}
                      className="size-16 rounded-full object-cover"
                    />
                  </div>
                  <p className="text-2xl font-medium w-max mt-4">
                    {joinee.username}
                  </p>
                  <p className="text-muted-foreground text-base max-w-40 text-center text-ellipsis mt-2">
                    {joinee.bio}
                  </p>
                </div>
              ))}
            </InfiniteVerticalMovingCards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinees;
