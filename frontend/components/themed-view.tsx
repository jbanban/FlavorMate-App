// components/themed-view.tsx
import React from "react";
import { View, ViewProps } from "react-native";
import { useColorScheme } from "react-native";

/**
 * A simple wrapper around <View> that automatically adapts
 * background color based on the current color scheme (light/dark).
 */
export const ThemedView: React.FC<ViewProps> = ({ style, ...otherProps }) => {
  const colorScheme = useColorScheme();

  const backgroundColor = colorScheme === "dark" ? "#000000" : "#ffffff";

  return <View style={[{ backgroundColor, flex: 1 }, style]} {...otherProps} />;
};
