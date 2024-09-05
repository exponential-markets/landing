import Brand from "./Brand";
import CallToAction from "./CallToAction";
import StickyNavbarTab from "./StickyNavbarTab";

const Navbar = () => {
  return (
    <div id="home">
      <StickyNavbarTab />
      <div className="flex justify-between items-center">
        <Brand />
        <CallToAction />
      </div>
    </div>
  );
};

export default Navbar;
