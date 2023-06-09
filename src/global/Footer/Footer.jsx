import React from "react";
import "./Footer.css";
import Logo from "../../Images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__header__wrapper">
        <img src={Logo} alt="Technicrafts" />
        <h1>Technicrafts Enviro Solutions</h1>
        <p>Where knowledge meets Innovation!</p>
      </div>
      <div className="footer__copyright__wrapper">
        <span>© 2021 TechniCrafts Enviro Solutions. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
