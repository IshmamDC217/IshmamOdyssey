import React from 'react'
import { RiEarthFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <section className='footer'>
            <footer className="rounded-lg shadow bg-gray-900 m-4 p-2 border border-gray-600">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="#" className="flex items-center mb-4 sm:mb-0">
                            <RiEarthFill className="w-8 h-8 mr-3 text-orange-700" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">My Odyssey</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> &copy; 2023 <a href="https://ishmamahmed.netlify.app/" className="hover:underline">Ishmam™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </section>
    )
}

export default Footer
