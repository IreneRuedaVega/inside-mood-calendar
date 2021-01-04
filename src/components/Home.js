import React from "react";
import "../stylesheets/Home.scss";
import MoodRegister from "./MoodRegister";
import { Link } from "react-router-dom";
import "../stylesheets/MoodRegister.scss";

const Home = ({ moodDataArr, btnNewRecordHandler }) => {
  return (
    <>
      <div className="home">
        <div className="home__text">
          <h1 className="home__text--title">How was your day?</h1>
          <h4 className="home__text--subtitle">
            Start by adding your mood today!
          </h4>
        </div>
        <Link to="/editor">
          <button className="home__btn" onClick={btnNewRecordHandler}>
            +
          </button>
        </Link>
      </div>
      <div>
        <ul>
          {moodDataArr.map((moodItem, index) => {
            return (
              <li key={index} className="calendar">
                <MoodRegister moodItem={moodItem} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;
