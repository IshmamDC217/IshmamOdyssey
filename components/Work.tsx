import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import metoraweb1 from '../public/metoraweb1.png';
import metoraweb2 from '../public/metoraweb2.png';
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

  return (
    <section className="work">
      <div className='glass-container' style={{ padding: '60px' }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-14 text-black">My Projects</h2>
          <div className="project-container grid grid-cols-2 gap-32">
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
        <div className="project-description my-16 max-w-6xl">
          <h3 className="text-xl font-semibold mb-2 text-align text-black">Metora Cliffs Web</h3>
          <p className="text-black text-align text-lg">
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
    </section>
  );
};

export default Work;
