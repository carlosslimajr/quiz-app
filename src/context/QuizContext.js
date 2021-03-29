import React, { useState } from "react";
import { getQuizQuestions } from "../utils/Helper";
import useFetch from "../hooks/useFetch";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [TOTAL_QUESTIONS] = useState(10);
  const { loading, error, request } = useFetch();
  const [selected, setSelected] = React.useState(0);
  const [finished, setFinished] = React.useState(false);
  const amount = 15;

  const startTrivia = async () => {
    let difficulty;
    if (selected === 0) {
      difficulty = "easy";
    } else if (selected === 1) {
      difficulty = "medium";
    } else {
      difficulty = "hard";
    }

    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const { json } = await request(url);
    setQuestions(getQuizQuestions(json));
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
  };

  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === amount) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        loading,
        error,
        questions,
        setQuestions,
        userAnswers,
        setUserAnswers,
        score,
        setScore,
        number,
        setNumber,
        gameOver,
        setGameOver,
        TOTAL_QUESTIONS,
        startTrivia,
        nextQuestion,
        setSelected,
        selected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
