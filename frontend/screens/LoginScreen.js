import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api/api";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { username, password });
      await AsyncStorage.setItem("token", res.data.access_token);
      navigation.navigate("Home");
    } catch (err) {
      Alert.alert("Login failed", "Check your credentials");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", textAlign: "center" }}>FlavorMate 🍲</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, marginVertical: 10, padding: 10, borderRadius: 10 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginVertical: 10, padding: 10, borderRadius: 10 }}
      />
      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: "#FF7043", padding: 15, borderRadius: 10 }}>
        <Text style={{ textAlign: "center", color: "white" }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={{ textAlign: "center", marginTop: 10 }}>No account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}
