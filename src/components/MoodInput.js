import React from "react";
import "../stylesheets/MoodInput.scss";
import getSmileFace from "./getSmileFace";

const MoodInput = ({ inputId, textLabel, mood, moodInputsHandler }) => {
  return (
    <>
      <label className="mood" htmlFor="mood">
        <input
          type="radio"
          name="mood"
          className="mood__input"
          value={textLabel}
          id={inputId}
          checked={mood.includes(textLabel)}
          onChange={moodInputsHandler}
        />
        <img
          className="mood__emoji"
          src={getSmileFace(textLabel)}
          alt={textLabel}
        />
      </label>
    </>
  );
};

export default MoodInput;
