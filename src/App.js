import React, { useState } from "react";
import "./App.css";
import Music from "./components/Music";
import Quote from "./components/Quote";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "This is my first note",
      date: "27/05",
    },
    {
      id: 2,
      text: "This is my second note",
      date: "28/05",
    },
    {
      id: 3,
      text: "This is my third note",
      date: "29/05",
    },
    {
      id: 4,
      text: "This is my last note",
      date: "30/05",
    },
  ]);

  return (
    <div className="App">
      <Music />
      <Quote />
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
