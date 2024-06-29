import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative z-50">
      <div
        className="
          flex
          justify-between
          items-center
          h-16
          bg-white
          text-black
          shadow-sm
          font-mono
          xs:pl-4
          px-10
          fixed
          w-full
          top-0
          z-50
        "
      >
        <div
          className="
        xs:text-lg
        
        sm:text-2xl font-bold"
        >
          {window.location.pathname === "/about"
            ? "Personal Website/About"
            : window.location.pathname === "/contacts"
            ? "Personal Website/Contacts"
            : "Personal Website"}
        </div>
        <div className="hidden sm:flex space-x-4">
          <a
            href="/"
            className="
              text-lg
              font-semibold
              text-gray-800
              hover:text-black
              transition
              duration-300
              ease-in-out
              transform
              hover:-translate-y-1
              hover:scale-110
            "
          >
            Home
          </a>
          <a
            href="/about"
            className="
              text-lg
              font-semibold
              text-gray-800
              hover:text-black
              transition
              duration-300
              ease-in-out
              transform
              hover:-translate-y-1
              hover:scale-110
            "
          >
            About
          </a>
          <a
            href="/contacts"
            className="
              text-lg
              font-semibold
              text-gray-800
              hover:text-black
              transition
              duration-300
              ease-in-out
              transform
              hover:-translate-y-1
              hover:scale-110
            "
          >
            Contacts
          </a>
        </div>
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              text-lg
              font-semibold
              text-gray-800
              hover:text-black
              transition
              duration-300
              ease-in-out
              transform
              hover:-translate-y-1
              hover:scale-110
            "
          >
            ☰
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="sm:hidden fixed bg-white w-full shadow-lg font-mono px-10 z-40"
          style={{ top: "4rem" }} // Adjusts the position of the dropdown menu below the navbar
        >
          <a
            href="/"
            className="
              block
              text-lg
              font-semibold
              text-gray-800
              hover:text-black
              transition
              duration-300
              ease-in-out
              transform
              hover:-translate-y-1
              hover:scale-110
              py-2
            "
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="
              block
              text-lg
              font-semibold
              text-gray-800
              hover:text-black
              transition
              duration-300
              ease-in-out
              transform
              hover:-translate-y-1
              hover:scale-110
              py-2
            "
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/contacts"
            className="
              block
              text-lg
              font-semibold
              text-gray-800
              hover:text-black
              transition
              duration-300
              ease-in-out
              transform
              hover:-translate-y-1
              hover:scale-110
              py-2
            "
            onClick={() => setIsMenuOpen(false)}
          >
            Contacts
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
