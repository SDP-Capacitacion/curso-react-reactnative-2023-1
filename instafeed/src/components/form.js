import { StyleSheet, TextInput } from "react-native";

export default function Form() {
  return (
    <>
      <TextInput
        style={styles.inputs}
        placeholder="Correo Electrónico"
        placeholderTextColor="#c6c6c6"
      />
      <TextInput
        style={styles.inputs}
        placeholder="Contraseña"
        placeholderTextColor="#c6c6c6"
      />
    </>
  );
}

const styles = StyleSheet.create({
  inputs: {
    width: "70%",
    border: "1px solid #aaaaaa",
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
});
