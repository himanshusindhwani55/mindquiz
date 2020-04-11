import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        <p>You answered <strong>{props.quizResult}/{props.totalQuestions}</strong> questions correctly!</p>
        <p>Share your score and challenge your friends! &nbsp;
        <a href={'https://wa.me/?text=Hey%2C+I+got+'+props.quizResult+'/'+props.totalQuestions+' questions+right+in+this+mind+training+session.+Are+you+ready+to+solve+some+tricky+puzzles+to+flex+your+brain+muscles%3F+Check+out+the+link+%3A+https%3A%2F%2Fbit.ly%2F3dEvpTR'} target = '_blank'>
        <i class='fa fa fa-whatsapp'></i></a> &nbsp;
        <a target='_blank' href={'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.fitsarmy.com%2Fmindexercise%2F&quote=Hey%2C%20I%20got%20'+props.quizResult+'%2F'+props.totalQuestions+'%20questions%20right%20in%20this%20mind%20training%20session.%20Are%20you%20ready%20to%20solve%20some%20tricky%20puzzles%20to%20flex%20your%20brain%20muscles%3F%20Check%20out%20the%20link%20%3A%20https%3A%2F%2Fbit.ly%2F3dEvpTR%0A'} target = '_blank' class='fb-xfbml-parse-ignore'><i class='fa fa-facebook'></i></a></p>
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.number.isRequired
};

export default Result;
