import React from "react";
import "./style.css";

//Restrict employee list to operations personnel

function Operations(props) {
  return (
        <button type="submit" onClick={() => props.Operations(props.name)} className="btn btn-success">
          Show Operations Personnel
        </button>
  );
}

export default Operations;
