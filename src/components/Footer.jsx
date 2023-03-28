import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="container-footer">
      © 2023 Arnold Nillas. All rights reserved.
      <Link to="main" smooth={true} duration={500}>
        <i className="fas fa-arrow-up"></i>
      </Link>
    </div>
  );
};

export default Footer;
