// components/parallax-scroll-view.tsx
import React, { ReactNode } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

type ParallaxScrollViewProps = {
  headerImage: any;
  children: ReactNode;
};

export const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = ({
  headerImage,
  children,
}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground source={headerImage} style={styles.header} />
      <View style={styles.content}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  header: {
    height: SCREEN_HEIGHT * 0.3,
    width: "100%",
  },
  content: {
    padding: 16,
  },
});

export default ParallaxScrollView;
