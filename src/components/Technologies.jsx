import React from 'react';
import { FaNodeJs, FaServer } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiAngular } from 'react-icons/si';

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl font-semibold">
        Technologies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {/* MongoDB Icon */}
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 transform hover:scale-110 transition-all duration-500 ease-in-out hover:bg-green-100 rounded-lg"
        >
          <SiMongodb className="text-7xl text-green-900 animate-bounce" />
          <p className="text-center text-sm mt-2 font-medium text-gray-600">
            MongoDB
          </p>
        </a>

        {/* React Icon */}
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 transform hover:scale-110 transition-all duration-500 ease-in-out hover:bg-cyan-100 rounded-lg"
        >
          <RiReactjsLine className="text-7xl text-cyan-400 animate-pulse" />
          <p className="text-center text-sm mt-2 font-medium text-gray-600">
            React.js
          </p>
        </a>

        {/* Node.js Icon */}
        <a
          href="https://nodejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 transform hover:scale-110 transition-all duration-500 ease-in-out hover:bg-green-100 rounded-lg"
        >
          <FaNodeJs className="text-7xl text-green-500 animate-bounce" />
          <p className="text-center text-sm mt-2 font-medium text-gray-600">
            Node.js
          </p>
        </a>

        {/* Express.js Placeholder Icon */}
        <a
          href="https://expressjs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 transform hover:scale-110 transition-all duration-500 ease-in-out hover:bg-gray-100 rounded-lg"
        >
          <FaServer className="text-7xl text-gray-700 animate-pulse" />
          <p className="text-center text-sm mt-2 font-medium text-gray-600">
            Express.js
          </p>
        </a>

        {/* Angular Icon */}
        <a
          href="https://angular.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 transform hover:scale-110 transition-all duration-500 ease-in-out hover:bg-red-100 rounded-lg"
        >
          <SiAngular className="text-7xl text-red-500 animate-pulse" />
          <p className="text-center text-sm mt-2 font-medium text-gray-600">
            Angular
          </p>
        </a>
      </div>
    </div>
  );
};

export default Technologies;
