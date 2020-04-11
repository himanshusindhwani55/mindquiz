import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
  let optionClass = '';
  if (props.answer && props.answerType === props.correctAnswer) {
     optionClass = 'correct-answer';
  }
  else if (props.answerType === props.answer && props.answer !== props.correctAnswer) {
    optionClass = 'wrong-answer';
  }
  else {
    optionClass = '';
  }
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className={"radioCustomLabel " + optionClass} htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
