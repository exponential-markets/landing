import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <TracingBeam>
        <div className="relative">
          <Navbar />
          <div>
            <Outlet />
          </div>
        </div>
        <Footer />
      </TracingBeam>
    </>
  );
};

export default Layout;
