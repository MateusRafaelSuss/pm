import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#e87102" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "700" },
      }}
    >
      <Stack.Screen name="INICIO" options={{ title: "Bem Vindo à maior Copa do Mundo" }} />
      <Stack.Screen name="Informações" options={{ title: "Informações sobre a Copa do Mundo de 2026" }} />
      <Stack.Screen name="Seleções Favoritas" options={{ title: "Candidatos ao título" }} />
      <Stack.Screen name ="BRASIL" options={{ title: "Seleção Brasileira"}} />
    </Stack>
  );
}