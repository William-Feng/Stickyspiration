import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./Note.css";

function AddNote({ handleAddNote, showPlus, setShowPlus }) {
  const [text, setText] = useState("");
  const characterLimit = 300;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setText(event.target.value);
    }
  };

  const handleSave = () => {
    if (text.trim().length > 0) {
      handleAddNote(text);
      setText("");
    }
  };

  return (
    <div>
      {showPlus ? (
        <div
          className="plus note"
          onClick={() => {
            setShowPlus(false);
          }}
        >
          <FaPlus size={"5em"} />
        </div>
      ) : (
        <div className="new note">
          <textarea
            rows={10}
            cols={10}
            placeholder={"Type to add a note..."}
            value={text}
            onChange={handleChange}
          />
          <div className="note-footer">
            <small className="extra-info">
              {characterLimit - text.length} characters remaining
            </small>
            <button
              className="delete-button"
              onClick={() => {
                setShowPlus(true);
              }}
            >
              <MdDelete />
            </button>
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddNote;
