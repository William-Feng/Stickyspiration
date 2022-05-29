import React from "react";
import "./Note.css";

function AddNote() {
  return (
    <div className="new note">
      <textarea rows={10} cols={10} placeholder={"Type to add a note..."} />
      <div className="note-footer">
        <small className="extra-info">300 characters remaining</small>
        <button className="save-button">Save</button>
      </div>
    </div>
  );
}

export default AddNote;
