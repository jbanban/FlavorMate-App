import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const routesFromSchemas = [
  { label: "Home", screen: "HomeScreen", icon: "home-outline" },
  { label: "Add Recipe", screen: "AddRecipe", icon: "add-outline" },
  { label: "Profile", screen: "Profile", icon: "person-outline" },
];

export default function Navbar() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "700" }}>FlavorMate</Text>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        {routesFromSchemas.map((route) => (
          <TouchableOpacity
            key={route.screen}
            onPress={() => navigation.navigate(route.screen)}
          >
            <Ionicons name={route.icon} size={22} color="#333" />
          </TouchableOpacity>
        ))}

        <TouchableOpacity onPress={() => console.log("Logout pressed")}>
          <Ionicons name="log-out-outline" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
