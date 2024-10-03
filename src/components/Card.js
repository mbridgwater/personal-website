import React from 'react'

function Card({id, image, name, position, role, description}) {
  const divClick = () => {  // incase ever need to add on click feature
    console.log("you just clicked");
  };
  return (
    <div className="card" onClick={divClick}> 
      <div className="image" style={{ backgroundImage: `url(${image})`}}></div>
      <h1> {name} </h1>
      <h2> {position} </h2>
      <p><b>Project goal: </b>{description} </p>
      <p><b>My impact: </b>{role} </p>
    </div>
  )
}
// Add an onClick that on click flips the card and describes more

export default Card