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

      <h1 class="text-center text-4xl font-bold text-gray-800 dark:text-white">
        The UIET Docs team
      </h1>
      <p class="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-300">
        Meet the UIET Docs team
      </p>
      <div class="md:flex px-80 mb-14 gap-8  ml-4 mr-4">
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
      {/* <div> }
        

        <section className="text-gray-600 body-font relative pr-3 pl-3">
          <div className="container px-5 py-24 mx-auto border-2 rounded-2xl shadow-2xl bg-green-50">
            <div className="flex flex-col text-center w-full mb-12 ">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Contact Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                <b>You Can Drop Your Ideas And Feedback Here</b>
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-lg text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-lg text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-lg text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className="p-2 w-full ">
                  <button
                    style={{ backgroundColor: 'rgb(128,0,0' }}
                    className=" flex mx-auto text-white transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110  border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
      </div> */}
    </>
  );
};

export default Contact;
