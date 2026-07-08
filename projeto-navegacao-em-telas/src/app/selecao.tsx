import { useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function Selecao() {

  const router = useRouter();

  const brasil = require("../../assets/images/brasil.png");

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        🇧🇷 Seleção Brasileira
      </Text>

      <Image
        source={brasil}
        style={styles.imagem}
      />

      <Text style={styles.texto}>
        A Seleção Brasileira é a única presente em todas as Copas do Mundo.
      </Text>

      <Text style={styles.texto}>
        Pentacampeã Mundial.
      </Text>

      <Text style={styles.texto}>
        Títulos:
      </Text>

      <Text style={styles.texto}>
        🏆 1958
      </Text>

      <Text style={styles.texto}>
        🏆 1962
      </Text>

      <Text style={styles.texto}>
        🏆 1970
      </Text>

      <Text style={styles.texto}>
        🏆 1994
      </Text>

      <Text style={styles.texto}>
        🏆 2002
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push("/curiosidades")}
      >
        <Text style={styles.botaoTexto}>
          Ver Curiosidades
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/")}
      >
        <Text style={styles.link}>
          Voltar ao início
        </Text>
      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFF9C4",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  imagem: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  texto: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },

  botao: {
    backgroundColor: "#009C3B",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },

  botaoTexto: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  link: {
    color: "#1565C0",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
  },

});