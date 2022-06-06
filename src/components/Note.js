import React, { useState } from "react";
import { MdCancel, MdEdit, MdDelete } from "react-icons/md";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
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

  const handleChange = (event) => {
    setEditText(event.target.value);
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
            <small className="extra-info">{editText.length} characters</small>
            <div className="less note-actions">
              <button className="note-button" onClick={handleEditCancel}>
                <MdCancel />
              </button>
              <button className="save-button" onClick={handleEditSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="note" style={{ backgroundColor: colour }}>
          <p>{text}</p>
          <div className="note-footer">
            <small className="extra-info">{date}</small>
            <div className="note-actions">
              <button className="note-button" onClick={() => setEdit(true)}>
                <MdEdit />
              </button>
              <input
                type={"color"}
                value={colour}
                id={id}
                className="color-label"
                onChange={handleColor}
              />
              {!important ? (
                <button className="note-button" onClick={handleStar}>
                  <IoIosStarOutline />
                </button>
              ) : (
                <button className="note-button" onClick={handleStar}>
                  <IoIosStar style={{ color: "red" }} />
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
        </div>
      )}
    </>
  );
}

export default Note;
