import React from "react";
import { SYLLABUS } from "../../utils/syllabus-department";

export default function Syllabus() {
  return (
    <>
      {SYLLABUS?.map(({ departmentname, link }) => (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-4xl text-2xl font-medium  text-center title-font text-gray-900 mb-4">
                Syllabus
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-2xl">
                Get the updated Syllabus for all the departments of all year.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="p-2 sm:w-1/2 w-full">
                <a href={link} target="_blank" rel="noreferrer">
                  <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="green"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium">
                      {departmentname}
                    </span>
                  </div>
                </a>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <a
                  href="http://csjmu.ac.in/wp-content/uploads/pdf/IT.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="green"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium">
                      Information Technology
                    </span>
                  </div>
                </a>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <a
                  href="http://csjmu.ac.in/wp-content/uploads/pdf/ece.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="green"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium">
                      Electronics and Communication Engineering
                    </span>
                  </div>
                </a>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <a
                  href="http://csjmu.ac.in/wp-content/uploads/pdf/mee.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="green"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium">
                      Mechanical Engineering
                    </span>
                  </div>
                </a>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <a
                  href="http://csjmu.ac.in/wp-content/uploads/pdf/msme.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="green"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium">
                      Materials Science & Metallurgical Engineering
                    </span>
                  </div>
                </a>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <a
                  href="http://csjmu.ac.in/wp-content/uploads/pdf/chm.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="green"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium">
                      Chemical Engineering
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}