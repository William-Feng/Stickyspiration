import React, { useState } from "react";
import "./Note.css";

function AddNote({ handleAddNote }) {
  const [text, setText] = useState("");
  const characterLimit = 300;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setText(event.target.value);
    }
  };

  const handleSave = () => {
    if (text.trim().length > 0) {
      handleAddNote(text);
      setText("");
    }
  };

  return (
    <div className="new note">
      <textarea
        rows={10}
        cols={10}
        placeholder={"Type to add a note..."}
        value={text}
        onChange={handleChange}
      />
      <div className="note-footer">
        <small className="extra-info">
          {characterLimit - text.length} characters remaining
        </small>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
