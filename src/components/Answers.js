import React, { Fragment } from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { GlobalContext } from "../context/QuizContext";

const Answers = ({ answers, userAnswer, questions, number }) => {
  const global = React.useContext(GlobalContext);
  const { gameOver, setScore, nextQuestion, setUserAnswers, score } = global;
  const setAnswer = React.useRef(null);
  const [acertou, setAcertou] = React.useState(false);

  const checkAnswer = () => {
    if (!gameOver) {
      // User's answer
      const answer = setAnswer.current;

      // Check answer against correct a nswer
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setAcertou(true);
      }

      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);

      //Save answer in teh array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
      setTimeout(() => {
        setAcertou(false);
        nextQuestion();
      }, 1000);
    }
  };

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 14,
        paddingHorizontal: 24.5,
        marginTop: 40,
      }}
    >
      {answers.length > 0 ? (
        <Fragment>
          {answers.map((answer, key) => (
            <Fragment key={answer}>
              <Button
                variant="default"
                correct={userAnswer?.correctAnswer == answer}
                {...{ key, answer }}
                disabled={userAnswer ? true : false}
                onPress={() => {
                  setAnswer.current = answer;
                  checkAnswer();
                }}
              />
            </Fragment>
          ))}
        </Fragment>
      ) : null}
    </View>
  );
};

export default Answers;
