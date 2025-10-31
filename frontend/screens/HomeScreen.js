import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import Layout from "@/components/Layout";
import EmptyState from "@/components/EmptyState";
import axios from "axios";

import { API_ENDPOINTS } from "@/constants/config";

export default function HomeScreen({ navigation }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(API_ENDPOINTS.RECIPES)
      .then((res) => {
        console.log("Fetched recipes:", res.data);
        setRecipes(res.data);
      })
      .catch((err) => console.error("Error fetching recipes:", err.message));
  }, []);

  return (
    <Layout>
      <View>
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
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RecipeDetails", { recipe: item })
                }
                style={{ padding: 12, border: 1, borderColor: "#ddd", borderRadius: 5 }}
              >
                <Text style={{ fontSize: 18, fontWeight: "600" }}>{item.title}</Text>
                <Text numberOfLines={1} style={{ color: "#666" }}>
                  {item.ingredients}
                </Text>
              </TouchableOpacity>
            )}
          />

        )}
        <TouchableOpacity
          style={{ backgroundColor: "#FF7043", padding: 15, borderRadius: 10, marginTop: 20 }}
          onPress={() => navigation.navigate("AddRecipe")}
          >
            <Text style={{ textAlign: "center", color: "white" }}>Add New Recipe</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
