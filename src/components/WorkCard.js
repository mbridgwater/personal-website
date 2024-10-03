// WorkCard.js
import React, { useState } from 'react';
import './WorkCard.css';  // Importing the CSS file for styles

function WorkCard({ id, image, name, position, role, description, langsTools, time, colorClass }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    /*
        <div className="card" onClick={divClick}> 
      <div className="image" style={{ backgroundImage: `url(${image})`}}></div>
      <h1> {name} </h1>
      <h2> {position} </h2>
      <p><b>Project goal: </b>{description} </p>
      <p><b>My impact: </b>{role} </p>
    </div>
    */
    <div className={`flip-card ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className={"flip-card-front " + colorClass}>
          <h3 className="subheader">{name}</h3>
          <div className="flex-main-text"> {description}</div>
          <img className="flex-box-image" src={image} alt="UCLA MII Logo" />
        </div>
        <div className="flip-card-back">
          <h3>More Details</h3>
          <p>Here, you can put additional information or context about the project that the user might be interested in.</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;