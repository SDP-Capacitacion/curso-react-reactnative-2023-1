import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/header";
import Photo from "../components/photo";
import User from "../components/user";
import { stylesScreen } from "./ScreenStyle";

export default function Feed() {
  return (
    <View style={styles.container}>
      <Header />
      <User />
      <Photo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
