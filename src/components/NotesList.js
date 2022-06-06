import React, { useEffect, useState } from "react";
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [noteLimit, setNoteLimit] = useState(8);
  const [characterLimit, setCharacterLimit] = useState(300);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
      if (windowWidth <= 600) {
        setNoteLimit(2);
        setCharacterLimit(200);
      } else if (windowWidth <= 1000) {
        setNoteLimit(4);
        setCharacterLimit(250);
      } else if (windowWidth <= 1400) {
        setNoteLimit(6);
      } else {
        setNoteLimit(8);
      }
    };
  }, [[], windowWidth]);

  return (
    <div className="container">
      {notes.slice(0, noteLimit).map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          colour={note.colour}
          important={note.important}
          characterLimit={characterLimit}
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
