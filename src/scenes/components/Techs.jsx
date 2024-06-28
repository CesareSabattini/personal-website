import React from "react";
import techs from "../../my-techs.json";
import myprojects from "../../my-projects.json";
import html from "../../assets/techs/html.png";
import css from "../../assets/techs/css.png";
import js from "../../assets/techs/js.png";
import react from "../../assets/techs/react.png";
import node from "../../assets/techs/node.png";
import express from "../../assets/techs/express.png";
import mongo from "../../assets/techs/mongo.png";
import latex from "../../assets/techs/latex.png";
import cpp from "../../assets/techs/cpp.png";
import juce from "../../assets/techs/JUCE.png";

const Techs = () => {
  return (
    <div>
      <h1
        className="
        text-4xl
        font-bold
        font-mono
        
        p-5
        my-5
        bg-gradient-to-r from-pink-400 to-yellow-500
        sm:w-1/2
        md:w-1/3
        lg:w-1/4
        rounded-xl
        shadow-md
        text-white
        sm:ml-10
        md:ml-[15vh]
        lg:ml-[25vh]
        
      
      "
      >
        Techs
      </h1>
      <div
        className="
        bg-gradient-to-r
        from-pink-500
        to-yellow-400
        p-4
        rounded-xl
        shadow-md
        text-white
        font-mono
        sm:mx-5
        md:mx-20
        lg:mx-40
      "
      >
        <div
          className="
          flex
          overflow-x-scroll
          space-x-4
          mt-6
         
        "
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="
              flex-shrink-0
              bg-white
              text-black
              rounded-lg
              p-4
              shadow-lg
              w-80
            "
            >
              <img
                src={
                  tech.image === "html"
                    ? html
                    : tech.image === "css"
                    ? css
                    : tech.image === "js"
                    ? js
                    : tech.image === "react"
                    ? react
                    : tech.image === "node"
                    ? node
                    : tech.image === "express"
                    ? express
                    : tech.image === "mongo"
                    ? mongo
                    : tech.image === "latex"
                    ? latex
                    : tech.image === "cpp"
                    ? cpp
                    : tech.image === "juce"
                    ? juce
                    : ""
                }
                alt={tech.name}
                className="h-[18vh] mx-auto mb-4 rounded"
              />

              <p
                className="text-sm mb-2 flex 
              flex-col justify-center items-center"
              >
                <span className="font-bold text-xl ">Level:</span>
                <span>{tech.level}</span>
              </p>
              <p className="text-sm">{tech.description}</p>
              <p
                className="text-sm mt-2 flex flex-col justify-center
              items-center"
              >
                <span
                  className="font-bold 
                text-xl
                "
                >
                  Projects:
                </span>
                <ul className=" ">
                  {tech.projects.map((project) => (
                    <li
                      key={project}
                      className="
                      cursor-pointer
                    text-sm
                    text-blue-500
                    hover:underline
                    transition
                    duration-300
                    ease-in-out
                    transform
                    hover:-translate-y-0
                    hover:scale-105

                    
                    "
                      onClick={() => {
                        myprojects.map((myproject) => {
                          if (myproject.image === project) {
                            window.location.href = myproject.link;
                          }
                        });
                      }}
                    >
                      {myprojects.map((myproject) => {
                        if (myproject.image === project) {
                          return myproject.title;
                        }
                      })}
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techs;
