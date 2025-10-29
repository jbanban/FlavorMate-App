import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Layout from "@/components/Layout";
import EmptyState from "@/components/EmptyState";
import RecipeCard from "@/components/RecipeCard";
import axios from "axios";

export default function HomeScreen() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);

  return (
    <Layout>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "700" }}>
          Welcome to FlavorMate
        </Text>
        <Text style={{ color: "#555", marginBottom: 20 }}>
          Discover and share delicious recipes from our community.
        </Text>

        {recipes.length === 0 ? (
          <EmptyState />
        ) : (
          <FlatList
            data={recipes}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 100 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RecipeDetails", { recipe: item })
                }
              >
                <RecipeCard recipe={item} />
              </TouchableOpacity>
            )}
          />
        )}

        <TouchableOpacity
          style={{
            backgroundColor: "#FF7043",
            padding: 15,
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("AddRecipe")}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            Add New Recipe
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
