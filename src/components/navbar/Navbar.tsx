import Brand from "./Brand";
import CallToAction from "./CallToAction";

const Navbar = () => {
  return (
    <>
      <div id="home">
        <div className="flex justify-center md:justify-between items-center">
          <Brand />
          <CallToAction />
        </div>
      </div>
    </>
  );
};

export default Navbar;
