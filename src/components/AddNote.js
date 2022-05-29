import React, { useState } from "react";
import "./Note.css";

function AddNote({ handleAddNote }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
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
        <small className="extra-info">300 characters remaining</small>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
