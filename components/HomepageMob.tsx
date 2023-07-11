import React from 'react';
import mainMeUpd3 from '../public/mainMeUpd3.jpg';
import { motion } from 'framer-motion';

import 'atropos/css'
import Atropos from 'atropos/react';

const HomepageMob = () => {
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
                <h2 className="text-3xl">Hi there, I'm </h2>
                <h1 className="text-4xl font-bold text-orange-300">
                  Ishmam Ahmed
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className='pfbio max-w-[500px] mb-12 mx-auto p-4 py-2 text-white'
                >
                  Allow me to introduce myself as a <b>software engineer</b> and <b>musician</b>. With a <b>BSc in Computer Science</b> and an <b>MEng in Artificial Intelligence</b>, I have a strong foundation in both technical problem-solving and innovative thinking. As a guitarist, I channel my creative passion through music. I work as a software engineer at <a href='https://www.hlrlookup.com' rel="noopener noreferrer" className='font-bold text-orange-500'>HLR Lookup</a> in Leeds and play guitar for the progressive rock band, <a href='https://metoracliffs.netlify.app' rel="noopener noreferrer" className='font-bold text-orange-500'>Metora Cliffs</a>. Blending my technical expertise and musical passion, I create captivating experiences at the intersection of technology and music.
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
              src={mainMeUpd3.src}
              alt="Ishmam Ahmed"
              className="mainDP w-80 md:w-96 md:mt-10 border rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageMob;
