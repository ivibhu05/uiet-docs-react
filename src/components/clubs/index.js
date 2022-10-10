import React from "react";
// import { Link } from 'react-router-dom'
// import team from 'src/assests/team.jpg'
import Team1 from "../../assets/team1.jpg";
import Team2 from "../../assets/team.jpg";
import Team3 from "../../assets/groupPic.jpg";

const Clubs = () => {
  return (
    <div>
      <h1 className="py-10 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">
        Evolution (UIET Coding Club)
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-400 h-400 object-cover object-center border-5 border-grey-100 border-solid"
                  src={Team1}
                />
                
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-900 h-900 object-cover object-center border-5 border-grey-100 border-solid"
                  src={Team2}
                />
                
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-900 object-cover object-center border-5 border-grey-100 border-solid"
                  src={Team3}
                />
                
              </div>
            </div>
            
            
            
          </div>
        </div>
      </section>

      <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4 ml-100">
        <div className="mt-1 flex flex-col justify-center h-full ">
          {/* Table */}
          <div className=" w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800 text-3xl text-center">
                Previous Winners
              </h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold text-gray-400 bg-gray-50 ">
                    <tr className="ml-100">
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left text-2xl ml-10">
                          Contest
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left text-2xl">
                          Winner
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left text-2xl">
                          Batch
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800 text-xl">
                            UIET CODEZEN 1.0
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800 text-xl">
                          Alex Shatov
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500 text-xl">
                          2k19
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800 text-xl">
                            UIET CODEZEN 1.0
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800 text-xl">
                          Alex Shatov
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500 text-xl">
                          2k19
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Clubs;
