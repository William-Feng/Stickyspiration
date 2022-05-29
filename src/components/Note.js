import React from "react";
import { MdDelete } from "react-icons/md";
import "./Note.css";

function Note() {
  return (
    <div className="note">
      <p className="contents">Hello, World!</p>
      <div className="note-footer">
        <small className="date">Last modified: 29/05</small>
        <MdDelete size={"20px"} />
      </div>
    </div>
  );
}

export default Note;
