import React from "react";
import Navbar from "./components/Navbar";
import gmail from "../assets/contacts/gmail.png";
import github from "../assets/contacts/github.png";
import fiverr from "../assets/contacts/fiverr.png";

const status = [
  {
    state: "Available",
    message:
      "Feel free to contact me! I'm available for freelance work and contributions to open-source projects.",
  },
  {
    state: "Unavailable",
    message:
      "I'm currently unavailable for freelance work and contributions to open-source projects. Feel free to contact me for availability infos.",
  },
];

const Contacts = () => {
  return (
    <div
      className="
  bg-gradient-to-r
  from-green-400
    to-blue-500
    h-screen
    text-white
    font-mono
    pt-10
    
  
  "
    >
      <Navbar />
      <div
        className="
     
      
      mt-10
      h-[80vh]
      w-[100vw]

      "
      >
        <div
          className="bg-gradient-to-r from-pink-500 to-yellow-400 shadow-xl h-[40vh] w-[60vh] xs:w-[70vw] mx-auto  my-auto xs:mt-[10vh] rounded-xl
          grid 
          grid-cols-1
          gap-4

"
        >
          <div
            className="mx-auto my-auto 
          flex
          items-center
          gap-4
              transition
            duration-500
            ease-in-out
            transform
            hover:scale-105
            hover:-translate-y-2
            hover:rounded-md
            hover:p-1
            hover:translate-x-1
          cursor-pointer
            
            hover:text-black
            hover:shadow-xl

            "
            onClick={() => {
              window.open("https://github.com/CesareSabattini");
            }}
          >
            <img
              src={github}
              alt=""
              className="
            h-10
            w-10

            "
            />
            CesareSabattini{" "}
          </div>

          <div
            className="mx-auto my-auto flex items-center gap-4       transition
            duration-500
            ease-in-out
            transform
            hover:scale-105
            hover:-translate-y-2
            hover:rounded-md
            hover:p-1
            hover:translate-x-1
            cursor-pointer
          
            
            hover:text-black
            hover:shadow-xl

            "
            onClick={() =>
              window.open("https://www.fiverr.com/cesaresabattini")
            }
          >
            <img
              src={fiverr}
              alt=""
              className="
            h-10
            w-10
            rounded-full

            
            "
            />
            cesaresabattini{" "}
          </div>
          <div
            className="mx-auto my-auto flex items-center gap-4 cursor-pointer
            transition
            duration-500
            ease-in-out
            transform
            hover:scale-105
            hover:-translate-y-2
            hover:rounded-md
            hover:p-1
            hover:translate-x-1
          
            
            hover:text-black
            hover:shadow-xl

            "
            onClick={() => window.open("mailto:")}
          >
            {" "}
            <img
              src={gmail}
              alt=""
              className="
            h-10
            w-10
            
            
            "
            />
            cesaresabattini2003
          </div>
        </div>

        <div
          className="bg-gradient-to-r from-sky-400 to-green-500
           p-4
        xs:text-sm
        
           shadow-xl  text-center xs:w-[70vw] sm:w-[60vw] mx-auto  my-auto xs:mt-[5vh] rounded-xl
       
          gap-4

"
        >
          {status[0].message}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
