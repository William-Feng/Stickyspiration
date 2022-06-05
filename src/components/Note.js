import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import "./Note.css";

function Note({ id, text, date, colour, handleDeleteNote, handleUpdateNote }) {
  const [color, setColor] = useState("#ffffcc");

  const handleColor = () => {
    setColor(document.getElementById(id).value);
    handleUpdateNote(id, color);
  };

  return (
    <div className="note" style={{ backgroundColor: colour }}>
      <p>{text}</p>
      <div className="note-footer">
        <small className="extra-info">Last modified: {date}</small>
        <input
          type={"color"}
          value={colour}
          id={id}
          className="color-label"
          onChange={handleColor}
        />
        <button className="delete-button" onClick={() => handleDeleteNote(id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default Note;
