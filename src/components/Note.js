import React from "react";
import { MdDelete } from "react-icons/md";
import "./Note.css";

function Note({ id, text, date }) {
  return (
    <div className="note">
      <p>{text}</p>
      <div className="note-footer">
        <small className="date">Last modified: {date}</small>
        <MdDelete size={"20px"} />
      </div>
    </div>
  );
}

export default Note;
