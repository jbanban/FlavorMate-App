import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FormInputProps {
  label: string;
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  placeholder,
  secureTextEntry,
  onChangeText,
}) => {
  const [hidden, setHidden] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={styles.input}
          secureTextEntry={hidden}
        />
        {secureTextEntry && (
          <Pressable onPress={() => setHidden(!hidden)}>
            <Ionicons
              name={hidden ? "eye-off" : "eye"}
              size={20}
              color="#555"
              style={styles.icon}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
    fontWeight: "500",
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 45,
  },
  icon: {
    marginLeft: 6,
  },
});
