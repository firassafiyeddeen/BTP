import React, { ComponentProps, useRef, useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
} from "react-native";
import RippleAnimation from "../RippleAnimation";

interface Props extends ComponentProps<typeof ScrollView> {
  children?: React.ReactNode;
}

const { height } = Dimensions.get("window");

const CustomScrollView: React.FC<Props> = ({ children, ...props }) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [showRipple, setShowRipple] = useState(true);

  const handleScroll = (args: any) => {
    setShowRipple(args.nativeEvent.contentOffset.y <= 0);

    return Animated.event(
      [{ nativeEvent: { contentOffset: { y: scrollY } } }],
      { useNativeDriver: false }
    )(args);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const currentScrollY = (scrollY as any)._value;
        const scrollOffset = gestureState.dy * (contentHeight / height);
        scrollViewRef.current?.scrollTo({
          y: currentScrollY + scrollOffset,
          animated: false,
        });
      },
    })
  ).current;

  const scrollIndicatorSize =
    height * (height / Math.max(contentHeight, height));
  const scrollIndicatorPosition = scrollY.interpolate({
    inputRange: [0, Math.max(0, contentHeight - height - 80)],
    outputRange: [0, Math.max(0, height - 80 - scrollIndicatorSize)],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      {showRipple && <RippleAnimation style={styles.ripple} />}

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        onContentSizeChange={(w, h) => setContentHeight(h)}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        {...props}
      >
        {children}
      </ScrollView>

      <View style={styles.railIndicator} />
      <Animated.View
        style={[
          styles.scrollIndicator,
          {
            height: scrollIndicatorSize,
            transform: [{ translateY: scrollIndicatorPosition }],
          },
        ]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  railIndicator: {
    width: 20,
    backgroundColor: "#1F1F1F",
    position: "absolute",
    top: 40,
    bottom: 40,
    left: -10,
    borderRadius: 10,
  },
  scrollIndicator: {
    width: 20,
    backgroundColor: "#555555",
    position: "absolute",
    top: 40,
    left: -10,
    borderRadius: 10,
  },
  ripple: {
    position: "absolute",
    right: 250,
    top: 185,
    zIndex: 1,
  },
});

export default CustomScrollView;
