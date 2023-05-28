import React from 'react';
import { TEAM } from '../../utils/team';

const Contact = () => {
  return (
    <>
      <hr />

      <hr />

      <hr />
      <br />

      {/* New Team */}

      <h1 class="text-center text-4xl font-bold  dark:text-white">
        The UIET Docs team
      </h1>
      <p class="text-center mb-12 text-xl font-normal  dark:text-gray-300">
        Meet the UIET Docs team
      </p>
      <div class="md:flex justify-center  mb-14 gap-8  ml-4 mr-4">
        {TEAM?.map(({ name, branch, role, linkedin, portfolio, photo }) => (
          <div class="md:w-1/10 text-center mb-8 md:mb-0 ">
            <img
              class="w-48 h-48 rounded-circle mx-auto -mb-24 "
              src={photo}
              alt="Avatar Jacky"
            />
            <div class="bg-blue-100 shadow-2xl rounded-lg px-8 pt-32 pb-10 text-gray-400">
              <h3 class="font-title text-gray-800 text-2xl mb-3">{name}</h3>
              <p class="font-body">{role}</p>
              <p class="font-body text-sm mb-4">{branch}</p>

              <div className="flex justify-center">
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <button
                    style={{ backgroundColor: 'rgb(128,0,0' }}
                    className="inline-flex text-white  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Connect
                  </button>
                </a>

                <a href={portfolio} target="_blank" rel="noreferrer">
                  <button className="transition duration-500 ease-in-out bg-green-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    About
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />

    </>
  );
};

export default Contact;
