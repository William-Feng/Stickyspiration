import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import "./NotesList.css";

function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="container">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

export default NotesList;
