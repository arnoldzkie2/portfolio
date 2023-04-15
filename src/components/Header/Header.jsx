import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import "./header.scss";
const Header = () => {
  const navRef = useRef(),
    burger = useRef(),
    burger1 = useRef(),
    [headerStyle, setHeaderStyle] = useState({
      body: "transparent",
      logo: "#fff",
      navLi: "#fff",
      burger: "#fff",
      nav: "transparent",
    });

  const headerBody = {
      background: headerStyle.body,
    },
    headerLogo = {
      color: headerStyle.logo,
    },
    burgerColor = {
      background: headerStyle.burger,
    },
    navColor = {
      background: headerStyle.nav,
    },
    navLi = {
      color: headerStyle.navLi
    }
  useEffect(() => {
    const switchHeader = () => {
      if (window.innerWidth < 650) {
        if (scrollY > 0) {
          setHeaderStyle({
            body: "#fff",
            logo: "#333",
            nav: "#fff",
            navLi: "#333",
            burger: "#333",
          });
        } else {
          setHeaderStyle({
            body: "transparent",
            logo: "#fff",
            navLi: "#fff",
            burger: "#fff",
            nav: "#0085ff",
          });
        }
      } else {
        if (scrollY > 0) {
          setHeaderStyle({
            body: "#fff",
            logo: "#333",
            navLi: "#333",
            nav: "#fff",
            burger: "#0085ff",
          });
        } else {
          setHeaderStyle({
            body: "transparent",
            logo: "#fff",
            navLi: "#fff",
            burger: "#fff",
            nav: "transparent",
          });
        }
      }
    };
    window.addEventListener("scroll", switchHeader);
    switchHeader();
    window.addEventListener("resize", switchHeader);
    return () => {
      window.removeEventListener("scroll", switchHeader);
      window.removeEventListener("resize", switchHeader);
    };
  }, [window.innerWidth]);

  const toggleNavBar = () => {
    navRef.current.classList.toggle("show-menu");
    burger.current.classList.toggle("toggle-burger");
    burger1.current.classList.toggle("toggle-burger");
  };

  return (
    <header className="header" style={headerBody}>
      <h1 style={headerLogo}>ARNOLD</h1>
      <ul className="nav" ref={navRef} style={navColor}>
        <Link to="main" smooth={true} duration={500} onClick={toggleNavBar}>
          <li className="header-li" style={navLi}>
            Home
          </li>
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={toggleNavBar}>
          <li className="header-li" style={navLi}>
            About
          </li>
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={toggleNavBar}>
          <li className="header-li" style={navLi}>
            Projects
          </li>
        </Link>
        <Link
          to="contact-container"
          smooth={true}
          duration={500}
          onClick={toggleNavBar}
        >
          <li className="header-li" style={navLi}>
            Contact
          </li>
        </Link>
        <div className="nav-footer">
          © 2023 Arnold Nillas. All rights reserved.
        </div>
      </ul>
      <div className="burger" onClick={toggleNavBar}>
        <div className="menu" ref={burger} style={burgerColor}></div>
        <div className="menu-1" ref={burger1} style={burgerColor}></div>
      </div>
    </header>
  );
};
export default Header;
