import logo from "../../assets/logo.svg";

const Brand = () => {
  return (
    <div className="flex gap-2">
      <img src={logo} alt="Logo" className="h-16 w-16" />
      <div className="flex items-center text-xl font-medium">Exponential</div>
    </div>
  );
};

export default Brand;
