// components/haptic-tab.tsx
import React from "react";
import { Pressable } from "react-native";
import * as Haptics from "expo-haptics";

type HapticTabProps = {
  onPress?: () => void;
  children: React.ReactNode;
};

/**
 * Wrapper for tab items that gives haptic feedback when pressed.
 */
export const HapticTab: React.FC<HapticTabProps> = ({ onPress, children }) => {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (onPress) onPress();
  };

  return (
    <Pressable onPress={handlePress}>
      {children}
    </Pressable>
  );
};

export default HapticTab;
