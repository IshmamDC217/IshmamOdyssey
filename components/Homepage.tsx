import React from 'react';
import Image from 'next/image';
import Typewriter, { Options } from 'typewriter-effect';
import mainMe from '../public/mainMe.png';

const Homepage = () => {
  const typewriterOptions: Partial<Options> = {
    strings: ['Software Engineer', 'Frontend Developer', 'Ui/Ux Designer', 'Based in Leeds, UK'],
    changeDelay: 3 as number,
    changeDeleteSpeed: 2,
    autoStart: true,
    loop: true,
  };

  return (
    <section className="homepage">
      <div className="relative h-screen grid grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="mx-auto">
            <div className="desc text-white flex flex-col">
              <div>
                <h2 className="text-4xl mb-5">Hi there, I'm </h2>
                <h1 className="text-5xl mb-10 text-orange-300" style={{ letterSpacing: '0.05em' }}>
                  Ishmam Ahmed
                </h1>
              </div>
              <div className="bg-[#cf6a17] h-[4px] w-[250px] mb-2"></div>
              <h4 className="typewriters text-2xl mb-5 text-gray-400">
                <Typewriter options={typewriterOptions} />
              </h4>
              <p className='maindesc max-w-[500px] mb-44 py-5=3'>
                - I'm a <strong>Software Engineer</strong>, pursuing a postgraduate degree in <strong>AI</strong> from the <strong>University of Leeds</strong>. My interests include Web Development, Mobile Applications, Game Development, and AI. Combining my passion for technology and music as a session musician, I stay updated with the latest trends, continuously learning and expanding my skillset.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-60">
          <div className="mx-auto">
            <a>
              <Image src={mainMe} className="w-2/3 h-2/3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
