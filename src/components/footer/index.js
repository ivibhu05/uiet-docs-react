import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div
      style={{
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgb(128,0,0)',
      }}
    >
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            to="/home"
          >
            <span className="ml-3 text-xl text-white hover:text-blue-800">
              UIET DOCS
            </span>
          </Link>
          <p className="text-sm text-white sm:ml-3 sm:pl-2 sm:border-l-2 sm:border-gray-200 mt-1">
            Copyright © UIET Docs
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-8 justify-center sm:justify-start">
            <Link className="text-blue-500" style={{ color: 'white' }}>
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>
            <Link className="ml-3 text-white ">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-8 h-8 "
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </Link>
            <Link className="ml-3 text-red-500" style={{ color: 'white' }}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </Link>
            <Link className="ml-3 text-blue-500  " style={{ color: 'white' }}>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-8 h-8 "
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle
                  cx={4}
                  cy={4}
                  r={2}
                  stroke="none"
                  className="animate-bounce"
                />
              </svg>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
