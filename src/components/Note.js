import React from "react";
import { MdDelete } from "react-icons/md";
import "./Note.css";

function Note({ id, text, date, handleDeleteNote }) {
  return (
    <div className="note">
      <p>{text}</p>
      <div className="note-footer">
        <small className="extra-info">Last modified: {date}</small>
        <button className="delete-button" onClick={() => handleDeleteNote(id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default Note;
