import React, { useState } from "react";
import {
  MdCancel,
  MdEdit,
  MdDelete,
  MdStar,
  MdStarBorder,
} from "react-icons/md";
import "./Note.css";

function Note({
  id,
  text,
  date,
  colour,
  important,
  handleDeleteNote,
  handleUpdateNote,
  handleNewColour,
  handleImportance,
}) {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(text);
  const [color, setColor] = useState("#ffffcc");
  const [importance, setImportance] = useState(false);

  const characterLimit = 300;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setEditText(event.target.value);
    }
  };

  const handleEditCancel = () => {
    setEdit(false);
    setEditText(text);
  };

  const handleEditSave = () => {
    setEdit(false);
    handleUpdateNote(id, editText);
  };

  const handleColor = () => {
    setColor(document.getElementById(id).value);
    handleNewColour(id, color);
  };

  const handleStar = () => {
    setImportance(!importance);
    handleImportance(id);
  };

  return (
    <>
      {edit ? (
        <div className="note" style={{ backgroundColor: colour }}>
          <textarea
            rows={10}
            cols={10}
            placeholder={"Type to add a note..."}
            value={editText}
            onChange={handleChange}
            style={{ backgroundColor: colour }}
          />
          <div className="note-footer">
            <small className="extra-info">
              {characterLimit - editText.length} characters remaining
            </small>
            <button className="note-button" onClick={handleEditCancel}>
              <MdCancel />
            </button>
            <button className="save-button" onClick={handleEditSave}>
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="note" style={{ backgroundColor: colour }}>
          <p>{text}</p>
          <div className="note-footer">
            <small className="extra-info">Last modified: {date}</small>
            <input
              type={"color"}
              value={colour}
              id={id}
              className="color-label"
              onChange={handleColor}
            />
            <button className="note-button" onClick={() => setEdit(true)}>
              <MdEdit />
            </button>
            {!important ? (
              <button className="note-button" onClick={handleStar}>
                <MdStarBorder />
              </button>
            ) : (
              <button className="note-button" onClick={handleStar}>
                <MdStar style={{ color: "red" }} />
              </button>
            )}
            <button
              className="note-button"
              onClick={() => handleDeleteNote(id)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Note;
