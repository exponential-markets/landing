import logo from "../../assets/logo.svg";

const WaitlistButton = () => {
  return (
    <button
      type="button"
      className="flex items-center p-[1.5px] rounded-full bg-gradient-to-r from-[#747478] via-white to-[#434345]"
    >
      <div className="flex gap-2 justify-center items-center bg-background h-full rounded-full px-4 py-2">
        <img src={logo} alt="Logo" className="h-6 w-6" />
        Join the Waitlist Now
      </div>
    </button>
  );
};

export default WaitlistButton;
