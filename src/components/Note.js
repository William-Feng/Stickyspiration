import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import "./Note.css";

function Note({ id, text, date, handleDeleteNote }) {
  const [color, setColor] = useState("#ffffcc");

  return (
    <div className="note" style={{ backgroundColor: color }}>
      <p>{text}</p>
      <div className="note-footer">
        <small className="extra-info">Last modified: {date}</small>
        <input
          type={"color"}
          value={color}
          id={id}
          className="color-label"
          onChange={() => setColor(document.getElementById(id).value)}
        />
        <button className="delete-button" onClick={() => handleDeleteNote(id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default Note;
