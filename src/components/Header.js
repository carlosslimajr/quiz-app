import React from "react";
import { View, Text } from "react-native";

const Header = ({ number, questions }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#FFA384",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          marginRight: 20,
          fontWeight: "bold",
          color: "white",
        }}
      >
        Questions
      </Text>
      {questions.length > 0 ? (
        <Text
          style={{
            fontSize: 16,
            color: "#006996",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {number + 1}/{questions.length}
        </Text>
      ) : null}
    </View>
  );
};

export default Header;
