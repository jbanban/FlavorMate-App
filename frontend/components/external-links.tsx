// components/external-link.tsx
import React from "react";
import { Linking, Text, StyleSheet, TouchableOpacity } from "react-native";

type ExternalLinkProps = {
  url: string;
  text: string;
};

export const ExternalLink: React.FC<ExternalLinkProps> = ({ url, text }) => {
  const handlePress = async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.warn("Cannot open URL:", url);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "#007AFF",
    fontWeight: "500",
  },
});

export default ExternalLink;
