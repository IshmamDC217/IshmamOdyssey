import React, { useState, useEffect } from 'react';
import mainMeUpd3 from '../public/mainMeUpd3.jpg';
import { motion } from 'framer-motion';
import mainishdpnew from '../public/mainishdpnew.png';
import coolpurp from '../public/coolpurp.gif';

const HomepageMob = () => {
    const [showGif, setShowGif] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      const timer = setTimeout(() => {
        setShowGif(true);
      }, 2000);
  
      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(timer);
      };
    }, []);
  
    const gifWidth = windowWidth > 386 ? '60%' : '80%';

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
                <h2 className="text-3xl mb-3">Hi there, I'm </h2>
                <h1 className="ishahm mb-3 text-4xl font-bold text-blue-300">
                  Ishmam Ahmed
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className='pfbio max-w-[500px] mb-4 mx-auto p-4 py-2 text-white'
                >
                  Allow me to introduce myself as a <b>software engineer</b> and <b>musician</b>. With a <b>BSc in Computer Science</b> and an <b>MEng in Artificial Intelligence</b>, I have a strong foundation in both technical problem-solving and innovative thinking. As a guitarist, I channel my creative passion through music. I work as a software engineer at <a href='https://www.hlrlookup.com' rel="noopener noreferrer" className='font-bold text-blue-300'>HLR Lookup</a> in Leeds and play guitar for the progressive rock band, <a href='https://metoracliffs.netlify.app' rel="noopener noreferrer" className='font-bold text-blue-300'>Metora Cliffs</a>. Blending my technical expertise and musical passion, I create captivating experiences at the intersection of technology and music.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-20">
          {showGif && (
            <img
              className='spinny'
              src={coolpurp.src}
              alt="Background Gif"
              style={{ position: 'absolute', zIndex: 1, width: gifWidth, height: '40%' }}
            />
          )}
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            src={mainishdpnew.src}
            alt="Ishmam Ahmed"
            className="mainDP w-64 md:w-96 md:mt-10 border rounded-full border-white bg-[#ffffffb9]"
            style={{ position: 'relative', zIndex: 2 }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomepageMob;