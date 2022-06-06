import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import "./Note.css";

function AddNote({ handleAddNote, showPlus, setShowPlus }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
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
            className="new"
          />
          <div className="note-footer">
            <small className="extra-info">{text.length} characters</small>
            <div className="less note-actions">
              <button
                className="note-button"
                onClick={() => {
                  setShowPlus(true);
                }}
              >
                <MdCancel />
              </button>
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddNote;
