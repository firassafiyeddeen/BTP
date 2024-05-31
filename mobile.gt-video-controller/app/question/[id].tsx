import Typewriter from "@/components/Typewriter";
import { CategoryId, Questions } from "@/constants/Questions";
import { useSharedStorage } from "@/hooks/useSharedStorage";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, router } from "expo-router";
import { useEffect } from "react";
import { Linking, StyleSheet, Text, View } from "react-native";

const Question: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { lastMessage, saveDataToSharedStorage } = useSharedStorage();

  const categoryId = id?.substring(0, 5);
  const questions = (categoryId && Questions[categoryId as CategoryId]) || [];
  const question = questions.find((q) => q.id === id);

  useEffect(() => {
    if (question) {
      saveDataToSharedStorage("videoId", question.id);
    }
  }, [question]);

  useEffect(() => {
    if (lastMessage === "idle") {
      router.replace("/");
    }
  }, [lastMessage]);

  if (!question) {
    return <Text>Question not found</Text>;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["rgb(4,4,4)", "rgb(13, 13, 13)", "rgb(39,39,39)"]}
        style={styles.background}
      />
      <Text style={styles.questionText}>{question.question}</Text>
      <View style={styles.divider}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[
            "rgba(102,102,102,0.5)",
            "rgba(255,255,255,1)",
            "rgba(102,102,102,0.5)",
          ]}
          style={styles.background}
        />
      </View>
      <Typewriter text={question.answer} style={styles.answerText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 147,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  divider: {
    height: 1,
    width: "100%",
    // backgroundColor: "#fff",
    marginVertical: 40,
    opacity: 0.3,
  },
  questionText: {
    fontFamily: "Rubik",
    fontSize: 24,
    color: "#F3E2BB",
    textAlign: "center",
    lineHeight: 36,
  },
  answerText: {
    fontFamily: "Rubik",
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    lineHeight: 48,
  },
});

export default Question;
