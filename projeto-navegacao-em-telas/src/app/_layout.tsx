import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#009C3B",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Copa do Mundo" }}
      />

      <Stack.Screen
        name="selecao"
        options={{ title: "Seleção Brasileira" }}
      />

      <Stack.Screen
        name="curiosidades"
        options={{ title: "Curiosidades" }}
      />
    </Stack>
  );
}