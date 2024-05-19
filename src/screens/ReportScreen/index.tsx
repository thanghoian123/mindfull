// screens/ReportScreen.tsx
import { useTheme } from "@/theme";
import {
  ApplicationStackParamList,
  ReportStackParamList,
} from "@/types/navigation";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StressAndMoodTrackingScreen from "./screens/StressAndMoodTrackerScreen";

const Stack = createStackNavigator<ReportStackParamList>();

const ReportScreen = () => {
  const { variant, navigationTheme } = useTheme();

  return (
    <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="StressAndMoodTrackingScreen"
        component={StressAndMoodTrackingScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default ReportScreen;
