import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  // authState: {
  //   isAuthenticated: boolean;
  //   address?: string;
  // };
  // onConnectWallet: () => Promise<void>;
}

function Layout(
  // { authState, onConnectWallet }: LayoutProps
) 
  {
  return (
    <>
      <TracingBeam>
        <div className="relative">
          <Navbar />
          <div>
            <nav>
              {/* {!authState.isAuthenticated ? (
                <button onClick={onConnectWallet}>
                  Connect Wallet
                </button>
              ) : (
                <div>
                  Connected: {authState.address?.slice(0, 6)}...{authState.address?.slice(-4)}
                </div>
              )} */}
            </nav>
            <Outlet />
          </div>
        </div>
        <Footer />
      </TracingBeam>
    </>
  );
}

export default Layout;
