import React, {useEffect, useRef, useState} from 'react';
import Header from 'src/components/Header';
import anime from 'animejs';

const About = () => {
    const myRef = useRef(null);
    const textRef = useRef(null);

    const [fontState, setFontState] = useState("font-robotomono");

    const toggleFontState = () => {
        if(fontState === "font-robotomono"){
            setFontState("font-ephemeris text-xl select-none");
        } else {
            setFontState("font-robotomono");
        }
    }

    useEffect(() => {
            anime({
              targets: myRef.current,
              opacity: [0, 1],
              translateX: [-100, 0],
              duration: 500,
              easing: "easeOutBack"
            });
            anime({
                targets: textRef.current,
                opacity: [0, 1],
                duration: 500,
                easing: "easeOutBack"
              });
    },[])

    return (
        <div>
            <Header />
            <div className="flex flex-col md:flex-row justify-center p-8">
                <video onClick={() => toggleFontState()} ref={myRef} className="order-2 md:order-1 mr-4" preload="yes" playsInline autoPlay muted loop width={400}>
                    <source src="/assets/blinkyme.mp4" type="video/mp4" />
                </video>
                <div ref={textRef} className="order-1 md:order-2 text-text flex flex-col mt-0 md:mt-10 max-w-2xl text-base md:text-lg ">
                    <p className={fontState} >
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
                    <br />
                    <br />
                    P.S. This site is chock-full of secrets. Can you find them?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;