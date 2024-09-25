import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
