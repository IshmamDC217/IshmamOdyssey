import React, { useState } from 'react';
import { RiEarthFill } from 'react-icons/ri';
import { FaBars, FaTimes } from 'react-icons/fa';
import Sidebar from './Sidebar';
import { BsHouseDoorFill } from 'react-icons/bs';
import { RiComputerFill, RiContactsBook2Fill } from 'react-icons/ri';
import ishlogonewv1 from '../public/ishlogonewv1.png'

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="bg-gray-900 shadow px-4 md:px-24 lg:px-80 py-3 flex justify-between items-center relative">
      <div className="flex items-center">
        <img src={ishlogonewv1.src} className='h-8 mt-1' />
        {/* <RiEarthFill className="w-8 h-8 mr-3 text-orange-700" /> */}
        <a href="#" className="text-2xl font-semibold text-white mx-2">My Odyssey</a>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-gray-700 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500"
        >
          {sidebarOpen ? <FaTimes className="w-1 h-1 text-gray-900" /> : <FaBars className="w-6 h-6 mt-2 text-orange-700" />}
        </button>
      </div>

      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="hidden md:flex items-center">
        <div className="ml-10 flex items-baseline space-x-4">
          <a href="/" className="text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium flex items-center" aria-current="page"><BsHouseDoorFill className="w-5 h-5 mr-2 text-orange-700 text-orange-500" />
            Home</a>
          <div className="relative mt-2">
            <button
              onClick={toggleDropdown}
              className="text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <RiComputerFill className="w-5 h-5 mr-2 text-orange-700" />
              Work
              <svg
                className={`w-5 h-5 ml-1 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5 bg-gray-800 ${isDropdownOpen ? 'block' : 'hidden'}`} style={{ zIndex: 10 }}>
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a
                  href="https://metoracliffs.netlify.app"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-white hover:bg-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                >
                  Metora Cliffs Web
                </a>
                <a
                  href="https://cryptichat.benmitchell.dev/"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-white hover:bg-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                >
                  Cryptic Chat
                </a>
                <a
                  href="https://comp5400-game-of-life.netlify.app/"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-white hover:bg-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                >
                  Game of Life
                </a>
              </div>
            </div>
          </div>
          <a
            href="/contact"
            className="text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium flex items-center"
          >
            <RiContactsBook2Fill className="w-5 h-5 mr-2 text-orange-700" />
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

