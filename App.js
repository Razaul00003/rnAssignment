import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import SecondScreen from "./screens/SecondScreen";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#34a482",
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Home"
            component={WelcomeScreen}
            options={{
              title: "Welcome Page",
            }}
          />
          <Stack.Screen
            name="SecondScreen"
            component={SecondScreen}
            options={{ title: "Second Screen" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
