import coinStack from "../../assets/Coin Stack.png";
import priceUp from "../../assets/price up.png";
import piggyBank from "../../assets/Piggy Bank.png";
import glassMarbles from "../../assets/glass marbles.png";
import globe from "../../assets/globe.png";
import fillerArrow from "../../assets/filler arrow.png";

const InvestorSection = () => {
  return (
    <div id="investor" className="mt-4 pt-4 lg:pt-24 xl:mt-0 xl:mx-24">
      <div className="flex justify-center">
        <h2 className="w-fit text-3xl lg:text-4xl text-transparent bg-gradient-to-r from-[#747478] via-white to-[#434345] bg-clip-text">
          For Investors
        </h2>
      </div>
      <div className="lg:mx-10 mt-5 lg:mt-10 grid grid-cols-2 min-[820px]:grid-cols-3 gap-4">
        <div className="border-[1.5px] rounded-xl px-4 pt-4 lg:px-5 lg:pt-5 bg-angular-gradient-1 backdrop-blur-[70px] flex flex-col h-44 lg:h-64">
          <h3 className="text-xl lg:text-2xl mb-4">
            Start with <br />
            as low as 10$
          </h3>
          <div className="mt-auto flex justify-between items-end">
            <img
              src={fillerArrow}
              alt="filler arrow"
              className="w-8 h-5 md:w-16 md:h-10"
            />
            <img
              src={coinStack}
              alt="coin stack"
              className="size-20 lg:size-36"
            />
          </div>
        </div>
        <div className="border-[1.5px] rounded-xl px-4 pt-4 lg:px-5 lg:pt-5 bg-angular-gradient-2 backdrop-blur-[70px] flex flex-col h-44 lg:h-64">
          <h3 className="text-xl lg:text-2xl mb-4">
            Real time <br />
            Monitoring
          </h3>
          <div className="mt-auto flex justify-between items-end">
            <img
              src={fillerArrow}
              alt="filler arrow"
              className="w-8 h-5 md:w-16 md:h-10"
            />
            <img
              src={priceUp}
              alt="price up"
              className="-mr-4 -mb-2 lg:mr-0 lg:mb-0 size-24 lg:size-36"
            />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 border-[1.5px] rounded-xl px-4 pt-4 lg:px-5 lg:pt-5 bg-angular-gradient-3 backdrop-blur-[70px] flex flex-col lg:h-64">
          <h3 className="text-xl lg:text-2xl lg:mb-4">
            Withdraw <br />
            Anytime Anywhere
          </h3>
          <div className="mt-auto flex justify-between items-end">
            <img
              src={fillerArrow}
              alt="filler arrow"
              className="w-8 h-5 md:w-16 md:h-10"
            />
            <img
              src={piggyBank}
              alt="piggy bank"
              className="size-24 lg:size-36"
            />
          </div>
        </div>
        <div className="md:order-1 min-[820px]:order-[0] col-span-2 border-[1.5px] rounded-xl px-5 pt-5 bg-angular-gradient-2 backdrop-blur-[70px] flex justify-between lg:h-64">
          <div className="flex flex-col justify-between md:w-fit">
            <div>
              <h3 className="text-xl lg:text-2xl mb-2">
                You Focus on Gains
                <br />
                We Handle the Code
              </h3>
              <p className="text-sm text-gray-300 my-2 min-[820px]:mb-0">
                Our advanced algorithms and expert team manage the technical
                aspects, allowing you to concentrate on your investment
                strategy.
              </p>
            </div>
            <div className="flex justify-between min-[820px]:mt-2">
              <img
                src={fillerArrow}
                alt="filler arrow"
                className="w-16 h-10 self-end"
              />
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={glassMarbles}
              alt="glass marbles"
              className="w-72 md:w-44 self-end"
            />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 border-[1.5px] rounded-xl pt-5 bg-angular-gradient-1 backdrop-blur-[70px] lg:h-64">
          <div>
            <div>
              <h3 className="text-xl lg:text-2xl px-5 min-[820px]:mb-4">
                No KYC needed,
                <br />
                Deposit Crypto,
                <br />& start rightaway!
              </h3>
              <div className="mt-auto flex justify-between items-end">
                <img
                  src={fillerArrow}
                  alt="filler arrow"
                  className="mx-5 w-16 h-10"
                />
                <img
                  src={globe}
                  alt="globe"
                  className="h-[7.5rem] min-[820px]:h-[4.5rem] lg:h-[7.5rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorSection;
