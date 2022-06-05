import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Music from "./components/Music";
import Quote from "./components/Quote";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState([]);
  const [showPlus, setShowPlus] = useState(true);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      colour: "#ffffcc",
    };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    setShowPlus(true);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const updateNoteContent = (id, text) => {
    const date = new Date();
    const updatedNotes = notes.map((note) => {
      const newNote = { ...note };
      if (note.id === id) {
        newNote.text = text;
        newNote.date = date.toLocaleDateString();
      }
      return newNote;
    });
    setNotes(updatedNotes);
  };

  const updateNoteColour = (id, colour) => {
    const updatedNotes = notes.map((note) => {
      const newNote = { ...note };
      if (note.id === id) {
        newNote.colour = colour;
      }
      return newNote;
    });
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <Music />
      <Quote />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handleUpdateNote={updateNoteContent}
        handleNewColour={updateNoteColour}
        showPlus={showPlus}
        setShowPlus={setShowPlus}
      />
    </div>
  );
}

export default App;
