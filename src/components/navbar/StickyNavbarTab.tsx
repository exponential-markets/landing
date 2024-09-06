import { useState } from "react";
import { navLinks } from "@/constants/navlinks";

const StickyNavbarTab = () => {
  const [activeLink, setActiveLink] = useState<string>("home");

  return (
    <div className="fixed bottom-1 md:bottom-6 lg:bottom-auto lg:top-10 xl:top-6 rounded-full backdrop-blur-[8px] left-1/2 transform -translate-x-1/2 flex justify-center">
      <div className="z-10 w-fit flex gap-2 px-2 border border-[#393939] rounded-full bg-[#0b0b0b] bg-opacity-40">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`m-1 my-1.5 md:m-2 lg:mx-4 lg:my-3 ${
              activeLink === link.id ? "text-white font-bold" : "text-gray-300"
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
