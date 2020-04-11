import React from 'react';

function StartPage(props) {
  return (
    <div>
    {props.startFlag === 0 ?(
      <div id="content" className="container">
        <strong><p>Solve these 7 Riddles and brain teasers to boost your brain power.</p></strong>
        <br />
        <strong><p>Instructions for the quiz:</p></strong>
        <ol>
          <li>Tap on any option to answer the qestion.</li>
          <li>If you answer it right then the option will be highlighted as green and red in case of wrong.</li>
          <li>Wait for 1.5 sec after selecting the option to get to the other qestion.</li>
          <li>Explaination of all the answers will be shown at the end.</li>
        </ol>
        <div id="nextButton" className="btn" onClick={props.onClick}>Start Quiz</div>
      </div>)
      : ''}
      </div>
  );
}

export default StartPage;
