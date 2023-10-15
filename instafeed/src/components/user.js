import React from "react-native";
import { View, StyleSheet, Text } from "react-native";
import Avatar from "./avatar";

export default function User() {
  return (
    <View style={styles.containerUser}>
      <Avatar style={{ width: 30, height: 30, borderRadius: 100 }}></Avatar>
      <Text style={styles.header}>nameUser</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerUser: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    marginTop: "10px",
  },
  header: {
    fontSize: "12px",
    fontWeight: 800,
    textAlign: "left",
    marginLeft: "10px",
  },
});
