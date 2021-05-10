import React from 'react';
import Header from 'src/components/Header';

const About = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-row p-10">
                <video className="hidden md:block" preload="yes" playsInline autoPlay muted loop width={400}>
                    <source src="assets/blinkyme.mp4" type="video/mp4" />
                </video>
                <div className="text-text flex justify-center mt-10">
                    Hello there, traveler! 
                    <br />
                    <br />
                    I'm Kelly, an artist and coder
                    studying Computer Science at the University of Texas at Austin. I  
                    enjoy video games, indie music, writing, and I love a good story.
                    I also like making interactive works. 
                    <br />
                    <br />
                    This site is a little hobby of mine to showcase some of those artworks.
                    I hope you find your stay refreshing.
                </div>
            </div>
        </div>
    );
}

export default About;