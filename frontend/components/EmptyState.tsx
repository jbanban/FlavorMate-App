import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function EmptyState({ onCreate }: { onCreate?: () => void }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
      }}
    >
      <Text style={{ color: "#555", marginBottom: 10 }}>
        No recipes yet. Be the first to share!
      </Text>
      <TouchableOpacity
        onPress={onCreate}
        style={{
          backgroundColor: "black",
          borderRadius: 8,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>
          Create Your First Recipe
        </Text>
      </TouchableOpacity>
    </View>
  );
}
