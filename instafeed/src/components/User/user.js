import React from "react-native";
import { View, StyleSheet, Text } from "react-native";
import Avatar from "../Avatar/avatar";
import { style } from "./style";

export default function User() {
  return (
    <View style={style.containerUser}>
      <Avatar style={{ width: 30, height: 30, borderRadius: 100 }}></Avatar>
      <Text style={style.nameUser}>nameUser</Text>
    </View>
  );
}
