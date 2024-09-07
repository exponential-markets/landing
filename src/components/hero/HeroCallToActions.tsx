import { useState } from "react";
import { ArrowUpRight, CirclePlay, Loader2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";

const HeroCallToActions = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleJoinWaitlist = async () => {
    if (!name || !email || !role) {
      toast.error("Please fill out all fields.");
      return;
    }

    setLoading(true);
    console.log({ name, email, role });

    toast.success("You've been added to the waitlist!");
    setName("");
    setEmail("");
    setRole("");
    setOpen(false);
    setLoading(false);
  };

  return (
    <div className="my-6 lg:mt-8 flex gap-3 lg:gap-6">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="py-4 rounded-full flex gap-2 justify-center items-center">
            Join the Waitlist <ArrowUpRight size={18} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-2">
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="name"
                  className="col-span-2 h-8"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="email"
                  className="col-span-2 h-8"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="role">Role</Label>
                <Select value={role} onValueChange={(value) => setRole(value)}>
                  <SelectTrigger className="col-span-2 h-8">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Investor">Investor</SelectItem>
                    <SelectItem value="Developer">Developer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex w-full flex-row-reverse">
              <div></div>
              <div></div>
              <Button
                className="rounded-full w-fit"
                onClick={handleJoinWaitlist}
                disabled={loading}
              >
                Submit
                {loading && (
                  <Loader2 className="ml-2 h-4 w-4 animate-spin text-background" />
                )}
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <Button className="bg-[#393939] hover:bg-[#393939] text-foreground py-4 rounded-full flex gap-2 justify-center items-center">
        See How It Works <CirclePlay size={18} />
      </Button>
    </div>
  );
};

export default HeroCallToActions;

{
  /* <>
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
        </> */
}
