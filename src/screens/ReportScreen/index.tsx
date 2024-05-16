// screens/ReportScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ReportScreen = () => {
  return (
    <View style={styles.container}>
      <Text>report Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ReportScreen;
