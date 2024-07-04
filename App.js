import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import { Button } from "react-native";
import React, { useState } from "react";
import { Alert } from "react-native";
import { AfficheObjectifs } from "./components/AfficheObjectifs";
import { sampleGoals } from "./data/donnees";

export default function App() {
  const [txtGoal, setGoal] = useState("");

  const [goals, setGoals] = useState(sampleGoals);

  const suppGoal = (goal) => {
    setGoals(sampleGoals.splice(sampleGoals.indexOf(goal), 1));
  };

  
  return (
    <View style={styles.container}>
      {console.log(sampleGoals)}
      <AfficheObjectifs lesObjectifs={sampleGoals} />

      <TextInput
        style={styles.entree}
        placeholder={"Ajouter un objectif"}
        value={txtGoal}
        onChangeText={(text) => setGoal(text)}
      />

      <Button
        onPress={() => {
          Alert.alert(txtGoal + " a été ajouté à la liste des objectifs");
          sampleGoals.push(txtGoal);
          setGoal("");
        }}
        title="Add"
        color="#841584"
        paddingTop="20"
        accessibilityLabel="Learn more about this purple button"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: 10,
  },
  entree: {
    backgroundColor: "white",
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  saisie: {
    flex: 2,
    flexDirection: "row",
  },
});
