import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";

import "./App.css";

function App() {
  const [question2yes, setQuestion2yes] = useState(null);
  const [question2no, setQuestion2no] = useState(null);
  const [question3yes, setQuestion3yes] = useState(null);
  const [question3no, setQuestion3no] = useState(null);
  const [joke, setJoke] = useState(null);
  const [jokeAnswer, setJokeAnswer] = useState(null);
  const [jokeFeedbackGood, setJokeFeedbackGood] = useState(null);
  const [jokeFeedbackBad, setJokeFeedbackBad] = useState(null);
  const [finalQuestion, setFinalQuestion] = useState(null);
  const [finalQuestionFast, setFinalQuestionFast] = useState(null);

  const setAllStateToNull = () => {
    setQuestion2yes(null);
    setQuestion2no(null);
    setQuestion3yes(null);
    setQuestion3no(null);
    setJoke(null);
    setJokeAnswer(null);
    setJokeFeedbackGood(null);
    setJokeFeedbackBad(null);
    setFinalQuestion(null);
    setFinalQuestionFast(null);
  };

  return (
    <>
      <Col className="col">
        <h6 className="question-header">Hi Ana, how was your day?</h6>
        <Button
          variant="success"
          className="answer-header"
          onClick={() => {
            setAllStateToNull();
            setQuestion2yes(true);
          }}
        >
          Good
        </Button>
        <Button
          variant="danger"
          className="answer-header"
          onClick={() => {
            setAllStateToNull();
            setQuestion2no(true);
          }}
        >
          So so
        </Button>
        {question2yes && (
          <>
            <h6 className="question">
              Awesome, I was hoping for that! I wanted to ask you something...
            </h6>
            <p>Pick your answer here: </p>
            <Button
              variant="warning"
              className="answer"
              onClick={() => {
                setAllStateToNull();
                setQuestion3yes(true);
              }}
            >
              Okay
            </Button>
            <Button
              variant="warning"
              className="answer"
              onClick={() => {
                setAllStateToNull();
                setQuestion3no(true);
              }}
            >
              I don't care
            </Button>
          </>
        )}
        {question2no && (
          <>
            <h6 className="question">Lets fix that!</h6>
            <p>Pick your answer here: </p>
            <Button
              variant="warning"
              className="answer"
              onClick={() => {
                setAllStateToNull();
                setJoke(true);
              }}
            >
              Okay
            </Button>
            <Button
              variant="warning"
              className="answer"
              onClick={() => {
                setAllStateToNull();
                setFinalQuestion(true);
              }}
            >
              Please dont!
            </Button>
          </>
        )}
        {joke && (
          <>
            <h6 className="question">
              How do you call person who can wright with both left and right
              hand?
            </h6>
            <Button
              variant="warning"
              className="answer"
              onClick={() => {
                setAllStateToNull();
                setJokeAnswer(true);
              }}
            >
              I dont know
            </Button>
          </>
        )}
        {jokeAnswer && (
          <>
            <h6 className="question">Ljesnjak xD</h6>
            <Button
              variant="warning"
              className="answer"
              onClick={() => {
                setAllStateToNull();
                setJokeFeedbackGood(true);
              }}
            >
              Hahahahha
            </Button>
            <Button
              variant="warning"
              className="answer"
              onClick={() => {
                setAllStateToNull();
                setJokeFeedbackBad(true);
              }}
            >
              Thats lame
            </Button>
          </>
        )}
        {jokeFeedbackGood && (
          <>
            <h6 className="question">I know, right!</h6>
            <Button
              variant="warning"
              className="answer"
              onClick={() => {
                setAllStateToNull();
                setFinalQuestion(true);
              }}
            >
              What do you want?
            </Button>
          </>
        )}
        {jokeFeedbackBad && (
          <>
            <h6 className="question">
              You should probably know that I'm a queen of lame jokes.
            </h6>
            <Button
              variant="warning"
              className="answer"
              onClick={() => {
                setAllStateToNull();
                setFinalQuestion(true);
              }}
            >
              Thats still lame
            </Button>
          </>
        )}
        {question3yes && (
          <>
            <h6 className="question">
              Do you like airplanes? (asking for a friend...)
            </h6>
            <Button
              variant="warning"
              className="answer"
              onClick={() => {
                setAllStateToNull();
                setFinalQuestionFast(true);
              }}
            >
              Yes
            </Button>
            <Button
              variant="warning"
              className="answer"
              onClick={() => {
                setAllStateToNull();
                setQuestion3no(true);
              }}
            >
              No
            </Button>
          </>
        )}

        {finalQuestionFast && (
          <>
            <h6 className="question">
              What do you think about going to museum next week?
            </h6>
            <Button
              variant="warning"
              className="answer"
              onClick={(e) => {
                window.location.href =
                  "https://media3.giphy.com/media/nXxOjZrbnbRxS/giphy.gif";
              }}
            >
              Take me there!
            </Button>
          </>
        )}

        {finalQuestion && (
          <>
            <h6 className="question">Do you wanna go out with me?</h6>
            <Button
              variant="warning"
              className="answer"
              onClick={(e) => {
                window.location.href =
                  "https://media3.giphy.com/media/nXxOjZrbnbRxS/giphy.gif";
              }}
            >
              Yes
            </Button>
          </>
        )}
        {question3no && (
          <>
            <h6 className="question">You are breaking my heart :(</h6>
            <Button
              variant="warning"
              className="answer"
              onClick={() => {
                setAllStateToNull();
                setFinalQuestion(true);
              }}
            >
              Ko te jebe
            </Button>
            <Button
              variant="warning"
              className="answer"
              onClick={() => {
                setAllStateToNull();
                setFinalQuestion(true);
              }}
            >
              I've changed my mind
            </Button>
          </>
        )}
      </Col>
    </>
  );
}

export default App;
