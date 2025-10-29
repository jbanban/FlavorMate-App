import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "expo-router/entry";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import ProfileScreen from "./screens/ProfileScreen";

// Inside your Stack or Tab.Navigator


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
        <Stack.Screen name="EditableProfile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
