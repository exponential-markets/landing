import InfiniteHorizontalMovingCards from "@/components/ui/infinite-horizontal-moving-cards";
import { PartyPopper } from "lucide-react";

const Clients = () => {
  return (
    <div className="mt-14">
      <InfiniteHorizontalMovingCards
        direction="left"
        speed="normal"
        pauseOnHover={false}
      >
        <div className="text-3xl flex gap-2 items-center">
          <PartyPopper /> Asana
        </div>
        <div className="text-3xl flex gap-2 items-center">
          <PartyPopper /> Hotjar
        </div>
        <div className="text-3xl flex gap-2 items-center">
          <PartyPopper /> Maze
        </div>
        <div className="text-3xl flex gap-2 items-center">
          <PartyPopper /> Afterpay
        </div>
        <div className="text-3xl flex gap-2 items-center">
          <PartyPopper /> Classpass
        </div>
      </InfiniteHorizontalMovingCards>
    </div>
  );
};

export default Clients;
