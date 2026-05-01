import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter, FaDiscord } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

const sections = [
  "home",
  "about",
  "projects",
  "experience",
  "certifications",
  "achievements",
  "contact",
];

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        sections.forEach((id) => {
          const section = document.getElementById(id);
          if (section) {
            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (
              window.scrollY >= top &&
              window.scrollY < top + height
            ) {
              setActive(id);
            }
          }
        });
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-6">

        {/* Spacer (for center alignment) */}
        <div className="hidden md:block w-24"></div>

        {/* 🔗 Center Nav Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`relative capitalize transition ${
                active === sec
                  ? "text-purple-400"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {sec}

              {/* Active underline */}
              {active === sec && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-purple-500 rounded"></span>
              )}
            </a>
          ))}
        </div>

        {/* 🔗 Social Icons */}
        <div className="flex items-center gap-4">

          {/* Desktop Icons */}
          <div className="hidden md:flex gap-5 text-xl text-neutral-400">

            <a
              href="https://www.linkedin.com/in/khushbu-kumari-b727b525a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 hover:scale-110 transition"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Khushbu8130"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 hover:scale-110 transition"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://discord.gg/YOUR-LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 hover:scale-110 transition"
              title="Discord"
            >
              <FaDiscord />
            </a>

            <a
              href="https://twitter.com/YOUR-HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 hover:scale-110 transition"
              title="Twitter"
            >
              <FaSquareXTwitter />
            </a>

          </div>

          {/* 📱 Hamburger */}
          <div className="md:hidden text-2xl text-white">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

      </div>

      {/* 📱 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 px-6 py-6 space-y-5">

          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={() => setIsOpen(false)}
              className={`block text-sm capitalize ${
                active === sec
                  ? "text-purple-400"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {sec}
            </a>
          ))}

          {/* Mobile Social */}
          <div className="flex gap-5 pt-4 text-xl text-neutral-400">

            <a href="https://www.linkedin.com/in/khushbu-kumari-b727b525a/" target="_blank">
              <FaLinkedin />
            </a>

            <a href="https://github.com/Khushbu8130" target="_blank">
              <FaGithub />
            </a>

            <a href="https://discord.gg/YOUR-LINK" target="_blank">
              <FaDiscord />
            </a>

            <a href="https://twitter.com/YOUR-HANDLE" target="_blank">
              <FaSquareXTwitter />
            </a>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
