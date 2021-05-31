import React, {useState, Fragment, useRef, useEffect, useLayoutEffect, Suspense} from 'react'
import Header from 'src/components/Header'
import anime from 'animejs'
import { Link } from 'wouter';
import { routes } from 'src/constants/routes';
import Typewriter from 'typewriter-effect'
import { Canvas, useFrame } from '@react-three/fiber'
import {Stars} from 'src/components/Stars'

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
    const exicrisRef = useRef(null);
    const pageRef = useRef(document.createElement("div"));
    const [scrolled, setScrolled] = useState(false);
    const [zoom, setZoom] = useState(false);

    const bottomPos = pageRef.current.getBoundingClientRect().bottom;
    const scrollHandler = (scroll : any) => {
        // console.log(scroll);
        const scrollPosition = window.scrollY + window.innerHeight
        if (bottomPos < scrollPosition) {
          // trigger animation
        //   setScrolled(true);
        } else {
            // setScrolled(false);
        }

    }

    useLayoutEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
      }, [])

    useEffect(() => {

        anime({
            targets: exicrisRef.current,
            keyframes: [
            {translateY: 20},
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

    return (
        <div>
            <Header delay={800} onPress={() => setZoom(true)}/>
            <Canvas style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
            }}
            camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
            >
                <pointLight position={[10, 10, 10]}/>
                <ambientLight />
                <Suspense fallback={null}>
                    <Stars scrolled={scrolled} zoom={zoom}/>
                </Suspense>
            </Canvas>
            <div>
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
                                .start();
                            }}
                        />
                    </div>
                </div>

                <div className="">
                <div ref={exicrisRef} className="absolute">
                    <Link href={routes.SECRET1}>
                        <img className="w-20 cursor-pointer" src="/assets/exicrisme.png" alt=""/>
                    </Link>
                </div>
                <div className="text-text text-center flex flex-col justify-center items-center px-4">
                    Heysdgjkasgoiahsgp
                </div>
                </div>
            </div>
            <div className="absolute bottom-0 text-background select-none">
                Think you're cheeky, huh?
            </div>
        </div>
    );
}

export default Home;
