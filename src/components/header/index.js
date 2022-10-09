import React from 'react';
import { Link } from 'react-router-dom';
// import image from 'src/assests/logo1.png'
// import Dropdown from './dropdown'

const Header = () => {
  const tabs = [
    {
      label: 'Notes',
      value: '/about',
    },
    {
      label: 'Clubs',
      value: '/clubs',
    },
    {
      label: 'Contributers',
      value: '/contributers',
    },
    {
      label: 'Contact Us',
      value: '/contact',
    },
  ];

  return (
    <div
      style={{
        position: 'relative',
        right: 0,
        left: 0,
        backgroundColor: 'rgb(128,0,0)',
      }}
    >
      <header class="text-gray-400  body-font">
        <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link class="flex title-font font-medium items-center text-white mb-0 md:mb-0">
            <span class=" ml-3 text-xl">UIET DOCS</span>
          </Link>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {tabs?.map(({ label, value }) => (
              <Link
                class="mr-5 text-white hover:text-white font-medium"
                to={value}
              >
                {label}
              </Link>
            ))}
          </nav>
          <button
            style={{ backgroundColor: 'white' }}
            class="animate-pulse inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-green rounded text-base mt-4 md:mt-0"
          >
            Follow
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
        </div>
      </header>
    </div>
  );
};

export default Header;
