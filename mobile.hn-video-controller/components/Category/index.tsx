import { Questions, Category as TCategory } from "@/constants/Questions";
import { StyleSheet, Text, View } from "react-native";

import Question from "@/components/Question";

type Props = {
  category: TCategory;
};

const Category: React.FC<Props> = ({ category }) => {
  const questions = Questions[category.id] || [];

  return (
    <View>
      <Text style={styles.text}>{category.label}</Text>

      <View style={styles.questions}>
        {questions.map((question, i) => (
          <Question key={question.id} question={question} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "right",
    fontFamily: "AlmaraiExtraBold",
  },
  questions: {
    flexDirection: "column",
    gap: 16,
    marginTop: 20,
  },
});

export default Category;
