import React from "react-native";
import { Text } from "react-native";
import { style } from "./style";

export default function Description({ numberOfLines }) {
  return (
    <Text style={style.containerText} numberOfLines={numberOfLines}>
      Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos
      de texto. Lorem Ipsum ha sido el texto de relleno estándar de las
      industrias desde el año 1500, cuando un impresor (N. del T. persona que se
      dedica a la imprenta) desconocido usó una galería de textos y los mezcló
      de tal manera que logró hacer un libro de textos especimen. No sólo
      sobrevivió 500 años, sino que tambien ingresó como texto de relleno en
      documentos electrónicos, quedando esencialmente igual al original.
    </Text>
  );
}
