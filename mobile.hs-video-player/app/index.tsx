import { useEffect, useRef, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import Video, { VideoRef } from "react-native-video";
import { StatusBar, StyleSheet } from "react-native";
import { Videos } from "@/constants/Videos";
import { useSharedStorage } from "@/hooks/useSharedStorage";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<VideoRef>(null);

  const [selectedVideoId, setSelectedVideoId] = useState("idle");
  const { saveDataToSharedStorage, loadDataFromSharedStorage, lastMessage } =
    useSharedStorage();

  const handleVideoEnd = () => {
    if (selectedVideoId !== "idle") {
      saveDataToSharedStorage("videoId", "idle");
      setSelectedVideoId("idle");
    }
  };

  const changeScreenOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    );
  };

  useEffect(() => {
    changeScreenOrientation();
  }, []);

  useEffect(() => {
    console.log("lastMessage (player)", lastMessage);
    if (lastMessage) {
      setSelectedVideoId(lastMessage);
    }
  }, [lastMessage]);

  const selectedVideo = Videos.find(({ id }) => id === selectedVideoId);

  return (
    <>
      <StatusBar hidden />
      <Video
        source={selectedVideo?.src}
        ref={videoRef}
        style={styles.backgroundVideo}
        repeat={selectedVideoId === "idle"}
        resizeMode="contain"
        onEnd={handleVideoEnd}
      />
    </>
  );
};

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "black",
  },
});

export default VideoPlayer;
