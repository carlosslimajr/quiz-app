function shuffle(array) {
  const shuffled = array.sort(() => Math.random() - 0.5);
  return shuffled;
}

export const getQuizQuestions = (data) => {
  return data.results.map((question) => ({
    ...question,
    answers: shuffle([...question.incorrect_answers, question.correct_answer]),
  }));
};
