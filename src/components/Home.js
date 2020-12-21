import React from "react";
import "../stylesheets/Home.scss";

const Home = (props) => {
  return (
    <div className="home">
      <h1 className="home__title">How was your day?</h1>

      <button className="home__btn">+</button>
      <h4 className="home__text">Start by adding your mood today!</h4>
    </div>
  );
};

export default Home;
