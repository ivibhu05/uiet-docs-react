import React from 'react';
import {
  PAPERSCSEI,
  PAPERSCSEII,
  PAPERSCSEIII,
  PAPERSCSEIV,
} from '../../utils/cspapers';

const CsePapers = () => {
  return (
    <>
      <section class=" body-font">
        <div class="container px-5 py-24 mx-auto py-5">
          <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font">
              📝 Computer Science & Engineering
            </h1>
          </div>
          <div className="pl-5 pr-5">
            <div class="flex flex-wrap w-full flex-col items-center text-center">
              <h1 class="py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-white w-40 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl text-2xl">
                YEAR I
              </h1>
            </div>
            <br />
            <hr />
            <div
              id="modal"
              className="rounded-xl pb-6 mx-auto container border-3 mb-10 mt-10 shadow-2xl bg-green-100"
            >
              <div class="flex flex-wrap m-4">
                {PAPERSCSEI?.map(({ link, name }) => (
                  <div className="gallery">
                    <div class="border border-white-400  bg-red-800  hover:bg-gray-200 h-10 w-48 rounded-2xl m-2 mt-3">
                      <a
                        className="font-medium text-gray-100 hover:text-green-800 text-xl leading-9 px-11"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class="flex flex-wrap w-full  flex-col items-center text-center">
              <h1 class="py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-white w-40 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl text-2xl">
                YEAR II
              </h1>
            </div>
            <br />
            <hr />
            <div
              id="modal"
              className="rounded-xl pb-6 mx-auto container border-3 mb-10 mt-10 shadow-2xl bg-green-100"
            >
              <div class="flex flex-wrap m-4">
                {PAPERSCSEII?.map(({ link, name }) => (
                  <div>
                    <div class="border border-white-400 bg-red-800 hover:bg-gray-100 h-10 w-48 bg-rgb(0,0,0) rounded-2xl m-2 mt-3">
                      <a
                        className=" font-medium text-gray-100  text-xl leading-9 px-11"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class="flex flex-wrap w-full  flex-col items-center text-center">
              <h1 class="py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-white w-40 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl text-2xl">
                YEAR III
              </h1>
            </div>
            <br />

            <hr />
            <div
              id="modal"
              className="rounded-xl pb-6 mx-auto container border-3 mb-10 mt-10 shadow-2xl bg-green-100"
            >
              <div class="flex flex-wrap m-4">
                {PAPERSCSEIII?.map(({ link, name }) => (
                  <div>
                    <div class="border border-white-400 bg-red-800 hover:bg-gray-100 h-10 w-48 bg-red-800 rounded-2xl m-2 mt-3">
                      <a
                        className=" font-medium text-gray-100 text-xl leading-8 px-11 "
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class="flex flex-wrap w-full  flex-col items-center text-center">
              <h1 class="py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-white w-40 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl text-2xl">
                YEAR IV
              </h1>
            </div>
            <br />
            <hr />
            <div
              id="modal"
              className="rounded-xl pb-6 mx-auto container border-3 mb-10 mt-10 shadow-2xl bg-green-100"
            >
              <div class="flex flex-wrap m-4">
                {PAPERSCSEIV?.map(({ link, name }) => (
                  <div>
                    <div class="border border-white-400 bg-red-800 hover:bg-gray-100 h-10 w-48 bg-rgb(0,0,0) rounded-2xl m-2 mt-3">
                      <a
                        className=" font-medium text-gray-100 text-xl leading-8 px-11"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
};
export default CsePapers;
