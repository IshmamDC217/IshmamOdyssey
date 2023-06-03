import React from 'react';
import Typewriter from 'typewriter-effect';
import mainish from '../public/mainish.png';
import { motion } from 'framer-motion';
import { AiFillInstagram } from 'react-icons/ai';
import { SiGmail, SiLinkedin } from 'react-icons/si';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { FaSpotify } from 'react-icons/fa';
import 'atropos/css';

const Homepage = () => {
  return (
    <section className="homepage">
      <div className="relative h-screen grid grid-cols-2">
        <div className="flex flex-col md:flex-row md:justify-between min-h-screen">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 md:mt-60"
          >
            <h2 className="text-3xl md:text-4xl mb-3 font-semibold">Hi there, I'm</h2>
            <h1 className="text-4xl md:text-5xl mb-5 text-orange-300 font-bold">Ishmam Ahmed</h1>
            <motion.div className="media-icons flex mb-5">
              <a href="mailto:ishmam.ahmed24@gmail.com" rel="noopener noreferrer" className="mr-6">
                <SiGmail className="text-3xl" style={{ color: '#c4302b' }} />
              </a>
              <a href="https://github.com/IshmamDC217" rel="noopener noreferrer" className="mr-6">
                <AiFillGithub className="text-3xl" style={{ color: '#ffffff' }} />
              </a>
              <a href="https://www.linkedin.com/in/ishmam-ahmed-689b0998/" rel="noopener noreferrer" className="mr-6">
                <SiLinkedin className="text-3xl" style={{ color: '#3b5998' }} />
              </a>
            </motion.div>
            <h4 className="text-lg md:text-2xl text-gray-400 mb-5">
              <Typewriter
                options={{
                  strings: ['Leeds Based', 'Software Engineer', 'Frontend Developer', 'Ui/Ux Designer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm md:text-base max-w-[500px] text-white"
            >
              As a dedicated <strong className="font-bold">Software Engineer</strong>, I am currently pursuing a
              postgraduate degree in <strong className="font-bold">Artificial Intelligence</strong> from the{' '}
              <strong className="font-bold">University of Leeds</strong> with a strong focus on{' '}
              <strong className="font-bold">Web Development</strong>, <strong className="font-bold">Mobile Applications</strong>, and{' '}
              <strong className="font-bold">AI</strong>.
            </motion.p>
          </motion.div>
        </div>
        <div className="flex items-center justify-center mb-60">
          <div className="mx-auto">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              src={mainish.src}
              alt="Ishmam Ahmed"
              className="w-[600px] border rounded-full"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;

