import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Animated, ViewStyle } from "react-native";

type Props = {
  style?: ViewStyle;
};

const pointerIconSrc = require("@/assets/images/pointer.png");

const RippleAnimation: React.FC<Props> = ({ style }) => {
  const rippleAnim = useRef(new Animated.Value(0)).current;
  const pointerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      rippleAnim.setValue(0);
      Animated.timing(rippleAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => animate());
    };

    animate();
  }, [rippleAnim]);

  useEffect(() => {
    const animate = () => {
      pointerAnim.setValue(1);
      Animated.timing(pointerAnim, {
        toValue: 0.8,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => animate());
    };

    animate();
  }, [pointerAnim]);

  const pointerScale = pointerAnim.interpolate({
    inputRange: [0.8, 1],
    outputRange: [0.8, 1],
  });

  const rippleScale = rippleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 4],
  });

  const rippleOpacity = rippleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  return (
    <View style={[styles.container, style]}>
      <Animated.View
        style={[
          styles.ripple,
          {
            transform: [{ scale: rippleScale }],
            opacity: rippleOpacity,
          },
        ]}
      />
      <Animated.Image
        source={pointerIconSrc}
        style={{ transform: [{ scale: pointerScale }] }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ripple: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(0, 150, 255, 0.3)",
  },
});

export default RippleAnimation;
