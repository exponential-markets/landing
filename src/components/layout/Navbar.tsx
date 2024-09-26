import { useState, useEffect, useRef } from "react";
import EarlyAccess from "@/components/shared/EarlyAccess";
import { navbarLinks } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useLocation } from "react-router-dom";
import { usePostHog } from "posthog-js/react";
import { scheduleCall } from "@/lib/cta";
import ExponentialLogo from "@/assets/logo.svg";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar = () => {
  const posthog = usePostHog();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const navbarRef = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    const current = navbarRef.current as HTMLElement | null;
    if (current && !current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsMenuOpen(false);
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    setActiveLink(location.pathname);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [location.pathname, lastScrollY]);

  return (
    <div>
      <nav
        ref={navbarRef}
        className={cn(
          "translate-x-1/2 right-1/2 fixed w-navbar-width md:w-navbar-width-md xl:w-navbar-width-xl top-5 p-4 border z-50 backdrop-blur-[8px] bg-background/70 rounded-lg lg:rounded-full transition-transform duration-300",
          isVisible ? "translate-y-0" : "-translate-y-[100px]"
        )}
      >
        <div className="flex justify-between items-center">
          <div className="xl:flex-1 flex items-center gap-2">
            <img
              src={ExponentialLogo}
              alt="Exponential Markets"
              className="size-10"
            />
            <span className="text-xl font-medium">Exponential</span>
          </div>
          <div className="hidden lg:flex xl:flex-1 items-center gap-6 xl:gap-10">
            {navbarLinks.map(({ name, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-base font-medium w-fit hover:text-primary/80 transition-all duration-300",
                  activeLink === href && "text-primary"
                )}
              >
                {name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex xl:flex-1 justify-end gap-4 xl:gap-6 items-center">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full hover:bg-foreground hover:text-background border-2 border-foreground px-6"
              onClick={() => {
                posthog.capture("schedule_call", {
                  from: "navbar",
                });
                scheduleCall();
              }}
            >
              Schedule a Call
            </Button>
            <EarlyAccess />
          </div>
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className="relative z-50 w-10 h-10 lg:hidden"
          >
            <MenuIcon
              className={`top-0 size-10 text-primary absolute transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <XIcon
              className={`top-0 size-10 text-primary absolute transition-all duration-300 ${
                isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`}
            />
          </button>
        </div>
        <div
          className={`overflow-hidden flex flex-col gap-4 items-center text-center transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-72 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          {navbarLinks.map(({ name, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "w-fit hover:text-primary/80 transition-all duration-300",
                activeLink === href && "text-primary"
              )}
            >
              {name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
