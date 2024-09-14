import { Toaster } from "sonner";
import DeveloperSection from "./components/developers/DeveloperSection";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import InvestorSection from "./components/investors/InvestorSection";
import Navbar from "./components/navbar/Navbar";
import StickyNavbarTab from "./components/navbar/StickyNavbarTab";
import Pricing from "./components/pricing/Pricing";
import { GoogleOAuthProvider } from "@react-oauth/google";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import formbricks from "@formbricks/js/website";

posthog.init("phc_Pf23onE68qvYSLrFboMEl6TdGqX3HIy2pLqGSlVfuwt", {
  api_host: "https://us.i.posthog.com",
  loaded: (posthog) => {
    if (import.meta.env.DEV) posthog.debug();
  },
});

formbricks.init({
  environmentId: "cm0rz69yp000kp9k5sk0lzrvm",
  apiHost: "https://app.formbricks.com",
});

const App = () => {
  return (
    <>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
      >
        <PostHogProvider client={posthog}>
          <Navbar />
          <Hero />
          <InvestorSection />
          <DeveloperSection />
          <Pricing />
          <Footer />
          <StickyNavbarTab />
          <Toaster position="top-center" richColors />
        </PostHogProvider>
      </GoogleOAuthProvider>
    </>
  );
};

export default App;
