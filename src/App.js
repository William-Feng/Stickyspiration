import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Music from "./components/Music";
import Quote from "./components/Quote";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "27/05/2022",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "28/05/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "29/05/2022",
    },
    {
      id: nanoid(),
      text: "This is my last note",
      date: "30/05/2022",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <Music />
      <Quote />
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
}

export default App;
