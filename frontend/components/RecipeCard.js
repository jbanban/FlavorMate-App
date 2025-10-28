import React from "react";
import { View, Text } from "react-native";

export default function RecipeCard({ recipe }) {
  return (
    <View style={{ backgroundColor: "#fff", padding: 15, marginVertical: 8, borderRadius: 12, shadowOpacity: 0.2 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{recipe.title}</Text>
      <Text numberOfLines={1} style={{ color: "gray" }}>{recipe.ingredients}</Text>
    </View>
  );
}
