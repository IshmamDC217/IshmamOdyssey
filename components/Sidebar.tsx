import React from 'react';
import { BsHouseDoorFill } from 'react-icons/bs';
import { RiComputerFill, RiContactsBook2Fill } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';

interface SidebarProps {
    sidebarOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
    return (
        <div
            className={`fixed inset-0 transform transition-transform duration-200 ease-in-out z-50 md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <div className="sidebarmob h-full bg-white dark:bg-slate-900 dark:border-gray-700 w-64 p-4 overflow-auto">
                <button
                    className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={toggleSidebar}
                >
                    <FaTimes className="w-6 h-6" />
                </button>
                <ul className="mt-8 space-y-4">
                    {/* Add your mobile menu options here */}
                    <li>
                        <a href="/" className="flex items-center">
                            <BsHouseDoorFill className="w-5 h-5 mr-2 text-orange-700 dark:text-orange-500" />
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/work" className="flex items-center">
                            <RiComputerFill className="w-5 h-5 mr-2 text-orange-700 dark:text-orange-500" />
                            Work
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="flex items-center">
                            <RiContactsBook2Fill className="w-5 h-5 mr-2 text-orange-700 dark:text-orange-500" />
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Backdrop */}
            <div
                className={`${sidebarOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={toggleSidebar}
            ></div>
        </div>
    );
};

export default Sidebar;
