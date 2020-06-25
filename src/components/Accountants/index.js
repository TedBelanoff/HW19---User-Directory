import React from "react";
import "./style.css";

//Restrict employee list to accountants

function Accountants(props) {
  return (
        <button type="submit" onClick={() => props.Accountants(props.name)} className="btn btn-success">
          Show Accountants
        </button>
  );
}

export default Accountants;
