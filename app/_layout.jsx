import React, { useLayoutEffect, useEffect, useState } from "react";
import { Stack, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import { SQLiteProvider } from "expo-sqlite/next";

const loadDatabase = async () => {
  const dbName = "rabbidsguide.db";
  const dbAsset = require("../assets/database/rabbidsguide.db");
  const dbUri = Asset.fromModule(dbAsset).uri;
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

  const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
  if (!fileInfo.exists) {
    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite`,
      { intermediates: true }
    );
    await FileSystem.downloadAsync(dbUri, dbFilePath);
  }
};

const RootLayout = () => {
  const [dbLoaded, setDbLoaded] = useState(false);

  const [fontsLoaded, error] = useFonts({
    "MuseoModerno-Thin": require("../assets/fonts/MuseoModerno-Thin.ttf"),
    "MuseoModerno-ExtraLight": require("../assets/fonts/MuseoModerno-ExtraLight.ttf"),
    "MuseoModerno-Light": require("../assets/fonts/MuseoModerno-Light.ttf"),
    "MuseoModerno-Medium": require("../assets/fonts/MuseoModerno-Medium.ttf"),
    "MuseoModerno-Regular": require("../assets/fonts/MuseoModerno-Regular.ttf"),
    "MuseoModerno-SemiBold": require("../assets/fonts/MuseoModerno-SemiBold.ttf"),
    "MuseoModerno-Bold": require("../assets/fonts/MuseoModerno-Bold.ttf"),
    "MuseoModerno-ExtraBold": require("../assets/fonts/MuseoModerno-ExtraBold.ttf"),
    "MuseoModerno-Black": require("../assets/fonts/MuseoModerno-Black.ttf"),
    "Abel-Pro": require("../assets/fonts/Abel-Pro.otf"),
    "Abel-Pro-Bold": require("../assets/fonts/Abel-Pro-Bold.otf"),
  });

  useEffect(() => {
    loadDatabase()
      .then(() => setDbLoaded(true))
      .catch((e) => console.error(e));

    if (error) throw error;
    if (fontsLoaded && dbLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error, dbLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <SQLiteProvider databaseName="rabbidsguide.db">
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="about" options={{ headerShown: false }} />
        <Stack.Screen name="ubisoft" options={{ headerShown: false }} />

        <Stack.Screen name="user.chapters" options={{ headerShown: false }} />
        <Stack.Screen name="user2.chapters" options={{ headerShown: false }} />
        <Stack.Screen name="user3.chapters" options={{ headerShown: false }} />
        <Stack.Screen name="user4.chapters" options={{ headerShown: false }} />
        <Stack.Screen name="user5.chapters" options={{ headerShown: false }} />
        <Stack.Screen name="user6.chapters" options={{ headerShown: false }} />
        <Stack.Screen name="user.ubisoft" options={{ headerShown: false }} />
        <Stack.Screen name="user2.ubisoft" options={{ headerShown: false }} />
        <Stack.Screen name="user3.ubisoft" options={{ headerShown: false }} />
        <Stack.Screen name="user4.ubisoft" options={{ headerShown: false }} />
        <Stack.Screen name="user5.ubisoft" options={{ headerShown: false }} />
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      </Stack>
    </SQLiteProvider>
  );
};

export default RootLayout;
