import React, { useState } from "react";

import dataObj from "../data";
import Question from "./Question";

export default function Quiz(props) {
  const [data, setData] = useState(dataObj);
  const [score, setScore] = useState(0);
  const [checkAns, SetCheckAns] = useState(false);

  function answerClick(event, correctAns) {
    if (event.target.value === correctAns) {
      setScore((prevScore) => prevScore + 1);
    }

    event.target.style.backgroundColor = "orange";
  }
  function checkBtn() {
    SetCheckAns(true);

    const answerButtons = document.querySelectorAll(".answerBtn");
    const correctAnswers = data.results.map((ele) => ele.correct_answer);

    answerButtons.forEach((button) => {
      const isCorrect = correctAnswers.includes(button.value);
      button.style.backgroundColor = isCorrect ? "lightgreen" : "pink";
    });
  }

  function playAgain() {
    SetCheckAns(false);
    setScore(0);
    props.restart();
  }

  const questions = data.results.map((obj) => {
    return <Question obj={obj} answerClick={answerClick} />;
  });

  return (
    <div className="ques-cont-parent">
      <div className="ques-cont">
        {questions}
        <div className="btn-cont">
          {checkAns === false ? (
            <button className="check-ans-btn" onClick={checkBtn}>
              Check Answers
            </button>
          ) : (
            <div className="score-cont">
              <p>You scored {score} / 5 correct answers</p>
              <button className="play-ans-btn" onClick={playAgain}>
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
