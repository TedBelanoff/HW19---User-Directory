import React from "react";
import "./style.css";

// Sort employees by name, alphabetically descending

function SortNamesD(props) {
  return (
        <button type="submit" onClick={() => props.sortNamesD(props.name)} className="btn btn-success">
          Sort Names Alphabetically Descending
        </button>
  );
}

export default SortNamesD;
