import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Second screen</Text>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    color: "#34a482",
    fontWeight: "bold",
    fontSize: 20,
  },
});
