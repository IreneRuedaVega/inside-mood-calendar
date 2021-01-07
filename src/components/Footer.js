import React from "react";
import "../stylesheets/Footer.scss";
import LogoBlanco from "../images/logoBlanco.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Link to="/" title="Back to landing">
          <img
            className="footer__logo"
            src={LogoBlanco}
            alt="Logo de la aplicación Inside mood calendar"
          />
        </Link>
        <nav>
          <ul className="social">
            <li className="social__item">
              <a
                href="https://github.com/IreneRuedaVega"
                target="_blank"
                title="Github"
                className="social__item--github"
                rel="noreferrer"
              >
                <i className="fab fa-github-alt"></i>
              </a>
            </li>
            <li className="social__item">
              <a
                href="www.linkedin.com/in/ireneruedavega"
                target="_blank"
                title="Linkedin"
                className="social__item--linkedin"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social__item">
              <a
                href="www.twitter.com/Irenelandia_"
                target="_blank"
                title="Twitter"
                className="social__item--twitter"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
