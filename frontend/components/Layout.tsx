import React from "react";
import { View } from "react-native";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Navbar />
      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
        {children}
      </View>
    </View>
  );
}
