import React from "react";
import projects from "../../my-projects.json";
import Card from "./Card";

const Hero = () => {
  return (
    <div
      className="
   text-4xl
    font-bold
    font-mono
    p-10
    bg-gradient-to-r from-green-400 to-blue-500
  

    
   
   "
    >
      <div
        className="
grid
grid-cols-1
gap-4
md:grid-cols-1
lg:grid-cols-2
xl:grid-cols-2
md:gap-6
lg:gap-8
xl:gap-10
mt-10


"
      >
        {projects.map((projects, index) => (
          <Card key={index} {...projects} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
