import React from "react";
import { View, Text } from "react-native";
import Avatar from "../components/avatar";
import Form from "../components/form";
import ComponentButton from "../components/componentButton";
import { stylesScreen } from "./ScreenStyle";

export default function SignIn() {
  return (
    <View style={stylesScreen.container}>
      <Avatar style={{ width: 150, height: 150, borderRadius: 100 }} />
      <Form />
      <Text style={stylesScreen.linkTo}>
        ¿Ya tienes cuenta? <Text style={stylesScreen.bold}>Inicia sesión</Text>
      </Text>
      <ComponentButton title="Regístrate" />
    </View>
  );
}
