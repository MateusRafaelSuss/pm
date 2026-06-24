import { useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Detalhes() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      {/*<Text style={styles.titulo}>Home</Text>
      <Text style={styles.subtitulo}> Bem vindo ao nosso APP!!!</Text>*/}
      <TouchableOpacity style={styles.button} onPress={()=>router.back("../detalhes")}>
        <Text style={styles.buttonText}>ir para tela tela inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F9", // Fundo claro e moderno
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 32,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF", // Azul padrão iOS moderno
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12, // Cantos bem arredondados
    width: "100%", // Ocupa a largura disponível com o padding do container
    maxHeight: 56,
    alignItems: "center",
    justifyContent: "center",
    // Sombra para Android
    elevation: 3,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600", // Texto levemente em negrito
    letterSpacing: 0.5,
  },
});