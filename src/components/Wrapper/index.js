import React from "react";
import "./style.css";

// Create wrapper to hold components

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
