import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import React from "react";
import Bookmark from "../svg/icons/bookmark";

const imageMap = {
  "usernav.jpeg": require("../../assets/images/usernav.jpeg"),
  "content_second_img.png": require("../../assets/images/content_second_img.png"),
  "3thmage.png": require("../../assets/images/3thmage.png"),
  "bodyarticles.png": require("../../assets/images/bodyarticles.png"),
  "elementmap.jpeg": require("../../assets/images/elementmap.jpeg"),
  "firstimage.png": require("../../assets/images/firstimage.png"),
  "firstmage.png": require("../../assets/images/firstmage.png"),
  "ray.jpeg": require("../../assets/images/ray.jpeg"),
  "raymanbody.png": require("../../assets/images/raymanbody.png"),
  "secondeimage.png": require("../../assets/images/secondeimage.png"),
  "welcome.jpeg": require("../../assets/images/welcome.jpeg"),
};

const SavedArticleCard = ({ key, image }) => {
  return (
    <TouchableOpacity className="relative w-[45%] mr-[18px]" key={key}>
      <Image
        source={imageMap[image]}
        className="rounded-xl w-[170px] h-[170px] mt-4"
      />
      <Text className="text-[13px] font-mRegular text-center text-gray-600 mt-1">
        Fancomic Rayman Night...
      </Text>
      <View
        className={`w-8 h-8 rounded-full bg-white absolute z-10 top-[17px] ${
          Platform.OS === "ios" ? "right-[-17px]" : "right-[-7px]"
        }`}
      >
        <View className="w-full h-full items-center justify-center">
          <Bookmark color="#FFA451" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SavedArticleCard;
