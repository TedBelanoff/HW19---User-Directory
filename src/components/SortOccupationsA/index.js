import React from "react";
import "./style.css";

// Sort employees by occupation, alphabetically ascending

function SortOccupationsA(props) {
  return (
        <button type="submit" onClick={() => props.sortOccupationsA(props.name)} className="btn btn-success">
          Sort Occupations Alphabetically Ascending
        </button>
  );
}

export default SortOccupationsA;
