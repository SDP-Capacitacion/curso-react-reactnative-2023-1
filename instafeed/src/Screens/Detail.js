import React from "react";
import { View } from "react-native";
import Header from "../components/header";
import Photo from "../components/photo";
import User from "../components/user";
import Description from "../components/description";
import { stylesScreen } from "./ScreenStyle";

export default function Feed() {
  return (
    <View style={stylesScreen.layout}>
      <Header />
      <View style={stylesScreen.container}>
        <User />
        <Photo />
        <Description />
      </View>
    </View>
  );
}
