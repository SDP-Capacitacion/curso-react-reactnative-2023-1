import React from "react-native";
import { StyleSheet, Text } from "react-native";

export default function Header() {
  return <Text style={styles.header}>Instafeed</Text>;
}

const styles = StyleSheet.create({
  header: {
    borderBottomColor: "#aaaaaa",
    borderBottomWidth: "1px",
    padding: 10,
    width: "100%",
    textAlign: "center",
  },
});
