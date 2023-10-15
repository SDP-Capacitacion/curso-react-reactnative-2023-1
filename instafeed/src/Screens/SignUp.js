import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Avatar from "../components/avatar";
import Form from "../components/form";
import ComponentButton from "../components/componentButton";
import { stylesScreen } from "./ScreenStyle";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Avatar style={{ width: 150, height: 150, borderRadius: 100 }} />
      <Form />
      <Text style={styles.linkTo}>
        ¿No tienes cuenta? <Text style={styles.bold}>Registrate</Text>
      </Text>
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
  linkTo: {
    fontSize: "12px",
    textAlign: "right",
    marginTop: "5px",
    width: "70%",
  },
  bold: {
    fontWeight: 800,
  },
});
