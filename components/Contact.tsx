import React from 'react';
import { motion } from 'framer-motion';
import { SiGmail, SiLinkedin } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';

const ContactMe: React.FC = () => {
    return (
        <section className="contactme">
            <div className="container contactcontainer border" style={{ padding: '20px' }}>
                <h2 className="text-4xl text-white font-bold text-center mb-6">Get in Touch</h2>
                <p className="text-lg text-center mb-5 text-white">
                    Have a question or want to collaborate? Feel free to reach out to me.
                </p>
                <motion.div className="media-icons flex mb-5 ml-6 justify-center">
                    <a href="mailto:ishmam.ahmed24@gmail.com" rel="noopener noreferrer" className="mr-6">
                        <SiGmail className="text-3xl" style={{ color: '#ffffff' }} />
                    </a>
                    <a href="https://github.com/IshmamDC217" rel="noopener noreferrer" className="mr-6">
                        <AiFillGithub className="text-3xl" style={{ color: '#ffffff' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/ishmam-ahmed-689b0998/" rel="noopener noreferrer" className="mr-6">
                        <SiLinkedin className="text-3xl" style={{ color: '#ffffff' }} />
                    </a>
                </motion.div>
                <form name="contact" method="POST" data-netlify="true">
                    <div className="flex flex-col mb-4">
                        <input type="hidden" name="form-name" value="contact" />
                        <label htmlFor="name" className="text-white">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="border rounded-md py-2 px-3 text-black"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border rounded-md py-2 px-3 text-black"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="message" className="text-white">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="border rounded-md py-2 px-3 text-black"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-orange-400 text-white px-4 py-2 rounded-md">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;
