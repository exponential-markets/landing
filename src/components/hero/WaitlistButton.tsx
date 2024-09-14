import { useState } from "react";
import logo from "../../assets/logo.svg";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SignInModal from "../auth/SignInModal";

const WaitlistButton = () => {
  const [inviteCode, setInviteCode] = useState("");
  const [showSignInDialog, setShowSignInDialog] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const raw = JSON.stringify({
      invite_code: inviteCode,
    });

    const requestOptions = {
      method: "POST",
      body: raw,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_EXPONENTIAL_API_URL}/check-invite`,
        requestOptions
      );
      const result: { invited: boolean } = await response.json();

      if (result.invited) {
        setShowSignInDialog(true);
        setError("");
      } else {
        setError("Invalid invite code. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex justify-center min-[820px]:justify-normal">
            <button
              type="button"
              className="flex items-center p-[1.5px] rounded-full bg-gradient-to-r from-[#747478] via-white to-[#434345]"
            >
              <div className="flex text-sm gap-2 justify-center items-center bg-background h-full rounded-full px-4 py-2">
                <img src={logo} alt="Logo" className="size-5 lg:size-6" />
                Our MVP is Live
              </div>
            </button>
          </div>
        </DialogTrigger>
        <DialogOverlay className="backdrop-blur-sm bg-transparent" />
        <DialogContent className="max-w-[400px]">
          <DialogTitle>Enter Invite Code</DialogTitle>
          <div className="mt-4">
            <Input
              type="text"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
              placeholder="Enter your invite code"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <div className="mt-4 flex justify-end">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </DialogContent>
      </Dialog>

      {showSignInDialog && (
        <SignInModal
          showSignInDialog={showSignInDialog}
          setShowSignInDialog={setShowSignInDialog}
        />
      )}
    </>
  );
};

export default WaitlistButton;
