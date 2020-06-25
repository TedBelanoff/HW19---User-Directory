import React from "react";
import "./style.css";

// Sort employees by name, alphabetically ascending

function SortNamesA(props) {
  return (
        <button type="submit" onClick={() => props.sortNamesA(props.name)} className="btn btn-success">
          Sort Names Alphabetically Ascending
        </button>
  );
}

export default SortNamesA;
