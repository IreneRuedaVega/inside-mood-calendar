import React from "react";
import "../stylesheets/Editor.scss";
import { Link } from "react-router-dom";
import MoodInput from "./MoodInput";

const Editor = ({
  date,
  mood,
  message,
  moodInputsHandler,
  btnSaveHandler,
  btnCancelHandler,
}) => {
  return (
    <div className="editor">
      <h1 className="editor__title">How was your day?</h1>
      <form className="editor__form">
        <label htmlFor="date" className="editor__form--date">
          Choose a date
        </label>
        <input
          className="editor__form--dateInput"
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={moodInputsHandler}
        />
        <label className="editor__form--textMood" htmlFor="state">
          Please select your mood
        </label>
        <div className="editor__form--mood">
          <MoodInput
            inputId="moodHappy"
            textLabel=":)"
            mood={mood}
            moodInputsHandler={moodInputsHandler}
          />
          <MoodInput
            inputId="moodHappy"
            textLabel=":("
            mood={mood}
            moodInputsHandler={moodInputsHandler}
          />
        </div>
        <textarea
          className="editor__form--message"
          name="message"
          id="message"
          rows="6"
          cols="35"
          maxLength="280"
          placeholder="Why do you feel like this?"
          value={message}
          onChange={moodInputsHandler}
        ></textarea>
        <div className="editor__form--buttons">
          <Link to="/">
            <button className="btnSave" onClick={btnSaveHandler}>
              Save
            </button>
          </Link>
          <Link to="/">
            <button className="btnCancel" onClick={btnCancelHandler}>
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Editor;
