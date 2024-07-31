import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSQLiteContext } from "expo-sqlite/next";

const imageMap = {
  "secondeimage.png": require("../../assets/images/secondeimage.png"),
  "raymanbody.png": require("../../assets/images/raymanbody.png"),
  "ray.jpeg": require("../../assets/images/ray.jpeg"),
  "firstmage.png": require("../../assets/images/firstmage.png"),
  "bodyarticles.png": require("../../assets/images/bodyarticles.png"),
  "3thmage.png": require("../../assets/images/3thmage.png"),
};

const Home = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);
  const db = useSQLiteContext();

  useEffect(() => {
    db.withTransactionAsync(async () => {
      await getChaptersData();
    });
  }, [db]);

  async function getChaptersData() {
    const result = await db.getAllAsync(`SELECT * FROM articles`);
    setArticles(result);
    console.log(result);
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
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

        {/* Body */}
        <View className="my-2 top-3">
          <Text className="text-xl font-mBold">Last articles</Text>
        </View>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="gap-y-1 pb-[55px]">
            {/* Element 1 */}
            {articles.length === 0 ? (
              <Text>Loading...</Text>
            ) : (
              articles.map((article, key) => (
                <TouchableOpacity
                  className="flex-row relative"
                  onPress={() =>
                    router.push({
                      pathname: "/ubisoft",
                      params: { id: article.id, saved: article.saved },
                    })
                  }
                  key={key}
                >
                  <Image
                    source={imageMap[article.image]}
                    className="h-28 w-28 p-4 rounded-xl"
                  />
                  <View className="ml-2 relative">
                    <Text className="text-orange-500 text-md font-mRegular">
                      Fancomic Rayman Nightmarish
                    </Text>
                    <Text className="font-aPro text-sm w-[25%]">
                      Ubisoft, I say this respectfully: please use your amazing
                      IPs in more creative ways that appeal to your community
                      rather than alienating your fanbase through, ways that
                      appeal to your community rather...
                    </Text>
                  </View>
                  <AntDesign
                    name="arrowright"
                    size={16}
                    color="black"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: Platform.OS === "ios" ? 246 : 345,
                    }}
                  />
                </TouchableOpacity>
              ))
            )}

            {/* Element 2 */}

            {/* <TouchableOpacity
              className="flex-row"
              onPress={() => router.push("user.ubisoft")}
            >
              <Image
                source={require("../../assets/images/bodyarticles.png")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: Platform.OS === "ios" ? 246 : 345,
                  }}
                />
              </View>
            </TouchableOpacity> */}

            {/* Element 3 */}

            {/* <TouchableOpacity
              className="flex-row"
              onPress={() => router.push("user2.ubisoft")}
            >
              <Image
                source={require("../../assets/images/ray.jpeg")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: Platform.OS === "ios" ? 246 : 345,
                  }}
                />
              </View>
            </TouchableOpacity> */}

            {/* Element 4 */}

            {/* <TouchableOpacity
              className="flex-row"
              onPress={() => router.push("user3.ubisoft")}
            >
              <Image
                source={require("../../assets/images/raymanbody.png")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: Platform.OS === "ios" ? 246 : 345,
                  }}
                />
              </View>
            </TouchableOpacity> */}

            {/* Element 5 */}

            {/* <TouchableOpacity
              className="flex-row"
              onPress={() => router.push("user4.ubisoft")}
            >
              <Image
                source={require("../../assets/images/firstimage.png")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: Platform.OS === "ios" ? 246 : 345,
                  }}
                />
              </View>
            </TouchableOpacity> */}

            {/* Element 6 */}
            {/* 
            <TouchableOpacity
              className="flex-row"
              onPress={() => router.push("user5.ubisoft")}
            >
              <Image
                source={require("../../assets/images/3thmage.png")}
                className="h-28 w-28 p-4 rounded-xl"
              />
              <View className="ml-2 relative">
                <Text className="text-orange-500 text-md font-mRegular">
                  Fancomic Rayman Nightmarish
                </Text>
                <Text className="font-aPro text-sm w-[25%]">
                  Ubisoft, I say this respectfully: please use your amazing IPs
                  in more creative ways that appeal to your community rather
                  than alienating your fanbase through, ways that appeal to your
                  community rather...
                </Text>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color="black"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: Platform.OS === "ios" ? 246 : 345,
                  }}
                />
              </View>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
