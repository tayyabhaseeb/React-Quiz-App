import React from "react";

export default function StartQuiz(props) {
  return (
    <div className="start-quiz-cont">
      <div className="start-quiz-inner-cont">
        <h1>Quizzical</h1>
        <p>Some discription if needed</p>
        <button onClick={props.handleClick}>Start Quiz</button>
      </div>
    </div>
  );
}
