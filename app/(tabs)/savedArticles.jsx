import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSQLiteContext } from "expo-sqlite/next";
import Bookmark from "../../components/svg/icons/bookmark";
import SavedArticleCard from "../../components/ui/SavedArticleCard";

const savedArticles = () => {
  const db = useSQLiteContext();

  const [articles, setArticle] = useState([]);

  async function getArticlesData() {
    const result = await db.getAllAsync(
      `SELECT * FROM articles WHERE saved = 1`
    );
    setArticle(result);
    console.log(result);
  }

  useEffect(() => {
    db.withTransactionAsync(async () => {
      await getArticlesData();
    });
  }, [db]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-1 px-4 py-10">
        <View
          className="flex-row items-center"
          style={{ marginTop: Platform.OS === "ios" ? -28 : 12 }}
        >
          <View className="flex-1">
            <Text className="text-gray-400 text-sm font-aPro">
              Hi 👋, this is your guide for →
            </Text>
            <Text className="font-mBold text-xl">Rayman Raving Rabbids</Text>
          </View>
          <Image
            source={require("../../assets/images/firstimage.png")}
            className="h-10 w-10 rounded-full"
          />
        </View>

        {/* Body */}
        <View className="mt-4 mb-2 top-3">
          <Text className="text-xl font-mBold">Saved articles</Text>
        </View>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="gap-y-3 pb-[90px]">
            <View className="flex-row flex-wrap">
              {articles.length === 0 ? (
                <Text>Loading...</Text>
              ) : (
                articles.map((article) => (
                  <SavedArticleCard key={article.id} image={article.image} />
                ))
              )}
            </View>
            {/* <View className="flex-row">
              <TouchableOpacity className="relative w-[45%]">
                <Image
                  source={require("../../assets/images/bodyarticles.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />
                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Bookmark color="#FFA451" />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="relative w-[45%] ml-6">
                <Image
                  source={require("../../assets/images/firstimage.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />

                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Bookmark color="#FFA451" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flex-row">
              <TouchableOpacity className="relative w-[45%]">
                <Image
                  source={require("../../assets/images/raymanbody.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />
                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Bookmark color="#FFA451" />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="relative w-[45%] ml-6">
                <Image
                  source={require("../../assets/images/3thmage.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />

                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Bookmark color="#FFA451" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flex-row">
              <TouchableOpacity className="relative w-[45%]">
                <Image
                  source={require("../../assets/images/welcome.jpeg")}
                  className="rounded-xl w-[170px] h-[170px]"
                />
                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Bookmark color="#FFA451" />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="relative w-[45%] ml-6">
                <Image
                  source={require("../../assets/images/ray.jpeg")}
                  className="rounded-xl w-[170px] h-[170px]"
                />

                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Bookmark color="#FFA451" />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flex-row">
              <TouchableOpacity className="relative w-[45%]">
                <Image
                  source={require("../../assets/images/3thmage.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />
                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Bookmark color="#FFA451" />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="relative w-[45%] ml-6">
                <Image
                  source={require("../../assets/images/raymanbody.png")}
                  className="rounded-xl w-[170px] h-[170px]"
                />

                <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
                  Fancomic Rayman Night...
                </Text>
                <View className="w-8 h-8 rounded-full bg-white absolute z-10 top-[1px] right-[-7px]">
                  <View className="w-full h-full items-center justify-center">
                    <Bookmark color="#FFA451" />
                  </View>
                </View>
              </TouchableOpacity>
            </View> */}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default savedArticles;
