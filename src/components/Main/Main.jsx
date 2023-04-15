import React from "react";
import Typewriter from "typewriter-effect";
import './main.scss'

const Main = () => {
  return (
      <div className="main" id="main">
        <img src="/image/intro.gif" alt="Home"/>
        <div className="banner">
            <div>
              <Typewriter
                options={{
                  strings: ["Hello I'm Arnold Nillas", "I'm a Front End Developer","Let's build something amazing!"],
                  autoStart: true,
                  loop: true,
                  delay: 25,
                  pauseFor: 2000
                }}
              />
            </div>
        </div>
      </div>
  );
};

export default Main;
