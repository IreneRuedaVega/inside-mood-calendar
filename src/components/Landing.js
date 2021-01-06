import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Landing.scss";
import Logo from "../images/logoInsideMood.svg";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <img
          className="landing__img"
          src={Logo}
          alt="Logo de la aplicación Inside mood calendar"
        />
        <Link to="/calendar">
          <button className="landing__button" title="Start your calendar mood!">
            Start
          </button>
        </Link>
      </div>
    </>
  );
};

export default Landing;
