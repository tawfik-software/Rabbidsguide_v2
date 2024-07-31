import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { useSQLiteContext } from "expo-sqlite/next";

const imageMap = {
  "usernav.jpeg": require("../assets/images/usernav.jpeg"),
  "content_second_img.png": require("../assets/images/content_second_img.png"),
  "3thmage.png": require("../assets/images/3thmage.png"),
  "bodyarticles.png": require("../assets/images/bodyarticles.png"),
  "elementmap.jpeg": require("../assets/images/elementmap.jpeg"),
  "firstimage.png": require("../assets/images/firstimage.png"),
  "firstmage.png": require("../assets/images/firstmage.png"),
  "ray.jpeg": require("../assets/images/ray.jpeg"),
  "raymanbody.png": require("../assets/images/raymanbody.png"),
  "secondeimage.png": require("../assets/images/secondeimage.png"),
  "welcome.jpeg": require("../assets/images/welcome.jpeg"),
};

const Ubisoft = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  console.log(id);
  const [contents, setContents] = useState([]);
  const [firstImg, setFirstImg] = useState("");
  const [secondImg, setSecondImg] = useState("");
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [lastText, setLastText] = useState("");
  const db = useSQLiteContext();

  useEffect(() => {
    for (let i = 1; i < 6; i++) {
      contents.length !== 0 &&
        contents.map((content) => {
          if (content.id === 1) {
            setFirstImg(content.image);
          } else if (content.id === 4) {
            setSecondImg(content.image);
          } else if (content.id === 2) {
            setFirstText(content.text);
          } else if (content.id === 3) {
            setSecondText(content.text);
          } else if (content.id === 5) {
            setLastText(content.text);
          }
        });
    }
  }, [contents]);

  useEffect(() => {
    db.withTransactionAsync(async () => {
      await getContentData();
    });
  }, [db]);

  async function getContentData() {
    const result = await db.getAllAsync(
      `SELECT * FROM content WHERE article_id = ?`,
      [id]
    );
    setContents(result);
  }

  async function handleSaveArticle(id) {
    db.withTransactionAsync(async () => {
      await db.runAsync(`UPDATE articles SET saved = 1 WHERE id = ?`, [id]);
    });
    console.log("first");
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View
        className="flex-row items-center p-4 bg-white"
        style={{ marginTop: Platform.OS === "android" ? 30 : 0 }}
      >
        <Text className="flex-1 font-mRegular text-lg font-bold text-center right-20">
          Rayman Raving Rabbids
        </Text>
        <TouchableOpacity
          style={{ position: "absolute", top: 18, right: 60 }}
          className="bg-[#eee] rounded-full p-[1px]"
          onPress={() => handleSaveArticle(id)}
        >
          <Ionicons name="close-outline" size={26} color="black" />
        </TouchableOpacity>
        <View
          style={{ position: "absolute", top: 18, right: 16 }}
          className="bg-[#eee] rounded-full p-[1px]"
        >
          <Ionicons
            name="close-outline"
            size={26}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View className="absolute bottom-0 left-0 right-0 h-px bg-gray-400" />
      </View>
      <ScrollView className="flex-1">
        <View className="p-4">
          <View className="">
            <View className="py-4">
              <Image
                source={imageMap[firstImg]}
                className="h-44 w-full rounded-lg py-4"
              />
            </View>
            <Text className="text-xs leading-4 w-auto">{firstText}</Text>
            <Text className="text-xs leading-4 w-auto">{secondText}</Text>
          </View>
          <View>
            <View className="py-4">
              <Image
                source={imageMap[secondImg]}
                className="h-44 w-full rounded-lg "
              />
            </View>

            <View className="">
              <Text className="text-xs leading-4 w-auto">{lastText}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ubisoft;
