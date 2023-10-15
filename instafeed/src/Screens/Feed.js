import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/header";
import Photo from "../components/photo";
import User from "../components/user";
import Description from "../components/description";
import { stylesScreen } from "./ScreenStyle";

export default function Feed() {
  return (
    <View style={styles.layout}>
      <Header />
      <View style={styles.container}>
        <User />
        <Photo />
        <Description numberOfLines={1} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
