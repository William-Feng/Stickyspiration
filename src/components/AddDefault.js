import React from "react";
import { FaPlus } from "react-icons/fa";
import "./Note.css";

function AddDefault({ onClick }) {
  return (
    <div className="plus note" onClick={onClick}>
      <FaPlus size={"5em"} />
    </div>
  );
}

export default AddDefault;
