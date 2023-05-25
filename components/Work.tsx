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
      title: 'Web Design 1',
      link: 'https://metoracliffs.netlify.app',
    },
    {
      image: metoraweb2,
      title: 'Web Design 2',
      link: 'https://metoracliffs.netlify.app',
    },
  ];

  return (
    <section className="work bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
        <ul className="space-y-6">
          {metoraweb.map((work, index) => (
            <motion.li
              key={index}
              className="border border-gray-800 rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4"
              >
                <div className="flex-none w-20 h-20 relative">
                  <Atropos 
                    shadow={false} 
                    highlight={false}
                    activeOffset={40}
                    shadowScale={1.05}
                    onEnter={() => console.log('Enter')}
                    onLeave={() => console.log('Leave')}
                    onRotate={(x, y) => console.log('Rotate', x, y)}
                  >
                    <Image src={work.image} alt={work.title} layout="fill" />
                  </Atropos>
                </div>
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3>{work.title}</h3>
                  <p className="text-gray-400">
                    Description about the project goes here...
                  </p>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
