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

  const updateNoteColour = (id, color) => {
    const updatedNotes = [];
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        notes[i].colour = color;
      }
      updatedNotes.push(notes[i]);
    }
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
        handleUpdateNote={updateNoteColour}
        showPlus={showPlus}
        setShowPlus={setShowPlus}
      />
    </div>
  );
}

export default App;
