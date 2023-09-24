import React, { useState, useEffect, useRef } from 'react';
import mainMeUpd3 from '../public/mainMeUpd3.jpg';
import { motion } from 'framer-motion';
import mainmeshape from '../public/mainmeshape.png';
import coolpurp from '../public/coolpurp.gif';

const HomepageMob = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElem = videoRef.current;
    if (videoElem && videoElem.paused) {
      videoElem.play().catch(error => {
        console.warn("Video play was prevented", error);
      });
    }
  }, []);

  return (
    <section className="homepagemob">
      <div className="background-video">
        <img src="/homeshape.jpg" alt="Background" style={{ width: "100%" }} />
      </div>
      <div className="relative h-screen mt-5">
        <div className="flex items-center justify-center">
          <div className="mx-auto text-white text-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-3xl mb-1 font-bold text-gray-800">Hi there, I'm </h2>
                <h1 className="ishahm text-4xl font-bold text-[#68513b]">
                  Ishmam Ahmed
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className='pfbio max-w-[500px] mb-7 mx-auto p-3 font-semibold text-black'
                >
                  Allow me to introduce myself as a <b className='text-[#68513b]'>software engineer</b> and <b className='text-[#68513b]'>musician</b>. With a <b className='text-[#68513b]'>BSc in Computer Science</b> and an <b className='text-[#68513b]'>MEng in Artificial Intelligence</b>, I have a strong foundation in both technical problem-solving and innovative thinking. As a guitarist, I channel my creative passion through music. I work as a software engineer at <a href='https://www.hlrlookup.com' rel="noopener noreferrer" className='font-bold text-[#68513b]'>HLR Lookup</a> in Leeds and play guitar for the progressive rock band, <a href='https://metoracliffs.netlify.app' rel="noopener noreferrer" className='font-bold text-[#68513b]'>Metora Cliffs</a>. Blending my technical expertise and musical passion, I create captivating experiences at the intersection of technology and music.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-center mb-20">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            src={mainmeshape.src}
            alt="Ishmam Ahmed"
            className="mainDP w-64 md:w-96 md:mt-10 border rounded-full border-white bg-[#ffffffb9]"
            style={{ position: 'relative', zIndex: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomepageMob;