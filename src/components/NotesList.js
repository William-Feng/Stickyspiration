import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import "./NotesList.css";

function NotesList({ notes }) {
  return (
    <div className="container">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote />
    </div>
  );
}

export default NotesList;
