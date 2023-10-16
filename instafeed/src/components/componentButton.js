import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { style } from "./CompontentsStyle";

export default function ComponentButton({ title }) {
  return (
    <TouchableOpacity style={style.button}>
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  );
}
