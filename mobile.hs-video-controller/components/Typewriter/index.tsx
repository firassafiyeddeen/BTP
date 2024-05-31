import React, { useState, useEffect } from "react";
import { Text } from "react-native";

interface Props extends React.ComponentProps<typeof Text> {
  text: string;
  delay?: number;
}

const Typewriter: React.FC<Props> = ({ text, delay = 50, ...props }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <Text {...props}>{currentText}</Text>;
};

export default Typewriter;
