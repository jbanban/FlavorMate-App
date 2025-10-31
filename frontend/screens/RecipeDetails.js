import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function RecipeDetails({ route }) {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      {recipe.image && (
        <Image source={{ uri: recipe.image }} style={styles.image} />
      )}
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.subtitle}>{recipe.description}</Text>

      <Text style={styles.sectionTitle}>Ingredients</Text>
      <Text style={styles.text}>{recipe.ingredients}</Text>

      <Text style={styles.sectionTitle}>Instructions</Text>
      <Text style={styles.text}>{recipe.instructions}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  image: { width: "100%", height: 200, borderRadius: 10, marginBottom: 15 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 5 },
  subtitle: { fontSize: 16, color: "#555", marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginTop: 20 },
  text: { fontSize: 16, color: "#333", marginTop: 8 },
});
