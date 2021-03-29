import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonGroup, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { GlobalContext } from "../context/QuizContext";

const MainPage = ({ navigation }) => {
  const buttons = ["easy", "medium", "hard"];
  const global = React.useContext(GlobalContext);
  const { selected, setSelected } = global;

  return (
    <View style={[styles.container]}>
      <View style={{ marginBottom: "40%", alignItems: "center" }}>
        <Text style={[styles.title]}>Quiz Game</Text>
      </View>

      <View style={[styles.button]}>
        <Button
          icon={<Icon name="play" size={60} color="white" />}
          type="clear"
          onPress={() => navigation.navigate("Quiz")}
        />
      </View>
      <Text style={[styles.subTitle]}>
        Select the dificculty and press the button to start.
      </Text>
      <ButtonGroup
        onPress={(event) => setSelected(event)}
        selectedIndex={selected}
        buttons={buttons}
        containerStyle={{ height: 50, width: 200, borderRadius: 10 }}
      />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#74BDCB",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    marginBottom: "25%",
  },
  subTitle: {
    width: 200,
    textAlign: "center",
    marginBottom: 15,
    color: "white",
  },
});
