import { Button } from "@/components/ui/button";
import InfiniteVerticalMovingCards from "@/components/ui/infinite-vertical-moving-cards";
import { Component, Figma } from "lucide-react";

const Joinees = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 items-center">
        <Button variant="secondary" size="icon">
          <Component className="size-5 text-primary fill-primary" />
        </Button>
        <p className="text-3xl font-medium xl:text-4xl">Latest Joinees</p>
      </div>
      <div className="my-6 text-center">
        <p className="text-lg text-muted-foreground text-balance xl:px-64">
          Just welcomed our latest investors on board! Fancy seeing your profile
          here? Log in and refresh your screen ;)
        </p>
      </div>
      <Button className="rounded-full">Discover More</Button>
      <div className="mt-20 min-[820px]:px-12 lg:px-24 flex w-full">
        <div className="w-full">
          <InfiniteVerticalMovingCards speed="normal" pauseOnHover={false}>
            <div className="bg-secondary py-12 mx-2 text-3xl flex flex-col gap-2 items-center rounded-lg">
              <div className="p-4 bg-background rounded-full border border-primary/50 border-b-0 border-r-0">
                <Figma className="size-14" />
              </div>
              <p className="text-2xl font-medium w-max mt-8">Vitalik Buterin</p>
            </div>
            <div className="bg-secondary py-12 mx-2 text-3xl flex flex-col gap-2 items-center rounded-lg">
              <div className="p-4 bg-background rounded-full border border-primary/50 border-b-0 border-r-0">
                <Figma className="size-14" />
              </div>
              <p className="text-2xl font-medium w-max mt-8">Vitalik Buterin</p>
            </div>
            <div className="bg-secondary py-12 mx-2 text-3xl flex flex-col gap-2 items-center rounded-lg">
              <div className="p-4 bg-background rounded-full border border-primary/50 border-b-0 border-r-0">
                <Figma className="size-14" />
              </div>
              <p className="text-2xl font-medium w-max mt-8">Vitalik Buterin</p>
            </div>
          </InfiniteVerticalMovingCards>
        </div>
        <div className="hidden md:block w-full">
          <InfiniteVerticalMovingCards
            direction="down"
            speed="normal"
            pauseOnHover={false}
          >
            <div className="bg-secondary py-12 mx-2 text-3xl flex flex-col gap-2 items-center rounded-lg">
              <div className="p-4 bg-background rounded-full border border-primary/50 border-b-0 border-r-0">
                <Figma className="size-14" />
              </div>
              <p className="text-2xl font-medium w-max mt-8">Vitalik Buterin</p>
            </div>
            <div className="bg-secondary py-12 mx-2 text-3xl flex flex-col gap-2 items-center rounded-lg">
              <div className="p-4 bg-background rounded-full border border-primary/50 border-b-0 border-r-0">
                <Figma className="size-14" />
              </div>
              <p className="text-2xl font-medium w-max mt-8">Vitalik Buterin</p>
            </div>
            <div className="bg-secondary py-12 mx-2 text-3xl flex flex-col gap-2 items-center rounded-lg">
              <div className="p-4 bg-background rounded-full border border-primary/50 border-b-0 border-r-0">
                <Figma className="size-14" />
              </div>
              <p className="text-2xl font-medium w-max mt-8">Vitalik Buterin</p>
            </div>
          </InfiniteVerticalMovingCards>
        </div>
      </div>
    </div>
  );
};

export default Joinees;
