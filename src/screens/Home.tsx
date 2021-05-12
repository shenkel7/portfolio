import React, {Fragment, useState} from 'react'
import Header from 'src/components/Header'
import './Home.scss';

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
        <p className="intro-text">
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
            <div className="text-text flex justify-center items-center">
                Welcome to Kelly Shen's interactive portfolio
            </div>

            <IntroText>
                Placeholder text placeholder text placeholder text placeholder text
                placeholder text placeholder text
            </IntroText>
        </div>
    );
}

export default Home;
