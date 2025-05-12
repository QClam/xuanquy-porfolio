import React from "react";

export const MobileNav = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.8)] flex flex-col items-center justify-center
                    transition-all duration-300 ease-in-out 
                    ${
                      menuOpen
                        ? "h-screen opacity-100 pointer-events-auto"
                        : "h-0 opacity-0 pointer-events-none"
                    }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl z-50 focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        &times; {/* Close icon */}
      </button>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : " opacity-0 -translate-y-5"
            }`}
      >
        Giới thiệu bản thân
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : " opacity-0 -translate-y-5"
            }`}
      >
        Các dự án
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : " opacity-0 -translate-y-5"
            }`}
      >
        Liên hệ
      </a>
    </div>
  );
};
