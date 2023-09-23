import React from 'react';
import Heading from './Heading';

const Hobby: React.FC = () => {
    return (
        <section className="hobby-page grid grid-cols-2">
            <div className="hobby-image-container">
                <img src="/Hobpic.png" alt="Hobbies" className="hobby-large-image rounded-lg" />
            </div>
            <div className="hobby-list-container">
                <Heading title='Hobbies'/>
                <p className="hobby-list-intro text-xl text-black font-semibold max-w-[900px]">Many see hobbies as a form of leisure, but for me,
                    they are integral to both my personal and professional development.
                    My love for music and guitar-playing has not only fueled my creativity
                    but also honed my project management skills, key in my career as a software developer.
                    Adventures, whether local or global, have taught me adaptability and open-mindedness,
                    enriching my social life and professional collaborations.
                    Culinary explorations, especially with my better half, have introduced me to diverse cultures, making me a better communicator and teammate.
                    Lastly, gaming serves as both an escape and a strategy lab, helping me unwind while enhancing my problem-solving skills.
                    In essence, my hobbies aren't just pastime activities;
                    they are lifestyle choices that have significantly impacted my career and personal growth. To summarize, these are the key hobbies that have shaped my life:</p>

                <ul className="hobby-list text-2xl font-bold text-black pb-5">
                    <li><img className='mt-6' src='/guitar.svg' height="64" width="64" /> Music Composition</li>
                    <li><img className='mt-6' src='/programming.svg' height="64" width="64" /> Software and Web Development</li>
                    <li><img className='mt-6' src='/adventure.svg' height="64" width="64" /> Local and Global Adventures</li>
                    <li><img className='mt-6' src='/tasting.svg' height="64" width="64" /> Culinary Explorations</li>
                    <li><img className='mt-6' src='/gamer.svg' height="64" width="64" /> Gaming</li>
                </ul>
            </div>
        </section>
    );
}

export default Hobby;
