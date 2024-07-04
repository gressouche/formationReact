import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AfficheUnObjectif } from "./AfficheUnObjectif";

// Affichage de tous les objectifs dans une liste - un seul composant pour tous les objectifs
/* export const AfficheObjectifs = ({lesObjectifs}) => {
    return (
        <View>
        <Text style={styles.caractere}>
            {
            console.log(lesObjectifs)}
            {lesObjectifs.map((goal) => (
            <Text>
                {goal}
                {"\n"}
            </Text>
            ))}
        </Text>
    
    
        <StatusBar style="auto" />
        </View>
    );
}; */

// Affichage de chaque objectis dans un composant séparé
export const AfficheObjectifs = ({lesObjectifs}) => {
    return (
        <View>
        <Text style={styles.caractere}>
            Affichage de chaque ojectif dans un composant séparé
            {"\n"}
            {lesObjectifs.map((goal) => (
                <AfficheUnObjectif goal={goal} />
            ))}
        </Text>
    
    
        <StatusBar style="auto" />
        </View>
    );
};
const styles = StyleSheet.create({
    
    caractere: {
      color: "white",
      fontSize: 15,
      fontWeight: "bold",
    },
});