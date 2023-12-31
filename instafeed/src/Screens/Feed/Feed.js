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
      <View style={style.container}>
        <User />
        <Photo />
        <Description numberOfLines={1} />
      </View>
      <View style={style.container}>
        <User />
        <Photo />
        <Description numberOfLines={1} />
      </View>
    </View>
  );
}
