import Brand from "./Brand";
import CallToAction from "./CallToAction";

const Navbar = () => {
  return (
    <>
      <div className="pt-6 md:pt-12 min-[820px]:pt-8 lg:pt-10 xl:pt-6">
        <div className="flex justify-center md:justify-between items-center">
          <Brand />
          <CallToAction />
        </div>
      </div>
    </>
  );
};

export default Navbar;
