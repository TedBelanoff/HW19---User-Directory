import React from "react";
import "./style.css";

// Sort employees by occupation, alphabetically descending

function SortOccupationsD(props) {
  return (
        <button type="submit" onClick={() => props.sortOccupationsD(props.name)} className="btn btn-success">
          Sort Occupations Alphabetically Descending
        </button>
  );
}

export default SortOccupationsD;
