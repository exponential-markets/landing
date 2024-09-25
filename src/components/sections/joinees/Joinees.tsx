import WaitlistButton from "@/components/shared/WaitlistButton";
import { Button } from "@/components/ui/button";
import InfiniteVerticalMovingCards from "@/components/ui/infinite-vertical-moving-cards";
import { cn } from "@/lib/utils";
import { Component } from "lucide-react";
import { useTranslation } from "react-i18next";

const newJoinees = [
  {
    algoName: "Ethereum",
    cagr: 23.5,
    aum: "106k",
    profitableTrades: 78,
    creatorName: "Vitalik Buterin",
    creatorImage: "/images/vitalik buterin.jpg",
  },
  {
    algoName: "Bitcoin",
    cagr: 19.5,
    aum: "91k",
    profitableTrades: 58,
    creatorName: "Satoshi Nakamoto",
    creatorImage: "/images/satoshi nakamoto.jpg",
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
          <WaitlistButton
            role={isDeveloperPage ? "developer" : "investor"}
            buttonText="Join Waitlist"
            showIcon
          />
        </div>
        <div className="mt-20 min-[820px]:px-12 lg:px-24 xl:px-0 flex gap-4 w-full xl:w-[620px]">
          <div className="w-full">
            <InfiniteVerticalMovingCards speed="normal" pauseOnHover={false}>
              {newJoinees.map((joinee, index) => (
                <div
                  key={index}
                  className="bg-card p-4 xl:ml-6 text-3xl flex flex-col gap-8 items-center justify-between rounded-lg"
                >
                  <div className="flex justify-between w-full">
                    <p className="text-xs">
                      Profitable Trades <br />{" "}
                      <span className="text-xs text-muted-foreground">
                        {joinee.profitableTrades}
                      </span>
                    </p>
                    <p className="text-xs">
                      AUM
                      <br />{" "}
                      <span className="text-xs text-muted-foreground">
                        {joinee.aum}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-medium w-max mt-2">
                      {joinee.algoName}
                    </p>
                    <p className="text-muted-foreground text-xs text-center mt-1">
                      <span
                        className={cn(
                          joinee.cagr > 0 ? "text-emerald-400" : "text-red-400"
                        )}
                      >
                        {joinee.cagr}%
                      </span>{" "}
                      CAGR
                    </p>
                  </div>
                  <div className="flex gap-2 text-sm items-center">
                    <img
                      src={joinee.creatorImage}
                      alt={joinee.creatorName}
                      className="size-6 rounded-full object-cover"
                    />
                    {joinee.creatorName}
                  </div>
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
                  className="bg-card p-4 xl:mr-6 text-3xl flex flex-col gap-8 items-center justify-between rounded-lg"
                >
                  <div className="flex justify-between w-full">
                    <p className="text-sm">
                      Profitable Trades <br />{" "}
                      <span className="text-xs text-muted-foreground">
                        {joinee.profitableTrades}
                      </span>
                    </p>
                    <p className="text-sm">
                      AUM <br />{" "}
                      <span className="text-xs text-muted-foreground">
                        {joinee.aum}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-medium w-max mt-2">
                      {joinee.algoName}
                    </p>
                    <p className="text-muted-foreground text-xs text-center mt-1">
                      <span
                        className={cn(
                          joinee.cagr > 0 ? "text-emerald-400" : "text-red-400"
                        )}
                      >
                        {joinee.cagr}%
                      </span>{" "}
                      CAGR
                    </p>
                  </div>
                  <div className="flex gap-2 text-sm items-center">
                    <img
                      src={joinee.creatorImage}
                      alt={joinee.creatorName}
                      className="size-6 rounded-full object-cover"
                    />
                    {joinee.creatorName}
                  </div>
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
