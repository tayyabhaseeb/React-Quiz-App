import React from "react";

export default function Quiz(props) {
  return (
    <div className="start-page">
      <div className="start-page-description">
        <h1 className="heading">Quizzical</h1>
        <p className="para">Some description if needed</p>
      </div>
      <div className="start-page-button-container">
        <button className="start-button" onClick={props.startGame}>
          Start quiz
        </button>
      </div>
    </div>
  );
}
