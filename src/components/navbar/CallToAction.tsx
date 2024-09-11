import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SignInSlideShow from "./SignInSlideShow";
import { CircleArrowRight } from "lucide-react";
import exponentialLogo from "@/assets/logo.svg";
import { GoogleLogin } from "@react-oauth/google";

const CallToAction = () => {
  return (
    <Dialog>
      <DialogTitle className="hidden" />
      <DialogTrigger asChild>
        <div className="flex items-center justify-center self-baseline md:flex h-full bg-continue-button-background shadow-continue-button-shadow rounded-full hover:cursor-pointer">
          <div className="flex gap-2 items-center justify-center bg-noise-background px-3 py-1.5 md:px-6 md:py-3">
            <div>Coming Soon</div>
            <CircleArrowRight className="size-5 lg:size-6 -rotate-45" />
          </div>
        </div>
      </DialogTrigger>
      <DialogOverlay className="backdrop-blur-sm bg-transparent" />
      <DialogContent className="max-w-[50vw]">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <SignInSlideShow />
          </div>
          <div className="h-full flex items-center">
            <div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <img
                    src={exponentialLogo}
                    alt="Exponential Logo"
                    className="size-12"
                  />
                  <div className="flex items-center text-xl font-medium">
                    Exponential
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Unlock your personalized dashboard now
                </p>
              </div>
              <div className="mt-2">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CallToAction;
