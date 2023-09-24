import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { SiGmail, SiLinkedin } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';

const Homepage = () => {
  useEffect(() => {
    const showToast = () => {
      const toastId = 'welcome-toast';
      toast.dark('✸ Welcome to My Odyssey!', {
        toastId: toastId,
        className: 'toast-style',
        bodyClassName: 'toast-body',
        progressClassName: 'toast-progress',
        position: 'bottom-right'
      });
    };

    showToast();
  }, []);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2000,
  });

  const bounce = useSpring({
    from: { transform: 'scale(1.0)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'scale(1.1)' });
        await next({ transform: 'scale(1.0)' });
      }
    },
    reset: true,
    config: { tension: 180, friction: 12 },
  });

  const imageVariant = {
    hidden: { rotate: -10 },
    visible: { rotate: 10 },
  };

  return (
    <section className="homepage">
      <div className="relative h-screen grid grid-cols-2">
        <div className="flex flex-col md:flex-row md:justify-between min-h-screen ml-6">
          <animated.div
            style={fadeIn}
            className="mb-10 md:mt-20"
          >
            <h2 className="text-3xl mb-12 md:text-5xl text-gray-800 font-bold">Hi there, I'm</h2>
            <animated.h1 style={fadeIn} className=" ishahm text-4xl md:mb-12 text-[#68513b] font-bold">Ishmam Ahmed</animated.h1>
            <div className="media-icons flex mb-5">
              <animated.a style={bounce} href="mailto:ishmam.ahmed24@gmail.com" rel="noopener noreferrer" className="mediaicons mr-6">
                <SiGmail className="text-5xl" style={{ color: '#000000' }} />
              </animated.a>
              <animated.a style={bounce} href="https://github.com/IshmamDC217" rel="noopener noreferrer" className="mediaicons mr-6">
                <AiFillGithub className="text-5xl" style={{ color: '#000000' }} />
              </animated.a>
              <animated.a style={bounce} href="https://www.linkedin.com/in/ishmam-ahmed-689b0998/" rel="noopener noreferrer" className="mediaicons mr-6">
                <SiLinkedin className="text-5xl" style={{ color: '#000000' }} />
              </animated.a>
            </div>
            <h4 className="text-lg md:text-3xl text-[#68513b] font-bold mb-5">
              <Typewriter
                options={{
                  strings: ['Welcome to my page!', 'Leeds Based', 'Software Engineer', 'Frontend Developer', 'Musician', 'Ui/Ux Designer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
            <div>
              <animated.p
                style={fadeIn}
                className="text-xs md:text-sm lg:text-xl font-semibold max-w-[750px] text-gray-800 txt pb-10"
              >
                Allow me to introduce myself as a <b className='text-[#68513b]'>software engineer</b> and <b className='text-[#68513b]'>musician</b>. Having a Computer Science degree specializing in Artificial Intelligence, I have a strong foundation in both technical problem-solving and innovative thinking. As an <b className='text-[#68513b]'>instrumentalist</b>, I channel my creative passion through music.
                <br /><br />
                Currently, I'm immersed in two exciting worlds: by day, I work as a full-stack software engineer at <a href='https://www.hlrlookup.com' rel="noopener noreferrer" className='font-bold underline hover:text-[#68513b]'>HLR Lookup</a>, and by night, I'm shredding the guitar for the progressive rock band, <a href='https://metoracliffs.netlify.app' rel="noopener noreferrer" className='font-bold underline hover:text-[#68513b]'>Metora Cliffs</a>, both based in Leeds. Blending my technical expertise and musical passion, I create captivating experiences at the intersection of technology and music.
              </animated.p>
            </div>
            <a href='https://linktr.ee/jazzmaster?utm_source=linktree_profile_share&ltsid=ef8fc291-9300-4371-b17a-e94d030e7559'
              className='text-white mt-5 p-3 rounded-lg bg-[#68513b] font-semibold'>Check out my Link Tree!</a>
          </animated.div>
        </div>

        <div className="image-container flex flex-col items-center mt-5 ml-36"> 
          <img src="/ishdp.jpg" alt="Big Image" className="rounded-lg w-[600px] mb-2" />
          <div className="flex small-images">
            <img src="/landingpic4.jpg" alt="Image 1" className="rounded-lg w-[194px] h-[194px] mx-1 object-cover" />
            <img src="/landingpic2.jpg" alt="Image 2" className="rounded-lg w-[194px] h-[194px] mx-1 object-cover" />
            <img src="/landingpic3.jpg" alt="Image 3" className="rounded-lg w-[194px] h-[194px] mx-1 object-cover" />
          </div>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Homepage;
