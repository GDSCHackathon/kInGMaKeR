import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import leftButton from "../../assets/left.svg";
import rightButton from "../../assets/right.svg";

const questions = [
  {
    title: "이름이 뭔가요?",
    placeholder: "이름을 입력해주세요",
  },
  {
    title: "사는곳이 어디에요?",
    placeholder: "사는곳을 입력해주세요",
  },
  {
    title: "좋아하는 음식이 뭔가요?",
    placeholder: "좋아하는 음식을 입력해주세요",
  },
  {
    title: "취미가 뭔가요?",
    placeholder: "취미를 입력해주세요",
  },
];

const START_INDEX = 0;
const END_INDEX = 3;

function QuestionPage() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const onClickNext = () => {
    if (questionIndex < questions.length) {
      setQuestionIndex((questionIndex) => questionIndex + 1);
    }
  };

  const onClickPrev = () => {
    if (questionIndex > 0) {
      setQuestionIndex((questionIndex) => questionIndex - 1);
    }
  };

  return (
    <div className="question-container">
      <div className="button button__left" onClick={onClickNext}>
        {questionIndex < END_INDEX ? (
          <img src={rightButton} alt="다음" />
        ) : null}
      </div>
      <div>
        {questionIndex < END_INDEX ? (
          <Question
            title={questions[questionIndex].title}
            placeholder={questions[questionIndex].placeholder}
            index={questionIndex}
          />
        ) : (
          <ResultButton />
        )}
      </div>
      <div className="button button__right" onClick={onClickPrev}>
        {questionIndex > START_INDEX ? (
          <img src={leftButton} alt="이전" />
        ) : null}
      </div>
    </div>
  );
}

function Question({ title, placeholder, index }) {
  const [answer, setAnswer] = useState(placeholder);

  const onChangeAnswer = ({ target }) => {
    setAnswer(() => target.value);
  };

  useEffect(() => {
    setAnswer(() => placeholder);
  }, [placeholder]);

  return (
    <>
      <input
        className="answer__input"
        value={answer}
        onChange={onChangeAnswer}
      />
      <p className="answer__title">
        {index + 1}. {title}
      </p>
    </>
  );
}

function ResultButton() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/result");
  };

  return (
    <input
      className="button__result"
      defaultValue="결과 확인하기"
      onDoubleClick={onClick}
    ></input>
  );
}

export default QuestionPage;
