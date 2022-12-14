import React from "react";
import { Link } from "react-router-dom";
import { TABS } from "../../utils/pages-tabs";
import { TABS2 } from "../../utils/pages-tabs";
import logo from "../../assets/logo1.png";
import Toggler from "./toggler";




export default function Header({darkMode,handleClick}) {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: "10",
        right: 0,
        left: 0,
        backgroundColor: "rgb(128,0,0)",
      }}
    >
      <header class="text-gray-400  body-font ">
        <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link
            class="flex title-font font-medium items-center text-white mb-0 md:mb-0"
            to="/home"
          >
            <img src={logo} alt="logo" width={25} height={20}></img>
            <span class=" ml-3 text-xl">UIET DOCS</span>
          </Link>
          <nav class=" ml-3 text-xl md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {TABS?.map(({ label, value }) => (
              <Link
                class="mr-5 text-white hover:text-white font-medium"
                to={value}
              >
                {label}
              </Link>
            ))}
            <Toggler darkMode={darkMode} handleClick={handleClick}/>
          </nav>
          
          {TABS2?.map(({ label, value }) => (
          <Link to={value}
            
           
            
          >
            <button
              style={{ backgroundColor: "white" }}
              class="animate-pulse inline-flex items-center  border-0 py-2 px-4 focus:outline-none hover:bg-green rounded text-base mt-2 md:mt-0"
            >
              {label}
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
          ))}
        </div>
      </header>
    </div>
  );
};


