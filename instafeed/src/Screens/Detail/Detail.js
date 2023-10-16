import React from "react";
import { View } from "react-native";
import Header from "../../components/Header/header";
import Photo from "../../components/Photo/photo";
import User from "../../components/User/user";
import Description from "../../components/Description/description";
import { style } from "../style";

export default function Feed() {
  return (
    <View style={style.layout}>
      <Header />
      <View>
        <User />
        <Photo />
        <Description />
      </View>
    </View>
  );
}
