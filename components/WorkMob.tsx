import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import metoraweb1 from '../public/metoraweb1.png';
import macmet from '../public/macmet.png';
import crypticchat1 from '../public/crypticchat1.png';
import maccrypticchat from '../public/maccrypticchat.png';
import golweb1 from '../public/golweb1.png';
import golmac from '../public/golmac.png';
import metoralogo from '../public/metoralogo.png';
import lock192 from '../public/lock192.png';
import gollogo from '../public/gollogo.jpg';
import Link from 'next/link';
import click from '../public/click.png'
import { useInView } from 'react-intersection-observer';
import { once } from 'process';
import Heading from './Heading';

const Work: FunctionComponent = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const metoraweb = [
    {
      image: macmet,
      title: 'Metora Cliffs Web: Homepage',
      link: 'https://metoracliffs.netlify.app',
    }
  ];

  const crypticchat = [
    {
      image: maccrypticchat,
      title: 'Cryptic Chat: Log In',
      link: 'https://cryptichat.benmitchell.dev/',
    }
  ];

  const goljs = [
    {
      image: golmac,
      title: 'Metora Cliffs Web: Homepage',
      link: 'https://comp5400-game-of-life.netlify.app/',
    }
  ];

  return (
    <section>
      <Heading title='Projects' />
      <div className='workmob'>
      <div className='glass-container'>
        <div className="container">
          <div style={{ display: 'flex', alignContent: 'center' }}>
            <img src={metoralogo.src} className='projlogo w-[80px] mb-6' />
            <h2 className="text-center text-lg font-bold mx-4 my-9">Official Band Website</h2>
          </div>
          <div className="grid grid-cols-1">
            {metoraweb.map((work, index) => {
              return (
                <motion.a
                  key={index}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={ref} // Attach the ref to the element you want to observe
                  className={`project-link w-inline-block ${inView ? 'animate-in' : ''}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1.2 : 0.8 }}
                  transition={{ duration: 0.8, delay: index * 0.2, type: 'spring', stiffness: 150 }}
                >
                  <div className="project-image">
                    <motion.div
                      className="image-overlay"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    ></motion.div>
                    <div className='image-wrapper'>
                      <Image className='projimage max-w-full mx-auto' src={work.image} alt={work.title} />
                      <img
                        src={click.src}
                        alt="Click me"
                        style={{ position: 'absolute', zIndex: 10, width: '15%', top: '80%', left: '75%', transform: 'translate(-50%, -50%)' }}
                      />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
        <div className="project-description my-5 max-w-7xl">
          <Link href='https://cryptichat.benmitchell.dev/'
            target="_blank"
            rel="noopener noreferrer" className="titleproj text-black text-2xl font-semibold mb-2  
             hover:bg-gray-100 md:hover:bg-transparent md:border-0
             md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black
             dark:hover:bg-gray-700 dark:hover:text-black 
             md:dark:hover:bg-transparent flex justify-center items-center">Metora Web</Link>
          <p className='innerglasscontainermob text-black text-center text-lg'>
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
      <div className='glass-container2' style={{ padding: '15px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignContent: 'center' }}>
            <img src={lock192.src} className='projlogo w-[100px] my-5 mb-8' />
            <h2 className="text-center text-lg font-bold my-5">End-to-End Encrypted Messaging Platform</h2>
          </div>
          <div className="grid grid-cols-1">
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
                  <motion.div
                    className="image-overlay"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  ></motion.div>
                  <div className='image-wrapper'>
                    <Image className='projimage max-w-full mx-auto' src={work.image} alt={work.title} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        <div className="project-description my-5 max-w-7xl">
          <Link href='https://cryptichat.benmitchell.dev/'
            target="_blank"
            rel="noopener noreferrer" className="titleproj text-white text-2xl font-semibold mb-2  
             hover:bg-gray-100 md:hover:bg-transparent md:border-0
             md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black
             dark:hover:bg-gray-700 dark:hover:text-white 
             md:dark:hover:bg-transparent flex justify-center items-center">Cryptic Chat</Link>
          <p className="innerglasscontainermob2 text-black text-center text-lg">
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
      <div className='innerglasscontainermob3' style={{ padding: '15px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignContent: 'center' }}>
            <img src={gollogo.src} className='projlogo w-[90px] my-5 mb-8' />
            <h2 className="text-center text-lg font-bold my-6">Conway's Game of Life - Javascript</h2>
          </div>
          <div className="grid grid-cols-1">
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
                  <motion.div
                    className="image-overlay"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  ></motion.div>
                  <div className='image-wrapper'>
                    <Image className='projimage max-w-full mx-auto' src={work.image} alt={work.title} />
                  </div>
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
            className="titleproj text-white text-2xl font-semibold mb-2  
             hover:bg-gray-100 md:hover:bg-transparent md:border-0
             md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black
             dark:hover:bg-gray-700 dark:hover:text-white 
             md:dark:hover:bg-transparent flex justify-center items-center"
          >
            Game Of Life JS
          </Link>
          <p className="innerglasscontainermob text-black text-center text-lg">
            This implementation showcases Conway's Game of Life using JavaScript, an intriguing cellular automaton
            conceived by the esteemed British mathematician John Horton Conway in 1970. The game unfolds on a
            two-dimensional grid consisting of cells, each existing in either an alive or dead state. The game
            progresses through successive generations based on a set of rules that govern the survival or demise
            of each cell. The underlying principles of the game involve the following rules: Firstly, any live
            cell with fewer than two live neighbors perishes due to underpopulation. Secondly, a live cell with
            two or three live neighbors persists into the subsequent generation. Thirdly, any live cell with more
            than three live neighbors succumbs to overpopulation and dies. Lastly, a dead cell precisely sur
            by three live neighbors springs to life through reproduction. This implementation delves into the
            intricacies of Conway's Game of Life, providing a professional and insightful exploration of this
            captivating mathematical simulation.
          </p>
        </div>

      </div>
      </div>
    </section>
  );
};

export default Work;
