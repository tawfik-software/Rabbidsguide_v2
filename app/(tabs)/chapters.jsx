import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { useSQLiteContext } from "expo-sqlite/next";

const imageMap = {
  "3thmage.png": require("../../assets/images/3thmage.png"),
  "secondeimage.png": require("../../assets/images/secondeimage.png"),
  "elementmap.jpeg": require("../../assets/images/elementmap.jpeg"),
  "firstimage.png": require("../../assets/images/firstimage.png"),
  "ray.jpeg": require("../../assets/images/ray.jpeg"),
  "raymanbody.png": require("../../assets/images/raymanbody.png"),
  "usernav.jpeg": require("../../assets/images/usernav.jpeg"),
  "welcome.jpeg": require("../../assets/images/welcome.jpeg"),
  "bodyarticles.png": require("../../assets/images/bodyarticles.png"),
};

const Chapters = () => {
  const [chapters, setChapters] = useState([]);
  const db = useSQLiteContext();

  useEffect(() => {
    db.withTransactionAsync(async () => {
      await getChaptersData();
    });
  }, [db]);

  async function getChaptersData() {
    const result = await db.getAllAsync(`SELECT * FROM chapters`);
    console.log(result);
    setChapters(result);
  }
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-4 py-10">
        <View
          className="flex-row items-center"
          style={{ marginTop: Platform.OS === "ios" ? -28 : 12 }}
        >
          <View className="flex-1">
            <Text className="text-gray-400 text-xs font-aPro">
              Hi 👋, this is your guide for →
            </Text>
            <Text className="font-mBold text-xl">Rayman Raving Rabbids</Text>
          </View>
          <Image
            source={require("../../assets/images/firstimage.png")}
            className="h-10 w-10 rounded-full"
          />
        </View>
        <View className="pt-3">
          <Text className="text-xl font-mBold">Chapters</Text>
        </View>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="gap-y-4 pb-[45px]">
            {chapters.length === 0 ? (
              <Text>Loading...</Text>
            ) : (
              chapters.map((chapter, key) => (
                <TouchableOpacity
                  onPress={() => router.push("user.chapters")}
                  key={key}
                >
                  <ImageBackground
                    source={imageMap[chapter.image]}
                    className="w-full h-40 items-center justify-center rounded-xl overflow-hidden"
                  >
                    <Text className="text-white font-mMedium">
                      {chapter.title}
                    </Text>
                    <Text className="text-white font-mBold">
                      Fancomic Rayman Nightmarish
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              ))
            )}
            {/* <TouchableOpacity onPress={() => router.push("user.chapters")}>
              <ImageBackground
                source={require("../../assets/images/raymanbody.png")}
                className="w-full h-40 items-center justify-center rounded-xl overflow-hidden"
              >
                <Text className="text-white font-mMedium">Chapter 5</Text>
                <Text className="text-white font-mBold">
                  Fancomic Rayman Nightmarish
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("user.chapters")}>
              <ImageBackground
                source={require("../../assets/images/secondeimage.png")}
                className="w-full h-40 items-center justify-center rounded-xl overflow-hidden"
              >
                <Text className="text-white font-mMedium">Chapter 6</Text>
                <Text className="text-white font-mBold">
                  Fancomic Rayman Nightmarish
                </Text>
              </ImageBackground>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Chapters;
