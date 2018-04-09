import React from "react";

const Card = props => {
  return (
    <div className="Card" onClick={props.clicked}>
      <h2>{props.name}</h2>
      <p>{props.city}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default Card;
