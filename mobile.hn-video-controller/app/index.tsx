import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

import { Categories } from "@/constants/Questions";
import Category from "@/components/Category";
import CustomScrollView from "@/components/CustomScrollView";

const coverSrc = require("@/assets/images/cover.jpeg");

const { width } = Dimensions.get("window");

const Controls: React.FC = () => {
  const changeScreenOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    );
  };

  useEffect(() => {
    changeScreenOrientation();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <CustomScrollView
        style={styles.list}
        contentContainerStyle={styles.listContainer}
      >
        {Categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </CustomScrollView>

      <Image source={coverSrc} width={400} height={width} />
      <Text style={styles.nameText}>هاني نقشبندي</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#000",
  },
  list: {
    flex: 1,
  },
  listContainer: {
    gap: 40,
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 40,
  },
  nameText: {
    position: "absolute",
    bottom: 30,
    right: 30,
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "AlmaraiExtraBold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});

export default Controls;
