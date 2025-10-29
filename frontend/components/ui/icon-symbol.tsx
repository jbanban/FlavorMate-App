// components/ui/icon-symbol.tsx
import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IconSymbolProps = {
  name: keyof typeof Ionicons.glyphMap;
  color?: string;
  size?: number;
};

export const IconSymbol: React.FC<IconSymbolProps> = ({
  name,
  color = "#000",
  size = 24,
}) => (
  <View>
    <Ionicons name={name} color={color} size={size} />
  </View>
);

export default IconSymbol;
