import { useState } from "react";
import { navLinks } from "@/constants/navlinks";

const StickyNavbarTab = () => {
  const [activeLink, setActiveLink] = useState<string>("home");

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 flex justify-center">
      <div className="z-10 w-fit flex gap-2 px-2 border border-[#393939] rounded-full bg-[#0b0b0b] opacity-90">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`mx-4 my-3 ${
              activeLink === link.id ? "text-white font-bold" : "text-gray-500"
            } hover:text-gray-300`}
            onClick={() => setActiveLink(link.id)}
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default StickyNavbarTab;
