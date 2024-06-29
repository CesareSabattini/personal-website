import React, { useState } from "react";
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
import tailwind from "../../assets/techs/tailwind.jpeg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Techs = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [openTech, setOpenTech] = useState(null);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setOpenTech(null); // Reset the open tech when the type changes
  };

  const filteredTechs =
    selectedType === "all"
      ? techs
      : techs.filter((tech) => tech.type.includes(selectedType));

  const toggleOpenTech = (techName) => {
    setOpenTech(openTech === techName ? null : techName);
  };

  return (
    <div>
      <h1
        className="
        xs:text-2xl
        sm:text-4xl
        font-bold
        font-mono
        p-5
        my-5
        bg-gradient-to-r from-pink-400 to-yellow-500
        xs:w-[60vw]
        sm:w-1/2
        md:w-1/3
        lg:w-1/4
        rounded-xl
        shadow-md
        text-white
        xs:ml-5
        sm:ml-10
        md:ml-[15vh]
        lg:ml-[25vh]
        font-mono
      "
      >
        Tech/{selectedType}
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
        xs:mx-2
        sm:mx-5
        md:mx-20
        lg:mx-40
      "
      >
        <div className="flex justify-end mb-4">
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className="
              bg-white
              text-black
              font-mono
              p-2
              rounded
              shadow
              cursor-pointer
            "
          >
            <option value="all">All</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="other">Other</option>
          </select>
        </div>
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
          {filteredTechs.map((tech) => (
            <div
              key={tech.name}
              className="
              flex-shrink-0
              bg-white
              text-black
              rounded-lg
              p-4
              shadow-lg
              xs:w-60
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
                    : tech.image === "tailwind"
                    ? tailwind
                    : ""
                }
                alt={tech.name}
                className="h-[18vh] 
                xs:h-[10vh]
                mx-auto mb-4 rounded"
              />

              <p className="text-sm mt-6">{tech.description}</p>
              <div
                className={`text-sm mt-2 flex ${
                  openTech === tech.name ? "flex-col" : "flex-row space-x-3"
                } justify-center
              items-center`}
              >
                <span
                  className="font-bold 
                text-xl
                "
                >
                  Projects:
                </span>
                <button
                  onClick={() => toggleOpenTech(tech.name)}
                  className="
                  text-blue-500
                  hover:text-blue-700
                  transition
                  duration-300
                  ease-in-out
                  transform
                  hover:scale-105
                  mt-2
                  "
                >
                  {openTech === tech.name ? (
                    <FaChevronUp size={24} />
                  ) : (
                    <FaChevronDown size={24} />
                  )}
                </button>
                {openTech === tech.name && (
                  <ul className="text-center pt-2">
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techs;
