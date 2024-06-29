import React, { useState } from "react";
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
import stainlessplugins from "../../assets/projects/stainlessplugins.png";
import stainlessdistortion from "../../assets/projects/stainlessdistortion.png";
import pioneergdb from "../../assets/projects/pioneergdb.png";
import personalwb from "../../assets/projects/personalwb.png";
import jucedjapp from "../../assets/projects/jucedjapp.png";

const Card = ({ title, description, link, image, techs }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="
    bg-gradient-to-r from-pink-500 to-yellow-400
    p-4
    rounded-xl
    shadow-md
    text-white
    font-mono
    transition
    duration-300
    ease-in-out
    transform
    hover:-translate-y-1
    hover:scale-105
    cursor-pointer
    "
      onClick={() => {
        window.location.href = link;
      }}
    >
      <h2
        className="
        text-2xl
        font-bold
        border-b-2
        "
      >
        {title}
      </h2>

      <div
        className="
        mt-4
        text-lg
        font-semibold
        flex
        grid 
        sm:grid-cols-5
        md:grid-cols-5
        sm:gap-1
        md:gap-1
        lg:gap-3
        xl:gap-4
      "
      >
        <img
          src={
            image === "stainlessplugins"
              ? stainlessplugins
              : image === "stainlessdistortion"
              ? stainlessdistortion
              : image === "pioneergdb"
              ? pioneergdb
              : image === "personalwb"
              ? personalwb
              : image === "formulariminimali"
              ? latex
              : image === "jucedjapp"
              ? jucedjapp
              : ""
          }
          className={`
            mt-4
            rounded-lg
            xs:h-[15vh]
            xs:w-[25vh]
            xs:mx-auto
            sm:w-full
            sm:h-48
            ${
              image === "formulariminimali" ? "object-contain" : " object-cover"
            }
            sm:col-span-2
            sm:row-span-3
            md:col-span-2
            md:row-span-3
          `}
        />
        <div
          className={`
            mt-4
            flex
            justify-center
            items-center
            
            sm:col-span-3
            sm:col-start-3
            sm:row-start-1
            md:col-span-3
            md:col-start-3
            md:row-start-1
            ${showDescription ? "xs:flex" : "xs:hidden"}
            sm:flex
            xs:text-sm
            xs:text-center
            sm:text-lg
            sm:text-left
          `}
        >
          {description}
        </div>
        {
          <ul
            className="
             
             space-x-5
             w-full
             border-b
             border-white
             py-3
             flex
             justify-center
             sm:col-span-3
             sm:col-start-3
             sm:row-start-3
             md:col-span-3
             md:col-start-3
             md:row-start-3
           "
          >
            {techs.map((tech, index) => (
              <li
                key={index}
                onClick={(e) => {
                  e.stopPropagation(); // To prevent triggering the parent onClick
                  console.log(tech);
                }}
              >
                <img
                  src={
                    tech === "html"
                      ? html
                      : tech === "css"
                      ? css
                      : tech === "js"
                      ? js
                      : tech === "react"
                      ? react
                      : tech === "node"
                      ? node
                      : tech === "express"
                      ? express
                      : tech === "mongo"
                      ? mongo
                      : tech === "latex"
                      ? latex
                      : tech === "cpp"
                      ? cpp
                      : tech === "juce"
                      ? juce
                      : ""
                  }
                  className="
                     w-10
                     h-10
                   "
                />
              </li>
            ))}
          </ul>
        }
      </div>
      <button
        className="
       flex
       justify-center
       items-center
       w-[90%]
       mx-auto
       h-10
        sm:hidden
        mt-2
        p-2
        text-blue-800
        text-xs
        text-black
        rounded
        "
        onClick={(e) => {
          e.stopPropagation();
          setShowDescription(!showDescription);
        }}
      >
        {showDescription ? "Hide Description" : "Show Description..."}
      </button>
    </div>
  );
};

export default Card;
