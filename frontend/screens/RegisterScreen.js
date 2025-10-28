import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import api from "../api/api";

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await api.post("/auth/register", { username, password });
      Alert.alert("Success", "Account created! Please login.");
      navigation.navigate("Login");
    } catch {
      Alert.alert("Error", "Registration failed");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", textAlign: "center" }}>Register 🍳</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={{ borderWidth: 1, marginVertical: 10, padding: 10, borderRadius: 10 }} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={{ borderWidth: 1, marginVertical: 10, padding: 10, borderRadius: 10 }} />
      <TouchableOpacity onPress={handleRegister} style={{ backgroundColor: "#FF7043", padding: 15, borderRadius: 10 }}>
        <Text style={{ textAlign: "center", color: "white" }}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
