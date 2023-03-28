import React from "react";
import Typewriter from "typewriter-effect";

new Typewriter("#typewriter", {
  strings: ["Hello", "World"],
  autoStart: true,
});

const Main = () => {
  return (
    <div className="container" id="main">
      <div className="main">
        <img src="/image/home.png" alt="Home" className="img" />
        <div className="banner">
            <div>
              <Typewriter
                options={{
                  strings: ["Hello I'm Arnold Nillas", "I'm a Front End Developer","Let's work together!"],
                  autoStart: true,
                  loop: true,
                  delay: 25,
                  pauseFor: 2000
                }}
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
