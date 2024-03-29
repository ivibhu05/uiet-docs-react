import React from 'react';
import { CONTRIBUTERS } from '../../utils/contributers';

const Contribute = () => {
  
  return (
    <>
    
    
      <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-4  py-2">
        Top Contributers
      </h1>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-0">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow-0xl border-2 border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium   tracking-wider text-xl"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium   text-xl tracking-wider"
                    >
                      Branch & Year
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium  text-xl  tracking-wider"
                    >
                      Contribution
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200">
                  {CONTRIBUTERS?.map(({ name, email, branch, year, score }) => (
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className=" font-medium  text-lg">
                              {name}
                            </div>
                            <button className= 'hover:text-blue-500 ' onClick={() =>window.location = 'mailto:'+email }>{email}</button>                            
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-lg ">{branch}</div>
                        <div className="text-lg ">{year}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-lg leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {score}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    
    <br />
    <br />
    <br />
    </>
  );
};

export default Contribute;
