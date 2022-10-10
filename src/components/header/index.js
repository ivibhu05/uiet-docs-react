import React from 'react';
import { Link } from 'react-router-dom';
import { TABS } from '../../utils/pages-tabs';
import logo from '../../assets/logo1.png';

const Header = () => {

  return (
    <div
      style={{
        position: 'sticky',
        top:0,
        right: 0,
        zIndex: '10',
        left: 0,
        backgroundColor: 'rgb(128,0,0)',
      }}
    >
      <header class=" text-gray-400  body-font">
        <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link class="flex title-font font-medium items-center text-white mb-0 md:mb-0">
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
          </nav>
          <a href="www.google.com" target="_blank">
            <button
              style={{ backgroundColor: 'white' }}
              class="animate-pulse inline-flex items-center  border-0 py-2 px-4 focus:outline-none hover:bg-green rounded text-base mt-2 md:mt-0"
            >
              Contribute
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
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
