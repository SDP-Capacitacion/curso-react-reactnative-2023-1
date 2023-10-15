import React from "react-native";
import { StyleSheet, Text } from "react-native";

export default function User() {
  return <Text style={styles.header}>nameUser</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: "12px",
    fontWeight: 800,
    marginTop: "10px",
    textAlign: "left",
    width: "90%",
  },
});
