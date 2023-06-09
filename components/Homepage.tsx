import React from 'react';
import Typewriter from 'typewriter-effect';
import mainMeUpd3 from '../public/mainMeUpd3.jpg';
import { SiGmail, SiLinkedin } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import 'atropos/css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

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

  return (
    <section className="homepage">
      <div className="relative h-screen grid grid-cols-2">
        <div className="flex flex-col md:flex-row md:justify-between min-h-screen ml-6">
          <animated.div
            style={fadeIn}
            className="mb-10 md:mt-36"
          >
            <h2 className="text-3xl md:text-4xl font-semibold">Hi there, I'm</h2>
            <animated.h1 style={fadeIn} className="text-4xl md:text-5xl mb-5 text-orange-300 font-bold">Ishmam Ahmed</animated.h1>
            <div className="media-icons flex mb-5">
              <animated.a style={bounce} href="mailto:ishmam.ahmed24@gmail.com" rel="noopener noreferrer" className="mr-6">
                <SiGmail className="text-3xl" style={{ color: '#c4302b' }} />
              </animated.a>
              <animated.a style={bounce} href="https://github.com/IshmamDC217" rel="noopener noreferrer" className="mr-6">
                <AiFillGithub className="text-3xl" style={{ color: '#ffffff' }} />
              </animated.a>
              <animated.a style={bounce} href="https://www.linkedin.com/in/ishmam-ahmed-689b0998/" rel="noopener noreferrer" className="mr-6">
                <SiLinkedin className="text-3xl" style={{ color: '#3b5998' }} />
              </animated.a>
            </div>
            <h4 className="text-lg md:text-2xl text-gray-400 mb-5">
              <Typewriter
                options={{
                  strings: ['Leeds Based', 'Software Engineer', 'Frontend Developer', 'Ui/Ux Designer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
            <animated.p
              style={fadeIn}
              className="text-xs md:text-base max-w-[500px] text-white"
            >
              Allow me to introduce myself as a <b>software engineer</b> and <b>musician</b>. With a <b>BSc in Computer Science</b> and an <b>MEng in Artificial Intelligence</b>, I have a strong foundation in both technical problem-solving and innovative thinking. As a guitarist, I channel my creative passion through music. I work as a software engineer at <a href='https://www.hlrlookup.com' rel="noopener noreferrer" className='font-bold underline hover:text-orange-500'>HLR Lookup</a> in Leeds and play guitar for the progressive rock band, <a href='https://metoracliffs.netlify.app' rel="noopener noreferrer" className='font-bold underline hover:text-orange-500'>Metora Cliffs</a>. Blending my technical expertise and musical passion, I create captivating experiences at the intersection of technology and music.
            </animated.p>
          </animated.div>
        </div>
        <div className="flex items-center justify-center mb-60">
          <div className="mx-auto">
            <animated.img
              style={fadeIn}
              src={mainMeUpd3.src}
              alt="Ishmam Ahmed"
              className="w-[600px] border rounded-full"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="mx-auto"></div>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Homepage;
