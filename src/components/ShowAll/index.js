import React from "react";
import "./style.css";

//Return to original state

function ShowAll(props) {
  return (
        <button type="submit" onClick={() => props.ShowAll(props.name)} className="btn btn-success">
          Show All Employees
        </button>
  );
}

export default ShowAll;
