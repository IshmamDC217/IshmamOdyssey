import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import mainMe from '../public/mainMe.png';

const Homepage = () => {
  return (
    <section className="homepage">
      <div className="relative h-screen grid grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="mx-auto">
            <div className="text-white flex flex-col">
              <div className='desc'>
                <h2 className="text-4xl mb-5">Hi there, I'm </h2>
                <h1 className="text-5xl mb-5 text-orange-300" style={{ letterSpacing: '0.05em' }}>
                  Ishmam Ahmed
                </h1>
              </div>
              <div className="bg-[#cf6a17] h-[4px] w-[250px] mb-6"></div>
              <h4 className="typewriters text-2xl mb-5 text-gray-400">
                {/* <Typewriter
                  options={{
                    strings: ['Software Engineer', 'Frontend Developer', 'Ui/Ux Designer', 'Based in Leeds, UK'],
                    changeDelay: 3,
                    changeDeleteSpeed: 2,
                    autoStart: true,
                    loop: true,
                  }}
                /> */}
              </h4>
              <p className='maindesc max-w-[500px] mb-40 py-5'>
                  - As a dedicated <strong className='text-lg'>Software Engineer</strong>, I am currently pursuing a postgraduate degree in <strong className='text-lg'>Artificial Intelligence</strong> from the <strong className='text-lg'>University of Leeds</strong> with a strong focus on <strong className='text-lg'>Web Development</strong>, <strong className='text-lg'>Mobile Applications</strong>, and <strong className='text-lg'>AI</strong>,
                </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-60">
          <div className="mx-auto">
            <a>
              <Image src={mainMe} className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
