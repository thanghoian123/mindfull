import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Example, MainScreen, Startup } from "@/screens";
import { useTheme } from "@/theme";

import type {
  ApplicationStackParamList,
  RootTabParamList,
} from "@/types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator key={variant} screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="Startup"
          component={Startup}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
