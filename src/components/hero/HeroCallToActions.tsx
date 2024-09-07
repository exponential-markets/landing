import { useState, useEffect } from "react";
import { ChevronUp, CirclePlay, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroCallToActions = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailDomain, setEmailDomain] = useState("@gmail.com");
  const [role, setRole] = useState("Investor");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function to reset all states
  const resetStates = () => {
    setName("");
    setEmail("");
    setEmailDomain("@gmail.com");
    setRole("Investor");
    setLoading(false);
  };

  // Reset states when popup closes
  useEffect(() => {
    if (!open) {
      resetStates();
    }
  }, [open]);

  // Function to handle form submission
  const handleJoinWaitlist = async () => {
    const fullEmail =
      emailDomain === "custom" ? email : `${email}${emailDomain}`;

    if (!name || !fullEmail || !role) {
      toast.error("Please fill out all fields.");
      return;
    }

    setLoading(true);
    console.log({ name, email: fullEmail, role });

    toast.success("You've been added to the waitlist!");
    setOpen(false);
  };

  return (
    <div className="my-6 lg:mt-8 flex gap-3 lg:gap-6">
      <Button
        className="py-4 rounded-full flex gap-1 justify-center items-center"
        onClick={() => setOpen(true)}
      >
        Join Waitlist <ChevronUp size={18} />
      </Button>
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-background rounded-lg p-6 w-96 max-w-full">
            <h2 className="text-2xl font-bold mb-4">
              Request Exponential Access
            </h2>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <div className="flex gap-2">
                  <Input
                    id="email"
                    placeholder={
                      emailDomain === "custom"
                        ? "Enter your full email"
                        : "Enter your email"
                    }
                    className="flex-grow"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailDomain !== "custom" && (
                    <Select value={emailDomain} onValueChange={setEmailDomain}>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Domain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="@gmail.com">@gmail.com</SelectItem>
                        <SelectItem value="@yahoo.com">@yahoo.com</SelectItem>
                        <SelectItem value="@outlook.com">
                          @outlook.com
                        </SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Role</Label>
                <Tabs value={role} onValueChange={setRole} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="Investor">Investor</TabsTrigger>
                    <TabsTrigger value="Developer">Developer</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className="rounded-full"
                onClick={handleJoinWaitlist}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Join Now"}
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <ChevronUp size={18} />
                )}{" "}
              </Button>
            </div>
          </div>
        </div>
      )}
      <Button className="bg-[#393939] hover:bg-[#393939] text-foreground py-4 rounded-full flex gap-2 justify-center items-center">
        See How It Works <CirclePlay size={18} />
      </Button>
    </div>
  );
};

export default HeroCallToActions;
