import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { style } from "./style";

export default function Press({ title }) {
  return (
    <TouchableOpacity style={style.button}>
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  );
}
