import React from 'react';
import Typewriter from 'typewriter-effect';
import mainMe from '../public/mainMe.png';
import cooltree from '../public/cooltree.png';
import camel from '../public/camel.png';
import { motion } from 'framer-motion';

import 'atropos/css'
import Atropos from 'atropos/react';

const Homepage = () => {
  return (
    <section className="homepage">
      <div className="relative h-screen grid grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-white flex flex-col">
                <div className='desc'>
                  <h2 className="text-4xl mb-5">Hi there, I'm </h2>
                  <h1 className="text-5xl mb-5 text-orange-300">
                    Ishmam Ahmed
                  </h1>
                </div>
                <div className="orangeline bg-[#cf6a17] h-[4px] w-[250px] mb-6"></div>
                <h4 className="typewriters text-2xl mb-5 text-gray-400">
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
                  className='maindesc max-w-[500px] mb-40 py-5'
                >
                  As a dedicated <strong className='font-bold'>Software Engineer</strong>, I am currently pursuing a postgraduate degree in <strong className='font-bold'>Artificial Intelligence</strong> from the <strong className='font-bold'>University of Leeds</strong> with a strong focus on <strong className='font-bold'>Web Development</strong>, <strong className='font-bold'>Mobile Applications</strong>, and <strong className='font-bold'>AI</strong>,
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-60">
          <div className="mx-auto">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              src={mainMe.src}
              alt="Ishmam Ahmed"
              className="w-[900px]"
            />
          </div>
          {/* <a>
            <img src={camel.src} className="w-1/3 mt-[300px]" />
          </a> */}
          {/* <motion.a
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{ position: 'relative', zIndex: '10' }}
          > */}
          <a>
            <img src={cooltree.src} alt="Ishmam Ahmed" className="w-full mt-[300px]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Homepage;