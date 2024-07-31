import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import React, { useState, useLayoutEffect, useRef } from "react";
import { useRouter, useNavigation } from "expo-router";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#FFFF", white: "#FFFF" };

const slides = [
  {
    id: "1",
    image: require("../assets/images/firstimage.png"),
    title: "Get The Freshest Fruit Salad Combo",
    subtitle:
      "We deliver the best and freshest fruit salad in town. Order for a combo today!!!",
  },
  {
    id: "2",
    image: require("../assets/images/secondeimage.png"),
    title: "Get The Freshest Fruit Salad Combo",
    subtitle:
      "We deliver the best and freshest fruit salad in town. Order for a combo today!!!",
  },
  {
    id: "3",
    image: require("../assets/images/3thmage.png"),
    title: "Get The Freshest Fruit Salad Combo",
    subtitle:
      "We deliver the best and freshest fruit salad in town. Order for a combo today!!!",
  },
];

const Slide = ({ item }) => {
  return (
    <View
      style={{
        width,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={item?.image}
        className="w-screen h-[600px] justify-center items-center"
        style={{ top: -90 }}
      />
      <View style={{ top: -45 }}>
        <Text
          style={styles.title}
          className="font-aProBold text-xl text-center"
        >
          {item?.title}
        </Text>
        <Text
          style={styles.subtitle}
          className="font-aPro text-lg text-center px-4 mt-4"
        >
          {item?.subtitle}
        </Text>
      </View>
    </View>
  );
};

const about = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  console.log(currentSlideIndex);
  const skip = () => {
    const lastSlideIndex = currentSlideIndex - 1;
    if (currentSlideIndex != 0) {
      const offset = (lastSlideIndex * 1) / 2;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(lastSlideIndex);
    }
  };
  const ProgressBtn = () => {
    if (currentSlideIndex == 0) {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={goToNextSlide}
          className="bg-[#f59e4e] px-9 py-[10px] rounded-full"
        >
          <Text className="font-aPro text-white text-lg text-center">Next</Text>
        </TouchableOpacity>
      );
    } else if (currentSlideIndex == 1) {
      return (
        <View className="flex-row items-center justify-between px-6">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={skip}
            className="bg-[#b8b8b8] px-9 py-[10px] rounded-full"
          >
            <Text className="font-aPro text-white text-lg">Back</Text>
          </TouchableOpacity>
          <View style={{ width: 15 }} />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={goToNextSlide}
            className="bg-[#f59e4e] px-9 py-[10px] rounded-full"
          >
            <Text className="font-aPro text-white text-lg">Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View className="flex-row items-center justify-between px-6">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={skip}
            className="bg-[#b8b8b8] px-9 py-[10px] rounded-full"
          >
            <Text className="font-aPro text-white text-lg">Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("(tabs)/home")}
            className="bg-[#f59e4e] px-9 py-[10px] rounded-full"
          >
            <Text className="font-aPro text-white text-lg">Start</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };
  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.1,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: "#FFA451",
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        <View className="mb-5 px-4">
          <ProgressBtn />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 1 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        data={slides}
        renderItem={({ item }) => <Slide item={item} />}
        scrollEnabled={true} // Enable scrolling
        showsVerticalScrollIndicator={false} // Disable vertical scroll indicators
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#FFA451",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default about;
