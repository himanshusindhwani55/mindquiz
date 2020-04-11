import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  return (
    <div className="question-container">
    {props.content?(<h2 className="question">{props.content}</h2>): ''}
    {props.contentImg?(<img className="question-img" src={props.contentImg} />): ''}
    </div>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired,
  contentImg: PropTypes.string.isRequired
};

export default Question;
