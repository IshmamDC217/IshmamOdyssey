import { FunctionComponent } from 'react';
import Heading from './Heading'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';
import metoraweb1 from '../public/metoraweb1.png';
import metoraweb2 from '../public/metoraweb2.png';
import crypticchat1 from '../public/crypticchat1.png';
import crypticchat2 from '../public/crypticchat2.png';
import golweb1 from '../public/golweb1.png';
import golweb2 from '../public/golweb2.png';
import metoralogo from '../public/metoralogo.png';
import lock192 from '../public/lock192.png';
import gollogo from '../public/gollogo.jpg';
import Link from 'next/link';
import 'atropos/css';
import Atropos from 'atropos/react';

const Work: FunctionComponent = () => {
  const metoraweb = [
    {
      image: metoraweb1,
      title: 'Metora Cliffs Web: Homepage',
      link: 'https://metoracliffs.netlify.app',
    },
    {
      image: metoraweb2,
      title: 'Metora Cliffs Web: About',
      link: 'https://metoracliffs.netlify.app',
    },
  ];

  const crypticchat = [
    {
      image: crypticchat1,
      title: 'Cryptic Chat: Log In',
      link: 'https://cryptichat.benmitchell.dev/',
    },
    {
      image: crypticchat2,
      title: 'Cryptic Chat: Log In',
      link: 'https://cryptichat.benmitchell.dev/',
    },
  ];

  const goljs = [
    {
      image: golweb1,
      title: 'Game of Life Web: Homepage',
      link: 'https://comp5400-game-of-life.netlify.app/',
    },
    {
      image: golweb2,
      title: 'Game of Life Web: Game',
      link: 'https://comp5400-game-of-life.netlify.app/',
    },
  ];

  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.section style={springProps} className="work">
      <Heading title='Projects' />
      <div className='glass-container border border-gray-900' style={{ padding: '15px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignContent: 'center' }}>
            <img src={metoralogo.src} className='w-[80px] mb-5 ' />
            <h2 className="text-3xl font-bold mx-6 my-10">Official Band Website</h2>
          </div>
          <div className="container rounded-lg project-container grid grid-cols-2 gap-32" style={{ backgroundColor: '#f3e7dbc5', padding: '80px'}}>
            {metoraweb.map((work, index) => (
              <motion.a
                key={index}
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link w-inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: 'spring', stiffness: 150 }}
              >
                <div className="project-image">
                  <Atropos
                    activeOffset={40}
                    shadowScale={1.05}
                    onEnter={() => console.log('Enter')}
                    onLeave={() => console.log('Leave')}
                    onRotate={(x, y) => console.log('Rotate', x, y)}
                  >
                    {index < 2 && (
                      <div className="prompt-box">
                        <p className="prompt-text">Click to explore</p>
                      </div>
                    )}
                    <motion.div
                      className="image-overlay"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    ></motion.div>
                    <Image src={work.image} alt={work.title} />
                  </Atropos>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="project-description my-5 max-w-7xl">
          <Link href='https://metoracliffs.netlify.app'
            target="_blank"
            rel="noopener noreferrer" className="text-black text-2xl font-semibold mb-2 rounded
             hover:bg-gray-100 md:hover:bg-transparent md:border-0
             md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-[#68513b]
             dark:hover:bg-gray-700 dark:hover:text-black 
             md:dark:hover:bg-transparent flex justify-center items-center">Metora Cliffs Web</Link>
          <p className="innerglasscontainer text-black text-center text-lg">
            Metora Cliffs Web is the official website for Metora Cliffs, a video game-inspired progressive metal band
            that composes songs with a Nintendo-esque vibe. The website is developed with a video game theme to reflect
            the band's unique style and energy. It is built using modern web technologies such as Next.js, React, and
            Tailwind CSS, and incorporates a variety of cutting-edge features like Framer Motion, Intersection Observers,
            Particle.js, React Spring, Atropos JS, and React Toastify for a visually stunning and engaging user experience.
            The website is optimized for both desktop and mobile devices, ensuring that users have a consistent experience
            across all platforms.
          </p>
        </div>
      </div>
      <div className='glass-container2 rounded-lg my-20 border border-gray-500' style={{ padding: '15px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignContent: 'center' }}>
            <img src={lock192.src} className='w-[100px] mb-5 border rounded-full' />
            <h2 className="text-3xl font-bold mx-6 my-7">End-to-End Encrypted Messaging Platform</h2>
          </div>
          <div className="container rounded-lg project-container grid grid-cols-2 gap-32" style={{ backgroundColor: '#f3e7dbc5', padding: '80px' }}>
            {crypticchat.map((work, index) => (
              <motion.a
                key={index}
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link w-inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: 'spring', stiffness: 150 }}
              >
                <div className="project-image">
                  <Atropos
                    activeOffset={40}
                    shadowScale={1.05}
                    onEnter={() => console.log('Enter')}
                    onLeave={() => console.log('Leave')}
                    onRotate={(x, y) => console.log('Rotate', x, y)}
                  >
                    {index < 2 && (
                      <div className="prompt-box">
                        <p className="prompt-text">Click to explore</p>
                      </div>
                    )}
                    <motion.div
                      className="image-overlay"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    ></motion.div>
                    <Image src={work.image} alt={work.title} />
                  </Atropos>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="project-description my-5 max-w-7xl">
          <Link href='https://cryptichat.benmitchell.dev/'
            target="_blank"
            rel="noopener noreferrer" className="text-black text-2xl font-semibold mb-2 rounded
            hover:bg-gray-100 md:hover:bg-transparent md:border-0
            md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-[#68513b]
            dark:hover:bg-gray-700 dark:hover:text-black 
            md:dark:hover:bg-transparent flex justify-center items-center">Cryptic Chat</Link>
          <p className="innerglasscontainer text-black text-center text-lg">
            Cryptic Chat is a highly secure and privacy-focused messaging platform developed using React JS.
            By implementing robust encryption algorithms, it ensures end-to-end encryption,
            guaranteeing that user communications remain confidential and safeguarded against
            unauthorized access. The integration of an open-source GraphQL API enables
            seamless and efficient data transmission, allowing Cryptic Chat to seamlessly
            integrate with diverse systems. Additionally, the platform leverages a
            blockchain-based key store, bolstering the security framework by securely
            managing encryption keys and providing an added layer of protection against
            unauthorized entities. With a strong emphasis on user privacy and utilizing
            cutting-edge technologies, Cryptic Chat offers a professional and trustworthy
            messaging solution that prioritizes data security in today's digital landscape.
          </p>
        </div>
      </div>
      <div className='glass-container2 rounded-lg border border-gray-500' style={{ padding: '15px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignContent: 'center' }}>
            <img src={gollogo.src} className='w-[90px] mb-5' />
            <h2 className="text-3xl font-bold mx-6 my-7">Conway's Game of Life - Javascript</h2>
          </div>
          <div className="golcontainer rounded-lg project-container grid grid-cols-2 gap-32" style={{ backgroundColor: '#f3e7dbc5', padding: '80px' }}>
            {goljs.map((work, index) => (
              <motion.a
                key={index}
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link w-inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: 'spring', stiffness: 150 }}
              >
                <div className="project-image">
                  <Atropos
                    activeOffset={40}
                    shadowScale={1.05}
                    onEnter={() => console.log('Enter')}
                    onLeave={() => console.log('Leave')}
                    onRotate={(x, y) => console.log('Rotate', x, y)}
                  >
                    {index < 2 && (
                      <div className="prompt-box">
                        <p className="prompt-text">Click to explore</p>
                      </div>
                    )}
                    <motion.div
                      className="image-overlay"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    ></motion.div>
                    <Image src={work.image} alt={work.title} />
                  </Atropos>
                </div>
              </motion.a>
            ))}
          </div>

        </div>
        <div className="project-description my-5 max-w-7xl">
          <Link
            href="https://comp5400-game-of-life.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-2xl font-semibold mb-2 rounded
            hover:bg-gray-100 md:hover:bg-transparent md:border-0
            md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-[#68513b]
            dark:hover:bg-gray-700 dark:hover:text-black 
            md:dark:hover:bg-transparent flex justify-center items-center"
          >
            Game Of Life JS
          </Link>
          <p className="innerglasscontainer text-black text-center text-lg">
            This implementation showcases Conway's Game of Life using JavaScript, an intriguing cellular automaton
            conceived by the esteemed British mathematician John Horton Conway in 1970. The game unfolds on a
            two-dimensional grid consisting of cells, each existing in either an alive or dead state. The game
            progresses through successive generations based on a set of rules that govern the survival or demise
            of each cell. The underlying principles of the game involve the following rules: Firstly, any live
            cell with fewer than two live neighbors perishes due to underpopulation. Secondly, a live cell with
            two or three live neighbors persists into the subsequent generation. Thirdly, any live cell with more
            than three live neighbors succumbs to overpopulation and dies. Lastly, a dead cell precisely surrounded
            by three live neighbors springs to life through reproduction. This implementation delves into the
            intricacies of Conway's Game of Life, providing a professional and insightful exploration of this
            captivating mathematical simulation.
          </p>
        </div>

      </div>
    </animated.section>
  );
};

export default Work;
