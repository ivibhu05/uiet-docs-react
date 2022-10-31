import React from 'react'

const CsePapers = (props) => {
  return (
    <>
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-2xl font-medium  text-center title-font text-gray-900 mb-4">
              Syllabus {props.age}
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-2xl">
              Get the updated Syllabus for all the departments of all year.
            </p>
         </div>
    </>
  )
};
export default CsePapers;