import React from 'react';
import "../styles/Card.css";

const Card = ({ image }) => { 
  return (
    <div className="card">
      <img src={image}  />
    </div>
  );
};

export default Card;
