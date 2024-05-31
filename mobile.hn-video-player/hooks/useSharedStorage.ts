import { useEffect, useState } from "react";
import SharedGroupPreferences from "react-native-shared-group-preferences";

const appGroupIdentifier = "group.com.vrealsoft.hn";

export const useSharedStorage = () => {
  const [lastMessage, setLastMessage] = useState<string | null>(null);

  const saveDataToSharedStorage = async (key: string, data: any) => {
    try {
      await SharedGroupPreferences.setItem(key, data, appGroupIdentifier);
    } catch (errorCode) {
      // errorCode 0 = There is no suite with that name.
      console.log(errorCode);
    }
  };

  const loadDataFromSharedStorage = async (key: string) => {
    try {
      const loadedData = await SharedGroupPreferences.getItem(
        key,
        appGroupIdentifier
      );
      return loadedData;
    } catch (errorCode) {
      // errorCode 0 = no group name exists
      // errorCode 1 = there is no value for that key
      return null;
    }
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const videoId = await loadDataFromSharedStorage("videoId");
      setLastMessage(videoId);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return {
    lastMessage,
    saveDataToSharedStorage,
    loadDataFromSharedStorage,
  };
};
