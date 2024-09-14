import glassMarbles from "../../assets/glass marbles.png";
import target from "../../assets/target.png";
import clock from "../../assets/clock.png";
import console from "../../assets/console.png";
import fillerArrow from "../../assets/filler arrow.png";

const DeveloperSection = () => {
  return (
    <div id="developer" className="mt-4 pt-4 lg:pt-24 xl:mt-0 xl:mx-24">
      <div className="flex justify-center">
        <h2 className="w-fit text-4xl text-transparent bg-gradient-to-r from-[#747478] via-white to-[#434345] bg-clip-text">
          For Developers
        </h2>
      </div>
      <div className="mt-5 lg:mx-10 lg:mt-10 grid grid-cols-2 min-[820px]:grid-cols-3 gap-4">
        <div className="col-span-2 border-[1.5px] rounded-xl px-4 pt-4 lg:px-5 lg:pt-5 bg-angular-gradient-2 backdrop-blur-[70px] flex justify-between lg:h-64">
          <div className="flex flex-col justify-between w-full md:w-auto">
            <div>
              <h3 className="text-xl lg:text-2xl mb-2">
                Write Algorithms in Python <br />
                with access to standard libs <br />
                and our helper methods
              </h3>
            </div>
            <div className="flex justify-between">
              <img
                src={fillerArrow}
                alt="filler arrow"
                className="mb-4 w-16 h-10 self-end"
              />
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={glassMarbles}
              alt="glass marbles"
              className="mb-4 w-28 md:w-36 self-end"
            />
          </div>
        </div>
        <div className="border-[1.5px] rounded-xl px-4 pt-4 lg:px-5 lg:pt-5 bg-angular-gradient-1 backdrop-blur-[70px] flex flex-col lg:h-64">
          <h3 className="text-xl lg:text-2xl">
            You focus on algo, <br />
            We focus on investors
          </h3>
          <div className="mt-auto flex justify-between items-end">
            <img
              src={fillerArrow}
              alt="filler arrow"
              className="mb-4 w-8 h-5 md:w-16 md:h-10"
            />
            <img src={target} alt="target" className="mb-4 w-20 lg:w-40" />
          </div>
        </div>
        <div className="border-[1.5px] rounded-xl px-4 pt-4 lg:px-5 lg:pt-5 bg-angular-gradient-2 backdrop-blur-[70px] flex flex-col lg:h-64">
          <h3 className="text-xl lg:text-2xl mb-4">
            Backtest your stratagies
            <br />
            with our Engine
          </h3>
          <div className="flex justify-between items-end">
            <img
              src={fillerArrow}
              alt="filler arrow"
              className="mb-4 w-8 h-5 md:w-16 md:h-10"
            />
            <img src={clock} alt="clock" className="mb-2 h-20 lg:h-36" />
          </div>
        </div>
        <div className="col-span-2 border-[1.5px] rounded-xl px-4 pt-4 lg:px-5 lg:pt-5 bg-angular-gradient-2 backdrop-blur-[70px] flex justify-between lg:h-64">
          <div className="flex flex-col justify-between w-fit">
            <div>
              <h3 className="text-xl lg:text-2xl mb-2">
                You own the Algo IP,
                <br />
                You own the Commission
              </h3>
            </div>
            <img
              src={fillerArrow}
              alt="filler arrow"
              className="mb-4 w-16 h-10"
            />
          </div>
          <div className="flex items-center">
            <img src={console} alt="game console" className="h-36 lg:h-48" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSection;
