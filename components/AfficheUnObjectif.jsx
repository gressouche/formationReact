import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export const AfficheUnObjectif = ({ goal }) => {
  return (
    <View>
      <Text>{goal}{"\n"}</Text>

      <StatusBar style="auto" />
    </View>
  );
};
