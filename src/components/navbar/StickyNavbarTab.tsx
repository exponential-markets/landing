import { useState, useEffect } from "react";
import { navLinks } from "@/constants/navlinks";

const StickyNavbarTab = () => {
  const [activeLink, setActiveLink] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Check if the user has scrolled to the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight) {
        // Page is fully scrolled
        setActiveLink("contact");
        return;
      }

      // Use a buffer to handle edge cases
      const buffer = 200; // Adjust this value as needed

      let newActiveLink = "home"; // Default to "home" or any initial value

      // Iterate through navLinks to determine the active section
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          // Adjust visibility check to ensure proper detection of sections
          if (
            scrollPosition + buffer >= sectionTop &&
            scrollPosition <= sectionBottom
          ) {
            newActiveLink = link.id;
          }
        }
      });

      // Update only if the active link has changed
      if (newActiveLink !== activeLink) {
        setActiveLink(newActiveLink);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]);

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
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default StickyNavbarTab;
