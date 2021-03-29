import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { GlobalStorage } from "./src/context/QuizContext";
import MainPage from "./src/views/MainPage";
import FinalPage from "./src/views/FinalPage";
import Quiz from "./src/views/Quiz";

const Stack = createStackNavigator();

export default function App() {
  return (
    <GlobalStorage>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MainPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FinalPage"
            component={FinalPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalStorage>
  );
}
