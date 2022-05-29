import React from "react";
import Note from "./Note";
import "./NotesList.css";

function NotesList({ notes }) {
  return (
    <div className="container">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
    </div>
  );
}

export default NotesList;
