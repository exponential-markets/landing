import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "../ui/button";
import XLogo from "@/assets/Xlogo";

const Footer = () => {
  return (
    <div id="contact" className="mx-24 mt-32 mb-16">
      <div className="flex justify-center w-full">
        <h2 className="p-1 w-fit text-4xl text-transparent bg-gradient-to-r from-[#747478] via-white to-[#434345] bg-clip-text">
          Ready to Start Your Exponential Journey?
        </h2>
      </div>
      <h3 className="w-full text-center mt-5 text-xl">
        Diversify your portfolio,
        <br />
        Join Exponential to leverage algorithmic trading,
        <br />
        and watch your investments grow exponentially.
      </h3>
      <div className="flex justify-center w-full mt-10">
        <h3 className="text-xl w-fit text-transparent bg-gradient-to-r from-[#747478] via-white to-[#434345] bg-clip-text">
          Unlock our digital potential today
        </h3>
      </div>
      <div className="flex gap-4 mt-5 justify-center">
        <Button className="rounded-full p-4">
          Schedule a Call
          <ArrowUpRight size={16} className="ml-2" />
        </Button>
        <Button className="rounded-full p-4 bg-[#393939] text-white">
          Email Us
          <Mail size={16} className="ml-2" />
        </Button>
        <Button className="rounded-full p-4">
          Follow Us on
          <XLogo className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Footer;
