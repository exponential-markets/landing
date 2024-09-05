import coinStack from "../../assets/Coin Stack.png";
import priceUp from "../../assets/price up.png";
import piggyBank from "../../assets/Piggy Bank.png";
import glassMarbles from "../../assets/glass marbles.png";
import globe from "../../assets/globe.png";
import fillerArrow from "../../assets/filler arrow.png";

const InvestorSection = () => {
  return (
    <div id="investor" className="mx-14 mt-40">
      <h2 className="w-fit text-4xl text-transparent bg-gradient-to-r from-[#747478] via-white to-[#434345] bg-clip-text">
        For Investors
      </h2>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="border-[1.5px] rounded-xl px-6 pt-6 bg-angular-gradient-1 backdrop-blur-[70px]">
          <h3 className="text-2xl mb-5">
            Start with <br />
            as low as 10$
          </h3>
          <div className="ml-8 flex gap-24">
            <img src={fillerArrow} alt="coin stack" className="w-20 h-12" />
            <img src={coinStack} alt="coin stack" className="w-28 h-28 mt-8" />
          </div>
        </div>
        <div className="border-[1.5px] rounded-xl px-6 pt-6 bg-angular-gradient-2 backdrop-blur-[70px]">
          <div className="flex gap-8">
            <h3 className="text-2xl">
              Real time <br />
              Monitoring
            </h3>
            <img src={fillerArrow} alt="coin stack" className="w-20 h-12" />
          </div>
          <div className="flex justify-center">
            <img src={priceUp} alt="coin stack" className="h-40 mt-4" />
          </div>
        </div>
        <div className="border-[1.5px] rounded-xl px-6 pt-6 bg-angular-gradient-3 backdrop-blur-[70px]">
          <h3 className="text-2xl">
            Withdraw <br />
            Anytime Anywhere
          </h3>
          <div className="mt-8 flex gap-20">
            <img src={fillerArrow} alt="coin stack" className="w-20 h-12" />
            <img src={piggyBank} alt="coin stack" className="h-36" />
          </div>
        </div>
        <div className="col-span-2 border-[1.5px] rounded-xl px-6 pt-6 bg-angular-gradient-2 backdrop-blur-[70px]">
          <h3 className="text-2xl">
            You Focus on Gains
            <br />
            We Handle the Code
          </h3>
          <div className="mt-2 flex gap-20 justify-between">
            <img src={fillerArrow} alt="coin stack" className="w-20 h-12" />
            <img src={glassMarbles} alt="coin stack" className="h-40 mr-20" />
          </div>
        </div>
        <div className="border-[1.5px] rounded-xl pl-6 pt-6 bg-angular-gradient-1 backdrop-blur-[70px]">
          <h3 className="text-2xl">
            No KYC needed,
            <br />
            Deposit Crypto,
            <br />& start rightaway!
          </h3>
          <div className="mt-2 flex justify-between">
            <img src={fillerArrow} alt="coin stack" className="w-20 h-12" />
            <img src={globe} alt="coin stack" className="h-36" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorSection;
