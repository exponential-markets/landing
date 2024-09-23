import { Button } from "@/components/ui/button";
import { Link, Phone } from "lucide-react";
import XTwitterIcon from "@/components/shared/XTwitterIcon";

const Footer = () => {
  return (
    <div className="flex flex-col pr-8 pb-5">
      <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="Exponential" className="size-10" />
        <p className="text-2xl font-medium text-balance">Exponential</p>
      </div>
      <p className="text-lg text-muted-foreground text-balance mt-4">
        Algorithmic Trading Marketplace
      </p>
      <div className="flex gap-4 mt-8">
        <Button variant="secondary" className="rounded-full size-12">
          <Link className="text-primary size-4" />
        </Button>
        <Button variant="secondary" className="rounded-full size-12">
          <XTwitterIcon className="text-primary size-4" />
        </Button>
        <Button variant="secondary" className="rounded-full size-12">
          <Phone className="text-primary size-4" />
        </Button>
      </div>
      <div className="flex flex-col gap-4 mt-16">
        <p className="text-2xl">Contact Us</p>
        <div className="flex flex-col gap-3 text-muted-foreground">
          <p>contact@exponential.markets</p>
          <p>exponential.markets/calendar</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
