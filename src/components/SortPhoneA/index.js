import React from "react";
import "./style.css";

// Sort by phone numbers in ascending order

function SortPhoneA(props) {
  return (
        <button type="submit" onClick={() => props.sortPhoneA(props.name)} className="btn btn-success">
          Sort Phone Ascending
        </button>
  );
}

export default SortPhoneA;
