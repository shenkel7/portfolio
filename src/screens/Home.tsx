import React, {useState, Fragment, useRef, useEffect, useLayoutEffect, Suspense} from 'react'
import Header from 'src/components/Header'
import anime from 'animejs'
import { Link, useLocation } from 'wouter';
import { routes } from 'src/constants/routes';
import Typewriter from 'typewriter-effect'
import { Canvas, useFrame } from '@react-three/fiber'
import Secret1 from 'src/screens/secrets/Secret1'
import { useStore } from 'src/app/state';

function TypeLetter({ char } : {char: string;}) {
    const [hoverClass, setHoverClass] = useState("single-letter");
    return (
      <span
        className={hoverClass}
        onMouseOver={() => setHoverClass("single-letter hovered")}
        onMouseLeave={() => setHoverClass("single-letter unhovered")}
      >
        {char}
      </span>
    );
  }
  
  function TypeWord({ word }: {word: string;}) {
    return (
      <span style={{ display: "inline-block" }}>
        {word.split("").map((letter, letterIndex) => (
          <TypeLetter key={letterIndex} char={letter} />
        ))}
      </span>
    );
  }

function TypeText({ children }: {children: string;}) {
    return (
      <div>
        <p className="intro-text anim-typewriter line-1">
          {children.split(" ").map((word, wordIndex) => (
            <Fragment>
              <TypeWord key={wordIndex} word={word} />
            </Fragment>
          ))}
        </p>
      </div>
    );
  }

const Home = () => {
    const state = useStore();

    const exicrisRef = useRef(null);
    const shiftRef = useRef(null);
    const pageRef = useRef(document.createElement("div"));
    const [location, setLocation] = useLocation();

    // const bottomPos = pageRef.current.getBoundingClientRect().bottom;
    const scrollHandler = (scroll : any) => {
        // console.log(scroll);
        if(window.scrollY > 0){
            upShift(-1);
        } else {
            upShift(1);
        }

        // const scrollPosition = window.scrollY + window.innerHeight
        // if (bottomPos < scrollPosition) {
        //   // trigger animation
        // //   setScrolled(true);
            
        // } else {
        //     // setScrolled(false);
        // }

    }

    useLayoutEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
      }, [])

    useEffect(() => {
        state.setZoom(false);

        anime({
            targets: exicrisRef.current,
            keyframes: [
            {translateY: -20},
            ],
            direction: "alternate",
            duration: 2000,
            easing: "easeInOutSine",
            loop: true,
        });

        anime({
            targets: pageRef.current,
            opacity: [0, 1],
            duration: 300,
            easing: "easeOutSine"
        })

    },[])

    const fade = () => {
        anime({
            targets: exicrisRef.current,
            opacity: [1, 0],
            duration: 800,
            easing: 'easeOutExpo',
        })
    }

    const upShift = (factor: number) => {
        anime({
            targets: shiftRef.current,
            keyframes: [
                {translateY: factor * (window.innerHeight - 300)},
            ],
            duration: 2000,
            easing: 'easeOutExpo',
        })
    }

    return (
        <div>
            <div>
                <Header delay={800} onPress={() => {
                    state.setZoom(true);
                }}/>
                <div className="relative">
                    <div className="h-screen" ref={pageRef}>
                        <div className="text-text text-left flex flex-col justify-center py-10 px-4 md:px-16 relative whitespace-pre-line">
                            {/* <TypeText>
                                Welcome to Kelly Shen's interactive portfolio
                            </TypeText> */}
                            <Typewriter 
                                options={{
                                    delay: 15
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString(`Welcome to Kelly Shen's interactive portfolio!\n`)
                                    .pauseFor(1000)
                                    .typeString(`\nThis is where I showcase some of my illustrations and coding projects, and generally have fun tinkering around.`)
                                    .pauseFor(500)
                                    .typeString(` To check out some of my works, click on “Works” in the navigation bar!`)
                                    .start();
                                }}
                            />
                        </div>
                    </div>

                    <div  className="relative right-0" ref={shiftRef}>
                    <div ref={exicrisRef} className="flex items-center justify-center">
                        <div onClick={() => {
                            setTimeout(() => setLocation(routes.SECRET1), 800)
                            fade();
                            state.setZoom(true);}}>
                            <img className="w-20 cursor-pointer" src="/assets/exicrisme.png" alt=""/>
                        </div>
                    </div>
                    {/* <div className="text-text text-center flex flex-col justify-center items-center px-4">
                        Heysdgjkasgoiahsgp
                    </div> */}
                    </div>
                </div>
                <div className="absolute bottom-0 text-background select-none">
                    Think you're cheeky, huh?
                </div>
                </div>
        </div>
    );
}

export default Home;
