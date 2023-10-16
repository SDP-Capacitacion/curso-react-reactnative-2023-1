import { TextInput } from "react-native";
import { style } from "./CompontentsStyle";

export default function Form() {
  return (
    <>
      <TextInput
        style={style.inputs}
        placeholder="Correo Electrónico"
        placeholderTextColor="#c6c6c6"
      />
      <TextInput
        style={style.inputs}
        placeholder="Contraseña"
        placeholderTextColor="#c6c6c6"
      />
    </>
  );
}
