import "../../global.css";
import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Meditations" }} />
      <Stack.Screen name="meditation/[id]" options={{ headerShown: false, animation: 'slide_from_bottom'}} />
    </Stack>
  );
}
