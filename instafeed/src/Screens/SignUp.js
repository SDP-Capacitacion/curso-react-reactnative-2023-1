import React from "react";
import { StyleSheet, View } from "react-native";
import Avatar from "../components/avatar";
import Form from "../components/form";
import ComponentButton from "../components/componentButton";
import { stylesScreen } from "./ScreenStyle";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Avatar style={{ width: 150, height: 150, borderRadius: 100 }} />
      <Form />
      <ComponentButton title="Iniciar sesión" />
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
