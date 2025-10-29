// components/themed-text.tsx
import React from "react";
import { Text, StyleSheet, TextProps, ColorSchemeName, useColorScheme } from "react-native";

type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "title" | "subtitle" | "default";
};

export const ThemedText: React.FC<ThemedTextProps> = ({
  style,
  lightColor = "#000",
  darkColor = "#fff",
  type = "default",
  ...rest
}) => {
  const colorScheme: ColorSchemeName = useColorScheme();
  const color = colorScheme === "dark" ? darkColor : lightColor;

  return (
    <Text
      style={[
        { color },
        type === "title" && styles.title,
        type === "subtitle" && styles.subtitle,
        style,
      ]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default ThemedText;
