import React from "react-native";
import { Text } from "react-native";
import { style } from "./style";

export default function Cta({ textSignIn, action }) {
  return (
    <Text style={style.linkTo}>
      {textSignIn} <Text style={style.bold}>{action}</Text>
    </Text>
  );
}
