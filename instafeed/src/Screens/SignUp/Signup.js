import React from "react";
import { View, Text } from "react-native";
import Avatar from "../../components/Avatar/avatar";
import Form from "../../components/Form/form";
import Press from "../../components/Press/Press";
import Cta from "../../components/Cta/Cta";
import { style } from "../style";

export default function SignUp() {
  return (
    <View style={style.container}>
      <Avatar
        style={{ width: 150, height: 150, borderRadius: 100, marginBottom: 20 }}
      />
      <Form />
      <Cta textSignIn="¿No tienes cuenta?" action="Regístrate" />
      <Press title="Iniciar sesión" />
    </View>
  );
}
