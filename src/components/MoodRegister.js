import React from "react";
import moment from "moment";
import "../stylesheets/MoodRegister.scss";
import getSmileFace from "./getSmileFace";

const MoodRegister = ({ moodItem }) => {
  return (
    <>
      <img
        className="calendar__image"
        src={getSmileFace(moodItem.mood)}
        alt={moodItem.mood}
      />
      <div className="calendar__text">
        <p className="calendar__text--date">
          {moment(moodItem.date).format("MMMM Do YYYY")}
        </p>
        <p className="calendar__text--message">{moodItem.message}</p>
      </div>
    </>
  );
};

export default MoodRegister;
