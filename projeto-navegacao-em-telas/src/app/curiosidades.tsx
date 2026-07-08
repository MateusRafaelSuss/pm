import { useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function Curiosidades() {

  const router = useRouter();

  const taca = require("../../assets/images/taca.png");

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        ⭐ Curiosidades
      </Text>

      <Image
        source={taca}
        style={styles.imagem}
      />

      <Text style={styles.texto}>
        🏆 O Brasil é o único país que disputou todas as Copas do Mundo.
      </Text>

      <Text style={styles.texto}>
        ⚽ Pelé é o único tricampeão mundial.
      </Text>

      <Text style={styles.texto}>
        🌎 A primeira Copa aconteceu em 1930, no Uruguai.
      </Text>

      <Text style={styles.texto}>
        🇧🇷 O Brasil conquistou cinco títulos mundiais.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.back()}
      >
        <Text style={styles.botaoTexto}>
          Voltar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/")}
      >
        <Text style={styles.link}>
          Tela Inicial
        </Text>
      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#E3F2FD",
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
    textAlign: "center",
    marginBottom: 15,
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
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 20,
  },

});