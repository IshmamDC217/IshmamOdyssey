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
    <section className="homepagemob">
      <div className="relative h-screen mt-10">
        <div className="flex items-center justify-center">
          <div className="mx-auto text-white text-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-4xl mb-5">Hi there, I'm </h2>
                <h1 className="text-5xl mb-5 text-orange-300">
                  Ishmam Ahmed
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className='pfbio max-w-[500px] mb-20 mx-auto'
                >
                  As a dedicated <strong className='font-bold'>Software Engineer</strong>, I am currently pursuing a postgraduate degree in <strong className='font-bold'>Artificial Intelligence</strong> from the <strong className='font-bold'>University of Leeds</strong> with a strong focus on <strong className='font-bold'>Web Development</strong>, <strong className='font-bold'>Mobile Applications</strong>, and <strong className='font-bold'>AI</strong>.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-20">
          <div className="mx-auto">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              src={mainMe.src}
              alt="Ishmam Ahmed"
              className="mainDP w-80 mt-6 md:w-96 md:mt-10 border rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
