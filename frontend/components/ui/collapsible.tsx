// components/ui/collapsible.tsx
import React, { useState, ReactNode } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type CollapsibleProps = {
  title: string;
  children: ReactNode;
};

export const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setOpen(!open)} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.toggle}>{open ? "−" : "+"}</Text>
      </TouchableOpacity>
      {open && <View style={styles.content}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  toggle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    marginTop: 8,
  },
});

export default Collapsible;
