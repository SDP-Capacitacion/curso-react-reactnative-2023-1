import { StyleSheet } from "react-native";

const stylesScreen = StyleSheet.create({
  // Generales
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
  //   Liks SignIn/SingUp
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

export { stylesScreen };
