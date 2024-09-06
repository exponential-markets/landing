import logo from "../../assets/logo.svg";

const Brand = () => {
  return (
    <div className="flex gap-2">
      <img src={logo} alt="Logo" className="size-10 md:size-12 lg:size-16" />
      <div className="flex items-center text-xl font-medium">Exponential</div>
    </div>
  );
};

export default Brand;
