import React from "react";
import "./style.css";

// Create title

function Title(props) {
  return <h1 className="title">{props.children}</h1>;
}

export default Title;
