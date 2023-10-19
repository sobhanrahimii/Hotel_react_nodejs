import "./navbar.css";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");

  const handleLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <button onClick={() => handleLang("en")}>En</button>
        <button onClick={() => handleLang("fa")}>Fa</button>
        <Link to='/' className="logo"><span>Logo</span></Link>
        <div className="navItem">
          <Link className="contact" to="/register">
            {t('nav.login')} 
          </Link>
          |
          <Link className="contact" to="/login">
            {t('nav.register')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
