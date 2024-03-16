import React from "react";
import html from "/icon/html5.png"
import css from "/icon/css3.png"
import js from "/icon/js.png"
import mongo from "/icon/mongo.webp"
import express from "/icon/express.png"
import react from "/icon/react.png"
import redux from "/icon/redux.png"
import node from "/icon/node.png"
import tailwind from "/icon/tailwind.png"
import git from "/icon/git.png"

function TechStack() {
  return (
    
      <div className=" flex mt-2 sm:h-96 justify-center items-center">
        
        <ul className=" h-4/5 w-4/5 grid grid-cols-2 sm:grid-cols-5  items-center gap-3">
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src={html} alt="html"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src={css} alt="css"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src={js} alt="javascript"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src={mongo} alt="mongoDB"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src={express} alt="express"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src={react} alt="react"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src={redux} alt="redux"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src={node} alt="npde"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src={tailwind} alt="tailwindcss"></img>
          </li>
          <li >
            <img className=" border-2 p-2 shadow-2xl transition-all duration-300   hover:scale-110 hover:brightness-50 " src={git} alt="npde"></img>
          </li>
        </ul>
      </div>
  
  );
}

export default TechStack;
