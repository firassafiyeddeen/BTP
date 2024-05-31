import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Question as QuestionType } from "@/constants/Questions";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

const playIconSrc = require("@/assets/images/play.png");

type Props = {
  question: QuestionType;
  ripple?: boolean;
};

const Question: React.FC<Props> = ({ question, ripple = false }) => {
  return (
    <Link href={`/question/${question.id}`} asChild>
      <Pressable>
        <View style={styles.outerContainer}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["rgb(20,20,20)", "rgb(74,74,74)"]}
            style={styles.background}
          />
          <View style={styles.innerContainer}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["rgb(8,8,8)", "rgb(30,30,30)"]}
              style={styles.background}
            />
            <Text style={styles.text}>{question.question}</Text>
            <Image source={playIconSrc} width={16} height={16} />
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  outerContainer: {
    overflow: "hidden",
    borderRadius: 12,
    padding: 1,
    // backgroundColor: "red",
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 12,
    flexDirection: "row",
    padding: 16,
    gap: 12,
  },
  text: {
    flex: 1,
    color: "#fff",
    fontSize: 14,
    textAlign: "right",
    fontFamily: "Rubik",
  },
});

export default Question;
