import React from "react";
import { View, Text } from "react-native";
import Avatar from "../components/avatar";
import Form from "../components/form";
import ComponentButton from "../components/componentButton";
import { stylesScreen } from "./ScreenStyle";

export default function SignUp() {
  return (
    <View style={stylesScreen.container}>
      <Avatar style={{ width: 150, height: 150, borderRadius: 100 }} />
      <Form />
      <Text style={stylesScreen.linkTo}>
        ¿No tienes cuenta? <Text style={stylesScreen.bold}>Registrate</Text>
      </Text>
      <ComponentButton title="Iniciar sesión" />
    </View>
  );
}
