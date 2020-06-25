import React from "react";
import "./style.css";

// Sort by phone numbers in decending order

function SortPhoneD(props) {
  return (
        <button type="submit" onClick={() => props.sortPhoneD(props.name)} className="btn btn-success">
          Sort Phone Descending
        </button>
  );
}

export default SortPhoneD;
