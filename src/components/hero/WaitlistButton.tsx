import logo from "../../assets/logo.svg";

const WaitlistButton = () => {
  return (
    <div className="flex justify-center min-[820px]:justify-normal">
      <button
        type="button"
        className="flex items-center p-[1.5px] rounded-full bg-gradient-to-r from-[#747478] via-white to-[#434345]"
      >
        <div className="flex text-sm gap-2 justify-center items-center bg-background h-full rounded-full px-4 py-2">
          <img src={logo} alt="Logo" className="size-5 lg:size-6" />
          Our MVP is Live
        </div>
      </button>
    </div>
  );
};

export default WaitlistButton;
