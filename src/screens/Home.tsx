import React, {useState, Fragment} from 'react'
import Header from 'src/components/Header'

function IntroLetter({ char } : {char: string;}) {
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
  
  function IntroWord({ word }: {word: string;}) {
    return (
      <span style={{ display: "inline-block" }}>
        {word.split("").map((letter, letterIndex) => (
          <IntroLetter key={letterIndex} char={letter} />
        ))}
      </span>
    );
  }

function IntroText({ children }: {children: string;}) {
    return (
      <div>
        <p className="intro-text anim-typewriter line-1">
          {children.split(" ").map((word, wordIndex) => (
            <Fragment>
              <IntroWord key={wordIndex} word={word} />
              <span> </span>
            </Fragment>
          ))}
        </p>
      </div>
    );
  }

const Home = () => {
    return (
        <div>
            <Header />
            <div className="text-text flex justify-center items-center mt-10">
                <IntroText>
                    Welcome to Kelly Shen's interactive portfolio
                </IntroText>
                <div className="absolute bottom-0 text-background select-none">
                    Think you're cheeky, huh?
                </div>
            </div>
        </div>
    );
}

export default Home;
