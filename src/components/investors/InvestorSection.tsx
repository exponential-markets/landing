import coinStack from "../../assets/Coin Stack.png";
import priceUp from "../../assets/price up.png";
import piggyBank from "../../assets/Piggy Bank.png";
import glassMarbles from "../../assets/glass marbles.png";
import globe from "../../assets/globe.png";
import fillerArrow from "../../assets/filler arrow.png";

const InvestorSection = () => {
  return (
    <div id="investor" className="mx-24 mt-32">
      <h2 className="w-fit text-4xl text-transparent bg-gradient-to-r from-[#747478] via-white to-[#434345] bg-clip-text">
        For Investors
      </h2>
      <div className="mx-10 mt-10 grid grid-cols-3 gap-4">
        <div className="border-[1.5px] rounded-xl px-5 pt-5 bg-angular-gradient-1 backdrop-blur-[70px] flex flex-col h-64">
          <h3 className="text-2xl mb-4">
            Start with <br />
            as low as 10$
          </h3>
          <div className="mt-auto flex justify-between items-end">
            <img src={fillerArrow} alt="filler arrow" className="w-16 h-10" />
            <img src={coinStack} alt="coin stack" className="w-24 h-24" />
          </div>
        </div>
        <div className="border-[1.5px] rounded-xl px-5 pt-5 bg-angular-gradient-2 backdrop-blur-[70px] flex flex-col h-64">
          <h3 className="text-2xl mb-4">
            Real time <br />
            Monitoring
          </h3>
          <div className="mt-auto flex justify-between items-end">
            <img src={fillerArrow} alt="filler arrow" className="w-16 h-10" />
            <img src={priceUp} alt="price up" className="h-36" />
          </div>
        </div>
        <div className="border-[1.5px] rounded-xl px-5 pt-5 bg-angular-gradient-3 backdrop-blur-[70px] flex flex-col h-64">
          <h3 className="text-2xl mb-4">
            Withdraw <br />
            Anytime Anywhere
          </h3>
          <div className="mt-auto flex justify-between items-end">
            <img src={fillerArrow} alt="filler arrow" className="w-16 h-10" />
            <img src={piggyBank} alt="piggy bank" className="h-32" />
          </div>
        </div>
        <div className="col-span-2 border-[1.5px] rounded-xl px-5 pt-5 bg-angular-gradient-2 backdrop-blur-[70px] flex flex-col h-64">
          <div className="flex justify-between flex-grow">
            <div>
              <h3 className="text-2xl mb-2">
                You Focus on Gains
                <br />
                We Handle the Code
              </h3>
              <p className="text-sm text-gray-300 max-w-[60%] mt-2">
                Our advanced algorithms and expert team manage the technical aspects, 
                allowing you to concentrate on your investment strategy.
              </p>
            </div>
            <img src={glassMarbles} alt="glass marbles" className="h-40 self-end" />
          </div>
          <div className="mt-auto">
            <img src={fillerArrow} alt="filler arrow" className="w-16 h-10" />
          </div>
        </div>
        <div className="border-[1.5px] rounded-xl pt-5 bg-angular-gradient-1 backdrop-blur-[70px] flex flex-col h-64">
          <h3 className="text-2xl mb-4 px-5">
            No KYC needed,
            <br />
            Deposit Crypto,
            <br />& start rightaway!
          </h3>
          <div className="mt-auto flex justify-between items-end">
            <img src={fillerArrow} alt="filler arrow" className="px-5 w-16 h-10" />
            <img src={globe} alt="globe" className="h-28 mr-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorSection;
