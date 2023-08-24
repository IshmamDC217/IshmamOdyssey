import React from 'react';
import Heading from './Heading';

const Hobby = () => {
    return (
        <div className="about-page">
            <section className="about-me-content hobbies">
                <video className="hobby-video" autoPlay loop muted>
                    <source src="/hobbies.mp4" type="video/mp4" />
                </video>
                <Heading title='Hobbies' />
                <div className="hobby-grid text-2xl font-bold w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {[
                        { name: "guitar", displayName: "Music Composition", desc: "Music has always been a part of my life. I particularly love playing guitar and expressing my creativity through this musical instrument." },
                        { name: "programming", displayName: "Software and Web Development", desc: "As a software engineer, programming is not just my job but also a hobby that I enjoy. It's always thrilling to solve problems and build something from scratch." },
                        { name: "adventure", displayName: "Local and Global Adventures", desc: "I love exploring the great outdoors and seeking thrilling experiences. Adventure sports keep me active and invigorated." },
                        { name: "tasting", displayName: "Culinary Explorations with my Better Half", desc: "Exploring new cuisines and experimenting with flavors is another hobby that I indulge in. It's all about discovering the world one bite at a time." },
                        { name: "gamer", displayName: "Gaming", desc: "Gaming is an immersive hobby that allows me to dive into different worlds, roles, and narratives. It's an excellent way to unwind and have fun." }
                    ].map((hobby, index) =>
                        <div className={`hobby hobby-${index % 2 === 0 ? 'even' : 'odd'} glass-container4 border`} key={hobby.name}>
                            <h2>{hobby.displayName}</h2>
                            <div className="hobby-content">
                                {index % 2 === 0 && <img src={`${hobby.name}.svg`} alt={hobby.displayName} className="hobby-img" />}
                                <p className="hobby-description">
                                    {hobby.desc}
                                </p>
                                {index % 2 !== 0 && <img src={`${hobby.name}.svg`} alt={hobby.displayName} className="hobby-img" />}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Hobby;
