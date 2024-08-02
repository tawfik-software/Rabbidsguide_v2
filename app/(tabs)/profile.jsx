import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Share,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { openURL } from "expo-linking";
import { router } from "expo-router";

const profile = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Rabbidsguide",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="items-center mt-10 justify-center">
        <Image
          source={require("../../assets/images/firstimage.png")}
          className="h-32 w-32 rounded-full"
        />
        <Text className="font-mRegular text-sm p-5">Rayman Raving Rabbids</Text>
        <View className="px-4">
          <View className="mb-2">
            <Text className="text-lg font-mRegular ">Support us</Text>
          </View>
          <TouchableOpacity className="bg-[#f0eded] w-full rounded-2xl flex-row items-center justify-between px-6 py-3 my-1">
            <View className="flex-row items-center gap-x-2">
              <Image
                source={require("../../assets/images/iconstart.png")}
                className="h-6 w-6 right-4"
              />
              <Text className="text-black text-md font-mRegular text-lg">
                Rate Us
              </Text>
            </View>
            <View>
              <AntDesign name="arrowright" size={16} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#f0eded] w-full rounded-2xl flex-row items-center justify-between px-6 py-3 my-1"
            onPress={() => router.push("contactus")}
          >
            <View className="flex-row items-center gap-x-2">
              <Image
                source={require("../../assets/images/iconenveloppe.png")}
                className="h-6 w-6 right-4"
              />
              <Text className="text-black text-md font-mRegular text-lg">
                Contact Us
              </Text>
            </View>
            <View>
              <AntDesign name="arrowright" size={16} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#f0eded] w-full rounded-2xl flex-row items-center justify-between px-6 py-3 my-1"
            onPress={onShare}
          >
            <View className="flex-row items-center gap-x-2">
              <Image
                source={require("../../assets/images/iconshare.png")}
                className="h-7 w-7 right-4"
              />
              <Text className="text-black text-md font-mRegular text-lg">
                Share with friends
              </Text>
            </View>
            <View>
              <AntDesign name="arrowright" size={16} color="black" />
            </View>
          </TouchableOpacity>
          <View className="mb-2 mt-8">
            <Text className="text-lg font-mRegular ">About the app</Text>
          </View>
          <TouchableOpacity className="bg-[#f0eded] w-full rounded-2xl flex-row items-center justify-between px-6 py-3 my-1">
            <View className="flex-row items-center gap-x-2">
              <Image
                source={require("../../assets/images/iconabout.png")}
                className="h-6 w-6 right-4"
              />
              <Text className="text-black text-md font-mRegular text-lg">
                About us
              </Text>
            </View>
            <View>
              <AntDesign name="arrowright" size={16} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#f0eded] w-full rounded-2xl flex-row items-center justify-between px-6 py-3 my-1"
            onPress={() =>
              openURL(
                "https://www.termsfeed.com/live/d41a6c77-301a-4062-8e1a-faf68f194a37"
              )
            }
          >
            <View className="flex-row items-center gap-x-2">
              <Image
                source={require("../../assets/images/iconpassword.png")}
                className="h-6 w-6 right-4"
              />
              <Text className="text-black text-md font-mRegular text-lg">
                Terms and Conditions
              </Text>
            </View>
            <View>
              <AntDesign name="arrowright" size={16} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#f0eded] w-full rounded-2xl flex-row items-center justify-between px-6 py-3 my-1"
            onPress={() =>
              openURL(
                "https://www.privacypolicies.com/live/0b38a001-2fe1-4be9-b97e-368750f50e6f"
              )
            }
          >
            <View className="flex-row items-center gap-x-2">
              <Image
                source={require("../../assets/images/iconlock.png")}
                className="h-6 w-6 right-4"
              />
              <Text className="text-black text-md font-mRegular text-lg">
                Privacy Policy
              </Text>
            </View>
            <View>
              <AntDesign name="arrowright" size={16} color="black" />
            </View>
          </TouchableOpacity>

          <View className="justify-center items-center top-4">
            <Text>Generated by Mobtwinny</Text>
            <View className="flex-row justify-center items-center">
              <Image
                source={require("../../assets/images/iconforprofile.png")}
                className="h-7 w-7"
              />
              <View className="bg-[#E87472] w-16 h-6 rounded-full flex items-center justify-center">
                <Text className="text-white text-center text-xs">
                  AI Builder
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default profile;
