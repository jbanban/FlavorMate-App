import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import api from "../api/api";

export default function AddRecipeScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleAdd = async () => {
    try {
      await api.post("/recipes", { title, ingredients, instructions });
      Alert.alert("Success", "Recipe added!");
      navigation.goBack();
    } catch {
      Alert.alert("Error", "Could not add recipe");
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Add New Recipe</Text>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={{ borderWidth: 1, padding: 10, marginVertical: 8, borderRadius: 10 }} />
      <TextInput placeholder="Ingredients" value={ingredients} onChangeText={setIngredients} style={{ borderWidth: 1, padding: 10, marginVertical: 8, borderRadius: 10 }} multiline />
      <TextInput placeholder="Instructions" value={instructions} onChangeText={setInstructions} style={{ borderWidth: 1, padding: 10, marginVertical: 8, borderRadius: 10 }} multiline />
      <TouchableOpacity onPress={handleAdd} style={{ backgroundColor: "#FF7043", padding: 15, borderRadius: 10 }}>
        <Text style={{ color: "white", textAlign: "center" }}>Save Recipe</Text>
      </TouchableOpacity>
    </View>
  );
}
