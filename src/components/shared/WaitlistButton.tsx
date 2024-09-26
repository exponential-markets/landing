import { useState, useEffect } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import WaitlistInput from "@/components/shared/WaitlistInput";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const WaitlistButton = ({
  buttonText,
  role,
  showIcon,
  className,
  variant,
}: {
  buttonText: string;
  role: string | null;
  showIcon: boolean;
  className?: string;
  variant?: ButtonProps["variant"];
}) => {
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const joinedWaitlist = localStorage.getItem("joinedWaitlist");
    const userRole = localStorage.getItem("role");
    if (joinedWaitlist === "true" && userRole === role) {
      setShowInput(true);
    }
  }, [role]);

  const handleClick = () => {
    setShowInput(true);
  };

  return (
    <div>
      {!showInput ? (
        <Button
          size="lg"
          variant={variant}
          className={cn("rounded-full text-base", className)}
          onClick={handleClick}
        >
          {buttonText} {showIcon && <ArrowUpRight className="size-5 ml-2" />}
        </Button>
      ) : (
        <WaitlistInput buttonText="Join Waitlist" role={role!} />
      )}
    </div>
  );
};

export default WaitlistButton;
