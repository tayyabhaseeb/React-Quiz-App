import React, { useState } from "react";

export default function Question(props) {
  return (
    <div className="question-comp">
      <h3>{props.obj.question}</h3>
      <div className="options-answers">
        <button
          onClick={(event) =>
            props.answerClick(event, props.obj.correct_answer)
          }
          value={props.obj.incorrect_answers[0]}
          className="answerBtn"
        >
          {props.obj.incorrect_answers[0]}
        </button>
        <button
          onClick={(event) =>
            props.answerClick(event, props.obj.correct_answer)
          }
          value={props.obj.incorrect_answers[1]}
          className="answerBtn"
        >
          {props.obj.incorrect_answers[1]}
        </button>
        <button
          onClick={(event) =>
            props.answerClick(event, props.obj.correct_answer)
          }
          value={props.obj.incorrect_answers[2]}
          className="answerBtn"
        >
          {props.obj.incorrect_answers[2]}
        </button>
        <button
          onClick={(event) =>
            props.answerClick(event, props.obj.correct_answer)
          }
          value={props.obj.incorrect_answers[3]}
          className="answerBtn"
        >
          {props.obj.incorrect_answers[3]}
        </button>
      </div>
    </div>
  );
}
