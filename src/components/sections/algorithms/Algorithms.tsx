import InfiniteHorizontalMovingCards from "@/components/ui/infinite-horizontal-moving-cards";
import { cn } from "@/lib/utils";

const algorithms = [
  {
    name: "Asana",
    cagr: 23.5,
  },
  {
    name: "SpaceX",
    cagr: 13.5,
  },
  {
    name: "Tesla",
    cagr: -14.3,
  },
];

const Algorithms = () => {
  return (
    <div className="mt-14 flex justify-center">
      <InfiniteHorizontalMovingCards
        direction="left"
        speed="normal"
        pauseOnHover={false}
      >
        {algorithms.map((algorithm, index) => (
          <div key={index} className="flex flex-col gap-1 items-center">
            <span className="text-3xl">{algorithm.name}</span>
            <p className="text-base">
              <span
                className={cn(
                  "text-base",
                  algorithm.cagr > 0 ? "text-emerald-400" : "text-red-400"
                )}
              >
                {algorithm.cagr}%{" "}
              </span>
              CAGR
            </p>
          </div>
        ))}
      </InfiniteHorizontalMovingCards>
    </div>
  );
};

export default Algorithms;
