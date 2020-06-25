import React from "react";
import "./style.css";

// Create worker card (borrowed from in-class activity)

function WorkerCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Phone:</strong> {props.phone}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeWorker(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default WorkerCard;
