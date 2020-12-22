import React from "react";
import "../stylesheets/Editor.scss";

const Editor = (props) => {
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
        />
        <label className="editor__form--textMood" htmlFor="state">
          Please select your mood
        </label>
        <div className="editor__form--mood">
          <label htmlFor="state" className="happy">
            <input type="radio" id="state" value=":)" className="happy__face" />
            <span className="happy__emoji">&#128578;</span>
          </label>
          <label htmlFor="state" className="sad">
            <input
              htmlFor="state"
              type="radio"
              id="state"
              value=":("
              className="sad__face"
            />
            <span className="sad__emoji">&#128577;</span>
          </label>
        </div>
        <textarea
          className="editor__form--message"
          id="message"
          name="w3review"
          rows="6"
          cols="35"
          placeholder="Why do you feel like this?"
        ></textarea>
        <div className="editor__form--buttons">
          <button className="btnSave">Save</button>
          <button className="btnCancel">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Editor;
