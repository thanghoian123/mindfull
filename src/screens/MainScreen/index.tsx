import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import { useTheme } from "@/theme";
import { Brand } from "@/components/molecules";
import { SafeScreen } from "@/components/template";

import type {
  ApplicationScreenProps,
  RootTabParamList,
} from "@/types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ChatScreen, ReportScreen } from "@/screens";

const Tab = createBottomTabNavigator<RootTabParamList>();

function MainScreen({ navigation }: ApplicationScreenProps) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarIcon: ({ color, size }) => {
        //   let iconName;
        //   if (route.name === 'Home') {
        //     iconName = 'home-outline';
        //   } else if (route.name === 'Settings') {
        //     iconName = 'settings-outline';
        //   }
        //   return <Icon name={iconName} size={size} color={color} />;
        // },
        headerShown: false, // Hide header in bottom tab screens
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ReportScreen" component={ReportScreen} />
    </Tab.Navigator>
  );
}

export default MainScreen;
