import { scheduleCall } from "@/lib/cta";
import { usePostHog } from "posthog-js/react";
import { Button } from "../ui/button";
import XTwitterIcon from "../shared/XTwitterIcon";
import { Mail, Phone } from "lucide-react";
import ExponentialLogo from "@/assets/logo.svg";

const Footer = () => {
  const posthog = usePostHog();
  return (
    <div className="mt-24 flex flex-col md:flex-row justify-between pb-5 md:pb-10 xl:pb-20 md:mx-52">
      <div>
        <div className="flex items-center gap-4">
          <img
            src={ExponentialLogo}
            alt="Exponential"
            className="size-10 mr-0"
          />
          <p className="text-2xl font-medium text-balance">Exponential</p>
        </div>
        <p className="text-lg text-muted-foreground text-balance mt-4">
          Algorithmic Trading Marketplace
        </p>
        <div className="flex gap-4 mt-2 mx-auto">
          <Button
            variant="secondary"
            className="rounded-full size-12"
            onClick={() => {
              window.open("https://twitter.com/exponentialchat", "_blank");
            }}
          >
            <XTwitterIcon className="text-primary size-4" />
          </Button>
          <Button
            variant="secondary"
            className="rounded-full size-12"
            onClick={() => {
              window.open("mailto:contact@exponential.markets", "_blank");
            }}
          >
            <Mail className="text-primary size-4" />
          </Button>
          <Button
            variant="secondary"
            className="rounded-full size-12"
            onClick={() => {
              posthog.capture("schedule_call", {
                from: "footer",
              });
              scheduleCall();
            }}
          >
            <Phone className="text-primary size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
