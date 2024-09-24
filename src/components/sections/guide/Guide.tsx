import Badge from "@/components/shared/Badge";
import { Check, Sparkles } from "lucide-react";
import FindAlgorithm from "@/assets/find algorithm.png";
import WalletIntegration from "@/assets/Dark Wallet Integration.png";
import AlgorithmLive from "@/assets/Dark Algorithm Live.png";
import Mockup from "@/components/shared/Mockup";

const Guide = () => {
  return (
    <div id="guide" className="mt-40 flex flex-col items-center">
      <div className="flex flex-col gap-32 md:gap-40">
        {/* step 1 */}
        <div className="flex flex-col gap-10 md:gap-16 md:grid md:grid-cols-2 xl:px-12 ">
          <div className="flex flex-col justify-center">
            <Badge icon={<Sparkles className="size-2.5" />} text="STEP - 1" />
            <p className="text-3xl font-medium md:text-[42px] lg:text-5xl xl:text-6xl">
              <span className="text-primary">Find</span> Algorithm
            </p>
            <p className="text-muted-foreground text-balance md:text-pretty pt-4">
              Explore algorithms created by elite developers on the platform,
              scrutinize their historical profits, AUM, proftable trades, and
              additional metrics to ascertain if this is the selection for you.
            </p>
          </div>
          <Mockup imageSrc={FindAlgorithm} altText="Find Algorithm" />
        </div>
        {/* step 2 */}
        <div className="flex flex-col-reverse gap-10 md:gap-16 md:grid md:grid-cols-2 xl:px-12">
          <Mockup imageSrc={WalletIntegration} altText="Find Algorithm" />
          <div className="flex flex-col justify-center">
            <Badge icon={<Sparkles className="size-2.5" />} text="STEP - 2" />
            <p className="text-3xl font-medium md:text-[42px] lg:text-5xl xl:text-6xl">
              Connect <span className="text-primary">Wallet</span>
            </p>
            <p className="text-muted-foreground text-balance md:text-pretty pt-4">
              Transfer USDT on ETH chain from you wallet to your algorithm's
              wallet using <span className="text-orange-400">Metamask</span> or
              manually as per your convenience.
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="size-5">
                  <Check className="text-primary size-5" />
                </div>
                No API Key Integration or Third Party Linking
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="size-5">
                  <Check className="text-primary size-5" />
                </div>
                Each user gets their own wallet for any algorithm they deploy
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="size-5">
                  <Check className="text-primary size-5" />
                </div>
                Withdraw anytime from an algorithm back to your wallet
              </div>
            </div>
          </div>
        </div>
        {/* step 3 */}
        <div className="flex flex-col gap-10 md:gap-16 md:grid md:grid-cols-2 xl:px-12">
          <div className="flex flex-col justify-center">
            <Badge icon={<Sparkles className="size-2.5" />} text="STEP - 3" />
            <p className="text-3xl font-medium md:text-[42px] md:leading-[1.2] lg:text-5xl xl:text-6xl">
              Algorithm in <span className="text-primary">Action</span>
            </p>
            <p className="text-muted-foreground text-balance md:text-pretty pt-4">
              Sit Back & Enjoy your Returns. Don't worry, we don't charge you
              until you exit the algorithm and also make a profit.
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="size-5">
                  <Check className="text-primary size-5" />
                </div>
                Real-time Monitoring
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="size-5">
                  <Check className="text-primary size-5" />
                </div>
                100% Transparent on-chain transactions to see your funds in
                action
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="size-5">
                  <Check className="text-primary size-5" />
                </div>
                Time to Bull your portfolio in the Bear market
              </div>
            </div>
          </div>
          <Mockup imageSrc={AlgorithmLive} altText="Find Algorithm" />
        </div>
      </div>
    </div>
  );
};

export default Guide;
