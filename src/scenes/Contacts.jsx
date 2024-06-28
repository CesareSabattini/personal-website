import React from "react";
import Navbar from "./components/Navbar";
import gmail from "../assets/contacts/gmail.png";
import github from "../assets/contacts/github.png";
import fiverr from "../assets/contacts/fiverr.png";

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
    
  
  "
    >
      <Navbar />
      <div
        className="
      grid
      sm:grid-cols-1
      
    

      
      sm:gap-4
      
      mt-10
      h-[80vh]
      w-[100vw]

      "
      >
        <div
          className="bg-gradient-to-r from-pink-500 to-yellow-400 shadow-xl h-[40vh] w-[60vh] mx-auto  my-auto rounded-xl
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
          "
          >
            <img
              src={github}
              alt=""
              className="
            h-10
            w-10

            "
            />
            https://github.com/CesareSabattini{" "}
          </div>

          <div className="mx-auto my-auto flex items-center gap-4">
            <img
              src={fiverr}
              alt=""
              className="
            h-10
            w-10
            rounded-full

            
            "
            />
            https://it.fiverr.com/cesaresabattini{" "}
          </div>
          <div className="mx-auto my-auto flex items-center gap-4">
            {" "}
            <img
              src={gmail}
              alt=""
              className="
            h-10
            w-10
            
            
            "
            />
            cesaresabattini2003@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
