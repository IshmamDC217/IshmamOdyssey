import React from 'react';
import { motion } from 'framer-motion';
import { SiGmail, SiLinkedin } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';

const ContactMe: React.FC = () => {
    return (
        <section
            id="contact"
            className="contactme p-5 relative z-10 grid place-items-center min-h-screen bg-[#f3e7db] text-black"
        >
            <div className="p-10 contact-container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <img className="rounded-xl border border-gray-300" src="/contact.png" alt="Contact" />
                    <div className="contactForm justify-center">
                        <div className="justify-center">
                            <h2 className="mb-3 text-5xl font-bold">Contact Me</h2>
                            <motion.div className="media-icons flex mb-5 ml-1">
                                <a href="mailto:ishmam.ahmed24@gmail.com" rel="noopener noreferrer" className="mr-6">
                                    <SiGmail className="text-3xl" style={{ color: '#000' }} />
                                </a>
                                <a href="https://github.com/IshmamDC217" rel="noopener noreferrer" className="mr-6">
                                    <AiFillGithub className="text-3xl" style={{ color: '#000' }} />
                                </a>
                                <a href="https://www.linkedin.com/in/ishmam-ahmed-689b0998/" rel="noopener noreferrer" className="mr-6">
                                    <SiLinkedin className="text-3xl" style={{ color: '#000' }} />
                                </a>
                            </motion.div>
                            <p className="contactdesc mb-5 text-black max-w-[1000px]">
                                Whether you&apos;re looking to build cutting-edge software or create some great music, I&apos;m here to collaborate. With a background in Computer Science and a focus on Artificial Intelligence, I bring both technical expertise and creative flair.<br /><br />
                                As a full-stack software engineer at HLR Lookup and the guitarist for Metora Cliffs, I balance innovative coding with composing progressive rock.<br /><br />
                                If you&apos;re up for a software project that pushes boundaries or want to make music together, feel free to reach out. Let&apos;s connect!
                            </p>
                            <div className="">
                                <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                                    <input type="hidden" name="form-name" value="contact" />
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            className="peer block w-full rounded border border-[#000] bg-transparent py-2 px-3 leading-tight outline-none transition-all duration-200 ease-linear focus:border-black focus:text-black dark:text-neutral-200 dark:placeholder-gray-600"
                                            id="name"
                                            placeholder=" "
                                            required
                                        />
                                        <label
                                            className="pointer-events-none text-[#000] absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out transform scale-100 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-not-empty:-translate-y-[1.6rem] peer-not-empty:scale-[0.8]"
                                            htmlFor="name"
                                        >
                                            Name
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            className="peer block w-full rounded border border-[#000] bg-transparent py-2 px-3 leading-tight outline-none transition-all duration-200 ease-linear focus:border-black focus:text-black dark:text-neutral-200 dark:placeholder-gray-600"
                                            id="email"
                                            placeholder=" "
                                            required
                                        />
                                        <label
                                            className="pointer-events-none text-[#000] absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out transform scale-100 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-not-empty:-translate-y-[1.6rem] peer-not-empty:scale-[0.8]"
                                            htmlFor="email"
                                        >
                                            Email address
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <textarea
                                            name="message"
                                            className="peer block w-full rounded border border-[#000] bg-transparent py-2 px-3 leading-tight outline-none transition-all duration-200 ease-linear focus:border-black focus:text-black dark:text-neutral-200 dark:placeholder-gray-600"
                                            id="message"
                                            placeholder=" "
                                            rows={4}
                                            required
                                        ></textarea>
                                        <label
                                            className="pointer-events-none text-[#000] absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out transform scale-100 translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-not-empty:-translate-y-[1.6rem] peer-not-empty:scale-[0.8]"
                                            htmlFor="message"
                                        >
                                            Message
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            className="h-4 w-4 rounded border border-[#000] bg-black checked:border-black checked:bg-[#000] focus:ring-2 focus:ring-black"
                                            type="checkbox"
                                            id="sendCopy"
                                            name="sendCopy"
                                        />
                                        <label className="text-[#000] hover:text-black" htmlFor="sendCopy">
                                            Send me a copy of this message
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full rounded bg-[#000] px-6 py-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-orange-500 hover:text-black focus:bg-black focus:text-[#000] focus:outline-none focus:ring-2 focus:ring-black active:bg-[#000] active:text-white"
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
