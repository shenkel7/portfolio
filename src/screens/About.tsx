import React, {useEffect, useRef} from 'react';
import Header from 'src/components/Header';
import anime from 'animejs';

type TLogo = {
    src: string;
    alt: string;
};

const Logo = ({src, alt} : TLogo) => {
    return (
        <img className="h-8 mx-6" src={src} alt={alt} />
    );
}

const About = () => {
    const myRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            anime({
              targets: myRef.current,
              opacity: [0, 1],
              translateX: [-100, 0],
              duration: 500,
              easing: "easeOutBack"
            });
          }, 100);
    },[])

    return (
        <div>
            <Header />
            <div className="flex flex-row justify-center p-8">
                <video ref={myRef} className="hidden md:block" preload="yes" playsInline autoPlay muted loop width={400}>
                    <source src="/assets/blinkyme.mp4" type="video/mp4" />
                </video>
                <div className="text-text flex flex-col mt-10 ml-4 max-w-2xl text-lg">
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

                    <div className="mt-24 flex flex-col items-center">
                        <div className="font-majormonodisplay mb-4">
                            Links
                        </div>
                        <div className="flex flex-row w-full justify-center">
                            <a rel="preload" href="https://github.com/shenkel7" >
                                <Logo src="/assets/logos/GitHub-Mark-Light-120px-plus.png" alt="GitHub" />
                            </a>
                            <a rel="preload" href="https://www.artstation.com/aquafroq">
                                <Logo src="/assets/logos/Artstation-logo.png" alt="ArtStation" />
                            </a>
                            <a rel="preload"  href="https://www.linkedin.com/in/kelly-shen-8218011b6/">
                                <Logo src="/assets/logos/LI-In-Bug.png" alt="Linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;