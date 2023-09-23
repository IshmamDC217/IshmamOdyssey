import React from 'react';
import Heading from './Heading';

const Hobby: React.FC = () => {
    return (
        <section className="hobby-page grid grid-cols-1 md:grid-cols-2">
            <div className="hobby-image-container mb-8 md:mb-0">
                <img src="/Hobpic.png" alt="Hobbies" className="hobby-large-image mx-auto md:mx-0" style={{ padding: '10px', borderRadius: '30px' }} />
            </div>
            <div className="hobby-list-container">
                <Heading title='Hobbies' />
                <a href='https://www.instagram.com/metoracliffsmusic/?hl=en'
                    className='text-white p-3 rounded-lg bg-[#68513b] ml-4 font-semibold'>Check out my Band!</a>

                <p className="hobby-list-intro text-xl text-black font-semibold max-w-[900px] pl-6 pr-4 pt-8">Many see hobbies as a form of leisure, but for me,
                    they are integral to both my personal and professional development.
                    My love for music and guitar-playing has not only fueled my creativity
                    but also honed my project management skills, key in my career as a software developer.
                    Adventures, whether local or global, have taught me adaptability and open-mindedness,
                    enriching my social life and professional collaborations.
                    Culinary explorations, especially with my better half, have introduced me to diverse cultures, making me a better communicator and teammate.
                    Lastly, gaming serves as both an escape and a strategy lab, helping me unwind while enhancing my problem-solving skills.
                    In essence, my hobbies aren't just pastime activities;
                    they are lifestyle choices that have significantly impacted my career and personal growth. To summarize, these are the key hobbies that have shaped my life:</p>

                <ul className="hobby-list text-2xl font-bold text-black grid grid-cols-1 md:grid-cols-2 p-6 list-decimal pl-8 md:pl-6">
                    <li className="mb-10 md:mb-4 flex items-center"><img className='mr-4' src='/guitar.svg' height="64" width="64" /> Music Composition</li>
                    <li className="mb-10 md:mb-4 flex items-center"><img className='mr-4' src='/programming.svg' height="84" width="84" /> Software and Web Development</li>
                    <li className="mb-10 md:mb-4 flex items-center"><img className='mr-4' src='/adventure.svg' height="84" width="84" /> Local and Global Adventures</li>
                    <li className="mb-10 md:mb-4 flex items-center"><img className='mr-4' src='/tasting.svg' height="84" width="84" /> Culinary Explorations</li>
                    <li className="flex items-center"><img className='mr-4' src='/gamer.svg' height="84" width="84" /> Gaming</li>
                </ul>
            </div>
        </section>
    );
}

export default Hobby;