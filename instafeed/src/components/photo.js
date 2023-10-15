import { StyleSheet, Image } from "react-native";

export default function Photo() {
  return (
    <Image
      style={styles.photo}
      source="https://picsum.photos/seed/696/3000/2000"
    />
  );
}

const styles = StyleSheet.create({
  photo: {
    width: "90%",
    height: "200px",
    marginTop: 10,
  },
});
