import React from "react";
import "../stylesheets/Home.scss";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home">
      <div className="home__text">
        <h1 className="home__text--title">How was your day?</h1>
        <h4 className="home__text--subtitle">
          Start by adding your mood today!
        </h4>
      </div>
      <Link to="/editor">
        <button className="home__btn">+</button>
      </Link>
    </div>
  );
};

export default Home;
