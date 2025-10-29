import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function ProfileScreen() {
  const [user, setUser] = useState({
    username: "flavormate_user",
    email: "flavormate@example.com",
    bio: "Food enthusiast. Love to share delicious recipes 🍳",
  });

  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
    Alert.alert("Profile Updated", "Your information has been saved!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={[styles.input, !editing && styles.disabled]}
          value={user.username}
          editable={editing}
          onChangeText={(text) => setUser({ ...user, username: text })}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, !editing && styles.disabled]}
          value={user.email}
          editable={editing}
          onChangeText={(text) => setUser({ ...user, email: text })}
        />

        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={[styles.input, styles.textArea, !editing && styles.disabled]}
          value={user.bio}
          editable={editing}
          multiline
          onChangeText={(text) => setUser({ ...user, bio: text })}
        />
      </View>

      {!editing ? (
        <TouchableOpacity style={styles.editButton} onPress={() => setEditing(true)}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginTop: 5,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  disabled: {
    backgroundColor: "#f9f9f9",
  },
  editButton: {
    backgroundColor: "#FF7043",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
