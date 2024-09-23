import Badge from "@/components/shared/Badge";
import { Check, Sparkles } from "lucide-react";
import InvestorAlgorithms from "@/assets/Dark Invetsor Algorithms Square.png";
import WalletIntegration from "@/assets/Dark Wallet Integration.png";
import AlgorithmLive from "@/assets/Dark Algorithm Live.png";
import Mockup from "@/components/shared/Mockup";

const Guide = () => {
  return (
    <div id="guide" className="mt-32 text-lg flex flex-col items-center">
      <Badge icon={<Sparkles className="size-4" />} text="GUIDE" />
      <p className="text-3xl font-medium text-balance text-center xl:text-4xl">
        Invest in <span className="text-primary">3 Easy</span> Steps
      </p>
      <div className="mt-20">
        {/* step 1 */}
        <div className="flex flex-col gap-10 md:gap-6 md:flex-row mb-16">
          <div>
            <Badge icon={<Sparkles className="size-4" />} text="STEP - 1" />
            <p className="text-3xl font-medium">
              <span className="text-primary">Find</span> Algorithm
            </p>
            <p className="text-lg text-muted-foreground text-balance md:text-pretty">
              Explore algorithms created by elite developers on the platform,
              scrutinize their historical profits, AUM, proftable trades, and
              additional metrics to ascertain if this is the selection for you.
            </p>
          </div>
          <Mockup imageSrc={InvestorAlgorithms} altText="Find Algorithm" />
        </div>
        {/* step 2 */}
        <div className="flex flex-col gap-10 md:gap-6 md:flex-row-reverse mb-16">
          <div>
            <Badge icon={<Sparkles className="size-4" />} text="STEP - 2" />
            <p className="text-3xl font-medium">
              Connect <span className="text-primary">Wallet</span>
            </p>
            <p className="text-lg text-muted-foreground text-balance md:text-pretty">
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
          <Mockup imageSrc={WalletIntegration} altText="Find Algorithm" />
        </div>
        {/* step 3 */}
        <div className="flex flex-col gap-10 md:gap-6 md:flex-row mb-16 w-full">
          <div>
            <Badge icon={<Sparkles className="size-4" />} text="STEP - 3" />
            <p className="text-3xl font-medium">
              Algorithm in <span className="text-primary">Action</span>
            </p>
            <p className="text-lg text-muted-foreground text-balance md:text-pretty">
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
          <Mockup
            imageSrc={AlgorithmLive}
            altText="Find Algorithm"
            className="md:w-[140%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Guide;
