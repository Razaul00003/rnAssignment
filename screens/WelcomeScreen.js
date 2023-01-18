import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome to Prayers Connect</Text>
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate("SecondScreen")}
          title="Go to Second Screen"
          color="#34a482"
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  textContainer: {
    marginBottom: 20,
  },
  text: {
    color: "#34a482",
    fontWeight: "bold",
    fontSize: 20,
  },
});
