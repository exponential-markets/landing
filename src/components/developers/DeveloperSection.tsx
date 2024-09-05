import glassMarbles from "../../assets/glass marbles.png";
import target from "../../assets/target.png";
import clock from "../../assets/clock.png";
import console from "../../assets/console.png";
import fillerArrow from "../../assets/filler arrow.png";

const DeveloperSection = () => {
  return (
    <div id="developer" className="mx-24 mt-32">
      <h2 className="w-fit text-4xl text-transparent bg-gradient-to-r from-[#747478] via-white to-[#434345] bg-clip-text">
        For Developers
      </h2>
      <div className="mx-10 mt-10 grid grid-cols-3 gap-4">
        <div className="col-span-2 border-[1.5px] rounded-xl px-5 pt-5 bg-angular-gradient-2 backdrop-blur-[70px] flex flex-col h-64">
          <div className="flex justify-between flex-grow">
            <div>
              <h3 className="text-2xl mb-2">
                Write Algorithms in Python <br />
                with access to standard libs <br />
                and our helper methods
              </h3>
              {/* <p className="text-sm text-gray-300 max-w-[60%] mt-2">
                subheadings and text here
              </p> */}
            </div>
            <img
              src={glassMarbles}
              alt="glass marbles"
              className="h-40 self-end"
            />
          </div>
          <div className="mt-auto">
            <img src={fillerArrow} alt="filler arrow" className="w-16 h-10" />
          </div>
        </div>
        <div className="border-[1.5px] rounded-xl px-5 pt-5 bg-angular-gradient-1 backdrop-blur-[70px] flex flex-col h-64">
          <h3 className="text-2xl mb-4">
            You focus on algo, <br />
            We focus on investors
          </h3>
          <div className="mt-auto flex justify-between items-end">
            <img src={fillerArrow} alt="filler arrow" className="w-16 h-10" />
            <img src={target} alt="target" className="h-32" />
          </div>
        </div>
        <div className="border-[1.5px] rounded-xl px-5 pt-5 bg-angular-gradient-2 backdrop-blur-[70px] flex flex-col h-64">
          <h3 className="text-2xl mb-4">
            Backtest your stratagies
            <br />
            with our Engine
          </h3>
          <div className="mt-auto flex justify-between items-end">
            <img src={fillerArrow} alt="filler arrow" className="w-16 h-10" />
            <img src={clock} alt="clock" className="h-36" />
          </div>
        </div>
        <div className="col-span-2 border-[1.5px] rounded-xl px-5 pt-5 bg-angular-gradient-2 backdrop-blur-[70px] flex flex-col h-64">
          <div className="flex justify-between flex-grow">
            <div>
              <h3 className="text-2xl mb-2">
                You own the Algo IP,
                <br />
                You own the Commission
              </h3>
              {/* <p className="text-sm text-gray-300 max-w-[60%] mt-2">
                subheadings and text here
              </p> */}
            </div>
            <img src={console} alt="game console" className="h-40 self-end" />
          </div>
          <div className="mt-auto">
            <img src={fillerArrow} alt="filler arrow" className="w-16 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSection;
