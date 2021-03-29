import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { elevate } from "react-native-elevate";

const styles = StyleSheet.create({
  container: {
    height: 43,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 14,
    paddingHorizontal: 13,
    borderRadius: 5,
    backgroundColor: "black",
  },
  label: {
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    textTransform: "capitalize",
    fontWeight: "500"
  },
  answer: {
    fontSize: 16,
    color: "#016A9A",
    marginRight: 10,
  },
});

const Button = ({ onPress, answer, disabled, correct }) => {
  return (
    <RectButton
      {...{ onPress }}
      style={[
        styles.container,
        elevate(5),
        {
          backgroundColor: !disabled ? "#fff" : "#ccc",
          backgroundColor: correct ? "green" : "#fff"
        },
      ]}
    >
      <Text style={[styles.label, { color: correct ? "white" : "#006996" }]}>
        {answer}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "defatul" };

export default Button;
