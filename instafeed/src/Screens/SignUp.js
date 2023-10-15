import React from "react";
import { Text, View } from "react-native";
import Avatar from "../components/avatar";
import { stylesScreen } from "./ScreenStyle";

export default function SignUp({ style }) {
  return (
    <View>
      <Avatar style={{ width: 100, height: 100, borderRadius: 100 }} />
    </View>
  );
}
