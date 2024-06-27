import React from "react";
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

const Card = ({ title, description, link, image, index, techs }, ...props) => {
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
            w-full
            h-48
           
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
          className="
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

            
        "
        >
          {description}
        </div>
        {
          <ul
            className="
           flex
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
                onClick={() => {
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
                      : "juce"
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
    </div>
  );
};

export default Card;
