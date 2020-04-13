import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import StartPage from './components/StartPage';
import GoogleAds from './components/GoogleAds';
import logo from './svg/logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      questionImg: '',
      answerOptions: [],
      answer: '',
      correctAnswer: '',
      answersCount: 0,
      result: 0,
      answerClass: '',
      startFlag: 0
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleStart(event) {
    if (this.state.startFlag === 0) {
      const shuffledAnswerOptions = quizQuestions.map(question =>
        this.shuffleArray(question.answers)
      );
      this.setState({
        question: quizQuestions[0].question,
        questionImg: quizQuestions[0].questionImg,
        correctAnswer: quizQuestions[0].correctAnswer,
        answerOptions: shuffledAnswerOptions[0],
        startFlag: 1
      });
    }
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 1000);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 1000);
    }
  }

  setUserAnswer(answer) {
    if (answer === this.state.correctAnswer) {
      const newCount = this.state.answersCount + 1;
      this.setState((state, props) => ({
        answersCount: newCount,
      }));
    }
    this.setState((state, props) => ({
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      questionImg: quizQuestions[counter].questionImg,
      answerOptions: quizQuestions[counter].answers,
      correctAnswer: quizQuestions[counter].correctAnswer,
      answer: '',
      answerClass: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    this.setState({ result: this.state.answersCount });
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        correctAnswer={this.state.correctAnswer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionImg={this.state.questionImg}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        answerClass={this.state.answerClass}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} totalQuestions={quizQuestions.length} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Mental Fitness Test</h2>
        </div>
        <GoogleAds slot="3810717223" style={{display:'inline-block',width:728,height:90}} />
        <StartPage onClick={this.handleStart} startFlag={this.state.startFlag}/>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
        <GoogleAds slot="3363994662"  responsive="true" adformat="auto"/>
      </div>
    );
  }
}

export default App;
