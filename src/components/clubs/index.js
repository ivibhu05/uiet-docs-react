import React from 'react';
import Team1 from '../../assets/team1.jpg';
import Team2 from '../../assets/team.jpg';
import Team3 from '../../assets/groupPic.jpg';
import { WINNER } from '../../utils/contest-winner';

const Clubs = () => {
  return (
    <div>
      <h1 className="py-4 sm:text-3xl text-2xl font-medium title-font text-gray-900 text-center">
        Evolution (UIET Coding Club)
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className=" inset-0 h-48 w-96 object-center border-5 border-grey-100 border-solid"
                  src={Team1}
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className=" inset-0 h-48 w-96 object-center border-5 border-grey-100 border-solid"
                  src={Team2}
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className=" inset-0 object-fill h-48 w-96 object-center border-5 border-grey-100 border-solid"
                  src={Team3}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="antialiased bg-gray-100 text-gray-600 py-12 px-4 ml-100">
        <div className=" flex flex-col justify-center h-full ">
          {/* Table */}
          <div className=" w-full max-w-2xl mx-auto py-12 bg-white shadow-lg rounded-sm border border-gray-200">
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
                  {WINNER?.map(({ contest, link, name, batch }) => (
                    <tbody className="text-sm divide-y divide-gray-100">
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <a
                              className="hover:underline md:underline font-medium text-gray-800 text-xl"
                              href={link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {contest}
                            </a>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="font-medium text-gray-800 text-xl">
                            {name}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500 text-xl">
                            {batch}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ))}
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
