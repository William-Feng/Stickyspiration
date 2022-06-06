import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import "./NotesList.css";

function NotesList({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleUpdateNote,
  handleNewColour,
  handleImportance,
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
          colour={note.colour}
          important={note.important}
          handleDeleteNote={handleDeleteNote}
          handleUpdateNote={handleUpdateNote}
          handleNewColour={handleNewColour}
          handleImportance={handleImportance}
        />
      ))}
      {notes.length < noteLimit && (
        <AddNote
          handleAddNote={handleAddNote}
          showPlus={showPlus}
          setShowPlus={setShowPlus}
        />
      )}
    </div>
  );
}

export default NotesList;
