import React from "react";

const Navbar = () => {
  return (
    <div
      className="
    flex
    justify-between
    items-center
    h-16
    bg-white
    text-black
    relative
    shadow-sm
    font-mono
    px-10
    
  
  "
    >
      <a className="text-2xl font-bold" href="/">
        Personal Website
      </a>
      <div className="flex space-x-4">
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
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
