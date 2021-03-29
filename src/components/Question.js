import React from "react";
import { View, Text } from "react-native";
import { unicodeToChar } from "../utils/Helper";

const Question = ({ question }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        paddingTop: 30,
        paddingBottom: 30,
        borderRadius: 20,
        backgroundColor: "#FFA384",
      }}
    >
      <Text
        style={{
          color: "#fff",
          textAlign: "center",
          fontSize: 20,
        }}
      >
        {question}
      </Text>
    </View>
  );
};

export default Question;
