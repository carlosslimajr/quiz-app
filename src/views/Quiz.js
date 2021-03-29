import React, { useEffect, useRef, Fragment } from "react";
import { Text, View } from "react-native";
import Question from "../components/Question";
import Answers from "../components/Answers";
import Header from "../components/Header";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { GlobalContext } from "../context/QuizContext";

const Quiz = ({ navigation }) => {
  const global = React.useContext(GlobalContext);
  const {
    questions,
    loading,
    score,
    startTrivia,
    number,
    userAnswers,
    error,
    gameOver,
  } = global;
  React.useEffect(() => {
    if (gameOver) {
      navigation.navigate("FinalPage");
    }
  }, [gameOver]);

  useEffect(() => {
    startTrivia();
  }, []);

  return (
    <Fragment>
      <Header number={number} questions={questions} />
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          position: "relative",
          padding: 20,
          backgroundColor: "#74BDCB",
        }}
      >
        <View style={{ flex: 1 }}>
          {!loading ? (
            <Fragment>
              <View style={{ marginVertical: 20 }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#006996",
                  }}
                >
                  Score {score}
                </Text>
              </View>
              {questions.length > 0 ? (
                <>
                  <Question
                    questionNr={number + 1}
                    question={questions[number].question}
                  />
                  <Answers
                    answers={questions[number].answers}
                    {...{ questions, number }}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                  />
                </>
              ) : null}
            </Fragment>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Loading . . .</Text>
            </View>
          )}
        </View>
        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <Button
            icon={<Icon name="stop" size={45} color="white" />}
            type="clear"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
        {error && <Text>Something got wrong, try again later</Text>}
      </View>
    </Fragment>
  );
};

export default Quiz;
