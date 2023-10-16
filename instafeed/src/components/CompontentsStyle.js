import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  // Componente Botón
  button: {
    backgroundColor: "#000",
    minWidth: 200,
    padding: 10,
    marginTop: 20,
    border: "1px solid #000",
    borderRadius: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#f1f1f1",
    textAlign: "center",
  },
  //   Componente Description
  containerText: {
    width: "90%",
    marginTop: "10px",
  },
  //   Componente Form
  inputs: {
    width: "70%",
    border: "1px solid #aaaaaa",
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  //   Componente Header
  header: {
    borderBottomColor: "#aaaaaa",
    borderBottomWidth: "1px",
    padding: 10,
    width: "100%",
    textAlign: "center",
  },
  //   Componente Photo
  photo: {
    width: "90%",
    height: "200px",
    marginTop: 10,
  },
  //   Componente User
  containerUser: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    marginTop: "10px",
  },
  nameUser: {
    fontSize: "12px",
    fontWeight: 800,
    textAlign: "left",
    marginLeft: "10px",
  },
});

export { style };
