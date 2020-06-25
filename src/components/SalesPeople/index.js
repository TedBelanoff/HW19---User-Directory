import React from "react";
import "./style.css";

//Restrict employee list to Salespeople

function SalesPeople(props) {
  return (
        <button type="submit" onClick={() => props.SalesPeople(props.name)} className="btn btn-success">
          Show Salespeople
        </button>
  );
}

export default SalesPeople;
