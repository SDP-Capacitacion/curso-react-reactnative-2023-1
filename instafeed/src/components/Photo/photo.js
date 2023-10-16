import { Image } from "react-native";
import { style } from "./style";

export default function Photo() {
  return (
    <Image
      style={style.photo}
      source="https://picsum.photos/seed/696/3000/2000"
    />
  );
}
