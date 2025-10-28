import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import api from "../api/api";
import RecipeCard from "../components/RecipeCard";

export default function HomeScreen({ navigation }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    api.get("/recipes").then((res) => setRecipes(res.data));
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>🍽️ Recipes</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("RecipeDetails", { recipe: item })}>
            <RecipeCard recipe={item} />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={{ backgroundColor: "#FF7043", padding: 15, borderRadius: 10, marginTop: 20 }}
        onPress={() => navigation.navigate("AddRecipe")}
      >
        <Text style={{ textAlign: "center", color: "white" }}>Add New Recipe</Text>
      </TouchableOpacity>
    </View>
  );
}
