import React from "react";
import "./App.css";
import Music from "./components/Music";
import Quote from "./components/Quote";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div className="App">
      <Music />
      <Quote />
      <NotesList />
    </div>
  );
}

export default App;
