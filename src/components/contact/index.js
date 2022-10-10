import React from "react";
// import image1 from '../assests/Preeti.png'

import Vibhanshu from "../../assets/vibhu_uiet.jpg";
import Dheeraj from "../../assets/dp.jpg";

const Contact = () => {
  return (
    <>
      <hr />
      <div>
        <hr />
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="  object-cover object-center rounded-circle border-5 border-yellow-200 border-solid
                bg-green-400 w-full h-full "
                alt="hero"
                src={Dheeraj}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Dheeraj Pandey
                {/* <br className="hidden lg:inline-block" />readymade gluten */}
              </h1>
              <h3 className="title-font sm:text-2xl text-2xl mb-4 font-small text-gray-900">
                Computer Science & Engineering
                {/* <br className="hidden lg:inline-block" />readymade gluten */}
              </h3>
              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/dheerajpandey1/" rel="noreferrer"
                  target="_blank" 
                >
                  <button
                    
                    style={{ backgroundColor: "rgb(128,0,0" }}
                    className="inline-flex text-white  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Connect
                  </button>
                </a>
                <a href="https://dcpandey1.github.io/Portfolio/" rel="noreferrer" target="_blank" >
                  <button className="transition duration-500 ease-in-out bg-green-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Portfolio
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <hr />
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="  object-cover object-center rounded-circle border-5 border-yellow-200 border-solid
                bg-green-400 w-90 h-90 "
                alt="hero"
                src={Vibhanshu}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Vibhanshu Pandey
                {/* <br className="hidden lg:inline-block" />readymade gluten */}
              </h1>
              <h3 className="title-font sm:text-2xl text-2xl mb-4 font-small text-gray-900">
                Computer Science & Engineering
                {/* <br className="hidden lg:inline-block" />readymade gluten */}
              </h3>
              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div className="flex justify-center">
              <a
                  href="https://www.linkedin.com/in/ivibhu05/"
                  target="_blank" rel="noreferrer"
                >
                  <button
                   
                    style={{ backgroundColor: "rgb(128,0,0" }}
                    className="inline-flex text-white  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Connect
                  </button>
                </a>
                <a href="https://ivibhu05.github.io/Portfolio/" target="_blank" rel="noreferrer">
                  <button className="transition duration-500 ease-in-out bg-green-400 hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Portfolio
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <hr />

      <hr />
      <div>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
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
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    style={{ backgroundColor: "rgb(128,0,0" }}
                    className="flex mx-auto text-white transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110  border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
