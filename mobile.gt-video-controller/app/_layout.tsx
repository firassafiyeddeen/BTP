import { Stack, SplashScreen } from "expo-router";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded] = useFonts({
    Rubik: require("../assets/fonts/Rubik-Regular.ttf"),
    AlmaraiExtraBold: require("../assets/fonts/Almarai-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <ThemeProvider value={DarkTheme}>
      {loaded && <Stack screenOptions={{ headerShown: false }} />}
    </ThemeProvider>
  );
}
