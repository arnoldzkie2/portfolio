import React from "react";
import { Link } from "react-scroll";
import './footer.scss'
const Footer = () => {
  return (
    <div className="container-footer">
      <div className="credits">© 2023 Arnold Nillas. All rights reserved.</div>
      <Link to="main" smooth={true} duration={500}>
        <i className="fas fa-arrow-up"></i>
      </Link>
    </div>
  );
};

export default Footer;
