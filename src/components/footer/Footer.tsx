import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "../ui/button";
// import XLogo from "@/assets/Xlogo";
import { usePostHog } from "posthog-js/react";

const Footer = () => {
  const posthog = usePostHog();

  const handleScheduleCall = () => {
    posthog.capture("footer_schedule_call");
    window.open(
      "https://cal.com/shubhamintech/exponential-exploration",
      "_blank"
    );
  };

  const handleEmailUs = () => {
    posthog.capture("footer_email_us");
    window.open("mailto:contact@exponential.markets");
  };

  // const handleFollowUs = () => {
  //   posthog.capture('footer_follow_us')
  //   // Add your follow us logic here
  // }

  return (
    <div id="contact" className="lg:mx-24 mt-16 xl:mt-32 mb-16 md:mb-24">
      <div className="flex justify-center w-full">
        <h2 className="p-1 w-fit text-center text-3xl lg:text-4xl text-transparent bg-gradient-to-r from-[#747478] via-white to-[#434345] bg-clip-text">
          Ready to Start Your Exponential Journey?
        </h2>
      </div>
      <h3 className="w-full text-center mt-3 lg:mt-5 text-lg lg:text-xl">
        Diversify your portfolio,
        <br className="hidden lg:block" />
        Join Exponential to leverage algorithmic trading,
        <br className="hidden lg:block" />
        and watch your investments grow exponentially.
      </h3>
      <div className="flex justify-center w-full mt-10">
        <h3 className="text-xl w-fit text-transparent bg-gradient-to-r from-[#747478] via-white to-[#434345] bg-clip-text">
          Unlock our digital potential today
        </h3>
      </div>
      <div className="flex flex-wrap gap-4 mt-5 justify-center">
        <Button className="rounded-full p-4" onClick={handleScheduleCall}>
          Schedule a Call
          <ArrowUpRight size={16} className="ml-2" />
        </Button>
        <Button
          className="order-1 md:order-[0] rounded-full p-4 bg-[#393939] text-white"
          onClick={handleEmailUs}
        >
          Email Us
          <Mail size={16} className="ml-2" />
        </Button>
        {/* <Button className="rounded-full p-4" onClick={handleFollowUs}>
          Follow Us on
          <XLogo className="ml-2" />
        </Button> */}
      </div>
    </div>
  );
};

export default Footer;
