import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { GlobalContext } from "../context/QuizContext";

const FinalPage = ({ navigation }) => {
  const global = React.useContext(GlobalContext);
  const { score, setGameOver } = global;

  return (
    <View style={[styles.container]}>
      <View>
        <Text style={[styles.title]}>You got</Text>
        <Text style={[styles.score]}>{score}</Text>
        <Text style={[styles.title]}>questions</Text>
      </View>

      <View style={[styles.button]}>
        <Button
          type="clear"
          onPress={() => (setGameOver(false), navigation.navigate("Home"))}
          title="Reset"
        />
      </View>
    </View>
  );
};

export default FinalPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#74BDCB",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
    textAlign: "center",
  },
  score: {
    fontSize: 50,
    color: "green",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  button: {
    marginTop: 30,
  },
});
