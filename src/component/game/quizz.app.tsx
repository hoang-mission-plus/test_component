import React, { Fragment, useState } from "react";
import { dataQuizz } from "./data";
import {
  Button,
  Card,
  RadioGroup,
  Radio,
} from "@rt-commercial-engineering/rt-design-system";
import "@rt-commercial-engineering/rt-design-system/src/assets/scss/core.scss";
const Quizz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [value, setValue] = useState(0);

  const handleAnswerOptionClick = (isCorrect: any) => {
    setValue(isCorrect);
    dataQuizz[currentQuestion].answerOptions.forEach((x) => {
      if (x.isCorrect === true && isCorrect === x.value) {
        setScore(score + 1);
      }
    });
  };
  const clickButtonNext = () => {
    setValue(0);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < dataQuizz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  // const clickButton = () => {
  //   window.location.reload();
  // };
  return (
    <Fragment>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {dataQuizz.length}
          {/* <Button intent="primary" text="again" onClick={() => clickButton()} /> */}
        </div>
      ) : (
        <Card elevation={3}>
          <div className="question-section">
            <div className="question-count">
              <h1 className="title_question">
                Question {currentQuestion + 1}/{dataQuizz.length}
              </h1>
            </div>
            <div className="question-text">
              <span>
                <b>Câu: {dataQuizz[currentQuestion].id}.</b>
              </span>
              <span>{dataQuizz[currentQuestion].questionText}</span>
            </div>
          </div>
          <div className="answer-section">
            {dataQuizz[currentQuestion].answerOptions.map(
              (answerOption: any) => (
                <RadioGroup
                  key={answerOption.value}
                  onChange={() => handleAnswerOptionClick(answerOption.value)}
                  selectedValue={value}
                >
                  <Radio value={answerOption.value} className="choose_answer">
                    <span
                      className="title_answer"
                      style={{ marginRight: "24px" }}
                    >
                      {answerOption.title}
                    </span>
                    <span className="text_answer">
                      {answerOption.answerText}
                    </span>
                  </Radio>
                </RadioGroup>
              )
            )}
          </div>
          <Button
            intent="primary"
            text="next"
            onClick={() => clickButtonNext()}
          />
        </Card>
      )}
    </Fragment>
  );
};

export default Quizz;
