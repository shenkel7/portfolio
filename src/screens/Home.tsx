import React, {useState, Fragment, useRef, useEffect} from 'react'
import Header from 'src/components/Header'
import anime from 'animejs'
import { Link } from 'wouter';
import { routes } from 'src/constants/routes';

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
              <span> </span>
            </Fragment>
          ))}
        </p>
      </div>
    );
  }

const Home = () => {
    const myRef = useRef(null);
    const pageRef = useRef(null);

    useEffect(() => {
        anime({
            targets: myRef.current,
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
            <Header />
            <div ref={pageRef}>
                <div className="text-text flex flex-col justify-center items-center py-10 relative">
                    <TypeText>
                        Welcome to Kelly Shen's interactive portfolio
                    </TypeText>
                    <div ref={myRef} className="absolute top-36">
                        <Link href={routes.SECRET1}>
                            <img className="w-32 cursor-pointer" src="/assets/exicrisme.png" alt=""/>
                        </Link>
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
