import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ComponentButton({ title }) {
  return (
    <TouchableOpacity style={styleButton.button}>
      <Text style={styleButton.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styleButton = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    minWidth: 200,
    padding: 10,
    marginTop: 20,
    border: "1px solid #000",
    borderRadius: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#f1f1f1",
    textAlign: "center",
  },
});
