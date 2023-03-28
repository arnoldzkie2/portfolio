import React from "react";
import { Link } from "react-scroll";
import { useRef } from "react";
import { useState } from "react";
const Header = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [theme, setTheme] = useState('light')

  const handleTheme = () => {
    if(theme === 'light'){
      document.documentElement.style.setProperty('--main', '#111');
      document.documentElement.style.setProperty('--main1', '#222');
      document.documentElement.style.setProperty('--second', 'rgb(245,245,245)');
      document.documentElement.style.setProperty('--second1', '#FFFFFF');
      document.documentElement.style.setProperty('--accent', '#2ec4b6');
      setTheme('dark')
    } else {
      document.documentElement.style.setProperty('--main', '#FFFFFF');
      document.documentElement.style.setProperty('--main1', 'rgb(245,245,245)');
      document.documentElement.style.setProperty('--second', '#111');
      document.documentElement.style.setProperty('--second1', '#222');
      document.documentElement.style.setProperty('--accent', '#2ec4b6');
      setTheme('light')
    }
  }

  return (
    <header className="header">
      <h1 className="h1-logo">ARNOLD</h1>
      <nav className="header-nav" ref={navRef}>
        <button onClick={showNavBar} className="nav-btn nav-close-btn">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <Link to="main" smooth={true} duration={500} onClick={showNavBar}>
          <li className="header-li">Home</li>
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={showNavBar}>
          <li className="header-li">Projects</li>
        </Link>
        <Link to="profile" smooth={true} duration={500} onClick={showNavBar}>
          <li className="header-li">Profile</li>
        </Link>
        <Link to="contact-container" smooth={true} duration={500} onClick={showNavBar}>
          <li className="header-li">Contact</li>
        </Link>
        <li>{theme === "light" ? <i className="fa-solid fa-moon"
        onClick={handleTheme}
        ></i> : <i className="fa-solid fa-sun"
        onClick={handleTheme}
        ></i>}</li>
          <div className="nav-footer">
        © 2023 Arnold Nillas. All rights reserved.
          </div>
      </nav>
      <button onClick={showNavBar} className="nav-btn">
        <i className="fa-solid fa-bars" ></i>
      </button>
    </header>
  );
};
export default Header;
