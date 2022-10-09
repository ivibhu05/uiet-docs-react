import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assests/logo1.png'
// import Dropdown from './dropdown'
export default function Navbar1() {

  // const items = [
  //   {
  //     label: 'first',
  //     path: '',
  //   },
  //   {
  //     label: 'second',
  //     path: '',
  //   },
  //   {
  //     label: 'third',
  //     path: '',
  //   },
  // ]

  return (
    <div style={{ position: 'relative', right: 0, left: 0, backgroundColor: "rgb(128,0,0" }}>
      <header class="text-gray-400  body-font">
        <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link class="flex title-font font-medium items-center text-white mb-0 md:mb-0">
            {/* <svg xmlns="http://www.w3.org/2000top/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
            <img src={image} className=" animate-bounce w-10 h-10 rounded-circle bg-white" alt="" srcset="" />
            <span class=" ml-3 text-xl">UIET DOCS</span>
          </Link>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link class="mr-5 text-white hover:text-white font-medium" to="/about">Notes</Link>
            <Link class="mr-5 text-white hover:text-white font-medium " to="/alumni">
            Alumni
            </Link>
            <Link class="mr-5 text-white hover:text-white font-medium">Syllabus</Link>
            <Link class="mr-5 text-white hover:text-white font-medium" to="/clubs">Clubs</Link>
            <Link class="mr-5 text-white hover:text-white font-medium">Papers</Link>
            <Link class="mr-5 text-white hover:text-white font-medium" to="/contact">Contact Us</Link>
            <Link class="mr-5 text-white hover:text-white font-medium" to="/contributers">Contibuters</Link>
            <Link class="mr-5 text-white hover:text-white font-medium">Resources</Link>
            <Link class="mr-5 text-white hover:text-white font-medium" to="/">Photos</Link>
            <Link class="mr-5 text-white hover:text-white font-medium">Resources</Link>
          </nav>
          <button style={{ backgroundColor: "white" }} class="animate-pulse inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-green rounded text-base mt-4 md:mt-0">Follow
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

    </div>

  )
}
