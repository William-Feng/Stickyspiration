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
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [noteLimit, setNoteLimit] = useState(8);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    window.addEventListener("resize", () =>
      setWindowHeight(window.innerHeight)
    );
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
      window.removeEventListener("resize", () =>
        setWindowHeight(window.innerHeight)
      );
      if (windowWidth <= 600) {
        windowHeight <= 840 ? setNoteLimit(1) : setNoteLimit(2);
      } else if (windowWidth <= 1000) {
        windowHeight <= 840 ? setNoteLimit(2) : setNoteLimit(4);
      } else if (windowWidth <= 1400) {
        windowHeight <= 840 ? setNoteLimit(3) : setNoteLimit(6);
      } else {
        windowHeight <= 840 ? setNoteLimit(4) : setNoteLimit(8);
      }
    };
  }, [[], windowWidth, windowHeight]);

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
