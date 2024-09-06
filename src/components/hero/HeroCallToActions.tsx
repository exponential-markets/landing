import { useState } from "react";
import { ArrowUpRight, CirclePlay, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";

const HeroCallToActions = () => {
  const [joinWaitlist, setJoinWaitlist] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleJoinWaitlist = (email: string) => {
    setLoading(true);
    // TODO: handle waitlist join here
    console.log("User email: ", email);
    setJoinWaitlist(false);
    setLoading(false);
    toast.success("You've successfully joined the waitlist!");
  };

  return (
    <div className="my-6 lg:mt-8 flex gap-3 lg:gap-6">
      <Button
        onClick={() => setJoinWaitlist(true)}
        className="py-4 rounded-full flex gap-2 justify-center items-center"
      >
        Join the Waitlist <ArrowUpRight size={18} />
      </Button>
      {joinWaitlist ? (
        <>
          <div className="flex">
            <Input
              autoFocus
              className="bg-background rounded-l-full focus-visible:ring-0"
              placeholder="your email..."
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
            />
            <Button
              onClick={() => handleJoinWaitlist(userEmail)}
              className="rounded-full -ml-4"
            >
              Join
              {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
            </Button>
          </div>
        </>
      ) : (
        <Button className="bg-[#393939] hover:bg-[#393939] text-foreground py-4 rounded-full flex gap-2 justify-center items-center">
          See How It Works <CirclePlay size={18} />
        </Button>
      )}
    </div>
  );
};

export default HeroCallToActions;
