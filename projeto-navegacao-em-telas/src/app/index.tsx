import { useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function Index() {

  const router = useRouter();

  const copa = require("../../assets/images/copa.png");

  return (
    <View style={styles.container}>

      <Image
        source={copa}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        🏆 Copa do Mundo
      </Text>

      <Text style={styles.texto}>
        Bem-vindo ao aplicativo da Copa do Mundo!
      </Text>

      <Text style={styles.texto}>
        Conheça um pouco da história da Seleção Brasileira.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push("/selecao")}
      >
        <Text style={styles.botaoTexto}>
          Conhecer a Seleção
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  imagem: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginBottom: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
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
    fontWeight: "bold",
    fontSize: 18,
  },

});