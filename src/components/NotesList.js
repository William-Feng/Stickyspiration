import React, { useState } from "react";
import AddDefault from "./AddDefault";
import AddNote from "./AddNote";
import Note from "./Note";
import "./NotesList.css";

function NotesList({
  notes,
  handleAddNote,
  handleDeleteNote,
  showPlus,
  setShowPlus,
}) {
  const noteLimit = 8;

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
      {notes.length < noteLimit && showPlus && (
        <AddDefault
          onClick={() => {
            setShowPlus(false);
          }}
        />
      )}
      {notes.length < noteLimit && !showPlus && (
        <AddNote handleAddNote={handleAddNote} />
      )}
    </div>
  );
}

export default NotesList;
