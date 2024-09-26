import InfiniteHorizontalMovingCards from "@/components/ui/infinite-horizontal-moving-cards";

const news = [
  {
    title:
      "Algorithms helped foreign funds and proprietary trading desks pocket 588.4 billion rupees ($7 billion) in gross profits from trading Indian equity derivatives",
    source: "Mint",
  },
  {
    title:
      "The crypto market has already been making large moves in the first half of 2024, generating new all time highs for Bitcoin and many other tokens.",
    source: "Blockpit",
  },
  {
    title: "In the spot FX market, algorithmic trading is now almost at 75%",
    source: "BNP Paribas",
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
        {news.map((algorithm, index) => (
          <div key={index} className="flex flex-col gap-1 items-center w-160">
            <span className="text-base font-medium">{algorithm.title}</span>
            <p className="text-xs text-muted-foreground">{algorithm.source}</p>
          </div>
        ))}
      </InfiniteHorizontalMovingCards>
    </div>
  );
};

export default Algorithms;
